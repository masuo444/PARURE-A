// 商品データベース
const PRODUCTS = {
    mori: [
        {
            id: 'mori-necklace-18k',
            name: 'FOMUS PARURE NECKLACE 18k',
            price: 1295,
            images: ['名称未設定フォルダ/FOMUS PARURE NECKLACE 18k.png'],
            description: {
                jp: '18金を使用したプレミアムネックレス。シンプルで上品なデザインが日常に溶け込みます。',
                en: 'Premium 18k gold necklace with simple and elegant design that blends into daily life.'
            },
            features: ['18k Gold', 'Metal Allergy Safe', 'Handcrafted'],
            specifications: {
                material: '18K Gold, Japanese Cypress',
                dimensions: '45cm chain length',
                weight: '12g'
            },
            category: 'necklace'
        },
        {
            id: 'mori-necklace-yellow',
            name: 'FOMUS Parure NECKLACE (Yellow)',
            price: 1295,
            images: ['名称未設定フォルダ/FOMUS Parure NECKLACE (Yellow).png'],
            description: {
                jp: '温かみのあるイエローゴールドネックレス。',
                en: 'Warm yellow gold necklace with elegant finish.'
            },
            features: ['18k Gold', 'Metal Allergy Safe', 'Handcrafted'],
            specifications: {
                material: '18K Yellow Gold, Japanese Cypress',
                dimensions: '45cm chain length',
                weight: '12g'
            },
            category: 'necklace'
        },
        {
            id: 'mori-earring-red-blossom',
            name: 'FOMUS Parure EARRING (Red blossom)',
            price: 1295,
            images: ['名称未設定フォルダ/FOMUS Parure EARRING (Red blossom).JPG'],
            description: {
                jp: '赤い花をモチーフにした上品なイヤリング。',
                en: 'Elegant earrings featuring red blossom motif.'
            },
            features: ['18k Gold', 'Metal Allergy Safe', 'Handcrafted'],
            specifications: {
                material: '18K Gold, Japanese Cypress, Natural Lacquer',
                dimensions: '2.5cm height',
                weight: '6g (pair)'
            },
            category: 'earring'
        },
        {
            id: 'mori-earring-white-blossom',
            name: 'FOMUS Parure EARRING (White blossom)',
            price: 1295,
            images: ['名称未設定フォルダ/FOMUS Parure EARRING (White blossom).JPG'],
            description: {
                jp: '白い花をモチーフにした清楚なイヤリング。',
                en: 'Pure white blossom earrings with delicate finish.'
            },
            features: ['18k Gold', 'Metal Allergy Safe', 'Handcrafted'],
            specifications: {
                material: '18K Gold, Japanese Cypress, Natural Lacquer',
                dimensions: '2.5cm height',
                weight: '6g (pair)'
            },
            category: 'earring'
        },
        {
            id: 'mori-earring-white-flower',
            name: 'FOMUS Parure EARRING (white flower)',
            price: 1295,
            images: ['名称未設定フォルダ/FOMUS Parure EARRING (white flower).png'],
            description: {
                jp: '白い花のモチーフが美しいイヤリング。',
                en: 'Beautiful white flower motif earrings.'
            },
            features: ['18k Gold', 'Metal Allergy Safe', 'Handcrafted'],
            specifications: {
                material: '18K Gold, Japanese Cypress, Natural Lacquer',
                dimensions: '2.5cm height',
                weight: '6g (pair)'
            },
            category: 'earring'
        },
        {
            id: 'mori-earring-yellow-flower',
            name: 'FOMUS Parure EARRING (yellow flower)',
            price: 1295,
            images: ['名称未設定フォルダ/FOMUS Parure EARRING (yellow flower).png'],
            description: {
                jp: '黄色い花のモチーフが鮮やかなイヤリング。',
                en: 'Vibrant yellow flower motif earrings.'
            },
            features: ['18k Gold', 'Metal Allergy Safe', 'Handcrafted'],
            specifications: {
                material: '18K Gold, Japanese Cypress, Natural Lacquer',
                dimensions: '2.5cm height',
                weight: '6g (pair)'
            },
            category: 'earring'
        },
        {
            id: 'mori-pierce-black-blossom',
            name: 'FOMUS Parure PIERCE (Black blossom)',
            price: 1295,
            images: ['名称未設定フォルダ/FOMUS Parure PIERCE (Black blossom).JPG'],
            description: {
                jp: '黒い花をモチーフにしたエレガントなピアス。',
                en: 'Elegant black blossom pierced earrings.'
            },
            features: ['18k Gold', 'Metal Allergy Safe', 'Handcrafted'],
            specifications: {
                material: '18K Gold, Japanese Cypress, Natural Lacquer',
                dimensions: '2.2cm height',
                weight: '5g (pair)'
            },
            category: 'pierce'
        },
        {
            id: 'mori-pierce-temari-white',
            name: 'FOMUS Parure PIERCE (TEMARI White)',
            price: 1295,
            images: ['名称未設定フォルダ/FOMUS Parure PIERCE (TEMARI White).JPG'],
            description: {
                jp: '手毬をモチーフにした白いピアス。',
                en: 'White temari ball motif pierced earrings.'
            },
            features: ['18k Gold', 'Metal Allergy Safe', 'Handcrafted'],
            specifications: {
                material: '18K Gold, Japanese Cypress, Natural Lacquer',
                dimensions: '2.2cm height',
                weight: '5g (pair)'
            },
            category: 'pierce'
        },
        {
            id: 'mori-earring-tonbo-dama-blue',
            name: 'FOMUS PARURE earring (TONBO-DAMA blue)',
            price: 1295,
            images: ['名称未設定フォルダ/FOMUS PARURE earring (TONBO-DAMA blue).png'],
            description: {
                jp: 'とんぼ玉をモチーフにした青いイヤリング。',
                en: 'Blue tonbo-dama (dragonfly bead) motif earrings.'
            },
            features: ['18k Gold', 'Metal Allergy Safe', 'Handcrafted'],
            specifications: {
                material: '18K Gold, Japanese Cypress, Glass Bead',
                dimensions: '2.8cm height',
                weight: '7g (pair)'
            },
            category: 'earring'
        },
        {
            id: 'mori-kanzashi',
            name: 'FOMUS Parure KANZASHI',
            price: 1295,
            images: ['名称未設定フォルダ/FOMUS Parure KANZASHI.jpg'],
            description: {
                jp: '伝統的な簪をモダンにアレンジしたヘアアクセサリー。',
                en: 'Traditional kanzashi hair accessory with modern arrangement.'
            },
            features: ['18k Gold', 'Metal Allergy Safe', 'Handcrafted', 'Hair Accessory'],
            specifications: {
                material: '18K Gold, Japanese Cypress, Natural Lacquer',
                dimensions: '12cm length',
                weight: '15g'
            },
            category: 'hair-accessory'
        }
    ],
    ten: [
        {
            id: 'ten-atelier',
            name: 'Ten - Atelier',
            price: 2000,
            images: ['名称未設定フォルダ/天コレクション.JPG'],
            description: {
                jp: 'シンプルなデザインによるカスタムジュエリー。基本的な漆装飾を施した美しい仕上がり。',
                en: 'Custom jewelry with simple design featuring basic lacquer decoration and beautiful finish.'
            },
            features: ['Simple Design', 'Basic Lacquer', '4-6 weeks', '1 Year Warranty'],
            specifications: {
                material: 'Japanese cypress, Basic lacquer',
                process: 'Consultation → Design → Crafting → Delivery',
                duration: '4-6 weeks'
            },
            category: 'custom'
        },
        {
            id: 'ten-maison',
            name: 'Ten - Maison',
            price: 4000,
            images: ['名称未設定フォルダ/天コレクション.JPG'],
            description: {
                jp: '複雑なデザインに対応し、金箔・宝石装飾を施した高級カスタムジュエリー。',
                en: 'Luxury custom jewelry supporting complex designs with gold leaf and gemstone decorations.'
            },
            features: ['Complex Design', 'Gold & Gem Decoration', '6-8 weeks', '3 Year Warranty', 'Exclusive Case'],
            specifications: {
                material: 'Japanese cypress, Gold leaf, Gemstones',
                process: 'Extended consultation → 3D modeling → Master crafting → Delivery',
                duration: '6-8 weeks'
            },
            category: 'custom'
        },
        {
            id: 'ten-haute-couture',
            name: 'Ten - Haute Couture',
            price: 10000,
            images: ['名称未設定フォルダ/天コレクション.JPG'],
            description: {
                jp: '最高級素材と希少宝石を使用し、マスター職人が手がける究極のカスタムジュエリー。',
                en: 'Ultimate custom jewelry crafted by master artisans using premium materials and rare gemstones.'
            },
            features: ['Premium Materials', 'Rare Gemstones', 'Master Craftsman', 'Lifetime Warranty', 'VIP Service'],
            specifications: {
                material: 'Premium Japanese cypress, Rare gemstones, Precious metals',
                process: 'VIP consultation → Detailed design → Master crafting → White-glove delivery',
                duration: '8-12 weeks'
            },
            category: 'custom'
        }
    ],
    kiwami: [
        {
            id: 'kiwami-ultimate-set',
            name: 'Kiwami - Ultimate 4-piece Set',
            price: 1295,
            images: ['名称未設定フォルダ/極コレクション.JPG'],
            description: {
                jp: '年間10セット限定の究極の逸品。FOMUS PARUREの技術と美学の結晶。',
                en: 'The ultimate masterpiece limited to 10 sets per year. The culmination of FOMUS PARURE\'s technology and aesthetics.'
            },
            features: ['Limited Edition', 'Premium Set', 'Exclusive Design', 'VIP Service'],
            specifications: {
                material: 'Highest grade materials',
                includes: 'Necklace, Earrings, Ring, Bracelet',
                limitation: '10 sets per year',
                service: 'Dedicated concierge support'
            },
            category: 'set'
        }
    ]
};

// 商品検索・フィルター機能
class ProductManager {
    constructor() {
        this.currentLanguage = 'en';
    }

    setLanguage(language) {
        this.currentLanguage = language;
    }

    getProduct(collection, productId) {
        if (!PRODUCTS[collection]) return null;
        return PRODUCTS[collection].find(product => product.id === productId);
    }

    getCollectionProducts(collection) {
        return PRODUCTS[collection] || [];
    }

    getAllProducts() {
        return Object.values(PRODUCTS).flat();
    }

    getProductsByCategory(category) {
        return this.getAllProducts().filter(product => product.category === category);
    }

    formatPrice(product) {
        return `€${product.price.toLocaleString()}`;
    }

    getProductDescription(product) {
        return product.description[this.currentLanguage] || product.description.en;
    }

    searchProducts(query) {
        const searchTerm = query.toLowerCase();
        return this.getAllProducts().filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            this.getProductDescription(product).toLowerCase().includes(searchTerm) ||
            product.features.some(feature => feature.toLowerCase().includes(searchTerm))
        );
    }
}

// グローバルインスタンス
window.productManager = new ProductManager();