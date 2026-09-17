import Link from "next/link";
import TestimonialsSection from "../seo/TestimonialsSection";
import GEOReadinessAnalyzer from "./GEOReadinessAnalyzer";
import GEOTimeline from "./GEOTimeline";
import GEOProofSection from "./GEOProofSection";

const consultancySteps = [
    {
        num: "01",
        title: "Entity Denetimi ve Tutarlılık Analizi",
        desc: "Markanızın web genelindeki dijital ayak izlerini tarayarak çelişkileri tespit ediyoruz."
    },
    {
        num: "02",
        title: "Yapısal Veri ve Schema Kurulumu",
        desc: "Arama motoru botları ve yapay zeka araçları için Schema.org işaretlemelerini sisteme entegre ediyoruz."
    },
    {
        num: "03",
        title: "Co-Citation ve Dijital PR",
        desc: "Sektörel yayınlarda ve platformlarda markanızın doğru bağlamda anılmasını destekliyoruz."
    },
    {
        num: "04",
        title: "Raporlama ve Takip",
        desc: "ChatGPT, Gemini ve Perplexity üzerinde marka görünürlüğünü düzenli olarak izliyoruz."
    }
];

export default function GEOContent() {
    return (
        <>
        <div className="space-y-16">
            {/* ── 1. Kapsam ── */}
            <section id="geo-kapsami" className="scroll-mt-32 max-w-4xl mx-auto px-4 md:px-6" aria-labelledby="kapsam-heading">
                <h2 id="kapsam-heading" className="text-2xl font-bold text-gray-900 mb-4">
                    Birlikte Ne Yapıyoruz?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                    GEO danışmanlığında sitenizin ve markanızın yapay zeka destekli arama araçlarındaki mevcut durumunu birlikte analiz ediyoruz. Entity tutarlılığı, yapısal veri kullanımı, içerik biçimi ve web genelindeki atıf durumu gibi faktörleri değerlendirip iyileştirme önerileri sunuyoruz. Bunların her biri kesin bir sıralama faktörü değildir; ancak yapay zeka modellerinin kaynak seçiminde etkili olabilecek sinyaller arasında sayılmaktadır.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-50 border border-gray-100">
                        <h3 className="text-base font-bold text-gray-900 mb-4">Danışmanlık Kapsamı</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">–</span>Entity (varlık) tutarlılığı analizi</li>
                            <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">–</span>Schema.org ve yapısal veri değerlendirmesi</li>
                            <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">–</span>İçerik biçimi ve yanıtlanabilirlik incelemesi</li>
                            <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">–</span>Web genelinde atıf (co-citation) durumu</li>
                            <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">–</span>Platform bazlı görünürlük takibi ve raporlama</li>
                        </ul>
                    </div>

                    <div className="p-6 bg-gray-50 border border-gray-100">
                        <h3 className="text-base font-bold text-gray-900 mb-4">Kimler İçin Uygun?</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">–</span>Karar vericileri AI araçlarıyla araştırma yapan B2B firmaları</li>
                            <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">–</span>YMYL (hukuk, finans, sağlık) kategorisindeki markalar</li>
                            <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">–</span>Yapay zeka aramalarında görünürlüğünü değerlendirmek isteyenler</li>
                            <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">–</span>Mevcut SEO altyapısını AI kanallarına genişletmek isteyenler</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── 2. Opportunity + Readiness Analyzer ── */}
            <GEOReadinessAnalyzer />

            {/* ── 3. Somut Hizmetler (Süreç) ── */}
            <section id="surec-yapisi" className="scroll-mt-32 max-w-4xl mx-auto px-4 md:px-6" aria-labelledby="surec-heading">
                <h2 id="surec-heading" className="text-2xl font-bold text-gray-900 mb-4">
                    Danışmanlık Süreci
                </h2>
                <p className="text-gray-600 text-sm mb-8">
                    Dört aşamalı çalışma yapımız. Her adım bir öncekinin çıktılarına dayanır.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                    {consultancySteps.map((step) => (
                        <div key={step.num} className="border border-gray-100 p-6 bg-white">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{step.num}</span>
                            <h3 className="text-base font-bold text-gray-900 mt-2 mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── 4. 90 Gün Zaman Çizelgesi ── */}
            <GEOTimeline />

            {/* ── 5. Kanıt Alanı ── */}
            <GEOProofSection />

        </div>

        {/* ── Vaka Çalışmaları ── */}
        <section className="py-16 border-t border-gray-100 mt-16" id="vaka-calismalari" aria-labelledby="geo-cases-heading">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
                <h2 id="geo-cases-heading" className="text-2xl font-bold text-gray-900 mb-8">Vaka Çalışmaları</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {/* N Kolay */}
                    <article className="bg-white border border-gray-100 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Finans &amp; Teknoloji</span>
                            <span className="text-xs text-gray-400">2024–2025</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">N Kolay</h3>
                        <div className="space-y-2 mb-6 text-sm text-gray-600 border-t border-gray-100 pt-4">
                            <p>Kredi dikeyinde entity tabanlı semantik kurgu oluşturuldu.</p>
                            <p>Log analizleri ile tarama bütçesi optimize edildi.</p>
                            <p>JavaScript ve SSR altyapısı bot erişimine uygun hale getirildi.</p>
                        </div>
                        <div className="flex gap-6 mb-4">
                            <div>
                                <div className="text-xl font-bold text-gray-900">%210</div>
                                <div className="text-xs text-gray-500">Trafik Artışı</div>
                            </div>
                            <div>
                                <div className="text-xl font-bold text-gray-900">%2.193</div>
                                <div className="text-xs text-gray-500">Kredi Görünürlüğü</div>
                            </div>
                        </div>
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7419010392972034048/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-900 underline">
                            LinkedIn yayını →
                        </a>
                    </article>

                    {/* Dünyagöz */}
                    <article className="bg-white border border-gray-100 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Sağlık &amp; YMYL</span>
                            <span className="text-xs text-gray-400">8 Ay</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Dünyagöz</h3>
                        <div className="space-y-2 mb-6 text-sm text-gray-600 border-t border-gray-100 pt-4">
                            <p>YMYL kriterlerine uygun içerik ve yazar şeması entegrasyonu.</p>
                            <p>Tıbbi makaleler Schema.org işaretlemeleriyle donatıldı.</p>
                            <p>Organik kanallardan hasta başvurusuna dönüşüm hunisi optimize edildi.</p>
                        </div>
                        <div className="flex gap-6 mb-4">
                            <div>
                                <div className="text-xl font-bold text-gray-900">%145</div>
                                <div className="text-xs text-gray-500">Tıbbi Görünürlük</div>
                            </div>
                            <div>
                                <div className="text-xl font-bold text-gray-900">%34</div>
                                <div className="text-xs text-gray-500">Dönüşüm Artışı</div>
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
