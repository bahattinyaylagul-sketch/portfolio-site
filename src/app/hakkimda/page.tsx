/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb, { getBreadcrumbSchema } from "@/components/Breadcrumb";

export const metadata: Metadata = {
    title: "Hakkımda – Bahattin Yaylagül",
    description: "12+ yıllık deneyimle sunulan SEO ve GEO danışmanlığı. Ajans ve kurumsal projelerdeki başarı hikayeleri, stratejik yaklaşım ve yetkinlikler hakkında bilgi alın.",
    alternates: {
        canonical: "/hakkimda",
    },
};

export default function HakkimdaPage() {
    const breadcrumbItems = [
        { label: "Hakkımda", href: "/hakkimda" }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": "https://bahattinyaylagul.com/#person",
                "name": "Bahattin Yaylagül",
                "url": "https://bahattinyaylagul.com/hakkimda",
                "image": "https://bahattinyaylagul.com/images/bahattin-yaylagul.jpg",
                "jobTitle": "SEO Consultant",
                "description": "SEO, Generative Engine Optimization (GEO), teknik SEO ve AI tabanlı arama sistemleri üzerine uzman danışman",
                "sameAs": [
                    "https://www.linkedin.com/in/bahattin-yaylagul/",
                    "https://medium.com/@bahattinyaylagl"
                ],
                "worksFor": {
                    "@type": "Organization",
                    "name": "Bağımsız SEO & GEO Danışmanı"
                },
                "breadcrumb": { "@id": "https://bahattinyaylagul.com/hakkimda#breadcrumb" }
            },
            getBreadcrumbSchema(breadcrumbItems)
        ]
    };

    return (
        <main className="min-h-screen bg-background text-foreground font-sans selection:bg-blue-100 selection:text-blue-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <Navigation />
            </header>

            <article className="pb-8">
                {/* ── HERO ── */}
                <header className="relative overflow-hidden bg-[#0a0a0a] py-20 pt-28 mb-12">
                    {/* Subtle glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
                        {/* Breadcrumb inside Hero header, logo-aligned */}
                        <Breadcrumb items={breadcrumbItems} />

                        {/* Upper Badge */}
                        <div className="text-left mt-8 mb-6">
                            <span className="inline-flex items-center gap-2 text-blue-400 font-mono font-bold tracking-widest text-xs uppercase bg-blue-400/10 px-4 py-1.5 rounded-full border border-blue-400/15">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                                Bahattin Yaylagül
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
                                Hakkımda
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/90 max-w-2xl text-left leading-relaxed font-medium">
                            12 yılı aşkın süredir dijital dünyada markaların görünürlüğünü, arama motoru performansını ve yapay zeka entegrasyonlarını kurguluyorum.
                        </p>
                    </div>
                </header>

                {/* About Content Component */}
                <div className="bg-white max-w-[1400px] mx-auto px-6 md:px-8 pb-12 mt-12">
                    <About />
                </div>
            </article>

            <Footer />
        </main>
    );
}
