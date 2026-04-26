"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
    {
        id: 1,
        name: "Sinem Göven",
        title: "Digital Marketing Manager",
        company: "N Kolay",
        companyLogo: "/images/references/n-kolay-yeni.png",
        photo: "/images/testimonials/sinem-goven.jpg",
        accentColor: "#f59e0b",
        quote: "Finans sektöründe organik büyüme sağlamak hem oldukça zor hem de uzun soluklu bir süreç. Bahattin ile çalışmaya başladığımızda, topikal otorite ve teknik SEO yaklaşımı sayesinde N Kolay'ın arama görünürlüğünde ciddi bir sıçrama yaşadık. Rakiplerimizin çok önüne geçtik ve bu büyüme sürdürülebilir bir yapıya kavuştu.",
        caseStudy: null,
    },
    {
        id: 2,
        name: "Atakan Aktaş",
        title: "Digital Banking Channel Management Manager",
        company: "Aktif Bank",
        companyLogo: "/images/references/aktif-bank-yeni.png",
        photo: "/images/testimonials/atakan-aktas.jpg",
        accentColor: "#3b82f6",
        quote: "Dijital bankacılık alanında müşteri ediniminin büyük bir kısmı artık organik arama üzerinden geliyor. Bahattin'in teknik SEO ve içerik mimarisi konusundaki derinliği, Aktif Bank'ın dijital görünürlüğünü ve doğrudan kanal trafiğini anlamlı ölçüde artırdı. Data odaklı yaklaşımı ve şeffaf raporlaması süreçlerimizi çok kolaylaştırdı.",
        caseStudy: null,
    },
    {
        id: 3,
        name: "Sertaç Sakarya",
        title: "Dijital Pazarlama Müdürü",
        company: "Dünyagöz Hastaneler Grubu",
        companyLogo: "/images/references/dunyagoz-yeni.png",
        photo: "/images/testimonials/sertac-sakarya.jpg",
        accentColor: "#14b8a6",
        quote: "Sağlık sektöründe YMYL kriterlerine uygun, güvenilir ve otoriter içerik üretmek kritik öneme sahip. Bahattin'in E-E-A-T odaklı stratejisi sayesinde Dünyagöz, Google'ın tıbbi sorgu sonuçlarında çok daha güçlü bir yer edindi. Hem organik trafik hem de hasta başvurusu kanallarımız belirgin şekilde güçlendi.",
        caseStudy: null,
    },
];

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);

    const go = useCallback((idx: number) => {
        if (animating) return;
        setAnimating(true);
        setTimeout(() => {
            setCurrent(idx);
            setAnimating(false);
        }, 220);
    }, [animating]);

    const prev = () => go((current - 1 + testimonials.length) % testimonials.length);
    const next = () => go((current + 1) % testimonials.length);

    useEffect(() => {
        const interval = setInterval(() => {
            go((current + 1) % testimonials.length);
        }, 7000);
        return () => clearInterval(interval);
    }, [current, go]);

    const t = testimonials[current];

    return (
        <section className="bg-white py-20 px-6 border-b border-gray-100">
            <div className="max-w-6xl mx-auto">

                {/* Başlık Satırı */}
                <div className="flex items-start justify-between mb-14 flex-wrap gap-4">
                    <div>
                        <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2">
                            SEO Müşterilerimiz
                        </p>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                            Müşterilerimiz Ne Düşünüyor?
                        </h2>
                    </div>
                    <div className="flex items-center gap-4 mt-2">

                        <div className="flex gap-2">
                            <button
                                onClick={prev}
                                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-all duration-200 text-gray-500"
                                aria-label="Önceki"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={next}
                                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-all duration-200 text-gray-500"
                                aria-label="Sonraki"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Ana İçerik */}
                <div
                    className={`grid md:grid-cols-[280px_1fr] gap-12 md:gap-16 items-center transition-opacity duration-200 ${animating ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}`}
                >
                    {/* Sol: Fotoğraf */}
                    <div className="relative flex-shrink-0">
                        <div className="relative w-64 h-64 mx-auto md:mx-0">
                            <div
                                className="absolute inset-0 rounded-full blur-3xl opacity-15 transition-all duration-700"
                                style={{ background: t.accentColor }}
                            />
                            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                <Image
                                    src={t.photo}
                                    alt={t.name}
                                    fill
                                    className="object-cover object-top"
                                    sizes="256px"
                                    priority
                                />
                            </div>
                            {/* Şirket Logo Rozeti */}
                            <div className="absolute -bottom-2 left-2 bg-white rounded-full px-3 py-2 shadow-lg border border-gray-100 flex items-center">
                                <Image
                                    src={t.companyLogo}
                                    alt={t.company}
                                    width={80}
                                    height={24}
                                    className="h-5 w-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sağ: Alıntı */}
                    <div>
                        <div
                            className="border-l-4 pl-8 mb-8 transition-all duration-500"
                            style={{ borderColor: t.accentColor }}
                        >
                            {/* Büyük tırnak */}
                            <div className="text-6xl font-serif leading-none mb-3 opacity-20" style={{ color: t.accentColor }}>&quot;</div>
                            <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
                                {t.quote}
                            </p>
                        </div>

                        {/* İsim & Unvan */}
                        <div className="pl-8 flex items-center justify-between flex-wrap gap-4">
                            <div>
                                <div className="font-bold text-gray-900 text-base">{t.name}</div>
                                <div className="text-gray-500 text-sm mt-0.5">{t.title} · {t.company}</div>
                            </div>

                        </div>

                        {/* Nokta Nav */}
                        <div className="pl-8 mt-8 flex gap-2 items-center">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => go(i)}
                                    className="h-1.5 rounded-full transition-all duration-300"
                                    style={{
                                        width: i === current ? "28px" : "8px",
                                        background: i === current ? t.accentColor : "#e5e7eb",
                                    }}
                                    aria-label={`Yorum ${i + 1}`}
                                />
                            ))}
                            <span className="text-xs text-gray-400 font-mono ml-2">
                                {current + 1}/{testimonials.length}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
