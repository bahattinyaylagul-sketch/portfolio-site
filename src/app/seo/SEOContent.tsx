/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// Table of Contents for quick navigation
const tableOfContents = [
    { id: "what-is-seo", title: "01. SEO Nedir?" },
    { id: "technical-seo", title: "02. Teknik SEO" },
    { id: "on-page-seo", title: "03. On-Page SEO" },
    { id: "content-seo", title: "04. İçerik Optimizasyonu" },
    { id: "off-page-seo", title: "05. Site Dışı SEO" },
    { id: "seo-performance", title: "06. SEO Performansı" },
];

// Passage Blocks serving as Pillar Content Intro
interface Passage {
    id: string;
    slug: string | null;
    question: string;
    answer: string;
    keyPoints: { title: string; desc: string }[];
    icon: string;
    linkText?: string;
    customButton?: { href: string; text: string };
}

const passages: Passage[] = [
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

const services = [
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

export default function SEOContent() {
    const [activeSection, setActiveSection] = useState("what-is-seo");
    const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -60% 0px", // Active zone: visible between 20% and 40% from top
                threshold: 0 // Trigger as soon as any part enters the zone
            }
        );

        // Add a small delay to ensure DOM is fully painted
        const timer = setTimeout(() => {
            tableOfContents.forEach((item) => {
                const element = document.getElementById(item.id);
                if (element) observer.observe(element);
            });
        }, 100);

        return () => {
            observer.disconnect();
            clearTimeout(timer);
        };
    }, []);

    return (
        <article className="pt-24 pb-20">
            {/* Hero Section */}
            <header className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-background py-16 mb-12">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-8 h-1 bg-gray-900 rounded-full"></span>
                                <span className="text-sm font-medium tracking-widest text-gray-500 uppercase">Hizmet</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                                SEO <span className="text-gray-400">Danışmanlığı</span>
                            </h1>
                            <p className="text-lg font-medium text-gray-500 mb-6 border-l-4 border-gray-900 pl-4 bg-gray-50 py-2 rounded-r-lg max-w-2xl">
                                Kapsamlı SEO Rehberi & Stratejik Danışmanlık Yaklaşımı
                            </p>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Arama motorlarında organik görünürlüğünüzü artırmak için teknik ve içerik odaklı stratejiler geliştirilmektedir.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 w-full lg:w-auto mt-8 lg:mt-0">
                            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                                <span className="text-3xl font-bold text-gray-900 block">12+</span>
                                <span className="text-sm text-gray-500">Yıl Deneyim</span>
                            </div>
                            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                                <span className="text-3xl font-bold text-gray-900 block">200+</span>
                                <span className="text-sm text-gray-500">Proje</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Grid */}
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:grid lg:grid-cols-[280px_1fr] gap-12">
                    {/* Left Sidebar: TOC */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-28">
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                                İçindekiler
                            </h3>
                            <nav>
                                <ul className="space-y-2">
                                    {tableOfContents.map((item) => (
                                        <li key={item.id}>
                                            <a
                                                href={`#${item.id}`}
                                                className={`block py-2 px-4 rounded-lg text-sm transition-all duration-200 ${activeSection === item.id
                                                    ? "bg-gray-900 text-white font-medium"
                                                    : "text-gray-600 hover:bg-gray-100"
                                                    }`}
                                                onClick={(e) => {
                                                    const element = document.getElementById(item.id);
                                                    if (element) {
                                                        const headerOffset = 100;
                                                        const elementPosition = element.getBoundingClientRect().top;
                                                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                                                        window.scrollTo({
                                                            top: offsetPosition,
                                                            behavior: "smooth"
                                                        });
                                                    }
                                                    setActiveSection(item.id);
                                                }}
                                            >
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            {/* CTA in Sidebar */}
                            <div className="mt-8 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-white">
                                <h4 className="font-semibold mb-2">Ücretsiz Analiz</h4>
                                <p className="text-sm text-gray-300 mb-4">
                                    Sitenizin SEO durumunu değerlendirelim.
                                </p>
                                <a
                                    href="#contact"
                                    className="block text-center py-2 px-4 bg-white text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    Randevu Al
                                </a>
                            </div>
                        </div>
                    </aside>

                    {/* Content Column */}
                    <main>
                        <div className="space-y-12">
                            {/* Mobile TOC */}
                            <div className="lg:hidden border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm mb-8">
                                <button
                                    onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
                                    className="w-full flex items-center justify-between p-4 bg-gray-50 text-left transition-colors hover:bg-gray-100"
                                >
                                    <span className="font-bold text-gray-900 flex items-center gap-2 text-sm uppercase tracking-wider">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                                        </svg>
                                        İçindekiler
                                    </span>
                                    <svg
                                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isMobileTocOpen ? "rotate-180" : ""}`}
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileTocOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                    <nav className="p-4 border-t border-gray-100 bg-white">
                                        <ul className="space-y-3">
                                            {tableOfContents.map((item) => (
                                                <li key={item.id}>
                                                    <a
                                                        href={`#${item.id}`}
                                                        onClick={(e) => {
                                                            const element = document.getElementById(item.id);
                                                            if (element) {
                                                                const headerOffset = 100;
                                                                const elementPosition = element.getBoundingClientRect().top;
                                                                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                                                                window.scrollTo({
                                                                    top: offsetPosition,
                                                                    behavior: "smooth"
                                                                });
                                                            }
                                                            setIsMobileTocOpen(false);
                                                            setActiveSection(item.id);
                                                        }}
                                                        className={`block text-sm transition-colors ${activeSection === item.id ? "text-blue-600 font-bold" : "text-gray-600 hover:text-blue-600"}`}
                                                    >
                                                        {item.title}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            {passages.map((passage, index) => (
                                <section
                                    key={passage.id}
                                    id={passage.id}
                                    className="scroll-mt-32 p-5 md:p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                                    aria-labelledby={`${passage.id}-heading`}
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-sm font-medium text-gray-400">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <h2 id={`${passage.id}-heading`} className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                        {passage.question}
                                    </h2>

                                    <p className="text-gray-700 leading-relaxed text-lg mb-8">
                                        {passage.answer}
                                    </p>

                                    {/* Key Points - 3 Column Grid */}
                                    {passage.keyPoints && (
                                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                                            {passage.keyPoints.map((point, i) => (
                                                <div key={i} className="p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100">
                                                    <h3 className="font-sans font-bold text-lg text-gray-900 mb-2">
                                                        {point.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">
                                                        {point.desc}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Link/Button */}
                                    {passage.slug && (
                                        <Link
                                            href={`/${passage.slug}`}
                                            className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 uppercase tracking-widest hover:text-gray-600 transition-colors"
                                        >
                                            {passage.linkText || "Detayları İncele"}
                                            {" "}&rarr;
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    )}
                                </section>
                            ))}

                            {/* NEW SECTION: SEO Performansı Nasıl Ölçülür? */}
                            <section
                                id="seo-performance"
                                className="scroll-mt-32 p-5 md:p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                                aria-labelledby="seo-performance-heading"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-sm font-medium text-gray-400">
                                        06
                                    </span>
                                </div>

                                <h2 id="seo-performance-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    06. SEO Performansı Nasıl Ölçülür?
                                </h2>

                                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                                    Modern SEO’nun başarısı artık yalnızca organik trafik artışıyla değil; sitenizin arama motorları tarafından ne kadar verimli tarandığı, içeriklerin anlamsal olarak ne kadar doğru eşleştiği ve markanızın dijital dünyada ne kadar güvenilir bir otorite olarak kabul edildiği ile ölçülmektedir. Trafik, bu üç sacayağının (Altyapı, Anlam, Otorite) doğal bir sonucudur.
                                </p>

                                {/* 3 Cards */}
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                                    <div className="p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100">
                                        <h3 className="font-sans font-bold text-lg text-gray-900 mb-4">
                                            Tarama ve İndeksleme Verimliliği
                                        </h3>
                                        <ul className="space-y-3 text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">
                                            <li className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                                                Index Coverage Oranı
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                                                Crawl Budget Kaybı
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                                                İndekslenme Hızı
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                                                Render Başarı Oranı
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100">
                                        <h3 className="font-sans font-bold text-lg text-gray-900 mb-4">
                                            Anlamsal Relevance ve Topical Güç
                                        </h3>
                                        <ul className="space-y-3 text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">
                                            <li className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0"></span>
                                                Sorgu Kapsama Oranı
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0"></span>
                                                Passage Görünürlüğü
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0"></span>
                                                Konu Derinliği
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0"></span>
                                                Featured Snippet
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100">
                                        <h3 className="font-sans font-bold text-lg text-gray-900 mb-4">
                                            Otorite ve Güven Sinyalleri
                                        </h3>
                                        <ul className="space-y-3 text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">
                                            <li className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0"></span>
                                                Bağlamsal Backlinkler
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0"></span>
                                                Marka Anılmaları
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0"></span>
                                                Topical Co-citation
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0"></span>
                                                Entity Otoritesi
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Table */}
                                <div className="mb-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                                    <table className="w-full text-sm text-left leading-[1.5]">
                                        <thead className="bg-gray-800 text-white font-bold uppercase text-xs">
                                            <tr>
                                                <th className="px-6 py-4">Metrik</th>
                                                <th className="px-6 py-4">Optimizasyon Öncesi</th>
                                                <th className="px-6 py-4">Optimizasyon Sonrası</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            <tr className="bg-white hover:bg-gray-50">
                                                <td className="px-6 py-4 font-mono font-bold text-gray-900">Index Oranı</td>
                                                <td className="px-6 py-4 text-gray-600">%65</td>
                                                <td className="px-6 py-4 text-green-600 font-bold">%98</td>
                                            </tr>
                                            <tr className="bg-gray-50 hover:bg-gray-100">
                                                <td className="px-6 py-4 font-mono font-bold text-gray-900">Crawl Waste</td>
                                                <td className="px-6 py-4 text-gray-600">%40 (Verimsiz)</td>
                                                <td className="px-6 py-4 text-green-600 font-bold">%5 (Optimize)</td>
                                            </tr>
                                            <tr className="bg-white hover:bg-gray-50">
                                                <td className="px-6 py-4 font-mono font-bold text-gray-900">Ortalama Sıralama</td>
                                                <td className="px-6 py-4 text-gray-600">45. Pozisyon</td>
                                                <td className="px-6 py-4 text-green-600 font-bold">8. Pozisyon</td>
                                            </tr>
                                            <tr className="bg-gray-50 hover:bg-gray-100">
                                                <td className="px-6 py-4 font-mono font-bold text-gray-900">Topical Kapsama</td>
                                                <td className="px-6 py-4 text-gray-600">%30</td>
                                                <td className="px-6 py-4 text-green-600 font-bold">%100</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 leading-relaxed text-lg font-medium border-l-4 border-gray-900 pl-4">
                                    Sonuç olarak SEO; teknik altyapı, semantik anlam ve otorite inşasının sistemli birleşimidir. Sürdürülebilir trafik ve yüksek dönüşüm oranları, bu sistemin doğal ve kaçınılmaz çıktısıdır.
                                </p>
                            </section>

                            {/* Services Section */}
                            <section aria-labelledby="seo-services" className="mt-20">
                                <div className="text-center mb-12">
                                    <h2 id="seo-services" className="text-3xl font-bold text-gray-900 mb-4">
                                        Uzmanlık Alanları
                                    </h2>
                                    <p className="text-gray-600 max-w-lg mx-auto">Veri odaklı büyüme için uçtan uca dijital çözümler</p>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {services.map((service, index) => (
                                        <div
                                            key={service.title}
                                            className="group p-6 bg-white border border-gray-100 rounded-2xl hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Success Stories */}
                            <section aria-labelledby="success-stories" className="mt-24">
                                <div className="p-12 rounded-3xl bg-gray-900 text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />

                                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                                        <div className="max-w-xl text-center md:text-left">
                                            <h2 id="success-stories" className="text-3xl md:text-4xl font-bold mb-6">
                                                Başarı Hikayeleri &<br className="hidden md:block" />
                                                <span className="text-gray-400">Vaka Çalışmaları</span>
                                            </h2>
                                            <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                                E-ticaret, finans ve SaaS dikeyinde elde edilen somut büyüme verilerini ve stratejik yaklaşımları detaylıca inceleyin.
                                            </p>
                                            <Link
                                                href="/vaka-calismalari"
                                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all group">
                                                VAKA ÇALIŞMALARINI GÖR
                                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </Link>
                                        </div>

                                        <div className="flex flex-col gap-6 w-full md:w-auto">
                                            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                                                <div className="text-3xl font-bold mb-1">%210</div>
                                                <div className="text-xs font-medium text-gray-500 uppercase tracking-widest">Organik Trafik Artışı</div>
                                            </div>
                                            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                                                <div className="text-3xl font-bold mb-1">1. Sayfa</div>
                                                <div className="text-xs font-medium text-gray-500 uppercase tracking-widest">Rekabetçi Anahtar Kelimeler</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 6 Month Roadmap */}
                            <section aria-labelledby="process-roadmap" className="mt-24">
                                <div className="mb-12">
                                    <h2 id="process-roadmap" className="text-3xl font-bold text-gray-900 mb-4">6 Aylık SEO Yol Haritası</h2>
                                    <p className="text-gray-600">Başarıya giden yolun adım adım planlanması ve beklenen çıktılar.</p>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-200">
                                                <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Zaman</th>
                                                <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Odak Alanı</th>
                                                <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Aksiyonlar</th>
                                                <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Hedef</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm text-gray-600 leading-[1.5]">
                                            <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                                <td className="py-4 px-6 font-medium text-gray-900">1. Ay</td>
                                                <td className="py-4 px-6"><span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold">Analiz</span></td>
                                                <td className="py-4 px-6">Teknik Denetim, Rakip Analizi, Anahtar Kelime Stratejisi</td>
                                                <td className="py-4 px-6 text-gray-500">Yol Haritasının Netleşmesi</td>
                                            </tr>
                                            <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                                <td className="py-4 px-6 font-medium text-gray-900">2-3. Ay</td>
                                                <td className="py-4 px-6"><span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold">Onarım & Temel</span></td>
                                                <td className="py-4 px-6">Teknik Hataların Giderilmesi, İçerik Planı Başlangıcı, UI/UX İyileştirmeleri</td>
                                                <td className="py-4 px-6 text-gray-500">İndekslenebilirlik Artışı</td>
                                            </tr>
                                            <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                                <td className="py-4 px-6 font-medium text-gray-900">4-5. Ay</td>
                                                <td className="py-4 px-6"><span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-bold">Büyüme</span></td>
                                                <td className="py-4 px-6">İçerik Üretimi (Cluster), Otorite İnşası (Backlink), Semantik İşaretlemeler</td>
                                                <td className="py-4 px-6 text-gray-500">Trafik ve Sıralama Artışı</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50 transition-colors">
                                                <td className="py-4 px-6 font-medium text-gray-900">6. Ay +</td>
                                                <td className="py-4 px-6"><span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-bold">Skalabilite</span></td>
                                                <td className="py-4 px-6">Veri Analizi, Dönüşüm Optimizasyonu (CRO), Yeni Fırsatların Keşfi</td>
                                                <td className="py-4 px-6 text-gray-500">ROI ve Gelir Artışı</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* FAQ */}
                            <section aria-labelledby="faq-section" className="mt-24">
                                <h2 id="faq-section" className="text-3xl font-bold text-gray-900 mb-8">Sıkça Sorulan Sorular</h2>
                                <div className="space-y-4">
                                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                        <h3 className="font-semibold text-gray-900 mb-2">SEO çalışmaları ne zaman sonuç verir?</h3>
                                        <p className="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em] bg-white/50 p-4 rounded-lg mt-3 ml-4">
                                            SEO uzun vadeli bir yatırımdır. İlk etkiler genellikle 2-3 ay içinde görülmeye başlar, ancak kalıcı ve büyük sonuçlar için 6-12 aylık bir süreç gereklidir.
                                        </p>
                                    </div>

                                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                        <h3 className="font-semibold text-gray-900 mb-2">Sıralama garantisi var mı?</h3>
                                        <p className="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em] bg-white/50 p-4 rounded-lg mt-3 ml-4">
                                            Google algoritmaları sürekli değiştiği için hiçbir profesyonel SEO uzmanı %100 sıralama garantisi veremez. Ancak, trafik ve görünürlük artışı için performans odaklı çalışılmaktadır.
                                        </p>
                                    </div>

                                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                        <h3 className="font-semibold text-gray-900 mb-2">Hangi sektörlere hizmet veriliyor?</h3>
                                        <p className="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em] bg-white/50 p-4 rounded-lg mt-3 ml-4">
                                            E-ticaret, SaaS, Hukuk, Sağlık ve Kurumsal hizmetler başta olmak üzere, dijital büyüme hedefi olan tüm sektörlere hizmet verilmektedir.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Author Card */}
                            <section aria-labelledby="author-bio" className="mt-24 border-t border-gray-100 pt-16">
                                <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                    <Link href="/hakkimda" className="shrink-0 group">
                                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg overflow-hidden relative">
                                            <Image
                                                src="/images/bahattin-yaylagul.jpg"
                                                alt="Bahattin Yaylagül"
                                                width={128}
                                                height={128}
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    </Link>
                                    <div className="text-center md:text-left">
                                        <div className="flex flex-col md:flex-row items-center gap-3 mb-4 justify-center md:justify-start">
                                            <Link href="/hakkimda" className="hover:text-blue-600 transition-colors">
                                                <h3 id="author-bio" className="text-2xl font-sans font-bold text-gray-900">Bahattin Yaylagül</h3>
                                            </Link>
                                            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full">SEO Consultant</span>
                                        </div>
                                        <div className="flex items-center gap-4 justify-center md:justify-start">
                                            <Link href="/hakkimda" className="text-sm font-semibold text-gray-900 underline underline-offset-4 decoration-gray-200 hover:decoration-gray-900 transition-all">
                                                Hakkımda Detaylı Bilgi
                                            </Link>
                                            <a href="https://linkedin.com/in/bahattin-yaylagul" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-[#0077B5] hover:opacity-80 transition-opacity">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                                LinkedIn
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final CTA */}
                            <section id="contact" className="mt-20">
                                <div className="relative overflow-hidden p-10 md:p-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl text-white text-center">
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                                    </div>

                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-4xl font-bold mb-4">SEO Projenizi Konuşalım</h2>
                                        <p className="text-gray-300 mb-8 max-w-md mx-auto">
                                            Ücretsiz ön değerlendirme için benimle iletişime geçin. 24 saat içinde dönüş sağlanır.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <a
                                                href="mailto:bahattinyaylagul@gmail.com"
                                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                E-posta Gönder
                                            </a>
                                            <Link
                                                href="/geo"
                                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors">
                                                GEO Hizmetlerini İncele
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </article>
    );
}
