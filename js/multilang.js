// FOMUS PARURE - Multi-language System

// Language translations database
const translations = {
    en: {
        // Navigation
        'nav-brand': 'BRAND',
        'nav-collections': 'COLLECTIONS',
        'nav-story': 'STORY',
        'nav-contact': 'CONTACT',
        
        // Hero Section
        'hero-title': '1300 Years of Treasures in Modern Times',
        'hero-subtitle-1': 'Wear the sacred culture of Masu,',
        'hero-subtitle-2': 'Create your unique story through special experience',
        'hero-badge': 'The ultimate gift for loved ones',
        'hero-cta': 'View Collections',
        
        // Philosophy Section
        'philosophy-title': 'Wear the Culture of Masu',
        'philosophy-tagline': 'Aesthetic consciousness woven by 1300 years of history',
        'philosophy-desc1': 'FOMUS PARURE is a unique luxury art jewelry that combines the "Masu" with 1300 years of history with the finest Japanese cypress used in shrines and temples.',
        'philosophy-desc2': 'We have poured artistry and craftsmanship into the simple yet profound sculptural beauty of the Masu, achieving both the aspect of an art piece that decorates space and the refined beauty felt when worn.',
        'philosophy-desc3': 'It is not just an accessory, but a special existence with <strong>cultural value that inherits Japanese aesthetics to the modern era</strong>.',
        
        // Models Section
        'models-title': 'Model Gallery',
        'models-subtitle': 'Elegant styles wearing FOMUS PARURE',
        'mori-collection': 'Mori Collection',
        'mori-desc': 'Simple and elegant style that blends into daily life',
        'ten-kiwami-collection': 'Ten・Kiwami Collection',
        'ten-kiwami-desc': 'Sophisticated luxury that adorns special days',
        
        // Products Section
        'products-title': 'Collections',
        'products-subtitle': 'Mori・Ten・Kiwami - Masterful lineup wearing tradition',
        'mori-title': 'Mori - 18k Gold Collection',
        'premium-18k-materials': 'Premium 18k gold materials combined with the finest Japanese cypress. Simple design that blends into daily life with luxury that lasts forever.',
        'ten-title': 'Ten - Full Custom',
        'ten-description': 'Fully custom-made art jewelry. A one-of-a-kind piece created through collaboration between customers, designers, and craftsmen.',
        'kiwami-title': 'Kiwami - Ultimate Set',
        'kiwami-description': 'The ultimate masterpiece limited to 10 sets per year. The culmination of FOMUS PARURE\'s technology and aesthetics, wearing unparalleled prestige with the ultimate 4-piece set.',
        'view-details': 'View Details',
        
        // Gift Experience Section
        'gift-main-title': 'The ultimate gift for loved ones',
        'gift-main-desc': 'FOMUS PARURE is perfect as a gift for special people. The unique accessories, infused with 1300 years of history and craftsmanship, bring deep emotion and lasting value to the recipient.',
        'gift-box-title': 'Exclusive Gift Box',
        'gift-box-desc': 'Premium paulownia case and Kyoto mizuhiki wrapping maximize the value as a gift.',
        'gift-cert-title': 'Digital Certificate',
        'gift-cert-desc': 'Digital certificate using cutting-edge technology permanently guarantees authenticity and value.',
        'gift-value-title': 'Lasting Value',
        'gift-value-desc': 'A valuable gift that will be loved across time, infused with 1300 years of history and craftsmanship.',
        'gift-cta-title': 'Would you like to start a special gift experience?',
        'gift-cta-desc': 'Choose FOMUS PARURE\'s special accessories as a gift for your loved ones.',
        'gift-collection-btn': 'View Gift Collection',
        'gift-consultation-btn': 'Gift Consultation',
        
        // Footer
        'footer-desc': '1300 years of traditional techniques and modern design fused,<br>A unique Masu accessory brand.',
        'footer-collections': 'Collections',
        'footer-collections-title': 'Collections',
        'footer-services': 'Services',
        'footer-services-title': 'Services',
        'footer-brand-story': 'Brand Story',
        'footer-brand-story-link': 'Brand Story',
        'footer-craftsmanship': 'Craftsmanship',
        'footer-quality': 'Quality Guarantee',
        'footer-company': 'Company Information',
        'footer-company-info-title': 'Company Information',
        'footer-about': 'About Us',
        'footer-company-overview': 'Company Overview',
        'footer-privacy': 'Privacy Policy',
        'footer-privacy-policy': 'Privacy Policy',
        'footer-terms': 'Terms of Service',
        'footer-terms-of-use': 'Terms of Use',
        'footer-law': 'Commercial Transaction Act',
        'footer-commercial-transaction-law': 'Commercial Transaction Act',
        'footer-contact-link': 'Contact',
        'footer-copyright': '© 2024 FOMUS PARURE. All rights reserved.',
        
        // Collection Pages - Common
        'collection-products-title': 'Products',
        'collection-products-subtitle': 'Available items in this collection',
        'necklaces': 'Necklaces',
        'earrings': 'Earrings',
        'pierce': 'Pierce',
        'kanzashi': 'Kanzashi',
        'all-items': 'All Items',
        
        // Mori Collection Page
        'mori-hero-title': 'Mori - Brand Original',
        'mori-feature-natural': 'Natural Materials',
        'mori-feature-simple': 'Simple Design',
        'mori-18k-feature': '18k Gold',
        
        // Ten Collection Page
        'ten-hero-title': 'Ten - Full Custom',
        'ten-hero-subtitle': 'Your unique art jewelry, created through direct consultation',
        'ten-feature-consultation': 'Dedicated Consultation',
        'ten-feature-premium': 'Premium Materials',
        'ten-feature-exclusive': 'Exclusive Design',
        'ten-type-title': 'Select Your Style',
        'ten-atelier-title': 'Atelier',
        'ten-atelier-subtitle': 'Entry Luxury',
        'ten-atelier-price': '€2,000',
        'ten-atelier-desc': 'Start your custom jewelry journey with professional consultation',
        'ten-maison-title': 'Maison',
        'ten-maison-subtitle': 'Established Design',
        'ten-maison-price': '€4,000',
        'ten-maison-desc': 'Refined custom jewelry with established design patterns',
        'ten-haute-title': 'Haute Couture',
        'ten-haute-subtitle': 'Ultimate Creation',
        'ten-haute-price': '€10,000',
        'ten-haute-desc': 'The pinnacle of custom jewelry with no limits',
        'ten-process-title': 'Custom Process',
        'ten-process-consultation': 'Initial Consultation',
        'ten-process-design': 'Design Creation',
        'ten-process-crafting': 'Master Crafting',
        'ten-process-delivery': 'Special Delivery',
        'ten-cta-title': 'Ready to create your unique piece?',
        'ten-cta-button': 'Start Consultation',
        
        // Kiwami Collection Page
        'kiwami-hero-title': 'Kiwami - Ultimate Excellence',
        'kiwami-hero-subtitle': 'The pinnacle of FOMUS PARURE, limited to 10 sets per year',
        'kiwami-feature-annual': 'Annual 10 Sets',
        'kiwami-feature-masterpiece': 'Master Creation',
        'kiwami-feature-set': '4-Piece Set',
        'kiwami-set-contents': 'Ultimate Set Contents',
        'kiwami-necklace-title': 'Signature Necklace',
        'kiwami-necklace-desc': 'The centerpiece featuring the finest 18K gold and sacred Hinoki',
        'kiwami-earrings-title': 'Matching Earrings',
        'kiwami-earrings-desc': 'Perfectly balanced earrings that complement the necklace',
        'kiwami-bracelet-title': 'Delicate Bracelet',
        'kiwami-bracelet-desc': 'Elegant bracelet showcasing intricate craftsmanship',
        'kiwami-ring-title': 'Statement Ring',
        'kiwami-ring-desc': 'A ring that embodies the essence of FOMUS PARURE',
        'kiwami-special-title': 'Why Kiwami is Special',
        'kiwami-special-subtitle': 'The ultimate expression of Japanese craftsmanship',
        'kiwami-exclusive-title': 'Exclusive Privileges',
        'kiwami-vip-title': 'VIP Experience',
        'kiwami-vip-desc': 'Personal atelier visit and direct consultation with master craftsmen',
        'kiwami-certificate-title': 'Heritage Certificate',
        'kiwami-certificate-desc': 'Numbered certificate with complete providence and craftsmanship details',
        'kiwami-care-title': 'Lifetime Care',
        'kiwami-care-desc': 'Complimentary lifetime maintenance and restoration services',
        'kiwami-cta-button': 'Inquire About Kiwami',
        
        // Additional Kiwami translations
        'kiwami-story-title': 'The Pinnacle of Craftsmanship',
        'kiwami-story-desc1': 'The Kiwami Collection represents the absolute pinnacle of our artisanal skills. Limited to just 10 sets per year, each set embodies our highest level of craftsmanship and design excellence.',
        'kiwami-story-desc2': 'This ultimate collection combines traditional Japanese techniques with modern luxury, creating pieces that will be treasured for generations. Each set is a testament to our commitment to perfection.',
        'kiwami-eternite-ring-desc': 'Fusion of rare black diamonds with finest lacquer. Ultimate presence dwelling on your finger.',
        'kiwami-celeste-earrings-desc': '24k gold and ruby sparkle. Dignified beauty swaying at your ears.',
        'kiwami-lumiere-necklace-desc': 'The essence of masu dwelling in platinum chain. Supreme brilliance adorning your chest.',
        'kiwami-empress-tiara-desc': 'Ultimate crown woven by diamonds. A masterpiece symbolizing the very pinnacle of excellence.',
        'kiwami-feature-limited': 'Limited Edition',
        'kiwami-feature-ultimate': 'Ultimate Quality',
        'kiwami-feature-prestige': 'Unparalleled Prestige',
        'kiwami-price-set': 'Kiwami Collection 4-Piece Set',
        'tax-included': 'Tax Included',
        'kiwami-dedicated-concierge': 'Dedicated Concierge',
        'kiwami-dedicated-concierge-desc': 'Dedicated staff handles everything from purchase to aftercare',
        'kiwami-lifetime-warranty': 'Lifetime Warranty & Free Maintenance',
        'lifetime-quality-guarantee': 'Lifetime quality guarantee and maintenance',
        'kiwami-certification': 'Certification',
        'kiwami-certification-desc': 'Official certification with limited serial number',
        'kiwami-special-gift-box': 'Special Gift Box',
        'kiwami-special-gift-box-desc': 'Luxury paulownia case with Kyoto mizuhiki wrapping',
        'kiwami-pre-screening': 'Pre-screening Application',
        'kiwami-pre-screening-desc': 'Pre-screening is conducted due to the limited 10 sets',
        'kiwami-private-exhibition': 'Private Exhibition',
        'kiwami-private-exhibition-desc': 'Fully reserved private exhibition guidance',
        'kiwami-contract-production': 'Contract & Production Start',
        'kiwami-contract-production-desc': 'After contract, master artisan production begins',
        'kiwami-special-delivery': 'Special Handover Ceremony',
        'kiwami-special-delivery-desc': 'Special handover ceremony held upon completion',
        'kiwami-apply-pre-screening': 'Apply for Pre-screening',
        
        // Additional translations for collection pages
        'home': 'Home',
        'collections': 'Collections',
        'ten-hero-description': 'Fully custom-made art jewelry. A one-of-a-kind piece created through collaboration between customers, designers, and craftsmen.',
        'ten-feature-custom': 'Full Custom',
        'ten-feature-collaboration': 'Collaboration',
        'ten-feature-unique': 'One-of-a-kind',
        'ten-simple-design': 'Simple Design',
        'ten-basic-lacquer': 'Basic Lacquer Decoration',
        'ten-production-4-6-weeks': 'Production: 4-6 weeks',
        'ten-1-year-warranty': '1 Year Warranty',
        'ten-popular': 'Popular',
        'ten-complex-design': 'Complex Design Support',
        'ten-gold-gem-decoration': 'Gold Foil & Gem Decoration',
        'ten-production-6-8-weeks': 'Production: 6-8 weeks',
        'ten-3-year-warranty': '3 Year Warranty',
        'ten-exclusive-case': 'Exclusive Case',
        'ten-premium-materials': 'Premium Materials',
        'ten-rare-gems': 'Rare Gems Available',
        'ten-master-craftsman': 'Master Craftsman Creation',
        'ten-production-8-10-weeks': 'Production: 8-10 weeks',
        'ten-lifetime-warranty': 'Lifetime Warranty',
        'ten-vip-service': 'VIP Service',
        'earrings-piercings': 'Earrings & Piercings',
        'made-to-order': 'Made-to-Order',
        'specifications': 'Specifications',
        'made-to-order-excellence': 'Made-to-Order Excellence',
        'made-to-order-desc1': 'Each FOMUS PARURE piece is <strong>meticulously handcrafted exclusively for you</strong> by our master artisans. This made-to-order approach ensures the highest quality and attention to detail that mass production simply cannot achieve.',
        'made-to-order-desc2': '<strong>Delivery Timeline:</strong> 1-2 months from order confirmation<br><em style="color: #666; font-size: 14px;">* Your patience allows us to create something truly extraordinary just for you</em>',
        'purchase-with-stripe': 'Purchase with Stripe',
        'you-may-also-like': 'You May Also Like',
        'each-piece-exclusive': 'Each piece is made exclusively for you',
        'crafting-time': '1-2 months crafting time',
        'loading-product': 'Loading product details...',
        'product-not-found': 'Product Not Found',
        'product-not-found-desc': 'The product you\'re looking for doesn\'t exist or has been removed.',
        'browse-collections': 'Browse Collections',
        'delivery': 'Delivery',
        'months': 'months',
        'handcrafted-exclusively': 'Each piece is handcrafted exclusively for you by our master artisans',
        'three-tiers': 'Three Tiers',
        'crafted-exclusively-designer': 'Each piece crafted exclusively through designer collaboration',
        'atelier': 'Atelier',
        'maison': 'Maison',
        'haute-couture': 'Haute Couture',
        
        // Kiwami collection page specific items
        'kiwami-eternite-ring-title': 'Eternité Ring',
        'kiwami-celeste-earrings-title': 'Céleste Earrings',
        'kiwami-lumiere-necklace-title': 'Lumière Necklace',
        'kiwami-empress-tiara-title': 'Empress Tiara',
        'footer-copyright': '© 2024 FOMUS PARURE. All rights reserved.',
        'language-english': 'English',
        'language-japanese': '日本語',
        'language-arabic': 'العربية',
        'language-french': 'Français',
        'language-chinese': '中文',
        
        // Product descriptions
        'mori-18k-white-necklace': 'Elegant white gold necklace with traditional Japanese cypress.',
        'mori-18k-yellow-necklace': 'Beautiful yellow gold necklace featuring premium craftsmanship.',
        'mori-18k-premium-necklace': 'Premium 18k gold necklace with exquisite design.',
        'mori-18k-earrings': 'Handcrafted 18k gold earrings with traditional motifs.',
        'mori-18k-kanzashi': 'Traditional Japanese hair ornament in 18k gold.',
        'image-for-illustration': '* Image for illustration only',
        'mori-price-euro-only': '€1,295',
        'metal-allergy-safe': 'Metal Allergy Safe',
        'mori-story-title': 'The Healing Power of Wood',
        'mori-story-desc1': 'The forest has always been a place of healing and peace for people. The scent of wood, the sound of rustling leaves, and the gentle sunlight filtering through the trees.',
        'mori-story-desc2': 'We have created a simple yet sophisticated design so that you can feel connected to nature in your daily life. By wearing it every day, you can incorporate the peace of wood into your busy modern life.',
        'other-collections': 'Other Collections',
        'ten-full-custom-jewelry': 'Fully custom-made art jewelry',
        'ultimate-masterpiece-limited': 'Ultimate masterpiece limited to 10 sets per year',
        'traditional-techniques-modern-design': '1300 years of traditional techniques and modern design fused,<br>A unique Masu accessory brand.',
        'craftsmanship': 'Craftsmanship',
        'quality-guarantee': 'Quality Guarantee'
    },
    
    ja: {
        // ナビゲーション
        'nav-brand': 'ブランド',
        'nav-collections': 'コレクション',
        'nav-story': 'ストーリー',
        'nav-contact': 'お問い合わせ',
        
        // ヒーローセクション
        'hero-title': '現代に息づく1300年の宝',
        'hero-subtitle-1': '神聖なる枡の文化を身に纏い、',
        'hero-subtitle-2': '特別な体験を通してあなただけの物語を紡ぐ',
        'hero-badge': '大切な人への究極の贈り物',
        'hero-cta': 'コレクションを見る',
        
        // 哲学セクション
        'philosophy-title': '枡の文化を纏う',
        'philosophy-tagline': '1300年の歴史が紡ぐ美意識',
        'philosophy-desc1': 'FOMUS PARUREは、1300年の歴史を持つ「枡」と、神社仏閣に使われる最高級のひのき材を組み合わせた、唯一無二のラグジュアリーアートジュエリーです。',
        'philosophy-desc2': '枡のシンプルでありながら奥深い造形美に、アーティスティックな技法と職人技を注ぎ込み、空間を彩るアート作品としての側面と、身に着けた時に感じる洗練された美しさの両方を実現しました。',
        'philosophy-desc3': 'それは単なるアクセサリーではなく、<strong>日本の美意識を現代に継承する文化的価値</strong>を持つ特別な存在です。',
        
        // モデルセクション
        'models-title': 'モデルギャラリー',
        'models-subtitle': 'FOMUS PARUREを身に纏うエレガントなスタイル',
        'mori-collection': '森コレクション',
        'mori-desc': '日常に溶け込むシンプルで上品なスタイル',
        'ten-kiwami-collection': '天・極コレクション',
        'ten-kiwami-desc': '特別な日を彩る洗練されたラグジュアリー',
        
        // プロダクトセクション
        'products-title': 'コレクション',
        'products-subtitle': '森・天・極 - 伝統を纏う匠のラインナップ',
        'mori-title': '森 - 18金コレクション',
        'premium-18k-materials': '最高級の18金素材と最上質のひのき材を組み合わせ。日常に溶け込むシンプルなデザインで、永続する高級感を実現。',
        'ten-title': '天 - フルカスタム',
        'ten-description': '完全オーダーメイドのアートジュエリー。お客様、デザイナー、職人が協働で創り上げる、世界に一つだけの作品。',
        'kiwami-title': '極 - アルティメットセット',
        'kiwami-description': '年間10セット限定の究極の逸品。FOMUS PARUREの技術と美学の結晶であり、究極の4点セットで比類なき威厳を纏います。',
        'view-details': '詳細を見る',
        
        // ギフト体験セクション
        'gift-main-title': '大切な人への究極の贈り物',
        'gift-main-desc': 'FOMUS PARUEは特別な人への贈り物として最適です。1300年の歴史と職人技が込められた唯一無二のアクセサリーは、受け取る人に深い感動と永続的な価値をもたらします。',
        'gift-box-title': '専用ギフトボックス',
        'gift-box-desc': '高級桐箱と京都水引による包装で、贈り物としての価値を最大限に高めます。',
        'gift-cert-title': 'デジタル証明書',
        'gift-cert-desc': '最先端技術を活用したデジタル証明書が、真正性と価値を永続的に保証します。',
        'gift-value-title': '永続的な価値',
        'gift-value-desc': '1300年の歴史と職人技が込められた、時を超えて愛される価値ある贈り物。',
        'gift-cta-title': '特別なギフト体験を始めませんか？',
        'gift-cta-desc': '大切な人への贈り物として、FOMUS PARUREの特別なアクセサリーをお選びください。',
        'gift-collection-btn': 'ギフトコレクションを見る',
        'gift-consultation-btn': 'ギフト相談',
        
        // フッター
        'footer-desc': '1300年の伝統技法と現代デザインが融合した、<br>唯一無二の枡アクセサリーブランド。',
        'footer-collections': 'コレクション',
        'footer-collections-title': 'コレクション',
        'footer-services': 'サービス',
        'footer-services-title': 'サービス',
        'footer-brand-story': 'ブランドストーリー',
        'footer-brand-story-link': 'ブランドストーリー',
        'footer-craftsmanship': '職人技',
        'footer-quality': '品質保証',
        'footer-company': '会社情報',
        'footer-company-info-title': '企業情報',
        'footer-about': '私たちについて',
        'footer-company-overview': '会社概要',
        'footer-privacy': 'プライバシーポリシー',
        'footer-privacy-policy': 'プライバシーポリシー',
        'footer-terms': '利用規約',
        'footer-terms-of-use': '利用規約',
        'footer-law': '特定商取引法',
        'footer-commercial-transaction-law': '特定商取引法',
        'footer-contact-link': 'お問い合わせ',
        'footer-copyright': '© 2024 FOMUS PARURE. All rights reserved.',
        
        // コレクションページ - 共通
        'collection-products-title': '商品一覧',
        'collection-products-subtitle': 'このコレクションで利用可能なアイテム',
        'necklaces': 'ネックレス',
        'earrings': 'イヤリング',
        'pierce': 'ピアス',
        'kanzashi': 'かんざし',
        'all-items': '全商品',
        
        // 森コレクションページ
        'mori-hero-title': '森 - ブランドオリジナル',
        'mori-feature-natural': '天然素材',
        'mori-feature-simple': 'シンプルデザイン',
        'mori-18k-feature': '18金',
        
        // 天コレクションページ
        'ten-hero-title': '天 - フルカスタム',
        'ten-hero-subtitle': '直接相談を通じて創造される、あなただけのアートジュエリー',
        'ten-feature-consultation': '専任コンサルテーション',
        'ten-feature-premium': 'プレミアム素材',
        'ten-feature-exclusive': '限定デザイン',
        'ten-type-title': 'スタイルを選択',
        'ten-atelier-title': 'アトリエ',
        'ten-atelier-subtitle': 'エントリーラグジュアリー',
        'ten-atelier-price': '€2,000',
        'ten-atelier-desc': 'プロのコンサルテーションでカスタムジュエリーの旅を始めましょう',
        'ten-maison-title': 'メゾン',
        'ten-maison-subtitle': '確立されたデザイン',
        'ten-maison-price': '€4,000',
        'ten-maison-desc': '確立されたデザインパターンで洗練されたカスタムジュエリー',
        'ten-haute-title': 'オートクチュール',
        'ten-haute-subtitle': '究極の創造',
        'ten-haute-price': '€10,000',
        'ten-haute-desc': '限界のないカスタムジュエリーの頂点',
        'ten-process-title': 'カスタムプロセス',
        'ten-process-consultation': '初回相談',
        'ten-process-design': 'デザイン作成',
        'ten-process-crafting': 'マスタークラフティング',
        'ten-process-delivery': '特別配送',
        'ten-cta-title': 'あなただけの作品を作る準備はできていますか？',
        'ten-cta-button': 'コンサルテーションを開始',
        
        // 極コレクションページ
        'kiwami-hero-title': '極 - 究極の卓越',
        'kiwami-hero-subtitle': 'FOMUS PARUREの頂点、年間10セット限定',
        'kiwami-feature-annual': '年間10セット',
        'kiwami-feature-masterpiece': 'マスター作品',
        'kiwami-feature-set': '4点セット',
        'kiwami-set-contents': '究極のセット内容',
        'kiwami-necklace-title': 'シグネチャーネックレス',
        'kiwami-necklace-desc': '最高級の18金と神聖なヒノキを特徴とする中心作品',
        'kiwami-earrings-title': 'マッチングイヤリング',
        'kiwami-earrings-desc': 'ネックレスを完璧に補完するバランスの取れたイヤリング',
        'kiwami-bracelet-title': 'デリケートブレスレット',
        'kiwami-bracelet-desc': '複雑な職人技を示すエレガントなブレスレット',
        'kiwami-ring-title': 'ステートメントリング',
        'kiwami-ring-desc': 'FOMUS PARUREの本質を体現するリング',
        'kiwami-special-title': '極が特別な理由',
        'kiwami-special-subtitle': '日本の職人技の究極の表現',
        'kiwami-exclusive-title': '独占特典',
        'kiwami-vip-title': 'VIP体験',
        'kiwami-vip-desc': '個人的なアトリエ訪問とマスター職人との直接相談',
        'kiwami-certificate-title': 'ヘリテージ証明書',
        'kiwami-certificate-desc': '完全な出所と職人技の詳細を含む番号付き証明書',
        'kiwami-care-title': '生涯ケア',
        'kiwami-care-desc': '無料の生涯メンテナンスと修復サービス',
        'kiwami-cta-button': '極についてお問い合わせ',
        
        // Additional Kiwami translations
        'kiwami-story-title': '職人技の頂点',
        'kiwami-story-desc1': '極コレクションは、私たちの職人技術の絶対的な頂点を表しています。年間わずか10セットに限定され、各セットは私たちの最高レベルの職人技とデザインの卓越性を体現しています。',
        'kiwami-story-desc2': 'この究極のコレクションは、伝統的な日本の技法と現代的な贅沢を組み合わせ、何世代にもわたって大切にされる作品を創り出しています。各セットは、私たちの完璧への取り組みの証です。',
        'kiwami-eternite-ring-desc': '希少なブラックダイヤモンドと最高級漆の融合。指に宿る究極の存在感。',
        'kiwami-celeste-earrings-desc': '24金とルビーの煌めき。耳元で揺れる威厳ある美しさ。',
        'kiwami-lumiere-necklace-desc': 'プラチナチェーンに宿る枡の神髄。胸元を彩る至高の輝き。',
        'kiwami-empress-tiara-desc': 'ダイヤモンドが織りなす究極の冠。まさに極の頂点を象徴する逸品。',
        'kiwami-feature-limited': '限定版',
        'kiwami-feature-ultimate': '究極の品質',
        'kiwami-feature-prestige': '比類なき威厳',
        'kiwami-price-set': '極コレクション 4点セット',
        'tax-included': '税込',
        'kiwami-dedicated-concierge': '専任コンシェルジュ',
        'kiwami-dedicated-concierge-desc': '購入からアフターケアまで専任スタッフが対応',
        'kiwami-lifetime-warranty': '永久保証・無料メンテナンス',
        'lifetime-quality-guarantee': '生涯にわたる品質保証とメンテナンス',
        'kiwami-certification': '認定証明書',
        'kiwami-certification-desc': '限定番号付きの公式認定証明書を発行',
        'kiwami-special-gift-box': '特別ギフトボックス',
        'kiwami-special-gift-box-desc': '桐製の高級ケースと京都の水引包装',
        'kiwami-pre-screening': '事前審査申し込み',
        'kiwami-pre-screening-desc': '限定10セットのため、事前審査を実施いたします',
        'kiwami-private-exhibition': 'プライベート展示',
        'kiwami-private-exhibition-desc': '完全予約制でのプライベート展示をご案内',
        'kiwami-contract-production': 'ご契約・制作開始',
        'kiwami-contract-production-desc': 'ご契約後、マスター職人による制作を開始',
        'kiwami-special-delivery': '特別お引き渡し式',
        'kiwami-special-delivery-desc': '完成後、特別なお引き渡し式を開催',
        'kiwami-apply-pre-screening': '事前審査に申し込む',
        
        // コレクションページの追加翻訳
        'home': 'ホーム',
        'collections': 'コレクション',
        'ten-hero-description': '完全オーダーメイドのアートジュエリー。お客様、デザイナー、職人の協働で創り上げる、世界に一つだけの作品。',
        'ten-feature-custom': 'フルカスタム',
        'ten-feature-collaboration': 'コラボレーション',
        'ten-feature-unique': '世界に一つ',
        'ten-simple-design': 'シンプルなデザイン',
        'ten-basic-lacquer': '基本的な漆装飾',
        'ten-production-4-6-weeks': '制作期間：4-6週間',
        'ten-1-year-warranty': '1年間保証',
        'ten-popular': '人気',
        'ten-complex-design': '複雑なデザイン対応',
        'ten-gold-gem-decoration': '金箔・宝石装飾',
        'ten-production-6-8-weeks': '制作期間：6-8週間',
        'ten-3-year-warranty': '3年間保証',
        'ten-exclusive-case': '専用化粧箱',
        'ten-premium-materials': '最高級素材使用',
        'ten-rare-gems': '希少宝石対応',
        'ten-master-craftsman': 'マスター職人制作',
        'ten-production-8-10-weeks': '制作期間：8-10週間',
        'ten-lifetime-warranty': '終身保証',
        'ten-vip-service': 'VIPサービス',
        'earrings-piercings': 'イヤリング・ピアス',
        'made-to-order': '受注生産',
        'specifications': '仕様',
        'made-to-order-excellence': '受注生産の卓越性',
        'made-to-order-desc1': '各FOMUS PARUREピースは、熟練の職人によって<strong>お客様だけのために丹念に手作り</strong>されています。この受注生産アプローチにより、大量生産では決して実現できない最高品質と細部へのこだわりを保証します。',
        'made-to-order-desc2': '<strong>お届け時期:</strong> ご注文確定から1-2ヶ月<br><em style="color: #666; font-size: 14px;">* お客様の忍耐により、私たちはあなたのために真に特別な作品を創り上げます</em>',
        'purchase-with-stripe': 'Stripeで購入',
        'you-may-also-like': 'こちらもおすすめ',
        'each-piece-exclusive': '各ピースはお客様だけのために作られます',
        'crafting-time': '1-2ヶ月の制作期間',
        'loading-product': '商品詳細を読み込み中...',
        'product-not-found': '商品が見つかりません',
        'product-not-found-desc': 'お探しの商品は存在しないか、削除されました。',
        'browse-collections': 'コレクションを見る',
        'delivery': 'お届け',
        'months': 'ヵ月',
        'handcrafted-exclusively': '各作品はマスター職人があなただけのために手作りで作成します',
        'three-tiers': '3つのティア',
        'crafted-exclusively-designer': '各作品はデザイナーとのコラボレーションで作成されます',
        'atelier': 'アトリエ',
        'maison': 'メゾン',
        'haute-couture': 'オートクチュール',
        
        // 極コレクションページ専用アイテム
        'kiwami-eternite-ring-title': 'エタニティリング',
        'kiwami-celeste-earrings-title': 'セレステイヤリング',
        'kiwami-lumiere-necklace-title': 'リュミエールネックレス',
        'kiwami-empress-tiara-title': 'エンプレスティアラ',
        'footer-copyright': '© 2024 FOMUS PARURE. 全ての権利を保有します。',
        'language-english': '英語',
        'language-japanese': '日本語',
        'language-arabic': 'アラビア語',
        'language-french': 'フランス語',
        'language-chinese': '中国語',
        
        // 商品説明
        'mori-18k-white-necklace': '伝統的な日本のひのきを使用したエレガントなホワイトゴールドネックレス。',
        'mori-18k-yellow-necklace': 'プレミアムな職人技を特徴とする美しいイエローゴールドネックレス。',
        'mori-18k-premium-necklace': '18金を使用したプレミアムネックレス。',
        'mori-18k-earrings': '伝統的なモチーフをあしらった手作りの18金イヤリング。',
        'mori-18k-kanzashi': '18金で作られた伝統的な日本のかんざし。',
        'image-for-illustration': '※画像はイメージです',
        'mori-price-euro-only': '€1,295',
        'metal-allergy-safe': '金属アレルギー対応',
        'mori-story-title': '森が持つ、癒しの力',
        'mori-story-desc1': '森は古くから人々にとって癒しと安らぎの場所でした。木の香り、葉めく音、木々の隙間から差し込む優しい日差し。',
        'mori-story-desc2': '日常の中で自然とのつながりを感じられるよう、シンプルでありながら洗練されたデザインを創り上げました。毎日身に着けることで、忙しい現代の生活に木の安らぎを取り入れることができます。',
        'other-collections': 'その他のコレクション',
        'ten-full-custom-jewelry': '完全オーダーメイドのアートジュエリー',
        'ultimate-masterpiece-limited': '年間10セット限定の最高峰',
        'traditional-techniques-modern-design': '1300年の伝統技法と現代デザインが融合した、<br>唯一無二の枡アクセサリーブランド。',
        'craftsmanship': '職人の技',
        'quality-guarantee': '品質保証'
    },
    
    ar: {
        // التنقل
        'nav-brand': 'العلامة التجارية',
        'nav-collections': 'المجموعات',
        'nav-story': 'القصة',
        'nav-contact': 'اتصل بنا',
        
        // قسم البطل
        'hero-title': '1300 عام من الكنوز في العصر الحديث',
        'hero-subtitle-1': 'ارتدِ الثقافة المقدسة لماسو،',
        'hero-subtitle-2': 'اصنع قصتك الفريدة من خلال تجربة خاصة',
        'hero-badge': 'الهدية المثلى للأحباء',
        'hero-cta': 'عرض المجموعات',
        
        // قسم الفلسفة
        'philosophy-title': 'ارتدِ ثقافة الماسو',
        'philosophy-tagline': 'الوعي الجمالي المنسوج من 1300 عام من التاريخ',
        'philosophy-desc1': 'FOMUS PARURE هي مجوهرات فنية فاخرة فريدة تجمع بين "الماسو" ذات التاريخ الممتد لـ 1300 عام مع أجود أخشاب السرو اليابانية المستخدمة في الأضرحة والمعابد.',
        'philosophy-desc2': 'لقد صببنا الفن والحرفية في الجمال النحتي البسيط والعميق للماسو، محققين جانب القطعة الفنية التي تزين المساحة والجمال المكرر الذي يُشعر به عند الارتداء.',
        'philosophy-desc3': 'إنها ليست مجرد إكسسوار، بل وجود خاص ذو <strong>قيمة ثقافية ترث الجماليات اليابانية إلى العصر الحديث</strong>.',
        
        // قسم النماذج
        'models-title': 'معرض النماذج',
        'models-subtitle': 'أنماط أنيقة ترتدي FOMUS PARURE',
        'mori-collection': 'مجموعة موري',
        'mori-desc': 'أسلوب بسيط وأنيق ينسجم مع الحياة اليومية',
        'ten-kiwami-collection': 'مجموعة تين وكيوامي',
        'ten-kiwami-desc': 'ترف متطور يزين الأيام الخاصة',
        
        // قسم المنتجات
        'products-title': 'المجموعات',
        'products-subtitle': 'موري وتين وكيوامي - تشكيلة ماهرة ترتدي التقليد',
        'mori-title': 'موري - مجموعة الذهب عيار 18',
        'premium-18k-materials': 'مواد ذهب عيار 18 فاخرة مدمجة مع أجود أخشاب السرو اليابانية. تصميم بسيط ينسجم مع الحياة اليومية مع ترف يدوم إلى الأبد.',
        'ten-title': 'تين - مخصص بالكامل',
        'ten-description': 'مجوهرات فنية مصنوعة بالكامل حسب الطلب. قطعة فريدة من نوعها تم إنشاؤها من خلال التعاون بين العملاء والمصممين والحرفيين.',
        'kiwami-title': 'كيوامي - المجموعة المثلى',
        'kiwami-description': 'التحفة المثلى المحدودة بـ 10 مجموعات سنوياً. ذروة تكنولوجيا وجماليات FOMUS PARURE، ترتدي هيبة لا مثيل لها مع المجموعة المثلى المكونة من 4 قطع.',
        'view-details': 'عرض التفاصيل',
        
        // قسم تجربة الهدايا
        'gift-main-title': 'الهدية المثلى للأحباء',
        'gift-main-desc': 'FOMUS PARURE مثالية كهدية للأشخاص المميزين. الإكسسوارات الفريدة، المشبعة بـ 1300 عام من التاريخ والحرفية، تجلب مشاعر عميقة وقيمة دائمة للمتلقي.',
        'gift-box-title': 'صندوق هدايا حصري',
        'gift-box-desc': 'علبة بولونيا فاخرة ولف ميزوهيكي كيوتو يعظمان القيمة كهدية.',
        'gift-cert-title': 'شهادة رقمية',
        'gift-cert-desc': 'الشهادة الرقمية باستخدام التكنولوجيا المتطورة تضمن الأصالة والقيمة بشكل دائم.',
        'gift-value-title': 'قيمة دائمة',
        'gift-value-desc': 'هدية قيمة ستُحب عبر الزمن، مشبعة بـ 1300 عام من التاريخ والحرفية.',
        'gift-cta-title': 'هل تود بدء تجربة هدية خاصة؟',
        'gift-cta-desc': 'اختر إكسسوارات FOMUS PARURE الخاصة كهدية لأحبائك.',
        'gift-collection-btn': 'عرض مجموعة الهدايا',
        'gift-consultation-btn': 'استشارة الهدايا',
        
        // التذييل
        'footer-desc': '1300 عام من التقنيات التقليدية والتصميم الحديث متحدة،<br>علامة إكسسوارات الماسو الفريدة.',
        'footer-collections': 'المجموعات',
        'footer-collections-title': 'المجموعات',
        'footer-services': 'الخدمات',
        'footer-services-title': 'الخدمات',
        'footer-brand-story': 'قصة العلامة التجارية',
        'footer-brand-story-link': 'قصة العلامة التجارية',
        'footer-craftsmanship': 'الحرفية',
        'footer-quality': 'ضمان الجودة',
        'footer-company': 'معلومات الشركة',
        'footer-company-info-title': 'معلومات الشركة',
        'footer-about': 'من نحن',
        'footer-company-overview': 'نظرة عامة على الشركة',
        'footer-privacy': 'سياسة الخصوصية',
        'footer-privacy-policy': 'سياسة الخصوصية',
        'footer-terms': 'شروط الخدمة',
        'footer-terms-of-use': 'شروط الاستخدام',
        'footer-law': 'قانون المعاملات التجارية',
        'footer-commercial-transaction-law': 'قانون المعاملات التجارية',
        'footer-contact-link': 'اتصل بنا',
        'footer-copyright': '© 2024 FOMUS PARURE. جميع الحقوق محفوظة.',
        
        // صفحات المجموعة - مشترك
        'collection-products-title': 'المنتجات',
        'collection-products-subtitle': 'العناصر المتاحة في هذه المجموعة',
        'necklaces': 'القلائد',
        'earrings': 'الأقراط',
        'pierce': 'الثقب',
        'kanzashi': 'كانزاشي',
        'all-items': 'جميع العناصر',
        
        // صفحة مجموعة موري
        'mori-hero-title': 'موري - أصلي العلامة التجارية',
        'mori-feature-natural': 'مواد طبيعية',
        'mori-feature-simple': 'تصميم بسيط',
        'mori-18k-feature': 'ذهب عيار 18',
        
        // صفحة مجموعة تين
        'ten-hero-title': 'تين - مخصص بالكامل',
        'ten-hero-subtitle': 'مجوهراتك الفنية الفريدة، التي تم إنشاؤها من خلال الاستشارة المباشرة',
        'ten-feature-consultation': 'استشارة مخصصة',
        'ten-feature-premium': 'مواد فاخرة',
        'ten-feature-exclusive': 'تصميم حصري',
        'ten-type-title': 'اختر أسلوبك',
        'ten-atelier-title': 'أتيليه',
        'ten-atelier-subtitle': 'فخامة مبتدئة',
        'ten-atelier-price': '€2,000',
        'ten-atelier-desc': 'ابدأ رحلة المجوهرات المخصصة مع استشارة احترافية',
        'ten-maison-title': 'ميزون',
        'ten-maison-subtitle': 'تصميم راسخ',
        'ten-maison-price': '€4,000',
        'ten-maison-desc': 'مجوهرات مخصصة مكررة مع أنماط تصميم راسخة',
        'ten-haute-title': 'هوت كوتور',
        'ten-haute-subtitle': 'الإبداع النهائي',
        'ten-haute-price': '€10,000',
        'ten-haute-desc': 'قمة المجوهرات المخصصة بدون حدود',
        'ten-process-title': 'عملية مخصصة',
        'ten-process-consultation': 'الاستشارة الأولية',
        'ten-process-design': 'إنشاء التصميم',
        'ten-process-crafting': 'الحرفية الرئيسية',
        'ten-process-delivery': 'التسليم الخاص',
        'ten-cta-title': 'هل أنت مستعد لإنشاء قطعتك الفريدة؟',
        'ten-cta-button': 'بدء الاستشارة',
        
        // صفحة مجموعة كيوامي
        'kiwami-hero-title': 'كيوامي - التميز النهائي',
        'kiwami-hero-subtitle': 'قمة FOMUS PARURE، محدودة بـ 10 مجموعات سنويًا',
        'kiwami-feature-annual': '10 مجموعات سنوية',
        'kiwami-feature-masterpiece': 'إبداع رئيسي',
        'kiwami-feature-set': 'مجموعة من 4 قطع',
        'kiwami-set-contents': 'محتويات المجموعة النهائية',
        'kiwami-necklace-title': 'قلادة التوقيع',
        'kiwami-necklace-desc': 'القطعة المركزية التي تتميز بأفضل ذهب عيار 18 قيراطًا وهينوكي المقدس',
        'kiwami-earrings-title': 'أقراط متطابقة',
        'kiwami-earrings-desc': 'أقراط متوازنة تمامًا تكمل القلادة',
        'kiwami-bracelet-title': 'سوار رقيق',
        'kiwami-bracelet-desc': 'سوار أنيق يعرض الحرفية المعقدة',
        'kiwami-ring-title': 'خاتم بارز',
        'kiwami-ring-desc': 'خاتم يجسد جوهر FOMUS PARURE',
        'kiwami-special-title': 'لماذا كيوامي مميز',
        'kiwami-special-subtitle': 'التعبير النهائي عن الحرفية اليابانية',
        'kiwami-exclusive-title': 'امتيازات حصرية',
        'kiwami-vip-title': 'تجربة VIP',
        'kiwami-vip-desc': 'زيارة أتيليه شخصية والتشاور المباشر مع الحرفيين الرئيسيين',
        'kiwami-certificate-title': 'شهادة التراث',
        'kiwami-certificate-desc': 'شهادة مرقمة مع التزويد الكامل وتفاصيل الحرفية',
        'kiwami-care-title': 'الرعاية مدى الحياة',
        'kiwami-care-desc': 'خدمات الصيانة والترميم المجانية مدى الحياة',
        'kiwami-cta-button': 'الاستفسار عن كيوامي',
        
        // Additional Kiwami translations
        'kiwami-story-title': 'قمة الحرفية',
        'kiwami-story-desc1': 'تمثل مجموعة كيوامي القمة المطلقة لمهاراتنا الحرفية. مقتصرة على 10 مجموعات فقط سنوياً، كل مجموعة تجسد أعلى مستوى من الحرفية والتميز في التصميم.',
        'kiwami-story-desc2': 'تجمع هذه المجموعة النهائية بين التقنيات اليابانية التقليدية والرفاهية الحديثة، مما يخلق قطعاً ستكون محل تقدير لأجيال. كل مجموعة هي شاهد على التزامنا بالكمال.',
        'kiwami-eternite-ring-desc': 'اندماج الماس الأسود النادر مع أجود أنواع الطلاء. حضور نهائي يسكن إصبعك.',
        'kiwami-celeste-earrings-desc': 'بريق الذهب عيار 24 والياقوت. جمال مهيب يتمايل عند أذنيك.',
        'kiwami-lumiere-necklace-desc': 'جوهر الماسو الساكن في سلسلة البلاتين. إشراق أعلى يزين صدرك.',
        'kiwami-empress-tiara-desc': 'تاج نهائي منسوج بالماس. تحفة ترمز لقمة التميز.',
        'kiwami-feature-limited': 'إصدار محدود',
        'kiwami-feature-ultimate': 'جودة نهائية',
        'kiwami-feature-prestige': 'مكانة لا مثيل لها',
        'kiwami-price-set': 'مجموعة كيوامي 4 قطع',
        'tax-included': 'شامل الضريبة',
        'kiwami-dedicated-concierge': 'خدمة عملاء مخصصة',
        'kiwami-dedicated-concierge-desc': 'فريق مخصص يتولى كل شيء من الشراء إلى الخدمة اللاحقة',
        'kiwami-lifetime-warranty': 'ضمان مدى الحياة وصيانة مجانية',
        'lifetime-quality-guarantee': 'ضمان الجودة والصيانة مدى الحياة',
        'kiwami-certification': 'شهادة اعتماد',
        'kiwami-certification-desc': 'إصدار شهادة اعتماد رسمية برقم محدود',
        'kiwami-special-gift-box': 'صندوق هدايا خاص',
        'kiwami-special-gift-box-desc': 'صندوق فاخر من خشب البولونيا مع تغليف ميزوهيكي كيوتو',
        'kiwami-pre-screening': 'طلب فحص مسبق',
        'kiwami-pre-screening-desc': 'يتم إجراء فحص مسبق نظراً للعدد المحدود 10 مجموعات',
        'kiwami-private-exhibition': 'معرض خاص',
        'kiwami-private-exhibition-desc': 'إرشاد معرض خاص بنظام الحجز الكامل',
        'kiwami-contract-production': 'العقد وبدء الإنتاج',
        'kiwami-contract-production-desc': 'بعد العقد، يبدأ إنتاج الحرفي الرئيسي',
        'kiwami-special-delivery': 'حفل تسليم خاص',
        'kiwami-special-delivery-desc': 'يقام حفل تسليم خاص عند الإنجاز',
        'kiwami-apply-pre-screening': 'التقدم للفحص المسبق',
        
        // ترجمات إضافية لصفحات المجموعة
        'home': 'الصفحة الرئيسية',
        'collections': 'المجموعات',
        'ten-hero-description': 'مجوهرات فنية مصنوعة بالكامل حسب الطلب. قطعة فريدة من نوعها تم إنشاؤها من خلال التعاون بين العملاء والمصممين والحرفيين.',
        'ten-feature-custom': 'مخصص بالكامل',
        'ten-feature-collaboration': 'تعاون',
        'ten-feature-unique': 'فريد من نوعه',
        'ten-simple-design': 'تصميم بسيط',
        'ten-basic-lacquer': 'زخرفة ورنيش أساسية',
        'ten-production-4-6-weeks': 'الإنتاج: 4-6 أسابيع',
        'ten-1-year-warranty': 'ضمان عام واحد',
        'ten-popular': 'شائع',
        'ten-complex-design': 'دعم التصميم المعقد',
        'ten-gold-gem-decoration': 'زخرفة برقائق الذهب والأحجار الكريمة',
        'ten-production-6-8-weeks': 'الإنتاج: 6-8 أسابيع',
        'ten-3-year-warranty': 'ضمان 3 سنوات',
        'ten-exclusive-case': 'علبة حصرية',
        'ten-premium-materials': 'استخدام مواد فاخرة',
        'ten-rare-gems': 'أحجار كريمة نادرة متاحة',
        'ten-master-craftsman': 'إبداع حرفي ماهر',
        'ten-production-8-10-weeks': 'الإنتاج: 8-10 أسابيع',
        'ten-lifetime-warranty': 'ضمان مدى الحياة',
        'ten-vip-service': 'خدمة VIP',
        'earrings-piercings': 'أقراط وثقب',
        'made-to-order': 'مصنوع حسب الطلب',
        'specifications': 'المواصفات',
        'made-to-order-excellence': 'التميز المصنوع حسب الطلب',
        'made-to-order-desc1': 'كل قطعة من FOMUS PARURE <strong>مصنوعة يدوياً بعناية فائقة خصيصاً لك</strong> من قبل حرفيينا المتمرسين. هذا النهج المصنوع حسب الطلب يضمن أعلى جودة واهتماماً بالتفاصيل لا يمكن للإنتاج الضخم تحقيقه.',
        'made-to-order-desc2': '<strong>الجدول الزمني للتسليم:</strong> 1-2 شهر من تأكيد الطلب<br><em style="color: #666; font-size: 14px;">* صبرك يتيح لنا إنشاء شيء استثنائي حقاً من أجلك</em>',
        'purchase-with-stripe': 'الشراء باستخدام Stripe',
        'you-may-also-like': 'قد يعجبك أيضاً',
        'each-piece-exclusive': 'كل قطعة مصنوعة حصرياً لك',
        'crafting-time': '1-2 شهر من وقت الصنع',
        'loading-product': 'جاري تحميل تفاصيل المنتج...',
        'product-not-found': 'المنتج غير موجود',
        'product-not-found-desc': 'المنتج الذي تبحث عنه غير موجود أو تم حذفه.',
        'browse-collections': 'تصفح المجموعات',
        'delivery': 'التسليم',
        'months': 'أشهر',
        'handcrafted-exclusively': 'كل قطعة مصنوعة يدويًا حصريًا لك من قبل حرفيينا الماهرين',
        'three-tiers': 'ثلاث مستويات',
        'crafted-exclusively-designer': 'كل قطعة مصنوعة حصريًا من خلال التعاون مع المصمم',
        'atelier': 'أتيليه',
        'maison': 'ميزون',
        'haute-couture': 'هوت كوتور',
        
        // عناصر صفحة مجموعة كيوامي الخاصة
        'kiwami-eternite-ring-title': 'خاتم إتيرنيتي',
        'kiwami-celeste-earrings-title': 'أقراط سيليست',
        'kiwami-lumiere-necklace-title': 'قلادة لوميير',
        'kiwami-empress-tiara-title': 'تاج الإمبراطورة',
        'footer-copyright': '© 2024 FOMUS PARURE. جميع الحقوق محفوظة.',
        'language-english': 'الإنجليزية',
        'language-japanese': 'اليابانية',
        'language-arabic': 'العربية',
        'language-french': 'الفرنسية',
        'language-chinese': 'الصينية',
        
        // أوصاف المنتجات
        'mori-18k-white-necklace': 'قلادة ذهب أبيض أنيقة مع السرو الياباني التقليدي.',
        'mori-18k-yellow-necklace': 'قلادة ذهب أصفر جميلة تتميز بالحرفية المتقنة.',
        'mori-18k-premium-necklace': 'قلادة ذهب عيار 18 فاخرة.',
        'mori-18k-earrings': 'أقراط ذهب عيار 18 مصنوعة يدوياً بزخارف تقليدية.',
        'mori-18k-kanzashi': 'زينة شعر يابانية تقليدية من الذهب عيار 18.',
        'image-for-illustration': '* الصورة للتوضيح فقط',
        'mori-price-euro-only': '€1,295',
        'metal-allergy-safe': 'آمن لحساسية المعادن',
        'mori-story-title': 'قوة الشفاء في الخشب',
        'mori-story-desc1': 'لطالما كانت الغابة مكاناً للشفاء والسلام للناس. عبير الخشب، وصوت حفيف الأوراق، وأشعة الشمس اللطيفة التي تترشح عبر الأشجار.',
        'mori-story-desc2': 'لقد أبدعنا تصميماً بسيطاً ومتطوراً حتى تتمكن من الشعور بالارتباط مع الطبيعة في حياتك اليومية.',
        'other-collections': 'مجموعات أخرى',
        'ten-full-custom-jewelry': 'مجوهرات فنية مخصصة بالكامل',
        'ultimate-masterpiece-limited': 'تحفة نهائية محدودة بـ 10 مجموعات سنوياً',
        'traditional-techniques-modern-design': '1300 عام من التقنيات التقليدية والتصميم الحديث متحدة،<br>علامة إكسسوارات ماسو فريدة.',
        'craftsmanship': 'الحرفية',
        'quality-guarantee': 'ضمان الجودة'
    },
    
    fr: {
        // Navigation
        'nav-brand': 'MARQUE',
        'nav-collections': 'COLLECTIONS',
        'nav-story': 'HISTOIRE',
        'nav-contact': 'CONTACT',
        
        // Section Héros
        'hero-title': '1300 Ans de Trésors à l\'Époque Moderne',
        'hero-subtitle-1': 'Portez la culture sacrée du Masu,',
        'hero-subtitle-2': 'Créez votre histoire unique à travers une expérience spéciale',
        'hero-badge': 'Le cadeau ultime pour vos proches',
        'hero-cta': 'Voir les Collections',
        
        // Section Philosophie
        'philosophy-title': 'Porter la Culture du Masu',
        'philosophy-tagline': 'Conscience esthétique tissée par 1300 ans d\'histoire',
        'philosophy-desc1': 'FOMUS PARURE est un bijou d\'art de luxe unique qui combine le "Masu" avec 1300 ans d\'histoire avec le plus fin cyprès japonais utilisé dans les sanctuaires et temples.',
        'philosophy-desc2': 'Nous avons versé l\'art et l\'artisanat dans la beauté sculpturale simple mais profonde du Masu, réalisant à la fois l\'aspect d\'une œuvre d\'art qui décore l\'espace et la beauté raffinée ressentie lors du port.',
        'philosophy-desc3': 'Ce n\'est pas seulement un accessoire, mais une existence spéciale avec une <strong>valeur culturelle qui hérite de l\'esthétique japonaise à l\'ère moderne</strong>.',
        
        // Section Modèles
        'models-title': 'Galerie des Modèles',
        'models-subtitle': 'Styles élégants portant FOMUS PARURE',
        'mori-collection': 'Collection Mori',
        'mori-desc': 'Style simple et élégant qui se fond dans la vie quotidienne',
        'ten-kiwami-collection': 'Collection Ten・Kiwami',
        'ten-kiwami-desc': 'Luxe sophistiqué qui orne les jours spéciaux',
        
        // Section Produits
        'products-title': 'Collections',
        'products-subtitle': 'Mori・Ten・Kiwami - Gamme magistrale portant la tradition',
        'mori-title': 'Mori - Collection Or 18k',
        'premium-18k-materials': 'Matériaux en or 18k premium combinés avec le plus fin cyprès japonais. Design simple qui se fond dans la vie quotidienne avec un luxe qui dure éternellement.',
        'ten-title': 'Ten - Entièrement Personnalisé',
        'ten-description': 'Bijou d\'art entièrement fait sur mesure. Une pièce unique créée grâce à la collaboration entre clients, designers et artisans.',
        'kiwami-title': 'Kiwami - Set Ultime',
        'kiwami-description': 'Le chef-d\'œuvre ultime limité à 10 sets par an. L\'apogée de la technologie et de l\'esthétique FOMUS PARURE, portant un prestige inégalé avec le set ultime de 4 pièces.',
        'view-details': 'Voir les Détails',
        
        // Section Expérience Cadeau
        'gift-main-title': 'Le cadeau ultime pour vos proches',
        'gift-main-desc': 'FOMUS PARURE est parfait comme cadeau pour des personnes spéciales. Les accessoires uniques, imprégnés de 1300 ans d\'histoire et d\'artisanat, apportent une émotion profonde et une valeur durable au destinataire.',
        'gift-box-title': 'Boîte Cadeau Exclusive',
        'gift-box-desc': 'Étui en paulownia premium et emballage mizuhiki de Kyoto maximisent la valeur en tant que cadeau.',
        'gift-cert-title': 'Certificat Numérique',
        'gift-cert-desc': 'Le certificat numérique utilisant une technologie de pointe garantit en permanence l\'authenticité et la valeur.',
        'gift-value-title': 'Valeur Durable',
        'gift-value-desc': 'Un cadeau précieux qui sera aimé à travers le temps, imprégné de 1300 ans d\'histoire et d\'artisanat.',
        'gift-cta-title': 'Souhaitez-vous commencer une expérience cadeau spéciale ?',
        'gift-cta-desc': 'Choisissez les accessoires spéciaux de FOMUS PARURE comme cadeau pour vos proches.',
        'gift-collection-btn': 'Voir la Collection Cadeaux',
        'gift-consultation-btn': 'Consultation Cadeaux',
        
        // Pied de page
        'footer-desc': '1300 ans de techniques traditionnelles et design moderne fusionnés,<br>Une marque d\'accessoires Masu unique.',
        'footer-collections': 'Collections',
        'footer-collections-title': 'Collections',
        'footer-services': 'Services',
        'footer-services-title': 'Services',
        'footer-brand-story': 'Histoire de la Marque',
        'footer-brand-story-link': 'Histoire de la Marque',
        'footer-craftsmanship': 'Artisanat',
        'footer-quality': 'Garantie Qualité',
        'footer-company': 'Informations Entreprise',
        'footer-company-info-title': 'Informations sur l\'Entreprise',
        'footer-about': 'À Propos',
        'footer-company-overview': 'Aperçu de l\'Entreprise',
        'footer-privacy': 'Politique de Confidentialité',
        'footer-privacy-policy': 'Politique de Confidentialité',
        'footer-terms': 'Conditions de Service',
        'footer-terms-of-use': 'Conditions d\'Utilisation',
        'footer-law': 'Loi sur les Transactions Commerciales',
        'footer-commercial-transaction-law': 'Loi sur les Transactions Commerciales',
        'footer-contact-link': 'Contact',
        'footer-copyright': '© 2024 FOMUS PARURE. Tous droits réservés.',
        
        // Pages de Collection - Commun
        'collection-products-title': 'Produits',
        'collection-products-subtitle': 'Articles disponibles dans cette collection',
        'necklaces': 'Colliers',
        'earrings': 'Boucles d\'oreilles',
        'pierce': 'Pierce',
        'kanzashi': 'Kanzashi',
        'all-items': 'Tous les articles',
        
        // Page Collection Mori
        'mori-hero-title': 'Mori - Original de la Marque',
        'mori-feature-natural': 'Matériaux Naturels',
        'mori-feature-simple': 'Design Simple',
        'mori-18k-feature': 'Or 18k',
        
        // Page Collection Ten
        'ten-hero-title': 'Ten - Entièrement Personnalisé',
        'ten-hero-subtitle': 'Votre bijou d\'art unique, créé par consultation directe',
        'ten-feature-consultation': 'Consultation Dédiée',
        'ten-feature-premium': 'Matériaux Premium',
        'ten-feature-exclusive': 'Design Exclusif',
        'ten-type-title': 'Sélectionnez Votre Style',
        'ten-atelier-title': 'Atelier',
        'ten-atelier-subtitle': 'Luxe d\'Entrée',
        'ten-atelier-price': '€2 000',
        'ten-atelier-desc': 'Commencez votre voyage de bijoux personnalisés avec une consultation professionnelle',
        'ten-maison-title': 'Maison',
        'ten-maison-subtitle': 'Design Établi',
        'ten-maison-price': '€4 000',
        'ten-maison-desc': 'Bijoux personnalisés raffinés avec des modèles de design établis',
        'ten-haute-title': 'Haute Couture',
        'ten-haute-subtitle': 'Création Ultime',
        'ten-haute-price': '€10 000',
        'ten-haute-desc': 'Le summum des bijoux personnalisés sans limites',
        'ten-process-title': 'Processus Personnalisé',
        'ten-process-consultation': 'Consultation Initiale',
        'ten-process-design': 'Création du Design',
        'ten-process-crafting': 'Artisanat de Maître',
        'ten-process-delivery': 'Livraison Spéciale',
        'ten-cta-title': 'Prêt à créer votre pièce unique ?',
        'ten-cta-button': 'Commencer la Consultation',
        
        // Page Collection Kiwami
        'kiwami-hero-title': 'Kiwami - Excellence Ultime',
        'kiwami-hero-subtitle': 'Le summum de FOMUS PARURE, limité à 10 ensembles par an',
        'kiwami-feature-annual': '10 Ensembles Annuels',
        'kiwami-feature-masterpiece': 'Création de Maître',
        'kiwami-feature-set': 'Ensemble 4 Pièces',
        'kiwami-set-contents': 'Contenu de l\'Ensemble Ultime',
        'kiwami-necklace-title': 'Collier Signature',
        'kiwami-necklace-desc': 'La pièce maîtresse présentant l\'or 18K le plus fin et l\'Hinoki sacré',
        'kiwami-earrings-title': 'Boucles d\'Oreilles Assorties',
        'kiwami-earrings-desc': 'Boucles d\'oreilles parfaitement équilibrées qui complètent le collier',
        'kiwami-bracelet-title': 'Bracelet Délicat',
        'kiwami-bracelet-desc': 'Bracelet élégant présentant un artisanat complexe',
        'kiwami-ring-title': 'Bague Statement',
        'kiwami-ring-desc': 'Une bague qui incarne l\'essence de FOMUS PARURE',
        'kiwami-special-title': 'Pourquoi Kiwami est Spécial',
        'kiwami-special-subtitle': 'L\'expression ultime de l\'artisanat japonais',
        'kiwami-exclusive-title': 'Privilèges Exclusifs',
        'kiwami-vip-title': 'Expérience VIP',
        'kiwami-vip-desc': 'Visite personnelle de l\'atelier et consultation directe avec les maîtres artisans',
        'kiwami-certificate-title': 'Certificat d\'Héritage',
        'kiwami-certificate-desc': 'Certificat numéroté avec provenance complète et détails d\'artisanat',
        'kiwami-care-title': 'Soins à Vie',
        'kiwami-care-desc': 'Services gratuits de maintenance et de restauration à vie',
        'kiwami-cta-button': 'Se Renseigner sur Kiwami',
        
        // Additional Kiwami translations
        'kiwami-story-title': 'Le Summum de l\'Artisanat',
        'kiwami-story-desc1': 'La Collection Kiwami représente le summum absolu de nos compétences artisanales. Limitée à seulement 10 ensembles par an, chaque ensemble incarne notre plus haut niveau d\'artisanat et d\'excellence de design.',
        'kiwami-story-desc2': 'Cette collection ultime combine les techniques japonaises traditionnelles avec le luxe moderne, créant des pièces qui seront chéries pendant des générations. Chaque ensemble est un témoignage de notre engagement envers la perfection.',
        'kiwami-eternite-ring-desc': 'Fusion de diamants noirs rares avec la plus fine laque. Présence ultime résidant sur votre doigt.',
        'kiwami-celeste-earrings-desc': 'Éclat de l\'or 24k et du rubis. Beauté digne se balançant à vos oreilles.',
        'kiwami-lumiere-necklace-desc': 'L\'essence du masu résidant dans une chaîne de platine. Brillance suprême ornant votre poitrine.',
        'kiwami-empress-tiara-desc': 'Couronne ultime tissée de diamants. Un chef-d\'œuvre symbolisant le summum de l\'excellence.',
        'kiwami-feature-limited': 'Édition Limitée',
        'kiwami-feature-ultimate': 'Qualité Ultime',
        'kiwami-feature-prestige': 'Prestige Inégalé',
        'kiwami-price-set': 'Collection Kiwami Ensemble 4 Pièces',
        'tax-included': 'Taxes Incluses',
        'kiwami-dedicated-concierge': 'Concierge Dédié',
        'kiwami-dedicated-concierge-desc': 'Personnel dédié s\'occupe de tout, de l\'achat aux soins après-vente',
        'kiwami-lifetime-warranty': 'Garantie à Vie et Maintenance Gratuite',
        'lifetime-quality-guarantee': 'Garantie de qualité et maintenance à vie',
        'kiwami-certification': 'Certificat d\'Accréditation',
        'kiwami-certification-desc': 'Émission d\'un certificat d\'accréditation officiel avec numéro limité',
        'kiwami-special-gift-box': 'Boîte Cadeau Spéciale',
        'kiwami-special-gift-box-desc': 'Boîtier de luxe en paulownia avec emballage mizuhiki de Kyoto',
        'kiwami-pre-screening': 'Demande de Pré-Sélection',
        'kiwami-pre-screening-desc': 'Pré-sélection effectuée en raison des 10 ensembles limités',
        'kiwami-private-exhibition': 'Exposition Privée',
        'kiwami-private-exhibition-desc': 'Guidance d\'exposition privée sur réservation complète',
        'kiwami-contract-production': 'Contrat et Début de Production',
        'kiwami-contract-production-desc': 'Après le contrat, production par maître artisan commence',
        'kiwami-special-delivery': 'Cérémonie de Remise Spéciale',
        'kiwami-special-delivery-desc': 'Cérémonie de remise spéciale organisée à l\'achèvement',
        'kiwami-apply-pre-screening': 'Postuler pour la Pré-Sélection',
        
        // Traductions supplémentaires pour les pages de collection
        'home': 'Accueil',
        'collections': 'Collections',
        'ten-hero-description': 'Bijoux d\'art entièrement fait sur mesure. Une pièce unique créée grâce à la collaboration entre clients, designers et artisans.',
        'ten-feature-custom': 'Entièrement Personnalisé',
        'ten-feature-collaboration': 'Collaboration',
        'ten-feature-unique': 'Unique en son genre',
        'ten-simple-design': 'Design Simple',
        'ten-basic-lacquer': 'Décoration Laque de Base',
        'ten-production-4-6-weeks': 'Production : 4-6 semaines',
        'ten-1-year-warranty': 'Garantie 1 An',
        'ten-popular': 'Populaire',
        'ten-complex-design': 'Support Design Complexe',
        'ten-gold-gem-decoration': 'Décoration Feuille d\'Or et Gemmes',
        'ten-production-6-8-weeks': 'Production : 6-8 semaines',
        'ten-3-year-warranty': 'Garantie 3 Ans',
        'ten-exclusive-case': 'Étui Exclusif',
        'ten-premium-materials': 'Matériaux Premium',
        'ten-rare-gems': 'Gemmes Rares Disponibles',
        'ten-master-craftsman': 'Création Artisan Maître',
        'ten-production-8-10-weeks': 'Production : 8-10 semaines',
        'ten-lifetime-warranty': 'Garantie à Vie',
        'ten-vip-service': 'Service VIP',
        'earrings-piercings': 'Boucles d\'Oreilles et Piercings',
        'made-to-order': 'Fait sur Commande',
        'specifications': 'Spécifications',
        'made-to-order-excellence': 'Excellence sur Commande',
        'made-to-order-desc1': 'Chaque pièce FOMUS PARURE est <strong>méticuleusement fabriquée à la main exclusivement pour vous</strong> par nos maîtres artisans. Cette approche sur commande garantit la plus haute qualité et une attention aux détails que la production de masse ne peut tout simplement pas atteindre.',
        'made-to-order-desc2': '<strong>Délai de livraison :</strong> 1-2 mois à partir de la confirmation de commande<br><em style="color: #666; font-size: 14px;">* Votre patience nous permet de créer quelque chose de vraiment extraordinaire juste pour vous</em>',
        'purchase-with-stripe': 'Acheter avec Stripe',
        'you-may-also-like': 'Vous aimerez aussi',
        'each-piece-exclusive': 'Chaque pièce est fabriquée exclusivement pour vous',
        'crafting-time': '1-2 mois de temps de fabrication',
        'loading-product': 'Chargement des détails du produit...',
        'product-not-found': 'Produit non trouvé',
        'product-not-found-desc': 'Le produit que vous cherchez n\'existe pas ou a été supprimé.',
        'browse-collections': 'Parcourir les Collections',
        'delivery': 'Livraison',
        'months': 'mois',
        'handcrafted-exclusively': 'Chaque pièce est fabriquée à la main exclusivement pour vous par nos maîtres artisans',
        'three-tiers': 'Trois Niveaux',
        'crafted-exclusively-designer': 'Chaque pièce créée exclusivement par collaboration avec le designer',
        'atelier': 'Atelier',
        'maison': 'Maison',
        'haute-couture': 'Haute Couture',
        
        // Éléments spécifiques à la page de collection Kiwami
        'kiwami-eternite-ring-title': 'Bague Éternité',
        'kiwami-celeste-earrings-title': 'Boucles d\'Oreilles Céleste',
        'kiwami-lumiere-necklace-title': 'Collier Lumière',
        'kiwami-empress-tiara-title': 'Tiare Impératrice',
        'footer-copyright': '© 2024 FOMUS PARURE. Tous droits réservés.',
        'language-english': 'Anglais',
        'language-japanese': 'Japonais',
        'language-arabic': 'Arabe',
        'language-french': 'Français',
        'language-chinese': 'Chinois',
        
        // Descriptions de produits
        'mori-18k-white-necklace': 'Collier en or blanc élégant avec cyprès japonais traditionnel.',
        'mori-18k-yellow-necklace': 'Magnifique collier en or jaune avec un artisanat de qualité supérieure.',
        'mori-18k-premium-necklace': 'Collier en or 18 carats de qualité supérieure.',
        'mori-18k-earrings': 'Boucles d\'oreilles en or 18 carats faites à la main avec des motifs traditionnels.',
        'mori-18k-kanzashi': 'Ornement de cheveux japonais traditionnel en or 18 carats.',
        'image-for-illustration': '* Image à titre d\'illustration uniquement',
        'mori-price-euro-only': '€1,295',
        'metal-allergy-safe': 'Sûr pour les allergies aux métaux',
        'mori-story-title': 'Le Pouvoir Guérisseur du Bois',
        'mori-story-desc1': 'La forêt a toujours été un lieu de guérison et de paix pour les gens. Le parfum du bois, le son des feuilles qui bruissent, et la douce lumière du soleil filtrant à travers les arbres.',
        'mori-story-desc2': 'Nous avons créé un design simple mais sophistiqué pour que vous puissiez vous sentir connecté à la nature dans votre vie quotidienne.',
        'other-collections': 'Autres Collections',
        'ten-full-custom-jewelry': 'Bijoux d\'art entièrement personnalisés',
        'ultimate-masterpiece-limited': 'Chef-d\'œuvre ultime limité à 10 ensembles par an',
        'traditional-techniques-modern-design': '1300 ans de techniques traditionnelles et de design moderne fusionnés,<br>Une marque d\'accessoires Masu unique.',
        'craftsmanship': 'Artisanat',
        'quality-guarantee': 'Garantie Qualité'
    },
    
    zh: {
        // 导航
        'nav-brand': '品牌',
        'nav-collections': '系列',
        'nav-story': '故事',
        'nav-contact': '联系我们',
        
        // 主页部分
        'hero-title': '现代时代的1300年珍宝',
        'hero-subtitle-1': '穿戴神圣的枡文化，',
        'hero-subtitle-2': '通过特殊体验创造您的独特故事',
        'hero-badge': '给爱人的终极礼物',
        'hero-cta': '查看系列',
        
        // 理念部分
        'philosophy-title': '穿戴枡的文化',
        'philosophy-tagline': '由1300年历史编织的美学意识',
        'philosophy-desc1': 'FOMUS PARURE是一种独特的奢华艺术珠宝，将拥有1300年历史的"枡"与神社寺庙中使用的最高级日本柏木结合在一起。',
        'philosophy-desc2': '我们将艺术性和工艺注入枡简单而深刻的雕塑美中，实现了装饰空间的艺术品的一面和佩戴时感受到的精致美感。',
        'philosophy-desc3': '它不仅仅是一个配饰，而是一个具有<strong>将日本美学传承到现代的文化价值</strong>的特殊存在。',
        
        // 模特部分
        'models-title': '模特画廊',
        'models-subtitle': '佩戴FOMUS PARURE的优雅风格',
        'mori-collection': '森系列',
        'mori-desc': '融入日常生活的简约优雅风格',
        'ten-kiwami-collection': '天·极系列',
        'ten-kiwami-desc': '装点特殊日子的精致奢华',
        
        // 产品部分
        'products-title': '系列',
        'products-subtitle': '森·天·极 - 穿戴传统的大师阵容',
        'mori-title': '森 - 18K金系列',
        'premium-18k-materials': '优质18K金材料与最高品质的日本柏木结合。融入日常生活的简洁设计，永恒的奢华感。',
        'ten-title': '天 - 全定制',
        'ten-description': '完全定制的艺术珠宝。通过客户、设计师和工匠的合作创造的独一无二的作品。',
        'kiwami-title': '极 - 终极套装',
        'kiwami-description': '每年限量10套的终极杰作。FOMUS PARURE技术和美学的结晶，以终极4件套装穿戴无与伦比的威望。',
        'view-details': '查看详情',
        
        // 礼品体验部分
        'gift-main-title': '给爱人的终极礼物',
        'gift-main-desc': 'FOMUS PARURE是给特殊人士的完美礼物。融入1300年历史和工艺的独特配饰，为接受者带来深刻的情感和持久的价值。',
        'gift-box-title': '专属礼品盒',
        'gift-box-desc': '优质桐木盒和京都水引包装最大化礼品价值。',
        'gift-cert-title': '数字证书',
        'gift-cert-desc': '使用尖端技术的数字证书永久保证真实性和价值。',
        'gift-value-title': '持久价值',
        'gift-value-desc': '融入1300年历史和工艺的珍贵礼物，将被跨越时间地珍爱。',
        'gift-cta-title': '您想开始特殊的礼品体验吗？',
        'gift-cta-desc': '选择FOMUS PARURE的特殊配饰作为给您爱人的礼物。',
        'gift-collection-btn': '查看礼品系列',
        'gift-consultation-btn': '礼品咨询',
        
        // 页脚
        'footer-desc': '1300年传统技法与现代设计融合，<br>独特的枡配饰品牌。',
        'footer-collections': '系列',
        'footer-collections-title': '系列',
        'footer-services': '服务',
        'footer-services-title': '服务',
        'footer-brand-story': '品牌故事',
        'footer-brand-story-link': '品牌故事',
        'footer-craftsmanship': '工艺',
        'footer-quality': '质量保证',
        'footer-company': '公司信息',
        'footer-company-info-title': '企业信息',
        'footer-about': '关于我们',
        'footer-company-overview': '公司概况',
        'footer-privacy': '隐私政策',
        'footer-privacy-policy': '隐私政策',
        'footer-terms': '服务条款',
        'footer-terms-of-use': '使用条款',
        'footer-law': '商业交易法',
        'footer-commercial-transaction-law': '特定商业交易法',
        'footer-contact-link': '联系我们',
        'footer-copyright': '© 2024 FOMUS PARURE. All rights reserved.',
        
        // 系列页面 - 通用
        'collection-products-title': '产品',
        'collection-products-subtitle': '此系列中的可用商品',
        'necklaces': '项链',
        'earrings': '耳环',
        'pierce': '穿孔',
        'kanzashi': '簪',
        'all-items': '所有商品',
        
        // 森系列页面
        'mori-hero-title': '森 - 品牌原创',
        'mori-feature-natural': '天然材料',
        'mori-feature-simple': '简约设计',
        'mori-18k-feature': '18K金',
        
        // 天系列页面
        'ten-hero-title': '天 - 全定制',
        'ten-hero-subtitle': '通过直接咨询创造的您独特的艺术珠宝',
        'ten-feature-consultation': '专属咨询',
        'ten-feature-premium': '优质材料',
        'ten-feature-exclusive': '独家设计',
        'ten-type-title': '选择您的风格',
        'ten-atelier-title': '工作室',
        'ten-atelier-subtitle': '入门奢华',
        'ten-atelier-price': '€2,000',
        'ten-atelier-desc': '通过专业咨询开始您的定制珠宝之旅',
        'ten-maison-title': '大宅',
        'ten-maison-subtitle': '成熟设计',
        'ten-maison-price': '€4,000',
        'ten-maison-desc': '具有成熟设计模式的精致定制珠宝',
        'ten-haute-title': '高级定制',
        'ten-haute-subtitle': '终极创造',
        'ten-haute-price': '€10,000',
        'ten-haute-desc': '无限制的定制珠宝巅峰',
        'ten-process-title': '定制流程',
        'ten-process-consultation': '初步咨询',
        'ten-process-design': '设计创作',
        'ten-process-crafting': '大师工艺',
        'ten-process-delivery': '特别交付',
        'ten-cta-title': '准备创造您的独特作品了吗？',
        'ten-cta-button': '开始咨询',
        
        // 极系列页面
        'kiwami-hero-title': '极 - 终极卓越',
        'kiwami-hero-subtitle': 'FOMUS PARURE的巅峰，每年限量10套',
        'kiwami-feature-annual': '年度10套',
        'kiwami-feature-masterpiece': '大师创作',
        'kiwami-feature-set': '4件套装',
        'kiwami-set-contents': '终极套装内容',
        'kiwami-necklace-title': '签名项链',
        'kiwami-necklace-desc': '采用最优质18K金和神圣桧木的中心作品',
        'kiwami-earrings-title': '配套耳环',
        'kiwami-earrings-desc': '完美平衡的耳环，与项链相得益彰',
        'kiwami-bracelet-title': '精致手链',
        'kiwami-bracelet-desc': '展示复杂工艺的优雅手链',
        'kiwami-ring-title': '宣言戒指',
        'kiwami-ring-desc': '体现FOMUS PARURE精髓的戒指',
        'kiwami-special-title': '为什么极如此特别',
        'kiwami-special-subtitle': '日本工艺的终极表达',
        'kiwami-exclusive-title': '独家特权',
        'kiwami-vip-title': 'VIP体验',
        'kiwami-vip-desc': '个人工作室参观和与大师工匠的直接咨询',
        'kiwami-certificate-title': '传承证书',
        'kiwami-certificate-desc': '带有完整出处和工艺细节的编号证书',
        'kiwami-care-title': '终身护理',
        'kiwami-care-desc': '免费的终身维护和修复服务',
        'kiwami-cta-button': '咨询极系列',
        
        // Additional Kiwami translations
        'kiwami-story-title': '工艺的巅峰',
        'kiwami-story-desc1': '极系列代表着我们工艺技术的绝对巅峰。每年仅限10套，每套都体现了我们最高水平的工艺和设计卓越。',
        'kiwami-story-desc2': '这个终极系列结合了传统的日本技法与现代奢华，创造出将被世代珍藏的作品。每套都是我们对完美承诺的证明。',
        'kiwami-eternite-ring-desc': '稀有黑钻石与顶级漆器的融合。手指上的终极存在感。',
        'kiwami-celeste-earrings-desc': '24K金与红宝石的闪耀。耳边摇曳的威严之美。',
        'kiwami-lumiere-necklace-desc': '铂金链中蕴含的桝的精髓。装点胸前的至高光辉。',
        'kiwami-empress-tiara-desc': '钻石编织的终极皇冠。象征极致巅峰的杰作。',
        'kiwami-feature-limited': '限量版',
        'kiwami-feature-ultimate': '终极品质',
        'kiwami-feature-prestige': '无与伦比的威望',
        'kiwami-price-set': '极系列4件套装',
        'tax-included': '含税',
        'kiwami-dedicated-concierge': '专属礼宾',
        'kiwami-dedicated-concierge-desc': '从购买到售后，专属工作人员全程服务',
        'kiwami-lifetime-warranty': '终身保修·免费维护',
        'lifetime-quality-guarantee': '终身品质保证和维护',
        'kiwami-certification': '认证证书',
        'kiwami-certification-desc': '发行带有限量编号的官方认证证书',
        'kiwami-special-gift-box': '特别礼盒',
        'kiwami-special-gift-box-desc': '桐木高级盒装与京都水引包装',
        'kiwami-pre-screening': '预审申请',
        'kiwami-pre-screening-desc': '由于限量10套，将进行预审',
        'kiwami-private-exhibition': '私人展示',
        'kiwami-private-exhibition-desc': '完全预约制的私人展示指导',
        'kiwami-contract-production': '签约·开始制作',
        'kiwami-contract-production-desc': '签约后，由大师工匠开始制作',
        'kiwami-special-delivery': '特别交付仪式',
        'kiwami-special-delivery-desc': '完成后举行特别的交付仪式',
        'kiwami-apply-pre-screening': '申请预审',
        
        // 系列页面的额外翻译
        'home': '首页',
        'collections': '系列',
        'ten-hero-description': '完全定制的艺术珠宝。通过客户、设计师和工匠之间的合作创造的独一无二的作品。',
        'ten-feature-custom': '全定制',
        'ten-feature-collaboration': '合作',
        'ten-feature-unique': '独一无二',
        'ten-simple-design': '简约设计',
        'ten-basic-lacquer': '基础漆装饰',
        'ten-production-4-6-weeks': '制作：4-6周',
        'ten-1-year-warranty': '1年保修',
        'ten-popular': '热门',
        'ten-complex-design': '复杂设计支持',
        'ten-gold-gem-decoration': '金箔和宝石装饰',
        'ten-production-6-8-weeks': '制作：6-8周',
        'ten-3-year-warranty': '3年保修',
        'ten-exclusive-case': '专属包装盒',
        'ten-premium-materials': '优质材料使用',
        'ten-rare-gems': '稀有宝石可用',
        'ten-master-craftsman': '大师工匠创作',
        'ten-production-8-10-weeks': '制作：8-10周',
        'ten-lifetime-warranty': '终身保修',
        'ten-vip-service': 'VIP服务',
        'earrings-piercings': '耳环和穿孔',
        'made-to-order': '定制制作',
        'specifications': '规格参数',
        'made-to-order-excellence': '定制制作的卓越品质',
        'made-to-order-desc1': '每件FOMUS PARURE作品都由我们的大师工匠<strong>专门为您精心手工制作</strong>。这种定制制作方式确保最高品质和对细节的关注，这是大规模生产根本无法实现的。',
        'made-to-order-desc2': '<strong>交付时间：</strong>订单确认后1-2个月<br><em style="color: #666; font-size: 14px;">* 您的耐心让我们能为您创造真正非凡的作品</em>',
        'purchase-with-stripe': '使用Stripe购买',
        'you-may-also-like': '您可能还喜欢',
        'each-piece-exclusive': '每件作品都专为您独家制作',
        'crafting-time': '1-2个月制作时间',
        'loading-product': '正在加载产品详情...',
        'product-not-found': '未找到产品',
        'product-not-found-desc': '您要查找的产品不存在或已被删除。',
        'browse-collections': '浏览系列',
        'delivery': '交付',
        'months': '个月',
        'handcrafted-exclusively': '每一件作品都是由我们的大师工匠专门为您手工制作',
        'three-tiers': '三个层级',
        'crafted-exclusively-designer': '每件作品都通过与设计师的合作独家制作',
        'atelier': '工作室',
        'maison': '大宅',
        'haute-couture': '高级定制',
        
        // 极系列页面专用项目
        'kiwami-eternite-ring-title': '永恒戒指',
        'kiwami-celeste-earrings-title': '天体耳环',
        'kiwami-lumiere-necklace-title': '光芒项链',
        'kiwami-empress-tiara-title': '女皇皇冠',
        'footer-copyright': '© 2024 FOMUS PARURE. 保留所有权利。',
        'language-english': '英语',
        'language-japanese': '日语',
        'language-arabic': '阿拉伯语',
        'language-french': '法语',
        'language-chinese': '中文',
        
        // 产品描述
        'mori-18k-white-necklace': '采用传统日本柏木的优雅白金项链。',
        'mori-18k-yellow-necklace': '精湛工艺的美丽黄金项链。',
        'mori-18k-premium-necklace': '采用18K金的高端项链。',
        'mori-18k-earrings': '采用传统图案的手工18K金耳环。',
        'mori-18k-kanzashi': '采用18K金制作的传统日式发饰。',
        'image-for-illustration': '* 图片仅供示意',
        'mori-price-euro-only': '€1,295',
        'metal-allergy-safe': '金属过敏安全',
        'mori-story-title': '木材的治愈力量',
        'mori-story-desc1': '森林一直是人们治愈和宁静的地方。木材的香气、树叶沙沙的声音、以及透过树木过滤的柔和阳光。',
        'mori-story-desc2': '我们创造了简约而精致的设计，让您在日常生活中能够感受到与自然的联系。',
        'other-collections': '其他系列',
        'ten-full-custom-jewelry': '完全定制的艺术珠宝',
        'ultimate-masterpiece-limited': '每年限量10套的终极杰作',
        'traditional-techniques-modern-design': '1300年传统技法与现代设计的融合，<br>独特的枡配饰品牌。',
        'craftsmanship': '工艺',
        'quality-guarantee': '品质保证'
    }
};

// Language management class
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('fomus_language') || 'en';
        this.initialize();
    }

    initialize() {
        this.updatePageLanguage();
        this.setupLanguageSelector();
        this.updateCurrentLanguageDisplay();
    }

    // Set up language selector functionality
    setupLanguageSelector() {
        const toggle = document.getElementById('language-toggle');
        const dropdown = document.getElementById('language-dropdown');
        const options = document.querySelectorAll('.language-option');

        if (!toggle || !dropdown) return;

        // Toggle dropdown
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('open');
            toggle.classList.toggle('open');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            dropdown.classList.remove('open');
            toggle.classList.remove('open');
        });

        // Handle language selection
        options.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const selectedLang = option.dataset.lang;
                this.changeLanguage(selectedLang);
                dropdown.classList.remove('open');
                toggle.classList.remove('open');
            });
        });

        // Mark current language as active
        this.updateActiveLanguageOption();
    }

    // Change the current language
    changeLanguage(languageCode) {
        if (this.currentLanguage === languageCode) return;
        
        this.currentLanguage = languageCode;
        localStorage.setItem('fomus_language', languageCode);
        
        // Add animation class
        document.body.classList.add('language-switch-animation');
        
        setTimeout(() => {
            this.updatePageLanguage();
            this.updateCurrentLanguageDisplay();
            this.updateActiveLanguageOption();
            this.updatePageDirection();
            
            // Remove animation class
            setTimeout(() => {
                document.body.classList.remove('language-switch-animation');
            }, 100);
        }, 250);

        // Analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'language_change', {
                'event_category': 'internationalization',
                'event_label': languageCode
            });
        }
    }

    // Update all translatable elements on the page
    updatePageLanguage() {
        const translatableElements = document.querySelectorAll('[data-translate]');
        const langData = translations[this.currentLanguage] || translations.en;
        
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (langData[key]) {
                // Always use textContent for security, unless the element already contains child nodes
                if (element.children.length > 0) {
                    // If element has child elements, preserve structure and only update text content
                    element.textContent = langData[key];
                } else {
                    element.textContent = langData[key];
                }
            }
        });

        // Update page language attribute
        document.documentElement.lang = this.currentLanguage;
    }

    // Update the current language display
    updateCurrentLanguageDisplay() {
        const currentLangElement = document.getElementById('current-language');
        if (currentLangElement) {
            const langCodes = {
                'en': 'EN',
                'ja': 'JA',
                'ar': 'AR',
                'fr': 'FR',
                'zh': 'ZH'
            };
            currentLangElement.textContent = langCodes[this.currentLanguage] || 'EN';
        }
    }

    // Update active language option
    updateActiveLanguageOption() {
        const options = document.querySelectorAll('.language-option');
        options.forEach(option => {
            if (option.dataset.lang === this.currentLanguage) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }

    // Update page direction for RTL languages
    updatePageDirection() {
        const rtlLanguages = ['ar'];
        const isRTL = rtlLanguages.includes(this.currentLanguage);
        
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('lang', this.currentLanguage);
        
        if (isRTL) {
            document.body.classList.add('rtl');
        } else {
            document.body.classList.remove('rtl');
        }
    }

    // Get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Get translation for a specific key
    getTranslation(key, language = null) {
        const lang = language || this.currentLanguage;
        const langData = translations[lang] || translations.en;
        return langData[key] || key;
    }

    // Add new translation
    addTranslation(language, key, value) {
        if (!translations[language]) {
            translations[language] = {};
        }
        translations[language][key] = value;
    }

    // Load translations from external source
    async loadTranslations(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            Object.assign(translations, data);
            this.updatePageLanguage();
        } catch (error) {
            console.error('Failed to load translations:', error);
        }
    }
}

// Initialize language manager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LanguageManager, translations };
}