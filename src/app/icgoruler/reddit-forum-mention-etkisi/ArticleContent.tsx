/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const headings = [
    { id: "semantik-oy", text: '1. "Semantik Oy" (Semantic Vote) Olarak İşlenir' },
    { id: "geo-erken-asamasi", text: '2. GEO’nun "Erken Aşaması"dır (Pre-GEO)' },
    { id: "yeniden-gorunme", text: '3. "Yeniden Görünme" (Resurface) Süresini Uzatır' },
    { id: "perplexity-onceligi", text: '4. Perplexity ve AI Search Modellerinin Önceliğidir' },
];

export default function ArticleContent() {
    // Determine the initial active section safely
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        // Set initial active section after mount
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
                <Link href="/icgoruler" className="hover:text-blue-600 transition-colors">İçgörüler</Link>
                <span className="text-gray-200">/</span>
                <span className="text-gray-600 font-bold truncate">Reddit ve Forumlardaki Mention'lar</span>
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
                <article className="min-w-0">
                    {/* Lead Description */}
                    <p className="text-xl text-gray-700 leading-relaxed font-light mb-12 pl-6 border-l-4 border-blue-600">
                        Reddit ve forumlardaki mention’lar (bahsedilmeler), GEO (Generative Engine Optimization) başarısı için kritik bir <strong className="font-bold text-gray-900">"Güven Doğrulama"</strong> mekanizması olarak çalışır.
                    </p>

                    {/* Content Body */}
                    <div
                        className="prose prose-lg max-w-none 
                            prose-headings:font-sans prose-headings:font-bold prose-headings:text-foreground
                            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight
                            prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-gray-800
                            prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3 prose-h4:text-gray-900 prose-h4:font-bold
                            prose-p:font-sans prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-6
                            prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2
                            prose-li:text-gray-600 prose-li:leading-relaxed
                            prose-strong:font-bold prose-strong:text-gray-900
                            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                            mb-16"
                    >
                        <p>
                            Bu platformlardaki varlık, markanızı yapay zeka gözünde "anonim bir isimden" "güvenilir bir kaynağa" (Citation) dönüştüren sürecin başlangıcıdır.
                        </p>

                        <h2 id="semantik-oy">1. "Semantik Oy" (Semantic Vote) Olarak İşlenir</h2>
                        <p>
                            Yapay zeka modelleri, Reddit, Quora veya sektörel forumlardaki konuşmaları, markanın güvenilirliğine dair birer "oy" olarak kabul eder. Kaynaklara göre, sektörel portallardaki doğal mention’lar, AI modelleri tarafından "semantik oy" olarak yorumlanır ve bu durum görünürlüğü doğrudan artırır.
                        </p>
                        <p>
                            Bu platformlar, AI için manipüle edilmesi zor, gerçek insan deneyimini yansıtan veri madenleridir.
                        </p>

                        <h2 id="geo-erken-asamasi">2. GEO’nun "Erken Aşaması"dır (Pre-GEO)</h2>
                        <p>
                            GEO’nun nihai hedefi, AI tarafından "kaynak olarak gösterilmek"tir (Citation). Ancak mention, bu sürecin ilk adımıdır. AI, markanızı önce Reddit gibi alanlarda "tanır" (mention), güven skorunu oluşturur ve ardından onu otoriter bir kaynak olarak listelemeye (citation) başlar.
                        </p>
                        <p>
                            Yani forumlarda konuşulmak, AI’ın sizi referans listesine alması için gereken ön koşuldur.
                        </p>

                        <h2 id="yeniden-gorunme">3. "Yeniden Görünme" (Resurface) Süresini Uzatır</h2>
                        <p>
                            Reddit ve forumlarda adınızın geçmesi, AI hafızasındaki kalıcılığınızı artırır. Araştırmalara göre, mention edilen markalar arama sonuçlarında <strong>%40 daha uzun süre</strong> yeniden görünmeye (resurface) devam eder.
                        </p>
                        <p>
                            Bu, markanızın tek seferlik bir cevap olmaktan çıkıp, AI'ın sık başvurduğu bir bilgi parçasına dönüşmesini sağlar.
                        </p>

                        <h2 id="perplexity-onceligi">4. Perplexity ve AI Search Modellerinin Önceliğidir</h2>
                        <p>
                            Her AI modelinin veri kaynağı tercihi farklıdır. Özellikle Perplexity gibi modellerin "topluluk içeriğine" (community content) özel bir ağırlık verdiği bilinmektedir.
                        </p>
                        <p>
                            Araştırmalar, AI sonuçlarının önemli bir kısmının Reddit, forumlar ve niş sitelerden beslendiğini göstermektedir. Bu platformlarda yer almak, özellikle Perplexity gibi şeffaf kaynak gösteren motorlarda GEO başarısını artırır.
                        </p>

                        <div className="bg-gray-50 border-l-4 border-blue-600 p-8 rounded-r-xl my-12 not-prose">
                            <h4 className="text-xl font-bold text-foreground mb-4">Özetle Stratejik Etki</h4>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Reddit ve forumlardaki mention'lar, AI modellerine <strong>"Algısal Güven" (Perceptual Trust)</strong> sağlar. Bu güven oluştuğunda, AI markanızı sadece ismen geçirmekle (AEO) kalmaz, sizi doğrulanmış bir bilgi kaynağı olarak linkleyerek (GEO) kullanıcıya sunar.
                            </p>
                        </div>
                    </div>

                    {/* Footer / Share / Connect */}
                    <div className="border-t border-gray-100 mt-16 pt-8">
                        <Link href="/icgoruler" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-foreground transition-colors">
                            ← Tüm İçgörülere Dön
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
