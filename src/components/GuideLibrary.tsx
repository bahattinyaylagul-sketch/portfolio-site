import Link from "next/link";
import { seoClusterData } from "@/lib/seo-data";
import { geoClusterData } from "@/lib/geo-data";

export default function GuideLibrary() {
    // Dynamic counts
    const seoCount = Object.keys(seoClusterData).filter(key => key !== 'tarama' && key !== 'indeksleme').length + 1; // 18
    const geoCount = Object.keys(geoClusterData).length + 1; // 4

    return (
        <section className="py-24 bg-white relative overflow-hidden border-b border-gray-100">
            {/* Background design elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
                <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-blue-100/30 rounded-full blur-[80px]"></div>
                <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-violet-100/30 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-16">
                    <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-3 block">
                        KÜTÜPHANE
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
                        Rehber Kütüphanesi
                    </h2>
                    <p className="text-gray-500 font-medium">
                        Konuların derinlemesine işlendiği detaylı rehberler
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Card 1: SEO */}
                    <Link
                        href="/seo"
                        className="group flex flex-col justify-between p-8 md:p-10 bg-white border border-gray-100 rounded-3xl hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/[0.04] hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full relative"
                    >
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-extrabold tracking-widest text-blue-600 uppercase">
                                    SEO REHBERLERİ
                                </span>
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-extrabold rounded-full tracking-wider">
                                    {seoCount} İÇERİK
                                </span>
                            </div>
                            
                            <div className="space-y-3">
                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    SEO Danışmanlığı
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                    Anahtar kelime araştırmasından teknik altyapıya, topikal otoriteden E-E-A-T sinyallerine kadar {seoCount} detaylı rehber.
                                </p>
                            </div>
                        </div>

                        <div className="pt-10">
                            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600">
                                Tümünü Gör
                                <span className="transition-transform group-hover:translate-x-1">→</span>
                            </span>
                        </div>
                    </Link>

                    {/* Card 2: GEO */}
                    <Link
                        href="/geo"
                        className="group flex flex-col justify-between p-8 md:p-10 bg-white border border-gray-100 rounded-3xl hover:border-violet-300 hover:shadow-2xl hover:shadow-violet-500/[0.04] hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full relative"
                    >
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-extrabold tracking-widest text-violet-600 uppercase">
                                    GEO REHBERLERİ
                                </span>
                                <span className="px-3 py-1 bg-violet-50 text-violet-700 text-xs font-extrabold rounded-full tracking-wider">
                                    {geoCount} İÇERİK
                                </span>
                            </div>
                            
                            <div className="space-y-3">
                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-violet-600 transition-colors">
                                    GEO Danışmanlığı
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                    ChatGPT, Perplexity ve Gemini'de kaynak olarak görünmek için pratik yöntemler ve {geoCount} detaylı rehber.
                                </p>
                            </div>
                        </div>

                        <div className="pt-10">
                            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-violet-600">
                                Tümünü Gör
                                <span className="transition-transform group-hover:translate-x-1">→</span>
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
