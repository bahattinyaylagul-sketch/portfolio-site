/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import GEOContent from "./GEOContent";

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

export default function GEOPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": "https://bahattinyaylagul.com/#person",
                "name": "Bahattin Yaylagül",
                "url": "https://bahattinyaylagul.com",
                "jobTitle": "Senior SEO & GEO Architect",
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
                        "urlTemplate": "https://bahattinyaylagul.com/seo#contact-form",
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
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "GEO ile SEO arasındaki fark nedir?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Klasik SEO, arama motorunun algoritmasını hedefler; GEO ise yapay zeka modellerinin markanızı tanımasını, anlamasını ve güvenmesini hedefler."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "GEO sonuçları ne kadar sürede görülür?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yapay zeka modellerinde önerilme süreci 3 ile 9 ay arasında sinyal birikimi gerektirir."
                        }
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://bahattinyaylagul.com/geo/#article",
                "headline": "GEO Danışmanlığı: Generative Engine Optimization Rehberi",
                "author": { "@id": "https://bahattinyaylagul.com/#person" },
                "publisher": { "@id": "https://bahattinyaylagul.com/#person" },
                "description": "GEO (Generative Engine Optimization), markanızın yapay zeka modelleri tarafından üretilen cevaplarda kaynak ve referans olarak seçilmesini sağlayan yeni nesil optimizasyon disiplinidir.",
                "inLanguage": "tr-TR"
            }
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

            {/* Hero */}
            <header className="w-full bg-gray-900 pt-16 pb-0 relative overflow-hidden mt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
                </div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>
                </div>

                <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
                    <div className="space-y-8 flex flex-col justify-center h-full pb-16 pt-12 text-center max-w-3xl mx-auto">
                        <div>
                            <div className="flex items-center justify-center gap-3 text-violet-400 font-bold tracking-widest text-xs uppercase mb-4">
                                <span>Hizmetler</span>
                                <span className="w-px h-3 bg-white/20"></span>
                                <span>Generative Engine Optimization</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
                                GEO Danışmanlığı: Yapay Zekâ Arama Optimizasyonu
                            </h1>

                            <p className="text-gray-300 text-lg leading-relaxed font-medium">
                                Markanızın ChatGPT, Gemini ve Perplexity gibi üretken yapay zekâ motorlarında atıf alması, kaynak gösterilmesi ve önerilmesi için stratejik optimizasyon süreçleri.
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-[1400px] mx-auto px-6 md:px-8 pt-12 pb-20">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-8 font-medium tracking-wide font-sans">
                    <Link href="/" className="hover:text-violet-600 transition-colors">Ana Sayfa</Link>
                    <span className="text-gray-200">/</span>
                    <span className="text-gray-600 font-bold truncate">GEO Danışmanlığı</span>
                </nav>

                {/* Main Body */}
                <GEOContent />
            </div>

            <Footer />
        </main>
    );
}
