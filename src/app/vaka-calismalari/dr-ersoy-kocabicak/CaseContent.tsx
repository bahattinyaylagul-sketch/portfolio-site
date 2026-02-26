/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

export default function CaseContent() {
    return (
        <div className="min-h-screen bg-white">

            {/* ── HERO BANNER ── */}
            <div className="bg-gradient-to-br from-[#021a1a] via-[#053535] to-[#0a1628] px-6 py-20">
                <div className="max-w-5xl mx-auto">

                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-xs text-slate-500 mb-10 font-medium">
                        <Link href="/" className="hover:text-slate-300 transition-colors">Ana Sayfa</Link>
                        <span>/</span>
                        <Link href="/vaka-calismalari" className="hover:text-slate-300 transition-colors">Vaka Çalışmaları</Link>
                        <span>/</span>
                        <span className="text-slate-300">Dr. Ersoy Kocabıçak</span>
                    </nav>

                    <div className="mb-8">
                        <span className="inline-flex items-center gap-2 text-teal-400 font-bold tracking-widest text-xs uppercase mb-4 bg-teal-400/10 px-3 py-1.5 rounded-full border border-teal-400/20">
                            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
                            Vaka Analizi · Medikal SEO · E-E-A-T
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight leading-tight">
                            Dr. Ersoy Kocabıçak
                        </h1>
                        <p className="text-slate-400 text-base">
                            <a href="https://drersoykocabicak.com/" target="_blank" rel="noopener noreferrer"
                                className="text-teal-400 hover:text-teal-300 font-semibold transition-colors">drersoykocabicak.com</a>
                            {" "}· Haziran 2025'ten bu yana aktif çalışma
                        </p>
                    </div>

                    {/* Stat Cards */}
                    <div className="grid grid-cols-3 gap-4 mt-10">
                        {[
                            { value: "36.1K+", label: "Aylık Organik Ziyaretçi", sub: "Ocak 2026 zirvesi", color: "text-green-400", bg: "bg-green-400/10 border-green-400/20" },
                            { value: "37×", label: "Büyüme Çarpanı", sub: "977 → 36.1K", color: "text-yellow-400", bg: "bg-yellow-400/10 border-yellow-400/20" },
                            { value: "3.8K+", label: "Organik Anahtar Kelime", sub: "553'ten bu yana", color: "text-teal-400", bg: "bg-teal-400/10 border-teal-400/20" },
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
                        src="/images/case-studies/dr-ersoy-kocabicak/chart.png"
                        alt="Dr. Ersoy Kocabıçak Organik Trafik ve Anahtar Kelime Büyüme Grafiği"
                        width={900}
                        height={560}
                        priority
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Section 1 */}
                <section>
                    <div className="flex items-center gap-3 mb-5">
                        <span className="font-mono text-xs text-teal-600 bg-teal-50 px-3 py-1 rounded-full font-bold border border-teal-100">01</span>
                        <h2 className="text-2xl font-bold text-gray-900">Proje Özeti</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed max-w-3xl">
                        Haziran 2025 itibarıyla başlatılan SEO ve içerik pazarlaması operasyonu, tıbbi uzmanlık alanlarında
                        arama motoru görünürlüğünü maksimize etmeyi hedefledi. Teknik iyileştirmeler ve kullanıcı odaklı
                        semantik içerik stratejisiyle Nisan 2024'te 977 olan aylık organik trafik,
                        Ocak 2026'da <strong>36.100'e</strong> ulaştı — tam 37 katlık bir büyüme.
                    </p>
                </section>

                {/* Section 2 */}
                <section>
                    <div className="flex items-center gap-3 mb-5">
                        <span className="font-mono text-xs text-teal-600 bg-teal-50 px-3 py-1 rounded-full font-bold border border-teal-100">02</span>
                        <h2 className="text-2xl font-bold text-gray-900">Başlangıç ve Stratejik Hedefler (Haziran 2025)</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-5">
                        {[
                            { icon: "📊", title: "Başlangıç Noktası", desc: "Nisan 2024'te 977 aylık organik ziyaretçi. Belirli bir temel varken asıl ivme Haziran 2025'ten itibaren başladı." },
                            { icon: "⚕️", title: "Kritik Eşik", desc: "Google'ın katı YMYL kurallarına uyum sağlayarak 'Güvenilir Uzman' algoritmasını tetiklemek ve sağlık aramalarında öne çıkmak." },
                            { icon: "🎯", title: "Hedef", desc: "Cerrahi ve uzmanlık gerektiren anahtar kelimelerde Top 3 ve AI Overviews sonuçlarını domine etmek." },
                        ].map((c) => (
                            <div key={c.title} className="bg-teal-50 border border-teal-100 rounded-2xl p-6">
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
                        <span className="font-mono text-xs text-teal-600 bg-teal-50 px-3 py-1 rounded-full font-bold border border-teal-100">03</span>
                        <h2 className="text-2xl font-bold text-gray-900">Uygulanan SEO Metodolojisi</h2>
                    </div>
                    <div className="space-y-6 max-w-3xl">
                        <div className="border-l-4 border-teal-500 pl-6 py-1">
                            <h3 className="font-bold text-gray-900 mb-2">A. E-E-A-T ve Medikal Güven Faktörü</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Dr. Kocabıçak'ın uzmanlığı, Google'ın Deneyim, Uzmanlık, Otorite ve Güvenilirlik (E-E-A-T)
                                kriterlerine göre site mimarisine işlendi. Makaleler, hastaların tedavi süreçlerindeki en
                                hassas sorularına yanıt verecek şekilde semantik olarak zenginleştirildi.
                            </p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-6 py-1">
                            <h3 className="font-bold text-gray-900 mb-2">B. SERP Dominasyonu ve AI Uyumu (GEO)</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Grafikteki mor alan (AI Overviews) ve yeşil alan (Other SERP Features), Haziran 2025 sonrası
                                yapılan GEO çalışmalarının bir sonucu. Google'ın yapay zeka özetlerinde ve bilgi panellerinde
                                yer almak, markanın dijital güven skorunu ciddi ölçüde yükseltti.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 4 */}
                <section>
                    <div className="flex items-center gap-3 mb-5">
                        <span className="font-mono text-xs text-teal-600 bg-teal-50 px-3 py-1 rounded-full font-bold border border-teal-100">04</span>
                        <h2 className="text-2xl font-bold text-gray-900">Çarpıcı Sonuçlar <span className="text-gray-400 font-normal text-lg">(Haz. 2025 – Oca. 2026)</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        {[
                            { icon: "🚀", title: "37× Büyüme: 977 → 36.1K", desc: "Nisan 2024'teki 977 ziyaretçilik başlangıç noktasından Ocak 2026'da 36.100'e — kısa sürede sektörün zirvesine." },
                            { icon: "🔑", title: "553 → 3.8K Anahtar Kelime", desc: "Anahtar kelime havuzu yaklaşık 7 katına çıkarak geniş bir hasta aday kitlesine organik erişim sağlandı." },
                            { icon: "🥇", title: "Top 3 Sıralama Başarısı", desc: "Nisan 2024'te yalnızca 8 anahtar kelimen varken, küçük bir niş alanda Top 3 hakimiyeti kuruldu." },
                            { icon: "💰", title: "Reklam Bağımlılığı Azaldı", desc: "Grafikteki turuncu çizgi (Paid Traffic), organik başarı büyüdükçe ücretli reklam ihtiyacının nasıl gerilediğini net şekilde gösteriyor." },
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
                <section className="bg-gradient-to-br from-[#021a1a] to-[#0a1628] rounded-3xl p-10">
                    <div className="flex items-center gap-3 mb-5">
                        <span className="font-mono text-xs text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full font-bold border border-teal-400/20">05</span>
                        <h2 className="text-2xl font-bold text-white">Sonuç</h2>
                    </div>
                    <p className="text-slate-400 leading-relaxed max-w-3xl">
                        Dr. Ersoy Kocabıçak projesi, sağlık gibi hassas bir sektörde doğru içerik stratejisi ve teknik
                        SEO'nun birleştiğinde nasıl sürdürülebilir bir büyüme sağladığını kanıtlıyor.
                        Haziran 2025'te atılan adımlar, Ocak 2026'da markayı sektörün
                        <strong className="text-white"> dijital liderlerinden biri konumuna</strong> taşıdı.
                    </p>
                </section>

                {/* CTA */}
                <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                    <Link href="/vaka-calismalari" className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-teal-700 transition-colors group">
                        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        Tüm Vaka Çalışmaları
                    </Link>
                    <Link href="/vaka-calismalari/maltepe-hastanesi" className="flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors group">
                        Sıradaki: Maltepe Hastanesi
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
