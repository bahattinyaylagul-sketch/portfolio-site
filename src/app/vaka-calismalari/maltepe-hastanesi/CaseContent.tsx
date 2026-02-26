/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

export default function CaseContent() {
    return (
        <div className="min-h-screen bg-white">

            {/* ── HERO BANNER ── */}
            <div className="bg-gradient-to-br from-[#1a0505] via-[#2d0a0a] to-[#0f1a2e] px-6 py-20">
                <div className="max-w-5xl mx-auto">

                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-xs text-slate-500 mb-10 font-medium">
                        <Link href="/" className="hover:text-slate-300 transition-colors">Ana Sayfa</Link>
                        <span>/</span>
                        <Link href="/vaka-calismalari" className="hover:text-slate-300 transition-colors">Vaka Çalışmaları</Link>
                        <span>/</span>
                        <span className="text-slate-300">Maltepe Hastanesi</span>
                    </nav>

                    <div className="mb-8">
                        <span className="inline-flex items-center gap-2 text-red-400 font-bold tracking-widest text-xs uppercase mb-4 bg-red-400/10 px-3 py-1.5 rounded-full border border-red-400/20">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
                            Vaka Analizi · Sağlık / YMYL · Migration Kurtarma
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight leading-tight">
                            Maltepe Hastanesi
                        </h1>
                        <p className="text-slate-400 text-base">
                            Hatalı site taşıması sonrası çöken trafiğin kurtarılması ve{" "}
                            <strong className="text-white">V-tipi toparlanma</strong> hikayesi
                        </p>
                    </div>

                    {/* Stat Cards */}
                    <div className="grid grid-cols-3 gap-4 mt-10">
                        {[
                            { value: "370.4K+", label: "Aylık Organik Ziyaretçi", sub: "Ocak 2026 zirvesi", color: "text-green-400", bg: "bg-green-400/10 border-green-400/20" },
                            { value: "74.6K+", label: "Organik Anahtar Kelime", sub: "Tarihi rekor", color: "text-cyan-400", bg: "bg-cyan-400/10 border-cyan-400/20" },
                            { value: "Haziran 2025", label: "Müdahale Tarihi", sub: "V-tipi toparlanma", color: "text-red-400", bg: "bg-red-400/10 border-red-400/20" },
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
                        src="/images/case-studies/maltepe-hastanesi/chart.png"
                        alt="Maltepe Hastanesi Organik Trafik Migration Kurtarma Grafiği"
                        width={900}
                        height={560}
                        priority
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Section 1 */}
                <section>
                    <div className="flex items-center gap-3 mb-5">
                        <span className="font-mono text-xs text-red-600 bg-red-50 px-3 py-1 rounded-full font-bold border border-red-100">01</span>
                        <h2 className="text-2xl font-bold text-gray-900">Proje Özeti</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed max-w-3xl">
                        Maltepe Hastanesi'nin dijital varlığı, gerçekleştirilen hatalı bir site taşıma (migration) işlemi
                        sonrası ciddi bir görünürlük kaybına uğradı. Haziran 2025'te başlayan stratejik müdahale ile teknik
                        hatalar giderildi, kaybolan otorite geri kazanıldı ve Ocak 2026'da <strong>370.4K organik trafik</strong>{" "}
                        ile tarihi zirveye ulaşıldı.
                    </p>
                </section>

                {/* Section 2 — Kriz */}
                <section>
                    <div className="flex items-center gap-3 mb-5">
                        <span className="font-mono text-xs text-red-600 bg-red-50 px-3 py-1 rounded-full font-bold border border-red-100">02</span>
                        <h2 className="text-2xl font-bold text-gray-900">Kriz Analizi (Haziran 2025)</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-5">
                        {[
                            { icon: "💥", title: "Kritik Sorun", desc: "Hatalı yönlendirmeler (301), 404 hataları ve meta veri kayıpları nedeniyle trafik grafiği sert bir şekilde düştü." },
                            { icon: "📉", title: "Kayıp Boyutu", desc: "Organik trafik ve anahtar kelime sıralamaları neredeyse sıfırlanma noktasına geldi, dijital randevu kanalları ciddi zarar gördü." },
                            { icon: "🎯", title: "Hedef", desc: "Kaybedilen trafiği geri kazanmak ve GEO/AI standartlarıyla görünürlüğü migration öncesi dönemin 2 katına çıkarmak." },
                        ].map((c) => (
                            <div key={c.title} className="bg-red-50 border border-red-100 rounded-2xl p-6">
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
                        <span className="font-mono text-xs text-red-600 bg-red-50 px-3 py-1 rounded-full font-bold border border-red-100">03</span>
                        <h2 className="text-2xl font-bold text-gray-900">Uygulanan Kurtarma Stratejileri</h2>
                    </div>
                    <div className="space-y-6 max-w-3xl">
                        <div className="border-l-4 border-red-500 pl-6 py-1">
                            <h3 className="font-bold text-gray-900 mb-2">A. Teknik Enkaz Kaldırma (Migration Fix)</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Eski URL yapısı ile yeni yapı arasındaki kopukluklar giderildi. Tüm backlink otoritesi doğru
                                sayfalara 301 yönlendirmesiyle bağlandı. Kullanıcı deneyimini bozan ve Google botlarını
                                engelleyen tüm teknik hatalar sistematik olarak temizlendi.
                            </p>
                        </div>
                        <div className="border-l-4 border-orange-500 pl-6 py-1">
                            <h3 className="font-bold text-gray-900 mb-2">B. Semantik Re-Optimizasyon ve Otorite İnşası</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Hastanenin uzmanlık alanlarındaki içerikler, sağlık sektörü için kritik olan E-E-A-T prensiplerine
                                göre güncellendi. Tıbbi içerikler, kullanıcı niyetini tam karşılayacak semantik yapılarla zenginleştirildi.
                            </p>
                        </div>
                        <div className="border-l-4 border-cyan-500 pl-6 py-1">
                            <h3 className="font-bold text-gray-900 mb-2">C. AI Overviews ve Gelecek Odaklı SEO</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Kurtarma operasyonu sadece eskiyi geri getirmekle kalmadı — siteyi modern arama motoru
                                özelliklerine (AI Overviews, Featured Snippets) tam uyumlu hale getirdi. Grafikteki mor
                                alandaki artış, yapay zeka özetlerindeki varlığın ne kadar hızlı büyüdüğünü gösteriyor.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 4 */}
                <section>
                    <div className="flex items-center gap-3 mb-5">
                        <span className="font-mono text-xs text-red-600 bg-red-50 px-3 py-1 rounded-full font-bold border border-red-100">04</span>
                        <h2 className="text-2xl font-bold text-gray-900">Çarpıcı Sonuçlar</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        {[
                            { icon: "📈", title: "V-Tipi Toparlanma: 370.4K", desc: "Haziran 2025'teki dipten sonra başlayan ivme, Ocak 2026'da 370.4K ile migration öncesi dönemin de çok üzerine çıktı." },
                            { icon: "🔑", title: "74.6K Anahtar Kelime Rekoru", desc: "Toplam anahtar kelime görünürlüğü 74.600 seviyesine ulaşarak sitenin kapsamı devasa oranda genişledi." },
                            { icon: "🥇", title: "Top 3 Dominasyonu", desc: "En rekabetçi tıbbi terimlerde ilk 3 sıradaki oturmalar maximize edildi. Rakip hastaneler geride bırakıldı." },
                            { icon: "🤖", title: "SERP Tam Hakimiyeti", desc: "Video sonuçları, öne çıkan snippetlar ve AI özetleri ile arama sonuç sayfası çok katmanlı şekilde domine edildi." },
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
                <section className="bg-gradient-to-br from-[#1a0505] to-[#0f1a2e] rounded-3xl p-10">
                    <div className="flex items-center gap-3 mb-5">
                        <span className="font-mono text-xs text-red-400 bg-red-400/10 px-3 py-1 rounded-full font-bold border border-red-400/20">05</span>
                        <h2 className="text-2xl font-bold text-white">Sonuç</h2>
                    </div>
                    <p className="text-slate-400 leading-relaxed max-w-3xl">
                        Maltepe Hastanesi vakası, hatalı bir teknik sürecin doğru bir SEO stratejisiyle nasıl büyük bir
                        fırsata dönüştürülebileceğinin en net kanıtı. Yapılan müdahale sadece bir "tamir" değil —
                        sitenin dijital kapasitesini kökten artıran bir{" "}
                        <strong className="text-white">"yeniden inşa" süreciydi.</strong>
                    </p>
                </section>

                {/* CTA */}
                <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                    <Link href="/vaka-calismalari" className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-red-700 transition-colors group">
                        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        Tüm Vaka Çalışmaları
                    </Link>
                    <Link href="/vaka-calismalari/atlas-universitesi" className="flex items-center gap-2 text-sm font-semibold text-red-700 hover:text-red-900 transition-colors group">
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
