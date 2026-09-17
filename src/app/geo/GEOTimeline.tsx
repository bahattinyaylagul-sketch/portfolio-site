"use client";

import { useState } from "react";

const phases = [
    {
        id: 1,
        title: "1. Ay: Teknik & Entity Temeli",
        subtitle: "Arama motorlarının sizi net ve çelişkisiz anlaması için altyapı inşası.",
        items: [
            "Entity (Varlık) Denetimi ve Çelişki Giderme",
            "Organization / Person Schema Kurulumu",
            "Knowledge Graph ve Wikidata Hazırlığı",
            "Teknik Erişilebilirlik (Crawl & Index) Optimizasyonu"
        ]
    },
    {
        id: 2,
        title: "2. Ay: Soru Bazlı İçerik (AEO) Kurgusu",
        subtitle: "LLM'lerin en sık başvurduğu bilgi formatlarına (FAQ, chunk, list) adaptasyon.",
        items: [
            "Information Gain (Bilgi Kazancı) Odaklı Revizyonlar",
            "Soru-Cevap (FAQ) ve Passage Optimizasyonu",
            "Marka Mentions ve Duygu (Sentiment) Analizi",
            "Rakiplerden Farklılaşan Veri Setleri Üretimi"
        ]
    },
    {
        id: 3,
        title: "3. Ay: Co-Citation & Sinyal Yayılımı",
        subtitle: "Web genelinde markanızın otoriter ve güvenilir kaynaklarla birlikte anılmasını sağlama.",
        items: [
            "Sektörel Dijital PR ve Atıf (Co-citation) İnşası",
            "Forum, Sözlük ve Topluluk Mentions Yönetimi",
            "ChatGPT, Gemini ve Perplexity Görünürlük Taramaları",
            "Performans ve LLM Atıf Raporlaması"
        ]
    }
];

export default function GEOTimeline() {
    const [activePhase, setActivePhase] = useState(1);

    return (
        <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 my-16 max-w-5xl mx-auto font-sans">
            <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                    Uygulama Süreci
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">90 Günde Ne Yapıyoruz?</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Timeline Navigation */}
                <div className="md:w-1/3 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 hide-scrollbar">
                    {phases.map((phase) => (
                        <button
                            key={phase.id}
                            onClick={() => setActivePhase(phase.id)}
                            className={`shrink-0 md:w-full text-left px-5 py-4 rounded-2xl border transition-all duration-300 font-bold text-sm ${
                                activePhase === phase.id
                                    ? "bg-gray-900 border-gray-900 text-white shadow-md"
                                    : "bg-white border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50"
                            }`}
                        >
                            {phase.title}
                        </button>
                    ))}
                </div>

                {/* Timeline Content */}
                <div className="md:w-2/3">
                    {phases.map((phase) => (
                        <div 
                            key={phase.id}
                            className={`transition-all duration-500 ${
                                activePhase === phase.id ? "block animate-in fade-in slide-in-from-right-4" : "hidden"
                            }`}
                        >
                            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 h-full">
                                <h3 className="text-2xl font-black text-gray-900 mb-2">{phase.title}</h3>
                                <p className="text-gray-500 text-sm mb-6">{phase.subtitle}</p>
                                
                                <ul className="space-y-4">
                                    {phase.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 shadow-sm">
                                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                            </div>
                                            <span className="text-gray-700 font-medium text-sm leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
