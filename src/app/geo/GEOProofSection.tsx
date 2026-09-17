import Image from "next/image";

export default function GEOProofSection() {
    return (
        <section id="geo-kanit" className="max-w-6xl mx-auto px-4 md:px-6 scroll-mt-32">
            <div className="mb-10 text-center">
                <span className="inline-block w-8 h-0.5 bg-violet-500 mb-4"></span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">Gerçek Dünya Kanıtları</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-[15px] leading-relaxed">
                    150 ticari ve bilgilendirici sorguda ChatGPT, Gemini, Google AI Overview ve AI Mode görünürlüğünü zaman içinde takip ediyoruz.
                </p>
            </div>

            <div className="space-y-8">
                {/* Büyük Ana Kart: Visibility Score */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] overflow-hidden">
                    <div className="p-6 md:p-8 border-b border-gray-50 bg-gray-50/50">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">AI Visibility Score</h3>
                            <p className="text-sm text-gray-500 mt-1">Platformlara göre markanın yapay zeka görünürlük trendi</p>
                        </div>
                    </div>
                    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-gray-50">
                        <Image 
                            src="/images/geo-proof/visibility-score.png" 
                            alt="AI Visibility Score Grafiği" 
                            fill 
                            className="object-contain p-4"
                            sizes="(max-width: 1200px) 100vw, 1200px"
                        />
                    </div>
                </div>

                {/* Yan Yana İki Kart: AI Overview ve Gemini */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Google AI Overview */}
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
                        <div className="p-6 border-b border-gray-50 bg-gray-50/50">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                                Google AI Overview
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">Sektörel aramalarda AI destekli özet sonuçları</p>
                        </div>
                        <div className="relative w-full aspect-[4/3] bg-gray-50 p-2">
                            <Image 
                                src="/images/geo-proof/ai-overview.png" 
                                alt="Google AI Overview Sonucu" 
                                fill 
                                className="object-contain p-2"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Gemini */}
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
                        <div className="p-6 border-b border-gray-50 bg-gray-50/50">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                <svg className="w-5 h-5 text-purple-500" viewBox="0 0 24 24" fill="currentColor"><path d="M19.74 7.33l-2.06-2.06a2.02 2.02 0 00-2.83 0L13.4 6.7c-.77.77-2.03.77-2.8 0L9.15 5.27a2.02 2.02 0 00-2.83 0L4.26 7.33a2.02 2.02 0 000 2.83l1.45 1.45c.77.77 2.03.77 2.8 0l1.45-1.45c.78-.77 2.04-.77 2.82 0l1.45 1.45c.77.77 2.03.77 2.8 0l1.45-1.45a2.02 2.02 0 000-2.83zM12 17.5l-4-4v-2l4 4 4-4v2l-4 4z"/></svg>
                                Google Gemini
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">Soru-cevap senaryolarında organik marka önerisi</p>
                        </div>
                        <div className="relative w-full aspect-[4/3] bg-gray-50">
                            <Image 
                                src="/images/geo-proof/gemini.png" 
                                alt="Google Gemini Yanıtı" 
                                fill 
                                className="object-contain p-2"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
