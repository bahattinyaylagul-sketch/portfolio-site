/* eslint-disable @typescript-eslint/no-unused-vars */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Breadcrumb, { getBreadcrumbSchema } from "@/components/Breadcrumb";

export const metadata: Metadata = {
    title: "İçgörüler – Bahattin Yaylagül",
    description: "SEO, GEO ve dijital pazarlama dünyasından en güncel stratejiler, teknik analizler ve sektörel notlar. Veri odaklı makalelerle dijital vizyonunuzu geliştirin.",
    alternates: {
        canonical: "/icgoruler",
    },
};

const posts = [
    {
        slug: "llms-txt-nedir",
        title: "llms.txt Nedir? Tanım, Format, Etkinlik Analizi ve Uygulama Rehberi",
        excerpt: "llms.txt nedir, nasıl oluşturulur ve gerçekten işe yarıyor mu? 300.000 domain analizi, robots.txt farkı, format rehberi ve maliyet-fayda değerlendirmesi.",
        date: "4 Temmuz 2026",
        category: "GEO / AI Search"
    },
    {
        slug: "geo-rehberi",
        title: "Generative Engine Optimization (GEO): Kapsamlı Rehber",
        excerpt: "Klasik SEO'dan yapay zeka çağına geçiş. LLM modellerinde kaynak olarak gösterilmek ve otorite kazanmak için uygulanabilir stratejiler.",
        date: "13 Şubat 2026",
        category: "GEO / AI Search"
    },
    {
        slug: "reddit-forum-mention-etkisi",
        title: "Reddit ve Forumlardaki Mention'lar GEO Başarısını Nasıl Etkiler?",
        excerpt: "Reddit ve forumlardaki mention’lar (bahsedilmeler), GEO başarısı için kritik bir 'güven doğrulama' mekanizması olarak çalışır.",
        date: "31 Ocak 2026",
        category: "GEO / AI Search"
    },
    {
        slug: "ai-marka-mention-etkisi",
        title: "Marka İsminin 'Mention' Olarak Geçmesi AI Hafızasını Nasıl Etkiler?",
        excerpt: "Link olmadan, sadece metin içinde 'mention' olarak geçmek, AI algoritmalarının hafızasını ve karar mekanizmasını doğrudan etkiler. İşte 4 kritik etki.",
        date: "31 Ocak 2026",
        category: "GEO / AI Search"
    }
];

export default function InsightsPage() {
    const breadcrumbItems = [
        { label: "İçgörüler", href: "/icgoruler" }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": "https://bahattinyaylagul.com/icgoruler#webpage",
                "url": "https://bahattinyaylagul.com/icgoruler",
                "name": "İçgörüler – Bahattin Yaylagül",
                "description": "SEO, GEO ve dijital pazarlama dünyasından en güncel stratejiler, teknik analizler ve sektörel notlar.",
                "breadcrumb": { "@id": "https://bahattinyaylagul.com/icgoruler#breadcrumb" }
            },
            getBreadcrumbSchema(breadcrumbItems)
        ]
    };

    return (
        <main className="min-h-screen bg-background text-foreground font-sans">
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
                                Blog & Analizler
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
                                İçgörüler
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/90 max-w-2xl text-left leading-relaxed font-medium">
                            Arama motorları, yapay zeka ve dijital büyüme üzerine stratejik düşünceler ve derinlemesine veri analizleri.
                        </p>
                    </div>
                </header>

                <section className="py-12 px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid gap-12">
                            {posts.length > 0 ? (
                                posts.map((post) => (
                                    <Link
                                        key={post.slug}
                                        href={`/icgoruler/${post.slug}`}
                                        className="group block border-b border-gray-100 pb-12 hover:border-gray-300 transition-colors"
                                    >
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                            <span className="font-medium text-blue-600 uppercase tracking-wider">{post.category}</span>
                                            <span>•</span>
                                            <span>{post.date}</span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            {post.excerpt}
                                        </p>
                                        <span className="text-sm font-semibold text-foreground underline decoration-gray-300 underline-offset-4 group-hover:decoration-blue-600 transition-all">
                                            Devamını Oku
                                        </span>
                                    </Link>
                                ))
                            ) : (
                                <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100 border-dashed">
                                    <p className="text-gray-500 italic">Henüz yayınlanmış bir içerik bulunmuyor. İlk yazı çok yakında!</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </article>

            <Footer />
        </main>
    );
}
