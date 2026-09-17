export default function GEOConsultancyProcess() {
    const steps = [
        {
            num: "01",
            stage: "AŞAMA 1",
            title: "Entity Denetimi",
            sub: "ve Tutarlılık Analizi",
            desc: "Markanızın web genelindeki dijital ayak izlerini tarayarak çelişkileri tespit ediyoruz.",
            bg: "bg-violet-50",
            text: "text-violet-600",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
            )
        },
        {
            num: "02",
            stage: "AŞAMA 2",
            title: "Schema.org ve",
            sub: "Yapısal Veri",
            desc: "Arama motoru botları ve yapay zeka araçları için Schema.org işaretlemelerini sisteme entegre ediyoruz.",
            bg: "bg-purple-50",
            text: "text-purple-600",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            )
        },
        {
            num: "03",
            stage: "AŞAMA 3",
            title: "Co-Citation ve",
            sub: "Dijital PR",
            desc: "Sektörel yayınlarda ve platformlarda markanızın doğru bağlamda anılmasını destekliyoruz.",
            bg: "bg-blue-50",
            text: "text-blue-600",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
            )
        },
        {
            num: "04",
            stage: "AŞAMA 4",
            title: "Raporlama ve",
            sub: "Görünürlük Takibi",
            desc: "ChatGPT, Gemini ve Perplexity üzerinde marka görünürlüğünü düzenli olarak izliyoruz.",
            bg: "bg-emerald-50",
            text: "text-emerald-600",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        }
    ];

    return (
        <section id="surec-yapisi" className="scroll-mt-32 relative w-full max-w-6xl mx-auto px-4 md:px-6 py-16" aria-labelledby="consultancy-process-heading">
            {/* Ortam Süslemeleri */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-violet-100/50 rounded-full blur-[60px] pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-emerald-100/50 rounded-full blur-[60px] pointer-events-none"></div>

            {/* Başlık */}
            <div className="text-center mb-16 relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 font-bold text-xs uppercase tracking-widest mb-4">
                    Nasıl Çalışıyoruz?
                </span>
                <h2 id="consultancy-process-heading" className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                    GEO Danışmanlığı Süreç Yapısı
                </h2>
                <div className="w-16 h-1.5 bg-violet-600 mx-auto mt-6 rounded-full"></div>
                <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-[15px] leading-relaxed">
                    Yapay zeka motorlarının markanıza güvenmesini ve sizi kaynak göstermesini sağlayan 4 aşamalı stratejik metodolojimiz.
                </p>
            </div>

            {/* Kart Grid Container */}
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {steps.map((step) => (
                    <li
                        key={step.num}
                        className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col h-full z-10 hover:z-20 list-none"
                    >
                        {/* Dev Numara Fligranı (Watermark) */}
                        <div className="absolute -right-4 -top-6 text-[140px] font-black text-gray-100/60 group-hover:text-gray-100 transition-colors duration-500 pointer-events-none select-none leading-none z-0">
                            {step.num}
                        </div>

                        <div className="relative z-10 flex-col flex h-full">
                            {/* İkon */}
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 shadow-sm ${step.bg} ${step.text}`}>
                                {step.icon}
                            </div>

                            {/* Detay İçerik */}
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

                            {/* Arrow Ok / İleri Yön İşareti */}
                            <div className="mt-auto pt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.bg} ${step.text}`}>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

        </section>
    );
}
