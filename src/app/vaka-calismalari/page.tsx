/* eslint-disable react/no-unescaped-entities */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
    title: "Vaka Çalışmaları – Bahattin Yaylagül",
    description: "E-ticaret, Finans, Sağlık ve FMCG sektörlerinde gerçek SEO başarı hikayeleri. Veri odaklı stratejilerin iş sonuçlarına yansıması.",
    alternates: { canonical: "/vaka-calismalari" },
};

/* ─── Her kart için SVG grafik path'i + metadata ─── */
const caseStudies = [
    {
        slug: "atlas-universitesi",
        title: "Atlas Üniversitesi",
        tags: ["#HealthSEO", "#YMYL", "#GEO"],
        metric: "184K+",
        metricLabel: "Aylık Organik Ziyaretçi",
        secondaryMetric: "31K+ anahtar kelime",
        description: "Mayıs 2024'ten bu yana sürdürülen SEO çalışmasında 184.400 aylık organik ziyaretçi ve 31.000+ anahtar kelimede üst sıra hakimiyeti.",
        accentColor: "#3b82f6",
        /* Sürekli exponential büyüme eğrisi */
        chartPath: "M 10 90 C 40 85, 80 70, 120 55 S 180 35, 220 20 S 270 10, 300 5",
    },
    {
        slug: "maltepe-hastanesi",
        title: "Maltepe Hastanesi",
        tags: ["#MedicalSEO", "#Migration", "#YMYL"],
        metric: "370.4K+",
        metricLabel: "Aylık Organik Ziyaretçi",
        secondaryMetric: "74.6K+ anahtar kelime",
        description: "Hatalı migration sonrası çöken trafiğin kurtarılması. V-tipi toparlanma ile 370.4K organik ziyaretçi rekoru.",
        accentColor: "#ef4444",
        /* V-tipi düşüş → sert çıkış */
        chartPath: "M 10 30 L 80 30 L 130 85 L 180 65 L 220 30 L 270 12 L 300 5",
    },
    {
        slug: "dr-ersoy-kocabicak",
        title: "Dr. Ersoy Kocabıçak",
        tags: ["#MedicalSEO", "#EEAT", "#AIOverviews"],
        metric: "37×",
        metricLabel: "Organik Büyüme",
        secondaryMetric: "977 → 36.1K ziyaretçi",
        description: "977'den 36.1K'ya — 37 katlık organik büyüme. Sağlık sektöründe niş otorite inşası.",
        accentColor: "#14b8a6",
        /* Uzun düzlük sonrası dikey fırlatma */
        chartPath: "M 10 88 L 150 85 L 180 75 L 210 55 L 240 30 L 265 12 L 300 4",
    },
    {
        slug: "golf-dondurmalari",
        title: "Golf Dondurmaları",
        tags: ["#FMCG", "#SeasonalSEO", "#GEO"],
        metric: "45.2K+",
        metricLabel: "Aylık Organik Ziyaretçi",
        secondaryMetric: "7.2K+ anahtar kelime",
        description: "FMCG sektöründe mevsimsel direnci kırarak 45.2K aylık organik ziyaretçi ve dijital liderlik.",
        accentColor: "#6366f1",
        /* Mevsimsel dalgalı ama yükselen trend */
        chartPath: "M 10 70 C 40 60, 60 75, 90 55 S 130 65, 155 45 S 195 55, 220 30 S 265 15, 300 5",
    },
    {
        slug: "mert-dumantepe",
        title: "Mert Dumantepe",
        tags: ["#PersonalBrand", "#GEO", "#AIOverviews"],
        metric: "25.1K+",
        metricLabel: "Aylık Organik Ziyaretçi",
        secondaryMetric: "8.2K+ anahtar kelime",
        description: "Haziran 2025'ten itibaren kişisel markada topikal otorite inşası ve AI Overviews hakimiyeti.",
        accentColor: "#a855f7",
        /* Stabil → hızlanan büyüme */
        chartPath: "M 10 85 L 120 80 C 160 78, 190 60, 220 35 S 270 12, 300 4",
    },
    {
        slug: "n-kolay",
        title: "N Kolay",
        tags: ["#FinanceSEO", "#TechnicalSEO", "#Authority"],
        metric: "%166",
        metricLabel: "Gösterim Artışı",
        secondaryMetric: "%133 trafik artışı",
        description: "Finans dikeyinde dominasyon. Teknik SEO ve otorite inşası ile %166 gösterim artışı.",
        accentColor: "#f59e0b",
        /* Güçlü sabit büyüme */
        chartPath: "M 10 80 C 60 70, 100 55, 150 38 S 220 18, 300 5",
    },
];

/* ─── SVG Chart Bileşeni ─── */
function MiniChart({ path, color }: { path: string; color: string }) {
    return (
        <svg viewBox="0 0 310 95" className="w-full h-full" preserveAspectRatio="none">
            {/* Dolgu alanı */}
            <defs>
                <linearGradient id={`fill-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.15" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.01" />
                </linearGradient>
            </defs>
            <path
                d={`${path} L 300 95 L 10 95 Z`}
                fill={`url(#fill-${color.replace("#", "")})`}
            />
            {/* Ana çizgi */}
            <path
                d={path}
                fill="none"
                stroke={color}
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.55"
            />
        </svg>
    );
}

export default function CaseStudiesPage() {
    notFound(); // GEÇİCİ GİZLİ - ileride geri açılacak
    return (
        <main className="min-h-screen bg-[#f9fafb] text-foreground font-sans">
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <Navigation />
            </header>

            {/* Page Header */}
            <div className="pt-32 pb-10 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">
                        Portfolyo
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-5 tracking-tight">
                        Başarı Hikayeleri
                    </h1>
                    <p className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
                        Veri odaklı stratejilerin ve teknik optimizasyonun iş sonuçlarına yansıması.
                    </p>
                </div>
            </div>

            <section className="pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {caseStudies.map((study) => (
                            <Link
                                key={study.slug}
                                href={`/vaka-calismalari/${study.slug}`}
                                className="group block"
                            >
                                <div className="relative bg-[#0d0d12] rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30">

                                    {/* ── Grafik Bölümü ── */}
                                    <div className="relative h-44 overflow-hidden">
                                        {/* Çok hafif grid arka plan */}
                                        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <pattern id={`grid-${study.slug}`} width="30" height="30" patternUnits="userSpaceOnUse">
                                                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5" />
                                                </pattern>
                                            </defs>
                                            <rect width="100%" height="100%" fill={`url(#grid-${study.slug})`} />
                                        </svg>

                                        {/* Grafik çizgisi */}
                                        <div className="absolute inset-0 p-4 flex items-end">
                                            <div className="w-full h-full">
                                                <MiniChart path={study.chartPath} color={study.accentColor} />
                                            </div>
                                        </div>

                                        {/* Sol üst: Sektör etiketleri */}
                                        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                                            {study.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded border"
                                                    style={{
                                                        color: study.accentColor,
                                                        borderColor: `${study.accentColor}33`,
                                                        background: `${study.accentColor}12`,
                                                    }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Sağ üst: Ana metrik */}
                                        <div className="absolute top-3 right-4 text-right">
                                            <div
                                                className="text-3xl font-black leading-none tabular-nums"
                                                style={{ color: study.accentColor }}
                                            >
                                                {study.metric}
                                            </div>
                                            <div className="text-[10px] text-white/40 font-medium mt-0.5">
                                                {study.metricLabel}
                                            </div>
                                        </div>
                                    </div>

                                    {/* ── Metin Bölümü ── */}
                                    <div className="px-5 pb-5 pt-1 border-t border-white/5">
                                        <div className="flex items-center justify-between mb-2 mt-4">
                                            <h2 className="text-base font-bold text-white leading-snug group-hover:text-white/80 transition-colors">
                                                {study.title}
                                            </h2>
                                            <span className="text-[10px] font-mono text-white/30 ml-2 flex-shrink-0">
                                                {study.secondaryMetric}
                                            </span>
                                        </div>
                                        <p className="text-xs text-white/40 leading-relaxed line-clamp-2 mb-4">
                                            {study.description}
                                        </p>
                                        <div
                                            className="flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all"
                                            style={{ color: study.accentColor }}
                                        >
                                            İncele
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
