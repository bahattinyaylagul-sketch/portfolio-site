"use client";

import { useState } from "react";

const phases = [
    {
        id: 1,
        month: "1. Ay",
        title: "Teknik Altyapı ve Entity Temeli",
        items: [
            "Entity denetimi ve çelişki giderme",
            "Organization / Person schema kurulumu",
            "Teknik erişilebilirlik optimizasyonu",
            "Mevcut yapısal veri değerlendirmesi"
        ]
    },
    {
        id: 2,
        month: "2. Ay",
        title: "İçerik Biçimi ve Yanıtlanabilirlik",
        items: [
            "Soru-cevap odaklı içerik revizyonları",
            "Bilgi kazancı (information gain) analizi",
            "Marka mentions ve duygu analizi",
            "İçerik parçalama (chunking) iyileştirmesi"
        ]
    },
    {
        id: 3,
        month: "3. Ay",
        title: "Atıf İnşası ve Görünürlük Takibi",
        items: [
            "Sektörel dijital PR ve co-citation çalışması",
            "Forum ve topluluk mentions yönetimi",
            "ChatGPT, Gemini, Perplexity görünürlük taramaları",
            "Performans ve atıf raporlaması"
        ]
    }
];

export default function GEOTimeline() {
    const [activePhase, setActivePhase] = useState(1);

    return (
        <section id="geo-zaman-cizelgesi" className="max-w-6xl mx-auto px-4 md:px-6 scroll-mt-32">
            <div className="text-center mb-16 relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 font-bold text-xs uppercase tracking-widest mb-4">
                    Zaman Çizelgesi
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                    90 Günlük Yol Haritası
                </h2>
                <div className="w-16 h-1.5 bg-violet-600 mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Navigation (Single DOM, responsive flex direction) */}
                <div className="w-full md:w-1/3 flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-4 md:pb-0 hide-scrollbar">
                    {phases.map((phase) => (
                        <button
                            key={phase.id}
                            onClick={() => setActivePhase(phase.id)}
                            className={`flex items-center md:items-start gap-4 p-4 rounded-2xl border text-left min-w-[240px] md:min-w-0 transition-all ${
                                activePhase === phase.id
                                    ? "bg-violet-600 border-violet-600 shadow-lg shadow-violet-200"
                                    : "bg-white border-gray-100 hover:border-violet-200 hover:bg-violet-50/50"
                            }`}
                        >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shrink-0 transition-colors ${
                                activePhase === phase.id ? "bg-white text-violet-600" : "bg-gray-100 text-gray-500"
                            }`}>
                                {phase.id}
                            </div>
                            <div className="flex-1">
                                <span className={`text-xs font-bold uppercase tracking-wider block mb-1 ${
                                    activePhase === phase.id ? "text-violet-100" : "text-gray-400"
                                }`}>
                                    {phase.month}
                                </span>
                                <span className={`text-sm md:text-base font-bold leading-tight block ${
                                    activePhase === phase.id ? "text-white" : "text-gray-900"
                                }`}>
                                    {phase.title}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Content Area (Single DOM, only active phase is shown) */}
                <div className="w-full md:w-2/3">
                    {phases.map((phase) => (
                        <div key={phase.id} className={activePhase === phase.id ? "block h-full" : "hidden"}>
                            <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] h-full">
                                <div className="flex items-center gap-3 mb-8">
                                    <span className="px-3 py-1 bg-violet-100 text-violet-700 text-xs font-bold uppercase tracking-wider rounded-full">
                                        {phase.month} İçeriği
                                    </span>
                                </div>
                                
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {phase.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl">
                                            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-violet-600">
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-medium text-gray-700 mt-0.5">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
