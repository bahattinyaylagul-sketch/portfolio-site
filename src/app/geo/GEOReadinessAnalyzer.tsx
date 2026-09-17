"use client";

import { useState } from "react";

export default function GEOReadinessAnalyzer() {
    const [step, setStep] = useState(1);
    const [url, setUrl] = useState("");
    const [q1, setQ1] = useState<boolean | null>(null);
    const [q2, setQ2] = useState<boolean | null>(null);
    const [q3, setQ3] = useState<boolean | null>(null);
    const [q4, setQ4] = useState<boolean | null>(null);
    const [isScanning, setIsScanning] = useState(false);
    const [results, setResults] = useState<any>(null);

    const handleAnalyze = async () => {
        if (!url || q1 === null || q2 === null || q3 === null || q4 === null) {
            alert("Lütfen URL girin ve tüm soruları yanıtlayın.");
            return;
        }
        setIsScanning(true);
        setStep(2);

        let oppScore = 0;
        if (q1) oppScore += 30;
        if (q2) oppScore += 30;
        if (q3) oppScore += 20;
        if (q4) oppScore += 20;

        try {
            const res = await fetch('/api/geo-scan', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url })
            });
            const data = await res.json();
            setTimeout(() => {
                setResults({ opportunity: oppScore, readiness: data });
                setIsScanning(false);
                setStep(3);
            }, 2000);
        } catch {
            alert("Tarama sırasında bir hata oluştu.");
            setIsScanning(false);
            setStep(1);
        }
    };

    return (
        <section id="geo-analiz" className="max-w-6xl mx-auto px-4 md:px-6 scroll-mt-32">
            {/* Static HTML */}
            <div className="mb-6">
                <span className="inline-block w-8 h-0.5 bg-violet-500 mb-4"></span>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Markanız GEO İçin Hazır mı?</h2>
                <p className="text-sm text-gray-600 max-w-2xl">
                    İki ayrı değerlendirme: <strong className="text-gray-900">GEO Opportunity</strong> (bu işletme için GEO ne kadar anlamlı?) ve <strong className="text-gray-900">Website Readiness</strong> (site teknik olarak ne kadar hazır?). Skorlar birbirinden bağımsızdır.
                </p>
                <p className="text-xs text-gray-400 mt-2">
                    Bu skorlar bir Google veya AI sıralama faktörü değildir. Danışmanlık öncesi bir hazırlık göstergesidir.
                </p>
            </div>

            {step === 1 && (
                <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
                    <div className="mb-6">
                        <label className="block text-sm font-bold text-gray-900 mb-2">Web Siteniz</label>
                        <input 
                            type="url" 
                            placeholder="https://ornek.com"
                            className="w-full px-4 py-3 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-violet-300 focus:ring-4 focus:ring-violet-500/10 text-sm transition-all"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    
                    <div className="space-y-3 pt-6 border-t border-gray-50">
                        <p className="font-bold text-gray-900 text-sm mb-4">Fırsat Soruları (GEO Opportunity):</p>
                        <QuestionRow label="Müşterileriniz satın almadan önce araştırma (kıyaslama, inceleme) yapıyor mu?" val={q1} setVal={setQ1} />
                        <QuestionRow label="Sektörünüzde uzman görüşü veya otorite kritik bir güven faktörü mü?" val={q2} setVal={setQ2} />
                        <QuestionRow label="Hedef kitleniz 'nedir, nasıl yapılır' gibi soru tabanlı aramalar kullanır mı?" val={q3} setVal={setQ3} />
                        <QuestionRow label="Rakiplerinizle aranızdaki farklar teknik bir inceleme gerektirir mi?" val={q4} setVal={setQ4} />
                    </div>

                    <button 
                        onClick={handleAnalyze}
                        className="w-full mt-8 bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 rounded-xl text-sm shadow-lg shadow-violet-600/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                    >
                        Ücretsiz GEO Ön Analizi Al
                    </button>
                </div>
            )}

            {step === 2 && (
                <div className="bg-white border border-gray-200 rounded-xl p-6 py-16 text-center shadow-sm">
                    <div className="inline-block w-12 h-12 border-2 border-gray-200 border-t-violet-600 rounded-full animate-spin mb-4"></div>
                    <p className="text-sm font-bold text-gray-900">Siteniz taranıyor...</p>
                    <p className="text-xs text-gray-500 mt-1">HTTP durumu, Schema, canonical ve içerik yapısı kontrol ediliyor.</p>
                </div>
            )}

            {step === 3 && results && (
                <div className="space-y-6">
                    {/* Two score cards with ring visualization */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white border border-violet-200 rounded-xl p-6 shadow-sm">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-xs font-bold text-violet-600 uppercase tracking-wider mb-1">GEO Opportunity</p>
                                    <p className="text-xs text-gray-500 mb-3">Bu işletme için GEO ne kadar anlamlı?</p>
                                </div>
                                <ScoreRing score={results.opportunity} color="violet" />
                            </div>
                            <p className="text-sm text-gray-600 mt-2">
                                {results.opportunity >= 70
                                    ? "Sektörünüz ve müşteri davranışlarınız GEO çalışması için güçlü bir potansiyele işaret ediyor."
                                    : results.opportunity >= 40
                                    ? "Pazarınızda kısmi bir fırsat mevcut. Detaylı analiz faydalı olabilir."
                                    : "Mevcut yanıtlarınıza göre GEO önceliği düşük görünüyor; ancak birlikte değerlendirebiliriz."}
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Website Readiness</p>
                                    <p className="text-xs text-gray-500 mb-3">Site teknik olarak ne kadar hazır?</p>
                                </div>
                                <ScoreRing score={results.readiness?.total || 0} color="gray" />
                            </div>
                            {results.readiness?.error ? (
                                <p className="text-sm text-red-600 mt-2">{results.readiness.error}</p>
                            ) : (
                                <p className="text-sm text-gray-600 mt-2">
                                    {(results.readiness?.total || 0) >= 70
                                        ? "Teknik altyapınız iyi durumda. İçerik ve atıf çalışmalarına odaklanılabilir."
                                        : "Bazı teknik iyileştirmeler gerekiyor. Detaylar aşağıda."}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Four metric cards */}
                    {!results.readiness?.error && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <MetricCard label="Teknik Erişilebilirlik" score={results.readiness.accessibility} max={25} />
                            <MetricCard label="Entity Netliği" score={results.readiness.entityClarity} max={20} />
                            <MetricCard label="İçerik & Yanıtlanabilirlik" score={results.readiness.contentAnswerability} max={30} />
                            <MetricCard label="Güven & Kanıt" score={results.readiness.trustEvidence} max={25} />
                        </div>
                    )}

                    <p className="text-xs text-gray-400 text-center">Bu değerler basit site taramalarına dayalı tahmini göstergelerdir.</p>

                    <div className="text-center">
                        <button onClick={() => { setStep(1); setResults(null); }} className="text-sm text-violet-600 hover:text-violet-800 font-medium">
                            ← Yeni analiz yap
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

function QuestionRow({ label, val, setVal }: { label: string, val: boolean | null, setVal: (v: boolean) => void }) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-2.5 border-b border-gray-50">
            <span className="text-sm text-gray-700 flex-1">{label}</span>
            <div className="flex items-center gap-2 shrink-0">
                <button 
                    onClick={() => setVal(true)} 
                    className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors ${val === true ? 'bg-violet-600 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                >
                    Evet
                </button>
                <button 
                    onClick={() => setVal(false)} 
                    className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors ${val === false ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                >
                    Hayır
                </button>
            </div>
        </div>
    );
}

function ScoreRing({ score, color }: { score: number, color: "violet" | "gray" }) {
    const radius = 28;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;
    const strokeColor = color === "violet" ? "#7c3aed" : "#374151";
    const bgColor = color === "violet" ? "#ede9fe" : "#f3f4f6";

    return (
        <div className="relative w-16 h-16 shrink-0">
            <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r={radius} fill="none" stroke={bgColor} strokeWidth="5" />
                <circle cx="32" cy="32" r={radius} fill="none" stroke={strokeColor} strokeWidth="5"
                    strokeDasharray={circumference} strokeDashoffset={offset}
                    strokeLinecap="round" className="transition-all duration-1000" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-sm font-black text-gray-900">{score}</span>
        </div>
    );
}

function MetricCard({ label, score, max }: { label: string, score: number, max: number }) {
    const percentage = Math.round((score / max) * 100) || 0;
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-black text-gray-900 mb-0.5">{score}<span className="text-sm font-bold text-gray-300">/{max}</span></div>
            <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden mb-2">
                <div 
                    className={`h-full rounded-full transition-all duration-700 ${percentage > 70 ? 'bg-violet-500' : percentage > 30 ? 'bg-amber-400' : 'bg-gray-300'}`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
            <p className="text-[11px] text-gray-500 font-medium leading-tight">{label}</p>
        </div>
    );
}
