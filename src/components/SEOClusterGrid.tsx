import Link from 'next/link';

interface ClusterItem {
    title: string;
    href: string;
    desc: string;
}

interface Group {
    category: string;
    items: ClusterItem[];
}

const seoGroups: Group[] = [
    {
        category: "On-Page Stratejileri",
        items: [
            { title: "Arama Niyeti", href: "/seo/arama-niyeti", desc: "Kullanıcının aradığında ne beklediğini çözmek" },
            { title: "Semantik Yazım", href: "/seo/semantik-yazim", desc: "NLP prensiplerine uygun içerik yazımı" },
            { title: "Silo Mimarisi", href: "/seo/silo-mimarisi", desc: "İç linkleme ve konu gruplama yapısı" },
            { title: "Site İçi SEO", href: "/seo/site-ici-seo", desc: "Sayfa üstü tüm optimizasyon süreçleri" },
            { title: "Sıralama Faktörleri", href: "/seo/siralama", desc: "Google algoritmasının ana değerlendirme kriterleri" },
        ]
    },
    {
        category: "İçerik Stratejileri",
        items: [
            { title: "İçerik Optimizasyonu", href: "/seo/icerik-optimizasyonu", desc: "Var olan içeriği analiz edip güçlendirme" },
            { title: "Bilgi Kazancı (Information Gain)", href: "/seo/bilgi-kazanci", desc: "Rakiplerin sunduğundan daha özgün bilgi katma" },
            { title: "Topikal Otorite", href: "/seo/topikal-otorite", desc: "Bir konuda kapsamlı ve referans kaynak haline gelme" },
            { title: "E-E-A-T Sinyalleri", href: "/seo/eeat-sinyalleri", desc: "Deneyim, uzmanlık, yetkinlik ve güvenilirlik sinyalleri" },
        ]
    },
    {
        category: "Site Dışı Stratejileri",
        items: [
            { title: "Site Dışı SEO", href: "/seo/site-disi-seo", desc: "Backlink edinimi, dijital PR ve marka bilinirliği" },
            { title: "Yerel SEO", href: "/seo/yerel-seo", desc: "Harita kaydı ve konuma dayalı yerel arama sıralaması" },
        ]
    },
    {
        category: "Teknik SEO",
        items: [
            { title: "Teknik SEO ve Altyapı", href: "/seo/teknik-seo", desc: "Altyapı, sunucu optimizasyonu ve performans genel bakış" },
            { title: "Core Web Vitals", href: "/seo/core-web-vitals", desc: "LCP, FID, CLS optimizasyonu ve sayfa hızı" },
            { title: "Tarama ve İndeksleme", href: "/seo/tarama-ve-indeksleme", desc: "Arama motoru botlarının siteyi taraması ve dizine eklemesi" },
            { title: "Yapısal Veri (Schema)", href: "/seo/yapisal-veri", desc: "Arama motorlarına zengin sonuçlar sunmak için Schema.org işaretlemesi" },
            { title: "Tarama Bütçesi (Crawl Budget)", href: "/seo/tarama-butcesi", desc: "Bot kaynaklarının sitenizde optimum kullanımı" },
            { title: "Log Analizi", href: "/seo/log-analizi", desc: "Botların siteyi ziyaret frekansı ve davranış analizi" },
        ]
    }
];

export default function SEOClusterGrid() {
    return (
        <section className="py-20 bg-gray-50/30 border-t border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
                        SEO'nun Tüm Boyutları — Her Konuya Derinlemesine
                    </h2>
                    <p className="text-lg text-gray-600 font-medium leading-relaxed">
                        SEO tek bir uygulama değil, birbirine bağlı disiplinler ağıdır. Aşağıda her disiplin için yazdığım detaylı rehberleri bulacaksınız.
                    </p>
                </div>

                <div className="space-y-16">
                    {seoGroups.map((group, groupIdx) => (
                        <div key={groupIdx} className="space-y-6">
                            <div className="flex items-center gap-4">
                                <h3 className="text-lg font-extrabold uppercase tracking-wider text-gray-400">
                                    {group.category}
                                </h3>
                                <div className="h-px bg-gray-200 flex-1" />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {group.items.map((item, itemIdx) => (
                                    <div
                                        key={itemIdx}
                                        className="group bg-white p-6 rounded-2xl border border-gray-200/60 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/[0.03] transition-all duration-300 flex flex-col justify-between"
                                    >
                                        <div className="space-y-3">
                                            <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-sm text-gray-500 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                        <div className="pt-5 mt-auto">
                                            <Link
                                                href={item.href}
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                                            >
                                                Rehberi oku
                                                <span className="transition-transform group-hover:translate-x-0.5">→</span>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
