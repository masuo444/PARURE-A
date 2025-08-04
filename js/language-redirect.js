// FOMUS PARURE - Language Redirect System
// 初回訪問時の言語選択ページへのリダイレクト機能

class LanguageRedirectManager {
    constructor() {
        this.storageKeys = {
            language: 'fomus_language',
            selected: 'fomus_language_selected',
            firstVisit: 'fomus_first_visit'
        };
        
        this.initialize();
    }
    
    initialize() {
        // 現在のページが言語選択ページかどうかチェック
        const isLanguageSelectPage = window.location.pathname.includes('language-select.html');
        
        if (isLanguageSelectPage) {
            // 言語選択ページでは何もしない
            return;
        }
        
        // 初回訪問かどうかをチェック
        if (this.isFirstVisit()) {
            this.redirectToLanguageSelect();
        } else {
            // 既存ユーザーの場合、保存された言語設定を適用
            this.applyStoredLanguage();
        }
    }
    
    // 初回訪問かどうかを判定
    isFirstVisit() {
        const hasSelectedLanguage = localStorage.getItem(this.storageKeys.selected);
        const hasVisitedBefore = localStorage.getItem(this.storageKeys.firstVisit);
        
        // 言語選択済み、または以前訪問済みの場合は初回訪問ではない
        if (hasSelectedLanguage || hasVisitedBefore) {
            return false;
        }
        
        // セッションストレージでの重複チェック
        const sessionFirstVisit = sessionStorage.getItem('fomus_session_first_visit');
        if (sessionFirstVisit) {
            return false;
        }
        
        return true;
    }
    
    // 言語選択ページにリダイレクト
    redirectToLanguageSelect() {
        // セッション内での重複リダイレクトを防ぐ
        sessionStorage.setItem('fomus_session_first_visit', 'true');
        
        // 現在のページを記録（言語選択後に戻るため）
        const currentPath = window.location.pathname + window.location.search + window.location.hash;
        sessionStorage.setItem('fomus_return_path', currentPath);
        
        // スムーズなリダイレクト
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s ease';
        
        setTimeout(() => {
            window.location.href = 'language-select.html';
        }, 300);
        
        // Analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'first_visit_redirect', {
                'event_category': 'internationalization',
                'event_label': 'language_select_redirect',
                'from_page': window.location.pathname
            });
        }
    }
    
    // 保存された言語設定を適用
    applyStoredLanguage() {
        const savedLanguage = localStorage.getItem(this.storageKeys.language);
        
        if (savedLanguage && window.languageManager) {
            // 少し遅延させて言語管理システムが初期化されるのを待つ
            setTimeout(() => {
                if (window.languageManager.getCurrentLanguage() !== savedLanguage) {
                    window.languageManager.changeLanguage(savedLanguage);
                }
            }, 100);
        }
    }
    
    // 言語選択完了時の処理（language-select.htmlから呼び出される）
    static handleLanguageSelection(languageCode) {
        // 言語設定を保存
        localStorage.setItem('fomus_language', languageCode);
        localStorage.setItem('fomus_language_selected', 'true');
        localStorage.setItem('fomus_first_visit', 'false');
        
        // 戻り先のパスを取得
        const returnPath = sessionStorage.getItem('fomus_return_path');
        sessionStorage.removeItem('fomus_return_path');
        
        // リダイレクト先を決定
        let redirectUrl = 'index.html';
        if (returnPath && returnPath !== '/' && !returnPath.includes('language-select.html')) {
            // 元のページが有効な場合は元のページに戻る
            redirectUrl = returnPath.startsWith('/') ? returnPath.substring(1) : returnPath;
        }
        
        return redirectUrl;
    }
    
    // ユーザーが手動で言語を変更した時の処理
    static updateLanguagePreference(languageCode) {
        localStorage.setItem('fomus_language', languageCode);
        localStorage.setItem('fomus_language_selected', 'true');
        
        // Analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'language_change_manual', {
                'event_category': 'internationalization',
                'event_label': languageCode,
                'from_page': window.location.pathname
            });
        }
    }
    
    // 言語設定をリセット（開発・テスト用）
    static resetLanguageSettings() {
        localStorage.removeItem('fomus_language');
        localStorage.removeItem('fomus_language_selected');
        localStorage.removeItem('fomus_first_visit');
        sessionStorage.removeItem('fomus_session_first_visit');
        sessionStorage.removeItem('fomus_return_path');
        
        console.log('言語設定をリセットしました');
    }
    
    // デバッグ情報を表示
    static getDebugInfo() {
        return {
            language: localStorage.getItem('fomus_language'),
            selected: localStorage.getItem('fomus_language_selected'),
            firstVisit: localStorage.getItem('fomus_first_visit'),
            sessionFirstVisit: sessionStorage.getItem('fomus_session_first_visit'),
            returnPath: sessionStorage.getItem('fomus_return_path'),
            currentPath: window.location.pathname
        };
    }
}

// 特定の条件下でリダイレクトを無効化する機能
class RedirectExceptionManager {
    static shouldSkipRedirect() {
        // URLパラメータでリダイレクトをスキップ
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('skip_lang_redirect') === 'true') {
            return true;
        }
        
        // 開発環境での自動スキップ
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            const devSkip = urlParams.get('dev_skip_redirect');
            if (devSkip === 'true') {
                return true;
            }
        }
        
        // 検索エンジンボットなどのチェック
        const userAgent = navigator.userAgent.toLowerCase();
        const bots = ['googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider'];
        if (bots.some(bot => userAgent.includes(bot))) {
            return true;
        }
        
        return false;
    }
}

// ページ読み込み時に初期化
document.addEventListener('DOMContentLoaded', () => {
    // リダイレクト例外チェック
    if (RedirectExceptionManager.shouldSkipRedirect()) {
        console.log('言語リダイレクトをスキップしました');
        return;
    }
    
    // 言語リダイレクトマネージャーを初期化
    window.languageRedirectManager = new LanguageRedirectManager();
});

// 言語選択ページでの使用のためにグローバル関数として公開
window.selectLanguage = function(languageCode) {
    const redirectUrl = LanguageRedirectManager.handleLanguageSelection(languageCode);
    
    // 選択された言語オプションにフィードバック
    const selectedOption = document.querySelector(`[data-lang="${languageCode}"]`);
    if (selectedOption) {
        selectedOption.style.transform = 'scale(0.95)';
        selectedOption.style.background = '#27ae60';
        selectedOption.style.color = 'white';
        
        setTimeout(() => {
            selectedOption.style.transform = 'scale(1.05)';
        }, 100);
        
        setTimeout(() => {
            selectedOption.style.transform = 'scale(1)';
        }, 200);
    }
    
    // 遅延してリダイレクト
    setTimeout(() => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            window.location.href = redirectUrl;
        }, 500);
    }, 800);
    
    // Analytics tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'language_selection', {
            'event_category': 'internationalization',
            'event_label': languageCode,
            'event_context': 'initial_visit',
            'redirect_url': redirectUrl
        });
    }
};

// 開発・デバッグ用のグローバル関数
window.fomusDebug = {
    resetLanguage: LanguageRedirectManager.resetLanguageSettings,
    getDebugInfo: LanguageRedirectManager.getDebugInfo,
    forceLanguageSelect: () => {
        LanguageRedirectManager.resetLanguageSettings();
        window.location.href = 'language-select.html';
    }
};

// エクスポート（モジュール環境での使用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        LanguageRedirectManager,
        RedirectExceptionManager
    };
}