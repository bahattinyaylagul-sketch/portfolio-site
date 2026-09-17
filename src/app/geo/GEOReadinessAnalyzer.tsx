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
        <section id="geo-analiz" className="max-w-4xl mx-auto px-4 md:px-6 scroll-mt-32">
            {/* Static HTML content visible to crawlers */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Markanız GEO İçin Hazır mı?</h2>
            <p className="text-sm text-gray-600 mb-1">
                İki ayrı değerlendirme yapıyoruz: <strong>GEO Opportunity</strong> (bu işletme için GEO ne kadar anlamlı?) ve <strong>Website Readiness</strong> (site teknik olarak ne kadar hazır?). Skorlar birbirinden bağımsızdır.
            </p>
            <p className="text-xs text-gray-400 mb-8">
                Bu skorlar bir Google veya AI sıralama faktörü değildir. Danışmanlık öncesi bir hazırlık göstergesidir.
            </p>

            {step === 1 && (
                <div className="border border-gray-200 bg-white p-6">
                    <div className="mb-6">
                        <label className="block text-sm font-bold text-gray-900 mb-2">Web Siteniz</label>
                        <input 
                            type="url" 
                            placeholder="https://ornek.com"
                            className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    
                    <div className="space-y-3 pt-4 border-t border-gray-100">
                        <p className="font-bold text-gray-900 text-sm mb-2">Fırsat Soruları (GEO Opportunity):</p>
                        <QuestionRow label="Müşterileriniz satın almadan önce araştırma (kıyaslama, inceleme) yapıyor mu?" val={q1} setVal={setQ1} />
                        <QuestionRow label="Sektörünüzde uzman görüşü veya otorite kritik bir güven faktörü mü?" val={q2} setVal={setQ2} />
                        <QuestionRow label="Hedef kitleniz 'nedir, nasıl yapılır' gibi soru tabanlı aramalar kullanır mı?" val={q3} setVal={setQ3} />
                        <QuestionRow label="Rakiplerinizle aranızdaki farklar teknik bir inceleme gerektirir mi?" val={q4} setVal={setQ4} />
                    </div>

                    <button 
                        onClick={handleAnalyze}
                        className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 text-sm transition-colors"
                    >
                        Analizi Başlat
                    </button>
                </div>
            )}

            {step === 2 && (
                <div className="border border-gray-200 bg-white p-6 py-16 text-center">
                    <div className="inline-block w-10 h-10 border-2 border-gray-200 border-t-gray-900 rounded-full animate-spin mb-4"></div>
                    <p className="text-sm font-bold text-gray-900">Siteniz taranıyor...</p>
                    <p className="text-xs text-gray-500 mt-1">HTTP durumu, Schema, canonical ve içerik yapısı kontrol ediliyor.</p>
                </div>
            )}

            {step === 3 && results && (
                <div className="space-y-6">
                    {/* Two separate score cards */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="border border-gray-200 bg-white p-6">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">GEO Opportunity</p>
                            <p className="text-xs text-gray-400 mb-3">Bu işletme için GEO ne kadar anlamlı?</p>
                            <div className="flex items-baseline gap-1 mb-3">
                                <span className="text-4xl font-bold text-gray-900">{results.opportunity}</span>
                                <span className="text-base text-gray-400">/100</span>
                            </div>
                            <p className="text-sm text-gray-600">
                                {results.opportunity >= 70
                                    ? "Sektörünüz ve müşteri davranışlarınız GEO çalışması için güçlü bir potansiyele işaret ediyor."
                                    : results.opportunity >= 40
                                    ? "Pazarınızda kısmi bir fırsat mevcut. Detaylı analiz faydalı olabilir."
                                    : "Mevcut yanıtlarınıza göre GEO önceliği düşük görünüyor; ancak birlikte değerlendirebiliriz."}
                            </p>
                        </div>

                        <div className="border border-gray-200 bg-white p-6">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Website Readiness</p>
                            <p className="text-xs text-gray-400 mb-3">Site teknik olarak ne kadar hazır?</p>
                            <div className="flex items-baseline gap-1 mb-3">
                                <span className="text-4xl font-bold text-gray-900">{results.readiness?.total || 0}</span>
                                <span className="text-base text-gray-400">/100</span>
                            </div>
                            {results.readiness?.error ? (
                                <p className="text-sm text-red-600">{results.readiness.error}</p>
                            ) : (
                                <p className="text-sm text-gray-600">
                                    {(results.readiness?.total || 0) >= 70
                                        ? "Teknik altyapınız iyi durumda. İçerik ve atıf çalışmalarına odaklanılabilir."
                                        : "Bazı teknik iyileştirmeler gerekiyor. Detaylar aşağıda."}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Readiness breakdown */}
                    {!results.readiness?.error && (
                        <div className="border border-gray-200 bg-white p-6">
                            <h4 className="text-sm font-bold text-gray-900 mb-4">Site Hazırlık Detayları</h4>
                            <div className="space-y-3">
                                <ScoreBar label="Teknik Erişilebilirlik" score={results.readiness.accessibility} max={25} />
                                <ScoreBar label="Entity Netliği" score={results.readiness.entityClarity} max={20} />
                                <ScoreBar label="İçerik & Yanıtlanabilirlik" score={results.readiness.contentAnswerability} max={30} />
                                <ScoreBar label="Güven & Kanıt" score={results.readiness.trustEvidence} max={25} />
                            </div>
                            <p className="text-xs text-gray-400 mt-4">Bu değerler basit site taramalarına dayalı tahmini göstergelerdir.</p>
                        </div>
                    )}

                    <div className="text-center">
                        <button onClick={() => { setStep(1); setResults(null); }} className="text-sm text-gray-500 hover:text-gray-900 underline">
                            Yeni analiz yap
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

function QuestionRow({ label, val, setVal }: { label: string, val: boolean | null, setVal: (v: boolean) => void }) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-2 border-b border-gray-50">
            <span className="text-sm text-gray-700 flex-1">{label}</span>
            <div className="flex items-center gap-2 shrink-0">
                <button 
                    onClick={() => setVal(true)} 
                    className={`px-3 py-1 text-xs font-bold border transition-colors ${val === true ? 'bg-gray-900 border-gray-900 text-white' : 'bg-white border-gray-200 text-gray-500 hover:border-gray-400'}`}
                >
                    Evet
                </button>
                <button 
                    onClick={() => setVal(false)} 
                    className={`px-3 py-1 text-xs font-bold border transition-colors ${val === false ? 'bg-gray-900 border-gray-900 text-white' : 'bg-white border-gray-200 text-gray-500 hover:border-gray-400'}`}
                >
                    Hayır
                </button>
            </div>
        </div>
    );
}

function ScoreBar({ label, score, max }: { label: string, score: number, max: number }) {
    const percentage = Math.round((score / max) * 100) || 0;
    return (
        <div>
            <div className="flex justify-between text-xs text-gray-700 mb-1">
                <span>{label}</span>
                <span className="font-bold">{score}/{max}</span>
            </div>
            <div className="h-1.5 w-full bg-gray-100 overflow-hidden">
                <div 
                    className={`h-full transition-all duration-700 ${percentage > 70 ? 'bg-gray-900' : percentage > 30 ? 'bg-gray-500' : 'bg-gray-300'}`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}
