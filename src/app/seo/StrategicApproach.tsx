"use client";
import Image from "next/image";

export default function StrategicApproach() {
    return (
        <section id="seo-kapsami" className="scroll-mt-32 max-w-6xl mx-auto px-4 md:px-6 mb-16 mt-8" aria-labelledby="strategic-approach-heading">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">
                <div className="max-w-3xl mx-auto mb-12 text-center">
                    {/* SEO Illustration */}
                    <div className="flex justify-center mb-10">
                        <div className="relative flex items-center justify-center w-full max-w-[420px]">
                            {/* Background blob */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-50 via-indigo-50/60 to-slate-50 pointer-events-none" />
                            {/* Decorative rings */}
                            <div className="absolute inset-[5%] rounded-full border border-blue-100/60 pointer-events-none" />
                            <div className="absolute inset-[20%] rounded-full border border-indigo-100/40 pointer-events-none" />
                            {/* Floating dots */}
                            <div className="absolute top-4 right-8 w-3 h-3 bg-blue-200 rounded-full opacity-60 pointer-events-none" />
                            <div className="absolute bottom-6 left-6 w-2 h-2 bg-indigo-300 rounded-full opacity-50 pointer-events-none" />
                            <div className="absolute top-10 left-4 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-40 pointer-events-none" />
                            <Image
                                src="/images/seo-illustration.png"
                                alt="SEO Danışmanlığı İllüstrasyon"
                                width={400}
                                height={400}
                                className="relative z-10 w-full h-auto max-w-[320px] md:max-w-[400px]"
                                priority
                            />
                        </div>
                    </div>


                    <h2 id="strategic-approach-heading" className="text-3xl font-bold text-gray-900 mb-6">
                        SEO Danışmanlığı Kapsamı ve Stratejik Yaklaşım
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        SEO danışmanlığı, yalnızca trafik artışı değil; teknik altyapı, içerik mimarisi ve arama niyeti uyumunun bütüncül optimizasyonudur. Süreç; veri analizi, semantik yapılandırma ve performans odaklı strateji geliştirmeyi kapsar.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Scope Card */}
                    <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                            SEO Danışmanlığı Neleri Kapsar?
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Teknik altyapı optimizasyonu",
                                "İçerik ve semantik yapılandırma",
                                "Arama niyeti odaklı sayfa mimarisi",
                                "Otorite ve görünürlük inşası",
                                "AI ve GEO uyumlu arama stratejileri"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Target Audience Card */}
                    <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="w-1.5 h-6 bg-purple-500 rounded-full"></span>
                            Hangi İşletmeler İçin Uygundur?
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "E-ticaret platformları",
                                "Kurumsal web siteleri",
                                "Büyüme odaklı dijital markalar",
                                "Rekabetçi pazarlarda faaliyet gösteren firmalar",
                                "Yeni ölçeklenen girişimler"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 bg-purple-400 rounded-full shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
