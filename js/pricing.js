// FOMUS PARURE - Pricing Management

// 価格データベース
const priceDatabase = {
    'mori': {
        'ring': { jp: 18000, us: 220 },
        'earring': { jp: 22000, us: 280 },
        'necklace': { jp: 28000, us: 350 }
    },
    'tsuki': {
        'kanzashi': { jp: 85000, us: 1050 },
        'crescent-earring': { jp: 65000, us: 820 },
        'moonlight-necklace': { jp: 120000, us: 1480 },
        'newmoon-ring': { jp: 55000, us: 690 }
    },
    'ten': {
        'basic': { jp: 150000, us: 1850 },
        'standard': { jp: 300000, us: 3700 },
        'premium': { jp: 500000, us: 6200 }
    },
    'kiwami': {
        'ultimate-set': { jp: 2800000, us: 34500 }
    }
};

// 通貨設定
const currencySettings = {
    jp: { symbol: '¥', format: 'JPY' },
    us: { symbol: '$', format: 'USD' }
};

// 価格フォーマット関数
function formatPrice(price, region) {
    const currency = currencySettings[region];
    if (region === 'jp') {
        return `${currency.symbol}${price.toLocaleString()} (税込)`;
    } else {
        return `${currency.symbol}${price.toLocaleString()}`;
    }
}

// 地域変更時の価格更新
function updatePrices(region) {
    // 商品詳細ページの価格を更新
    document.querySelectorAll('[data-price-key]').forEach(element => {
        const priceKey = element.dataset.priceKey;
        const [collection, item] = priceKey.split(':');
        
        if (priceDatabase[collection] && priceDatabase[collection][item]) {
            const price = priceDatabase[collection][item][region];
            
            // 天プランの特別フォーマット
            if (collection === 'ten') {
                const currency = currencySettings[region];
                const fromText = region === 'jp' ? 'から' : '+';
                element.innerHTML = `${currency.symbol}${price.toLocaleString()}<span style="font-size: 16px;">${fromText}</span>`;
            } else {
                element.textContent = formatPrice(price, region);
            }
        }
    });

    // メインページの価格範囲を更新
    updateCollectionPrices(region);
    
    // ローカルストレージに地域設定を保存
    localStorage.setItem('selectedRegion', region);
}

// コレクション価格範囲の更新
function updateCollectionPrices(region) {
    const collectionPrices = {
        mori: region === 'jp' ? '¥18,000〜' : '$220〜',
        tsuki: region === 'jp' ? '¥55,000〜' : '$690〜', 
        ten: region === 'jp' ? '¥150,000〜' : '$1,850〜',
        kiwami: region === 'jp' ? '¥2,800,000' : '$34,500'
    };

    // メインページの価格表示を更新
    document.querySelectorAll('.product-card__price').forEach(element => {
        const collection = element.getAttribute('data-collection');
        if (collection && collectionPrices[collection]) {
            element.textContent = collectionPrices[collection];
        }
    });
}

// 価格表示の国際化対応
function formatCurrency(amount, region) {
    if (region === 'jp') {
        return new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'JPY'
        }).format(amount);
    } else {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    }
}

// 地域選択の初期化
function initializeRegionSelector() {
    const regionSelector = document.getElementById('region-select');
    if (!regionSelector) return;

    // 保存された地域設定を読み込み
    const savedRegion = localStorage.getItem('selectedRegion') || 'jp';
    regionSelector.value = savedRegion;
    
    // 初期価格を設定
    updatePrices(savedRegion);
    
    // 地域変更イベントリスナー
    regionSelector.addEventListener('change', (e) => {
        const newRegion = e.target.value;
        updatePrices(newRegion);
        
        // Analytics イベント送信（もしGAが設定されている場合）
        if (typeof gtag !== 'undefined') {
            gtag('event', 'region_change', {
                'event_category': 'pricing',
                'event_label': newRegion
            });
        }
    });
}

// 価格アニメーション
function animatePriceChange(element, newPrice) {
    element.style.transition = 'opacity 0.3s ease';
    element.style.opacity = '0.5';
    
    setTimeout(() => {
        element.textContent = newPrice;
        element.style.opacity = '1';
    }, 150);
}

// 価格比較表示（オプション機能）
function showPriceComparison(collection, item) {
    const jpPrice = priceDatabase[collection][item].jp;
    const usPrice = priceDatabase[collection][item].us;
    
    return {
        jp: formatPrice(jpPrice, 'jp'),
        us: formatPrice(usPrice, 'us'),
        difference: Math.round((usPrice * 110 - jpPrice) / jpPrice * 100) // 簡易換算
    };
}

// 動的価格計算（将来の拡張用）
function calculateDynamicPrice(basePrice, region, options = {}) {
    let finalPrice = basePrice;
    
    // 地域による価格調整
    if (region === 'us') {
        finalPrice = Math.round(basePrice / 110); // 簡易換算レート
    }
    
    // オプション価格の追加
    if (options.premium) {
        finalPrice *= 1.2;
    }
    
    if (options.express) {
        finalPrice += (region === 'jp' ? 5000 : 50);
    }
    
    return Math.round(finalPrice);
}

// 価格データの検証
function validatePriceData() {
    let isValid = true;
    
    for (const collection in priceDatabase) {
        for (const item in priceDatabase[collection]) {
            const prices = priceDatabase[collection][item];
            if (!prices.jp || !prices.us) {
                console.error(`価格データが不完全です: ${collection}.${item}`);
                isValid = false;
            }
        }
    }
    
    return isValid;
}

// エラーハンドリング
function handlePricingError(error, element) {
    console.error('価格表示エラー:', error);
    if (element) {
        element.textContent = 'お問い合わせください';
        element.style.color = '#999';
    }
}

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', () => {
    // 価格データの検証
    if (!validatePriceData()) {
        console.warn('価格データに問題があります');
    }
    
    // 地域選択器の初期化
    initializeRegionSelector();
    
    // 既存の価格要素にエラーハンドリングを追加
    document.querySelectorAll('[data-price-key]').forEach(element => {
        try {
            const priceKey = element.dataset.priceKey;
            if (!priceKey) {
                throw new Error('価格キーが設定されていません');
            }
        } catch (error) {
            handlePricingError(error, element);
        }
    });
});

// 外部API用の価格取得（将来の拡張用）
async function fetchPriceFromAPI(productId, region) {
    try {
        const response = await fetch(`/api/price/${productId}?region=${region}`);
        if (!response.ok) {
            throw new Error('価格取得に失敗しました');
        }
        return await response.json();
    } catch (error) {
        console.error('API価格取得エラー:', error);
        return null;
    }
}

// 価格履歴の記録（オプション機能）
function recordPriceView(collection, item, region) {
    const viewData = {
        collection,
        item,
        region,
        timestamp: new Date().toISOString(),
        price: priceDatabase[collection][item][region]
    };
    
    // ローカルストレージに記録
    const history = JSON.parse(localStorage.getItem('priceViewHistory') || '[]');
    history.push(viewData);
    
    // 最新50件のみ保持
    if (history.length > 50) {
        history.shift();
    }
    
    localStorage.setItem('priceViewHistory', JSON.stringify(history));
}

// エクスポート（モジュール環境での使用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        priceDatabase,
        formatPrice,
        updatePrices,
        updateCollectionPrices,
        initializeRegionSelector
    };
}