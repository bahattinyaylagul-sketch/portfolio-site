"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const expertiseAreas = [
    {
        id: "seo",
        title: "SEO",
        subtitle: "Search Engine Optimization",
        description:
            "Arama motorlarında üst sıralarda yer almak için teknik SEO, içerik optimizasyonu ve bağlantı stratejileri geliştiriyorum.",
        features: [
            "Teknik SEO Denetimi",
            "Anahtar Kelime Araştırması",
            "İçerik Stratejisi",
            "Bağlantı Oluşturma",
            "Performans Optimizasyonu",
        ],
        icon: "🔍",
    },
    {
        id: "geo",
        title: "GEO",
        subtitle: "Generative Engine Optimization",
        description:
            "Yapay zeka destekli arama motorları ve asistanlar için içeriklerinizi optimize ederek yeni nesil aramada görünür olun.",
        features: [
            "AI Arama Optimizasyonu",
            "ChatGPT & Bard Uyumluluğu",
            "Yapılandırılmış Veri",
            "Soru-Cevap Formatları",
            "Entity Markup",
        ],
        icon: "🤖",
    },
    {
        id: "semantic",
        title: "Anlamsal Mimari",
        subtitle: "Semantic Content Architecture",
        description:
            "İçeriklerinizi anlamlı bloklar halinde yapılandırarak hem insanlar hem de makineler için okunabilir hale getiriyorum.",
        features: [
            "Topic Clustering",
            "Content Chunking",
            "Schema Markup",
            "Semantik HTML5",
            "Knowledge Graph",
        ],
        icon: "🧠",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,

        },
    },
};

export default function Expertise() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="expertise"
            className="relative py-32 overflow-hidden"
            aria-labelledby="expertise-heading"
        >
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-radial from-white/50 to-transparent rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block text-sm font-medium tracking-ultrawide text-gray-medium uppercase mb-4">
                        Hizmetler
                    </span>
                    <h2
                        id="expertise-heading"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
                    >
                        Uzmanlık Alanları
                    </h2>
                    <p className="text-lg text-gray-dark max-w-2xl mx-auto leading-relaxed">
                        Dijital görünürlüğünüzü artırmak için üç temel alanda kapsamlı çözümler sunuyorum.
                    </p>
                </motion.header>

                {/* Expertise Cards */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {expertiseAreas.map((area, index) => (
                        <motion.article
                            key={area.id}
                            variants={cardVariants}
                            className="group relative"
                            aria-labelledby={`${area.id}-title`}
                        >
                            {/* Floating Effect Container */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    duration: 5 + index,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.5,
                                }}
                                className="relative"
                            >
                                {/* Glow Effect on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-light rounded-[32px] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 scale-105" />

                                {/* Card Content */}
                                <div className="relative glass p-8 lg:p-10 shadow-glass group-hover:shadow-glass-strong transition-shadow duration-500">
                                    {/* Icon */}
                                    <div className="text-5xl mb-6">{area.icon}</div>

                                    {/* Title */}
                                    <h3
                                        id={`${area.id}-title`}
                                        className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-2"
                                    >
                                        {area.title}
                                    </h3>
                                    <span className="text-sm tracking-wide text-gray-medium block mb-4">
                                        {area.subtitle}
                                    </span>

                                    {/* Description */}
                                    <p className="text-gray-dark leading-relaxed mb-8">
                                        {area.description}
                                    </p>

                                    {/* Features List */}
                                    <ul className="space-y-3" role="list">
                                        {area.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-center gap-3 text-sm text-gray-dark"
                                            >
                                                <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Hover Arrow */}
                                    <div className="mt-8 flex items-center gap-2 text-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span>Detayları İncele</span>
                                        <svg
                                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
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
