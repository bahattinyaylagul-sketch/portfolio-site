/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { SEOContactForm } from "../seo/SEONavigator";
import GEOContent from "./GEOContent";
import Breadcrumb, { getBreadcrumbSchema } from "@/components/Breadcrumb";
import TestimonialsSection from "../seo/TestimonialsSection";
import GEOClusterGrid from "@/components/GEOClusterGrid";

export const metadata: Metadata = {
    title: "GEO Danışmanlığı – Bahattin Yaylagül",
    description: "Markanızı ChatGPT, Gemini ve AI arama motorlarına hazırlayın. Generative Engine Optimization (GEO) ile yapay zeka kaynaklı görünürlük kazanın.",
    openGraph: {
        title: "GEO Danışmanlığı – Bahattin Yaylagül",
        description: "Yapay zeka sistemleri için içerik optimizasyonu",
        type: "website",
        locale: "tr_TR",
    },
    alternates: {
        canonical: "/geo",
    },
};

const faqData = [
    {
        id: "faq-geo-seo-farki",
        q: "GEO ile SEO arasındaki fark nedir?",
        a: "Klasik SEO, arama motorunun algoritmasını hedefler; GEO ise yapay zeka modellerinin markanızı tanımasını, anlamasını ve güvenmesini hedefler. Google'da üst sıraya çıkmak için bağlantı ve anahtar kelime yeterliyken, ChatGPT veya Perplexity'de anılmak için modelin sizi bir otorite olarak 'öğrenmesi' gerekir — bu farklı bir sinyal seti demektir."
    },
    {
        id: "faq-geo-ajans",
        q: "Mevcut SEO ajansım varken ayrıca GEO danışmanı almam gerekir mi?",
        a: "Evet, genellikle gerekir. GEO danışmanlığı mevcut SEO ajansı çalışmalarıyla çelişmez; aksine teknik SEO altyapınız güçlüyse GEO stratejisi daha hızlı sonuç verir. Ajansınıza şunu sorabilirsiniz: 'Hangi yapay zeka platformlarında anılıyoruz ve bunu nasıl ölçüyoruz?' Cevap alamıyorsanız o boşluğu dolduracak bir uzmana ihtiyacınız var demektir."
    },
    {
        id: "faq-geo-aeo-fark",
        q: "GEO ile AEO aynı şey midir?",
        a: "Hayır, ama ikisi birbirini tamamlar. AEO içeriği biçimlendirir, GEO bağlamı inşa eder, LLM SEO ise modelin bakışını yönetir. AEO'yu 'yapay zekaya okunabilir içerik üretmek' olarak, GEO'yu ise 'yapay zekanın sizi güvenilir kaynak olarak kodlaması' olarak düşünebilirsiniz."
    },
    {
        id: "faq-geo-sure",
        q: "GEO sonuçları ne kadar sürede görülür?",
        a: "Yapay zeka modellerinde önerilme süreci 3 ile 9 ay arasında sinyal birikimi gerektirir. LLM'ler çelişkili bilgilerle karşılaştığında belirsizliği çözmek yerine o konuyu tamamen geçer; tutarsız marka anlatısı bu süreyi ciddi ölçüde uzatır."
    },
    {
        id: "faq-geo-altyapi",
        q: "SEO altyapım yoksa GEO'ya başlayabilir miyim?",
        a: "Başlayabilirsiniz, ancak teknik SEO ve GEO çalışmalarını paralel yürütmek en verimli yöntemdir; biri diğerini beklesin diye vakit kaybetmeyin."
    },
    {
        id: "faq-geo-ymyl",
        q: "YMYL sektöründe GEO çalışır mı?",
        a: "Çalışır, ancak sağlık, finans ve hukuk gibi alanlarda modeller belirsiz veya çelişkili kaynaklara dayanmak yerine sessiz kalmayı tercih eder; dolayısıyla entity (varlık) otoritesi ve kaynak güvenilirliği diğer sektörlere kıyasla çok daha belirleyici hale gelir."
    }
];

export default function GEOPage() {
    const breadcrumbItems = [
        { label: "GEO Danışmanlığı", href: "/geo" }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            // ── WebSite ──
            {
                "@type": "WebSite",
                "@id": "https://bahattinyaylagul.com/#website",
                "url": "https://bahattinyaylagul.com",
                "name": "Bahattin Yaylagül",
                "publisher": { "@id": "https://bahattinyaylagul.com/#person" },
                "inLanguage": "tr-TR"
            },
            // ── WebPage ──
            {
                "@type": "WebPage",
                "@id": "https://bahattinyaylagul.com/geo/#webpage",
                "url": "https://bahattinyaylagul.com/geo",
                "name": "GEO Danışmanlığı – Bahattin Yaylagül",
                "isPartOf": { "@id": "https://bahattinyaylagul.com/#website" },
                "mainEntity": { "@id": "https://bahattinyaylagul.com/geo/#service" },
                "dateModified": "2026-09-06",
                "inLanguage": "tr-TR",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["#geo-nedir p:first-of-type", "#ne-zaman-sonuc-verir p:first-of-type"]
                },
                "hasPart": [
                    { "@id": "https://bahattinyaylagul.com/geo/#faq" },
                    { "@id": "https://bahattinyaylagul.com/geo/#glossary" }
                ],
                "about": [
                    {
                        "@type": "Thing",
                        "name": "Generative Engine Optimization",
                        "alternateName": ["GEO", "Üretken Motor Optimizasyonu"],
                        "sameAs": ["https://en.wikipedia.org/wiki/Generative_engine_optimization"]
                    },
                    {
                        "@type": "Thing",
                        "name": "Answer Engine Optimization",
                        "alternateName": "AEO",
                        "sameAs": "https://www.wikidata.org/wiki/Q111812904"
                    }
                ],
                "mentions": [
                    {
                        "@type": "Thing",
                        "name": "ChatGPT",
                        "additionalType": "https://schema.org/SoftwareApplication",
                        "sameAs": "https://en.wikipedia.org/wiki/ChatGPT"
                    },
                    {
                        "@type": "Thing",
                        "name": "Perplexity",
                        "additionalType": "https://schema.org/SoftwareApplication",
                        "sameAs": "https://en.wikipedia.org/wiki/Perplexity_AI"
                    },
                    {
                        "@type": "Thing",
                        "name": "Gemini",
                        "additionalType": "https://schema.org/SoftwareApplication",
                        "sameAs": "https://en.wikipedia.org/wiki/Gemini_(chatbot)"
                    },
                    {
                        "@type": "Thing",
                        "name": "Large language model",
                        "alternateName": "LLM",
                        "sameAs": "https://en.wikipedia.org/wiki/Large_language_model"
                    },
                    {
                        "@type": "Thing",
                        "name": "Retrieval-augmented generation",
                        "alternateName": "RAG",
                        "sameAs": "https://en.wikipedia.org/wiki/Retrieval-augmented_generation"
                    },
                    {
                        "@type": "Thing",
                        "name": "Schema.org",
                        "sameAs": "https://en.wikipedia.org/wiki/Schema.org"
                    },
                    {
                        "@type": "Thing",
                        "name": "Wikidata",
                        "sameAs": "https://en.wikipedia.org/wiki/Wikidata"
                    }
                ]
            },
            // ── Person ──
            {
                "@type": "Person",
                "@id": "https://bahattinyaylagul.com/#person",
                "name": "Bahattin Yaylagül",
                "url": "https://bahattinyaylagul.com",
                "jobTitle": ["SEO Danışmanı", "GEO Uzmanı"],
                "image": "https://bahattinyaylagul.com/images/bahattin-yaylagul.jpg",
                "sameAs": [
                    "https://linkedin.com/in/bahattin-yaylagul",
                    "https://medium.com/@bahattinyaylagl",
                    "https://bahattinyaylagul.com/hakkimda"
                ],
                "knowsAbout": [
                    "Generative Engine Optimization",
                    "Answer Engine Optimization",
                    "Technical SEO",
                    "Entity SEO",
                    "Schema.org",
                    "Large Language Model Optimization"
                ],
                "knowsLanguage": ["tr", "en"],
                "hasOccupation": {
                    "@type": "Occupation",
                    "name": "SEO Danışmanı",
                    "occupationLocation": { "@type": "Country", "name": "TR" }
                },
                "subjectOf": { "@id": "https://bahattinyaylagul.com/geo/#webpage" }
            },
            // ── Service ──
            {
                "@type": "Service",
                "@id": "https://bahattinyaylagul.com/geo/#service",
                "serviceType": "Generative Engine Optimization Consulting",
                "name": "GEO Danışmanlığı",
                "description": "Markanızın ChatGPT, Gemini ve Perplexity gibi yapay zeka modellerinde kaynak olarak önerilmesini sağlayan optimizasyon hizmeti.",
                "url": "https://bahattinyaylagul.com/geo",
                "image": "https://bahattinyaylagul.com/images/bahattin-yaylagul.jpg",
                "provider": { "@id": "https://bahattinyaylagul.com/#person" },
                "areaServed": [
                    { "@type": "Country", "name": "TR" },
                    { "@type": "AdministrativeArea", "name": "İstanbul" },
                    { "@type": "AdministrativeArea", "name": "Ankara" },
                    { "@type": "AdministrativeArea", "name": "İzmir" }
                ],
                "inLanguage": "tr",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "GEO Danışmanlığı Kapsamı",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Entity Otoritesi İnşası" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Schema.org İşaretlemeleri" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Co-citation ve Dijital PR" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Otoriter İçerik Üretimi" } }
                    ]
                },
                "potentialAction": {
                    "@type": "CommunicateAction",
                    "name": "Ücretsiz GEO Analizi Talebi",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://bahattinyaylagul.com/geo#analiz",
                        "inLanguage": "tr",
                        "actionPlatform": [
                            "http://schema.org/DesktopWebPlatform",
                            "http://schema.org/MobileWebPlatform"
                        ]
                    }
                }
            },
            // ── FAQPage ──
            {
                "@type": "FAQPage",
                "@id": "https://bahattinyaylagul.com/geo/#faq",
                "mainEntity": faqData.map(item => ({
                    "@type": "Question",
                    "name": item.q,
                    "url": `https://bahattinyaylagul.com/geo#${item.id}`,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.a
                    }
                }))
            },
            // ── Article ──
            {
                "@type": "Article",
                "@id": "https://bahattinyaylagul.com/geo/#article",
                "headline": "GEO Danışmanlığı: Yapay Zekâ Arama Optimizasyonu",
                "author": { "@id": "https://bahattinyaylagul.com/#person" },
                "publisher": { "@id": "https://bahattinyaylagul.com/#person" },
                "datePublished": "2026-07-18T10:00:00Z",
                "dateModified": "2026-09-06T00:00:00Z",
                "description": "Markanızın ChatGPT, Gemini ve Perplexity gibi üretken yapay zekâ motorlarında atıf alması, kaynak gösterilmesi ve önerilmesi için stratejik optimizasyon rehberi.",
                "inLanguage": "tr-TR",
                "wordCount": 2499,
                "keywords": ["GEO danışmanlığı", "Generative Engine Optimization", "yapay zeka arama optimizasyonu", "ChatGPT görünürlük", "LLM SEO"],
                "mainEntityOfPage": { "@id": "https://bahattinyaylagul.com/geo/#webpage" },
                "about": [
                    {
                        "@type": "Thing",
                        "name": "Generative Engine Optimization",
                        "alternateName": ["GEO", "Üretken Motor Optimizasyonu"],
                        "sameAs": ["https://en.wikipedia.org/wiki/Generative_engine_optimization"]
                    }
                ],
                "mentions": [
                    {
                        "@type": "Thing",
                        "name": "ChatGPT",
                        "additionalType": "https://schema.org/SoftwareApplication",
                        "sameAs": "https://en.wikipedia.org/wiki/ChatGPT"
                    },
                    {
                        "@type": "Thing",
                        "name": "Perplexity",
                        "additionalType": "https://schema.org/SoftwareApplication",
                        "sameAs": "https://en.wikipedia.org/wiki/Perplexity_AI"
                    },
                    {
                        "@type": "Thing",
                        "name": "Gemini",
                        "additionalType": "https://schema.org/SoftwareApplication",
                        "sameAs": "https://en.wikipedia.org/wiki/Gemini_(chatbot)"
                    }
                ],
                "citation": {
                    "@type": "ScholarlyArticle",
                    "name": "GEO: Generative Engine Optimization",
                    "author": "Aggarwal et al.",
                    "datePublished": "2023-11",
                    "url": "https://arxiv.org/abs/2311.09735"
                }
            },
            // ── DefinedTermSet (Sözlük) ──
            {
                "@type": "DefinedTermSet",
                "@id": "https://bahattinyaylagul.com/geo/#glossary",
                "name": "GEO Terimleri Sözlüğü",
                "hasDefinedTerm": [
                    {
                        "@type": "DefinedTerm",
                        "name": "Entity Otoritesi",
                        "description": "Markanızın veya ürününüzün, arama motorları ve büyük dil modelleri tarafından eşsiz, çelişkisiz ve doğrulanabilir bir varlık olarak algılanması durumudur.",
                        "url": "https://bahattinyaylagul.com/geo#entity-otoritesi",
                        "inDefinedTermSet": { "@id": "https://bahattinyaylagul.com/geo/#glossary" }
                    },
                    {
                        "@type": "DefinedTerm",
                        "name": "RAG (Retrieval-Augmented Generation)",
                        "description": "RAG, yapay zeka modellerinin kullanıcı sorgusuna yanıt hazırlarken yalnızca statik eğitim verilerini değil; web indeksinden anlık olarak çektikleri en güvenilir verileri sentezleyerek kaynaklı ve güncel cevap üretme teknolojisidir.",
                        "url": "https://bahattinyaylagul.com/geo#rag",
                        "inDefinedTermSet": { "@id": "https://bahattinyaylagul.com/geo/#glossary" }
                    },
                    {
                        "@type": "DefinedTerm",
                        "name": "Co-Citation",
                        "alternateName": "Birlikte Anılma Skoru",
                        "description": "Co-citation, web genelindeki farklı bağımsız ve otoriter platformlarda markanızın sektörünüzdeki anahtar kelimelerle aynı metin bloğu içinde doğal olarak geçmesidir.",
                        "url": "https://bahattinyaylagul.com/geo#co-citation",
                        "inDefinedTermSet": { "@id": "https://bahattinyaylagul.com/geo/#glossary" }
                    },
                    {
                        "@type": "DefinedTerm",
                        "name": "Information Gain",
                        "alternateName": "Bilgi Kazancı",
                        "description": "Information Gain, bir web sayfasının internetteki diğer tüm benzer sayfalardan farklı olarak sunduğu benzersiz veri dikeyidir.",
                        "url": "https://bahattinyaylagul.com/geo#information-gain",
                        "inDefinedTermSet": { "@id": "https://bahattinyaylagul.com/geo/#glossary" }
                    },
                    {
                        "@type": "DefinedTerm",
                        "name": "AEO (Answer Engine Optimization)",
                        "description": "AEO, içeriklerin yapay zeka cevap motorları ve sesli asistanlar tarafından kolayca okunup doğrudan çekilebilmesi için soru-cevap formunda biçimlendirilip sunulması optimizasyonudur.",
                        "url": "https://bahattinyaylagul.com/geo#aeo",
                        "inDefinedTermSet": { "@id": "https://bahattinyaylagul.com/geo/#glossary" }
                    },
                    {
                        "@type": "DefinedTerm",
                        "name": "LLM SEO",
                        "alternateName": "Large Language Model SEO",
                        "description": "LLM SEO, büyük dil modellerinin eğitim veri setlerinde yer alabilmek ve modellerin markanızı öncelikli tavsiye etmesini sağlamak amacıyla uygulanan yeni nesil semantik SEO yöntemleridir.",
                        "url": "https://bahattinyaylagul.com/geo#llm-seo",
                        "inDefinedTermSet": { "@id": "https://bahattinyaylagul.com/geo/#glossary" }
                    }
                ]
            },
            // ── ItemList (Danışmanlık Süreci) ──
            {
                "@type": "ItemList",
                "name": "GEO Danışmanlığı Süreci",
                "itemListOrder": "ItemListOrderAscending",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Entity Denetimi ve Tutarlılık Analizi" },
                    { "@type": "ListItem", "position": 2, "name": "Semantik Yapı ve Schema Kurulumu" },
                    { "@type": "ListItem", "position": 3, "name": "Co-Citation ve Dijital PR Yayılımı" },
                    { "@type": "ListItem", "position": 4, "name": "LLM Önerilme ve Atıf Raporlama" }
                ]
            },
            getBreadcrumbSchema(breadcrumbItems)
        ]
    };

    return (
        <main className="min-h-screen bg-white font-sans selection:bg-violet-100 selection:text-violet-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navigation theme="dark" />

            <article className="pb-8">
                {/* ── HERO ── */}
                <header className="relative overflow-hidden bg-[#0a0a0a] py-20 pt-28">
                    {/* Subtle glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
                        {/* Breadcrumb inside Hero header, logo-aligned, above upper badge */}
                        <Breadcrumb items={breadcrumbItems} />

                        <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-center mt-8">
                            {/* Sol Kolon */}
                            <div className="text-left">
                                {/* Başlık - align left */}
                                <h1
                                    className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-5 leading-[1.05] tracking-tight"
                                    style={{ fontWeight: 900 }}
                                >
                                    <span
                                        style={{
                                            textShadow: "0 0 80px rgba(255,255,255,0.12), 0 0 160px rgba(139,92,246,0.08)"
                                        }}
                                    >
                                        GEO{" "}
                                        <span className="text-white">
                                            Danışmanlığı
                                        </span>
                                    </span>
                                </h1>

                                <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl leading-relaxed font-medium">
                                    Müşterileriniz artık yapay zekâya soruyor. ChatGPT, Gemini ve Perplexity aramalarında markanızın güvenilir bir kaynak olarak önerilmesini sağlayın.
                                </p>

                                <p className="text-sm text-white/50 mb-8 max-w-xl leading-relaxed">
                                    Yapay zekâ motorlarında kaynak gösterilmek, marka atıflarını artırmak ve semantik görünürlük kazanmak için stratejik optimizasyon hizmeti.
                                </p>

                                {/* Trust Stats Bar */}
                                <nav className="border-t border-white/10 pt-10 mt-8" aria-label="Güven İstatistikleri">
                                    <ul className="flex items-center justify-start gap-0 max-w-sm">
                                        {[
                                            { value: "14 Yıl+", label: "Sektör Deneyimi" },
                                            { value: "200+", label: "Başarılı Proje" },
                                        ].map((stat, i) => (
                                            <li key={i} className={`flex flex-col items-start gap-1 list-none ${i === 0 ? "border-r border-white/10 pr-10" : "pl-10"}`}>
                                                <span className="text-2xl md:text-3xl font-black text-white tracking-tight">{stat.value}</span>
                                                <span className="text-white/40 text-xs font-medium uppercase tracking-wider">{stat.label}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>

                            {/* Sağ Kolon: Form */}
                            <aside aria-label="Hızlı GEO Denetimi Formu" className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-3xl shadow-xl w-full">
                                <p className="text-xl font-bold text-white mb-2">Ücretsiz GEO Denetimi</p>
                                <p className="text-sm text-white/60 mb-6">Sitenizin LLM ve yapay zeka arama motorları gözündeki görünürlüğünü denetleyelim.</p>
                                <SEOContactForm />
                            </aside>
                        </div>
                    </div>
                </header>

                {/* GEO Content Body */}
                <section aria-label="GEO Danışmanlığı İçeriği" className="max-w-[1400px] mx-auto px-6 md:px-8 pb-12 mt-12">
                    <GEOContent />
                </section>

                {/* GEO Cluster Grid */}
                <GEOClusterGrid />

                {/* FAQ */}
                <section aria-labelledby="faq-section" className="py-16 bg-gray-50/50 border-t border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 md:px-6">
                        <h2 id="faq-section" className="text-3xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight text-center">Sıkça Sorulan Sorular</h2>
                        <div className="space-y-4 max-w-3xl mx-auto">
                            {faqData.map((item, i) => (
                                <details key={i} id={item.id} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none font-sans">
                                        <h3 className="inline font-bold text-gray-950 text-base pr-4">{item.q}</h3>
                                        <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-5 bg-white">
                                        <p>{item.a}</p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Author Card */}
                <section aria-labelledby="author-bio" className="border-t border-gray-100 py-12 bg-white">
                    <div className="max-w-4xl mx-auto px-4 md:px-6">
                        <article className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                            <Link href="/hakkimda" aria-label="Bahattin Yaylagül Hakkında Detaylı Bilgi" className="shrink-0 group">
                                <span className="sr-only">Bahattin Yaylagül Kimdir ve Hakkında Detaylar</span>
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg overflow-hidden relative">
                                    <Image
                                        src="/images/bahattin-yaylagul.jpg"
                                        alt="Bahattin Yaylagül"
                                        width={128}
                                        height={128}
                                        className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </Link>
                            <div className="text-center md:text-left">
                                <div className="flex flex-col md:flex-row items-center gap-3 mb-4 justify-center md:justify-start">
                                    <Link href="/hakkimda" aria-label="Bahattin Yaylagül Özgeçmiş ve Hakkında" className="hover:text-violet-600 transition-colors">
                                        <h3 id="author-bio" className="text-2xl font-sans font-bold text-gray-900">Bahattin Yaylagül</h3>
                                    </Link>
                                    <span className="px-3 py-1 bg-violet-50 text-violet-700 text-xs font-bold uppercase tracking-wider rounded-full">GEO Uzmanı</span>
                                </div>
                                <div className="flex items-center gap-4 justify-center md:justify-start">
                                    <Link href="/hakkimda" className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-gray-700 hover:text-gray-950 hover:bg-gray-50 hover:border-gray-300 font-semibold text-sm rounded-full transition-all">
                                        Bahattin Yaylagül Kimdir ve Hakkında Detaylar
                                    </Link>
                                    <a href="https://linkedin.com/in/bahattin-yaylagul" target="_blank" rel="noopener noreferrer" aria-label="Bahattin Yaylagül Profesyonel LinkedIn Profili" className="inline-flex items-center gap-1 text-sm font-semibold text-[#0077B5] hover:opacity-80 transition-opacity">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                        Bahattin Yaylagül LinkedIn Profesyonel Profilini İncele
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </article>

            <Footer />
        </main>
    );
}


