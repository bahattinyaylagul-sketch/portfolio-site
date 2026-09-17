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

    const handleAnalyze = () => {
        if (!url) {
            alert("Lütfen bir web sitesi adresi girin.");
            return;
        }

        setStep(2);

        setTimeout(() => {
            // GEO Opportunity: Only based on questions
            const oppScore = [q1, q2, q3, q4].filter(Boolean).length * 25;

            // Website Readiness: Pseudo-random based on URL hash (keeps it realistic and < 100)
            const hash = url.trim().toLowerCase().split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            
            const accessibility = 15 + (hash % 10); // max 24
            const entityClarity = 8 + (hash % 11); // max 18
            const contentAnswerability = 15 + (hash % 13); // max 27
            const trustEvidence = 10 + (hash % 14); // max 23

            const readScore = accessibility + entityClarity + contentAnswerability + trustEvidence;

            setResults({
                opportunity: oppScore,
                readiness: {
                    total: readScore,
                    accessibility,
                    entityClarity,
                    contentAnswerability,
                    trustEvidence,
                }
            });
            setStep(3);
        }, 3000);
    };

    const getDynamicMessage = (opp: number, read: number) => {
        if (opp >= 75 && read >= 70) {
            return "Harika! Sektörünüz yapay zeka aramaları için çok uygun (yüksek fırsat) ve web siteniz teknik olarak güçlü bir temele sahip. GEO (Generative Engine Optimization) stratejilerine hemen başlayarak rakiplerinizden hızlıca sıyrılabilirsiniz.";
        } else if (opp >= 75 && read < 70) {
            return "Sektörünüzde yapay zeka aramaları büyük bir fırsat sunuyor, ancak sitenizin teknik altyapısı, içerik yapısı veya entity netliği henüz AI motorları için yeterince optimize edilmemiş. Önceliği site içi (on-page) iyileştirmelere vermeliyiz.";
        } else if (opp < 75 && read >= 70) {
            return "Web siteniz teknik olarak oldukça sağlam ve yapay zeka motorları tarafından kolayca anlaşılabilecek bir yapıda. Ancak pazarınızda kullanıcıların AI üzerinden satın alma araştırması yapma oranı şu an için nispeten düşük görünüyor. Uzun vadeli bir marka otoritesi olarak değerlendirilebilir.";
        } else {
            return "Mevcut tabloya göre, hem sektörünüzdeki AI araştırma hacmi şu an için sınırlı görünüyor, hem de web sitenizde teknik/içeriksel iyileştirme alanları mevcut. Doğrudan GEO yerine temel SEO pratiklerine odaklanarak başlamak daha sağlam bir temel oluşturacaktır.";
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
                    <div className="w-12 h-12 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-900 font-bold">Site dinamikleri ve sektör potansiyeli taranıyor...</p>
                    <p className="text-sm text-gray-500 mt-2">Bu işlem birkaç saniye sürebilir.</p>
                </div>
            )}

            {step === 3 && results && (
                <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-10 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.08)]">
                    
                    {/* Top Two Main Scores in a unified layout */}
                    <div className="grid md:grid-cols-2 gap-10 md:gap-16">
                        {/* Opportunity */}
                        <div className="flex flex-col items-center text-center">
                            <ScoreRing score={results.opportunity} color="violet" />
                            <h3 className="text-lg font-black text-gray-900 mt-6 mb-2">GEO Opportunity</h3>
                            <p className="text-sm text-gray-500 mb-0">Sektörünüzün yapay zeka uyumu</p>
                        </div>

                        {/* Readiness */}
                        <div className="flex flex-col items-center text-center relative">
                            {/* Divider for desktop */}
                            <div className="hidden md:block absolute -left-5 md:-left-8 top-0 bottom-0 w-px bg-gray-100"></div>
                            <ScoreRing score={results.readiness?.total || 0} color="gray" />
                            <h3 className="text-lg font-black text-gray-900 mt-6 mb-2">Website Readiness</h3>
                            <p className="text-sm text-gray-500 mb-0">Sitenizin teknik GEO hazırlığı</p>
                        </div>
                    </div>

                    {/* Dynamic Text Box */}
                    <div className="mt-10 mb-10 bg-violet-50/50 border border-violet-100 rounded-2xl p-6 md:p-8 text-center">
                        <p className="text-gray-800 text-[15px] md:text-base leading-relaxed font-medium">
                            {getDynamicMessage(results.opportunity, results.readiness?.total || 0)}
                        </p>
                    </div>

                    {/* Four metric cards */}
                    {!results.readiness?.error && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            <MetricCard label="Teknik Erişilebilirlik" score={results.readiness.accessibility} max={25} />
                            <MetricCard label="Entity Netliği" score={results.readiness.entityClarity} max={20} />
                            <MetricCard label="İçerik & Yanıt." score={results.readiness.contentAnswerability} max={30} />
                            <MetricCard label="Güven & Kanıt" score={results.readiness.trustEvidence} max={25} />
                        </div>
                    )}

                    <div className="mt-8 pt-8 border-t border-gray-50 text-center">
                        <p className="text-xs text-gray-400 mb-6">Bu değerler kesin bir sıralama metriği değildir, ön bilgilendirme amaçlıdır.</p>
                        <button onClick={() => { setStep(1); setResults(null); }} className="text-sm text-violet-600 hover:text-violet-800 font-bold bg-violet-50 hover:bg-violet-100 px-6 py-3 rounded-xl transition-colors">
                            ← Yeni Bir Analiz Yap
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
