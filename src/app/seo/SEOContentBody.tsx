"use client";

import Link from "next/link";
import StrategicApproach from "./StrategicApproach";
import ConsultancyProcess from "./ConsultancyProcess";
import SEORehberi from "./SEORehberi";
import TestimonialsSection from "./TestimonialsSection";
import SEOAreasOfExpertise from "./SEOAreasOfExpertise";

export default function SEOContentBody() {
    return (
        <>
            {/* ── 2. Stratejik Yaklaşım ── */}
            <StrategicApproach />

            {/* ── 3. Danışmanlık Süreci ── */}
            <ConsultancyProcess />

            {/* ── SEO Rehberi ── */}
            <SEORehberi />

            {/* ── 4. Müşteri Yorumları ── */}
            <TestimonialsSection />

            {/* ── 5. Başarı Hikayeleri ── */}
            <section className="py-20 bg-gray-50/50 border-b border-gray-100" id="vaka-calismalari" aria-labelledby="cases-heading">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                    <div className="mb-12">
                        <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2">ORGANİK BÜYÜME KANITLARI</p>
                        <h2 id="cases-heading" className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">Vaka Çalışmaları</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* N Kolay */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-center justify-between mb-6">
                                <span className="px-3 py-1 bg-orange-50 border border-orange-100 text-orange-600 text-[10px] font-bold uppercase tracking-widest rounded-full">FİNANS & TEKNOLOJİ</span>
                                <span className="text-sm font-semibold text-gray-400">Süre: 1 Yıl (2024-2025)</span>
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 mb-3">N Kolay</h3>
                            <p className="text-gray-500 text-sm font-medium mb-6">Finans Dikeyinde Dijital Otorite ve Rekabetçi SERP Hakimiyeti</p>
                            
                            <div className="space-y-4 mb-8 text-sm text-gray-600 border-t border-b border-gray-100 py-6">
                                <div className="flex gap-2.5">
                                    <span className="text-green-500 font-bold">✓</span>
                                    <span>Kredi dikeyindeki dönüşüm odaklı aramalar için varlık (Entity) tabanlı semantik kurgu oluşturuldu.</span>
                                </div>
                                <div className="flex gap-2.5">
                                    <span className="text-green-500 font-bold">✓</span>
                                    <span>Log analizleri ile arama motoru tarama bütçesi en değerli sayfalara yönlendirildi.</span>
                                </div>
                                <div className="flex gap-2.5">
                                    <span className="text-green-500 font-bold">✓</span>
                                    <span>Botların erişimini kolaylaştırmak için JavaScript ve SSR altyapısı optimize edildi.</span>
                                </div>
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
                                <a 
                                    href="https://www.linkedin.com/feed/update/urn:li:activity:7419010392972034048/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-blue-600 hover:underline font-semibold flex items-center gap-1"
                                >
                                    N Kolay SEO vaka çalışması — LinkedIn yayını
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                </a>
                            </div>
                        </div>

                        {/* Dünyagöz */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-center justify-between mb-6">
                                <span className="px-3 py-1 bg-teal-50 border border-teal-100 text-teal-600 text-[10px] font-bold uppercase tracking-widest rounded-full">SAĞLIK & YMYL</span>
                                <span className="text-sm font-semibold text-gray-400">Süre: 8 Ay (Önerilen)</span>
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 mb-3">Dünyagöz</h3>
                            <p className="text-gray-500 text-sm font-medium mb-6">Tıbbi Sorgularda Semantik Otorite ve E-E-A-T Uyum Yapılandırması</p>
                            
                            <div className="space-y-4 mb-8 text-sm text-gray-600 border-t border-b border-gray-100 py-6">
                                <div className="flex gap-2.5">
                                    <span className="text-green-500 font-bold">✓</span>
                                    <span>YMYL (Your Money or Your Life) kriterlerine uygun içerik ve yazar şeması entegrasyonu sağlandı.</span>
                                </div>
                                <div className="flex gap-2.5">
                                    <span className="text-green-500 font-bold">✓</span>
                                    <span>Tıbbi makaleler ve doktor profilleri Google algoritmalarına uygun semantik işaretlemeyle (Schema.org) donatıldı.</span>
                                </div>
                                <div className="flex gap-2.5">
                                    <span className="text-green-500 font-bold">✓</span>
                                    <span>Organik kanallardan gelen kullanıcıları hasta başvurusuna dönüştüren huni optimizasyonu yapıldı.</span>
                                </div>
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

                            <div className="text-xs text-gray-500 border-t border-gray-100 pt-4 flex flex-wrap gap-x-4 gap-y-2 justify-between items-center">
                                <span>Ek Etki: Hasta Randevularında Belirgin Artış</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. Uzmanlık Alanları ── */}
            <SEOAreasOfExpertise />
        </>
    );
}
