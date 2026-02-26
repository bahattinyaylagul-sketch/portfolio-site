"use client";
import { useState, useEffect, useRef } from "react";

const testimonials = [
    {
        name: "N Kolay Ekibi",
        title: "Dijital Büyüme & SEO Liderliği",
        company: "nkolay.com",
        avatar: "NK",
        color: "#f59e0b",
        quote: "Finans gibi rekabetçi bir sektörde %166 gösterim artışı ve %133 trafik büyümesi sağlamak, standart bir SEO çalışmasıyla değil; topikal otorite ve teknik mükemmeliyetle oluyor. Bahattin tam olarak bunu yaptı.",
    },
    {
        name: "Mert Dumantepe",
        title: "Dijital Strateji & Kişisel Marka",
        company: "mertdumantepe.com",
        avatar: "MD",
        color: "#a855f7",
        quote: "37 katlık büyüme sadece bir rakam değil — bu, doğru kurgulanmış bir topikal otorite stratejisinin kanıtı. AI Overviews'da kaynak gösterilmek, markamı gerçek anlamda bir 'bilgi otoritesi'ne dönüştürdü.",
    },
    {
        name: "Atlas Üniversitesi",
        title: "Dijital Pazarlama Birimi",
        company: "atlas.edu.tr",
        avatar: "AU",
        color: "#3b82f6",
        quote: "184K+ aylık organik ziyaretçiye ulaşmak, tercih dönemlerindeki öğrenci taleplerini doğrudan artırdı. SEO çalışması artık üniversitemiz için en güçlü öğrenci edinim kanalı.",
    },
    {
        name: "Maltepe Hastanesi",
        title: "Dijital Dönüşüm Departmanı",
        company: "maltepehastanesi.com.tr",
        avatar: "MH",
        color: "#ef4444",
        quote: "Migration krizinin ardından 370.4K trafik rekoru — bu bir kurtarma operasyonu değil, tam anlamıyla bir 'yeniden inşa' süreciydi. Dijital randevu kanallarımız hiç bu kadar güçlü olmamıştı.",
    },
    {
        name: "Golf Dondurmaları",
        title: "E-Ticaret & SEO Yöneticisi",
        company: "golf.com.tr",
        avatar: "GD",
        color: "#6366f1",
        quote: "FMCG'de kış aylarında trafik düşmesi normaldi. Semantik içerik ve GEO stratejisiyle Ocak 2026'da rekor kırdık. Artık SEO, satış kanallarımızın en öngörülebilir ve güçlü ayağı.",
    },
];

export default function TestimonialsCarousel() {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (!paused) {
            intervalRef.current = setInterval(() => {
                setCurrent((prev) => (prev + 1) % testimonials.length);
            }, 4500);
        }
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [paused]);

    const go = (idx: number) => {
        setCurrent(idx);
        setPaused(true);
        setTimeout(() => setPaused(false), 8000);
    };

    const t = testimonials[current];

    return (
        <div className="mt-8">
            <div
                className="bg-[#111118] border border-white/8 rounded-2xl p-7 relative overflow-hidden min-h-[180px]"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {/* Accent glow */}
                <div
                    className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[70px] opacity-15 pointer-events-none transition-all duration-700"
                    style={{ background: t.color }}
                />
                {/* Tırnak */}
                <div className="text-5xl font-serif leading-none mb-3 opacity-20 transition-colors duration-500" style={{ color: t.color }}>&quot;</div>

                <p className="text-white/75 text-sm leading-relaxed mb-6 relative z-10">
                    {t.quote}
                </p>

                <div className="flex items-center gap-3">
                    <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 transition-all duration-500"
                        style={{ background: `${t.color}22`, color: t.color, border: `1.5px solid ${t.color}44` }}
                    >
                        {t.avatar}
                    </div>
                    <div>
                        <div className="text-white font-bold text-sm">{t.name}</div>
                        <div className="text-white/35 text-xs">{t.title} · {t.company}</div>
                    </div>
                    {/* Onaylı rozet */}
                    <div className="ml-auto flex items-center gap-1 text-[10px] font-mono px-2 py-1 rounded-full" style={{ color: t.color, background: `${t.color}15`, border: `1px solid ${t.color}25` }}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Doğrulanmış Müşteri
                    </div>
                </div>
            </div>

            {/* Nokta nav */}
            <div className="flex items-center justify-center gap-2 mt-4">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => go(i)}
                        className="rounded-full transition-all duration-300"
                        style={{
                            width: i === current ? "22px" : "6px",
                            height: "6px",
                            background: i === current ? testimonials[i].color : "rgba(255,255,255,0.12)",
                        }}
                        aria-label={`Yorum ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
