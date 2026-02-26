/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const headings = [
    { id: "stratejik-yaklasim", text: "1. Semantik Dominasyon & Topikal Otorite" },
    { id: "siralamalar", text: "2. Rekabetin Zirvesinde Yerimizi Aldık" },
    { id: "kredi-dikey", text: "3. Kredi Dikeyinde Tam Hakimiyet" },
    { id: "teknik-yapi", text: "4. Technical Backbone" },
    { id: "sonuc", text: "5. SONUÇ: Dijital Otorite" },
];

export default function CaseContent() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        // Set initial active section
        if (headings.length > 0) {
            setActiveSection(headings[0].id);
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -60% 0px", // Active zone: visible between 20% and 40% from top
                threshold: 0 // Trigger as soon as any part enters the zone
            }
        );

        // Add a small delay to ensure DOM is fully painted
        const timer = setTimeout(() => {
            headings.forEach((item) => {
                const element = document.getElementById(item.id);
                if (element) observer.observe(element);
            });
        }, 100);

        return () => {
            observer.disconnect();
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 pt-12 pb-20">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-8 font-medium tracking-wide font-sans">
                <Link href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</Link>
                <span className="text-gray-200">/</span>
                <Link href="/vaka-calismalari" className="hover:text-blue-600 transition-colors">Vaka Çalışmaları</Link>
                <span className="text-gray-200">/</span>
                <span className="text-gray-600 font-bold truncate">N Kolay Başarı Hikayesi</span>
            </nav>

            <div className="grid lg:grid-cols-[250px_1fr] gap-12 items-start relative">
                {/* Left Sidebar: TOC Only */}
                <aside className="hidden lg:block sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto pr-4 custom-scrollbar">
                    <div>
                        <div className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2 pl-2">
                            <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                            İÇİNDEKİLER
                        </div>
                        <nav className="space-y-1 border-l-2 border-gray-100">
                            {headings.map((heading, i) => (
                                <a
                                    key={i}
                                    href={`#${heading.id}`}
                                    className={`block py-3 pl-4 text-sm transition-all leading-relaxed -ml-0.5 border-l-2 ${activeSection === heading.id
                                        ? "text-blue-700 border-blue-700 font-medium bg-blue-50/50"
                                        : "text-gray-600 border-transparent hover:text-blue-700 hover:border-blue-300"
                                        }`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                                        setActiveSection(heading.id);
                                    }}
                                >
                                    <span className="font-mono text-xs text-gray-400 mr-2 font-medium">{(i + 1).toString().padStart(2, '0')}</span>
                                    {heading.text}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* Main Content Column */}
                <article className="min-w-0 space-y-20">
                    {/* Intro / Performance Summary */}
                    <section>
                        <div className="relative aspect-[16/9] w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                            <Image
                                src="/images/case-studies/n-kolay/performance-summary.png"
                                alt="2024-2025 Karşılaştırmalı Toplam SEO Performans Özeti"
                                fill
                                priority
                                className="object-contain"
                            />
                        </div>
                    </section>

                    {/* Strategic Approach */}
                    <section id="stratejik-yaklasim" className="scroll-mt-32">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Semantik Dominasyon & Topikal Otorite</h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Sadece anahtar kelime bazlı değil, <strong>"Entity" (Varlık) tabanlı</strong> bir SEO kurgusuyla %68 büyüme yakaladık.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-sm">✓</span>
                                        <span className="text-gray-600 leading-relaxed"><strong>Kapsama Alanı:</strong> Sadece marka aramalarında değil, kullanıcının ihtiyaç anı (Micro-Moments) sorgularının tamamında görünürlük.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">✓</span>
                                        <span className="text-gray-600 leading-relaxed"><strong>Intent Matching:</strong> Bilgi arama niyetinden satın almaya kadar tüm huni stratejik olarak kapsandı.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                                <Image
                                    src="/images/case-studies/n-kolay/semantic-growth.png"
                                    alt="Semantik Büyüme Grafiği"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Top 3 Rankings */}
                    <section id="siralamalar" className="scroll-mt-32">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Rekabetin Zirvesinde Yerimizi Aldık</h2>
                        <p className="text-gray-600 text-lg mb-12">Sektörün en yüksek hacimli ve en zorlu sorgularında, sadece ilk sayfada değil, <strong>ilk 3 sırada</strong> kalıcı hakimiyet kurduk.</p>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative aspect-[4/3] bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                                <Image
                                    src="/images/case-studies/n-kolay/top3-growth.png"
                                    alt="Top 3 Kelime Artış Grafiği"
                                    fill
                                    className="object-contain p-6"
                                />
                            </div>
                            <div className="space-y-6">
                                <div className="p-6 border-l-4 border-green-500 bg-green-50 rounded-r-xl">
                                    <span className="block text-4xl font-bold text-green-600 mb-2">%65 Artış</span>
                                    <span className="text-gray-700 font-medium">Top 3 Pozisyonda Yer Alan Kelime Adedinde</span>
                                </div>
                                <div className="p-6 border-l-4 border-blue-500 bg-blue-50 rounded-r-xl">
                                    <span className="block text-4xl font-bold text-blue-600 mb-2">+988 Kelime</span>
                                    <span className="text-gray-700 font-medium">Rekabetçi Sorgularda Kazanılan Yeni Sıralama</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* High Intent - Dark Card */}
                    <section id="kredi-dikey" className="scroll-mt-32">
                        <div className="bg-gray-900 text-white rounded-3xl p-10 relative overflow-hidden shadow-2xl">
                            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-6">
                                        Kredi Dikeyinde Tam Hakimiyet
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed mb-8">
                                        Aktif Bank'ın köklü otoritesini harekete geçirerek, <strong>"Acil, Hızlı, Anında Nakit"</strong> gibi dönüşüm odaklı (High Intent) aramalarda %2.193 gibi rekor bir görünürlük artışı sağladık.
                                    </p>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                                            <h4 className="text-green-400 font-bold mb-1">Jenerik Trafik</h4>
                                            <p className="text-xs text-gray-300">Kredi ve varyasyon sorgularında ilk sayfa.</p>
                                        </div>
                                        <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                                            <h4 className="text-green-400 font-bold mb-1">Yüksek Dönüşüm</h4>
                                            <p className="text-xs text-gray-300">Satın alma niyeti en yüksek kullanıcıları hedefleme.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/case-studies/n-kolay/aktif-bank-dominance.png"
                                        alt="Aktif Bank Dominance"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Technical Backbone */}
                    <section id="teknik-yapi" className="scroll-mt-32">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Backbone</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl">⚡️</div>
                                <h3 className="font-bold text-gray-900 mb-3">JS & SSR</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Botlar için %100 erişilebilir içerik yapısı ve tarama bütçesi optimizasyonu.</p>
                            </div>
                            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6 text-xl">🔗</div>
                                <h3 className="font-bold text-gray-900 mb-3">Link Architecture</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Duplicate content'i önleyen, link suyunu doğru dağıtan canonical yapısı.</p>
                            </div>
                            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6 text-xl">📊</div>
                                <h3 className="font-bold text-gray-900 mb-3">Log Analysis</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Bot davranışlarını izleyerek bütçeyi "money page" sayfalarına yönlendirme.</p>
                            </div>
                        </div>
                    </section>

                    {/* Results - Dark Card */}
                    <section id="sonuc" className="scroll-mt-32">
                        <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-10 shadow-2xl">
                            <div className="mb-12">
                                <span className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-4 block">
                                    PROJE ÇIKTILARI
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold">
                                    SONUÇ: Dijital Otorite ve Sürdürülebilir Büyüme
                                </h2>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Marka Görünürlüğünde Sıçrama</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            N Kolay, finans dikeyinde sadece bir "oyuncu" olmaktan çıkıp, arama motorlarında dominasyon kuran bir <strong>"Dijital Otorite"</strong> konumuna yükseldi.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Kalıcı SERP Hakimiyeti</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Varlık sebebimiz olan "Dijital Kredi", "Dijital Bankacılık" ve yüksek rekabetli türev sorgularda, anlık değil <strong>sürdürülebilir şekilde ilk 3 sırada</strong> yerimiz sağlamlaştırıldı.
                                        </p>
                                    </div>
                                </div>

                                {/* Bonus Metrics */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                                    <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-wider rounded-full mb-6">
                                        Ticari Etki
                                    </div>
                                    <div className="space-y-6">
                                        <div>
                                            <div className="text-4xl font-bold text-green-400 mb-1">%12,39</div>
                                            <p className="text-gray-400 text-sm">Organik <strong>Kredi Başvurularında</strong> Artış</p>
                                        </div>
                                        <div className="w-full h-px bg-white/10" />
                                        <div>
                                            <div className="text-4xl font-bold text-green-400 mb-1">%23</div>
                                            <p className="text-gray-400 text-sm">Organik <strong>Onaylanan Kredi</strong> Artışı</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    );
}
