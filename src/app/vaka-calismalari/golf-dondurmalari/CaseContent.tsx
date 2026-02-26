/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

export default function CaseContent() {
    return (
        <div className="min-h-screen bg-white">

            {/* ── HERO BANNER ── */}
            <div className="bg-gradient-to-br from-[#050d1a] via-[#0a1535] to-[#0d1f3c] px-6 py-20">
                <div className="max-w-5xl mx-auto">

                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-xs text-slate-500 mb-10 font-medium">
                        <Link href="/" className="hover:text-slate-300 transition-colors">Ana Sayfa</Link>
                        <span>/</span>
                        <Link href="/vaka-calismalari" className="hover:text-slate-300 transition-colors">Vaka Çalışmaları</Link>
                        <span>/</span>
                        <span className="text-slate-300">Golf Dondurmaları</span>
                    </nav>

                    <div className="mb-8">
                        <span className="inline-flex items-center gap-2 text-sky-400 font-bold tracking-widest text-xs uppercase mb-4 bg-sky-400/10 px-3 py-1.5 rounded-full border border-sky-400/20">
                            <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse" />
                            Vaka Analizi · FMCG · Mevsimsel SEO
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight leading-tight">
                            Golf Dondurmaları
                        </h1>
                        <p className="text-slate-400 text-base">
                            <a href="https://golf.com.tr/" target="_blank" rel="noopener noreferrer"
                                className="text-sky-400 hover:text-sky-300 font-semibold transition-colors">golf.com.tr</a>
                            {" "}· Eylül 2024'ten bu yana aktif çalışma
                        </p>
                    </div>

                    {/* Stat Cards */}
                    <div className="grid grid-cols-3 gap-4 mt-10">
                        {[
                            { value: "45.2K+", label: "Aylık Organik Ziyaretçi", sub: "Ocak 2026 zirvesi", color: "text-green-400", bg: "bg-green-400/10 border-green-400/20" },
                            { value: "7.2K+", label: "Organik Anahtar Kelime", sub: "Tarihi rekor", color: "text-sky-400", bg: "bg-sky-400/10 border-sky-400/20" },
                            { value: "Eylül 2024", label: "Proje Başlangıcı", sub: "Sezon öncesi hazırlık", color: "text-indigo-400", bg: "bg-indigo-400/10 border-indigo-400/20" },
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
                        src="/images/case-studies/golf-dondurmalari/chart.png"
                        alt="Golf Dondurmaları Organik Trafik ve Anahtar Kelime Büyüme Grafiği"
                        width={900}
                        height={560}
                        priority
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Section 1 */}
                <section>
                    <div className="flex items-center gap-3 mb-5">
                        <span className="font-mono text-xs text-sky-600 bg-sky-50 px-3 py-1 rounded-full font-bold border border-sky-100">01</span>
                        <h2 className="text-2xl font-bold text-gray-900">Proje Özeti</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed max-w-3xl">
                        Eylül 2024 itibarıyla başlatılan SEO operasyonu; mevsimsel trafik dalgalanmalarını kırmayı,
                        marka bilinirliğini artırmayı ve ürün odaklı aramalarda topikal otorite olmayı hedefledi.
                        Proje, özellikle 2025 yaz dönemi ve 2026 başında organik trafikte agresif bir büyüme yakaladı.
                    </p>
                </section>

                {/* Section 2 */}
                <section>
                    <div className="flex items-center gap-3 mb-5">
                        <span className="font-mono text-xs text-sky-600 bg-sky-50 px-3 py-1 rounded-full font-bold border border-sky-100">02</span>
                        <h2 className="text-2xl font-bold text-gray-900">Mevcut Durum ve Stratejik Odak (Eylül 2024)</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-5">
                        {[
                            { icon: "📅", title: "Stratejik Zamanlama", desc: "Sezon sonu (Eylül) itibarıyla başlatılan çalışma, bir sonraki yazа (2025) hazırlık olarak kurgulandı — tam da rakipler uyurken." },
                            { icon: "🎯", title: "Kritik Hedef", desc: "'Dondurma', 'tatlı tarifleri' ve ürün markaları özelindeki aramalarda rakiplerin önüne geçmek ve kategoride lider olmak." },
                            { icon: "❄️", title: "Teknik Zorluk", desc: "Mevsimsel düşüş trendini, zengin içerik ve semantik optimizasyon ile bir büyüme fırsatına dönüştürmek." },
                        ].map((c) => (
                            <div key={c.title} className="bg-sky-50 border border-sky-100 rounded-2xl p-6">
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
                        <span className="font-mono text-xs text-sky-600 bg-sky-50 px-3 py-1 rounded-full font-bold border border-sky-100">03</span>
                        <h2 className="text-2xl font-bold text-gray-900">Uygulanan Stratejik Hamleler</h2>
                    </div>
                    <div className="space-y-6 max-w-3xl">
                        <div className="border-l-4 border-sky-500 pl-6 py-1">
                            <h3 className="font-bold text-gray-900 mb-2">A. Semantik İçerik ve Tarif Optimizasyonu</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Sadece ürün tanıtımı değil, "Dondurmalı tarifler" ve "Yaz tatlıları" gibi genişleyen semantik
                                kümeler oluşturuldu. Bu sayede site, salt bir kurumsal sayfadan bir "lezzet rehberi" otoritesine
                                dönüştürüldü.
                            </p>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-6 py-1">
                            <h3 className="font-bold text-gray-900 mb-2">B. SERP Özellikleri ve AI Overviews Dominasyonu</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Grafikteki mor (AI Overviews) ve yeşil (Other SERP Features) alanlardaki genişleme, Eylül 2024
                                sonrası kurgulanan GEO stratejisinin bir sonucu. Google'ın "Dondurma nasıl saklanır?" gibi
                                yapay zeka yanıtlarında Golf ana kaynaklardan biri haline getirildi.
                            </p>
                        </div>
                        <div className="border-l-4 border-indigo-500 pl-6 py-1">
                            <h3 className="font-bold text-gray-900 mb-2">C. Teknik SEO ve Performans Optimizasyonu</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Site hızı ve mobil deneyim, kullanıcıların ürünlere en hızlı şekilde ulaşabileceği şekilde
                                optimize edildi. Site içi linkleme, Maraşım, Roko gibi popüler ürün gruplarının otoritesini
                                artıracak şekilde yeniden yapılandırıldı.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 4 */}
                <section>
                    <div className="flex items-center gap-3 mb-5">
                        <span className="font-mono text-xs text-sky-600 bg-sky-50 px-3 py-1 rounded-full font-bold border border-sky-100">04</span>
                        <h2 className="text-2xl font-bold text-gray-900">Çarpıcı Sonuçlar <span className="text-gray-400 font-normal text-lg">(Eylül 2024 – Ocak 2026)</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        {[
                            { icon: "📈", title: "45.2K Organik Trafik Rekoru", desc: "Eylül 2024'te atılan temeller, Ocak 2026'da markanın dijital tarihindeki en yüksek trafik hacimlerinden birine ulaştı." },
                            { icon: "🔑", title: "7.2K Anahtar Kelime", desc: "Toplam anahtar kelime hacmi 7.200 seviyesini görerek markanın erişim alanını devasa boyutta genişletti." },
                            { icon: "🥇", title: "Top 3 SERP Dominasyonu", desc: "Sektörel anahtar kelimelerde en değerli ilk 3 sıra konumu maksimize edildi. Rakip markalar geride bırakıldı." },
                            { icon: "🌨️", title: "Mevsimsel Direnç", desc: "Normalde kışın düşmesi beklenen trafik, güçlü SEO temelleri sayesinde Ocak 2026'da yüksek bir çizgide kalmayı başardı." },
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
                <section className="bg-gradient-to-br from-[#050d1a] to-[#0d1f3c] rounded-3xl p-10">
                    <div className="flex items-center gap-3 mb-5">
                        <span className="font-mono text-xs text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full font-bold border border-sky-400/20">05</span>
                        <h2 className="text-2xl font-bold text-white">Sonuç</h2>
                    </div>
                    <p className="text-slate-400 leading-relaxed max-w-3xl">
                        Golf Dondurmaları projesi, FMCG sektöründe SEO'nun sadece "aranma" değil, bir
                        "marka tercih edilme" aracı olduğunu kanıtlıyor. Eylül 2024'te başlayan strateji,
                        markayı dijital arama ekosisteminde rakiplerinden ayrıştırarak
                        <strong className="text-white"> lider konuma taşıdı.</strong>
                    </p>
                </section>

                {/* CTA */}
                <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                    <Link href="/vaka-calismalari" className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-sky-700 transition-colors group">
                        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        Tüm Vaka Çalışmaları
                    </Link>
                    <Link href="/vaka-calismalari/dr-ersoy-kocabicak" className="flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-900 transition-colors group">
                        Sıradaki: Dr. Ersoy Kocabıçak
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
