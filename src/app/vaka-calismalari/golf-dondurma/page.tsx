/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import CaseContent from "./CaseContent";

export const metadata: Metadata = {
    title: "Golf Dondurma Vaka Analizi – Bahattin Yaylagül",
    description: "Golf Dondurma için kurgulanan teknik SEO ve içerik stratejisi ile %210 trafik artışı. Finans sektöründe rekabetçi kelimelerde lider konuma yükselme hikayesi.",
    alternates: {
        canonical: "/vaka-calismalari/golf-dondurma",
    },
};

export default function NKolayCaseStudy() {
    return (
        <main className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
            {/* Fixed Header Wrapper */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <Navigation />
            </header>

            {/* Simple Light Header */}
            <div className="pt-32 pb-8 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">
                        Vaka Çalışması
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        Golf Dondurma
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                        Finans dikeyinde dijital otorite inşası ve teknik mükemmeliyet.
                    </p>

                    {/* Author Section - Dark text version */}
                    <div className="flex items-center justify-center gap-4">
                        <Link href="/hakkimda" className="w-12 h-12 rounded-full border-2 border-gray-100 relative overflow-hidden hover:border-blue-600 transition-colors">
                            <Image src="/images/bahattin-yaylagul.jpg" alt="Bahattin Yaylagül" fill className="object-cover" />
                        </Link>
                        <div className="flex flex-col text-left">
                            <span className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-0.5">Yazar</span>
                            <div className="flex items-center gap-3">
                                <Link href="/hakkimda" className="text-gray-900 font-bold text-lg leading-none hover:text-blue-600 transition-colors">
                                    Bahattin Yaylagül
                                </Link>
                                <a
                                    href="https://linkedin.com/in/bahattinyaylagul"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-600 transition-colors"
                                    title="LinkedIn'de Bağlantı Kur"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CaseContent />
            <Footer />
        </main>
    );
}
