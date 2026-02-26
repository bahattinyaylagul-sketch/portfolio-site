/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const headings = [
    { id: "genel-bakis", text: "1. 6 Yıllık Sürdürülebilir Büyüme" },
    { id: "trafik-analizi", text: "2. Trafik Grafiğinin İncelenmesi" },
    { id: "kelime-analizi", text: "3. Anahtar Kelime ve SERP Görünürlüğü" },
    { id: "stratejik-cikarimlar", text: "4. Stratejik Çıkarımlar" },
];

export default function CaseContent() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        if (headings.length > 0) {
            setActiveSection(headings[0].id);
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -60% 0px",
                threshold: 0
            }
        );

        const timer = setTimeout(() => {
            headings.forEach((item) => {
                const element = document.getElementById(item.id);
                if (element) observer.observe(element);
            });
        }, 100);

        return () => {
            observer.disconnect();
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 pt-12 pb-20">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-8 font-medium tracking-wide font-sans">
                <Link href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</Link>
                <span className="text-gray-200">/</span>
                <Link href="/vaka-calismalari" className="hover:text-blue-600 transition-colors">Vaka Çalışmaları</Link>
                <span className="text-gray-200">/</span>
                <span className="text-gray-600 font-bold truncate">Atlas Üniversitesi Sürdürülebilir SEO Analizi</span>
            </nav>

            {/* Brand Logo Header */}
            <div className="flex justify-center md:justify-start mb-12 lg:mb-16">
                <div className="relative h-12 w-48 md:h-[72px] md:w-64">
                    <Image
                        src="/images/references/atlas-uni.jpg"
                        alt="Atlas Üniversitesi Hastanesi"
                        fill
                        priority
                        className="object-contain object-center md:object-left"
                    />
                </div>
            </div>

            <div className="grid lg:grid-cols-[250px_1fr] gap-12 items-start relative">
                {/* Left Sidebar: TOC Only */}
                <aside className="hidden lg:block sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto pr-4 custom-scrollbar">
                    <div>
                        <div className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2 pl-2">
                            <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                            İÇİNDEKİLER
                        </div>
                        <nav className="space-y-1 border-l-2 border-gray-100">
                            {headings.map((heading, i) => (
                                <a
                                    key={i}
                                    href={`#${heading.id}`}
                                    className={`block py-3 pl-4 text-sm transition-all leading-relaxed -ml-0.5 border-l-2 ${activeSection === heading.id
                                        ? "text-blue-700 border-blue-700 font-medium bg-blue-50/50"
                                        : "text-gray-600 border-transparent hover:text-blue-700 hover:border-blue-300"
                                        }`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                                        setActiveSection(heading.id);
                                    }}
                                >
                                    <span className="font-mono text-xs text-gray-400 mr-2 font-medium">{(i + 1).toString().padStart(2, '0')}</span>
                                    {heading.text}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* Main Content Column */}
                <article className="min-w-0 space-y-20">

                    {/* General Overview */}
                    <section id="genel-bakis" className="scroll-mt-32">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">6 Yıllık Sürdürülebilir Organik Büyüme</h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>
                                SEO operasyonlarında başarı sadece anlık zirvelerle değil, yıllara yayılan istikrarlı büyüme trendleriyle ölçülür. Özellikle <strong>sağlık</strong> gibi Google'ın YMYL (Your Money or Your Life) standartlarını sıkı tuttuğu bir dikeyde, bu istikrarı yakalamak son derece zordur.
                            </p>
                            <p>
                                Atlas Üniversitesi Hastanesi için 2020 Ocak ayından itibaren başlayan hikayemiz, geçici bir büyümeden ziyade, arka planda devasa bir <strong>teknik SEO ve E-E-A-T (Deneyim, Uzmanlık, Yetkinlik, Güvenilirlik)</strong> inşasına dayanıyor. Aşağıda yer alan trafik ve kelime grafikleri, doğru stratejilerle desteklendiğinde bir web sitesinin Google rüzgarlarına (Core Güncellemeleri) karşı nasıl "bağışıklık" kazandığını ve aralıksız büyümeye devam ettiğini açıkça göstermektedir.
                            </p>
                        </div>
                    </section>

                    {/* Traffic Analysis */}
                    <section id="trafik-analizi" className="scroll-mt-32">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Trafik Grafiğinin İncelenmesi</h2>
                        <div className="relative aspect-[16/9] w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex items-center justify-center mb-8">
                            <Image
                                src="/images/case-studies/atlas-universitesi/traffic.png"
                                alt="Atlas Üniversitesi Organik Trafik Analizi"
                                fill
                                priority
                                className="object-contain p-4"
                            />
                        </div>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Organik trafik grafiğine baktığımızda, <strong>Ocak 2020'de sıfır noktasında</strong> olan trafiğin, doğru stratejilerin uygulamaya alınmasıyla ivmelendiğini görüyoruz. Özellikle 2021 ve sonrası ciddi bir sıçrama yaşanmış ve grafik <strong>hiçbir zaman keskin bir "çöküş" (drop) yaşamadan</strong> yükselmeye devam etmiştir.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">✓</span>
                                    <span><strong>Sürekli Yükseliş Eğilimi:</strong> Google'ın 2021, 2023 ve 2024 yıllarındaki agresif Core Update'lerine rağmen site trafiği sarsılmamış, aksine rakiplerin düştüğü dönemlerde daha da güç kazanarak <strong>184.4K+</strong> ziyaretçi bandına oturmuştur.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">✓</span>
                                    <span><strong>Kararlı Otorite İnşası:</strong> Düz ve ani sivri yükselişler yerine yıllara yayılan sağlıklı, organik ve yapısal büyüme formasyonunu bu grafikte net bir şekilde görüyoruz.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Keyword Analysis */}
                    <section id="kelime-analizi" className="scroll-mt-32">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Keyword Dağılımı ve SERP Hakimiyeti</h2>
                        <div className="relative aspect-[16/9] w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex items-center justify-center mb-8">
                            <Image
                                src="/images/case-studies/atlas-universitesi/keywords.png"
                                alt="Atlas Üniversitesi Arama Motoru Kelime Analizi"
                                fill
                                className="object-contain p-4"
                            />
                        </div>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Anahtar kelime görünürlük grafiği bize trafik başarısının altında yatan "motorun" nasıl çalıştığını anlatıyor. 2020 sonrasındaki periyotta sitenin endekslenen, özellikle de ilk 10 sırada yer alan kelime havuzu dramatik bir şekilde büyümüştür.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 my-8">
                                <div className="p-6 border-l-4 border-yellow-400 bg-yellow-50 rounded-r-xl flex flex-col justify-center">
                                    <span className="block text-xl font-bold text-yellow-600 mb-2">Top 3 Hakimiyeti</span>
                                    <span className="text-gray-700 text-sm">Oluşan havuzun önemli bir kısmı (grafikte sarı ile gösterilen tabaka), 1. ile 3. sıra aralığında listelenen rekabetçi kelimelerden oluşmaktadır. Bu doğrudan yüksek dönüşüm ve randevu manasına gelir.</span>
                                </div>
                                <div className="p-6 border-l-4 border-blue-500 bg-blue-50 rounded-r-xl flex flex-col justify-center">
                                    <span className="block text-xl font-bold text-blue-600 mb-2">31K+ Keyword</span>
                                    <span className="text-gray-700 text-sm">2026 itibarıyla taranan toplam kelime hacmi 31,000 barajını zorluyor (4-10, 11-20 eşikleri mavi tonlarında katmanlı bir büyüme sergiliyor).</span>
                                </div>
                            </div>
                            <p>
                                Grafik ayrıca <strong>SERP Features (Yeşil)</strong> alanında edinilen kazanımları da gösteriyor. Bu durum sadece metin içeriklerle değil, Featured Snippet gibi zero-click (sıfır tıklama) zengini arama alanlarında da ciddi otorite kazanıldığının kanıtıdır.
                            </p>
                        </div>
                    </section>

                    {/* Strategic Takeaways */}
                    <section id="stratejik-cikarimlar" className="scroll-mt-32">
                        <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-10 shadow-2xl">
                            <div className="mb-12">
                                <span className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-4 block">
                                    SONUÇ VE ÖZET
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold">
                                    Stratejik Çıkarımlar
                                </h2>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">YMYL ve İçerik Kalitesi</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Bu kadar uzun vadeli ve sürekli dikleşen bir grafik, rastgele oluşturulmuş içeriklerle yapılamaz. Tıbbi uzmanlığı (E-E-A-T) arama niyetine (Intent) sadık çıkarak aktarabilmek asıl başarı anahtarıdır.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Sağlam Temel, Dev Büyüme</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            İlk yıllarda nispeten yavaş görünen teknik hazırlık evresi, algoritmayı besledikten sonra "katlanarak büyüyen" (exponential) bir büyüme eğrisi doğurur.
                                        </p>
                                    </div>
                                </div>

                                {/* Bonus Metrics */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                                    <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-wider rounded-full mb-6">
                                        Grafik Performans Özeti
                                    </div>
                                    <div className="space-y-6">
                                        <div>
                                            <div className="text-4xl font-bold text-blue-400 mb-1">184.4K+</div>
                                            <p className="text-gray-400 text-sm">Zirve Organik Trafik Noktası</p>
                                        </div>
                                        <div className="w-full h-px bg-white/10" />
                                        <div>
                                            <div className="text-4xl font-bold text-blue-400 mb-1">~31.000</div>
                                            <p className="text-gray-400 text-sm">Toplam Hakim Olunan Kelime</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    );
}
