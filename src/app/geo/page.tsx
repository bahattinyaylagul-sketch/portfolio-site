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
        q: "GEO ile SEO arasındaki fark nedir?",
        a: "Klasik SEO, arama motorunun algoritmasını hedefler; GEO ise yapay zeka modellerinin markanızı tanımasını, anlamasını ve güvenmesini hedefler. Google'da üst sıraya çıkmak için bağlantı ve anahtar kelime yeterliyken, ChatGPT veya Perplexity'de anılmak için modelin sizi bir otorite olarak 'öğrenmesi' gerekir — bu farklı bir sinyal seti demektir."
    },
    {
        q: "Mevcut SEO ajansım varken ayrıca GEO danışmanı almam gerekir mi?",
        a: "Evet, genellikle gerekir. GEO danışmanlığı mevcut SEO ajansı çalışmalarıyla çelişmez; aksine teknik SEO altyapınız güçlüyse GEO stratejisi daha hızlı sonuç verir. Ajansınıza şunu sorabilirsiniz: 'Hangi yapay zeka platformlarında anılıyoruz ve bunu nasıl ölçüyoruz?' Cevap alamıyorsanız o boşluğu dolduracak bir uzmana ihtiyacınız var demektir."
    },
    {
        q: "GEO ile AEO aynı şey midir?",
        a: "Hayır, ama ikisi birbirini tamamlar. AEO içeriği biçimlendirir, GEO bağlamı inşa eder, LLM SEO ise modelin bakışını yönetir. AEO'yu 'yapay zekaya okunabilir içerik üretmek' olarak, GEO'yu ise 'yapay zekanın sizi güvenilir kaynak olarak kodlaması' olarak düşünebilirsiniz."
    },
    {
        q: "GEO sonuçları ne kadar sürede görülür?",
        a: "Yapay zeka modellerinde önerilme süreci 3 ile 9 ay arasında sinyal birikimi gerektirir. LLM'ler çelişkili bilgilerle karşılaştığında belirsizliği çözmek yerine o konuyu tamamen geçer; tutarsız marka anlatısı bu süreyi ciddi ölçüde uzatır."
    },
    {
        q: "SEO altyapım yoksa GEO'ya başlayabilir miyim?",
        a: "Başlayabilirsiniz, ancak teknik SEO ve GEO çalışmalarını paralel yürütmek en verimli yöntemdir; biri diğerini beklesin diye vakit kaybetmeyin."
    },
    {
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
            {
                "@type": "Person",
                "@id": "https://bahattinyaylagul.com/#person",
                "name": "Bahattin Yaylagül",
                "url": "https://bahattinyaylagul.com",
                "jobTitle": "SEO Consultant",
                "image": "https://bahattinyaylagul.com/images/bahattin-yaylagul.jpg",
                "sameAs": ["https://linkedin.com/in/bahattin-yaylagul"]
            },
            {
                "@type": "ProfessionalService",
                "@id": "https://bahattinyaylagul.com/geo/#service",
                "name": "GEO Danışmanlığı (Generative Engine Optimization)",
                "description": "Markanızın ChatGPT, Gemini ve Perplexity gibi yapay zeka modellerinde kaynak olarak önerilmesini sağlayan optimizasyon hizmeti.",
                "url": "https://bahattinyaylagul.com/geo",
                "image": "https://bahattinyaylagul.com/images/bahattin-yaylagul.jpg",
                "priceRange": "$$$",
                "areaServed": [
                    {
                        "@type": "Country",
                        "name": "TR"
                    },
                    {
                        "@type": "AdministrativeArea",
                        "name": "İstanbul"
                    },
                    {
                        "@type": "AdministrativeArea",
                        "name": "Ankara"
                    },
                    {
                        "@type": "AdministrativeArea",
                        "name": "İzmir"
                    }
                ],
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
                },
                "founder": { "@id": "https://bahattinyaylagul.com/#person" }
            },
            {
                "@type": "FAQPage",
                "@id": "https://bahattinyaylagul.com/geo/#faq",
                "mainEntity": faqData.map(item => ({
                    "@type": "Question",
                    "name": item.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.a
                    }
                }))
            },
            {
                "@type": "Article",
                "@id": "https://bahattinyaylagul.com/geo/#article",
                "headline": "GEO Danışmanlığı: Yapay Zekâ Arama Optimizasyonu",
                "author": { "@id": "https://bahattinyaylagul.com/#person" },
                "publisher": { "@id": "https://bahattinyaylagul.com/#person" },
                "datePublished": "2026-07-18T10:00:00Z",
                "dateModified": "2026-07-18T10:00:00Z",
                "description": "Markanızın ChatGPT, Gemini ve Perplexity gibi üretken yapay zekâ motorlarında atıf alması, kaynak gösterilmesi ve önerilmesi için stratejik optimizasyon rehberi.",
                "inLanguage": "tr-TR"
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
            {/* Fixed Header Wrapper */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <Navigation />
            </header>

            <article className="pb-8">
                {/* ── HERO ── */}
                <header className="relative overflow-hidden bg-[#0a0a0a] py-20 pt-28">
                    {/* Subtle glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
                        {/* Breadcrumb inside Hero header, logo-aligned, above upper badge */}
                        <Breadcrumb items={breadcrumbItems} />


                        {/* Başlık - align left */}
                        <h1
                            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-5 leading-[1.05] tracking-tight text-left"
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

                        <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl text-left leading-relaxed font-medium">
                            Müşterileriniz artık yapay zekâya soruyor. ChatGPT, Gemini ve Perplexity aramalarında markanızın güvenilir bir kaynak olarak önerilmesini sağlayın.
                        </p>

                        <p className="text-sm text-white/50 mb-8 max-w-xl text-left leading-relaxed">
                            Yapay zekâ motorlarında kaynak gösterilmek, marka atıflarını artırmak ve semantik görünürlük kazanmak için stratejik optimizasyon hizmeti.
                        </p>


                        {/* CTA - align left */}
                        <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-12 mt-8">
                            <a
                                href="#analiz"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-full transition-all text-base shadow-lg shadow-violet-600/25 hover:shadow-violet-600/35 hover:-translate-y-0.5"
                            >
                                Ücretsiz GEO Analiz Formuna Ulaşın
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <span className="text-white/40 text-xs font-medium">
                                24 saat içinde dönüş · %100 ücretsiz
                            </span>
                        </div>

                        {/* Trust Stats Bar - align left */}
                        <div className="border-t border-white/10 pt-10">
                            <div className="flex items-center justify-start gap-0 max-w-sm">
                                {[
                                    { value: "14 Yıl+", label: "Sektör Deneyimi" },
                                    { value: "200+", label: "Başarılı Proje" },
                                ].map((stat, i) => (
                                    <div key={i} className={`flex flex-col items-start gap-1 ${i === 0 ? "border-r border-white/10 pr-10" : "pl-10"}`}>
                                        <span className="text-2xl md:text-3xl font-black text-white tracking-tight">{stat.value}</span>
                                        <span className="text-white/40 text-xs font-medium uppercase tracking-wider">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </header>

                {/* GEO Content Body */}
                <div className="max-w-[1400px] mx-auto px-6 md:px-8 pb-12 mt-12">
                    <GEOContent />
                </div>

                {/* ── Ücretsiz Analiz Formu ── */}
                <section className="py-16 bg-white border-t border-gray-100" id="analiz" aria-labelledby="analiz-heading">
                    <div className="max-w-4xl mx-auto px-4 md:px-6">
                        <div className="text-center mb-10">
                            <div className="text-center mb-6 bg-violet-50 border border-violet-100 px-6 py-4 rounded-2xl max-w-2xl mx-auto shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-sm text-violet-900 font-medium">
                                    💼 Yapay zeka motorlarında (ChatGPT, Gemini, Perplexity) markanızın <strong>önerilme ve atıf sıklığını</strong> analiz etmek için formu doldurun.
                                </p>
                            </div>
                            <h2 id="analiz-heading" className="text-3xl md:text-4xl font-black text-gray-900 mb-3 tracking-tight">Ücretsiz GEO Denetimi</h2>
                            <p className="text-gray-600 text-base md:text-lg">Sitenizin LLM ve yapay zeka arama motorları gözündeki görünürlüğünü denetleyelim.</p>
                        </div>
                        <SEOContactForm />
                    </div>
                </section>

                {/* FAQ */}
                <section aria-labelledby="faq-section" className="py-16 bg-gray-50/50 border-t border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 md:px-6">
                        <h2 id="faq-section" className="text-3xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight text-center">Sıkça Sorulan Sorular</h2>
                        <div className="space-y-4 max-w-3xl mx-auto">
                            {faqData.map((item, i) => (
                                <details key={i} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none font-sans">
                                        <span className="font-bold text-gray-950 text-base pr-4">{item.q}</span>
                                        <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-5 bg-white">
                                        {item.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Author Card */}
                <section aria-labelledby="author-bio" className="border-t border-gray-100 py-12 bg-white">
                    <div className="max-w-4xl mx-auto px-4 md:px-6">
                        <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
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
                                    <span className="px-3 py-1 bg-violet-50 text-violet-700 text-xs font-bold uppercase tracking-wider rounded-full">SEO Consultant</span>
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
                        </div>
                    </div>
                </section>
            <article>
                <TestimonialsSection />

                {/* Vaka Çalışmaları */}
                <section className="py-20 bg-gray-50/50 border-b border-gray-100" id="vaka-calismalari" aria-labelledby="geo-cases-heading">
                    <div className="max-w-6xl mx-auto px-4 md:px-6">
                        <div className="mb-12">
                            <p className="text-violet-600 font-bold text-xs uppercase tracking-widest mb-2">GEO BÜYÜME KANITLARI</p>
                            <h2 id="geo-cases-heading" className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">Vaka Çalışmaları</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* N Kolay */}
                            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="px-3 py-1 bg-orange-50 border border-orange-100 text-orange-600 text-[10px] font-bold uppercase tracking-widest rounded-full">FİNANS &amp; TEKNOLOJİ</span>
                                    <span className="text-sm font-semibold text-gray-400">Süre: 1 Yıl (2024-2025)</span>
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-3">N Kolay</h3>
                                <p className="text-gray-500 text-sm font-medium mb-6">Finans Dikeyinde Dijital Otorite ve Rekabetçi SERP Hakimiyeti</p>
                                <div className="space-y-4 mb-8 text-sm text-gray-600 border-t border-b border-gray-100 py-6">
                                    <div className="flex gap-2.5"><span className="text-green-500 font-bold">✓</span><span>Kredi dikeyindeki dönüşüm odaklı aramalar için varlık (Entity) tabanlı semantik kurgu oluşturuldu.</span></div>
                                    <div className="flex gap-2.5"><span className="text-green-500 font-bold">✓</span><span>Log analizleri ile arama motoru tarama bütçesi en değerli sayfalara yönlendirildi.</span></div>
                                    <div className="flex gap-2.5"><span className="text-green-500 font-bold">✓</span><span>Botların erişimini kolaylaştırmak için JavaScript ve SSR altyapısı optimize edildi.</span></div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-6 bg-gray-50 p-4 rounded-2xl">
                                    <div>
                                        <div className="text-2xl font-black text-orange-600">%210</div>
                                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">Trafik Artışı</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-black text-orange-600">%2.193</div>
                                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">Kredi Görünürlüğü</div>
                                    </div>
                                </div>
                                <div className="text-xs text-gray-500 border-t border-gray-100 pt-4 flex flex-wrap gap-x-4 gap-y-2 justify-between items-center">
                                    <span>Ek Etki: %12,39 Kredi Başvurusu · %23 Onay Oranı</span>
                                    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7419010392972034048/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold flex items-center gap-1">
                                        N Kolay SEO vaka çalışması — LinkedIn yayını
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                    </a>
                                </div>
                            </div>

                            {/* Dünyagöz */}
                            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="px-3 py-1 bg-teal-50 border border-teal-100 text-teal-600 text-[10px] font-bold uppercase tracking-widest rounded-full">SAĞLIK &amp; YMYL</span>
                                    <span className="text-sm font-semibold text-gray-400">Süre: 8 Ay (Önerilen)</span>
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-3">Dünyagöz</h3>
                                <p className="text-gray-500 text-sm font-medium mb-6">Tıbbi Sorgularda Semantik Otorite ve E-E-A-T Uyum Yapılandırması</p>
                                <div className="space-y-4 mb-8 text-sm text-gray-600 border-t border-b border-gray-100 py-6">
                                    <div className="flex gap-2.5"><span className="text-green-500 font-bold">✓</span><span>YMYL (Your Money or Your Life) kriterlerine uygun içerik ve yazar şeması entegrasyonu sağlandı.</span></div>
                                    <div className="flex gap-2.5"><span className="text-green-500 font-bold">✓</span><span>Tıbbi makaleler ve doktor profilleri Google algoritmalarına uygun semantik işaretlemeyle (Schema.org) donatıldı.</span></div>
                                    <div className="flex gap-2.5"><span className="text-green-500 font-bold">✓</span><span>Organik kanallardan gelen kullanıcıları hasta başvurusuna dönüştüren huni optimizasyonu yapıldı.</span></div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-6 bg-gray-50 p-4 rounded-2xl">
                                    <div>
                                        <div className="text-2xl font-black text-teal-600">%145</div>
                                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">Tıbbi Görünürlük</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-black text-teal-600">%34</div>
                                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">Dönüşüm Oranı Artışı</div>
                                    </div>
                                </div>
                                <div className="text-xs text-gray-500 border-t border-gray-100 pt-4">
                                    <span>Ek Etki: Hasta Randevularında Belirgin Artış</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </article>

            <Footer />
        </main>
    );
}
