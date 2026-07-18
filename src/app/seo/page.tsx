/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import SEOContentBody from "./SEOContentBody";
import { SEOContactForm } from "./SEONavigator";
import Breadcrumb, { getBreadcrumbSchema } from "@/components/Breadcrumb";

export const metadata: Metadata = {
    title: "SEO Danışmanlığı – Bahattin Yaylagül",
    description: "Google'da organik trafiğinizi ve satışlarınızı artırmak için profesyonel SEO danışmanlığı. Teknik SEO, semantik içerik ve otorite inşası.",
    openGraph: {
        title: "SEO Danışmanlığı – Bahattin Yaylagül",
        description: "Google'da organik trafiğinizi artırın",
        type: "website",
        locale: "tr_TR",
    },
    alternates: {
        canonical: "/seo",
    },
};

const faqData = [
    {
        q: "SEO danışmanlığı ne kadar sürede sonuç verir?",
        a: "Genellikle ilk etkiler ve teknik düzeltmelerin yansıması 2-3 ay sürerken, rekabetçi sektörlerde anahtar kelimelerde sürdürülebilir büyüme 6-12 ay arasında gerçekleşmektedir."
    },
    {
        q: "Hangi SEO araçlarını kullanıyorsunuz?",
        a: "Analiz ve raporlamalarda Google Search Console, Google Analytics (GA4), Ahrefs, Semrush ve Screaming Frog araçlarından faydalanıyoruz."
    }
];

export default function SEOPage() {
    const breadcrumbItems = [
        { label: "SEO Danışmanlığı", href: "/seo" }
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
                "@id": "https://bahattinyaylagul.com/seo/#service",
                "name": "SEO Danışmanlığı",
                "description": "Google'da organik trafiğinizi ve satışlarınızı artırmak için profesyonel SEO danışmanlığı.",
                "url": "https://bahattinyaylagul.com/seo",
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
                    "name": "Ücretsiz SEO Denetimi Talebi",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://bahattinyaylagul.com/seo#analiz",
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
                "@id": "https://bahattinyaylagul.com/seo/#faq",
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
                "@id": "https://bahattinyaylagul.com/seo/#article",
                "headline": "SEO Danışmanlığı: Arama Motoru Optimizasyonu Rehberi",
                "author": { "@id": "https://bahattinyaylagul.com/#person" },
                "publisher": { "@id": "https://bahattinyaylagul.com/#person" },
                "datePublished": "2026-07-18T10:00:00Z",
                "dateModified": "2026-07-18T10:00:00Z",
                "description": "Google'da organik trafiğinizi ve marka bilinirliğinizi artırmak için derinlemesine rehber ve danışmanlık detayları.",
                "inLanguage": "tr-TR",
                "breadcrumb": { "@id": "https://bahattinyaylagul.com/seo#breadcrumb" }
            },
            getBreadcrumbSchema(breadcrumbItems)
        ]
    };

    return (
        <main className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
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
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
                        {/* Breadcrumb inside Hero header, logo-aligned, above upper badge */}
                        <Breadcrumb items={breadcrumbItems} />

                        {/* Upper Badge with space-above config */}
                        <div className="text-left mt-8 mb-6">
                            <span className="inline-flex items-center gap-2 text-blue-400 font-mono font-bold tracking-widest text-xs uppercase mb-6 bg-blue-400/10 px-4 py-1.5 rounded-full border border-blue-400/15">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                                Hizmet
                            </span>
                        </div>

                        {/* Başlık - align left */}
                        <h1
                            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-5 leading-[1.05] tracking-tight text-left"
                            style={{ fontWeight: 900 }}
                        >
                            <span
                                style={{
                                    textShadow: "0 0 80px rgba(255,255,255,0.12), 0 0 160px rgba(99,102,241,0.08)"
                                }}
                            >
                                SEO{" "}
                                <span className="text-white">
                                    Danışmanlığı
                                </span>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl text-left leading-relaxed font-medium">
                            Sitenizi yalnızca Google için değil, yapay zekâ aramaları için de görünür kılıyorum. Teknik denetimden içerik stratejisine tüm süreci tek elden yürütüyor, her ay ölçülebilir raporla ilerlemeyi gösteriyorum.
                        </p>

                        <p className="text-sm text-white/50 mb-8 max-w-xl text-left leading-relaxed">
                            Teknik altyapı, semantik içerik ve otorite inşasının sistemli birleşimi ile sürdürülebilir organik büyüme.
                        </p>

                        {/* Yazar Bilgisi / Author Info - align left */}
                        <div className="flex flex-wrap items-center justify-start gap-3 mb-8 text-white/85">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
                                <Image
                                    src="/images/bahattin-yaylagul.jpg"
                                    alt="Bahattin Yaylagül"
                                    fill
                                    sizes="32px"
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-sm font-medium">
                                Yazar:{" "}
                                <Link href="/hakkimda" aria-label="Bahattin Yaylagül Hakkında Bilgi" className="hover:text-blue-400 underline decoration-white/20 hover:decoration-blue-400 transition-colors">
                                    Bahattin Yaylagül
                                </Link>
                            </span>
                            <span className="text-white/30">•</span>
                            <span className="text-xs text-white/60 font-medium">Son Güncelleme: 18 Temmuz 2026</span>
                            <span className="text-white/30">•</span>
                            <a
                                href="https://linkedin.com/in/bahattin-yaylagul"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Bahattin Yaylagül LinkedIn Profili"
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0077B5] hover:opacity-80 transition-opacity"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                LinkedIn Profili
                            </a>
                        </div>

                        {/* CTA - align left */}
                        <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-12 mt-8">
                            <a
                                href="#analiz"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all text-base shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 hover:-translate-y-0.5"
                            >
                                Ücretsiz SEO Analiz Formuna Ulaşın
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

                {/* SEO Body Contents */}
                <div className="max-w-[1400px] mx-auto px-6 md:px-8 pb-12 mt-12">
                    <SEOContentBody />
                </div>

                {/* ── Ücretsiz Analiz Formu ── */}
                <section className="py-16 bg-white border-t border-gray-100" id="analiz" aria-labelledby="analiz-heading">
                    <div className="max-w-4xl mx-auto px-4 md:px-6">
                        <div className="text-center mb-10">
                            <div className="text-center mb-6 bg-blue-50 border border-blue-100 px-6 py-4 rounded-2xl max-w-2xl mx-auto shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-sm text-blue-900 font-medium">
                                    💼 Vaka çalışmalarımızda elde ettiğimiz <strong>%210'a varan organik büyüme</strong> oranlarını kendi markanızda gerçekleştirmek için formu doldurun.
                                </p>
                            </div>
                            <h2 id="analiz-heading" className="text-3xl md:text-4xl font-black text-gray-900 mb-3 tracking-tight">Ücretsiz SEO Denetimi</h2>
                            <p className="text-gray-600 text-base md:text-lg">Sitenizin organik performansını detaylıca analiz edelim, büyüme için yol haritanızı çıkaralım.</p>
                        </div>
                        <SEOContactForm />
                    </div>
                </section>

                {/* FAQ - Tekilleştirilmiş Accordion FAQ */}
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
                                    <Link href="/hakkimda" aria-label="Bahattin Yaylagül Özgeçmiş ve Hakkında" className="hover:text-blue-600 transition-colors">
                                        <h3 id="author-bio" className="text-2xl font-sans font-bold text-gray-900">Bahattin Yaylagül</h3>
                                    </Link>
                                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full">SEO Consultant</span>
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
            </article>

            <Footer />
        </main>
    );
}
