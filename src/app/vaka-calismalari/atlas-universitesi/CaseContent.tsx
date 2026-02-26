/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

export default function CaseContent() {
    return (
        <div className="min-h-screen bg-white">

            {/* ── HERO BANNER ── */}
            <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 px-6 py-20">
                <div className="max-w-5xl mx-auto">

                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-xs text-slate-500 mb-10 font-medium">
                        <Link href="/" className="hover:text-slate-300 transition-colors">Ana Sayfa</Link>
                        <span>/</span>
                        <Link href="/vaka-calismalari" className="hover:text-slate-300 transition-colors">Vaka Çalışmaları</Link>
                        <span>/</span>
                        <span className="text-slate-300">Atlas Üniversitesi</span>
                    </nav>

                    <div className="flex flex-col md:flex-row md:items-center gap-8">
                        <div className="flex-shrink-0">
                            <div className="bg-white rounded-2xl p-4 w-36 h-20 flex items-center justify-center shadow-xl">
                                <Image
                                    src="/images/case-studies/atlas-universitesi/logo.png"
                                    alt="Atlas Üniversitesi Logo"
                                    width={120}
                                    height={60}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        </div>
                        <div>
                            <span className="inline-flex items-center gap-2 text-blue-400 font-bold tracking-widest text-xs uppercase mb-3 bg-blue-400/10 px-3 py-1.5 rounded-full border border-blue-400/20">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                                Vaka Analizi · Sağlık / YMYL
                            </span>
                            <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight leading-tight">
                                Atlas Üniversitesi
                            </h1>
                            <p className="text-slate-400 text-base">
                                <a href="https://www.atlas.edu.tr/" target="_blank" rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">atlas.edu.tr</a>
                                {" "}· Mayıs 2024'ten bu yana aktif çalışma
                            </p>
                        </div>
                    </div>

                    {/* Stat Cards */}
                    <div className="grid grid-cols-3 gap-4 mt-12">
                        {[
                            { value: "184K+", label: "Aylık Organik Ziyaretçi", sub: "Ocak 2026 zirvesi", color: "text-green-400", bg: "bg-green-400/10 border-green-400/20" },
                            { value: "31K+", label: "Organik Anahtar Kelime", sub: "Ahrefs verisi", color: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/20" },
                            { value: "Mayıs 2024", label: "Proje Başlangıcı", sub: "Devam ediyor", color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/20" },
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

                {/* Chart — smaller */}
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 max-w-3xl mx-auto">
                    <Image
                        src="/images/case-studies/atlas-universitesi/chart.png"
                        alt="Atlas Üniversitesi Organik Trafik ve Anahtar Kelime Büyüme Grafiği"
                        width={900}
                        height={560}
                        priority
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Intro */}
                <p className="text-gray-600 leading-relaxed text-base max-w-3xl">
                    Atlas Üniversitesi için Mayıs 2024'te başlayan ve günümüze kadar uzanan bu etkileyici büyüme grafiği,
                    tam bir "SEO Başarı Hikayesi" niteliğinde. Özellikle AI Overviews (SGE) ve Top 3 konumlandırmalarındaki
                    dikey artış, stratejinin ne kadar doğru kurgulandığını gösteriyor.
                </p>

                {/* Section 1 */}
                <section>
                    <div className="flex items-center gap-3 mb-5">
                        <span className="font-mono text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full font-bold border border-blue-100">01</span>
                        <h2 className="text-2xl font-bold text-gray-900">Proje Özeti</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed max-w-3xl">
                        Mayıs 2024 itibarıyla stratejik bir SEO operasyonuna başlayan Atlas Üniversitesi, özellikle 2025 sonu
                        ve 2026 başında organik trafik ve anahtar kelime görünürlüğünde rekor seviyelere ulaştı. Geleneksel
                        arama sonuçlarının ötesinde, yapay zeka odaklı arama ekosistemine (GEO/SGE) tam uyum sağlandı.
                    </p>
                </section>

                {/* Section 2 */}
                <section>
                    <div className="flex items-center gap-3 mb-5">
                        <span className="font-mono text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full font-bold border border-blue-100">02</span>
                        <h2 className="text-2xl font-bold text-gray-900">Mevcut Durum ve Hedefler (Mayıs 2024)</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-5">
                        {[
                            { icon: "📍", title: "Başlangıç Noktası", desc: "İstikrarlı ancak yatay seyreden bir trafik grafiği." },
                            { icon: "🎯", title: "Hedef", desc: "Tercih dönemi, bölümler ve kampüs yaşamı gibi yüksek rekabetli anahtar kelimelerde ilk 3 sırayı domine etmek." },
                            { icon: "🤖", title: "Stratejik Odak", desc: "Yapay zeka destekli arama sonuçlarında (AI Overviews) görünürlük kazanmak ve otorite skorunu artırmak." },
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
                        <span className="font-mono text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full font-bold border border-blue-100">03</span>
                        <h2 className="text-2xl font-bold text-gray-900">Uygulanan Stratejiler</h2>
                    </div>
                    <div className="space-y-6 max-w-3xl">
                        <div className="border-l-4 border-blue-500 pl-6 py-1">
                            <h3 className="font-bold text-gray-900 mb-2">A. Semantik İçerik ve Topikal Otorite</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Sadece anahtar kelime odaklı değil, vektör uzay modeline uygun içerik kümeleri oluşturuldu.
                                Bölüm sayfaları ve blog içerikleri, kullanıcı niyetini tam karşılayacak şekilde semantik olarak zenginleştirildi.
                            </p>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-6 py-1">
                            <h3 className="font-bold text-gray-900 mb-2">B. Teknik SEO ve Site Mimarisi</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Site içi linkleme hiyerarşisi, en değerli sayfaların link gücünden maksimum faydayı alacağı şekilde
                                optimize edildi. Tarama bütçesi yönetimiyle Google botlarının yeni içerikleri çok daha hızlı
                                dizine eklemesi sağlandı.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 4 */}
                <section>
                    <div className="flex items-center gap-3 mb-5">
                        <span className="font-mono text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full font-bold border border-blue-100">04</span>
                        <h2 className="text-2xl font-bold text-gray-900">Elde Edilen Sonuçlar <span className="text-gray-400 font-normal text-lg">(Mayıs 2024 – Ocak 2026)</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        {[
                            { icon: "📈", title: "Trafik Patlaması", desc: "Mayıs 2024'te başlayan ivme, Ocak 2026'da 184.4K seviyeye ulaşarak trafik hacmini katlayarak büyüttü." },
                            { icon: "🥇", title: "Top 3 Sıralama Dominasyonu", desc: "En değerli sıralamalarda (Top 3) devasa bir genişleme kaydedildi. En yüksek dönüşüm getiren konumlarda güçlü kelime hakimiyeti." },
                            { icon: "🔑", title: "31K+ Anahtar Kelime", desc: "Toplam organik görünürlük 31.000 anahtar kelime sınırını aşarak tarihî zirvesini gördü." },
                            { icon: "🧠", title: "AI Overviews'de Kaynak", desc: "'Other SERP Features' ve 'AI Overviews' alanlarındaki yoğunluk, markanın bir bilgi kaynağı olarak konumlandığını kanıtladı." },
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
                <section className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10">
                    <div className="flex items-center gap-3 mb-5">
                        <span className="font-mono text-xs text-green-400 bg-green-400/10 px-3 py-1 rounded-full font-bold border border-green-400/20">05</span>
                        <h2 className="text-2xl font-bold text-white">Sonuç</h2>
                    </div>
                    <p className="text-slate-400 leading-relaxed max-w-3xl">
                        Atlas Üniversitesi SEO projesi, özellikle Mayıs 2024 sonrasındaki stratejik dokunuşlarla klasik SEO
                        metodolojilerini modern yapay zeka gereksinimleriyle birleştirmenin başarısını temsil ediyor.
                        Bu büyüme, sadece bir trafik artışı değil — üniversitenin dijital dünyadaki
                        <strong className="text-white"> topikal otorite tescili.</strong>
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
                    <Link href="/vaka-calismalari/n-kolay" className="flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors group">
                        Sıradaki: N Kolay
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
