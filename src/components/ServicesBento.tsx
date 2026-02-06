"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const items = [
    {
        title: "SEO 2.0",
        desc: "Geleneksel sıralama faktörlerinin ötesinde, kullanıcı deneyimi ve semantik otorite.",
        link: "/seo",
        col: "md:col-span-2",
        delay: 0.1,
    },
    {
        title: "GEO",
        desc: "ChatGPT, Gemini, Perplexity ve SearchGPT gibi yeni nesil motorlarda markanızın referans gösterilmesi.",
        link: "/geo",
        col: "md:col-span-1",
        delay: 0.2,
    },
    {
        title: "AI Strateji",
        desc: "Yapay Zeka Yanıt Optimizasyonu. LLM ve RAG sistemleri için içerik mimarisi kurgusu.",
        link: "/seo", // Şimdilik SEO'ya yönlendirdim, ileride ayrı sayfa olabilir
        col: "md:col-span-1",
        delay: 0.3,
    },
    {
        title: "Veri Analitiği",
        desc: "Görünmez verileri anlamlı içgörülere dönüştürme.",
        link: "/hakkimda",
        col: "md:col-span-2",
        delay: 0.4,
    },
];

export default function ServicesBento() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-[10px] md:text-xs font-medium text-gray-400 mb-8 uppercase tracking-[0.2em] text-center"
                >
                    [ Stratejik Yetkinlik Mimarisi ]
                </motion.p>

                <div className="grid md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <Link href={item.link} key={index} className={`${item.col} block h-full`}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: item.delay, duration: 0.5 }}
                                className="h-full p-8 glass-card rounded-2xl group cursor-pointer relative overflow-hidden hover:border-indigo-100/50 transition-colors duration-300"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg className="w-5 h-5 text-gray-800 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-sans font-bold mb-3 text-foreground group-hover:text-black transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed font-sans font-light">
                                    {item.desc}
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
