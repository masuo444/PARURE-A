// ショッピングカート機能
class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('fomus_cart') || '[]');
        this.isOpen = false;
        this.init();
    }

    init() {
        this.createCartButton();
        this.createCartOverlay();
        this.updateCartCount();
        this.bindEvents();
    }

    createCartButton() {
        const header = document.querySelector('.header .nav');
        if (!header) return;

        const cartButton = document.createElement('div');
        cartButton.className = 'cart-button';
        
        // Create button element securely
        const button = document.createElement('button');
        button.className = 'cart-button__btn';
        button.id = 'cart-toggle';
        
        // Create SVG element securely
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '24');
        svg.setAttribute('height', '24');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('stroke-width', '2');
        
        const circle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle1.setAttribute('cx', '9');
        circle1.setAttribute('cy', '21');
        circle1.setAttribute('r', '1');
        
        const circle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle2.setAttribute('cx', '20');
        circle2.setAttribute('cy', '21');
        circle2.setAttribute('r', '1');
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'm1 1 4 4 2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6');
        
        svg.appendChild(circle1);
        svg.appendChild(circle2);
        svg.appendChild(path);
        
        // Create count span
        const countSpan = document.createElement('span');
        countSpan.className = 'cart-button__count';
        countSpan.id = 'cart-count';
        countSpan.textContent = '0';
        
        button.appendChild(svg);
        button.appendChild(countSpan);
        cartButton.appendChild(button);

        const regionSelector = header.querySelector('.nav__region');
        if (regionSelector) {
            regionSelector.parentNode.insertBefore(cartButton, regionSelector);
        }

        // CSS追加
        const style = document.createElement('style');
        style.textContent = `
            .cart-button {
                margin-right: 20px;
            }
            
            .cart-button__btn {
                position: relative;
                background: none;
                border: none;
                cursor: pointer;
                padding: 8px;
                border-radius: 50%;
                transition: all 0.3s ease;
                color: #333;
            }
            
            .cart-button__btn:hover {
                background: rgba(0,0,0,0.05);
                transform: scale(1.05);
            }
            
            .cart-button__count {
                position: absolute;
                top: -2px;
                right: -2px;
                background: #e74c3c;
                color: white;
                border-radius: 50%;
                font-size: 12px;
                font-weight: 600;
                min-width: 18px;
                height: 18px;
                display: flex;
                align-items: center;
                justify-content: center;
                transform: scale(0);
                transition: transform 0.3s ease;
            }
            
            .cart-button__count.has-items {
                transform: scale(1);
            }
        `;
        document.head.appendChild(style);
    }

    createCartOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'cart-overlay';
        overlay.id = 'cart-overlay';
        // NOTE: This innerHTML usage is acceptable as it creates static UI structure
        // with no user input. For improved security, this could be refactored to use createElement.
        overlay.innerHTML = `
            <div class="cart-sidebar">
                <div class="cart-header">
                    <h3 class="cart-title">Shopping Cart</h3>
                    <button class="cart-close" id="cart-close">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div class="cart-content">
                    <div class="cart-items" id="cart-items"></div>
                    <div class="cart-empty" id="cart-empty" style="display: none;">
                        <div class="cart-empty__icon">🛒</div>
                        <p class="cart-empty__text">Your cart is empty</p>
                        <p class="cart-empty__subtext">Add some beautiful pieces to get started</p>
                    </div>
                </div>
                <div class="cart-footer" id="cart-footer">
                    <div class="cart-total">
                        <div class="cart-total__row">
                            <span>Subtotal:</span>
                            <span id="cart-subtotal">¥0</span>
                        </div>
                        <div class="cart-total__row cart-total__row--main">
                            <span>Total:</span>
                            <span id="cart-total">¥0</span>
                        </div>
                    </div>
                    <button class="cart-checkout-btn" id="cart-checkout">
                        <span>Proceed to Checkout</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="m9 18 6-6-6-6"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        // CSS追加
        const style = document.createElement('style');
        style.textContent = `
            .cart-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.5);
                backdrop-filter: blur(4px);
                z-index: 1000;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            .cart-overlay.open {
                opacity: 1;
                visibility: visible;
            }
            
            .cart-sidebar {
                position: absolute;
                top: 0;
                right: 0;
                width: 100%;
                max-width: 450px;
                height: 100%;
                background: white;
                box-shadow: -10px 0 30px rgba(0,0,0,0.1);
                transform: translateX(100%);
                transition: transform 0.3s ease;
                display: flex;
                flex-direction: column;
            }
            
            .cart-overlay.open .cart-sidebar {
                transform: translateX(0);
            }
            
            .cart-header {
                display: flex;
                justify-content: between;
                align-items: center;
                padding: 24px;
                border-bottom: 1px solid #eee;
                background: #fafafa;
            }
            
            .cart-title {
                font-size: 24px;
                font-weight: 600;
                color: #333;
                margin: 0;
            }
            
            .cart-close {
                background: none;
                border: none;
                cursor: pointer;
                padding: 8px;
                border-radius: 50%;
                transition: all 0.3s ease;
                color: #666;
            }
            
            .cart-close:hover {
                background: rgba(0,0,0,0.1);
                color: #333;
            }
            
            .cart-content {
                flex: 1;
                overflow-y: auto;
                padding: 0;
            }
            
            .cart-items {
                padding: 0;
            }
            
            .cart-item {
                display: flex;
                padding: 20px 24px;
                border-bottom: 1px solid #f0f0f0;
                transition: background 0.3s ease;
            }
            
            .cart-item:hover {
                background: #fafafa;
            }
            
            .cart-item__image {
                width: 80px;
                height: 80px;
                border-radius: 8px;
                overflow: hidden;
                flex-shrink: 0;
                margin-right: 16px;
            }
            
            .cart-item__image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            
            .cart-item__info {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            
            .cart-item__name {
                font-size: 16px;
                font-weight: 600;
                color: #333;
                margin: 0 0 4px 0;
                line-height: 1.3;
            }
            
            .cart-item__price {
                font-size: 18px;
                font-weight: 700;
                color: #27ae60;
                margin: 0;
            }
            
            .cart-item__actions {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 12px;
            }
            
            .cart-item__quantity {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .quantity-btn {
                width: 32px;
                height: 32px;
                border: 1px solid #ddd;
                background: white;
                border-radius: 6px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                font-weight: 600;
            }
            
            .quantity-btn:hover {
                border-color: #27ae60;
                color: #27ae60;
            }
            
            .quantity-btn:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
            
            .cart-item__remove {
                background: none;
                border: none;
                color: #e74c3c;
                cursor: pointer;
                padding: 4px;
                border-radius: 4px;
                transition: all 0.3s ease;
                font-size: 14px;
            }
            
            .cart-item__remove:hover {
                background: rgba(231, 76, 60, 0.1);
            }
            
            .cart-empty {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 60px 24px;
                text-align: center;
                color: #666;
            }
            
            .cart-empty__icon {
                font-size: 48px;
                margin-bottom: 16px;
                opacity: 0.5;
            }
            
            .cart-empty__text {
                font-size: 20px;
                font-weight: 600;
                margin: 0 0 8px 0;
                color: #333;
            }
            
            .cart-empty__subtext {
                font-size: 16px;
                margin: 0;
                opacity: 0.7;
            }
            
            .cart-footer {
                padding: 24px;
                border-top: 1px solid #eee;
                background: #fafafa;
            }
            
            .cart-total {
                margin-bottom: 20px;
            }
            
            .cart-total__row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 8px 0;
                font-size: 16px;
            }
            
            .cart-total__row--main {
                font-size: 20px;
                font-weight: 700;
                border-top: 1px solid #ddd;
                padding-top: 16px;
                margin-top: 8px;
            }
            
            .cart-checkout-btn {
                width: 100%;
                background: linear-gradient(135deg, #27ae60, #2ecc71);
                color: white;
                border: none;
                padding: 16px 24px;
                border-radius: 12px;
                font-size: 18px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                box-shadow: 0 4px 12px rgba(39, 174, 96, 0.3);
            }
            
            .cart-checkout-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(39, 174, 96, 0.4);
            }
            
            @media (max-width: 768px) {
                .cart-sidebar {
                    max-width: 100%;
                }
                
                .cart-header {
                    padding: 20px 16px;
                }
                
                .cart-item {
                    padding: 16px;
                }
                
                .cart-footer {
                    padding: 20px 16px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    bindEvents() {
        // カートトグル
        document.addEventListener('click', (e) => {
            if (e.target.closest('#cart-toggle')) {
                this.toggleCart();
            }
            if (e.target.closest('#cart-close')) {
                this.closeCart();
            }
            if (e.target.closest('.cart-overlay') && !e.target.closest('.cart-sidebar')) {
                this.closeCart();
            }
            if (e.target.closest('#cart-checkout')) {
                this.proceedToCheckout();
            }
        });

        // ESCキーでカートを閉じる
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeCart();
            }
        });
    }

    addToCart(productId, collection = 'mori', quantity = 1) {
        const product = window.productManager.getProduct(collection, productId);
        if (!product) return false;

        const existingItem = this.items.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                id: productId,
                collection: collection,
                name: product.name,
                price: product.price,
                image: product.images[0],
                quantity: quantity
            });
        }

        this.saveCart();
        this.updateCartCount();
        this.renderCartItems();
        this.showAddedNotification(product);
        
        return true;
    }

    removeFromCart(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartCount();
        this.renderCartItems();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeFromCart(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
                this.renderCartItems();
            }
        }
    }

    toggleCart() {
        if (this.isOpen) {
            this.closeCart();
        } else {
            this.openCart();
        }
    }

    openCart() {
        this.isOpen = true;
        document.getElementById('cart-overlay').classList.add('open');
        document.body.style.overflow = 'hidden';
        this.renderCartItems();
    }

    closeCart() {
        this.isOpen = false;
        document.getElementById('cart-overlay').classList.remove('open');
        document.body.style.overflow = '';
    }

    updateCartCount() {
        const count = this.items.reduce((total, item) => total + item.quantity, 0);
        const countElement = document.getElementById('cart-count');
        if (countElement) {
            countElement.textContent = count;
            countElement.classList.toggle('has-items', count > 0);
        }
    }

    renderCartItems() {
        const cartItems = document.getElementById('cart-items');
        const cartEmpty = document.getElementById('cart-empty');
        const cartFooter = document.getElementById('cart-footer');

        if (this.items.length === 0) {
            while (cartItems.firstChild) {
                cartItems.removeChild(cartItems.firstChild);
            }
            cartEmpty.style.display = 'flex';
            cartFooter.style.display = 'none';
            return;
        }

        cartEmpty.style.display = 'none';
        cartFooter.style.display = 'block';

        const currency = '€';

        // Clear existing items
        while (cartItems.firstChild) {
            cartItems.removeChild(cartItems.firstChild);
        }
        
        // Create items securely
        this.items.forEach(item => {
            const cartItem = this.createCartItemElement(item, currency);
            cartItems.appendChild(cartItem);
        });

        this.updateCartTotal();
    }

    updateCartTotal() {
        const currency = '€';
        
        const subtotal = this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);

        document.getElementById('cart-subtotal').textContent = `${currency}${subtotal.toLocaleString()}`;
        document.getElementById('cart-total').textContent = `${currency}${subtotal.toLocaleString()}`;
    }

    createCartItemElement(item, currency) {
        // Create cart item container
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        // Create image container
        const imageDiv = document.createElement('div');
        imageDiv.className = 'cart-item__image';
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        imageDiv.appendChild(img);
        
        // Create info container
        const infoDiv = document.createElement('div');
        infoDiv.className = 'cart-item__info';
        
        // Create name
        const nameH4 = document.createElement('h4');
        nameH4.className = 'cart-item__name';
        nameH4.textContent = item.name;
        
        // Create price
        const priceP = document.createElement('p');
        priceP.className = 'cart-item__price';
        priceP.textContent = `${currency}${item.price.toLocaleString()}`;
        
        // Create actions container
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'cart-item__actions';
        
        // Create quantity container
        const quantityDiv = document.createElement('div');
        quantityDiv.className = 'cart-item__quantity';
        
        // Create minus button
        const minusBtn = document.createElement('button');
        minusBtn.className = 'quantity-btn';
        minusBtn.textContent = '−';
        if (item.quantity <= 1) minusBtn.disabled = true;
        minusBtn.addEventListener('click', () => this.updateQuantity(item.id, item.quantity - 1));
        
        // Create quantity span
        const quantitySpan = document.createElement('span');
        quantitySpan.textContent = item.quantity;
        
        // Create plus button
        const plusBtn = document.createElement('button');
        plusBtn.className = 'quantity-btn';
        plusBtn.textContent = '+';
        plusBtn.addEventListener('click', () => this.updateQuantity(item.id, item.quantity + 1));
        
        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.className = 'cart-item__remove';
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => this.removeFromCart(item.id));
        
        // Assemble the structure
        quantityDiv.appendChild(minusBtn);
        quantityDiv.appendChild(quantitySpan);
        quantityDiv.appendChild(plusBtn);
        
        actionsDiv.appendChild(quantityDiv);
        actionsDiv.appendChild(removeBtn);
        
        infoDiv.appendChild(nameH4);
        infoDiv.appendChild(priceP);
        infoDiv.appendChild(actionsDiv);
        
        cartItem.appendChild(imageDiv);
        cartItem.appendChild(infoDiv);
        
        return cartItem;
    }

    showAddedNotification(product) {
        // 追加通知の表示
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        // Create notification content securely
        const content = document.createElement('div');
        content.className = 'cart-notification__content';
        
        const icon = document.createElement('div');
        icon.className = 'cart-notification__icon';
        icon.textContent = '✓';
        
        const textDiv = document.createElement('div');
        textDiv.className = 'cart-notification__text';
        
        const title = document.createElement('div');
        title.className = 'cart-notification__title';
        title.textContent = 'Added to cart';
        
        const subtitle = document.createElement('div');
        subtitle.className = 'cart-notification__subtitle';
        subtitle.textContent = product.name;
        
        textDiv.appendChild(title);
        textDiv.appendChild(subtitle);
        content.appendChild(icon);
        content.appendChild(textDiv);
        notification.appendChild(content);

        // 通知スタイル
        const style = document.createElement('style');
        style.textContent = `
            .cart-notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: white;
                border-radius: 12px;
                box-shadow: 0 8px 30px rgba(0,0,0,0.15);
                z-index: 1001;
                transform: translateX(400px);
                transition: transform 0.3s ease;
                max-width: 300px;
            }
            
            .cart-notification.show {
                transform: translateX(0);
            }
            
            .cart-notification__content {
                display: flex;
                align-items: center;
                padding: 16px 20px;
                gap: 12px;
            }
            
            .cart-notification__icon {
                width: 40px;
                height: 40px;
                background: #27ae60;
                color: white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 600;
                font-size: 18px;
            }
            
            .cart-notification__title {
                font-weight: 600;
                color: #333;
                margin-bottom: 2px;
            }
            
            .cart-notification__subtitle {
                font-size: 14px;
                color: #666;
                line-height: 1.3;
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(notification);
        
        requestAnimationFrame(() => {
            notification.classList.add('show');
        });

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
                document.head.removeChild(style);
            }, 300);
        }, 3000);
    }

    proceedToCheckout() {
        if (this.items.length === 0) return;
        
        // Stripe決済ページへ遷移
        window.location.href = 'checkout.html';
    }

    saveCart() {
        localStorage.setItem('fomus_cart', JSON.stringify(this.items));
    }

    getCartItems() {
        return this.items;
    }

    getCartTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }
}

// グローバルインスタンス
window.cart = new ShoppingCart();