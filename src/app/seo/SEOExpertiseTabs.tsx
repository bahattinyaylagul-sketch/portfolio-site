"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
    {
        id: "teknik-seo",
        title: "01. Teknik SEO",
        href: "/teknik-seo",
        subtitle: "Dijital Altyapı Optimizasyonu",
        description: "Google botlarının sitenizi kusursuz, hızlı ve eksiksiz tarayabilmesi için gerekli olan tüm altyapı mühendisliği. Crawl budget yönetimi, Core Web Vitals iyileştirmeleri ve yapısal veri (Schema) mimarisi ile güçlü bir temel atıyoruz.",
        features: ["Tarama Verimliliği (Crawl Budget)", "Sayfa Hızı & LCP Optimizasyonu", "Schema.org Yapısal Veri Kurulumu", "Log Analizi ve Hata Giderme"],
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        )
    },
    {
        id: "on-page-seo",
        title: "02. On-Page SEO",
        href: "/site-ici-seo",
        subtitle: "Site İçi & Niyet Optimizasyonu",
        description: "Arama motorlarının ve kullanıcıların içeriğinizi tam olarak anlaması için sayfa içi elementleri optimize ediyoruz. Hem makine algoritmalarına (Googlebot) hem de insan psikolojisine (Kullanıcı Niyeti) hitap eden stratejiler geliştiriyoruz.",
        features: ["Arama Niyeti (Search Intent) Analizi", "Semantik Hiyerarşi (H1-H6)", "URL & Meta Veri Optimizasyonu", "Görsel SEO Stratejileri"],
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
            </svg>
        )
    },
    {
        id: "icerik-seo",
        title: "03. İçerik Optimizasyonu",
        href: "/icerik-optimizasyonu",
        subtitle: "Semantik & Varlık Odaklı İçerik",
        description: "Standart anahtar kelime doldurmanın ötesine geçiyoruz. Varlık (Entity) tabanlı, bilgi kazançı (Information Gain) yüksek ve NLP standartlarına uygun içerikler ile sitenizi sektörünüzde bir 'Otorite Merkezi'ne dönüştürüyoruz.",
        features: ["Entity Odaklı Kurgu", "Topic Cluster Yapısı", "Yapay Zeka (GEO) Uyumluluğu", "İçerik Geliştirme (Information Gain)"],
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        )
    },
    {
        id: "off-page-seo",
        title: "04. Site Dışı SEO",
        href: "/site-disi-seo",
        subtitle: "Dijital Otorite & E-E-A-T İnşası",
        description: "Sitenize yüksek otoriteli, alaka düzeyi yüksek ve güvenilir dış kaynaklardan (backlink ve mentions) referanslar sağlıyoruz. Markanızı Google gözünde E-E-A-T (Deneyim, Uzmanlık, Otorite, Güvenilirlik) standartlarına ulaştırıyoruz.",
        features: ["Nitelikli Backlink Kazanımı", "Marka Anılmaları (Brand Mentions)", "E-E-A-T Sinyalleri İnşası", "Zararlı Link Analizi (Disavow)"],
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
        )
    },
    {
        id: "seo-performance",
        title: "05. SEO Performansı",
        contentTitle: "SEO Performansı",
        href: "#",
        hideButton: true,
        subtitle: "Ölçümleme ve Veri Analizi",
        description: "Modern SEO'nun başarısı artık yalnızca organik trafik artışıyla değil; sitenizin arama motorları tarafından ne kadar verimli tarandığı, içeriklerin anlamsal olarak ne kadar doğru eşleşteği ve markanızın dijital dünyada ne kadar güvenilir bir otorite olarak kabul edildiği ile ölçülmektedir.",
        features: ["Tarama ve İndeksleme Verimliliği", "Anlamsal Relevance ve Topical Güç", "Otorite ve Güven Sinyalleri", "Dönüşüm Optimizasyonu (CRO)"],
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        )
    }
];



export default function SEOExpertiseTabs() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <section className="py-16 bg-gray-50/50">
            <div className="max-w-6xl mx-auto px-4 md:px-6">

                <div className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-16">
                    {/* Tab List */}
                    <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-4 px-6 py-5 text-left rounded-2xl transition-all duration-300 min-w-[220px] lg:min-w-0 ${activeTab === tab.id
                                    ? "bg-white shadow-md border-2 border-blue-600 text-gray-900"
                                    : "bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                    }`}
                            >
                                <div className={`p-2.5 rounded-xl ${activeTab === tab.id ? "bg-blue-50 text-blue-600" : "bg-white text-gray-400"}`}>
                                    {tab.icon}
                                </div>
                                <div>
                                    <span className={`block font-bold text-lg ${activeTab === tab.id ? "text-gray-900" : ""}`}>{tab.title}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            {tabs.map(
                                (tab) =>
                                    activeTab === tab.id && (
                                        <motion.div
                                            key={tab.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-gray-100"
                                        >
                                            <h4 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">{tab.contentTitle ?? tab.title}</h4>
                                            <p className="text-lg text-blue-600 font-medium mb-8">{tab.subtitle}</p>

                                            <p className="text-lg text-gray-600 leading-relaxed mb-10">
                                                {tab.description}
                                            </p>

                                            <div className="grid sm:grid-cols-2 gap-4 mb-12">
                                                {tab.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-3">
                                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                                                            <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        </div>
                                                        <span className="font-medium text-gray-800">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {!tab.hideButton && (
                                                <div>
                                                    <Link
                                                        href={tab.href}
                                                        className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                                                    >
                                                        {tab.title} Hizmetini İncele
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            )}
                                        </motion.div>
                                    )
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
