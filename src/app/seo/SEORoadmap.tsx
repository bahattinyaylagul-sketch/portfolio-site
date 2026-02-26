"use client";
import React from "react";

const roadmapData = [
    {
        month: "0-1. Ay",
        title: "Temel SEO & Teknik Temizlik",
        description: "Web sitenizin teknik altyapı analizini yapıyor, tarama bütçesi optimizasyonunu tamamlıyor ve kritik indeksleme sorunlarını kalıcı olarak çözüyoruz.",
    },
    {
        month: "2. Ay",
        title: "Semantik İçerik Stratejisi",
        description: "Arama niyetine uygun içerik mimarisi oluşturuyor, mevcut sayfalarınızı anlamsal (semantik) zenginleştirme ile rekabette üst sıralara hazırlıyoruz.",
    },
    {
        month: "3-4. Ay",
        title: "Otorite İnşası & PR",
        description: "Kaliteli backlink kampanyaları ve dijital PR çalışmalarıyla markanızın dijital otoritesini (Entity) algoritmaların gözünde yapılandırıyoruz.",
    },
    {
        month: "5-6. Ay",
        title: "Büyüme & ROI Analizi",
        description: "Gerçekleşen organik trafik artışını analiz ediyor, yatırımınızın dönüşümü (ROI) üzerinden bir sonraki skalanın stratejisini kurguluyoruz.",
    },
];

export default function SEORoadmap() {
    return (
        <section className="max-w-6xl mx-auto px-4 md:px-6 mb-16 mt-8">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        SEO Yol Haritası (Roadmap) & Zaman Çizelgesi
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        "SEO çalışmaları ne kadar sürer?" veya "Hangi ay ne yapılacak?" sorularınıza şeffaf bir yanıt. İlk 6 aylık ölçeklenebilir stratejik takvimimiz:
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical line connecting timeline items */}
                    <div className="absolute left-[28px] md:left-1/2 top-4 bottom-4 w-px bg-gray-200 transform md:-translate-x-1/2"></div>

                    <div className="space-y-10">
                        {roadmapData.map((item, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div key={index} className={`relative flex flex-col md:flex-row ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center`}>

                                    {/* The card */}
                                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isLeft ? 'md:pr-14' : 'md:pl-14'}`}>
                                        <div className={`group p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                                {item.month}
                                            </span>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.description}</p>
                                        </div>
                                    </div>

                                    {/* The dot */}
                                    <div className="absolute left-[28px] top-[32px] md:top-1/2 md:left-1/2 w-4 h-4 rounded-full bg-gray-900 ring-[8px] ring-white transform -translate-x-1/2 md:-translate-y-1/2 z-10"></div>

                                    {/* Empty half for layout spacing */}
                                    <div className="hidden md:block md:w-1/2"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
