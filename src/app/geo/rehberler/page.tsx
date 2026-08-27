'use client';

import { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { clusters } from "@/lib/geo-data";




const totalCount = clusters.reduce((sum, c) => sum + c.items.length, 0);

function RehberlerContent() {
    const searchParams = useSearchParams();
    const categoryQuery = searchParams.get("category");
    
    // Check if query exists and matches a valid cluster code
    const initialCategory = categoryQuery && clusters.some(c => c.code === categoryQuery) 
        ? categoryQuery 
        : "tumü";
        
    const [active, setActive] = useState(initialCategory);

    // Update active state if URL changes directly
    useEffect(() => {
        if (categoryQuery && clusters.some(c => c.code === categoryQuery)) {
            setActive(categoryQuery);
        } else {
            setActive("tumü");
        }
    }, [categoryQuery]);

    const filters = [
        { key: "tumü", label: "Tümü", count: totalCount },
        ...clusters.map((c) => ({ key: c.code, label: c.label, count: c.items.length })),
    ];

    const visibleClusters = active === "tumü"
        ? clusters
        : clusters.filter((c) => c.code === active);

    return (
        <>
            {/* Filter bar */}
            <div className="flex flex-wrap gap-2 mb-12">
                {filters.map((f) => (
                    <button
                        key={f.key}
                        onClick={() => setActive(f.key)}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                            active === f.key
                                ? "bg-violet-600 border-violet-600 text-white shadow-md shadow-violet-500/20"
                                : "bg-white border-gray-200 text-gray-600 hover:border-violet-300 hover:text-violet-700"
                        }`}
                    >
                        {f.label}
                        <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
                            active === f.key ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                        }`}>
                            {f.count}
                        </span>
                    </button>
                ))}
            </div>

            {/* Cards */}
            <div className="space-y-14">
                {visibleClusters.map((cluster) => (
                    <div key={cluster.code}>
                        <h2 className="flex items-center gap-3 text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
                            <span className="w-7 h-0.5 bg-violet-400 rounded-full" />
                            {cluster.label}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {cluster.items.map((item, idx) => (
                                <article
                                    key={idx}
                                    className="group bg-white p-7 rounded-2xl border border-gray-200/70 hover:border-violet-400 hover:shadow-lg hover:shadow-violet-500/[0.05] transition-all duration-300 flex flex-col"
                                >
                                    <div className="flex-1 space-y-3 mb-6">
                                        <h3 className="text-base font-bold text-gray-900 group-hover:text-violet-700 transition-colors leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                    <Link
                                        href={item.href}
                                        className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-600 hover:text-violet-700 transition-colors"
                                    >
                                        Rehberi oku
                                        <span className="transition-transform group-hover:translate-x-0.5">→</span>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default function GEORehberlerPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": "https://bahattinyaylagul.com/geo/rehberler#page",
                "name": "GEO Rehberleri",
                "description": "Yapay zeka arama motorlarında kaynak olarak görünmek için derinlemesine GEO rehberleri.",
                "url": "https://bahattinyaylagul.com/geo/rehberler",
                "inLanguage": "tr-TR",
                "breadcrumb": {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://bahattinyaylagul.com" },
                        { "@type": "ListItem", "position": 2, "name": "GEO Danışmanlığı", "item": "https://bahattinyaylagul.com/geo" },
                        { "@type": "ListItem", "position": 3, "name": "GEO Rehberleri", "item": "https://bahattinyaylagul.com/geo/rehberler" },
                    ],
                },
            },
        ],
    };

    return (
        <main className="min-h-screen bg-white font-sans selection:bg-violet-100 selection:text-violet-900">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navigation theme="dark" />

            {/* Hero */}
            <header className="relative overflow-hidden bg-[#0a0a0a] py-20 pt-28">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/40 mb-8 font-medium">
                        <Link href="/" className="hover:text-white/70 transition-colors">Ana Sayfa</Link>
                        <span>/</span>
                        <Link href="/geo" className="hover:text-white/70 transition-colors">GEO Danışmanlığı</Link>
                        <span>/</span>
                        <span className="text-white/80">GEO Rehberleri</span>
                    </nav>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold uppercase tracking-widest mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                        {totalCount} Rehber · 5 Kategori
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-[1.08] tracking-tight">
                        GEO Rehberleri
                    </h1>
                    <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
                        Yapay zeka arama motorları ve dil modellerinde marka bilinirliğini ve atıfları artırmaya yönelik derinlemesine GEO stratejileri.
                    </p>
                </div>
            </header>

            {/* Filtered content */}
            <section className="max-w-6xl mx-auto px-4 md:px-6 py-14">
                <Suspense fallback={<div className="py-20 text-center text-gray-400 text-sm">Yükleniyor…</div>}>
                    <RehberlerContent />
                </Suspense>
            </section>

            <Footer />
        </main>
    );
}
