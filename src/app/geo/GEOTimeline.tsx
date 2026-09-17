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
        <section id="geo-zaman-cizelgesi" className="max-w-5xl mx-auto px-4 md:px-6 scroll-mt-32">
            <div className="mb-8">
                <span className="inline-block w-8 h-0.5 bg-violet-500 mb-4"></span>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">90 Günde Ne Yapıyoruz?</h2>
                <p className="text-sm text-gray-500">Üç aylık çalışma planının özeti.</p>
            </div>

            {/* Desktop: Visual Timeline */}
            <div className="hidden md:block">
                {/* Timeline bar */}
                <div className="relative mb-10">
                    <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200"></div>
                    <div className="absolute top-4 left-0 h-0.5 bg-violet-500 transition-all duration-500" style={{ width: `${((activePhase - 1) / 2) * 100}%` }}></div>
                    <div className="flex justify-between relative">
                        {phases.map((phase) => (
                            <button
                                key={phase.id}
                                onClick={() => setActivePhase(phase.id)}
                                className="flex flex-col items-center group"
                            >
                                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all z-10 ${
                                    phase.id <= activePhase 
                                        ? 'bg-violet-600 border-violet-600 text-white' 
                                        : 'bg-white border-gray-300 text-gray-400 group-hover:border-violet-300'
                                }`}>
                                    {phase.id}
                                </div>
                                <span className={`mt-3 text-xs font-bold uppercase tracking-wider transition-colors ${
                                    phase.id === activePhase ? 'text-violet-600' : 'text-gray-400'
                                }`}>
                                    {phase.month}
                                </span>
                                <span className={`text-xs mt-1 max-w-[160px] text-center transition-colors ${
                                    phase.id === activePhase ? 'text-gray-700' : 'text-gray-400'
                                }`}>
                                    {phase.title}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Active phase detail */}
                {phases.map((phase) => (
                    <div key={phase.id} className={phase.id === activePhase ? "block" : "hidden"}>
                        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-2.5 py-1 bg-violet-50 text-violet-700 text-[10px] font-bold uppercase tracking-wider rounded-md">{phase.month}</span>
                                <h3 className="text-lg font-bold text-gray-900">{phase.title}</h3>
                            </div>
                            <ul className="grid grid-cols-2 gap-3">
                                {phase.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-600 p-3 bg-gray-50 rounded-lg">
                                        <svg className="w-4 h-4 text-violet-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile: Compact accordion */}
            <div className="md:hidden space-y-3">
                {phases.map((phase) => (
                    <div key={phase.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                        <button
                            onClick={() => setActivePhase(phase.id === activePhase ? 0 : phase.id)}
                            className="w-full flex items-center gap-3 p-4 text-left"
                        >
                            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                                phase.id === activePhase ? 'bg-violet-600 text-white' : 'bg-gray-100 text-gray-500'
                            }`}>
                                {phase.id}
                            </div>
                            <div className="flex-1 min-w-0">
                                <span className="text-xs font-bold text-violet-600 uppercase tracking-wider">{phase.month}</span>
                                <p className="text-sm font-bold text-gray-900 truncate">{phase.title}</p>
                            </div>
                            <svg className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${phase.id === activePhase ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {phase.id === activePhase && (
                            <div className="px-4 pb-4 pt-0">
                                <ul className="space-y-2">
                                    {phase.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 p-2.5 bg-gray-50 rounded-lg">
                                            <svg className="w-3.5 h-3.5 text-violet-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
