import Link from "next/link";
import TestimonialsSection from "../seo/TestimonialsSection";



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
