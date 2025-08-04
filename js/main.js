// FOMUS PARURE - Main JavaScript

// ヘッダーのスクロール効果
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// スクロール時のアニメーション
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// アニメーション対象の要素を監視
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.testimonial, .guarantee__item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// モバイルメニューの切り替え
const navToggle = document.querySelector('#nav-toggle');
const navMenu = document.querySelector('.nav__menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        
        // ハンバーガーメニューアニメーション
        const spans = navToggle.querySelectorAll('span');
        if (navToggle.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // メニューリンククリック時にメニューを閉じる
    navMenu.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// パララックス効果を無効化

// レスポンシブ画像の遅延読み込み
document.addEventListener('DOMContentLoaded', () => {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
});

// キーボードナビゲーション
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // モーダルやメニューを閉じる
        const activeModal = document.querySelector('.modal--active');
        if (activeModal) {
            activeModal.classList.remove('modal--active');
        }
        
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
});

// フォームのバリデーション
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// ローディングアニメーション
function showLoading() {
    const loader = document.createElement('div');
    loader.className = 'loader';
    
    // セキュア：innerHTMLではなく要素作成を使用
    const spinner = document.createElement('div');
    spinner.className = 'loader__spinner';
    loader.appendChild(spinner);
    
    document.body.appendChild(loader);
}

function hideLoading() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.remove();
    }
}

// コレクションページへのナビゲーション
function navigateToCollection(collectionType) {
    const collectionUrls = {
        'mori': 'mori.html',
        'tsuki': 'tsuki.html',
        'ten': 'ten.html',
        'kiwami': 'kiwami.html'
    };
    
    if (collectionUrls[collectionType]) {
        window.location.href = collectionUrls[collectionType];
    }
}

// 製品カードのクリック処理
document.querySelectorAll('.product-card__btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const href = button.getAttribute('href');
        if (href) {
            window.location.href = href;
        }
    });
});

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
                
                // セキュア：innerHTMLではなく要素作成を使用
                element.textContent = `${currency.symbol}${price.toLocaleString()}`;
                const fromSpan = document.createElement('span');
                fromSpan.style.fontSize = '16px';
                fromSpan.textContent = fromText;
                element.appendChild(fromSpan);
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
        updatePrices(e.target.value);
    });
}

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', () => {
    initializeRegionSelector();
});


// 追加のユーティリティ関数
function fadeIn(element, duration = 300) {
    element.style.opacity = 0;
    element.style.display = 'block';
    
    const start = performance.now();
    
    function animate(currentTime) {
        const elapsed = currentTime - start;
        const progress = elapsed / duration;
        
        if (progress < 1) {
            element.style.opacity = progress;
            requestAnimationFrame(animate);
        } else {
            element.style.opacity = 1;
        }
    }
    
    requestAnimationFrame(animate);
}

function fadeOut(element, duration = 300) {
    const start = performance.now();
    const startOpacity = parseFloat(getComputedStyle(element).opacity);
    
    function animate(currentTime) {
        const elapsed = currentTime - start;
        const progress = elapsed / duration;
        
        if (progress < 1) {
            element.style.opacity = startOpacity * (1 - progress);
            requestAnimationFrame(animate);
        } else {
            element.style.opacity = 0;
            element.style.display = 'none';
        }
    }
    
    requestAnimationFrame(animate);
}

// スライドショー機能
let slideIndex = 1;

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    // 全てのスライドを非表示
    slides.forEach(slide => slide.style.display = 'none');
    
    // 全てのドットを非アクティブ
    dots.forEach(dot => {
        dot.style.backgroundColor = '#bbb';
        dot.classList.remove('active');
    });
    
    // 現在のスライドを表示
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = 'block';
    }
    
    // 現在のドットをアクティブ
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].style.backgroundColor = '#333';
        dots[slideIndex - 1].classList.add('active');
    }
}

// 自動スライド（5秒間隔）
setInterval(() => {
    changeSlide(1);
}, 5000);