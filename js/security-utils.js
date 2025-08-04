/**
 * FOMUS PARURE - Security Utilities
 * セキュリティ関連のユーティリティ関数
 * 
 * @author FOMUS PARURE Security Team
 * @version 1.0.0
 * @date 2024-08-03
 */

(function(window) {
    'use strict';

    // セキュリティユーティリティのネームスペース
    const SecurityUtils = {
        
        /**
         * HTMLエスケープ処理
         * @param {string} str - エスケープする文字列
         * @returns {string} エスケープされた文字列
         */
        escapeHTML: function(str) {
            if (typeof str !== 'string') return '';
            
            const div = document.createElement('div');
            div.textContent = str;
            return div.innerHTML;
        },

        /**
         * XSS攻撃を防ぐための文字列サニタイズ
         * @param {string} input - サニタイズする入力
         * @returns {string} サニタイズされた文字列
         */
        sanitizeInput: function(input) {
            if (typeof input !== 'string') return '';
            
            return input
                .trim()
                .replace(/[<>]/g, '') // HTMLタグを除去
                .replace(/javascript:/gi, '') // javascriptプロトコルを除去
                .replace(/on\w+=/gi, '') // イベントハンドラを除去
                .substring(0, 1000); // 長さ制限
        },

        /**
         * 安全なDOM要素作成
         * @param {string} tagName - タグ名
         * @param {string} textContent - テキストコンテンツ
         * @param {Object} attributes - 属性オブジェクト
         * @returns {HTMLElement} 作成された要素
         */
        createElement: function(tagName, textContent, attributes = {}) {
            const element = document.createElement(tagName);
            
            if (textContent) {
                element.textContent = this.sanitizeInput(textContent);
            }
            
            for (const [key, value] of Object.entries(attributes)) {
                if (this.isValidAttribute(key)) {
                    element.setAttribute(key, this.sanitizeInput(value));
                }
            }
            
            return element;
        },

        /**
         * 有効な属性かチェック
         * @param {string} attributeName - 属性名
         * @returns {boolean} 有効かどうか
         */
        isValidAttribute: function(attributeName) {
            const validAttributes = [
                'id', 'class', 'href', 'src', 'alt', 'title', 
                'data-*', 'aria-*', 'role', 'tabindex'
            ];
            
            // イベントハンドラ属性は許可しない
            if (attributeName.toLowerCase().startsWith('on')) {
                return false;
            }
            
            return validAttributes.some(valid => {
                if (valid.endsWith('*')) {
                    return attributeName.startsWith(valid.slice(0, -1));
                }
                return attributeName === valid;
            });
        },

        /**
         * メール形式の検証
         * @param {string} email - 検証するメールアドレス
         * @returns {boolean} 有効かどうか
         */
        validateEmail: function(email) {
            if (typeof email !== 'string') return false;
            
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(email) && email.length <= 254;
        },

        /**
         * 電話番号形式の検証
         * @param {string} phone - 検証する電話番号
         * @returns {boolean} 有効かどうか
         */
        validatePhone: function(phone) {
            if (typeof phone !== 'string') return false;
            
            const cleanPhone = phone.replace(/\D/g, '');
            return cleanPhone.length >= 10 && cleanPhone.length <= 15;
        },

        /**
         * 安全なlocalStorage設定
         * @param {string} key - キー
         * @param {*} value - 値
         * @param {number} expiryHours - 有効期限（時間）
         */
        setSecureStorage: function(key, value, expiryHours = 24) {
            try {
                const sanitizedKey = this.sanitizeInput(key);
                const data = {
                    value: value,
                    expiry: Date.now() + (expiryHours * 60 * 60 * 1000),
                    checksum: this.generateChecksum(JSON.stringify(value))
                };
                
                localStorage.setItem(`fomus_${sanitizedKey}`, JSON.stringify(data));
            } catch (error) {
                console.warn('Secure storage failed:', error);
            }
        },

        /**
         * 安全なlocalStorage取得
         * @param {string} key - キー
         * @returns {*} 値またはnull
         */
        getSecureStorage: function(key) {
            try {
                const sanitizedKey = this.sanitizeInput(key);
                const stored = localStorage.getItem(`fomus_${sanitizedKey}`);
                
                if (!stored) return null;
                
                const data = JSON.parse(stored);
                
                // 有効期限チェック
                if (Date.now() > data.expiry) {
                    localStorage.removeItem(`fomus_${sanitizedKey}`);
                    return null;
                }
                
                // チェックサム検証
                const expectedChecksum = this.generateChecksum(JSON.stringify(data.value));
                if (data.checksum !== expectedChecksum) {
                    console.warn('Data integrity check failed');
                    localStorage.removeItem(`fomus_${sanitizedKey}`);
                    return null;
                }
                
                return data.value;
            } catch (error) {
                console.warn('Secure storage retrieval failed:', error);
                return null;
            }
        },

        /**
         * 簡単なチェックサム生成
         * @param {string} str - 文字列
         * @returns {string} チェックサム
         */
        generateChecksum: function(str) {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                const char = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash = hash & hash; // 32bit整数に変換
            }
            return hash.toString(36);
        },

        /**
         * CSRFトークン生成
         * @returns {string} CSRFトークン
         */
        generateCSRFToken: function() {
            const array = new Uint8Array(32);
            crypto.getRandomValues(array);
            return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
        },

        /**
         * レート制限チェック
         * @param {string} action - アクション名
         * @param {number} maxRequests - 最大リクエスト数
         * @param {number} windowMs - 時間窓（ミリ秒）
         * @returns {boolean} 許可されるかどうか
         */
        checkRateLimit: function(action, maxRequests = 10, windowMs = 60000) {
            const key = `rateLimit_${action}`;
            const now = Date.now();
            
            let requests = this.getSecureStorage(key) || [];
            
            // 古いリクエストを削除
            requests = requests.filter(timestamp => now - timestamp < windowMs);
            
            if (requests.length >= maxRequests) {
                return false;
            }
            
            requests.push(now);
            this.setSecureStorage(key, requests, 1);
            
            return true;
        },

        /**
         * URLの安全性チェック
         * @param {string} url - チェックするURL
         * @returns {boolean} 安全かどうか
         */
        isUrlSafe: function(url) {
            if (typeof url !== 'string') return false;
            
            try {
                const urlObj = new URL(url);
                
                // 許可されたプロトコル
                const allowedProtocols = ['http:', 'https:', 'mailto:'];
                if (!allowedProtocols.includes(urlObj.protocol)) {
                    return false;
                }
                
                // 許可されたドメイン（必要に応じて調整）
                const allowedDomains = [
                    'fomus-parure.com',
                    'stripe.com',
                    'js.stripe.com',
                    'fonts.googleapis.com',
                    'fonts.gstatic.com'
                ];
                
                if (urlObj.protocol !== 'mailto:') {
                    const isAllowed = allowedDomains.some(domain => 
                        urlObj.hostname === domain || urlObj.hostname.endsWith('.' + domain)
                    );
                    
                    if (!isAllowed) {
                        return false;
                    }
                }
                
                return true;
            } catch (error) {
                return false;
            }
        },

        /**
         * セキュリティイベントのログ記録
         * @param {string} event - イベント名
         * @param {Object} details - 詳細情報
         */
        logSecurityEvent: function(event, details = {}) {
            const logEntry = {
                timestamp: new Date().toISOString(),
                event: event,
                details: details,
                userAgent: navigator.userAgent,
                url: window.location.href
            };
            
            console.warn('Security Event:', logEntry);
            
            // 実際の実装では、サーバーにログを送信
            // this.sendToServer('/api/security-log', logEntry);
        },

        /**
         * フォーム送信前のセキュリティチェック
         * @param {HTMLFormElement} form - フォーム要素
         * @returns {boolean} 送信可能かどうか
         */
        validateFormSecurity: function(form) {
            if (!form || !(form instanceof HTMLFormElement)) {
                return false;
            }
            
            // レート制限チェック
            if (!this.checkRateLimit('form_submit', 5, 300000)) { // 5分間に5回まで
                this.logSecurityEvent('rate_limit_exceeded', { formId: form.id });
                alert('送信回数が上限に達しました。しばらくお待ちください。');
                return false;
            }
            
            // フォームデータの検証
            const formData = new FormData(form);
            for (const [key, value] of formData.entries()) {
                if (typeof value === 'string') {
                    // 悪意のあるコンテンツの検出
                    if (this.containsMaliciousContent(value)) {
                        this.logSecurityEvent('malicious_input_detected', { 
                            field: key, 
                            value: value.substring(0, 100) 
                        });
                        alert('入力内容に問題があります。再度確認してください。');
                        return false;
                    }
                }
            }
            
            return true;
        },

        /**
         * 悪意のあるコンテンツの検出
         * @param {string} input - 入力文字列
         * @returns {boolean} 悪意があるかどうか
         */
        containsMaliciousContent: function(input) {
            if (typeof input !== 'string') return false;
            
            const maliciousPatterns = [
                /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                /javascript:/gi,
                /on\w+\s*=/gi,
                /eval\s*\(/gi,
                /document\.cookie/gi,
                /window\.location/gi,
                /<iframe/gi,
                /<object/gi,
                /<embed/gi
            ];
            
            return maliciousPatterns.some(pattern => pattern.test(input));
        },

        /**
         * 初期化処理
         */
        init: function() {
            // ページ読み込み時のセキュリティチェック
            this.performInitialSecurityChecks();
            
            // グローバルエラーハンドラー
            window.addEventListener('error', (event) => {
                this.logSecurityEvent('javascript_error', {
                    message: event.message,
                    filename: event.filename,
                    lineno: event.lineno
                });
            });
            
            // フォーム送信の監視
            document.addEventListener('submit', (event) => {
                if (!this.validateFormSecurity(event.target)) {
                    event.preventDefault();
                }
            });
            
            console.log('FOMUS PARURE Security Utils initialized');
        },

        /**
         * 初期セキュリティチェック
         */
        performInitialSecurityChecks: function() {
            // URLパラメータのチェック
            const urlParams = new URLSearchParams(window.location.search);
            for (const [key, value] of urlParams) {
                if (this.containsMaliciousContent(value)) {
                    this.logSecurityEvent('malicious_url_parameter', { key, value });
                    window.location.href = window.location.pathname;
                    return;
                }
            }
            
            // ローカルストレージのクリーンアップ
            this.cleanupExpiredStorage();
        },

        /**
         * 期限切れのストレージアイテムをクリーンアップ
         */
        cleanupExpiredStorage: function() {
            const keys = Object.keys(localStorage);
            const fomusKeys = keys.filter(key => key.startsWith('fomus_'));
            
            fomusKeys.forEach(key => {
                try {
                    const data = JSON.parse(localStorage.getItem(key));
                    if (data && data.expiry && Date.now() > data.expiry) {
                        localStorage.removeItem(key);
                    }
                } catch (error) {
                    // 無効なデータは削除
                    localStorage.removeItem(key);
                }
            });
        }
    };

    // グローバルに公開
    window.SecurityUtils = SecurityUtils;

    // DOM読み込み完了後に初期化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => SecurityUtils.init());
    } else {
        SecurityUtils.init();
    }

})(window);