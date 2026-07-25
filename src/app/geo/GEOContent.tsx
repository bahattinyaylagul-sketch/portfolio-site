import Link from "next/link";
import TestimonialsSection from "../seo/TestimonialsSection";

const headings = [
    { id: "geo-nedir", text: "GEO Danışmanlığı Nedir?" },
    { id: "geo-danismani-ne-yapar", text: "GEO Danışmanı Ne Yapar?" },
    { id: "platform-bazli-strateji", text: "Platform Bazlı GEO Stratejisi" },
    { id: "ne-zaman-sonuc-verir", text: "GEO Çalışması Ne Zaman Sonuç Verir?" },
    { id: "sektorel-vakalar", text: "Sektör Bazlı GEO Vakaları" },
    { id: "geo-basarisi", text: "GEO Başarısı Nasıl Ölçülür?" },
    { id: "danisman-secimi", text: "GEO Danışmanı Seçerken 6 Soru" },
    { id: "faq-section", text: "Sıkça Sorulan Sorular" }
];

const expertiseAreas = [
    {
        number: "01",
        title: "Entity (Varlık) Otoritesi İnşası",
        description: "Markanızın dijital kimliğini farklı platformlarda çelişkisiz ve tutarlı hale getirme süreci.",
        features: [
            "Wikidata & Wikipedia Kayıt Doğrulaması",
            "Marka & Kurucu Profili Eşleşmesi",
            "Semantik Varlık (Entity) İlişkilendirmesi"
        ]
    },
    {
        number: "02",
        title: "LLM Odaklı İçerik Optimizasyonu",
        description: "Yapay zeka modellerinin kolayca alıntılayabileceği bilgi kazancı yüksek, modüler yapıda içerik üretimi.",
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
        text: "text-violet-600"
    },
    {
        num: "02",
        stage: "AŞAMA 2",
        title: "Semantik Yapı",
        sub: "ve Schema Kurulumu",
        desc: "Arama motoru botları ve LLM'ler için Schema.org, JSON-LD ve FAQPage işaretlemelerinin sisteme entegrasyonu.",
        bg: "bg-indigo-50",
        text: "text-indigo-600"
    },
    {
        num: "03",
        stage: "AŞAMA 3",
        title: "Co-Citation",
        sub: "ve Dijital PR Yayılımı",
        desc: "Sektörel yayınlarda, forumlarda ve akademik platformlarda marka adının doğru bağlamda anılmasının tetiklenmesi.",
        bg: "bg-blue-50",
        text: "text-blue-600"
    },
    {
        num: "04",
        stage: "AŞAMA 4",
        title: "LLM Önerilme ve",
        sub: "Atıf Raporlama",
        desc: "ChatGPT, Gemini ve Perplexity üzerinde marka önerilme oranlarının ve atıf sıklığının düzenli takibi.",
        bg: "bg-emerald-50",
        text: "text-emerald-600"
    }
];

const proseBase =
    "prose prose-lg max-w-none prose-headings:font-sans prose-headings:font-bold prose-headings:text-foreground prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-gray-800 prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3 prose-h4:text-gray-900 prose-h4:font-bold prose-p:font-sans prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-6 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2 prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6 prose-ol:space-y-2 prose-li:text-gray-600 prose-li:leading-relaxed prose-strong:font-bold prose-strong:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-gray-800 prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-6";

export default function GEOContent() {
    return (
        <>
        <div className="space-y-20">
            {/* ── 1. Stratejik Yaklaşım ── */}
            <section id="geo-kapsami" className="scroll-mt-32 max-w-6xl mx-auto px-4 md:px-6" aria-labelledby="strategic-approach-heading">
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">
                    <div className="max-w-3xl mx-auto mb-12 text-center">
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

                <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                    {consultancySteps.map((step) => (
                        <li
                            key={step.num}
                            className="group relative bg-white rounded-3xl p-8 border border-gray-100/80 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col h-full z-10 hover:z-20 list-none"
                        >
                            <div className="absolute -right-4 -top-6 text-[140px] font-black text-gray-50/80 group-hover:text-gray-100/50 transition-colors duration-500 pointer-events-none select-none leading-none z-0">
                                {step.num}
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <span className={`inline-block px-3 py-1 bg-gray-50 text-gray-500 text-[10px] font-bold uppercase tracking-widest rounded-full border border-gray-100 mb-4 self-start ${step.text}`}>
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
                        </li>
                    ))}
                </ul>
            </section>

            {/* ── 3. Uzmanlık Alanları ── */}
            <section id="uzmanlik-alanlari" className="py-16 bg-white border-t border-gray-100 relative overflow-hidden" aria-labelledby="expertise-areas-heading">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-50/50 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center mb-16 md:mb-20">
                        <h2 id="expertise-areas-heading" className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">Uzmanlık Alanlarımız</h2>
                        <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">Yapay zekâ motorlarında varlık göstermek ve kaynak olarak listelenmek için gerekli teknik altyapı.</p>
                    </div>

                    <ul className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {expertiseAreas.map((step, index) => (
                            <li
                                key={index}
                                className="group relative bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 list-none"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:scale-110 group-hover:bg-violet-50 group-hover:border-violet-100 transition-all duration-500">
                                        <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
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
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ── 4. Semantik Rehber Bölümü (TOC Sidebar ile) ── */}
            <section id="geo-rehberi" className="max-w-6xl mx-auto px-4 md:px-6 py-12 border-t border-gray-100">
                <div className="grid lg:grid-cols-[250px_1fr] gap-12 items-start relative">
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
                                        href={heading.id === "faq-section" ? `#${heading.id}` : `#${heading.id}`}
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

                    <div className="min-w-0">
                        <section className={`${proseBase} mb-16`} id="geo-nedir" aria-labelledby="geo-nedir-title">
                            <h2 id="geo-nedir-title">GEO Danışmanlığı Nedir?</h2>
                            <p>
                                GEO danışmanlığı, markanızın ChatGPT, Gemini ve Perplexity gibi yapay zeka modellerinde kaynak olarak gösterilmesi ve önerilmesi için strateji geliştiren uzmanlık hizmetidir. Klasik SEO'dan temel farkı şudur: arama motoru algoritması değil, AI modelinin markanızı tanıması, anlaması ve güvenmesi hedeflenir.
                            </p>
                            <p>
                                Generative Engine Optimization (GEO) kavramı 2023'te Princeton ve Columbia üniversitelerinin araştırmalarıyla akademik zemine oturdu. GEO üç temel katman üzerine kurulur: entity tutarlılığı, otorite ve kaynak sinyalleri, makine okunabilir bilgi mimarisi. AEO, GEO ve LLM SEO sık sık birbirinin yerine kullanılsa da aralarında iş bölümü vardır: AEO içeriği biçimlendirir, GEO bağlamı inşa eder, LLM SEO modelin bakışını yönetir — biri olmadan diğeri yarım kalır.
                            </p>
                        </section>

                        <section className={`${proseBase} mb-16`} id="geo-danismani-ne-yapar" aria-labelledby="geo-danismani-title">
                            <h2 id="geo-danismani-title">GEO Danışmanı Ne Yapar?</h2>
                            
                            <h3>Entity Tutarlılığı Kurma</h3>
                            <p>
                                Yapay zeka bir markayı değerlendirirken yalnızca o markanın kendi sitesine değil, dışarıdan referans gösteren güvenilir kaynaklara da bakar. Danışmanın ilk işi, markanın dijital kimliğini — entity adı, sektör, konum, hizmet kapsamı — farklı platformlarda çelişkisiz hale getirmektir. Wikipedia, Wikidata, sektör dizinleri, sosyal profiller: bunların hepsinde aynı bilgi duruyorsa model güven puanını yüksek tutar. Tek bir çelişkili kayıt bile modelin markayla ilgili belirsizlik yaşamasına yol açabilir.
                            </p>



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

                        <section className={`${proseBase} mb-16`} id="platform-bazli-strateji" aria-labelledby="platform-bazli-title">
                            <h2 id="platform-bazli-title">Platform Bazlı GEO Stratejisi</h2>
                            <p>
                                "AI görünürlüğü" deyip tek bir stratejiyle üç platformu kazanmaya çalışmak işe yaramaz. ChatGPT, Perplexity and Gemini'nin bilgiye ulaşma mekanizmaları birbirinden temelden farklıdır.
                            </p>

                            {/* Mobil: kart görünümü */}
                            <div className="not-prose my-8 md:hidden space-y-4">
                                {[
                                    {
                                        platform: "ChatGPT",
                                        mechanism: "Eğitim verisi + RAG ile güncel web taraması",
                                        signal: "Eğitim setine girmiş yüksek otoriteli kaynaklarda yer alma",
                                        tactic: "Köklü yayınlarda atıf, co-citation, uzun soluklu içerik birikimi",
                                    },
                                    {
                                        platform: "Perplexity",
                                        mechanism: "Gerçek zamanlı web indeksi",
                                        signal: "Anlık indekslenebilirlik ve yapılandırılmış veri",
                                        tactic: "Schema.org işaretlemeleri, hızlı yayın döngüsü, robots.txt erişim izinleri",
                                    },
                                    {
                                        platform: "Gemini",
                                        mechanism: "Google Knowledge Graph + arama ekosistemi",
                                        signal: "Entity uyumu; Knowledge Graph, Wikipedia, Search Console sinyalleri",
                                        tactic: "Google entity profilini güçlendirme, Wikipedia varlığı, Search Console optimizasyonu",
                                    },
                                ].map(({ platform, mechanism, signal, tactic }) => (
                                    <div key={platform} className="rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                                        <div className="bg-gray-900 px-4 py-3">
                                            <span className="font-bold text-white text-base">{platform}</span>
                                        </div>
                                        <div className="divide-y divide-gray-100">
                                            <div className="px-4 py-3">
                                                <p className="text-xs font-semibold text-violet-600 uppercase tracking-wide mb-1">Çalışma Mekanizması</p>
                                                <p className="text-sm text-gray-700">{mechanism}</p>
                                            </div>
                                            <div className="px-4 py-3">
                                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Kritik Optimizasyon Sinyali</p>
                                                <p className="text-sm text-gray-700">{signal}</p>
                                            </div>
                                            <div className="px-4 py-3">
                                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Öncelikli Taktik</p>
                                                <p className="text-sm text-gray-700">{tactic}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Masaüstü: tablo görünümü */}
                            <div className="not-prose my-8 hidden md:block overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
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


                        </section>

                        <section className={`${proseBase} mb-16`} id="ne-zaman-sonuc-verir" aria-labelledby="ne-zaman-sonuc-title">
                            <h2 id="ne-zaman-sonuc-title">GEO Çalışması Ne Zaman Sonuç Verir?</h2>
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

                        <section className={`${proseBase} mb-16`} id="sektorel-vakalar" aria-labelledby="sektorel-vakalar-title">
                            <h2 id="sektorel-vakalar-title">Sektör Bazlı GEO Vakaları</h2>

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
                        </section>

                        <section className={`${proseBase} mb-16`} id="geo-basarisi" aria-labelledby="geo-basarisi-title">
                            <h2 id="geo-basarisi-title">GEO Başarısı Nasıl Ölçülür?</h2>
                            <p>
                                GEO'nun getirisi anlık dönüşüm değil, erişim genişliği üzerinden ölçülür: kaç platformda, kaç sorgu tipinde, kaç farklı kaynak üzerinden görünürsünüz.
                            </p>
                            <ul>
                                <li><strong>AI bahis oranı ve marka mention sıklığı:</strong> Aynı soruyu farklı günleşmiş formülasyonlarla 20-30 kez sorun; kaç kez anıldığınızı kaydedin. Bu oran zamanla artıyorsa GEO çalışması somut etki yaratıyor demektir.</li>
                                <li><strong>Entity güç skoru:</strong> Markanızın Knowledge Graph'ta ne kadar iyi tanımlandığını, hangi kavramlarla ilişkilendirildiğini ve bu ilişkilerin kaç farklı kaynakta teyit edildiğini ölçer.</li>
                                <li><strong>LLM önerilme oranı:</strong> "Bu kategoride hangi markayı önerirsin?" türü sorgularda markanızın öneri listesine girme sıklığını rakiplerinizle kıyaslayarak izleyin.</li>
                                <li><strong>Kaynak çeşitliliği:</strong> Tek bir otoriter site değil, birden fazla farklı domain üzerinden co-citation örüntüsü oluşturulmuşsa LLM'ler sizi daha güvenilir buluyor.</li>
                                <li><strong>Google AI Overviews görünürlüğü:</strong> Yapılandırılmış içerik, Schema.org işaretlemeleri ve otorite sinyalleri doğru kurulduğunda AI Overviews kutusuna girme ihtimali artar.</li>
                            </ul>


                        </section>

                        <section className={`${proseBase} mb-16`} id="danisman-secimi" aria-labelledby="danisman-secimi-title">
                            <h2 id="danisman-secimi-title">GEO Danışmanı Seçerken Sormanız Gereken 6 Soru</h2>
                            
                            <ol>
                                <li><strong>Platform bazlı strateji ayrıştırıyor musunuz?</strong> ChatGPT, Perplexity ve Gemini aynı şekilde çalışmaz.</li>
                                <li><strong>Sektörünüzde somut vakanız var mı?</strong> Sektörünüze yakın bir vaka yoksa danışman sizin alanınızda deneme yapacak demektir.</li>
                                <li><strong>Zaman çizelgesini nasıl belirliyorsunuz?</strong> LLM önerilme süreci 3 ile 9 ay arasında sinyal birikimi gerektirir.</li>
                                <li><strong>Başarıyı hangi metriklerle ölçüyorsunuz?</strong> Atıf izleme, entity görünürlük skoru, hangi sorgu kümelerinde referans alındığı vb.</li>
                                <li><strong>Mevcut SEO ajansımla koordinasyon nasıl işler?</strong> GEO teknik SEO altyapınız güçlüyse daha hızlı sonuç verir.</li>
                                <li><strong>Entity tutarlılığı denetimi yapıyor musunuz?</strong> Markanızın adı, kurucu bilgileri web genelinde tutarsızsa LLM'ler çelişkili sinyaller alır.</li>
                            </ol>


                        </section>

                    </div>
                </div>
            </section>
        </div>

        <section className="py-20 bg-gray-50/50 border-b border-gray-100" id="vaka-calismalari" aria-labelledby="geo-cases-heading">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="mb-12">
                    <p className="text-violet-600 font-bold text-xs uppercase tracking-widest mb-2">GEO BÜYÜME KANITLARI</p>
                    <h2 id="geo-cases-heading" className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">Vaka Çalışmaları</h2>
                </div>
                <ul className="grid md:grid-cols-2 gap-8">
                    {/* N Kolay */}
                    <li className="list-none">
                        <article className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-center justify-between mb-6">
                                <span className="px-3 py-1 bg-orange-50 border border-orange-100 text-orange-600 text-[10px] font-bold uppercase tracking-widest rounded-full">FİNANS &amp; TEKNOLOJİ</span>
                                <span className="text-sm font-semibold text-gray-400">Süre: 1 Yıl (2024-2025)</span>
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 mb-3">N Kolay</h3>
                            <p className="text-gray-500 text-sm font-medium mb-6">Finans Dikeyinde Dijital Otorite ve Rekabetçi SERP Hakimiyeti</p>
                            <div className="space-y-4 mb-8 text-sm text-gray-600 border-t border-b border-gray-100 py-6">
                                <div className="flex gap-2.5"><span className="text-green-500 font-bold">✓</span><span>Kredi dikeyindeki dönüşüm odaklı aramalar için varlık (Entity) tabanlı semantik kurgu oluşturuldu.</span></div>
                                <div className="flex gap-2.5"><span className="text-green-500 font-bold">✓</span><span>Log analizleri ile arama motoru tarama bütçesi en değerli sayfalara yönlendirildi.</span></div>
                                <div className="flex gap-2.5"><span className="text-green-500 font-bold">✓</span><span>Botların erişimini kolaylaştırmak için JavaScript ve SSR altyapısı optimize edildi.</span></div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-6 bg-gray-50 p-4 rounded-2xl">
                                <div>
                                    <div className="text-2xl font-black text-orange-600">%210</div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">Trafik Artışı</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-orange-600">%2.193</div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">Kredi Görünürlüğü</div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-500 border-t border-gray-100 pt-4 flex flex-wrap gap-x-4 gap-y-2 justify-between items-center">
                                <span>Ek Etki: %12,39 Kredi Başvurusu · %23 Onay Oranı</span>
                                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7419010392972034048/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold flex items-center gap-1">
                                    N Kolay SEO vaka çalışması — LinkedIn yayını
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                </a>
                            </div>
                        </article>
                    </li>

                    {/* Dünyagöz */}
                    <li className="list-none">
                        <article className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-center justify-between mb-6">
                                <span className="px-3 py-1 bg-teal-50 border border-teal-100 text-teal-600 text-[10px] font-bold uppercase tracking-widest rounded-full">SAĞLIK &amp; YMYL</span>
                                <span className="text-sm font-semibold text-gray-400">Süre: 8 Ay (Önerilen)</span>
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 mb-3">Dünyagöz</h3>
                            <p className="text-gray-500 text-sm font-medium mb-6">Tıbbi Sorgularda Semantik Otorite ve E-E-A-T Uyum Yapılandırması</p>
                            <div className="space-y-4 mb-8 text-sm text-gray-600 border-t border-b border-gray-100 py-6">
                                <div className="flex gap-2.5"><span className="text-green-500 font-bold">✓</span><span>YMYL (Your Money or Your Life) kriterlerine uygun içerik ve yazar şeması entegrasyonu sağlandı.</span></div>
                                <div className="flex gap-2.5"><span className="text-green-500 font-bold">✓</span><span>Tıbbi makaleler ve doktor profilleri Google algoritmalarına uygun semantik işaretlemeyle (Schema.org) donatıldı.</span></div>
                                <div className="flex gap-2.5"><span className="text-green-500 font-bold">✓</span><span>Organik kanallardan gelen kullanıcıları hasta başvurusuna dönüştüren huni optimizasyonu yapıldı.</span></div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-6 bg-gray-50 p-4 rounded-2xl">
                                <div>
                                    <div className="text-2xl font-black text-teal-600">%145</div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">Tıbbi Görünürlük</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-teal-600">%34</div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">Dönüşüm Oranı Artışı</div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-500 border-t border-gray-100 pt-4">
                                <span>Ek Etki: Hasta Randevularında Belirgin Artış</span>
                            </div>
                        </article>
                    </li>
                </ul>
            </div>
        </section>

        <TestimonialsSection />
    </>
    );
}
