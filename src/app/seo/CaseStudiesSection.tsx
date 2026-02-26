"use client";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

// Ortak Kart Bileşeni
function CaseCard({
    href,
    spanClass,
    title,
    subtitle,
    metric,
    metricLabel,
    color,
    badge,
    logoSrc,
    children,
}: {
    href: string;
    spanClass: string;
    title: string;
    subtitle: string;
    metric: string;
    metricLabel: string;
    color: string;
    badge: string;
    logoSrc?: string;
    children: ReactNode;
}) {
    return (
        <Link
            href={href}
            className={`group relative flex flex-col min-h-[380px] rounded-3xl p-[1px] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 ${spanClass}`}
        >
            {/* Gradient Border Animasyonu */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-transparent transition-all duration-500 group-hover:opacity-100 opacity-60"></div>
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                    background: `linear-gradient(135deg, ${color}30, transparent, transparent)`,
                }}
            ></div>

            {/* İç Kutu */}
            <div className="relative flex-1 bg-white rounded-[23px] flex flex-col justify-between p-8 md:p-10 z-10 overflow-hidden shadow-sm">
                {/* Arkaplan Şekilleri & Özel İllüstrasyon Yuvası */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute w-full h-full opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 bg-[radial-gradient(circle_at_center,black_1px,transparent_1px)] bg-[length:24px_24px]"></div>
                    {children}
                </div>

                {/* Üst İçerik */}
                <div className="relative z-10 flex flex-col sm:flex-row items-start justify-between gap-4">
                    <div>
                        <span
                            className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border"
                            style={{ color: color, backgroundColor: `${color}10`, borderColor: `${color}20` }}
                        >
                            {badge}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-2">
                            {title}
                        </h3>
                        <p className="text-gray-500 text-sm font-medium">{subtitle}</p>
                    </div>

                    <div className="flex items-center gap-4">
                        {logoSrc && (
                            <div className="hidden sm:block relative h-10 w-28 filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                                <Image src={logoSrc} alt={`${title} logo`} fill className="object-contain object-right" />
                            </div>
                        )}
                        {/* Play Button */}
                        <div className="shrink-0 w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center bg-gray-50 text-gray-400 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-sm">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-1">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Alt Metrikler */}
                <div className="relative z-10 mt-auto pt-10">
                    <div className="flex flex-col">
                        <div
                            className="text-4xl md:text-5xl font-black tracking-tighter"
                            style={{
                                background: `linear-gradient(to right, #111827, ${color})`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            {metric}
                        </div>
                        <div className="text-gray-400 text-sm font-bold uppercase tracking-widest mt-1">
                            {metricLabel}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default function CaseStudiesSection() {
    return (
        <section className="bg-gray-50 py-16 px-4 md:px-6 relative overflow-hidden border-t border-gray-200/60">
            {/* Ortam Glow */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-400/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-indigo-400/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Başlık Alanı */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 px-2">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[2px] bg-indigo-500"></span>
                            <span className="text-gray-500 font-mono text-xs font-bold tracking-widest uppercase">
                                VERİLERLE KANITLANMIŞ
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.05] tracking-tight">
                            Büyüme getiren
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                                başarı hikayeleri.
                            </span>
                        </h2>
                    </div>
                    <div className="lg:mb-3">
                        <Link
                            href="/vaka-calismalari"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 font-bold text-sm bg-white rounded-full hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all shadow-sm group"
                        >
                            TÜM VAKALARI İNCELE
                            <svg
                                className="className=w-4 h-4 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Dinamik Asimetrik Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[minmax(380px,auto)]">
                    {/* Kart 1: Maltepe */}
                    <CaseCard
                        href="/vaka-calismalari/maltepe-hastanesi"
                        spanClass="lg:col-span-7"
                        title="Maltepe Hastanesi"
                        subtitle="Migration Kurtarma Operasyonu"
                        metric="370.4K+"
                        metricLabel="Organik Ziyaretçi"
                        color="#3b82f6"
                        badge="SAĞLIK & MIGRATION"
                        logoSrc="/images/references/maltepe-uni.png"
                    >
                        {/* Custom Abstract Chart */}
                        <svg
                            viewBox="0 0 400 300"
                            className="absolute right-0 bottom-0 w-[70%] h-full opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                            preserveAspectRatio="none"
                        >
                            <defs>
                                <linearGradient id="g-maltepe" x1="0" y1="1" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M0,250 C100,240 150,150 200,160 C250,170 300,50 400,20 L400,300 L0,300 Z"
                                fill="url(#g-maltepe)"
                            />
                            <path
                                d="M0,250 C100,240 150,150 200,160 C250,170 300,50 400,20"
                                fill="none"
                                stroke="#3b82f6"
                                strokeWidth="4"
                            />
                            {/* Grid Lines */}
                            <g stroke="#000000" strokeOpacity="0.05" strokeWidth="1">
                                <line x1="0" y1="50" x2="400" y2="50" />
                                <line x1="0" y1="150" x2="400" y2="150" />
                                <line x1="0" y1="250" x2="400" y2="250" />
                            </g>
                        </svg>
                    </CaseCard>

                    {/* Kart 2: N Kolay */}
                    <CaseCard
                        href="/vaka-calismalari/n-kolay"
                        spanClass="lg:col-span-5"
                        title="N Kolay"
                        subtitle="Finans Dikeyinde Dijital Otorite"
                        metric="%210"
                        metricLabel="Trafik Artışı"
                        color="#f97316"
                        badge="FİNANS & TEKNOLOJİ"
                        logoSrc="/images/references/n-kolay-yeni.png"
                    >
                        {/* Radial Target & Line Motif */}
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[300px] h-[300px] opacity-10 group-hover:opacity-20 transition-all duration-700 pointer-events-none">
                            <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_60s_linear_infinite]">
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#f97316" strokeWidth="1" strokeDasharray="4 4" />
                                <circle cx="50" cy="50" r="30" fill="none" stroke="#f97316" strokeWidth="2" strokeOpacity="0.5" />
                                <circle cx="50" cy="50" r="15" fill="#f97316" fillOpacity="0.2" />
                                <path d="M50 10 V 90 M10 50 H 90" stroke="#f97316" strokeWidth="1" strokeOpacity="0.5" />
                            </svg>
                        </div>
                    </CaseCard>

                    {/* Kart 3: Atlas Uni */}
                    <CaseCard
                        href="/vaka-calismalari/atlas-universitesi"
                        spanClass="lg:col-span-5"
                        title="Atlas Üniversitesi"
                        subtitle="Sektörel Dominasyon"
                        metric="184.4K+"
                        metricLabel="Aylık Trafik"
                        color="#a855f7"
                        badge="EĞİTİM & YMYL"
                        logoSrc="/images/references/atlas-uni.jpg"
                    >
                        {/* Floating Blocks */}
                        <div className="absolute right-0 top-0 w-full h-full opacity-30 group-hover:opacity-60 transition-all duration-700 pointer-events-none mix-blend-multiply">
                            <div className="absolute top-[20%] right-[10%] w-24 h-24 rounded-2xl border-2 border-[#a855f7] rotate-12 group-hover:rotate-45 transition-transform duration-1000"></div>
                            <div className="absolute top-[50%] right-[30%] w-16 h-16 rounded-full bg-[#a855f7]/20 backdrop-blur-3xl scale-100 group-hover:scale-150 transition-transform duration-1000"></div>
                            <div className="absolute bottom-[20%] right-[5%] w-32 h-32 rounded-3xl bg-gradient-to-br from-[#a855f7]/30 to-transparent -rotate-12 group-hover:rotate-0 transition-transform duration-1000"></div>
                        </div>
                    </CaseCard>

                    {/* Kart 4: Mert Dumantepe */}
                    <CaseCard
                        href="/vaka-calismalari/mert-dumantepe"
                        spanClass="lg:col-span-7"
                        title="Mert Dumantepe"
                        subtitle="Kişisel Marka & Dijital Otorite"
                        metric="25.1K"
                        metricLabel="Organik Ziyaretçi"
                        color="#f59e0b"
                        badge="KİŞİSEL MARKA"
                    >
                        {/* Dynamic Line Graph */}
                        <svg
                            viewBox="0 0 400 300"
                            className="absolute right-0 bottom-0 w-[60%] h-[80%] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0,280 L100,200 L180,240 L280,100 L400,120"
                                fill="none"
                                stroke="#f59e0b"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <circle cx="100" cy="200" r="8" fill="#f59e0b" />
                            <circle cx="180" cy="240" r="8" fill="#f59e0b" />
                            <circle cx="280" cy="100" r="8" fill="#f59e0b" />
                            {/* Ambient drop shadow lines */}
                            <path
                                d="M0,290 L100,210 L180,250 L280,110 L400,130"
                                fill="none"
                                stroke="#f59e0b"
                                strokeWidth="8"
                                strokeOpacity="0.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="blur-[8px]"
                            />
                        </svg>
                    </CaseCard>
                </div>

            </div>
        </section>
    );
}
