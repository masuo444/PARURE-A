// FOMUS PARURE - Pricing Management

// 価格データベース（€統一価格）
const priceDatabase = {
    'mori': {
        'ring': { eu: 1295 },
        'earring': { eu: 1295 },
        'necklace': { eu: 1295 }
    },
    'ten': {
        'basic': { eu: 2000 },
        'standard': { eu: 4000 },
        'premium': { eu: 10000 }
    },
    'kiwami': {
        'ultimate-set': { eu: 20000 }
    }
};

// 通貨設定（€統一）
const currencySettings = {
    eu: { symbol: '€', format: 'EUR' }
};

// 価格フォーマット関数
function formatPrice(price) {
    return `€${price.toLocaleString()}`;
}

// 価格更新（€統一価格）
function updatePrices() {
    // 商品詳細ページの価格を更新
    document.querySelectorAll('[data-price-key]').forEach(element => {
        const priceKey = element.dataset.priceKey;
        const [collection, item] = priceKey.split(':');
        
        if (priceDatabase[collection] && priceDatabase[collection][item]) {
            const price = priceDatabase[collection][item].eu;
            
            // 天プランの特別フォーマット
            if (collection === 'ten') {
                element.textContent = `€${price.toLocaleString()}〜`;
            } else {
                element.textContent = formatPrice(price);
            }
        }
    });

    // メインページの価格範囲を更新
    updateCollectionPrices();
}

// コレクション価格範囲の更新
function updateCollectionPrices() {
    const collectionPrices = {
        mori: '€1,295',
        ten: '€2,000〜',
        kiwami: '€20,000'
    };

    // メインページの価格表示を更新
    document.querySelectorAll('.product-card__price').forEach(element => {
        const collection = element.getAttribute('data-collection');
        if (collection && collectionPrices[collection]) {
            element.textContent = collectionPrices[collection];
        }
    });
}

// 価格表示の国際化対応（€統一）
function formatCurrency(amount) {
    return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
    }).format(amount);
}

// 価格表示の初期化
function initializePricing() {
    // 初期価格を設定
    updatePrices();
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

// 価格取得（€統一）
function getPrice(collection, item) {
    if (priceDatabase[collection] && priceDatabase[collection][item]) {
        return priceDatabase[collection][item].eu;
    }
    return null;
}

// 動的価格計算（将来の拡張用）
function calculateDynamicPrice(basePrice, options = {}) {
    let finalPrice = basePrice;
    
    // オプション価格の追加
    if (options.premium) {
        finalPrice *= 1.2;
    }
    
    if (options.express) {
        finalPrice += 50; // €50 express fee
    }
    
    return Math.round(finalPrice);
}

// 価格データの検証
function validatePriceData() {
    let isValid = true;
    
    for (const collection in priceDatabase) {
        for (const item in priceDatabase[collection]) {
            const prices = priceDatabase[collection][item];
            if (!prices.eu) {
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
    
    // 価格表示の初期化
    initializePricing();
    
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
async function fetchPriceFromAPI(productId) {
    try {
        const response = await fetch(`/api/price/${productId}`);
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
function recordPriceView(collection, item) {
    const viewData = {
        collection,
        item,
        timestamp: new Date().toISOString(),
        price: priceDatabase[collection][item].eu
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
        initializePricing,
        getPrice
    };
}