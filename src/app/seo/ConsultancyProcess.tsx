"use client";

export default function ConsultancyProcess() {
    const steps = [
        {
            num: "01",
            stage: "AŞAMA 1",
            title: "Teknik Denetim",
            sub: "ve Veri Analizi",
            desc: "Site mimarisinin, tarama bütçesinin ve potansiyel teknik hataların veri odaklı detaylı check-up süreci.",
            colorClass: "blue",
            bg: "bg-blue-50",
            text: "text-blue-600",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
            )
        },
        {
            num: "02",
            stage: "AŞAMA 2",
            title: "Stratejik Yol",
            sub: "Haritası",
            desc: "Sektör dinamiği ve rakip derinliği baz alınarak anahtar kelime kümesi ve içerik planının çıkarılması.",
            colorClass: "purple",
            bg: "bg-purple-50",
            text: "text-purple-600",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
            )
        },
        {
            num: "03",
            stage: "AŞAMA 3",
            title: "Uygulama ve",
            sub: "Optimizasyon",
            desc: "Teknik sağlık iyileştirmelerinin yapılması, semantik içerik kurgusu ve güçlü otorite inşası.",
            colorClass: "teal",
            bg: "bg-teal-50",
            text: "text-teal-600",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            num: "04",
            stage: "AŞAMA 4",
            title: "Performans ve",
            sub: "İyileştirme",
            desc: "Veri odaklı sürekli izleme, periyodik raporlama, A/B testleri ve sürdürülebilir büyüme döngüsü.",
            colorClass: "emerald",
            bg: "bg-emerald-50",
            text: "text-emerald-600",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        }
    ];

    return (
        <section id="surec-yapisi" className="scroll-mt-32 relative w-full max-w-6xl mx-auto px-4 md:px-6 py-16" aria-labelledby="consultancy-process-heading">
            {/* Ortam Süslemeleri */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100/50 rounded-full blur-[60px] pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-teal-100/50 rounded-full blur-[60px] pointer-events-none"></div>

            {/* Başlık */}
            <div className="text-center mb-16 relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">
                    Nasıl Çalışıyoruz?
                </span>
                <h2 id="consultancy-process-heading" className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                    SEO Danışmanlığı Süreç Yapısı
                </h2>
                <div className="w-16 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
                <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-[15px] leading-relaxed">
                    Sıfırdan zirveye uzanan yolculukta hedeflerinize ulaşmanız için test edilmiş, ölçeklenebilir ve tamamen şeffaf 4 adımlı SEO metodolojisini uyguluyoruz.
                </p>
            </div>

            {/* Kart Grid Container */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {steps.map((step) => (
                    <div
                        key={step.num}
                        className="group relative bg-white rounded-3xl p-8 border border-gray-100/80 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col h-full z-10 hover:z-20"
                    >
                        {/* Dev Numara Fligranı (Watermark) */}
                        <div className="absolute -right-4 -top-6 text-[140px] font-black text-gray-50/80 group-hover:text-gray-100/50 transition-colors duration-500 pointer-events-none select-none leading-none z-0">
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
                    </div>
                ))}
            </div>

        </section>
    );
}
