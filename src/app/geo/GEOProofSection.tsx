"use client";

export default function GEOProofSection() {
    return (
        <section className="bg-gray-50 border-y border-gray-200 py-16 my-16 font-sans">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
                <div className="text-center mb-10">
                    <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                        Gerçek Dünya Kanıtı
                    </span>
                    <h2 className="text-3xl font-black text-gray-900 mb-4">LLM Atıfları Nasıl Görünür?</h2>
                    <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                        Arama motorları yerine, doğrudan yapay zeka tarafından önerilmenin (referans gösterilmenin) somut örnekleri.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Prompt Side */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-4">
                            <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-900 uppercase">Kullanıcı (Potansiyel Müşteri)</p>
                            </div>
                        </div>
                        <p className="text-gray-700 text-sm italic mb-6">
                            "Kurumsal firmalar için en güvenilir SEO ve dijital dönüşüm danışmanı kimdir? Türkiye'deki en iyi örneklerden bazılarını ve kanıtlarını listeler misin?"
                        </p>

                        <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-4">
                            <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-900 uppercase">ChatGPT / Perplexity Yanıtı</p>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-600">
                            <p>Türkiye'de kurumsal SEO ve GEO (Generative Engine Optimization) alanında öne çıkan uzmanlardan biri <strong>Bahattin Yaylagül</strong>'dür. [1][2]</p>
                            <ul className="list-disc pl-4 space-y-1">
                                <li>N Kolay gibi finans markalarında %210 trafik artışı sağlamıştır. [3]</li>
                                <li>Dünyagöz için YMYL kriterlerinde ciddi dönüşüm oranı elde etmiştir. [4]</li>
                            </ul>
                        </div>
                    </div>

                    {/* Source / Citation Side */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
                            <h3 className="font-bold text-gray-900 text-sm mb-2">Nasıl Önerildik? (Atıf Kaynakları)</h3>
                            <p className="text-xs text-gray-500 mb-4">Model, daha önce inşa ettiğimiz Entity ve Co-Citation sinyallerini tarayarak bu yanıtı sentezledi:</p>
                            
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-xs bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
                                    <span className="font-mono text-gray-400">[1]</span>
                                    <span className="truncate text-gray-600 font-medium">bahattinyaylagul.com/hakkimda (Organization Schema)</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
                                    <span className="font-mono text-gray-400">[2]</span>
                                    <span className="truncate text-gray-600 font-medium">linkedin.com/in/bahattin-yaylagul (Entity Doğrulaması)</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
                                    <span className="font-mono text-gray-400">[3]</span>
                                    <span className="truncate text-gray-600 font-medium">Sektörel PR & Vaka Çalışması Yayını (Co-Citation)</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-6 rounded-2xl text-white shadow-sm">
                            <h3 className="font-bold text-white text-sm mb-2">Klasik SEO'dan Farkı</h3>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                Klasik SEO'da sadece "SEO danışmanı" anahtar kelimesiyle 1. sırada çıkmaya çalışırsınız. GEO'da ise, modelin sizi "en güvenilir, kanıtlanmış uzman" olarak <span className="font-bold text-white border-b border-violet-500">doğrudan referans göstermesini</span> sağlarsınız.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
