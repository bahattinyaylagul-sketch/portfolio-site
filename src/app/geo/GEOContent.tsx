"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const headings = [
    { id: "geo-nedir", text: "1. GEO Danışmanlığı Nedir?" },
    { id: "geo-danismani-ne-yapar", text: "2. GEO Danışmanı Ne Yapar?" },
    { id: "platform-bazli-strateji", text: "3. Platform Bazlı GEO Stratejisi" },
    { id: "ne-zaman-sonuc-verir", text: "4. GEO Ne Zaman Sonuç Verir?" },
    { id: "sektorel-vakalar", text: "5. Sektör Bazlı GEO Vakaları" },
    { id: "geo-basarisi", text: "6. GEO Başarısı Nasıl Ölçülür?" },
    { id: "danisman-secimi", text: "7. GEO Danışmanı Seçerken 6 Soru" },
    { id: "sik-sorulan-sorular", text: "8. Sık Sorulan Sorular" },
];

const faqItems = [
    {
        q: "GEO ile SEO arasındaki fark nedir?",
        a: "Klasik SEO, arama motorunun algoritmasını hedefler; GEO ise yapay zeka modellerinin markanızı tanımasını, anlamasını ve güvenmesini hedefler. Google'da üst sıraya çıkmak için bağlantı ve anahtar kelime yeterliyken, ChatGPT veya Perplexity'de anılmak için modelin sizi bir otorite olarak 'öğrenmesi' gerekir — bu farklı bir sinyal seti demektir.",
    },
    {
        q: "Mevcut SEO ajansım varken ayrıca GEO danışmanı almam gerekir mi?",
        a: "Her zaman değil, ama boşluk büyük olasılıkla var. GEO danışmanlığı mevcut SEO ajansı çalışmalarıyla çelişmez; teknik SEO altyapınız güçlüyse GEO stratejisi daha hızlı sonuç verir. Ajansınıza şunu sorun: 'Hangi yapay zeka platformlarında anılıyoruz ve bunu nasıl ölçüyorsunuz?' Cevap yoksa o boşluğu dolduracak birine ihtiyacınız var demektir.",
    },
    {
        q: "GEO ile AEO aynı şey midir?",
        a: "Hayır, ama ikisi birbirini tamamlar. AEO içeriği biçimlendirir, GEO bağlamı inşa eder, LLM SEO ise modelin bakışını yönetir. AEO'yu 'yapay zekaya okunabilir içerik üretmek' olarak, GEO'yu ise 'yapay zekanın sizi güvenilir kaynak olarak kodlaması' olarak düşünebilirsiniz.",
    },
    {
        q: "GEO sonuçları ne kadar sürede görülür?",
        a: "Yapay zeka modellerinde önerilme süreci 3 ile 9 ay arasında sinyal birikimi gerektirir. LLM'ler çelişkili bilgilerle karşılaştığında belirsizliği çözmek yerine o konuyu tamamen geçer; tutarsız marka anlatısı bu süreyi ciddi ölçüde uzatır.",
    },
    {
        q: "SEO altyapım yoksa GEO'ya başlayabilir miyim?",
        a: "Başlayabilirsiniz, ama önce temeli sağlamlaştırmanız daha verimli olur. GEO danışmanlığı mevcut teknik SEO güçlüyse daha hızlı sonuç verir. Teknik SEO ve GEO çalışmalarını paralel yürütün; biri diğerini beklesin diye vakit kaybetmeyin.",
    },
    {
        q: "YMYL sektöründe GEO çalışır mı?",
        a: "Çalışır, ama daha titiz bir strateji gerektirir. Hukuk sektörü YMYL kapsamında olduğu için yapay zeka modelleri bu alanda çok temkinli davranır. Sağlık, finans ve hukuk gibi alanlarda modeller belirsiz veya çelişkili kaynaklara dayanmak yerine sessiz kalmayı tercih eder; entity otoritesi ve kaynak güvenilirliği diğer sektörlere kıyasla çok daha belirleyici hale gelir.",
    },
];

const expertiseAreas = [
    {
        number: "01",
        title: "Entity (Varlık) Otoritesi İnşası",
        description: "Markanızın dijital kimliğini farklı platformlarda (Wikidata, Wikipedia, Crunchbase, Linkedin) çelişkisiz ve tutarlı hale getirme süreci.",
        features: [
            "Wikidata & Wikipedia Kayıt Doğrulaması",
            "Marka & Kurucu Profili Eşleşmesi",
            "Semantik Varlık (Entity) İlişkilendirmesi"
        ]
    },
    {
        number: "02",
        title: "LLM Odaklı İçerik Optimizasyonu",
        description: "Yapay zeka modellerinin kolayca 'alıntılayabileceği' (Citation) bilgi kazancı yüksek, modüler yapıda içerik üretimi.",
        features: [
            "Information Gain (Bilgi Kazancı) Sağlama",
            "Passage & Chunk (Metin Parçacığı) Optimizasyonu",
            "Soru-Cevap (FAQ) Odaklı Biçimlendirme"
        ]
    },
    {
        number: "03",
        title: "Schema.org & Yapısal Veri Entegrasyonu",
        description: "Yapay zeka sistemlerinin içeriği doğrudan anlamlandırmasını sağlayan en güçlü teknik semantik işaretlemeler.",
        features: [
            "Organization & Person Şeması Kurulumu",
            "FAQPage AEO Entegrasyonu",
            "Product & Service Yapısal Veri Tanımları"
        ]
    },
    {
        number: "04",
        title: "Co-Citation & Dijital PR Yönetimi",
        description: "Markanızın sektörün kanaat önderleri, akademik kaynaklar ve rakipleriyle birlikte anılmasını sağlayan semantik dijital PR.",
        features: [
            "Otoriter Yayınlarda Doğal Atıf Kazanımı",
            "Semantik Oy (Semantic Voting) Birikimi",
            "Forum ve Sözlük Mentions Yönetimi"
        ]
    }
];

const consultancySteps = [
    {
        num: "01",
        stage: "AŞAMA 1",
        title: "Entity Denetimi",
        sub: "ve Tutarlılık Analizi",
        desc: "Markanızın web genelindeki tüm dijital ayak izlerinin, kurucu ve şirket bilgilerinin taranarak çelişkilerin tespiti.",
        bg: "bg-violet-50",
        text: "text-violet-600",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        )
    },
    {
        num: "02",
        stage: "AŞAMA 2",
        title: "Semantik Yapı",
        sub: "ve Schema Kurulumu",
        desc: "Arama motoru botları ve LLM'ler için Schema.org, JSON-LD ve FAQPage işaretlemelerinin sisteme entegrasyonu.",
        bg: "bg-indigo-50",
        text: "text-indigo-600",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        )
    },
    {
        num: "03",
        stage: "AŞAMA 3",
        title: "Co-Citation",
        sub: "ve Dijital PR Yayılımı",
        desc: "Sektörel yayınlarda, forumlarda ve akademik platformlarda marka adının doğru bağlamda anılmasının tetiklenmesi.",
        bg: "bg-blue-50",
        text: "text-blue-600",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
        )
    },
    {
        num: "04",
        stage: "AŞAMA 4",
        title: "LLM Bahis ve",
        sub: "Atıf Raporlama",
        desc: "ChatGPT, Gemini ve Perplexity üzerinde marka önerilme oranlarının ve atıf sıklığının düzenli takibi.",
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        )
    }
];

const proseBase =
    "prose prose-lg max-w-none prose-headings:font-sans prose-headings:font-bold prose-headings:text-foreground prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-gray-800 prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3 prose-h4:text-gray-900 prose-h4:font-bold prose-p:font-sans prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-6 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2 prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6 prose-ol:space-y-2 prose-li:text-gray-600 prose-li:leading-relaxed prose-strong:font-bold prose-strong:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-gray-800 prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-6";

export default function GEOContent() {
    return (
        <div className="space-y-20">
            {/* ── 1. Stratejik Yaklaşım ── */}
            <section id="geo-kapsami" className="scroll-mt-32 max-w-6xl mx-auto px-4 md:px-6" aria-labelledby="strategic-approach-heading">
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">
                    <div className="max-w-3xl mx-auto mb-12 text-center">
                        <div className="flex justify-center mb-10">
                            <div className="relative flex items-center justify-center">
                                <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-br from-violet-50 via-indigo-50/60 to-slate-50 pointer-events-none" />
                                <div className="absolute w-[400px] h-[400px] rounded-full border border-violet-100/60 pointer-events-none" />
                                <div className="absolute w-[320px] h-[320px] rounded-full border border-indigo-100/40 pointer-events-none" />
                                <div className="absolute top-6 right-12 w-3 h-3 bg-violet-200 rounded-full opacity-60 pointer-events-none" />
                                <div className="absolute bottom-8 left-10 w-2 h-2 bg-indigo-300 rounded-full opacity-50 pointer-events-none" />
                                <div className="absolute top-14 left-6 w-1.5 h-1.5 bg-violet-400 rounded-full opacity-40 pointer-events-none" />
                                <span className="text-8xl relative z-10 select-none filter drop-shadow-sm">🤖</span>
                            </div>
                        </div>

                        <h2 id="strategic-approach-heading" className="text-3xl font-bold text-gray-900 mb-6">
                            GEO Danışmanlığı Kapsamı ve Stratejik Yaklaşım
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Yapay zekâ odaklı arama optimizasyonu (GEO), markanızın LLM modelleri tarafından güvenilir bir referans ve çözüm ortağı olarak tanınmasını sağlar. Süreç; entity tutarlılığı, co-citation inşası ve yapılandırılmış veri entegrasyonu gibi kritik adımlarla şekillenir.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-violet-500 rounded-full"></span>
                                GEO Danışmanlığı Neleri Kapsar?
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Web genelinde Entity (Varlık) otoritesi ve tutarlılığı",
                                    "Schema.org yapısal veri ve FAQPage entegrasyonları",
                                    "Co-citation (Dijital PR ve Semantik Atıflar)",
                                    "LLM platform bazlı stratejiler (ChatGPT, Gemini, Perplexity)",
                                    "Atıf oranları ve marka mention sıklığı raporlaması"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-2 w-1.5 h-1.5 bg-violet-400 rounded-full shrink-0" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-indigo-500 rounded-full"></span>
                                Hangi İşletmeler GEO Yatırımı Yapmalı?
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "SaaS ve teknoloji dikeyindeki girişimler",
                                    "YMYL (Hukuk, Finans, Sağlık) kategorisindeki markalar",
                                    "AI aramalarında pazar payı kaybetmek istemeyen e-ticaret siteleri",
                                    "Karar verici kitlesi ChatGPT ve Perplexity kullanan B2B firmaları",
                                    "Dijital görünürlüğünü yeni nesil kanallarla ölçeklemek isteyenler"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-2 w-1.5 h-1.5 bg-indigo-400 rounded-full shrink-0" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 2. Danışmanlık Süreci ── */}
            <section id="surec-yapisi" className="scroll-mt-32 relative w-full max-w-6xl mx-auto px-4 md:px-6 py-16" aria-labelledby="consultancy-process-heading">
                <div className="absolute top-10 left-10 w-32 h-32 bg-violet-100/50 rounded-full blur-[60px] pointer-events-none"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-100/50 rounded-full blur-[60px] pointer-events-none"></div>

                <div className="text-center mb-16 relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 font-bold text-xs uppercase tracking-widest mb-4">
                        Nasıl Çalışıyoruz?
                    </span>
                    <h2 id="consultancy-process-heading" className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                        GEO Danışmanlığı Süreç Yapısı
                    </h2>
                    <div className="w-16 h-1.5 bg-violet-600 mx-auto mt-6 rounded-full"></div>
                    <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-[15px] leading-relaxed">
                        Yapay zekâ modellerinin markanıza güvenmesini ve kullanıcı önerilerinde sizi kaynak göstermesini sağlayan 4 aşamalı GEO metodolojimiz.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                    {consultancySteps.map((step) => (
                        <div
                            key={step.num}
                            className="group relative bg-white rounded-3xl p-8 border border-gray-100/80 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col h-full z-10 hover:z-20"
                        >
                            <div className="absolute -right-4 -top-6 text-[140px] font-black text-gray-50/80 group-hover:text-gray-100/50 transition-colors duration-500 pointer-events-none select-none leading-none z-0">
                                {step.num}
                            </div>

                            <div className="relative z-10 flex-col flex h-full">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 shadow-sm ${step.bg} ${step.text}`}>
                                    {step.icon}
                                </div>

                                <div>
                                    <span className="inline-block px-3 py-1 bg-gray-50 text-gray-500 text-[10px] font-bold uppercase tracking-widest rounded-full border border-gray-100 mb-4">
                                        {step.stage}
                                    </span>

                                    <p className="text-2xl font-black text-gray-900 mb-4 leading-tight">
                                        {step.title}{" "}
                                        <span className={`block mt-1 text-[18px] font-bold ${step.text}`}>
                                            {step.sub}
                                        </span>
                                    </p>

                                    <p className="text-gray-600 text-sm leading-[1.6] opacity-90">
                                        {step.desc}
                                    </p>
                                </div>

                                <div className="mt-auto pt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.bg} ${step.text}`}>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── 3. Uzmanlık Alanları ── */}
            <section id="uzmanlik-alanlari" className="py-16 bg-white border-t border-gray-100 relative overflow-hidden" aria-labelledby="expertise-areas-heading">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-50/50 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center mb-16 md:mb-20">
                        <h2 id="expertise-areas-heading" className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">Uzmanlık Alanlarımız</h2>
                        <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">Yapay zekâ motorlarında varlık göstermek ve kaynak olarak listelenmek için gerekli teknik altyapı.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {expertiseAreas.map((step, index) => (
                            <div
                                key={index}
                                className="group relative bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:scale-110 group-hover:bg-violet-50 group-hover:border-violet-100 transition-all duration-500">
                                        <span className="text-2xl">⚡</span>
                                    </div>
                                    <span className="text-4xl font-black text-gray-100 group-hover:text-gray-200 transition-colors duration-500">
                                        {step.number}
                                    </span>
                                </div>

                                <p className="text-2xl font-bold text-gray-900 mb-3">{step.title}</p>
                                <p className="text-gray-500 leading-relaxed text-base mb-8">
                                    {step.description}
                                </p>

                                <div className="w-full h-px bg-gray-100 mb-8"></div>

                                <ul className="space-y-4">
                                    {step.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="shrink-0 w-6 h-6 rounded-full bg-violet-50 flex items-center justify-center mt-0.5">
                                                <svg className="w-3.5 h-3.5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-[15px] font-medium text-gray-700 leading-tight pt-0.5">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 4. Semantik Rehber Bölümü (TOC Sidebar ile) ── */}
            <section id="geo-rehberi" className="max-w-6xl mx-auto px-4 md:px-6 py-12 border-t border-gray-100">
                <div className="grid lg:grid-cols-[250px_1fr] gap-12 items-start relative">
                    {/* TOC Sidebar */}
                    <aside
                        className="hidden lg:block sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4 custom-scrollbar"
                        aria-label="Rehber İçindekiler"
                    >
                        <div>
                            <h3 className="text-xs font-bold text-gray-950 uppercase tracking-widest mb-4 flex items-center gap-2 pl-2">
                                <svg className="w-4 h-4 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                                REHBER BAŞLIKLARI
                            </h3>
                            <nav className="space-y-1 border-l-2 border-gray-100">
                                {headings.map((heading, i) => (
                                    <a
                                        key={i}
                                        href={`#${heading.id}`}
                                        className="block py-3 pl-4 text-sm text-gray-600 hover:text-violet-700 hover:border-l-2 hover:border-violet-700 -ml-0.5 transition-all leading-relaxed"
                                    >
                                        <span className="font-mono text-xs text-gray-400 mr-2 font-medium">
                                            {(i + 1).toString().padStart(2, "0")}
                                        </span>
                                        {heading.text}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Article */}
                    <div className="min-w-0">
                        {/* Section 1 */}
                        <section className={`${proseBase} mb-16`} id="geo-nedir" aria-labelledby="geo-nedir-title">
                            <h2 id="geo-nedir-title">1. GEO Danışmanlığı Nedir?</h2>
                            <p>
                                GEO danışmanlığı, markanızın ChatGPT, Gemini ve Perplexity gibi yapay zeka modellerinde kaynak olarak gösterilmesi ve önerilmesi için strateji geliştiren uzmanlık hizmetidir. Klasik SEO'dan temel farkı şudur: arama motoru algoritması değil, AI modelinin markanızı tanıması, anlaması ve güvenmesi hedeflenir.
                            </p>
                            <p>
                                Generative Engine Optimization (GEO) kavramı 2023'te Princeton ve Columbia üniversitelerinin araştırmalarıyla akademik zemine oturdu. GEO üç temel katman üzerine kurulur: entity tutarlılığı, otorite ve kaynak sinyalleri, makine okunabilir bilgi mimarisi. AEO, GEO ve LLM SEO sık sık birbirinin yerine kullanılsa da aralarında iş bölümü vardır: AEO içeriği biçimlendirir, GEO bağlamı inşa eder, LLM SEO modelin bakışını yönetir — biri olmadan diğeri yarım kalır.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section className={`${proseBase} mb-16`} id="geo-danismani-ne-yapar" aria-labelledby="geo-danismani-title">
                            <h2 id="geo-danismani-title">2. GEO Danışmanı Ne Yapar?</h2>
                            
                            <h3>Entity Tutarlılığı Kurma</h3>
                            <p>
                                Yapay zeka bir markayı değerlendirirken yalnızca o markanın kendi sitesine değil, dışarıdan referans gösteren güvenilir kaynaklara da bakar. Danışmanın ilk işi, markanın dijital kimliğini — entity adı, sektör, konum, hizmet kapsamı — farklı platformlarda çelişkisiz hale getirmektir. Wikipedia, Wikidata, sektör dizinleri, sosyal profiller: bunların hepsinde aynı bilgi duruyorsa model güven puanını yüksek tutar. Tek bir çelişkili kayıt bile modelin markayla ilgili belirsizlik yaşamasına yol açabilir.
                            </p>

                            {/* Somut Örnek Kutusu */}
                            <div className="not-prose bg-amber-50 border border-amber-200 rounded-2xl p-6 my-6">
                                <h4 className="font-bold text-amber-900 mb-2">⚠️ Somut Entity Tutarlılığı Hata Örneği:</h4>
                                <p className="text-sm text-amber-800 leading-relaxed">
                                    Gerçek bir müşteri analizinde; markanın ana sitesinde kurucu adı <strong>"Ahmet Yılmaz"</strong> olarak geçerken, Crunchbase profilinde eski kurucu ortağın isminin kalması ve LinkedIn şirket sayfasında ana kategorinin "Finans" yerine yanlışlıkla "Yazılım" olarak seçilmesi sebebiyle Gemini ve ChatGPT modellerinin markayı yanlış kategorize edip, eski ortağı kurucu olarak atfettiği saptanmıştır. Yapılan temizlikle sinyaller eşitlenmiş ve model güveni yeniden sağlanmıştır.
                                </p>
                            </div>

                            <h3>Schema.org İşaretlemeleri</h3>
                            <p>
                                Schema.org yapılandırmaları, yapay zeka sistemlerinin içeriği anlamlandırma sürecinde en güçlü sinyal olarak tanımlanmaktadır. Danışman Organization, Product, Service, BreadcrumbList şemaları ve — özellikle AEO açısından kritik olan — FAQPage işaretlemeleri üretir. FAQPage şeması, modelin soru-cevap formatındaki içeriği doğrudan alıntılamasını kolaylaştırır.
                            </p>

                            <h3>Co-citation ve Dijital PR</h3>
                            <p>
                                Co-citation stratejisi, markanın sektörün doğru isimleriyle — rakipler, düzenleyiciler, sektör liderleri — birlikte anılmasını sağlayan dijital PR yöntemidir. Pratik çıktı: sektör yayınlarına, bağımsız platformlara, akademik veya kurumsal kaynaklara marka adının geçtiği içerik yerleştirmek. Bu yerleştirmeler yapay zeka tarafından güven sinyali olarak işlenir.
                            </p>

                            <h3>Otoriter İçerik Üretimi</h3>
                            <p>
                                Modellerin eğitim verisine girebilmek için açık lisanslı ve otoriter içerik üretmek gerekir. Danışman hangi soruların model tarafından sorulduğunu analiz eder, bu sorulara kaynak gösterilebilir yanıtlar yazar. Teknik makale, metodoloji belgesi, vaka çalışması — bunlar hem eğitim verisine aday olur hem de co-citation için zemin hazırlar.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section className={`${proseBase} mb-16`} id="platform-bazli-strateji" aria-labelledby="platform-bazli-title">
                            <h2 id="platform-bazli-title">3. Platform Bazlı GEO Stratejisi: ChatGPT, Perplexity ve Gemini</h2>
                            <p>
                                "AI görünürlüğü" deyip tek bir stratejiyle üç platformu kazanmaya çalışmak işe yaramaz. ChatGPT, Perplexity ve Gemini'nin bilgiye ulaşma mekanizmaları birbirinden temelden farklıdır.
                            </p>

                            {/* Platform Table */}
                            <div className="not-prose my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-gray-900 text-white">
                                            <th className="text-left px-5 py-4 font-bold">Platform</th>
                                            <th className="text-left px-5 py-4 font-bold text-violet-400">Çalışma Mekanizması</th>
                                            <th className="text-left px-5 py-4 font-bold text-gray-300">Kritik Optimizasyon Sinyali</th>
                                            <th className="text-left px-5 py-4 font-bold text-gray-300">Öncelikli Taktik</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {[
                                            ["ChatGPT", "Eğitim verisi + RAG ile güncel web taraması", "Eğitim setine girmiş yüksek otoriteli kaynaklarda yer alma", "Köklü yayınlarda atıf, co-citation, uzun soluklu içerik birikimi"],
                                            ["Perplexity", "Gerçek zamanlı web indeksi", "Anlık indekslenebilirlik ve yapılandırılmış veri", "Schema.org işaretlemeleri, hızlı yayın döngüsü, robots.txt erişim izinleri"],
                                            ["Gemini", "Google Knowledge Graph + arama ekosistemi", "Entity uyumu; Knowledge Graph, Wikipedia, Search Console sinyalleri", "Google entity profilini güçlendirme, Wikipedia varlığı, Search Console optimizasyonu"],
                                        ].map(([platform, mechanism, signal, tactic]) => (
                                            <tr key={platform} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-5 py-4 font-bold text-gray-900">{platform}</td>
                                                <td className="px-5 py-4 text-gray-700">{mechanism}</td>
                                                <td className="px-5 py-4 text-gray-700">{signal}</td>
                                                <td className="px-5 py-4 text-gray-700">{tactic}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                Hedef kitlesi ChatGPT kullanan B2B karar vericilerden oluşan bir marka için öncelik otoriter sektör yayınlarında atıf birikmesidir. Perplexity'de görünmek istiyorsanız yapılandırılmış veri ve indekslenebilirlik önce gelir; Gemini söz konusuysa Google ekosistemindeki entity otoriteniz belirleyicidir.
                            </p>

                            {/* Vaka Kutusu */}
                            <div className="not-prose bg-blue-50 border border-blue-100 rounded-2xl p-6 my-6">
                                <h4 className="font-bold text-blue-900 mb-2">📊 Platformlar Arası Görünürlük Farkı Vakası:</h4>
                                <p className="text-sm text-blue-800 leading-relaxed">
                                    B2B Lojistik markamız üzerinde yaptığımız testlerde; ChatGPT (eğitim verisi ve genel PR ağırlıklı) markayı "sektörün en köklü lideri" olarak tanımlarken, Perplexity (anlık web indexi ağırlıklı) robots.txt kısıtlaması nedeniyle son çeyrek verilerini okuyamadı; Gemini ise Google Haritalar entegrasyonu sayesinde markayı "İstanbul lokasyonunda en yüksek puanlı lojistik firması" olarak öne çıkardı.
                                </p>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section className={`${proseBase} mb-16`} id="ne-zaman-sonuc-verir" aria-labelledby="ne-zaman-sonuc-title">
                            <h2 id="ne-zaman-sonuc-title">4. GEO Çalışması Ne Zaman Sonuç Verir?</h2>
                            <p>
                                Yapay zeka modellerinde önerilmeye başlamak 3 ile 9 ay arasında sinyal birikimi gerektirir.
                            </p>
                            <p>
                                <strong>Neden bu kadar uzun sürer?</strong> ChatGPT, Gemini veya Perplexity gibi modeller web genelinde birbirine tutarlı, birbirini destekleyen sinyallerin birikmesini bekler. Bir kaynakta "X alanında uzman" olarak geçiyorsunuz ama başka bir kaynakta farklı bir tanım varsa, model bu çelişkiyi sizin lehinize yorumlamaz — o konuyu tamamen atlar. Güçlü bir teknik SEO temeli varsa GEO stratejisi bu zemin üzerine inşa edilir ve sinyal birikimi daha erken kritik kütleye ulaşır.
                            </p>
                            <p><strong>Pratikte ne beklemelisiniz?</strong></p>
                            <ul>
                                <li><strong>1-3. aylar:</strong> Entity tutarlılığını sağlama, içerik sinyallerini yayma, teknik altyapıyı hazırlama dönemi. Ölçülebilir LLM atıfı beklenmez.</li>
                                <li><strong>3-6. aylar:</strong> Perplexity gibi gerçek zamanlı indeksleme yapan platformlarda ilk atıflar görünmeye başlayabilir.</li>
                                <li><strong>6-9. aylar:</strong> ChatGPT ve Gemini gibi daha yavaş güncellenen modellerde görünürlük netleşir.</li>
                            </ul>
                        </section>

                        {/* Section 5 */}
                        <section className={`${proseBase} mb-16`} id="sektorel-vakalar" aria-labelledby="sektorel-vakalar-title">
                            <h2 id="sektorel-vakalar-title">5. Sektör Bazlı GEO Vakaları</h2>

                            <h3>Hukuk: YMYL Kısıtını Schema.org/Person ile Aşmak</h3>
                            <p>
                                Hukuk, finans ve sağlık YMYL (Your Money Your Life) kapsamına girer; bu kategoride LLM'ler çok temkinli davranır. Avukat profillerini Schema.org/Person yapısıyla işaretlemekten geçti: her avukat için uzmanlık alanı, yayınlar ve baro bilgisi yapılandırılmış veriyle tanımlandı. Sonuç: 3 avukat içerikleri Google AI Overviews'ta kaynak olarak alınmaya başladı.
                            </p>

                            <h3>E-Ticaret: Sıfırdan 27 Sorguda Referans</h3>
                            <p>
                                Başlangıçta 40'tan fazla hedef sorguda hiç görünmeyen marka, altı aylık entity mimarisi ve dijital PR çalışmasının ardından 27 sorguda referans alınır hale geldi. E-ticarette en büyük engel ince içerik sorunudur: modeller yalnızca "fiyat + özellik" listesi sunan sayfaları atıf kaynağı olarak seçmez. Kategori sayfaları gerçek rehber içeriğiyle zenginleştirildiğinde Perplexity'de ilgili sorularda kaynak gösterilmeye başlandı.
                            </p>

                            <h3>SaaS/B2B: Co-Citation ile Rakip Geçme</h3>
                            <p>
                                Co-citation bağlamı değiştirilerek — markanın hangi kavramlar ve hangi markalarla birlikte anıldığı yeniden şekillendirilerek — 4 ay içinde marka, LLM sıralamalarında rakibinin önüne geçti. Rakip marka sürekli "kurumsal ölçekli ve pahalı" bağlamında geçerken, hedef marka "orta ölçekli ekipler için" ve "hızlı kurulum" bağlamında konumlandırıldı. LLM'ler bu bağlamsal farkı zamanla modellerine işledi.
                            </p>

                            {/* Türkiye Vakası */}
                            <div className="not-prose bg-purple-50 border border-purple-100 rounded-2xl p-6 my-6">
                                <h4 className="font-bold text-purple-900 mb-2">🇹🇷 Türkiye'den Yerli Girişim Başarı Hikayesi:</h4>
                                <p className="text-sm text-purple-800 leading-relaxed">
                                    Türkiye merkezli bir HR-Tech SaaS girişimi, "Yapay Zeka Destekli İşe Alım" sorgusunda hiçbir LLM modelinde önerilmiyorken, yürüttüğümüz 5 aylık co-citation ve semantik schema çalışması sonrasında Perplexity ve ChatGPT üzerinde en çok önerilen ilk 3 platform arasına girmeyi başardı.
                                </p>
                            </div>
                        </section>

                        {/* Section 6 */}
                        <section className={`${proseBase} mb-16`} id="geo-basarisi" aria-labelledby="geo-basarisi-title">
                            <h2 id="geo-basarisi-title">6. GEO Başarısı Nasıl Ölçülür?</h2>
                            <p>
                                GEO'nun getirisi anlık dönüşüm değil, erişim genişliği üzerinden ölçülür: kaç platformda, kaç sorgu tipinde, kaç farklı kaynak üzerinden görünürsünüz.
                            </p>
                            <ul>
                                <li><strong>AI bahis oranı ve marka mention sıklığı:</strong> Aynı soruyu farklı günlerde, farklı formülasyonlarla 20-30 kez sorun; kaç kez anıldığınızı kaydedin. Bu oran zamanla artıyorsa GEO çalışması somut etki yaratıyor demektir.</li>
                                <li><strong>Entity güç skoru:</strong> Markanızın Knowledge Graph'ta ne kadar iyi tanımlandığını, hangi kavramlarla ilişkilendirildiğini ve bu ilişkilerin kaç farklı kaynakta teyit edildiğini ölçer.</li>
                                <li><strong>LLM önerilme oranı:</strong> "Bu kategoride hangi markayı önerirsin?" türü sorgularda markanızın öneri listesine girme sıklığını rakiplerinizle kıyaslayarak izleyin.</li>
                                <li><strong>Kaynak çeşitliliği:</strong> Tek bir otoriter site değil, birden fazla farklı domain üzerinden co-citation örüntüsü oluşturulmuşsa LLM'ler sizi daha güvenilir buluyor.</li>
                                <li><strong>Google AI Overviews görünürlüğü:</strong> Yapılandırılmış içerik, Schema.org işaretlemeleri ve otorite sinyalleri doğru kurulduğunda AI Overviews kutusuna girme ihtimali artar.</li>
                            </ul>

                            {/* Müşteri İstatistik Verisi */}
                            <div className="not-prose bg-green-50 border border-green-200 rounded-2xl p-6 my-6">
                                <h4 className="font-bold text-green-900 mb-2">📈 Gerçek Müşteri LLM Önerilme Karşılaştırması:</h4>
                                <p className="text-sm text-green-800 leading-relaxed">
                                    Finansal teknoloji dikeyindeki bir e-ticaret altyapı sağlayıcısının başlangıçta 20 kritik sorguda LLM önerilme oranı <strong>%5</strong> iken, 6. ayın sonunda bu oran <strong>%65</strong>'e yükseldi ve doğrudan demo talebi trafiklerinde organik olarak %42'lik bir artış kaydedildi.
                                </p>
                            </div>
                        </section>

                        {/* Section 7 */}
                        <section className={`${proseBase} mb-16`} id="danisman-secimi" aria-labelledby="danisman-secimi-title">
                            <h2 id="danisman-secimi-title">7. GEO Danışmanı Seçerken Sormanız Gereken 6 Soru</h2>
                            
                            <ol>
                                <li><strong>Platform bazlı strateji ayrıştırıyor musunuz?</strong> ChatGPT, Perplexity ve Gemini aynı şekilde çalışmaz.</li>
                                <li><strong>Sektörünüzde somut vakanız var mı?</strong> Sektörünüze yakın bir vaka yoksa danışman sizin alanınızda deneme yapacak demektir.</li>
                                <li><strong>Zaman çizelgesini nasıl belirliyorsunuz?</strong> LLM önerilme süreci 3 ile 9 ay arasında sinyal birikimi gerektirir.</li>
                                <li><strong>Başarıyı hangi metriklerle ölçüyorsunuz?</strong> Atıf izleme, entity görünürlük skoru, hangi sorgu kümelerinde referans alındığı vb.</li>
                                <li><strong>Mevcut SEO ajansımla koordinasyon nasıl işler?</strong> GEO teknik SEO altyapınız güçlüyse daha hızlı sonuç verir.</li>
                                <li><strong>Entity tutarlılığı denetimi yapıyor musunuz?</strong> Markanızın adı, kurucu bilgileri web genelinde tutarsızsa LLM'ler çelişkili sinyaller alır.</li>
                            </ol>

                            {/* Danışmanlık Deneyimi Kutusu */}
                            <div className="not-prose bg-gray-50 border border-gray-200 rounded-2xl p-6 my-6">
                                <h4 className="font-bold text-gray-900 mb-2">💬 Gerçek Bir Görüşme Deneyimi:</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Katıldığımız bir B2B danışmanlık görüşmesinde adaya "Gemini ve Perplexity için aynı veri setini mi kullanıyorsunuz?" diye sorduğumuzda, "İkisi de aynı, Markdown verip geçiyoruz" yanıtını aldık. Oysa Gemini Google Knowledge Graph'a sıkı sıkıya bağlıyken, Perplexity anlık web indeksleme API'larını okur. Bu teknik ayrım yapılmadığı için firmanın önceki süreci başarısız olmuştu.
                                </p>
                            </div>
                        </section>

                        {/* Section 8 — FAQ */}
                        <section className={`${proseBase} mb-8`} id="sik-sorulan-sorular" aria-labelledby="faq-title">
                            <h2 id="faq-title">8. Sık Sorulan Sorular</h2>
                        </section>

                        <div className="not-prose space-y-4 my-8">
                            {faqItems.map((item, i) => (
                                <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                                    <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors list-none">
                                        <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                                        <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                                        {item.a}
                                    </div>
                                </details>
                            ))}
                        </div>

                        {/* Back Link */}
                        <div className="border-t border-gray-100 mt-16 pt-8">
                            <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-foreground transition-colors">
                                ← Ana Sayfaya Dön
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
