
export const tableOfContents = [
    { id: "what-is-seo", title: "01. SEO Nedir?" },
    { id: "technical-seo", title: "02. Teknik SEO" },
    { id: "on-page-seo", title: "03. On-Page SEO" },
    { id: "content-seo", title: "04. İçerik Optimizasyonu" },
    { id: "off-page-seo", title: "05. Site Dışı SEO" },
    { id: "seo-performance", title: "06. SEO Performansı" },
];

export interface Passage {
    id: string;
    slug: string | null;
    question: string;
    answer: string;
    keyPoints?: { title: string; desc: string }[];
    icon?: string;
    linkText?: string;
    customButton?: { href: string; text: string };
}

export const passages: Passage[] = [
    {
        id: "what-is-seo",
        slug: null,
        question: "01. SEO (Search Engine Optimization) Nedir?",
        answer:
            "SEO (Arama Motoru Optimizasyonu), bir web varlığının arama motoru botları ve yapay zeka sistemleri için 'anlaşılabilir veri kaynağı' olarak yapılandırılması ve dijital otorite inşa etme mühendisliğidir. Süreç sadece trafik artışı değil, markanızın bilgi sistemlerine veri sağlayan güvenilir bir otorite (Entity) olarak konumlanmasını kapsar. Bu sayfa, teknik altyapıdan içerik stratejisine kadar modern SEO’nun tüm temel bileşenlerini kapsayan kapsamlı bir rehber niteliğindedir. Google'ın evrimiyle birlikte süreç; statik dizinlemeden, Reasoning Engine (Akıl Yürütme Motoru) için yüksek kaliteli veri setleri üretmeye dönüşmüştür.",
        keyPoints: [
            { title: "Bilişsel Eşleşme (Cognitive Relevance)", desc: "Arama motorları artık 'sözcük avcısı' değil, 'niyet çözümleyici'dir. Google'ın MUM ve BERT algoritmaları, sorgunun arkasındaki psikolojik bağlamı analiz eder. SEO, içeriği kullanıcının bilişsel ihtiyacını (bilgi, işlem veya karşılaştırma) karşılayan bir 'çözüm kümesi' olarak kurgular." },
            { title: "Algoritmik Verimlilik (Indexing Efficiency)", desc: "Modern indeksleme, botların veri işleme maliyetini düşürmeye odaklanır. LLM (Büyük Dil Modelleri) dostu ve hiyerarşik olarak kusursuz yapılandırılmış bir site mimarisi, içeriğin hem daha hızlı taranmasını sağlar hem de yapay zeka tarafından 'kaynak gösterilebilir' bir referans noktasına dönüştürülmesini tetikler." },
            { title: "Bilgi Kazancı (Information Gain)", desc: "Google'ın 'Information Gain Score' patenti uyarınca, halihazırda indekslenmiş bilgileri tekrar etmek yerine, kullanıcıya yeni bir veri katmanı veya perspektif sunmak esastır. Orijinal uzmanlık sinyalleriyle beslenen bu yapı, markanın dijital dünyadaki E-E-A-T (Güven ve Otorite) skorunu en üst düzeye taşır." },
        ],
        icon: "🔍",
    },
    {
        id: "technical-seo",
        slug: "teknik-seo",
        question: "02. Teknik SEO: Dijital Altyapının Optimizasyonu",
        answer:
            "Teknik SEO, bir web varlığının arama motoru botları tarafından en düşük maliyet ve en yüksek verimle işlenmesini sağlayan altyapı mühendisliğidir. Google'ın Rendering ve WRS (Web Rendering Service) süreçlerini optimize ederek, botların siteyi \"anlama\" hızı artırılır. Bu katman, içeriğin görünür olmasından ziyade, Google'ın \"Crawl Budget\" (Tarama Bütçesi) patentleri uyarınca sunucu kaynaklarını en efektif şekilde kullanarak sistemin indeksleme kapasitesini maksimize etmeye odaklanır.",
        keyPoints: [
            { title: "Algoritmik Erişilebilirlik (Crawl Efficiency)", desc: "Sitenin taranabilirliği, botların 'tarama bütçesini' boşa harcamamasını gerektirir. Gereksiz URL parametrelerinin temizlenmesi, Request-Response döngülerinin optimize edilmesi ve Log file analizi ile botların sadece en değerli ve güncel içeriğe odaklanması sağlanır. Bu, teknik otoritenin ilk basamağıdır." },
            { title: "Sayfa Deneyimi ve LCP (Core Web Vitals)", desc: "Google'ın kullanıcı tutma (User Retention) odaklı algoritmaları, sayfanın sadece yüklenme hızına değil, 'görsel kararlılığına' ve 'etkileşim hızına' bakar. LCP, FID ve CLS metriklerinin optimizasyonu, botlara sitenin teknik olarak kusursuz ve kullanıcı dostu olduğu sinyalini iletir." },
            { title: "Semantik İşaretleme (Structured Data)", desc: "İçeriğin sadece insanlar tarafından değil, makineler tarafından da hatasız anlaşılması için Schema.org protokolü kullanılır. Yapısal veriler, sayfanın bir 'bilgi parçası' olarak Google'ın Knowledge Graph'ine (Bilgi Grafiği) doğrudan entegre edilmesini ve arama sonuçlarında zengin sonuçlar (Rich Snippets) olarak belirmesini sağlar." },
        ],
        linkText: "TEKNİK DETAYLARI İNCELE",
        icon: "⚙️",
    },
    {
        id: "on-page-seo",
        slug: "site-ici-seo",
        question: "03. On-Page SEO (Site İçi Optimizasyon)",
        answer:
            "Site içi SEO, bir web sayfasının hem kullanıcılar hem de arama motoru algoritmaları için en yüksek \"Relevance\" (Alakalılık) skoruna ulaşmasını sağlayan anlamsal kurgudur. Sadece metinsel düzenlemeleri değil; HTML mimarisi, iç linkleme hiyerarşisi ve kullanıcı etkileşim sinyallerinin optimizasyonunu kapsar. Google'ın BERT ve MUM gibi doğal dil işleme modelleriyle uyumlu bir yapı kurarak, sayfanın konusal otoritesi (Topical Authority) dijital bir mühür gibi tescil edilir.",
        keyPoints: [
            { title: "Stratejik Kelime Haritalama (Keyword Mapping)", desc: "Arama hacimlerinin ötesine geçerek, kullanıcının 'Sorgu Arkasındaki Niyeti' (Search Intent) hedeflenir. Anahtar kelimeleri anlamsal kümeler (Semantic Clusters) halinde gruplandırarak, her sayfanın Google'ın 'Reasoning Engine' mekanizmasında en doğru yanıtla eşleşmesi sağlanır." },
            { title: "Anlamsal HTML Hiyerarşisi (Semantic HTML)", desc: "İçeriğin hiyerarşik düzeni (H1-H6), botların metni bir kavram haritası gibi okumasını sağlar. Başlık etiketlerinin semantik akışı, sayfanın ana odak noktasını ve alt konularını arama motorlarına hatasız bir şekilde deklare ederek indeksleme kalitesini artırır." },
            { title: "Görsel ve Medya Optimizasyonu (Asset Authority)", desc: "Görseller sadece estetik bir unsur değil, birer veri kaynağıdır. Google'ın 'Image Understanding' yeteneklerini beslemek için görselleri; modern formatlar, stratejik alt metinler (Alt-text) ve konumsal bağlamla optimize ederek, sitenizin görsel arama sonuçlarındaki otoritesi güçlendirilir." },
        ],
        linkText: "ON-PAGE STRATEJİLERİNİ İNCELE",
        icon: "💻",
    },
    {
        id: "content-seo",
        slug: "icerik-optimizasyonu",
        question: "04. İçerik Optimizasyonu ve Semantik Yazım",
        answer:
            "İçerik optimizasyonu, bilginin sadece üretilmesi değil, bir \"Knowledge Graph\" (Bilgi Grafiği) nesnesi olarak modüler hale getirilmesidir. Google'ın \"Information Gain\" (Bilgi Kazancı) patentine dayanan stratejimizle, internetteki mevcut verilerin tekrarından kaçınarak benzersiz ve derinlikli bir değer sunulur. Amacımız; içeriğin hem geleneksel arama motorları hem de Generative Engine Optimization (GEO) süreçlerinde, yapay zeka modelleri tarafından doğrudan \"en güvenilir yanıt\" olarak seçilmesini sağlamaktır.",
        keyPoints: [
            { title: "Varlık Odaklı Kurgu (Entity-Based Content)", desc: "İçeriği anahtar kelimeler yerine 'Varlıklar' (Entities) ve bu varlıklar arasındaki anlamsal ilişkiler üzerine inşa edilir. Bu yapı, LLM modellerinin (Büyük Dil Modelleri) içeriği bir 'Semantik Triple' (Özne-Yüklem-Nesne) hiyerarşisinde kolayca işlemesini ve otorite skorunu artırmasını sağlar." },
            { title: "NLP ve Semantik Mühendislik", desc: "Doğal Dil İşleme (NLP) prensiplerine uygun, düşük gürültülü ve yüksek bilgi yoğunluklu metinler kurgulanır. İçeriğin 'Chunking' (Bilgi Parçacığı) mantığıyla bölümlenmesi, algoritmaların metni hızlıca analiz ederek 'Featured Snippets' veya yapay zeka özetlerinde kaynak göstermesine olanak tanır." },
            { title: "Orijinallik ve Bilgi Kazancı (Information Gain)", desc: "Sadece yanıt vermekle kalmıyor, konuya yeni bir perspektif veya veri katmanı eklenir. Google'ın 'Information Gain Score' kriterini karşılayan bu özgünlük sinyalleri, içeriğin sadece bir sayfa değil, dijital dünyada referans gösterilen bir 'Knowledge Hub' (Bilgi Merkezi) olmasını sağlar." },
        ],
        linkText: "İÇERİK STRATEJİLERİNİ İNCELE",
        icon: "✍️",
    },
    {
        id: "off-page-seo",
        slug: "site-disi-seo",
        question: "05. Site Dışı SEO (Off-Page) ve Dijital Otorite",
        answer:
            "Site dışı SEO, bir web sayfasının hem kullanıcılar hem de arama motoru algoritmaları için en yüksek \"dijital referans\" yönetimidir. Google'ın PageRank algoritması üzerine inşa edilen modern sistemler, artık sadece bağlantı sayısına değil; bu bağlantıların konusal bağlamına (Contextual Relevance) ve markanın internet üzerindeki \"varlık\" (Entity) gücüne odaklanır. Amacımız, sitenizi sadece bir URL değil, otorite sahibi bir bilgi düğümü haline getirerek güven sinyallerini maksimize etmektir.",
        keyPoints: [
            { title: "Bağlamsal Otorite (Contextual Backlinks)", desc: "Sıradan link inşasının ötesine geçerek, markanızın uzmanlık alanıyla doğrudan ilişkili, yüksek otoriteli kaynaklardan referanslar sağlanır. Google'ın 'Reasoning Engine' mekanizmasına, sitenizin ilgili 'Topic Cluster' (Konu Kümesi) içerisinde en güvenilir kaynak olduğunu doğrulayan sinyaller iletilir." },
            { title: "Dijital Ayak İzi ve Marka Anılmaları (Brand Mentions)", desc: "Bağlantı içermese dahi, markanızın dijital mecralarda, sektör haberlerinde ve akademik tartışmalarda anılması Google'ın Knowledge Graph'i için kritik birer veridir. Marka isminizin uzmanlık terimleriyle yan yana gelmesini sağlayarak, algoritmik bir itibar (Entity Authority) inşa edilir." },
            { title: "Sosyal Kanıt ve Güven Sinyalleri (E-E-A-T)", desc: "İçeriğinizin toplumsal kabul görmesi ve paylaşılabilirlik değeri, Google'ın 'Trustworthiness' (Güvenilirlik) skorunu besler. Deneyim ve uzmanlık sinyallerini dijital dünyaya yayarak, kullanıcıların ve algoritmaların sitenizi 'vazgeçilmez bir referans noktası' olarak kodlaması sağlanır." },
        ],
        linkText: "SİTE DIŞI STRATEJİLERİNİ İNCELE",
        icon: "🌐",
    },
];

export const services = [
    {
        title: "Kapsamlı SEO Denetimi",
        description: "Mevcut dijital varlıkların teknik, içerik ve otorite açısından derinlemesine analizi ve stratejik yol haritası.",
    },
    {
        title: "Semantik Anahtar Kelime Mimarisi",
        description: "Kullanıcı niyeti ve yapay zeka algoritmalarıyla uyumlu, veri odaklı terim haritalandırması.",
    },
    {
        title: "Teknik Altyapı Optimizasyonu",
        description: "Core Web Vitals, tarama bütçesi ve indekslenebilirlik standartlarının maksimize edilmesi.",
    },
    {
        title: "Stratejik İçerik Danışmanlığı",
        description: "Otorite (E-E-A-T) inşa eden, dönüşüm odaklı ve sürdürülebilir içerik ekosistemi kurgusu.",
    },
];
