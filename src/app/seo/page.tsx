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
                "inLanguage": "tr-TR"
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
                                            textShadow: "0 0 80px rgba(255,255,255,0.12), 0 0 160px rgba(99,102,241,0.08)"
                                        }}
                                    >
                                        SEO{" "}
                                        <span className="text-white">
                                            Danışmanlığı
                                        </span>
                                    </span>
                                </h1>

                                <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl leading-relaxed font-medium">
                                    Sitenizi yalnızca Google için değil, yapay zekâ aramaları için de görünür kılıyorum. Teknik denetimden içerik stratejisine tüm süreci tek elden yürütüyor, her ay ölçülebilir raporla ilerlemeyi gösteriyorum.
                                </p>

                                <p className="text-sm text-white/50 mb-8 max-w-xl leading-relaxed">
                                    Teknik altyapı, semantik içerik ve otorite inşasının sistemli birleşimi ile sürdürülebilir organik büyüme.
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
                            <aside aria-label="Hızlı SEO Denetimi Formu" className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-3xl shadow-xl w-full">
                                <p className="text-xl font-bold text-white mb-2">Ücretsiz SEO Denetimi</p>
                                <p className="text-sm text-white/60 mb-6">Sitenizin organik performansını detaylıca analiz edelim, büyüme için yol haritanızı çıkaralım.</p>
                                <SEOContactForm />
                            </aside>
                        </div>
                    </div>
                </header>

                {/* SEO Body Contents */}
                <section aria-label="SEO Danışmanlığı İçeriği" className="max-w-[1400px] mx-auto px-6 md:px-8 pb-12 mt-12">
                    <SEOContentBody />
                </section>

                {/* FAQ - Tekilleştirilmiş Accordion FAQ */}
                <section aria-labelledby="faq-section" className="py-16 bg-gray-50/50 border-t border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 md:px-6">
                        <h2 id="faq-section" className="text-3xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight text-center">Sıkça Sorulan Sorular</h2>
                        <ul className="space-y-4 max-w-3xl mx-auto">
                            {faqData.map((item, i) => (
                                <li key={i} className="list-none">
                                    <details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
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
                                </li>
                            ))}
                        </ul>
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
                        </article>
                    </div>
                </section>
            </article>

            <Footer />
        </main>
    );
}
