import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Vaka Çalışmaları – Bahattin Yaylagül",
    description: "E-ticaret, Finans ve SaaS sektörlerinde %200+ trafik artışı sağlayan gerçek başarı hikayeleri. Veri odaklı SEO stratejilerimizin sonuçlarını detaylıca inceleyin.",
    alternates: {
        canonical: "/vaka-calismalari",
    },
};

const caseStudies = [
    {
        slug: "n-kolay",
        title: "N Kolay: Dijital Otorite ve Teknik Mükemmeliyet",
        category: "Finans / SEO",
        description: "Finans dikeyinde sadece bir 'oyuncu' olmaktan çıkıp, arama motorlarında dominasyon kuran bir başarı hikayesi. Toplam trafikte %133 artış.",
        image: "/images/case-studies/n-kolay/cover.png",
        stats: {
            value: "%166",
            label: "Gösterim Artışı"
        }
    },
    // Future case studies can be added here
];

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground font-sans">
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <Navigation />
            </header>

            {/* Simple Light Header */}
            <div className="pt-32 pb-8 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">
                        Portfolyo
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        Başarı Hikayeleri
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Veri odaklı stratejilerin ve teknik optimizasyonun iş sonuçlarına yansıması.
                    </p>
                </div>
            </div>

            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-10">
                        {caseStudies.map((study) => (
                            <Link
                                key={study.slug}
                                href={`/vaka-calismalari/${study.slug}`}
                                className="block group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="relative aspect-video bg-gray-50 overflow-hidden">
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        fill
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                                            {study.category}
                                        </span>
                                        <div className="text-right">
                                            <span className="block text-2xl font-bold text-green-600">{study.stats.value}</span>
                                            <span className="text-xs text-gray-400 font-medium">{study.stats.label}</span>
                                        </div>
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-blue-600 transition-colors">
                                        {study.title}
                                    </h2>
                                    <p className="text-gray-600 leading-[1.6] tracking-[-0.01em] line-clamp-3">
                                        {study.description}
                                    </p>
                                    <div className="mt-6 flex items-center text-sm font-semibold text-foreground group-hover:translate-x-2 transition-transform">
                                        İncele
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
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
