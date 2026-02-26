/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

export default function CaseContent() {
    return (
        <div className="min-h-screen bg-white">

            {/* ── HERO BANNER ── */}
            <div className="bg-gradient-to-br from-[#0f0f1a] via-[#1a1035] to-[#0f1a2e] px-6 py-20">
                <div className="max-w-5xl mx-auto">

                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-xs text-slate-500 mb-10 font-medium">
                        <Link href="/" className="hover:text-slate-300 transition-colors">Ana Sayfa</Link>
                        <span>/</span>
                        <Link href="/vaka-calismalari" className="hover:text-slate-300 transition-colors">Vaka Çalışmaları</Link>
                        <span>/</span>
                        <span className="text-slate-300">Mert Dumantepe</span>
                    </nav>

                    <div className="mb-8">
                        <span className="inline-flex items-center gap-2 text-purple-400 font-bold tracking-widest text-xs uppercase mb-4 bg-purple-400/10 px-3 py-1.5 rounded-full border border-purple-400/20">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
                            Vaka Analizi · Kişisel Marka · GEO/SEO
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight leading-tight">
                            Mert Dumantepe
                        </h1>
                        <p className="text-slate-400 text-base">
                            <a href="https://mertdumantepe.com/" target="_blank" rel="noopener noreferrer"
                                className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">mertdumantepe.com</a>
                            {" "}· Haziran 2025'ten bu yana aktif çalışma
                        </p>
                    </div>

                    {/* Stat Cards */}
                    <div className="grid grid-cols-3 gap-4 mt-10">
                        {[
                            { value: "25.1K+", label: "Aylık Organik Ziyaretçi", sub: "Ocak 2026 zirvesi", color: "text-green-400", bg: "bg-green-400/10 border-green-400/20" },
                            { value: "8.2K+", label: "Organik Anahtar Kelime", sub: "Ahrefs verisi", color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/20" },
                            { value: "Haziran 2025", label: "Proje Başlangıcı", sub: "Devam ediyor", color: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/20" },
                        ].map((s) => (
                            <div key={s.label} className={`${s.bg} border rounded-2xl p-5 text-center backdrop-blur-sm`}>
                                <div className={`text-2xl md:text-3xl font-black mb-1 ${s.color}`}>{s.value}</div>
                                <div className="text-xs font-semibold text-slate-300 mb-0.5">{s.label}</div>
                                <div className="text-[10px] text-slate-500">{s.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── CONTENT ── */}
            <div className="max-w-5xl mx-auto px-6 md:px-8 py-16 space-y-16">

                {/* Chart */}
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 max-w-3xl mx-auto">
                    <Image
                        src="/images/case-studies/mert-dumantepe/chart.png"
                        alt="Mert Dumantepe Organik Trafik ve Anahtar Kelime Büyüme Grafiği"
                        width={900}
                        height={560}
                        priority
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Section 1 */}
                <section>
                    <div className="flex items-center gap-3 mb-5">
                        <span className="font-mono text-xs text-purple-600 bg-purple-50 px-3 py-1 rounded-full font-bold border border-purple-100">01</span>
                        <h2 className="text-2xl font-bold text-gray-900">Proje Özeti</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed max-w-3xl">
                        Haziran 2025 itibarıyla mertdumantepe.com üzerinde başlatılan SEO çalışmaları; teknik optimizasyon,
                        semantik içerik stratejisi ve yapay zeka odaklı arama görünürlüğü (GEO) üzerine kurgulandı.
                        Projenin ana odak noktası: sektördeki uzmanlık alanlarında topikal otorite oluşturarak
                        organik trafiği domine etmek.
                    </p>
                </section>

                {/* Section 2 */}
                <section>
                    <div className="flex items-center gap-3 mb-5">
                        <span className="font-mono text-xs text-purple-600 bg-purple-50 px-3 py-1 rounded-full font-bold border border-purple-100">02</span>
                        <h2 className="text-2xl font-bold text-gray-900">Başlangıç Durumu (Haziran 2025)</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        {[
                            { icon: "📊", title: "Mevcut Durum", desc: "Site belirli bir seviyede trafiğe sahipti ancak Ocak 2026'daki büyük sıçrama öncesinde stabil ve yatay bir performans sergiliyordu." },
                            { icon: "🎯", title: "Hedef", desc: "Uzmanlık alanlarına dair anahtar kelimelerde ilk 3 sıraya yerleşmek ve AI destekli arama sonuçlarında (SGE) görünürlük kazanmak." },
                        ].map((c) => (
                            <div key={c.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                                <div className="text-2xl mb-3">{c.icon}</div>
                                <h3 className="text-sm font-bold text-gray-900 mb-2">{c.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 3 */}
                <section>
                    <div className="flex items-center gap-3 mb-5">
                        <span className="font-mono text-xs text-purple-600 bg-purple-50 px-3 py-1 rounded-full font-bold border border-purple-100">03</span>
                        <h2 className="text-2xl font-bold text-gray-900">Uygulanan Stratejik Adımlar</h2>
                    </div>
                    <div className="space-y-6 max-w-3xl">
                        <div className="border-l-4 border-purple-500 pl-6 py-1">
                            <h3 className="font-bold text-gray-900 mb-2">A. Semantik İçerik Yapılandırması</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Uzmanlık alanlarına dair içerikler, Google'ın vektör uzay modeline ve kullanıcı niyetine göre yeniden optimize edildi.
                                Bilgi eksiklikleri giderilerek sitenin ilgili konularda eksiksiz bir kaynak haline gelmesi sağlandı.
                            </p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-6 py-1">
                            <h3 className="font-bold text-gray-900 mb-2">B. AI Overviews ve GEO Stratejisi</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Haziran 2025'ten itibaren uygulanan GEO stratejisiyle karmaşık sorgularda sitenin referans otoritesi artırıldı.
                                Grafikteki mor ve açık mavi katmanlardaki artış, yapay zeka tarafından oluşturulan yanıtlarda
                                kaynak gösterilmeye başlandığını kanıtlıyor.
                            </p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-6 py-1">
                            <h3 className="font-bold text-gray-900 mb-2">C. Sıralama Dominasyonu ve Teknik SEO</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Top 3 ve 4-10 alanlarındaki dramatik genişleme, teknik altyapı iyileştirmelerinin ve site içi
                                linkleme stratejisinin bir sonucu. Sitenin mimarisi, en değerli içeriklerin arama motorları
                                tarafından en hızlı şekilde taranıp ödüllendirilmesi üzerine kurgulandı.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 4 */}
                <section>
                    <div className="flex items-center gap-3 mb-5">
                        <span className="font-mono text-xs text-purple-600 bg-purple-50 px-3 py-1 rounded-full font-bold border border-purple-100">04</span>
                        <h2 className="text-2xl font-bold text-gray-900">Çarpıcı Sonuçlar <span className="text-gray-400 font-normal text-lg">(Haziran 2025 – Ocak 2026)</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        {[
                            { icon: "📈", title: "25.1K Organik Ziyaretçi", desc: "Haziran 2025'te başlayan ivme, Ocak 2026'da tarihi zirveye ulaşarak organik trafiği maksimize etti." },
                            { icon: "🔑", title: "8.2K+ Anahtar Kelime", desc: "Toplam anahtar kelime havuzu 8.200 seviyesini aşarak çok daha geniş bir kitleye ulaşma başarısı gösterdi." },
                            { icon: "🥇", title: "Top 3 Sıralama Dominasyonu", desc: "İlk 3 sıra ve ilk 10 sonuçtaki anahtar kelime sayısı kısa sürede rekor seviyeye çıktı." },
                            { icon: "🤖", title: "AI Overviews Görünürlüğü", desc: "Karmaşık sorularda yapay zeka yanıtlarında kaynak olarak gösterilme — kişisel markayı bir bilgi otoritesine dönüştürdü." },
                        ].map((r) => (
                            <div key={r.title} className="flex gap-4 p-5 bg-slate-50 border border-slate-100 rounded-2xl">
                                <span className="text-2xl flex-shrink-0">{r.icon}</span>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-sm mb-1">{r.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 5 */}
                <section className="bg-gradient-to-br from-[#0f0f1a] to-[#1a1035] rounded-3xl p-10">
                    <div className="flex items-center gap-3 mb-5">
                        <span className="font-mono text-xs text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full font-bold border border-purple-400/20">05</span>
                        <h2 className="text-2xl font-bold text-white">Sonuç</h2>
                    </div>
                    <p className="text-slate-400 leading-relaxed max-w-3xl">
                        Mert Dumantepe projesi, doğru kurgulanmış bir kişisel SEO stratejisinin kısa sürede nasıl bir
                        "Bilgi Otoritesi"ne dönüşebileceğini gösteriyor. Haziran 2025'te atılan temeller,
                        Ocak 2026 itibarıyla sitenin kendi nişinde en güçlü oyunculardan biri haline gelmesini sağladı —
                        ve bu büyüme <strong className="text-white">hâlâ devam ediyor.</strong>
                    </p>
                </section>

                {/* CTA */}
                <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                    <Link href="/vaka-calismalari" className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-700 transition-colors group">
                        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        Tüm Vaka Çalışmaları
                    </Link>
                    <Link href="/vaka-calismalari/atlas-universitesi" className="flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors group">
                        Sıradaki: Atlas Üniversitesi
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
