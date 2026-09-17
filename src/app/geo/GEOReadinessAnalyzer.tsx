"use client";

import { useState } from "react";

export default function GEOReadinessAnalyzer() {
    const [step, setStep] = useState(1);
    
    // Step 1 Form State
    const [url, setUrl] = useState("");
    const [q1, setQ1] = useState<boolean | null>(null);
    const [q2, setQ2] = useState<boolean | null>(null);
    const [q3, setQ3] = useState<boolean | null>(null);
    const [q4, setQ4] = useState<boolean | null>(null);

    // Analysis State
    const [isScanning, setIsScanning] = useState(false);
    const [results, setResults] = useState<any>(null);

    const handleAnalyze = async () => {
        if (!url || q1 === null || q2 === null || q3 === null || q4 === null) {
            alert("Lütfen URL girin ve tüm soruları yanıtlayın.");
            return;
        }

        setIsScanning(true);
        setStep(2);

        // 1. Calculate Opportunity Score
        let oppScore = 0;
        if (q1) oppScore += 30; // Araştırma
        if (q2) oppScore += 30; // Uzmanlık
        if (q3) oppScore += 20; // Soru tabanlı
        if (q4) oppScore += 20; // Özellik farkı

        // 2. Fetch Website Readiness
        try {
            const res = await fetch('/api/geo-scan', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url })
            });
            const data = await res.json();
            
            // Artificial delay for better UX
            setTimeout(() => {
                setResults({
                    opportunity: oppScore,
                    readiness: data,
                });
                setIsScanning(false);
                setStep(3);
            }, 2500);

        } catch (error) {
            alert("Tarama sırasında bir hata oluştu.");
            setIsScanning(false);
            setStep(1);
        }
    };

    return (
        <section className="bg-white border border-gray-200 rounded-3xl shadow-sm p-8 md:p-10 my-16 max-w-4xl mx-auto font-sans">
            <div className="text-center mb-8">
                <span className="inline-block px-3 py-1 bg-violet-50 text-violet-700 text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                    Ücretsiz Analiz
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Markanız GEO İçin Hazır mı?</h2>
                <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
                    Bu araç, sitenizin teknik uygunluğunu (Website Readiness) ve pazarınızın yapay zeka aramalarındaki potansiyelini (GEO Opportunity) ölçer.
                    <br/><span className="italic text-xs opacity-80 mt-2 block">*Not: Bu skorlar bir Google/AI sıralama faktörü değildir, danışmanlık öncesi bir hazırlık ve fırsat göstergesidir.</span>
                </p>
            </div>

            {step === 1 && (
                <div className="space-y-6 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100">
                    <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Web Siteniz (URL)</label>
                        <input 
                            type="url" 
                            placeholder="https://ornek.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    
                    <div className="space-y-4 pt-4 border-t border-gray-200">
                        <p className="font-bold text-gray-900 text-sm">Fırsat (Opportunity) Soruları:</p>
                        
                        <QuestionRow 
                            label="Müşterileriniz ürün/hizmetinizi almadan önce araştırma (kıyaslama, inceleme) yapıyor mu?" 
                            val={q1} setVal={setQ1} 
                        />
                        <QuestionRow 
                            label="Sektörünüzde (finans, sağlık, B2B vb.) 'uzman görüşü' veya 'otorite' kritik bir güven faktörü mü?" 
                            val={q2} setVal={setQ2} 
                        />
                        <QuestionRow 
                            label="Hedef kitleniz sorunlarına çözüm ararken 'nedir, nasıl yapılır' gibi soru tabanlı aramalar kullanır mı?" 
                            val={q3} setVal={setQ3} 
                        />
                        <QuestionRow 
                            label="Rakiplerinizle aranızdaki özellik/fiyat farkları teknik bir inceleme gerektiriyor mu?" 
                            val={q4} setVal={setQ4} 
                        />
                    </div>

                    <button 
                        onClick={handleAnalyze}
                        className="w-full mt-6 bg-gray-900 hover:bg-violet-600 text-white font-bold py-4 rounded-xl transition-colors duration-300 shadow-md"
                    >
                        Hazırlık Skorumu Hesapla
                    </button>
                </div>
            )}

            {step === 2 && (
                <div className="py-16 text-center">
                    <div className="inline-block w-16 h-16 border-4 border-gray-100 border-t-violet-600 rounded-full animate-spin mb-6"></div>
                    <h3 className="text-xl font-bold text-gray-900">Siteniz Taranıyor...</h3>
                    <p className="text-gray-500 text-sm mt-2">HTTP durumu, Schema, canonical ve içerik yapısı kontrol ediliyor.</p>
                </div>
            )}

            {step === 3 && results && (
                <div className="space-y-8 animate-in fade-in zoom-in duration-500">
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Opportunity Card */}
                        <div className="bg-gradient-to-br from-violet-50 to-white p-6 rounded-2xl border border-violet-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/10 rounded-bl-full"></div>
                            <p className="text-sm font-bold text-violet-700 uppercase tracking-widest mb-1">GEO Opportunity</p>
                            <p className="text-xs text-gray-500 mb-4 max-w-[200px]">Pazarınızın AI aramalarına uygunluğu</p>
                            <div className="flex items-end gap-2">
                                <span className="text-5xl font-black text-gray-900">{results.opportunity}</span>
                                <span className="text-xl font-bold text-gray-400 mb-1">/100</span>
                            </div>
                            <p className="text-sm font-medium text-gray-700 mt-4">
                                {results.opportunity >= 70 ? "Markanız yapay zeka aramalarından pay almak için mükemmel bir aday." : "Sektörünüzde temel seviyede bir AI potansiyeli mevcut."}
                            </p>
                        </div>

                        {/* Readiness Card */}
                        <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full"></div>
                            <p className="text-sm font-bold text-blue-700 uppercase tracking-widest mb-1">Website Readiness</p>
                            <p className="text-xs text-gray-500 mb-4 max-w-[200px]">Sitenizin teknik & içerik altyapısı</p>
                            <div className="flex items-end gap-2">
                                <span className="text-5xl font-black text-gray-900">{results.readiness?.total || 0}</span>
                                <span className="text-xl font-bold text-gray-400 mb-1">/100</span>
                            </div>
                            {results.readiness?.error ? (
                                <p className="text-sm font-medium text-red-600 mt-4">{results.readiness.error}</p>
                            ) : (
                                <p className="text-sm font-medium text-gray-700 mt-4">
                                    {(results.readiness?.total || 0) >= 70 ? "Sitenizin teknik SEO ve içerik temeli oldukça sağlam." : "AI motorları için bazı teknik eksiklikler tespit edildi."}
                                </p>
                            )}
                        </div>
                    </div>

                    {!results.readiness?.error && (
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-4">Detaylı Site Hazırlık Dağılımı</h4>
                            <div className="space-y-4">
                                <ScoreBar label="Technical Accessibility (%25)" score={results.readiness.accessibility} max={25} />
                                <ScoreBar label="Entity Clarity (%20)" score={results.readiness.entityClarity} max={20} />
                                <ScoreBar label="Content & Answerability (%30)" score={results.readiness.contentAnswerability} max={30} />
                                <ScoreBar label="Trust & Evidence (%25)" score={results.readiness.trustEvidence} max={25} />
                            </div>
                        </div>
                    )}

                    <div className="text-center pt-4">
                        <button onClick={() => setStep(1)} className="text-sm font-bold text-gray-500 hover:text-gray-900 underline transition-colors">
                            Yeni Bir Analiz Yap
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

function QuestionRow({ label, val, setVal }: { label: string, val: boolean | null, setVal: (v: boolean) => void }) {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-3 bg-white rounded-xl border border-gray-100">
            <span className="text-sm text-gray-700 font-medium flex-1">{label}</span>
            <div className="flex items-center gap-2 shrink-0">
                <button 
                    onClick={() => setVal(true)} 
                    className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-colors ${val === true ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                >
                    Evet
                </button>
                <button 
                    onClick={() => setVal(false)} 
                    className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-colors ${val === false ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
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
            <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                <span>{label}</span>
                <span>{score}/{max}</span>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                    className={`h-full rounded-full transition-all duration-1000 ${percentage > 70 ? 'bg-green-500' : percentage > 30 ? 'bg-yellow-500' : 'bg-red-500'}`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    )
}
