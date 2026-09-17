"use client";

import { useState } from "react";

const phases = [
    {
        id: 1,
        title: "1. Ay",
        summary: "Teknik altyapı ve entity temeli",
        items: [
            "Entity denetimi ve çelişki giderme",
            "Organization / Person schema kurulumu",
            "Teknik erişilebilirlik optimizasyonu",
            "Mevcut yapısal veri değerlendirmesi"
        ]
    },
    {
        id: 2,
        title: "2. Ay",
        summary: "İçerik biçimi ve yanıtlanabilirlik",
        items: [
            "Soru-cevap odaklı içerik revizyonları",
            "Bilgi kazancı (information gain) analizi",
            "Marka mentions ve duygu analizi",
            "İçerik parçalama (chunking) iyileştirmesi"
        ]
    },
    {
        id: 3,
        title: "3. Ay",
        summary: "Atıf inşası ve görünürlük takibi",
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
        <section id="geo-zaman-cizelgesi" className="max-w-4xl mx-auto px-4 md:px-6 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">90 Günde Ne Yapıyoruz?</h2>
            <p className="text-sm text-gray-500 mb-8">Üç aylık çalışma planının özeti.</p>

            {/* All phase content rendered in HTML for crawlers */}
            <noscript>
                {phases.map((phase) => (
                    <div key={phase.id} className="mb-6 border border-gray-200 p-6 bg-white">
                        <h3 className="font-bold text-gray-900">{phase.title}: {phase.summary}</h3>
                        <ul className="mt-3 space-y-1 text-sm text-gray-600">
                            {phase.items.map((item, idx) => (
                                <li key={idx}>– {item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </noscript>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Navigation */}
                <div className="md:w-1/3 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                    {phases.map((phase) => (
                        <button
                            key={phase.id}
                            onClick={() => setActivePhase(phase.id)}
                            className={`shrink-0 md:w-full text-left px-4 py-3 border text-sm transition-colors ${
                                activePhase === phase.id
                                    ? "bg-gray-900 border-gray-900 text-white font-bold"
                                    : "bg-white border-gray-200 text-gray-600 hover:border-gray-400"
                            }`}
                        >
                            <span className="font-bold">{phase.title}</span>
                            <span className="hidden md:inline text-xs ml-2 opacity-70">— {phase.summary}</span>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="md:w-2/3">
                    {phases.map((phase) => (
                        <div key={phase.id} className={activePhase === phase.id ? "block" : "hidden"}>
                            <div className="border border-gray-200 bg-white p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{phase.title}: {phase.summary}</h3>
                                <ul className="mt-4 space-y-3">
                                    {phase.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                            <span className="text-gray-400 mt-0.5">–</span>
                                            {item}
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
