const expertiseAreas = [
    {
        number: "01",
        title: "Kapsamlı SEO Denetimi",
        description: "Mevcut dijital varlıkların teknik, içerik ve otorite açısından derinlemesine analizi ve stratejik yol haritası.",
        features: [
            "Log Analizi ve Tarama Bütçesi (Crawl Budget)",
            "Kritik Tarama Hatalarının Tespiti",
            "Site Mimarisi ve İç Link Organizasyonu"
        ],
        icon: (
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
        )
    },
    {
        number: "02",
        title: "Semantik Anahtar Kelime Mimarisi",
        description: "Kullanıcı niyeti ve yapay zeka algoritmalarıyla uyumlu, veri odaklı terim haritalandırması.",
        features: [
            "Arama Niyeti (Search Intent) Sınıflandırması",
            "Topic Cluster ve Hub Sayfa Stratejisi",
            "İçerik Boşluğu (Content Gap) Analizi"
        ],
        icon: (
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
            </svg>
        )
    },
    {
        number: "03",
        title: "Teknik Altyapı Optimizasyonu",
        description: "Core Web Vitals, tarama bütçesi ve indekslenebilirlik standartlarının maksimize edilmesi.",
        features: [
            "Sayfa Hızı & LCP, CLS, INP İyileştirmeleri",
            "Mobile-first İndeksleme Validasyonu",
            "Özel Schema.org Yapısal Veri Kurulumu"
        ],
        icon: (
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        )
    },
    {
        number: "04",
        title: "Stratejik İçerik Danışmanlığı",
        description: "Otorite (E-E-A-T) inşa eden, dönüşüm odaklı ve sürdürülebilir içerik ekosistemi kurgusu.",
        features: [
            "E-E-A-T Sinyalleri ve Yazar Otoritesi",
            "Bilgi Kazancı (Information Gain) Sağlama",
            "Yapay Zeka (GEO) Odaklı Metin Optimizasyonu"
        ],
        icon: (
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
        )
    }
];

export default function SEOAreasOfExpertise() {
    return (
        <section className="py-16 bg-white border-t border-gray-100 relative overflow-hidden" aria-labelledby="expertise-areas-heading">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <h2 id="expertise-areas-heading" className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">Uzmanlık Alanları</h2>
                    <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">Veri odaklı büyüme için, teknikten içeriğe tüm aşamalarda derinlemesine mühendislik yaklaşımı.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {expertiseAreas.map((step, index) => (
                        <div
                            key={index}
                            className="group relative bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300"
                        >
                            {/* Üst Kısım: İkon ve Sayı */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:scale-110 group-hover:bg-blue-50 group-hover:border-blue-100 transition-all duration-500">
                                    <div className="group-hover:text-blue-600 transition-colors duration-500">
                                        {step.icon}
                                    </div>
                                </div>
                                <span className="text-4xl font-black text-gray-100 group-hover:text-gray-200 transition-colors duration-500">
                                    {step.number}
                                </span>
                            </div>

                            {/* Orta Kısım: Başlık ve Açıklama */}
                            <p className="text-2xl font-bold text-gray-900 mb-3">{step.title}</p>
                            <p className="text-gray-500 leading-relaxed text-base mb-8">
                                {step.description}
                            </p>

                            <div className="w-full h-px bg-gray-100 mb-8"></div>

                            {/* Alt Kırılımlar */}
                            <ul className="space-y-4">
                                {step.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mt-0.5">
                                            <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    );
}
