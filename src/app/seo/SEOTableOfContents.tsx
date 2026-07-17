"use client";

import { useState, useEffect } from "react";

const tableOfContents = [
    { id: "seo-nedir", title: "01. SEO Nedir?" },
    { id: "nasil-calisir", title: "02. Tarama & Dizinleme" },
    { id: "uc-temel-alan", title: "03. On-Page, Off-Page & Teknik" },
    { id: "seo-vs-ppc", title: "04. SEO vs SEM/PPC" },
    { id: "metrikler", title: "05. Metrikler & Araçlar" },
    { id: "yapay-zeka", title: "06. AI & GEO" },
    { id: "site-turleri", title: "07. Site Türüne Göre SEO" },
];

export default function SEOTableOfContents() {
    const [activeSection, setActiveSection] = useState("seo-nedir");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
        );

        tableOfContents.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const handleScroll = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
        }
    };

    return (
        <section aria-labelledby="hero-toc-heading" className="w-full max-w-4xl mx-auto my-10 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm text-left">
            <h2 id="hero-toc-heading" className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                İçindekiler
            </h2>
            <nav aria-labelledby="hero-toc-heading">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {tableOfContents.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <li key={item.id}>
                                <button
                                    onClick={() => handleScroll(item.id)}
                                    className={`w-full text-left py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                                        isActive
                                            ? "bg-white text-gray-900 shadow-lg scale-[1.02]"
                                            : "text-white/70 hover:text-white hover:bg-white/10 border border-white/5"
                                    }`}
                                >
                                    {item.title}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </section>
    );
}
