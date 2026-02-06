"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// Table of Contents
const tableOfContents = [
    { id: "temel-kavramlar", title: "01. Temel Kavramlar" },
    { id: "teknik-altyapi", title: "02. Teknik Altyapı" },
    { id: "siralama-faktorleri", title: "03. GEO Sıralama Faktörleri" },
    { id: "hizmetler", title: "04. GEO Hizmetleri" },
    { id: "sss", title: "05. Stratejik SSS" },
];

const services = [
    {
        title: "AI İçerik Denetimi",
        description: "Mevcut içeriğinizin yapay zeka modelleri tarafından 'anlaşılabilirliğini' ve 'referans değerini' ölçen teknik analiz.",
    },
    {
        title: "Vektörel Veri Stratejisi",
        description: "Knowledge Graph entegrasyonu ve Schema.org yapısı ile markanızın 'makine okunabilir' otoritesini artırma.",
    },
    {
        title: "Passage & Chunk Optimization",
        description: "İçeriğin, AI modellerinin kolayca 'alıntılayabileceği' (Citation) modüler parçacıklar halinde yeniden kurgulanması.",
    },
    {
        title: "Digital PR & Mention Yönetimi",
        description: "Forumlar, sözlükler ve sektörel ağlarda 'Semantik Oy' (Semantic Voting) toplayarak marka bilinirliğini modele öğretme.",
    },
];

export default function GEOContent() {
    const [activeSection, setActiveSection] = useState("temel-kavramlar");
    const isActive = (id: string) => activeSection === id;

    useEffect(() => {
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
            tableOfContents.forEach((item) => {
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
        <article className="pt-24 pb-20">
            {/* Hero Section - Matching SEO Page Style */}
            <header className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-background py-16 mb-12">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                                <span className="text-sm font-medium tracking-widest text-blue-600 uppercase">Yapay Zeka Çağı</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                GEO <span className="text-gray-400">Danışmanlığı</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mt-4">
                                GEO (Generative Engine Optimization), markanızın yapay zeka modelleri tarafından üretilen cevaplarda kaynak, referans ve öneri olarak seçilmesini sağlayan optimizasyon disiplinidir.
                            </p>
                            <p className="text-gray-500 mt-2 font-medium">
                                Amaç klasik sıralama değil; AI’ın karar üretirken içeriğinizi sentezlenen cevabın parçası yapmasıdır.
                            </p>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            {["ChatGPT", "Gemini", "Perplexity", "Claude"].map((platform) => (
                                <span
                                    key={platform}
                                    className="px-4 py-2 bg-white border border-gray-100 rounded-lg text-sm font-medium text-gray-600 shadow-sm"
                                >
                                    {platform}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Grid */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-[280px_1fr] gap-12">
                    {/* Left Sidebar: TOC */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-28">
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                                İçindekiler
                            </h3>
                            <nav>
                                <ul className="space-y-2">
                                    {tableOfContents.map((item) => (
                                        <li key={item.id}>
                                            <a
                                                href={`#${item.id}`}
                                                className={`block py-2 px-4 rounded-lg text-sm transition-all duration-200 ${activeSection === item.id
                                                    ? "bg-gray-900 text-white font-medium"
                                                    : "text-gray-600 hover:bg-gray-100"
                                                    }`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                                                    setActiveSection(item.id);
                                                }}
                                            >
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            {/* CTA in Sidebar */}
                            <div className="mt-8 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-white">
                                <h4 className="font-semibold mb-2">AI Görünürlük Analizi</h4>
                                <p className="text-sm text-gray-300 mb-4">
                                    Markanızın AI modellerindeki durumunu (Sentiment & Mention) analiz edelim.
                                </p>
                                <a
                                    href="#contact"
                                    className="block text-center py-2 px-4 bg-white text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    Analiz İste
                                </a>
                            </div>
                        </div>
                    </aside>

                    {/* Content Column */}
                    <main>
                        <div className="space-y-12">

                            {/* Section 1: Temel Kavramlar */}
                            <section
                                id="temel-kavramlar"
                                className="scroll-mt-32 p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-sm font-medium text-gray-400">01</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    Temel Kavramlar ve Yeni Arama Katmanları
                                </h2>
                                <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium border-l-4 border-blue-600 pl-4 bg-blue-50/50 py-2 rounded-r-lg">
                                    <strong>Karar Özeti:</strong> 2025 itibarıyla görünürlük tek bir SEO tekniğiyle değil; birden fazla arama katmanının birlikte yönetilmesiyle sağlanır.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-bold">GEO</span>
                                            <h3 className="font-bold text-gray-900">Generative Engine Optimization</h3>
                                        </div>
                                        <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                                            <li><strong>Nedir:</strong> İçeriğin AI modelleri tarafından anlaşılması, sentezlenmesi ve alıntılanabilir hale getirilmesidir.</li>
                                            <li><strong>Hedef:</strong> Tavsiye edilen kaynak olmak.</li>
                                            <li><strong>Odak:</strong> Topical authority ve sentezlenmiş cevap içinde yer alma.</li>
                                        </ul>
                                    </div>

                                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">AEO</span>
                                            <h3 className="font-bold text-gray-900">Answer Engine Optimization</h3>
                                        </div>
                                        <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                                            <li><strong>Nedir:</strong> İçeriğin AI özetlerinde doğrudan cevap olarak sunulmasıdır.</li>
                                            <li><strong>Farkı:</strong> GEO kaynak olmaya, AEO net cevap vermeye odaklanır.</li>
                                        </ul>
                                    </div>

                                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-bold">AIO</span>
                                            <h3 className="font-bold text-gray-900">AI Integration Optimization</h3>
                                        </div>
                                        <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                                            <li><strong>Nedir:</strong> İçerik üretimi ve süreçlerin AI araçlarıyla ölçeklenmesidir.</li>
                                            <li><strong>Amaç:</strong> Manuel içerik değil sistematik üretim.</li>
                                        </ul>
                                    </div>

                                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-bold">SXO</span>
                                            <h3 className="font-bold text-gray-900">Search Experience Optimization</h3>
                                        </div>
                                        <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                                            <li><strong>Nedir:</strong> AI cevabından gelen kullanıcının sayfada karar verip dönüşüm sağlamasıdır.</li>
                                            <li><strong>Amaç:</strong> Trafiği tutmak ve sonuçlandırmak.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Section 2: Teknik Altyapı */}
                            <section
                                id="teknik-altyapi"
                                className="scroll-mt-32 p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-sm font-medium text-gray-400">02</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    GEO’nun Teknik Altyapısı (ML & NLP)
                                </h2>
                                <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium border-l-4 border-indigo-500 pl-4 bg-indigo-50/50 py-2 rounded-r-lg">
                                    <strong>Teknik Gerçek:</strong> GEO’da anahtar kelime değil, semantik uyum ve vektörel temsil belirleyicidir.
                                </p>

                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                                        <h3 className="font-bold text-gray-900 mb-3">Vektör & Embeddings</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed mb-2">
                                            AI kelimeleri sayısal vektörler olarak işler.
                                        </p>
                                        <p className="text-xs text-indigo-700 font-semibold bg-indigo-50 inline-block px-2 py-1 rounded">
                                            Kural: Anlamsal bütünlük anahtar kelime tekrarından üstündür.
                                        </p>
                                    </div>
                                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                                        <h3 className="font-bold text-gray-900 mb-3">RAG Sistemleri</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed mb-2">
                                            Modelin cevap üretmeden önce kaynaklardan bilgi çekmesidir.
                                        </p>
                                        <p className="text-xs text-indigo-700 font-semibold bg-indigo-50 inline-block px-2 py-1 rounded">
                                            Amaç: Retrieval aşamasında markanın seçilmesi.
                                        </p>
                                    </div>
                                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                                        <h3 className="font-bold text-gray-900 mb-3">Learning to Rank</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed mb-2">
                                            Belgelerin alaka düzeyine göre sıralanmasıdır.
                                        </p>
                                        <p className="text-xs text-indigo-700 font-semibold bg-indigo-50 inline-block px-2 py-1 rounded">
                                            GEO İpucu: Rakiplerden daha net yapılandırılmış içerik avantaj sağlar.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section 3: A-Z Faktörler */}
                            <section
                                id="siralama-faktorleri"
                                className="scroll-mt-32 p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-sm font-medium text-gray-400">03</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    A'dan Z'ye GEO Sıralama Faktörleri
                                </h2>
                                <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium border-l-4 border-teal-500 pl-4 bg-teal-50/50 py-2 rounded-r-lg">
                                    <strong>Kritik Gerçek:</strong> AI genel bilgiyi bilir; sizi öne çıkaran özgünlük ve yapılandırılmış karar bilgisidir.
                                </p>

                                <div className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
                                            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                                                <span className="w-6 h-6 rounded bg-gray-900 text-white flex items-center justify-center text-xs">A</span>
                                                Authority
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-2">Güvenilir markalar daha sık seçilir.</p>
                                            <p className="text-xs font-bold text-teal-700">Aksiyon: Dış kaynak mention’ları şarttır.</p>
                                        </div>

                                        <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
                                            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                                                <span className="w-6 h-6 rounded bg-gray-900 text-white flex items-center justify-center text-xs">B</span>
                                                BLUF
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-2">Cevap en başta verilir.</p>
                                            <p className="text-xs font-bold text-teal-700">Uygulama: Detay sonra gelir.</p>
                                        </div>

                                        <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
                                            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                                                <span className="w-6 h-6 rounded bg-gray-900 text-white flex items-center justify-center text-xs">C</span>
                                                Citation vs Mention
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-2">Link + marka geçişi birlikte çalışır.</p>
                                        </div>

                                        <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
                                            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                                                <span className="w-6 h-6 rounded bg-gray-900 text-white flex items-center justify-center text-xs">D</span>
                                                Data & Tables
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-2">Tablolar zorunludur.</p>
                                            <p className="text-xs font-bold text-teal-700">Etkisi: Alıntılanma ihtimalini artırır.</p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="p-4 rounded-xl border border-gray-100 bg-white">
                                            <h4 className="font-bold text-gray-900 text-sm mb-1">Edge Cases</h4>
                                            <p className="text-xs text-gray-500">İstisna senaryolar olmadan içerik eksiktir.</p>
                                        </div>
                                        <div className="p-4 rounded-xl border border-gray-100 bg-white">
                                            <h4 className="font-bold text-gray-900 text-sm mb-1">Freshness</h4>
                                            <p className="text-xs text-gray-500">Güncellik tekrar görünmeyi artırır.</p>
                                        </div>
                                        <div className="p-4 rounded-xl border border-gray-100 bg-white">
                                            <h4 className="font-bold text-gray-900 text-sm mb-1">Human Expertise</h4>
                                            <p className="text-xs text-gray-500">AI’ın uyduramayacağı operasyonel bilgi eklenmelidir.</p>
                                        </div>
                                        <div className="p-4 rounded-xl border border-gray-100 bg-white">
                                            <h4 className="font-bold text-gray-900 text-sm mb-1">Information Gain</h4>
                                            <p className="text-xs text-gray-500">Yeni bakış açısı sunulmalıdır.</p>
                                        </div>
                                        <div className="p-4 rounded-xl border border-gray-100 bg-white">
                                            <h4 className="font-bold text-gray-900 text-sm mb-1">Probability Distribution</h4>
                                            <p className="text-xs text-gray-500">Hedef tek sıra değil, çoklu görünürlüktür.</p>
                                        </div>
                                        <div className="p-4 rounded-xl border border-gray-100 bg-white">
                                            <h4 className="font-bold text-gray-900 text-sm mb-1">Quotes & Stats</h4>
                                            <p className="text-xs text-gray-500">Veri güven oluşturur.</p>
                                        </div>
                                        <div className="p-4 rounded-xl border border-gray-100 bg-white">
                                            <h4 className="font-bold text-gray-900 text-sm mb-1">Structure & Schema</h4>
                                            <p className="text-xs text-gray-500">Mantıksal başlık hiyerarşisi gerekir.</p>
                                        </div>
                                        <div className="p-4 rounded-xl border border-gray-100 bg-white">
                                            <h4 className="font-bold text-gray-900 text-sm mb-1">Token Economy</h4>
                                            <p className="text-xs text-gray-500">Kısa, net, parçalanabilir yazılır.</p>
                                        </div>
                                        <div className="p-4 rounded-xl border border-gray-100 bg-white">
                                            <h4 className="font-bold text-gray-900 text-sm mb-1">Volatility Mgmt</h4>
                                            <p className="text-xs text-gray-500">Farklı varyasyonlarda içerik kümeleri oluşturulur.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Services Section */}
                            <section aria-labelledby="geo-services" className="mt-20">
                                <div className="text-center mb-12">
                                    <h2 id="geo-services" className="text-3xl font-bold text-gray-900 mb-4">
                                        GEO Hizmet Kapsamı
                                    </h2>
                                    <p className="text-gray-600 max-w-lg mx-auto">Yapay zeka modellerinde markanızın nasıl göründüğünü şansa bırakmayın.</p>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {services.map((service) => (
                                        <div
                                            key={service.title}
                                            className="group p-6 bg-white border border-gray-100 rounded-2xl hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Strategic FAQ Section */}
                            <section id="sss" className="scroll-mt-32 mt-20">
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Stratejik Karar Soruları (SSS)</h2>
                                <div className="space-y-4">
                                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                        <h3 className="font-semibold text-gray-900 mb-2">GEO yatırımı ne zaman yapılmalı?</h3>
                                        <p className="text-sm text-gray-600 leading-[1.6] bg-white/50 p-4 rounded-lg mt-3 ml-4">
                                            Eğer SEO trafiğiniz stabil olmasına rağmen dönüşümleriniz düşüyorsa veya sektörünüzde (SaaS, Finans, Sağlık vb.) kullanıcıların AI araçlarını kullanma oranı yüksekse, GEO yatırımı "hemen" yapılmalıdır.
                                        </p>
                                    </div>
                                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                        <h3 className="font-semibold text-gray-900 mb-2">Klasik SEO ölüyor mu?</h3>
                                        <p className="text-sm text-gray-600 leading-[1.6] bg-white/50 p-4 rounded-lg mt-3 ml-4">
                                            Hayır, ancak evriliyor. 2026 projeksiyonlarında arama hacminin %30'unun AI sohbetlerine kayacağı öngörülüyor. Hibrit yapı (SEO + GEO) kurmayan markalar, görünürlüklerinin üçte birini kaybetme riskiyle karşı karşıyadır.
                                        </p>
                                    </div>

                                </div>
                            </section>

                            {/* Author Card */}
                            <section aria-labelledby="author-bio" className="mt-24 border-t border-gray-100 pt-16">
                                <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                    <Link href="/hakkimda" className="shrink-0 group">
                                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg overflow-hidden relative">
                                            <Image
                                                src="/images/bahattin-yaylagul.jpg"
                                                alt="Bahattin Yaylagül"
                                                width={128}
                                                height={128}
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    </Link>
                                    <div className="text-center md:text-left">
                                        <div className="flex flex-col md:flex-row items-center gap-3 mb-4 justify-center md:justify-start">
                                            <Link href="/hakkimda" className="hover:text-blue-600 transition-colors">
                                                <h3 id="author-bio" className="text-2xl font-sans font-bold text-gray-900">Bahattin Yaylagül</h3>
                                            </Link>
                                            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full">Senior SEO & GEO Architect</span>
                                        </div>
                                        <div className="flex items-center gap-4 justify-center md:justify-start">
                                            <Link href="/hakkimda" className="text-sm font-semibold text-gray-900 underline underline-offset-4 decoration-gray-200 hover:decoration-gray-900 transition-all">
                                                Hakkımda Detaylı Bilgi
                                            </Link>
                                            <a href="https://linkedin.com/in/bahattin-yaylagul" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-[#0077B5] hover:opacity-80 transition-opacity">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                                LinkedIn
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final CTA */}
                            <section id="contact" className="mt-20">
                                <div className="relative overflow-hidden p-10 md:p-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl text-white text-center">
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                                    </div>

                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Geleceğe Hazır Mısınız?</h2>
                                        <p className="text-gray-300 mb-8 max-w-md mx-auto">
                                            AI çağında markanızı konumlandırmak için ücretsiz ön değerlendirme alın.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <a
                                                href="mailto:bahattinyaylagul@gmail.com"
                                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                E-posta Gönder
                                            </a>
                                            <Link
                                                href="/seo"
                                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors">
                                                SEO Hizmetlerini İncele
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </article>
    );
}
