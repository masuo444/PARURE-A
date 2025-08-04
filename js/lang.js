// Language switching functionality
class LanguageManager {
    constructor() {
        this.currentLang = 'en'; 
        this.translations = {};
        this.init();
    }

    init() {
        this.loadTranslations();
        this.setupLanguageSelector();
        this.detectLanguage();
    }

    loadTranslations() {
        this.translations = {
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
                'mori-description': 'Simple design that blends into daily life, where you can feel the blessings of nature and the warmth of cypress. A diverse original brand line.',
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
                'footer-services': 'Services',
                'footer-brand-story': 'Brand Story',
                'footer-craftsmanship': 'Craftsmanship',
                'footer-quality': 'Quality Guarantee',
                'footer-company': 'Company Information',
                'footer-about': 'About Us',
                'footer-privacy': 'Privacy Policy',
                'footer-terms': 'Terms of Service',
                'footer-law': 'Commercial Transaction Act',

                // Collection Pages
                'collection-hero-title': 'Collection',
                'collection-hero-subtitle': 'Discover our unique designs',
                'collection-story-title': 'Collection Story',
                'collection-story-subtitle': 'The inspiration behind our craft',
                'collection-products-title': 'Products',
                'collection-products-subtitle': 'Available items in this collection',
                'back-to-collections': 'Back to Collections',
                'price': 'Price',
                'add-to-cart': 'Add to Cart',
                'product-details': 'Product Details',
                'material': 'Material',
                'dimensions': 'Dimensions',
                'handcrafted': 'Handcrafted',
                'limited-edition': 'Limited Edition',

                // Mori Collection Specific
                'mori-hero-title': 'Mori - Brand Original',
                'mori-hero-description': 'Simple design that blends into daily life, where you can feel the blessings of nature and the warmth of cypress. A diverse original brand line.',
                'mori-feature-natural': 'Natural Materials',
                'mori-feature-simple': 'Simple Design',
                'mori-feature-daily': 'Daily Use',
                'mori-story-title': 'The Healing Power of Wood',
                'mori-story-desc1': 'The Mori Collection was born from inspiration drawn from Japan\'s rich forests. The natural warmth of cypress wood and the beautiful grain patterns create expressions that bring tranquility and peace to the wearer.',
                'mori-story-desc2': 'We have created a simple yet sophisticated design so that you can feel connected to nature in your daily life. By wearing it every day, you can incorporate the peace of wood into your busy modern life.',
                
                // Ten Collection Specific
                'ten-hero-title': 'Ten - Full Custom',
                'ten-hero-description': 'Fully custom-made art jewelry. A one-of-a-kind piece created through collaboration between customers, designers, and craftsmen.',
                'ten-feature-custom': 'Full Custom',
                'ten-feature-unique': 'One-of-a-kind',
                'ten-feature-collaboration': 'Collaboration',
                'ten-story-title': 'Art Born from Collaboration',
                'ten-story-desc1': 'The Ten Collection represents the pinnacle of custom jewelry making. Each piece is created through close collaboration between our customers, designers, and master craftsmen.',
                'ten-story-desc2': 'From initial concept to final creation, every step is carefully planned and executed to create a truly unique piece that reflects the customer\'s vision and our artisanal excellence.',
                
                // Kiwami Collection Specific
                'kiwami-hero-title': 'Kiwami - Ultimate Set',
                'kiwami-hero-description': 'The ultimate masterpiece limited to 10 sets per year. The culmination of FOMUS PARURE\'s technology and aesthetics, wearing unparalleled prestige with the ultimate 4-piece set.',
                'kiwami-feature-ultimate': 'Ultimate Quality',
                'kiwami-feature-limited': 'Limited Edition',
                'kiwami-feature-prestige': 'Unparalleled Prestige',
                'kiwami-story-title': 'The Pinnacle of Craftsmanship',
                'kiwami-story-desc1': 'The Kiwami Collection represents the absolute pinnacle of our artisanal skills. Limited to just 10 sets per year, each set embodies our highest level of craftsmanship and design excellence.',
                'kiwami-story-desc2': 'This ultimate collection combines traditional Japanese techniques with modern luxury, creating pieces that will be treasured for generations. Each set is a testament to our commitment to perfection.',
                
                'home': 'Home',
                'collections': 'Collections',
                
                // New translation keys for collection pages
                'product-lineup': 'Product Lineup',
                'simple-refined-white-necklace': 'Simple and refined white necklace.',
                'tax-included': 'Tax included',
                'ultimate-masterpiece-limited': 'Ultimate masterpiece limited to 10 sets per year',
                'traditional-techniques-modern-design': '1300 years of traditional techniques and modern design fused,',
                'brand-original': 'Brand Original',
                
                // Category navigation
                'necklaces': 'Necklaces',
                'earrings-piercings': 'Earrings・Piercings',
                'kanzashi': 'Kanzashi',
                
                // Product descriptions
                'warm-yellow-necklace': 'Warm yellow necklace.',
                'premium-18k-necklace': 'Premium necklace using 18k gold.',
                'tonbo-dama-blue-earring': 'Earrings expressing the beautiful blue of Tonbo-dama.',
                'red-flower-motif-earring': 'Earrings with red flower petal motif.',
                'white-flower-motif-earring': 'Earrings with white flower petal motif.',
                'traditional-temari-black-pierce': 'Black piercings with traditional Temari motif.',
                'traditional-temari-white-pierce': 'White piercings with traditional Temari motif.',
                'black-flower-motif-pierce': 'Piercings with black flower petal motif.',
                'yellow-flower-motif-earring': 'Earrings with yellow flower motif.',
                'white-flower-motif-earring-small': 'Earrings with white flower motif.',
                'traditional-kanzashi-beauty': 'A masterpiece that revives the beauty of traditional Kanzashi in modern times.',
                
                // Other collections section
                'other-collections': 'Other Collections',
                'ten-full-custom-jewelry': 'Fully custom-made art jewelry',
                
                // Footer service links
                'craftsmanship': 'Craftsmanship',
                'quality-guarantee': 'Quality Guarantee',

                // Mori 18k Updates
                'mori-18k-feature': '18k Gold',
                'metal-allergy-safe': 'Metal Allergy Safe',
                'hypoallergenic': 'Hypoallergenic',
                'premium-18k-materials': 'Premium 18k gold materials combined with the finest Japanese cypress. Simple design that blends into daily life with luxury that lasts forever.',
                'allergy-friendly-design': 'Allergy-friendly design for sensitive skin',
                'mori-price': '€1,295',
                'mori-price-jp': '¥129,500',
                'mori-18k-white-necklace': 'Elegant 18k gold necklace with white cypress elements. Hypoallergenic design safe for sensitive skin.',
                'mori-18k-yellow-necklace': 'Warm 18k gold necklace with yellow cypress accents. Premium materials with allergy-safe guarantee.',
                'mori-18k-premium-necklace': 'Premium 18k gold necklace with finest Japanese cypress. Ultimate luxury meets daily comfort.',
                'mori-18k-earrings': '18k gold earrings with natural cypress elements. Hypoallergenic and perfect for sensitive ears.',
                'mori-18k-kanzashi': 'Traditional 18k gold Kanzashi with premium cypress. Hypoallergenic masterpiece reviving classical beauty.',
                'image-for-illustration': 'Image is for illustration purposes only',
                'mori-price-euro-only': '€1,295',
                'lifetime-quality-guarantee': 'Lifetime quality guarantee and maintenance',
                
                // Kiwami Collection Additional Keys
                'kiwami-eternite-ring-desc': 'Fusion of rare black diamonds and the finest lacquer. Ultimate presence dwelling in the finger.',
                'kiwami-celeste-earrings-desc': 'Brilliance of 24k gold and ruby. Dignified beauty swaying at the ears.',
                'kiwami-lumiere-necklace-desc': 'The essence of Masu dwelling in platinum chain. Supreme radiance adorning the chest.',
                'kiwami-empress-tiara-desc': 'Ultimate crown woven by diamonds. A masterpiece truly symbolizing the pinnacle of Kiwami.',
                'kiwami-price-set': 'Kiwami Collection 4-piece Set',
                'kiwami-dedicated-concierge': 'Dedicated Concierge',
                'kiwami-dedicated-concierge-desc': 'Dedicated staff handles everything from purchase to aftercare',
                'kiwami-lifetime-warranty': 'Lifetime Warranty & Free Maintenance',
                'kiwami-certification': 'Certification',
                'kiwami-certification-desc': 'Official certification with limited serial number',
                'kiwami-special-gift-box': 'Special Gift Box',
                'kiwami-special-gift-box-desc': 'Paulownia premium case and Kyoto mizuhiki wrapping',
                'kiwami-pre-screening': 'Pre-screening Application',
                'kiwami-pre-screening-desc': 'Pre-screening is conducted due to the limited 10 sets',
                'kiwami-private-exhibition': 'Private Exhibition',
                'kiwami-private-exhibition-desc': 'Private exhibition by complete reservation system',
                'kiwami-contract-production': 'Contract & Production Start',
                'kiwami-contract-production-desc': 'After contract, master craftsman begins production',
                'kiwami-special-delivery': 'Special Delivery Ceremony',
                'kiwami-special-delivery-desc': 'Special delivery ceremony held after completion',
                'kiwami-apply-pre-screening': 'Apply for Pre-screening',
                'mori-simple-line': 'Simple line where you can feel the warmth of cypress wood',
                
                // Ten Collection Additional Keys
                'ten-popular': 'Popular',
                'ten-simple-design': 'Simple design',
                'ten-basic-lacquer': 'Basic lacquer decoration',
                'ten-production-4-6-weeks': 'Production period: 4-6 weeks',
                'ten-1-year-warranty': '1 year warranty',
                'ten-complex-design': 'Complex design support',
                'ten-gold-gem-decoration': 'Gold leaf & gem decoration',
                'ten-production-6-8-weeks': 'Production period: 6-8 weeks',
                'ten-3-year-warranty': '3 year warranty',
                'ten-exclusive-case': 'Exclusive case',
                'ten-premium-materials': 'Premium materials used',
                'ten-rare-gems': 'Rare gem support',
                'ten-master-craftsman': 'Master craftsman production',
                'ten-lifetime-warranty': 'Lifetime warranty',
                'ten-vip-service': 'VIP service',
                'ten-free-consultation': 'Free Consultation Booking',
                'ten-document-request': 'Document Request',
                
                // Common Japanese region/payment terms
                'japan-yen': 'Japan (¥)',
                'europe-euro': 'Europe (€)',
                
                // Footer sections
                'footer-collections-title': 'Collections',
                'footer-services-title': 'Services',
                'footer-brand-story-link': 'Brand Story',
                'footer-contact-link': 'Contact Us',
                'footer-company-info-title': 'Company Information',
                'footer-company-overview': 'Company Overview',
                'footer-privacy-policy': 'Privacy Policy',
                'footer-terms-of-use': 'Terms of Use',
                'footer-commercial-transaction-law': 'Commercial Transaction Law'
            },
            ja: {
                // Navigation
                'nav-brand': 'ブランド',
                'nav-collections': 'コレクション',
                'nav-story': 'ストーリー',
                'nav-contact': 'お問い合わせ',
                
                // Hero Section
                'hero-title': '千三百年の宝物を現代に',
                'hero-subtitle-1': '神聖なる枡の文化を纏い、',
                'hero-subtitle-2': 'あなただけの物語を紡ぐ特別な体験',
                'hero-badge': '大切な人への極上の贈り物',
                'hero-cta': 'コレクションを見る',
                
                // Philosophy Section
                'philosophy-title': '枡という文化を纏う',
                'philosophy-tagline': '1300年の歴史が織りなす美意識',
                'philosophy-desc1': 'FOMUS PARUREは、1300年の歴史が息づく「枡」を、神社仏閣にも使用される国産ヒノキという最高級素材を組み合わせた、唯一無二のラグジュアリーアートジュエリーです。',
                'philosophy-desc2': '私たちは、枡のシンプルながらも奥深い造形美に、芸術性と職人技を注ぎ込み、空間を彩るアートピースとしての側面と、身につけることで感じる洗練の美を両立させました。',
                'philosophy-desc3': 'それは単なるアクセサリーではなく、<strong>日本の美意識を現代に継承する文化的価値</strong>を持つ、特別な存在です。',
                
                // Models Section
                'models-title': 'Model Gallery',
                'models-subtitle': 'FOMUS PARUREを纏うエレガントなスタイル',
                'mori-collection': '森コレクション',
                'mori-desc': '日常に溶け込むシンプルで上品なスタイル',
                'ten-kiwami-collection': '天・極コレクション',
                'ten-kiwami-desc': '特別な日を彩る洗練されたラグジュアリー',
                
                // Products Section
                'products-title': 'Collections',
                'products-subtitle': '森・天・極 - 伝統を纏う匠のラインナップ',
                'mori-title': '森 (Mori) - 18k金コレクション',
                'mori-description': '自然の恵みとヒノキの温もりが感じられる、日常に溶け込むシンプルなデザイン。ブランドオリジナルの多彩なライン。',
                'ten-title': '天 (Ten) - Full Custom',
                'ten-description': '完全オーダーメイドのオートジュエリー。お客様とデザイナー、職人が協働して創り上げる世界に一つの作品。',
                'kiwami-title': '極 (Kiwami) - Ultimate Set',
                'kiwami-description': '年間10セット限定の最高峰マスターピース。究極の4点セットで、比類なき威光を纏うFOMUS PARUREの技術と美意識の集大成。',
                'view-details': '詳細を見る',
                
                // Gift Experience Section
                'gift-main-title': '大切な人への極上の贈り物',
                'gift-main-desc': 'FOMUS PARUREは、特別な人への贈り物として最適です。1300年の歴史と職人の技が込められた唯一無二のアクセサリーは、受け取る人に深い感動と永続的な価値をもたらします。',
                'gift-box-title': '専用ギフトボックス',
                'gift-box-desc': '桐製の高級ケースと京都の水引包装で、贈り物としての価値を最大限に演出します。',
                'gift-cert-title': 'デジタル証明証',
                'gift-cert-desc': '最先端テクノロジーを活用したデジタル証明証で、真正性と価値を永続的に保証します。',
                'gift-value-title': '永続的な価値',
                'gift-value-desc': '1300年の歴史と職人の技が込められた、時代を超えて愛され続ける価値ある贈り物。',
                'gift-cta-title': '特別なギフト体験を始めませんか？',
                'gift-cta-desc': '大切な人への贈り物として、FOMUS PARUREの特別なアクセサリーをお選びください。',
                'gift-collection-btn': 'ギフトコレクションを見る',
                'gift-consultation-btn': 'ギフト相談',
                
                // Footer
                'footer-desc': '1300年の伝統技法と現代デザインが融合した、<br>唯一無二の枡アクセサリーブランド。',
                'footer-collections': 'コレクション',
                'footer-services': 'サービス',
                'footer-brand-story': 'ブランドストーリー',
                'footer-craftsmanship': '職人の技',
                'footer-quality': '品質保証',
                'footer-company': '企業情報',
                'footer-about': '会社概要',
                'footer-privacy': 'プライバシーポリシー',
                'footer-terms': '利用規約',
                'footer-law': '特定商取引法',

                // Collection Pages
                'collection-hero-title': 'コレクション',
                'collection-hero-subtitle': '独自のデザインをご覧ください',
                'collection-story-title': 'コレクションストーリー',
                'collection-story-subtitle': '私たちのクラフトのインスピレーション',
                'collection-products-title': '製品',
                'collection-products-subtitle': 'このコレクションで利用可能なアイテム',
                'back-to-collections': 'コレクション一覧に戻る',
                'price': '価格',
                'add-to-cart': 'カートに追加',
                'product-details': '製品詳細',
                'material': '素材',
                'dimensions': 'サイズ',
                'handcrafted': '手作り',
                'limited-edition': '限定版',

                // Mori Collection Specific
                'mori-hero-title': '森 (Mori) - Brand Original',
                'mori-hero-description': '自然の恵みとヒノキの温もりが感じられる、日常に溶け込むシンプルなデザイン。ブランドオリジナルの多彩なライン。',
                'mori-feature-natural': '自然素材',
                'mori-feature-simple': 'シンプルデザイン',
                'mori-feature-daily': '日常使い',
                'mori-story-title': '木が持つ、癒しの力',
                'mori-story-desc1': '森コレクションは、日本の豊かな森林からインスピレーションを得て生まれました。ひのき材が持つ自然の温もりと、その美しい木目が織りなす表情は、身に着ける人に静寂と安らぎをもたらします。',
                'mori-story-desc2': '日常の中で自然とのつながりを感じられるよう、シンプルでありながらも洗練されたデザインに仕上げました。毎日身に着けることで、忙しい現代生活に木の安らぎを取り入れることができます。',
                
                // Ten Collection Specific
                'ten-hero-title': '天 (Ten) - Full Custom',
                'ten-hero-description': '完全オーダーメイドのオートジュエリー。お客様とデザイナー、職人が協働して創り上げる世界に一つの作品。',
                'ten-feature-custom': '完全オーダーメイド',
                'ten-feature-unique': '唯一無二',
                'ten-feature-collaboration': 'デザイナー協働',
                'ten-story-title': '協働から生まれるアート',
                'ten-story-desc1': '天コレクションは、カスタムジュエリー制作の頂点を表しています。お客様、デザイナー、マスター職人の密接な協力により、一つ一つの作品が創り上げられます。',
                'ten-story-desc2': '初期のコンセプトから最終的な創作まで、すべてのステップが慎重に計画・実行され、お客様のビジョンと私たちの職人的卓越性を反映した真にユニークな作品を創り出します。',
                
                // Kiwami Collection Specific
                'kiwami-hero-title': '極 (Kiwami) - Ultimate Set',
                'kiwami-hero-description': '年間10セット限定の最高峰マスターピース。究極の4点セットで、比類なき威光を纏うFOMUS PARUREの技術と美意識の集大成。',
                'kiwami-feature-ultimate': '最高級品質',
                'kiwami-feature-limited': '年間10セット限定',
                'kiwami-feature-prestige': '比類なき威光',
                'kiwami-story-title': '職人技の頂点',
                'kiwami-story-desc1': '極コレクションは、私たちの職人技術の絶対的な頂点を表しています。年間わずか10セットに限定され、各セットは私たちの最高レベルの職人技とデザインの卓越性を体現しています。',
                'kiwami-story-desc2': 'この究極のコレクションは、伝統的な日本の技法と現代のラグジュアリーを組み合わせ、何世代にもわたって大切にされる作品を創り出します。各セットは、完璧さへの私たちのコミットメントの証しです。',
                
                'home': 'ホーム',
                'collections': 'コレクション',
                
                // New translation keys for collection pages
                'product-lineup': '商品ラインナップ',
                'simple-refined-white-necklace': 'シンプルで洗練されたホワイトネックレス。',
                'tax-included': '税込',
                'ultimate-masterpiece-limited': '年間10セット限定の最高峰',
                'traditional-techniques-modern-design': '1300年の伝統技法と現代デザインが融合した、',
                'brand-original': 'ブランドオリジナル',
                
                // Category navigation
                'necklaces': 'ネックレス',
                'earrings-piercings': 'イヤリング・ピアス',
                'kanzashi': 'かんざし',
                
                // Product descriptions
                'warm-yellow-necklace': '温かみのあるイエローネックレス。',
                'premium-18k-necklace': '18金を使用したプレミアムネックレス。',
                'tonbo-dama-blue-earring': 'トンボ玉の美しい青を表現したイヤリング。',
                'red-flower-motif-earring': '紅い花びらのモチーフのイヤリング。',
                'white-flower-motif-earring': '白い花びらのモチーフのイヤリング。',
                'traditional-temari-black-pierce': '伝統的な手毬モチーフのブラックピアス。',
                'traditional-temari-white-pierce': '伝統的な手毬モチーフのホワイトピアス。',
                'black-flower-motif-pierce': '黒い花びらのモチーフのピアス。',
                'yellow-flower-motif-earring': '黄色い花のモチーフのイヤリング。',
                'white-flower-motif-earring-small': '白い花のモチーフのイヤリング。',
                'traditional-kanzashi-beauty': '伝統的なかんざしの美しさを現代に蘇らせた逸品。',
                
                // Other collections section
                'other-collections': 'その他のコレクション',
                'ten-full-custom-jewelry': '完全オーダーメイドのオートジュエリー',
                
                // Footer service links
                'craftsmanship': '職人の技',
                'quality-guarantee': '品質保証',

                // Mori 18k Updates
                'mori-18k-feature': '18k金',
                'metal-allergy-safe': '金属アレルギー対応',
                'hypoallergenic': 'ハイポアレルジェニック',
                'premium-18k-materials': '最高級18k金素材と国産ヒノキの融合。永続する高級感と共に日常に溶け込むシンプルなデザイン。',
                'allergy-friendly-design': '敏感肌にも優しいアレルギー対応設計',
                'mori-price': '€1,295',
                'mori-price-jp': '¥129,500',
                'mori-18k-white-necklace': 'エレガントな18k金ネックレスと白いヒノキ要素の組み合わせ。敏感肌にも安全なハイポアレルジェニック設計。',
                'mori-18k-yellow-necklace': '温かみのある18k金ネックレスとイエローヒノキアクセント。アレルギー対応保証付きプレミアム素材。',
                'mori-18k-premium-necklace': '最高級日本産ヒノキと18k金のプレミアムネックレス。上質な贅沢と日常の快適さの融合。',
                'mori-18k-earrings': '天然ヒノキ要素を含む18k金イヤリング。ハイポアレルジェニックで敏感な耳にも最適。',
                'mori-18k-kanzashi': 'プレミアムヒノキと18k金の伝統かんざし。古典美を現代に蘇らせるハイポアレルジェニック傑作。',
                'image-for-illustration': '画像はイメージです',
                'mori-price-euro-only': '€1,295',
                'lifetime-quality-guarantee': '生涯にわたる品質保証とメンテナンス',
                
                // Kiwami Collection Additional Keys
                'kiwami-eternite-ring-desc': '希少なブラックダイヤモンドと最高級漆の融合。指に宿る究極の存在感。',
                'kiwami-celeste-earrings-desc': '24金とルビーの煌めき。耳元で揺れる威厳ある美しさ。',
                'kiwami-lumiere-necklace-desc': 'プラチナチェーンに宿る枡の神髄。胸元を彩る至高の輝き。',
                'kiwami-empress-tiara-desc': 'ダイヤモンドが織りなす究極の冠。まさに極の頂点を象徴する逸品。',
                'kiwami-price-set': '極コレクション 4点セット',
                'kiwami-dedicated-concierge': '専任コンシェルジュ',
                'kiwami-dedicated-concierge-desc': '購入からアフターケアまで専任スタッフが対応',
                'kiwami-lifetime-warranty': '永久保証・無料メンテナンス',
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
                'mori-simple-line': 'ひのき材の温もりを感じるシンプルライン',
                
                // Ten Collection Additional Keys
                'ten-popular': '人気',
                'ten-simple-design': 'シンプルなデザイン',
                'ten-basic-lacquer': '基本的な漆装飾',
                'ten-production-4-6-weeks': '制作期間：4-6週間',
                'ten-1-year-warranty': '1年間保証',
                'ten-complex-design': '複雑なデザイン対応',
                'ten-gold-gem-decoration': '金箔・宝石装飾',
                'ten-production-6-8-weeks': '制作期間：6-8週間',
                'ten-3-year-warranty': '3年間保証',
                'ten-exclusive-case': '専用化粧箱',
                'ten-premium-materials': '最高級素材使用',
                'ten-rare-gems': '希少宝石対応',
                'ten-master-craftsman': 'マスター職人制作',
                'ten-lifetime-warranty': '永久保証',
                'ten-vip-service': 'VIPサービス',
                'ten-free-consultation': '無料相談を予約',
                'ten-document-request': '資料請求',
                
                // Common Japanese region/payment terms
                'japan-yen': '日本 (¥)',
                'europe-euro': 'ヨーロッパ (€)',
                
                // Footer sections
                'footer-collections-title': 'コレクション',
                'footer-services-title': 'サービス',
                'footer-brand-story-link': 'ブランドストーリー',
                'footer-contact-link': 'お問い合わせ',
                'footer-company-info-title': '企業情報',
                'footer-company-overview': '会社概要',
                'footer-privacy-policy': 'プライバシーポリシー',
                'footer-terms-of-use': '利用規約',
                'footer-commercial-transaction-law': '特定商取引法'
            },
            ar: {
                // Navigation
                'nav-brand': 'العلامة التجارية',
                'nav-collections': 'المجموعات',
                'nav-story': 'القصة',
                'nav-contact': 'اتصل بنا',
                
                // Hero Section
                'hero-title': '1300 عام من الكنوز في العصر الحديث',
                'hero-subtitle-1': 'ارتدي الثقافة المقدسة لماسو،',
                'hero-subtitle-2': 'اصنع قصتك الفريدة من خلال تجربة خاصة',
                'hero-badge': 'الهدية المثالية للأحباء',
                'hero-cta': 'عرض المجموعات',
                
                // Philosophy Section
                'philosophy-title': 'ارتدي ثقافة ماسو',
                'philosophy-tagline': 'الوعي الجمالي المنسوج من 1300 عام من التاريخ',
                'philosophy-desc1': 'FOMUS PARURE هي مجوهرات فنية فاخرة فريدة تجمع بين "ماسو" مع 1300 عام من التاريخ مع أجود أنواع السرو اليابانية المستخدمة في المعابد والأضرحة.',
                'philosophy-desc2': 'لقد سكبنا الفن والحرفية في الجمال النحتي البسيط والعميق لماسو، محققين كلاً من جانب القطعة الفنية التي تزين المساحة والجمال المكرر الذي يُشعر به عند الارتداء.',
                'philosophy-desc3': 'إنها ليست مجرد إكسسوار، بل وجود خاص ذو <strong>قيمة ثقافية ترث الجماليات اليابانية للعصر الحديث</strong>.',
                
                // Models Section
                'models-title': 'معرض العارضات',
                'models-subtitle': 'أنماط أنيقة ترتدي FOMUS PARURE',
                'mori-collection': 'مجموعة موري',
                'mori-desc': 'أسلوب بسيط وأنيق يمتزج مع الحياة اليومية',
                'ten-kiwami-collection': 'مجموعة تين • كيوامي',
                'ten-kiwami-desc': 'رفاهية متطورة تزين الأيام الخاصة',
                
                // Products Section
                'products-title': 'المجموعات',
                'products-subtitle': 'موري • تين • كيوامي - تشكيل الخبراء الذين يرتدون التقاليد',
                'mori-title': 'موري - الأصل للعلامة التجارية',
                'mori-description': 'تصميم بسيط يمتزج مع الحياة اليومية، حيث يمكنك الشعور ببركات الطبيعة ودفء السرو. خط متنوع أصلي للعلامة التجارية.',
                'ten-title': 'تين - مخصص بالكامل',
                'ten-description': 'مجوهرات فنية مصنوعة بالكامل حسب الطلب. قطعة واحدة من نوعها تم إنشاؤها من خلال التعاون بين العملاء والمصممين والحرفيين.',
                'kiwami-title': 'كيوامي - المجموعة النهائية',
                'kiwami-description': 'التحفة النهائية المحدودة بـ 10 مجموعات في السنة. تتويج تكنولوجيا وجماليات FOMUS PARURE، ترتدي هيبة لا مثيل لها مع المجموعة النهائية المكونة من 4 قطع.',
                'view-details': 'عرض التفاصيل',
                
                // Gift Experience Section
                'gift-main-title': 'الهدية المثالية للأحباء',
                'gift-main-desc': 'FOMUS PARURE مثالية كهدية للأشخاص المميزين. الإكسسوارات الفريدة، المشبعة بـ 1300 عام من التاريخ والحرفية، تجلب عاطفة عميقة وقيمة دائمة للمتلقي.',
                'gift-box-title': 'صندوق هدايا حصري',
                'gift-box-desc': 'صندوق باولونيا فاخر وتغليف ميزوهيكي كيوتو يعظم القيمة كهدية.',
                'gift-cert-title': 'شهادة رقمية',
                'gift-cert-desc': 'شهادة رقمية تستخدم التكنولوجيا المتطورة تضمن الأصالة والقيمة بشكل دائم.',
                'gift-value-title': 'قيمة دائمة',
                'gift-value-desc': 'هدية قيمة ستُحب عبر الزمن، مشبعة بـ 1300 عام من التاريخ والحرفية.',
                'gift-cta-title': 'هل تود أن تبدأ تجربة هدية خاصة؟',
                'gift-cta-desc': 'اختر إكسسوارات FOMUS PARURE الخاصة كهدية لأحبائك.',
                'gift-collection-btn': 'عرض مجموعة الهدايا',
                'gift-consultation-btn': 'استشارة الهدايا',
                
                // Footer
                'footer-desc': '1300 عام من التقنيات التقليدية والتصميم الحديث المدمجين،<br>علامة تجارية فريدة لإكسسوارات ماسو.',
                'footer-collections': 'المجموعات',
                'footer-services': 'الخدمات',
                'footer-brand-story': 'قصة العلامة التجارية',
                'footer-craftsmanship': 'الحرفية',
                'footer-quality': 'ضمان الجودة',
                'footer-company': 'معلومات الشركة',
                'footer-about': 'معلومات عنا',
                'footer-privacy': 'سياسة الخصوصية',
                'footer-terms': 'شروط الخدمة',
                'footer-law': 'قانون المعاملات التجارية',

                // Collection Pages
                'collection-hero-title': 'المجموعة',
                'collection-hero-subtitle': 'اكتشف تصاميمنا الفريدة',
                'collection-story-title': 'قصة المجموعة',
                'collection-story-subtitle': 'الإلهام وراء حرفتنا',
                'collection-products-title': 'المنتجات',
                'collection-products-subtitle': 'العناصر المتاحة في هذه المجموعة',
                'back-to-collections': 'العودة إلى المجموعات',
                'price': 'السعر',
                'add-to-cart': 'أضف إلى السلة',
                'product-details': 'تفاصيل المنتج',
                'material': 'المادة',
                'dimensions': 'الأبعاد',
                'handcrafted': 'صناعة يدوية',
                'limited-edition': 'إصدار محدود',
                
                // Mori Collection Specific (Arabic translations are added)
                'mori-hero-title': 'موري - الأصل للعلامة التجارية',
                'mori-hero-description': 'تصميم بسيط يمتزج مع الحياة اليومية، حيث يمكنك الشعور ببركات الطبيعة ودفء السرو. خط متنوع أصلي للعلامة التجارية.',
                'mori-feature-natural': 'مواد طبيعية',
                'mori-feature-simple': 'تصميم بسيط',
                'mori-feature-daily': 'للاستخدام اليومي',
                'mori-story-title': 'قوة الشفاء للخشب',
                'mori-story-desc1': 'وُلدت مجموعة موري من الإلهام المستمد من غابات اليابان الغنية. الدفء الطبيعي لخشب السرو وأنماط الحبوب الجميلة تخلق تعبيرات تجلب الهدوء والسلام للمرتدي.',
                'mori-story-desc2': 'لقد خلقنا تصميمًا بسيطًا ولكنه متطور حتى تتمكن من الشعور بالاتصال مع الطبيعة في حياتك اليومية.',
                
                // Ten Collection Specific
                'ten-hero-title': 'تين - مخصص بالكامل',
                'ten-hero-description': 'مجوهرات فنية مصنوعة بالكامل حسب الطلب. قطعة واحدة من نوعها تم إنشاؤها من خلال التعاون بين العملاء والمصممين والحرفيين.',
                'ten-feature-custom': 'مخصص بالكامل',
                'ten-feature-unique': 'واحد من نوعه',
                'ten-feature-collaboration': 'تعاون',
                'ten-story-title': 'فن مولود من التعاون',
                'ten-story-desc1': 'تمثل مجموعة تين قمة صناعة المجوهرات المخصصة. يتم إنشاء كل قطعة من خلال التعاون الوثيق بين عملائنا والمصممين والحرفيين الخبراء.',
                'ten-story-desc2': 'من المفهوم الأولي إلى الإبداع النهائي، يتم التخطيط والتنفيذ بعناية لكل خطوة لإنشاء قطعة فريدة حقًا تعكس رؤية العميل وتميزنا الحرفي.',
                
                // Kiwami Collection Specific
                'kiwami-hero-title': 'كيوامي - المجموعة النهائية',
                'kiwami-hero-description': 'التحفة النهائية المحدودة بـ 10 مجموعات في السنة. تتويج تكنولوجيا وجماليات FOMUS PARURE، ترتدي هيبة لا مثيل لها مع المجموعة النهائية المكونة من 4 قطع.',
                'kiwami-feature-ultimate': 'جودة نهائية',
                'kiwami-feature-limited': 'إصدار محدود',
                'kiwami-feature-prestige': 'هيبة لا مثيل لها',
                'kiwami-story-title': 'قمة الحرفية',
                'kiwami-story-desc1': 'تمثل مجموعة كيوامي القمة المطلقة لمهاراتنا الحرفية. محدودة بـ 10 مجموعات فقط في السنة، كل مجموعة تجسد أعلى مستوى من الحرفية وتميز التصميم.',
                'kiwami-story-desc2': 'هذه المجموعة النهائية تجمع بين التقنيات اليابانية التقليدية والرفاهية الحديثة، مما يخلق قطعًا ستُقدر لأجيال. كل مجموعة شاهد على التزامنا بالكمال.',
                
                'home': 'الرئيسية',
                'collections': 'المجموعات',
                
                // New translation keys for collection pages
                'product-lineup': 'تشكيلة المنتجات',
                'simple-refined-white-necklace': 'قلادة بيضاء بسيطة ومكررة.',
                'tax-included': 'تشمل الضريبة',
                'ultimate-masterpiece-limited': 'التحفة النهائية المحدودة بـ 10 مجموعات سنوياً',
                'traditional-techniques-modern-design': '1300 عام من التقنيات التقليدية والتصميم الحديث مدمجين،',
                'brand-original': 'أصلي للعلامة التجارية',
                
                // Category navigation
                'necklaces': 'القلائد',
                'earrings-piercings': 'الأقراط والثقوب',
                'kanzashi': 'كانزاشي',
                
                // Product descriptions
                'warm-yellow-necklace': 'قلادة صفراء دافئة.',
                'premium-18k-necklace': 'قلادة فاخرة باستخدام الذهب عيار 18.',
                'tonbo-dama-blue-earring': 'أقراط تعبر عن جمال الأزرق في تونبو-داما.',
                'red-flower-motif-earring': 'أقراط بموتيف بتلات الزهور الحمراء.',
                'white-flower-motif-earring': 'أقراط بموتيف بتلات الزهور البيضاء.',
                'traditional-temari-black-pierce': 'ثقوب سوداء بموتيف تيماري التقليدي.',
                'traditional-temari-white-pierce': 'ثقوب بيضاء بموتيف تيماري التقليدي.',
                'black-flower-motif-pierce': 'ثقوب بموتيف بتلات الزهور السوداء.',
                'yellow-flower-motif-earring': 'أقراط بموتيف الزهور الصفراء.',
                'white-flower-motif-earring-small': 'أقراط بموتيف الزهور البيضاء.',
                'traditional-kanzashi-beauty': 'تحفة تحيي جمال الكانزاشي التقليدي في العصر الحديث.',
                
                // Other collections section
                'other-collections': 'مجموعات أخرى',
                'ten-full-custom-jewelry': 'مجوهرات فنية مصنوعة بالكامل حسب الطلب',
                
                // Footer service links
                'craftsmanship': 'الحرفية',
                'quality-guarantee': 'ضمان الجودة',
                'lifetime-quality-guarantee': 'ضمان جودة مدى الحياة والصيانة',

                // Mori 18k Updates
                'mori-18k-feature': 'ذهب عيار 18',
                'metal-allergy-safe': 'آمن للحساسية المعدنية',
                'hypoallergenic': 'مضاد للحساسية',
                'premium-18k-materials': 'مواد ذهبية فاخرة عيار 18 مدمجة مع أجود أنواع السرو الياباني. تصميم بسيط يمتزج مع الحياة اليومية مع رفاهية تدوم إلى الأبد.',
                'allergy-friendly-design': 'تصميم مناسب للحساسية للبشرة الحساسة',
                
                // Kiwami Collection Additional Keys
                'kiwami-eternite-ring-desc': 'اندماج الماس الأسود النادر وأجود أنواع اللك. حضور نهائي يسكن في الإصبع.',
                'kiwami-celeste-earrings-desc': 'بريق الذهب عيار 24 والياقوت. جمال كريم يتأرجح عند الأذنين.',
                'kiwami-lumiere-necklace-desc': 'جوهر ماسو يسكن في سلسلة البلاتين. إشراق أسمى يزين الصدر.',
                'kiwami-empress-tiara-desc': 'تاج نهائي منسوج بالماس. تحفة تمثل حقاً قمة كيوامي.',
                'kiwami-price-set': 'مجموعة كيوامي من 4 قطع',
                'kiwami-dedicated-concierge': 'كونسيرج مخصص',
                'kiwami-dedicated-concierge-desc': 'موظف مخصص يتعامل مع كل شيء من الشراء إلى الرعاية اللاحقة',
                'kiwami-lifetime-warranty': 'ضمان مدى الحياة وصيانة مجانية',
                'kiwami-certification': 'شهادة اعتماد',
                'kiwami-certification-desc': 'شهادة اعتماد رسمية برقم تسلسلي محدود',
                'kiwami-special-gift-box': 'صندوق هدايا خاص',
                'kiwami-special-gift-box-desc': 'صندوق باولونيا فاخر وتغليف ميزوهيكي كيوتو',
                'kiwami-pre-screening': 'طلب فحص مسبق',
                'kiwami-pre-screening-desc': 'يتم إجراء فحص مسبق بسبب محدودية 10 مجموعات',
                'kiwami-private-exhibition': 'معرض خاص',
                'kiwami-private-exhibition-desc': 'معرض خاص بنظام الحجز الكامل',
                'kiwami-contract-production': 'عقد وبدء الإنتاج',
                'kiwami-contract-production-desc': 'بعد العقد، يبدأ الحرفي الخبير الإنتاج',
                'kiwami-special-delivery': 'حفل تسليم خاص',
                'kiwami-special-delivery-desc': 'حفل تسليم خاص يُقام بعد الانتهاء',
                'kiwami-apply-pre-screening': 'التقدم للفحص المسبق',
                'mori-simple-line': 'خط بسيط حيث يمكنك الشعور بدفء خشب السرو',
                
                // Ten Collection Additional Keys
                'ten-popular': 'شائع',
                'ten-simple-design': 'تصميم بسيط',
                'ten-basic-lacquer': 'زخرفة لك أساسية',
                'ten-production-4-6-weeks': 'فترة الإنتاج: 4-6 أسابيع',
                'ten-1-year-warranty': 'ضمان لسنة واحدة',
                'ten-complex-design': 'دعم التصميم المعقد',
                'ten-gold-gem-decoration': 'زخرفة ورق الذهب والأحجار الكريمة',
                'ten-production-6-8-weeks': 'فترة الإنتاج: 6-8 أسابيع',
                'ten-3-year-warranty': 'ضمان 3 سنوات',
                'ten-exclusive-case': 'علبة حصرية',
                'ten-premium-materials': 'استخدام مواد فاخرة',
                'ten-rare-gems': 'دعم الأحجار الكريمة النادرة',
                'ten-master-craftsman': 'إنتاج الحرفي الخبير',
                'ten-lifetime-warranty': 'ضمان مدى الحياة',
                'ten-vip-service': 'خدمة VIP',
                'ten-free-consultation': 'حجز استشارة مجانية',
                'ten-document-request': 'طلب وثائق',
                
                // Common Japanese region/payment terms
                'japan-yen': 'اليابان (¥)',
                'europe-euro': 'أوروبا (€)',
                
                // Footer sections
                'footer-collections-title': 'المجموعات',
                'footer-services-title': 'الخدمات',
                'footer-brand-story-link': 'قصة العلامة التجارية',
                'footer-contact-link': 'اتصل بنا',
                'footer-company-info-title': 'معلومات الشركة',
                'footer-company-overview': 'نظرة عامة على الشركة',
                'footer-privacy-policy': 'سياسة الخصوصية',
                'footer-terms-of-use': 'شروط الاستخدام',
                'footer-commercial-transaction-law': 'قانون المعاملات التجارية',
                
                // Image disclaimer
                'image-for-illustration': 'الصورة للتوضيح فقط',
                'mori-price-euro-only': '€1,295'
            },
            zh: {
                // Navigation
                'nav-brand': '品牌',
                'nav-collections': '系列',
                'nav-story': '故事',
                'nav-contact': '联系我们',
                
                // Hero Section
                'hero-title': '1300年的珍宝走入现代',
                'hero-subtitle-1': '穿戴神圣的升文化，',
                'hero-subtitle-2': '通过特别体验创造您独特的故事',
                'hero-badge': '给挚爱之人的极致礼物',
                'hero-cta': '查看系列',
                
                // Philosophy Section
                'philosophy-title': '穿戴升的文化',
                'philosophy-tagline': '1300年历史编织的美学意识',
                'philosophy-desc1': 'FOMUS PARURE是一种独特的奢华艺术珠宝，将拥有1300年历史的"升"与神社佛阁使用的最高级日本桧木相结合。',
                'philosophy-desc2': '我们将艺术性和工艺技术注入升简洁而深刻的造型美中，实现了装饰空间的艺术品方面与佩戴时感受到的精致美的完美统一。',
                'philosophy-desc3': '它不仅仅是一个配饰，而是具有<strong>将日本美学传承到现代的文化价值</strong>的特殊存在。',
                
                // Models Section
                'models-title': '模特画廊',
                'models-subtitle': '佩戴FOMUS PARURE的优雅风格',
                'mori-collection': '森系列',
                'mori-desc': '融入日常生活的简约优雅风格',
                'ten-kiwami-collection': '天·极系列',
                'ten-kiwami-desc': '装点特殊日子的精致奢华',
                
                // Products Section
                'products-title': '系列',
                'products-subtitle': '森·天·极 - 穿戴传统的匠心阵容',
                'mori-title': '森 - 品牌原创',
                'mori-description': '能感受到自然恩惠和桧木温暖的简约设计，融入日常生活。品牌原创的多样化系列。',
                'ten-title': '天 - 全定制',
                'ten-description': '完全定制的艺术珠宝。客户、设计师和工匠协作创造的世界唯一作品。',
                'kiwami-title': '极 - 终极套装',
                'kiwami-description': '每年限量10套的最高峰杰作。用终极4件套穿戴无与伦比的威望，是FOMUS PARURE技术和美学的集大成。',
                'view-details': '查看详情',
                
                // Gift Experience Section
                'gift-main-title': '给挚爱之人的极致礼物',
                'gift-main-desc': 'FOMUS PARURE作为给特殊人士的礼物是完美的。注入了1300年历史和工艺技术的独特配饰，为接受者带来深刻感动和持久价值。',
                'gift-box-title': '专属礼品盒',
                'gift-box-desc': '桐木高级盒子和京都水引包装，最大化展现作为礼物的价值。',
                'gift-cert-title': '数字证书',
                'gift-cert-desc': '使用尖端技术的数字证书永久保证真实性和价值。',
                'gift-value-title': '持久价值',
                'gift-value-desc': '注入了1300年历史和工艺技术，跨越时代被持续喜爱的珍贵礼物。',
                'gift-cta-title': '您想开始特别的礼物体验吗？',
                'gift-cta-desc': '选择FOMUS PARURE的特别配饰作为给挚爱之人的礼物。',
                'gift-collection-btn': '查看礼品系列',
                'gift-consultation-btn': '礼品咨询',
                
                // Footer
                'footer-desc': '1300年传统技法与现代设计融合，<br>独一无二的升配饰品牌。',
                'footer-collections': '系列',
                'footer-services': '服务',
                'footer-brand-story': '品牌故事',
                'footer-craftsmanship': '工艺技术',
                'footer-quality': '品质保证',
                'footer-company': '公司信息',
                'footer-about': '关于我们',
                'footer-privacy': '隐私政策',
                'footer-terms': '服务条款',
                'footer-law': '商业交易法',

                // Collection Pages
                'collection-hero-title': '系列',
                'collection-hero-subtitle': '发现我们独特的设计',
                'collection-story-title': '系列故事',
                'collection-story-subtitle': '我们工艺背后的灵感',
                'collection-products-title': '产品',
                'collection-products-subtitle': '此系列的可用商品',
                'back-to-collections': '返回系列',
                'price': '价格',
                'add-to-cart': '加入购物车',
                'product-details': '产品详情',
                'material': '材质',
                'dimensions': '尺寸',
                'handcrafted': '手工制作',
                'limited-edition': '限量版',
                
                // Mori Collection Specific
                'mori-hero-title': '森 - 品牌原创',
                'mori-hero-description': '能感受到自然恩惠和桧木温暖的简约设计，融入日常生活。品牌原创的多样化系列。',
                'mori-feature-natural': '天然材料',
                'mori-feature-simple': '简约设计',
                'mori-feature-daily': '日常佩戴',
                'mori-story-title': '木材的治愈力量',
                'mori-story-desc1': '森系列诞生于日本丰富森林的灵感。桧木的天然温暖和美丽的木纹图案创造出为佩戴者带来宁静与平和的表达。',
                'mori-story-desc2': '我们创造了简约而精致的设计，让您在日常生活中能感受到与自然的联系。通过每天佩戴，您可以将木材的安宁融入忙碌的现代生活。',
                
                // Ten Collection Specific
                'ten-hero-title': '天 - 全定制',
                'ten-hero-description': '完全定制的艺术珠宝。客户、设计师和工匠协作创造的世界唯一作品。',
                'ten-feature-custom': '全定制',
                'ten-feature-unique': '独一无二',
                'ten-feature-collaboration': '协作',
                'ten-story-title': '协作诞生的艺术',
                'ten-story-desc1': '天系列代表了定制珠宝制作的巅峰。每件作品都通过客户、设计师和大师工匠之间的密切合作创造。',
                'ten-story-desc2': '从初始概念到最终创作，每个步骤都经过精心规划和执行，创造出真正独特的作品，反映客户的愿景和我们的工艺卓越。',
                
                // Kiwami Collection Specific
                'kiwami-hero-title': '极 - 终极套装',
                'kiwami-hero-description': '每年限量10套的最高峰杰作。用终极4件套穿戴无与伦比的威望，是FOMUS PARURE技术和美学的集大成。',
                'kiwami-feature-ultimate': '终极品质',
                'kiwami-feature-limited': '限量版',
                'kiwami-feature-prestige': '无与伦比的威望',
                'kiwami-story-title': '工艺的巅峰',
                'kiwami-story-desc1': '极系列代表了我们工艺技能的绝对巅峰。限量每年仅10套，每套都体现了我们最高水平的工艺和设计卓越。',
                'kiwami-story-desc2': '这个终极系列结合了传统日本技法和现代奢华，创造出将被世代珍藏的作品。每套都是我们对完美承诺的见证。',
                
                'home': '主页',
                'collections': '系列',
                
                // New translation keys for collection pages
                'product-lineup': '产品阵容',
                'simple-refined-white-necklace': '简约精致的白色项链。',
                'tax-included': '含税',
                'ultimate-masterpiece-limited': '每年限量10套的最高峰杰作',
                'traditional-techniques-modern-design': '1300年传统技法与现代设计融合，',
                'brand-original': '品牌原创',
                
                // Category navigation
                'necklaces': '项链',
                'earrings-piercings': '耳环・耳钉',
                'kanzashi': '簪子',
                
                // Product descriptions
                'warm-yellow-necklace': '温暖的黄色项链。',
                'premium-18k-necklace': '使用18K金的高级项链。',
                'tonbo-dama-blue-earring': '表现蜻蜓玉美丽蓝色的耳环。',
                'red-flower-motif-earring': '红色花瓣图案的耳环。',
                'white-flower-motif-earring': '白色花瓣图案的耳环。',
                'traditional-temari-black-pierce': '传统手球图案的黑色耳钉。',
                'traditional-temari-white-pierce': '传统手球图案的白色耳钉。',
                'black-flower-motif-pierce': '黑色花瓣图案的耳钉。',
                'yellow-flower-motif-earring': '黄花图案的耳环。',
                'white-flower-motif-earring-small': '白花图案的耳环。',
                'traditional-kanzashi-beauty': '在现代复活传统簪子美丽的杰作。',
                
                // Other collections section
                'other-collections': '其他系列',
                'ten-full-custom-jewelry': '完全定制的艺术珠宝',
                
                // Footer service links
                'craftsmanship': '工艺技术',
                'quality-guarantee': '品质保证',
                'lifetime-quality-guarantee': '终身品质保证和维护',

                // Mori 18k Updates
                'mori-18k-feature': '18K金',
                'metal-allergy-safe': '金属过敏安全',
                'hypoallergenic': '低过敏性',
                'premium-18k-materials': '优质18K金材料与最优质的日本桧木相结合。简约设计融入日常生活，奢华永恒。',
                'allergy-friendly-design': '适合敏感肌肤的防过敏设计',
                
                // Kiwami Collection Additional Keys
                'kiwami-eternite-ring-desc': '稀有黑钻石与最高级漆的融合。寄宿在手指的终极存在感。',
                'kiwami-celeste-earrings-desc': '24K金和红宝石的闪耀。在耳边摇摆的威严美丽。',
                'kiwami-lumiere-necklace-desc': '白金链条中寄宿的升精髓。装点胸前的至高光辉。',
                'kiwami-empress-tiara-desc': '钻石编织的终极皇冠。真正象征极巅峰的佳作。',
                'kiwami-price-set': '极系列4件套',
                'kiwami-dedicated-concierge': '专属礼宾员',
                'kiwami-dedicated-concierge-desc': '专属员工处理从购买到售后服务的一切',
                'kiwami-lifetime-warranty': '终身保修和免费维护',
                'kiwami-certification': '认证证书',
                'kiwami-certification-desc': '发行带限定编号的官方认证证书',
                'kiwami-special-gift-box': '特别礼品盒',
                'kiwami-special-gift-box-desc': '桐木高级盒子和京都水引包装',
                'kiwami-pre-screening': '预审申请',
                'kiwami-pre-screening-desc': '因限量10套，进行预审',
                'kiwami-private-exhibition': '私人展览',
                'kiwami-private-exhibition-desc': '完全预约制的私人展览指导',
                'kiwami-contract-production': '签约·制作开始',
                'kiwami-contract-production-desc': '签约后，大师工匠开始制作',
                'kiwami-special-delivery': '特别交付仪式',
                'kiwami-special-delivery-desc': '完成后，举办特别交付仪式',
                'kiwami-apply-pre-screening': '申请预审',
                'mori-simple-line': '能感受到桧木温暖的简约线条',
                
                // Ten Collection Additional Keys
                'ten-popular': '人气',
                'ten-simple-design': '简约设计',
                'ten-basic-lacquer': '基本漆装饰',
                'ten-production-4-6-weeks': '制作期间：4-6周',
                'ten-1-year-warranty': '1年保修',
                'ten-complex-design': '复杂设计对应',
                'ten-gold-gem-decoration': '金箔·宝石装饰',
                'ten-production-6-8-weeks': '制作期间：6-8周',
                'ten-3-year-warranty': '3年保修',
                'ten-exclusive-case': '专用化妆盒',
                'ten-premium-materials': '使用最高级材料',
                'ten-rare-gems': '稀有宝石对应',
                'ten-master-craftsman': '大师工匠制作',
                'ten-lifetime-warranty': '终身保修',
                'ten-vip-service': 'VIP服务',
                'ten-free-consultation': '预约免费咨询',
                'ten-document-request': '资料申请',
                
                // Common Japanese region/payment terms
                'japan-yen': '日本 (¥)',
                'europe-euro': '欧洲 (€)',
                
                // Footer sections
                'footer-collections-title': '系列',
                'footer-services-title': '服务',
                'footer-brand-story-link': '品牌故事',
                'footer-contact-link': '联系我们',
                'footer-company-info-title': '公司信息',
                'footer-company-overview': '公司概要',
                'footer-privacy-policy': '隐私政策',
                'footer-terms-of-use': '使用条款',
                'footer-commercial-transaction-law': '商业交易法',
                
                // Image disclaimer
                'image-for-illustration': '图片仅供参考',
                'mori-price-euro-only': '€1,295'
            },
            fr: {
                // Navigation
                'nav-brand': 'MARQUE',
                'nav-collections': 'COLLECTIONS',
                'nav-story': 'HISTOIRE',
                'nav-contact': 'CONTACT',
                
                // Hero Section
                'hero-title': '1300 ans de trésors à l\'époque moderne',
                'hero-subtitle-1': 'Portez la culture sacrée du Masu,',
                'hero-subtitle-2': 'Créez votre histoire unique à travers une expérience spéciale',
                'hero-badge': 'Le cadeau ultime pour vos proches',
                'hero-cta': 'Voir les Collections',
                
                // Philosophy Section
                'philosophy-title': 'Porter la culture du Masu',
                'philosophy-tagline': 'Conscience esthétique tissée par 1300 ans d\'histoire',
                'philosophy-desc1': 'FOMUS PARURE est un bijou d\'art de luxe unique qui combine le "Masu" avec 1300 ans d\'histoire avec le cyprès japonais le plus fin utilisé dans les sanctuaires et temples.',
                'philosophy-desc2': 'Nous avons versé l\'art et l\'artisanat dans la beauté sculpturale simple mais profonde du Masu, réalisant à la fois l\'aspect d\'une pièce d\'art qui décore l\'espace et la beauté raffinée ressentie lors du port.',
                'philosophy-desc3': 'Ce n\'est pas seulement un accessoire, mais une existence spéciale avec une <strong>valeur culturelle qui hérite de l\'esthétique japonaise à l\'ère moderne</strong>.',
                
                // Models Section
                'models-title': 'Galerie de Modèles',
                'models-subtitle': 'Styles élégants portant FOMUS PARURE',
                'mori-collection': 'Collection Mori',
                'mori-desc': 'Style simple et élégant qui se fond dans la vie quotidienne',
                'ten-kiwami-collection': 'Collection Ten・Kiwami',
                'ten-kiwami-desc': 'Luxe sophistiqué qui orne les jours spéciaux',
                
                // Products Section
                'products-title': 'Collections',
                'products-subtitle': 'Mori・Ten・Kiwami - Gamme magistrale portant la tradition',
                'mori-title': 'Mori - Original de la Marque',
                'mori-description': 'Design simple qui se fond dans la vie quotidienne, où vous pouvez sentir les bénédictions de la nature et la chaleur du cyprès. Une ligne originale diversifiée de la marque.',
                'ten-title': 'Ten - Entièrement Personnalisé',
                'ten-description': 'Bijou d\'art entièrement sur mesure. Une pièce unique créée grâce à la collaboration entre clients, designers et artisans.',
                'kiwami-title': 'Kiwami - Ensemble Ultime',
                'kiwami-description': 'Le chef-d\'œuvre ultime limité à 10 ensembles par an. L\'apogée de la technologie et de l\'esthétique de FOMUS PARURE, portant un prestige inégalé avec l\'ensemble ultime de 4 pièces.',
                'view-details': 'Voir les Détails',
                
                // Gift Experience Section
                'gift-main-title': 'Le cadeau ultime pour vos proches',
                'gift-main-desc': 'FOMUS PARURE est parfait comme cadeau pour des personnes spéciales. Les accessoires uniques, imprégnés de 1300 ans d\'histoire et d\'artisanat, apportent une émotion profonde et une valeur durable au destinataire.',
                'gift-box-title': 'Boîte Cadeau Exclusive',
                'gift-box-desc': 'Étui premium en paulownia et emballage mizuhiki de Kyoto maximisent la valeur en tant que cadeau.',
                'gift-cert-title': 'Certificat Numérique',
                'gift-cert-desc': 'Certificat numérique utilisant une technologie de pointe garantit de manière permanente l\'authenticité et la valeur.',
                'gift-value-title': 'Valeur Durable',
                'gift-value-desc': 'Un cadeau précieux qui sera aimé à travers le temps, imprégné de 1300 ans d\'histoire et d\'artisanat.',
                'gift-cta-title': 'Souhaitez-vous commencer une expérience cadeau spéciale ?',
                'gift-cta-desc': 'Choisissez les accessoires spéciaux de FOMUS PARURE comme cadeau pour vos proches.',
                'gift-collection-btn': 'Voir la Collection Cadeau',
                'gift-consultation-btn': 'Consultation Cadeau',
                
                // Footer
                'footer-desc': '1300 ans de techniques traditionnelles et design moderne fusionnés,<br>Une marque d\'accessoires Masu unique.',
                'footer-collections': 'Collections',
                'footer-services': 'Services',
                'footer-brand-story': 'Histoire de la Marque',
                'footer-craftsmanship': 'Artisanat',
                'footer-quality': 'Garantie Qualité',
                'footer-company': 'Informations Entreprise',
                'footer-about': 'À Propos de Nous',
                'footer-privacy': 'Politique de Confidentialité',
                'footer-terms': 'Conditions de Service',
                'footer-law': 'Loi sur les Transactions Commerciales',

                // Collection Pages
                'collection-hero-title': 'Collection',
                'collection-hero-subtitle': 'Découvrez nos designs uniques',
                'collection-story-title': 'Histoire de la Collection',
                'collection-story-subtitle': 'L\'inspiration derrière notre artisanat',
                'collection-products-title': 'Produits',
                'collection-products-subtitle': 'Articles disponibles dans cette collection',
                'back-to-collections': 'Retour aux Collections',
                'price': 'Prix',
                'add-to-cart': 'Ajouter au Panier',
                'product-details': 'Détails du Produit',
                'material': 'Matériau',
                'dimensions': 'Dimensions',
                'handcrafted': 'Fait à la Main',
                'limited-edition': 'Édition Limitée',
                
                // Mori Collection Specific
                'mori-hero-title': 'Mori - Original de la Marque',
                'mori-hero-description': 'Design simple qui se fond dans la vie quotidienne, où vous pouvez sentir les bénédictions de la nature et la chaleur du cyprès. Une ligne originale diversifiée de la marque.',
                'mori-feature-natural': 'Matériaux Naturels',
                'mori-feature-simple': 'Design Simple',
                'mori-feature-daily': 'Usage Quotidien',
                'mori-story-title': 'Le Pouvoir Guérisseur du Bois',
                'mori-story-desc1': 'La Collection Mori est née de l\'inspiration tirée des riches forêts du Japon. La chaleur naturelle du bois de cyprès et les beaux motifs de grain créent des expressions qui apportent tranquillité et paix au porteur.',
                'mori-story-desc2': 'Nous avons créé un design simple mais sophistiqué pour que vous puissiez vous sentir connecté à la nature dans votre vie quotidienne.',
                
                // Ten Collection Specific
                'ten-hero-title': 'Ten - Entièrement Personnalisé',
                'ten-hero-description': 'Bijou d\'art entièrement sur mesure. Une pièce unique créée grâce à la collaboration entre clients, designers et artisans.',
                'ten-feature-custom': 'Entièrement Personnalisé',
                'ten-feature-unique': 'Unique',
                'ten-feature-collaboration': 'Collaboration',
                'ten-story-title': 'Art Né de la Collaboration',
                'ten-story-desc1': 'La Collection Ten représente le summum de la création de bijoux personnalisés. Chaque pièce est créée grâce à une collaboration étroite entre nos clients, designers et maîtres artisans.',
                'ten-story-desc2': 'Du concept initial à la création finale, chaque étape est soigneusement planifiée et exécutée pour créer une pièce vraiment unique qui reflète la vision du client et notre excellence artisanale.',
                
                // Kiwami Collection Specific
                'kiwami-hero-title': 'Kiwami - Ensemble Ultime',
                'kiwami-hero-description': 'Le chef-d\'œuvre ultime limité à 10 ensembles par an. L\'apogée de la technologie et de l\'esthétique de FOMUS PARURE, portant un prestige inégalé avec l\'ensemble ultime de 4 pièces.',
                'kiwami-feature-ultimate': 'Qualité Ultime',
                'kiwami-feature-limited': 'Édition Limitée',
                'kiwami-feature-prestige': 'Prestige Inégalé',
                'kiwami-story-title': 'Le Summum de l\'Artisanat',
                'kiwami-story-desc1': 'La Collection Kiwami représente le summum absolu de nos compétences artisanales. Limitée à seulement 10 ensembles par an, chaque ensemble incarne notre plus haut niveau d\'artisanat et d\'excellence de design.',
                'kiwami-story-desc2': 'Cette collection ultime combine les techniques japonaises traditionnelles avec le luxe moderne, créant des pièces qui seront chéries pendant des générations. Chaque ensemble témoigne de notre engagement envers la perfection.',
                
                'home': 'Accueil',
                'collections': 'Collections',
                
                // New translation keys for collection pages
                'product-lineup': 'Gamme de Produits',
                'simple-refined-white-necklace': 'Collier blanc simple et raffiné.',
                'tax-included': 'Taxes incluses',
                'ultimate-masterpiece-limited': 'Chef-d\'œuvre ultime limité à 10 ensembles par an',
                'traditional-techniques-modern-design': '1300 ans de techniques traditionnelles et design moderne fusionnés,',
                'brand-original': 'Original de la Marque',
                
                // Category navigation
                'necklaces': 'Colliers',
                'earrings-piercings': 'Boucles d\'oreilles・Piercings',
                'kanzashi': 'Kanzashi',
                
                // Product descriptions
                'warm-yellow-necklace': 'Collier jaune chaleureux.',
                'premium-18k-necklace': 'Collier premium utilisant de l\'or 18k.',
                'tonbo-dama-blue-earring': 'Boucles d\'oreilles exprimant le beau bleu du Tonbo-dama.',
                'red-flower-motif-earring': 'Boucles d\'oreilles avec motif de pétales de fleurs rouges.',
                'white-flower-motif-earring': 'Boucles d\'oreilles avec motif de pétales de fleurs blanches.',
                'traditional-temari-black-pierce': 'Piercings noirs avec motif Temari traditionnel.',
                'traditional-temari-white-pierce': 'Piercings blancs avec motif Temari traditionnel.',
                'black-flower-motif-pierce': 'Piercings avec motif de pétales de fleurs noires.',
                'yellow-flower-motif-earring': 'Boucles d\'oreilles avec motif de fleurs jaunes.',
                'white-flower-motif-earring-small': 'Boucles d\'oreilles avec motif de fleurs blanches.',
                'traditional-kanzashi-beauty': 'Un chef-d\'œuvre qui fait revivre la beauté du Kanzashi traditionnel à l\'époque moderne.',
                
                // Other collections section
                'other-collections': 'Autres Collections',
                'ten-full-custom-jewelry': 'Bijoux d\'art entièrement sur mesure',
                
                // Footer service links
                'craftsmanship': 'Artisanat',
                'quality-guarantee': 'Garantie Qualité',
                'lifetime-quality-guarantee': 'Garantie qualité à vie et maintenance',

                // Mori 18k Updates
                'mori-18k-feature': 'Or 18 Carats',
                'metal-allergy-safe': 'Sûr pour les Allergies aux Métaux',
                'hypoallergenic': 'Hypoallergénique',
                'premium-18k-materials': 'Matériaux en or 18 carats de qualité supérieure combinés au cyprès japonais le plus fin. Design simple qui se fond dans la vie quotidienne avec un luxe qui dure éternellement.',
                'allergy-friendly-design': 'Design respectueux des allergies pour peaux sensibles',
                
                // Kiwami Collection Additional Keys
                'kiwami-eternite-ring-desc': 'Fusion de diamants noirs rares et de laque de la plus haute qualité. Présence ultime demeurant dans le doigt.',
                'kiwami-celeste-earrings-desc': 'Éclat de l\'or 24k et du rubis. Beauté digne oscillant aux oreilles.',
                'kiwami-lumiere-necklace-desc': 'L\'essence du Masu demeurant dans la chaîne de platine. Éclat suprême ornant la poitrine.',
                'kiwami-empress-tiara-desc': 'Couronne ultime tissée de diamants. Un chef-d\'œuvre symbolisant vraiment le sommet de Kiwami.',
                'kiwami-price-set': 'Ensemble Kiwami de 4 pièces',
                'kiwami-dedicated-concierge': 'Concierge Dédié',
                'kiwami-dedicated-concierge-desc': 'Personnel dédié s\'occupe de tout, de l\'achat au service après-vente',
                'kiwami-lifetime-warranty': 'Garantie à Vie et Maintenance Gratuite',
                'kiwami-certification': 'Certificat d\'Authentification',
                'kiwami-certification-desc': 'Certificat d\'authentification officiel avec numéro de série limité',
                'kiwami-special-gift-box': 'Boîte Cadeau Spéciale',
                'kiwami-special-gift-box-desc': 'Étui premium en paulownia et emballage mizuhiki de Kyoto',
                'kiwami-pre-screening': 'Demande de Pré-sélection',
                'kiwami-pre-screening-desc': 'Pré-sélection effectuée en raison de la limitation à 10 ensembles',
                'kiwami-private-exhibition': 'Exposition Privée',
                'kiwami-private-exhibition-desc': 'Exposition privée guidée par système de réservation complète',
                'kiwami-contract-production': 'Contrat et Début de Production',
                'kiwami-contract-production-desc': 'Après le contrat, le maître artisan commence la production',
                'kiwami-special-delivery': 'Cérémonie de Livraison Spéciale',
                'kiwami-special-delivery-desc': 'Cérémonie de livraison spéciale organisée après achèvement',
                'kiwami-apply-pre-screening': 'Postuler pour la Pré-sélection',
                'mori-simple-line': 'Ligne simple où vous pouvez sentir la chaleur du bois de cyprès',
                
                // Ten Collection Additional Keys
                'ten-popular': 'Populaire',
                'ten-simple-design': 'Design simple',
                'ten-basic-lacquer': 'Décoration laque de base',
                'ten-production-4-6-weeks': 'Période de production : 4-6 semaines',
                'ten-1-year-warranty': 'Garantie 1 an',
                'ten-complex-design': 'Prise en charge de design complexe',
                'ten-gold-gem-decoration': 'Décoration feuille d\'or et pierres précieuses',
                'ten-production-6-8-weeks': 'Période de production : 6-8 semaines',
                'ten-3-year-warranty': 'Garantie 3 ans',
                'ten-exclusive-case': 'Étui exclusif',
                'ten-premium-materials': 'Utilisation de matériaux premium',
                'ten-rare-gems': 'Prise en charge de pierres précieuses rares',
                'ten-master-craftsman': 'Production par maître artisan',
                'ten-lifetime-warranty': 'Garantie à vie',
                'ten-vip-service': 'Service VIP',
                'ten-free-consultation': 'Réservation de Consultation Gratuite',
                'ten-document-request': 'Demande de Documents',
                
                // Common Japanese region/payment terms
                'japan-yen': 'Japon (¥)',
                'europe-euro': 'Europe (€)',
                
                // Footer sections
                'footer-collections-title': 'Collections',
                'footer-services-title': 'Services',
                'footer-brand-story-link': 'Histoire de la Marque',
                'footer-contact-link': 'Nous Contacter',
                'footer-company-info-title': 'Informations Entreprise',
                'footer-company-overview': 'Aperçu de l\'Entreprise',
                'footer-privacy-policy': 'Politique de Confidentialité',
                'footer-terms-of-use': 'Conditions d\'Utilisation',
                'footer-commercial-transaction-law': 'Loi sur les Transactions Commerciales',
                
                // Image disclaimer
                'image-for-illustration': 'Image à titre d\'illustration uniquement',
                'mori-price-euro-only': '€1,295'
            }
        };
    }

    setupLanguageSelector() {
        // Create language selector
        const languageSelector = document.createElement('div');
        languageSelector.className = 'language-selector';
        
        // Create select element securely
        const select = document.createElement('select');
        select.id = 'language-select';
        select.className = 'language-selector__select';
        
        // Create options securely
        const languages = [
            { value: 'en', text: 'English' },
            { value: 'ja', text: '日本語' },
            { value: 'ar', text: 'العربية' },
            { value: 'zh', text: '中文' },
            { value: 'fr', text: 'Français' }
        ];
        
        languages.forEach(lang => {
            const option = document.createElement('option');
            option.value = lang.value;
            option.textContent = lang.text;
            select.appendChild(option);
        });
        
        languageSelector.appendChild(select);

        // Insert language selector in header
        const navRegion = document.querySelector('.nav__region');
        if (navRegion) {
            navRegion.appendChild(languageSelector);
        }

        // Add event listener
        const select = document.getElementById('language-select');
        if (select) {
            select.addEventListener('change', (e) => {
                this.switchLanguage(e.target.value);
            });
        }
    }

    detectLanguage() {
        // Default to English for international version
        const savedLang = localStorage.getItem('fomus-language') || 'en';
        this.switchLanguage(savedLang);
    }

    switchLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('fomus-language', lang);
        
        // Update language selector
        const select = document.getElementById('language-select');
        if (select) {
            select.value = lang;
        }

        // Update document language
        document.documentElement.lang = lang;
        
        // Apply RTL for Arabic
        if (lang === 'ar') {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }

        // Update all translatable elements
        this.updateContent();
    }

    updateContent() {
        const translations = this.translations[this.currentLang];
        if (!translations) return;

        // Update elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                // Always use textContent for security, unless the element already contains child nodes
                if (element.children.length > 0) {
                    // If element has child elements, preserve structure and only update text nodes
                    this.updateTextNodes(element, translations[key]);
                } else {
                    element.textContent = translations[key];
                }
            }
        });
    }
    
    updateTextNodes(element, newText) {
        // Helper method to safely update text content while preserving element structure
        const textNodes = [];
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        
        let node;
        while (node = walker.nextNode()) {
            textNodes.push(node);
        }
        
        if (textNodes.length > 0) {
            textNodes[0].textContent = newText;
            // Clear other text nodes
            for (let i = 1; i < textNodes.length; i++) {
                textNodes[i].textContent = '';
            }
        }
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LanguageManager();
});