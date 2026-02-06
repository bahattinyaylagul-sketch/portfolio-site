"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
    {
        id: 1,
        title: "E-Ticaret SEO Dönüşümü",
        category: "SEO",
        metrics: [
            { label: "Organik Trafik", value: "+340%", period: "12 ay" },
            { label: "Anahtar Kelime", value: "2.4K", period: "Top 10" },
        ],
        description:
            "Kapsamlı teknik SEO denetimi ve içerik stratejisi ile organik trafiği %340 artırdık.",
        tags: ["E-Ticaret", "Teknik SEO", "İçerik"],
    },
    {
        id: 2,
        title: "AI Arama Entegrasyonu",
        category: "GEO",
        metrics: [
            { label: "AI Referansları", value: "+580%", period: "6 ay" },
            { label: "Featured Snippets", value: "47", period: "Aktif" },
        ],
        description:
            "ChatGPT ve Bard gibi AI sistemlerinden gelen referans trafiğini optimize ettik.",
        tags: ["AI Optimization", "Schema", "Q&A"],
    },
    {
        id: 3,
        title: "İçerik Mimarisi Yenileme",
        category: "Semantic",
        metrics: [
            { label: "Sayfa Görüntüleme", value: "+210%", period: "8 ay" },
            { label: "Bounce Rate", value: "-45%", period: "İyileşme" },
        ],
        description:
            "Topic clustering ve content chunking ile içerik mimarisini baştan tasarladık.",
        tags: ["Content Hub", "Clustering", "UX"],
    },
    {
        id: 4,
        title: "SaaS Platform Optimizasyonu",
        category: "SEO",
        metrics: [
            { label: "Demo Talebi", value: "+180%", period: "6 ay" },
            { label: "MRR Etkisi", value: "+$45K", period: "Direkt" },
        ],
        description:
            "Dönüşüm odaklı SEO stratejisi ile demo taleplerini %180 artırdık.",
        tags: ["B2B", "SaaS", "Lead Gen"],
    },
    {
        id: 5,
        title: "Haber Portalı GEO",
        category: "GEO",
        metrics: [
            { label: "AI Trafik Payı", value: "23%", period: "Toplam" },
            { label: "Yeni Kanallar", value: "+5", period: "AI Platformları" },
        ],
        description:
            "Haber içeriklerini AI asistanları için optimize ederek yeni bir trafik kaynağı yarattık.",
        tags: ["News", "AI-First", "Real-time"],
    },
    {
        id: 6,
        title: "Knowledge Graph Entegrasyonu",
        category: "Semantic",
        metrics: [
            { label: "Entity Recognition", value: "94%", period: "Doğruluk" },
            { label: "Rich Results", value: "+320%", period: "Artış" },
        ],
        description:
            "Yapılandırılmış veri ve entity markup ile arama sonuçlarında zengin görünüm elde ettik.",
        tags: ["Schema.org", "Knowledge Panel", "Entities"],
    },
];

const categories = ["Tümü", "SEO", "GEO", "Semantic"];

export default function Lab() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeFilter, setActiveFilter] = useState("Tümü");

    const filteredProjects =
        activeFilter === "Tümü"
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <section
            id="lab"
            className="relative py-32 overflow-hidden"
            aria-labelledby="lab-heading"
        >
            {/* Spotlight Effect */}
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-radial from-white/60 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-white/40 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-medium tracking-ultrawide text-gray-medium uppercase mb-4">
                        Projeler
                    </span>
                    <h2
                        id="lab-heading"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
                    >
                        The Lab
                    </h2>
                    <p className="text-lg text-gray-dark max-w-2xl mx-auto leading-relaxed">
                        Vaka analizleri ve başarı hikayeleri. Her proje, anlamlı bloklar halinde yapılandırılmış sonuçlar.
                    </p>
                </motion.header>

                {/* Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-center gap-3 mb-16 flex-wrap"
                    role="tablist"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            role="tab"
                            aria-selected={activeFilter === cat}
                            className={`px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${activeFilter === cat
                                    ? "bg-foreground text-white shadow-glass"
                                    : "bg-white/50 text-gray-dark hover:bg-white hover:shadow-glass"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid - Modular Block Layout */}
                <motion.div
                    ref={ref}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    role="tabpanel"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            layout
                            className="group"
                            aria-labelledby={`project-${project.id}-title`}
                        >
                            {/* Floating Animation Wrapper */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                    duration: 4 + (index % 3),
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.3,
                                }}
                            >
                                <div className="relative glass p-6 lg:p-8 shadow-glass hover:shadow-glass-strong transition-all duration-500 h-full">
                                    {/* Category Badge */}
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide bg-foreground/10 text-foreground rounded-full">
                                            {project.category}
                                        </span>
                                        <span className="text-gray-medium text-sm">#{project.id}</span>
                                    </div>

                                    {/* Title */}
                                    <h3
                                        id={`project-${project.id}-title`}
                                        className="text-xl font-bold tracking-tight text-foreground mb-4 group-hover:text-gray-dark transition-colors"
                                    >
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-dark text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    {/* Metrics Grid */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        {project.metrics.map((metric) => (
                                            <div
                                                key={metric.label}
                                                className="bg-white/50 rounded-xl p-4"
                                            >
                                                <span className="text-2xl font-bold text-foreground block">
                                                    {metric.value}
                                                </span>
                                                <span className="text-xs text-gray-medium block">
                                                    {metric.label}
                                                </span>
                                                <span className="text-xs text-gray-dark">{metric.period}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs px-2 py-1 bg-gray-light/50 text-gray-dark rounded-md"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Hover Indicator */}
                                    <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <svg
                                            className="w-5 h-5 text-foreground"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
