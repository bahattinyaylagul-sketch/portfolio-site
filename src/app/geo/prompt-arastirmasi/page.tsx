/* eslint-disable react/no-unescaped-entities */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ArticleContent from "./ArticleContent";
import { AUTHOR_ENTITY } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Prompt Araştırması: Müşteriniz Yapay Zekaya Ne Soruyor? – Bahattin Yaylagül",
    description: "GEO'da anahtar kelime araştırmasının yerini alan disiplin. Müşteri prompt'larını satış kayıtlarından, Search Console'dan ve forumlardan çıkarma yöntemi, 20–30 sorguluk sabit set kurma, dört kategori dengesi ve Türkçe prompt'ların kendine özgü davranışı.",
    alternates: {
        canonical: "/geo/prompt-arastirmasi",
    },
};

const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://bahattinyaylagul.com/geo/prompt-arastirmasi#article",
            "headline": "Prompt Araştırması: Müşteriniz Yapay Zekaya Ne Soruyor?",
            "description": "GEO'da anahtar kelime araştırmasının yerini alan disiplin. Müşteri prompt'larını satış kayıtlarından, Search Console'dan ve forumlardan çıkarma yöntemi, 20–30 sorguluk sabit set kurma, dört kategori dengesi ve Türkçe prompt'ların kendine özgü davranışı.",
            "datePublished": "2026-08-15",
            "dateModified": "2026-08-15",
            "author": AUTHOR_ENTITY,
            "publisher": { "@id": "https://bahattinyaylagul.com/#organization" },
            "url": "https://bahattinyaylagul.com/geo/prompt-arastirmasi",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://bahattinyaylagul.com/geo/prompt-arastirmasi"
            },
            "isPartOf": { "@id": "https://bahattinyaylagul.com/geo#webpage" },
            "inLanguage": "tr-TR",
            "about": [
                { "@type": "Thing", "name": "Ölçüm & Analitik" },
                { "@type": "Thing", "name": "Generative Engine Optimization" }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://bahattinyaylagul.com/" },
                { "@type": "ListItem", "position": 2, "name": "GEO Danışmanlığı", "item": "https://bahattinyaylagul.com/geo" },
                { "@type": "ListItem", "position": 3, "name": "Prompt Araştırması", "item": "https://bahattinyaylagul.com/geo/prompt-arastirmasi" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                                "@type": "Question",
                                "name": "Prompt araştırması anahtar kelime araştırmasının yerini tamamen alacak mı?",
                                "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Hayır, ikisi paralel yürüyecek. Klasik arama hacmi düşse bile sıfırlanmıyor ve anahtar kelime verisi hâlâ prompt araştırmasının en somut hammaddesi. Değişen şey ağırlık: bütçenin ve dikkatin bir kısmı hacim tablolarından soru listelerine kayıyor."
                                }
                },
                {
                                "@type": "Question",
                                "name": "Prompt hacmi ölçen bir araç var mı?",
                                "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Gerçek anlamda yok. Bazı GEO araçları \"prompt hacmi\" adı altında rakam veriyor ama bunlar asistan sorgu günlüğünden değil, kendi modellerinden ya da klasik arama verisinden türetilmiş tahminler. Karar verirken bu rakamları mutlak doğru saymayın; yön göstergesi olarak kullanın."
                                }
                },
                {
                                "@type": "Question",
                                "name": "Kaç prompt yeterli?",
                                "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Manuel ölçüm için 20–30 satır makul. Dört kategoriyi kabaca eşit dağıtırsanız her kategoriye altı yedi satır düşer ve bu, tek kişinin ayda bir çalıştırabileceği bir yük. Otomatik ölçüm kuruyorsanız sayıyı artırabilirsiniz, ama setin kategori dengesi bozulmadığı sürece."
                                }
                },
                {
                                "@type": "Question",
                                "name": "Aynı prompt'u tekrar sorduğumda farklı cevap alıyorum, ölçüm nasıl güvenilir olur?",
                                "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Değişkenlik modelin doğasında. Çözüm tek ölçümü doğru saymak değil, tekrarı yönteme dahil etmek: her prompt'u temiz oturumda, aynı gün içinde iki üç kez çalıştırıp sonucu görüldü/görülmedi biçiminde değil, kaç turda görüldü biçiminde kaydedin. Aylık raporda tek turluk sonuç yerine bu oran anlamlı."
                                }
                },
                {
                                "@type": "Question",
                                "name": "Türkçe ve İngilizce setleri birleştirebilir miyim?",
                                "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Birleştirmeyin. İki dil farklı kaynak havuzu tetikliyor ve ortak yüzde ikisinin de gerçeğini gizliyor."
                                }
                },
                {
                                "@type": "Question",
                                "name": "Prompt setini kim hazırlamalı?",
                                "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Setin ilk taslağını satış ve destek ekibiyle birlikte çıkarmak en verimlisi; gerçek müşteri cümlelerine erişimi olan onlar. Pazarlama ekibi taslağı kategori dengesine göre düzenler, ölçümü de yürütür. Yalnız pazarlama masasında yazılan setler kaçınılmaz olarak marka ve kategori prompt'larına kayıyor, problem prompt'ları eksik kalıyor."
                                }
                },
                {
                                "@type": "Question",
                                "name": "Rakiplerin prompt setini görebilir miyim?",
                                "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Doğrudan hayır. Ama rakibin hangi sorularda güçlü olduğunu kendi setinizi çalıştırırken görürsünüz: cevaplarda tekrar tekrar çıktığı sorgular, onun kazandığı alan. Bu, setinizi genişletirken de yön veriyor."
                                }
                },
                {
                                "@type": "Question",
                                "name": "Prompt seti hazırlarken yapay zekadan yardım almak sonucu bozar mı?",
                                "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Taslak üretmek için kullanmak sorun değil, tek kaynak yapmak sorun. Modelin ürettiği sorular kategorinin tipik dilini yansıtır; sizin müşterinizin özgül endişelerini yansıtmaz. Model çıktısını iskelet, satış kayıtlarınızı et olarak düşünün."
                                }
                }
]
        }
    ]
});

export default function Page() {
    return (
        <main className="min-h-screen bg-white font-sans selection:bg-violet-100 selection:text-violet-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd }}
            />
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <Navigation />
            </header>

            <header className="w-full bg-gray-900 pt-16 pb-0 relative overflow-hidden mt-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/search_intent_3d.png"
                        alt="Prompt Araştırması: Müşteriniz Yapay Zekaya Ne Soruyor?"
                        fill
                        sizes="(max-width: 768px) 1px, 100vw"
                        className="object-cover opacity-20 hidden md:block"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
                </div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>
                </div>

                <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 flex flex-col justify-center h-full pb-16 pt-12">
                            <div>
                                <div className="flex items-center gap-3 text-yellow-400 font-bold tracking-widest text-xs uppercase mb-4">
                                    <span className="text-violet-400">GEO Danışmanlığı</span>
                                    <span className="w-px h-3 bg-white/20"></span>
                                    <span>Ölçüm & Analitik</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
                                    Prompt Araştırması: Müşteriniz Yapay Zekaya Ne Soruyor?
                                </h1>

                                <p className="lead-text text-gray-300 text-lg leading-relaxed font-medium max-w-xl mb-8">
                                    GEO'da anahtar kelime araştırmasının yerini alan disiplin. Müşteri prompt'larını satış kayıtlarından, Search Console'dan ve forumlardan çıkarma yöntemi, 20–30 sorguluk sabit set kurma, dört kategori dengesi ve Türkçe prompt'ların kendine özgü davranışı.
                                </p>

                                <div className="border-t border-white/10 pt-6 flex flex-wrap items-center gap-4 text-sm font-medium text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span>15 Ağustos 2026</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                        <span>13 dk okuma</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-2">
                                <Link href="/hakkimda" className="w-12 h-12 rounded-full border-2 border-white/10 relative overflow-hidden hover:border-violet-400 transition-colors">
                                    <Image
                                        src="/images/bahattin-yaylagul.jpg"
                                        alt="Bahattin Yaylagül"
                                        fill
                                        sizes="48px"
                                        className="object-cover"
                                    />
                                </Link>
                                <div className="flex flex-col">
                                    <span className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-0.5">Yazar</span>
                                    <div className="flex items-center gap-3">
                                        <Link href="/hakkimda" className="text-white font-bold text-lg leading-none hover:text-violet-400 transition-colors">
                                            Bahattin Yaylagül
                                        </Link>
                                        <a
                                            href="https://linkedin.com/in/bahattin-yaylagul"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-blue-500 transition-colors"
                                            title="LinkedIn'de Bağlantı Kur"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative hidden lg:block h-[500px] w-full">
                            <Image
                                src="/images/search_intent_3d.png"
                                alt="Prompt Araştırması: Müşteriniz Yapay Zekaya Ne Soruyor?"
                                fill
                                sizes="(max-width: 1024px) 1px, 50vw"
                                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-[1400px] mx-auto px-6 md:px-8 pt-12 pb-20">
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-8 font-medium tracking-wide font-sans">
                    <Link href="/" className="hover:text-violet-600 transition-colors">Ana Sayfa</Link>
                    <span className="text-gray-200">/</span>
                    <Link href="/geo" className="hover:text-violet-600 transition-colors">GEO Danışmanlığı</Link>
                    <span className="text-gray-200">/</span>
                    <span className="text-gray-600 font-bold truncate">Prompt Araştırması</span>
                </nav>

                <ArticleContent />
            </div>

            <Footer />
        </main>
    );
}
