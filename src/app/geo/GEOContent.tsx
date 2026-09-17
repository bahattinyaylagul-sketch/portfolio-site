import Link from "next/link";
import TestimonialsSection from "../seo/TestimonialsSection";
import GEOReadinessAnalyzer from "./GEOReadinessAnalyzer";
import GEOConsultancyProcess from "./GEOConsultancyProcess";
import GEOProofSection from "./GEOProofSection";

export default function GEOContent() {
    return (
        <>
        <div className="space-y-20">
            {/* ── 1. Kapsam ── */}
            <section id="geo-kapsami" className="scroll-mt-32 max-w-5xl mx-auto px-4 md:px-6" aria-labelledby="kapsam-heading">
                <div className="mb-6">
                    <span className="inline-block w-8 h-0.5 bg-violet-500 mb-4"></span>
                    <h2 id="kapsam-heading" className="text-3xl font-bold text-gray-900 mb-4">
                        Birlikte Ne Yapıyoruz?
                    </h2>
                    <p className="text-gray-600 leading-relaxed max-w-3xl">
                        GEO danışmanlığında sitenizin ve markanızın yapay zeka destekli arama araçlarındaki mevcut durumunu birlikte analiz ediyoruz. Entity tutarlılığı, yapısal veri kullanımı, içerik biçimi ve web genelindeki atıf durumu gibi faktörleri değerlendirip iyileştirme önerileri sunuyoruz. Bunların her biri kesin bir sıralama faktörü değildir; ancak yapay zeka modellerinin kaynak seçiminde etkili olabilecek sinyaller arasında sayılmaktadır.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-violet-50/50 border border-violet-100 rounded-xl">
                        <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <svg className="w-4 h-4 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                            Danışmanlık Kapsamı
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex items-start gap-2.5"><span className="w-1 h-1 bg-violet-400 rounded-full mt-2 shrink-0"></span>Entity (varlık) tutarlılığı analizi</li>
                            <li className="flex items-start gap-2.5"><span className="w-1 h-1 bg-violet-400 rounded-full mt-2 shrink-0"></span>Schema.org ve yapısal veri değerlendirmesi</li>
                            <li className="flex items-start gap-2.5"><span className="w-1 h-1 bg-violet-400 rounded-full mt-2 shrink-0"></span>İçerik biçimi ve yanıtlanabilirlik incelemesi</li>
                            <li className="flex items-start gap-2.5"><span className="w-1 h-1 bg-violet-400 rounded-full mt-2 shrink-0"></span>Web genelinde atıf (co-citation) durumu</li>
                            <li className="flex items-start gap-2.5"><span className="w-1 h-1 bg-violet-400 rounded-full mt-2 shrink-0"></span>Platform bazlı görünürlük takibi ve raporlama</li>
                        </ul>
                    </div>

                    <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl">
                        <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <svg className="w-4 h-4 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            Kimler İçin Uygun?
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex items-start gap-2.5"><span className="w-1 h-1 bg-gray-400 rounded-full mt-2 shrink-0"></span>Karar vericileri AI araçlarıyla araştırma yapan B2B firmaları</li>
                            <li className="flex items-start gap-2.5"><span className="w-1 h-1 bg-gray-400 rounded-full mt-2 shrink-0"></span>YMYL (hukuk, finans, sağlık) kategorisindeki markalar</li>
                            <li className="flex items-start gap-2.5"><span className="w-1 h-1 bg-gray-400 rounded-full mt-2 shrink-0"></span>Yapay zeka aramalarında görünürlüğünü değerlendirmek isteyenler</li>
                            <li className="flex items-start gap-2.5"><span className="w-1 h-1 bg-gray-400 rounded-full mt-2 shrink-0"></span>Mevcut SEO altyapısını AI kanallarına genişletmek isteyenler</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── 2. Opportunity + Readiness Analyzer ── */}
            <GEOReadinessAnalyzer />

            {/* ── 3. 4 Aşamalı Danışmanlık Süreci ── */}
            <GEOConsultancyProcess />

            {/* ── 4. Kanıt Alanı ── */}
            <GEOProofSection />

        </div>

        {/* ── Vaka Çalışmaları ── */}
        <section className="py-16 border-t border-gray-100 mt-16" id="vaka-calismalari" aria-labelledby="geo-cases-heading">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
                <div className="mb-8">
                    <span className="inline-block w-8 h-0.5 bg-violet-500 mb-4"></span>
                    <h2 id="geo-cases-heading" className="text-3xl font-bold text-gray-900">Vaka Çalışmaları</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {/* N Kolay */}
                    <article className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <span className="px-2.5 py-1 bg-violet-50 text-violet-700 text-[10px] font-bold uppercase tracking-wider rounded-md">Finans &amp; Teknoloji</span>
                            <span className="text-xs text-gray-400">2024–2025</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">N Kolay</h3>
                        <div className="space-y-2 mb-6 text-sm text-gray-600 border-t border-gray-100 pt-4">
                            <p>Kredi dikeyinde entity tabanlı semantik kurgu oluşturuldu.</p>
                            <p>Log analizleri ile tarama bütçesi optimize edildi.</p>
                            <p>JavaScript ve SSR altyapısı bot erişimine uygun hale getirildi.</p>
                        </div>
                        <div className="flex gap-6 mb-4 bg-gray-50 rounded-lg p-4">
                            <div>
                                <div className="text-2xl font-black text-violet-600">%210</div>
                                <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Trafik Artışı</div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-violet-600">%2.193</div>
                                <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Kredi Görünürlüğü</div>
                            </div>
                        </div>
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7419010392972034048/" target="_blank" rel="noopener noreferrer" className="text-sm text-violet-600 hover:text-violet-800 font-medium">
                            LinkedIn yayını →
                        </a>
                    </article>

                    {/* Dünyagöz */}
                    <article className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <span className="px-2.5 py-1 bg-teal-50 text-teal-700 text-[10px] font-bold uppercase tracking-wider rounded-md">Sağlık &amp; YMYL</span>
                            <span className="text-xs text-gray-400">8 Ay</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Dünyagöz</h3>
                        <div className="space-y-2 mb-6 text-sm text-gray-600 border-t border-gray-100 pt-4">
                            <p>YMYL kriterlerine uygun içerik ve yazar şeması entegrasyonu.</p>
                            <p>Tıbbi makaleler Schema.org işaretlemeleriyle donatıldı.</p>
                            <p>Organik kanallardan hasta başvurusuna dönüşüm hunisi optimize edildi.</p>
                        </div>
                        <div className="flex gap-6 mb-4 bg-gray-50 rounded-lg p-4">
                            <div>
                                <div className="text-2xl font-black text-teal-600">%145</div>
                                <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Tıbbi Görünürlük</div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-teal-600">%34</div>
                                <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Dönüşüm Artışı</div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <TestimonialsSection />
    </>
    );
}
