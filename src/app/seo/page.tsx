/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Metadata } from "next";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { SEOContactForm } from "./SEONavigator";
import Breadcrumb from "@/components/Breadcrumb";
import TestimonialsCarousel from "./TestimonialsCarousel";
import TestimonialsSection from "./TestimonialsSection";
import StrategicApproach from "./StrategicApproach";
import ConsultancyProcess from "./ConsultancyProcess";

import SEOAreasOfExpertise from "./SEOAreasOfExpertise";
import SEORehberi from "./SEORehberi";
import SEOTableOfContents from "./SEOTableOfContents";


export const metadata: Metadata = {
    title: "SEO Danışmanlığı – Bahattin Yaylagül",
    description: "Teknik SEO ve içerik optimizasyonu ile organik büyümenizi sürdürülebilir kılın. Kapsamlı SEO rehberi ve danışmanlık hizmetleri ile otoritenizi artırın.",
    openGraph: {
        title: "SEO Danışmanlığı – Bahattin Yaylagül",
        description: "Teknik SEO ve içerik optimizasyonu ile organik büyümenizi sürdürülebilir kılın.",
        type: "website",
        locale: "tr_TR",
    },
    alternates: {
        canonical: "/seo",
    },
};

export default function SEOPage() {

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": "https://bahattinyaylagul.com/#person",
                "name": "Bahattin Yaylagül",
                "url": "https://bahattinyaylagul.com",
                "jobTitle": "SEO Consultant",
                "image": "https://bahattinyaylagul.com/images/bahattin-yaylagul.jpg",
                "sameAs": [
                    "https://www.linkedin.com/in/bahattin-yaylagul/",
                    "https://medium.com/@bahattinyaylagl"
                ]
            },
            {
                "@type": "ProfessionalService",
                "@id": "https://bahattinyaylagul.com/seo/#service",
                "name": "Bahattin Yaylagül | SEO Uzmanı",
                "url": "https://bahattinyaylagul.com/seo",
                "image": "https://bahattinyaylagul.com/images/bahattin-yaylagul.jpg",
                "description": "Profesyonel SEO hizmetleri ve dijital pazarlama danışmanlığı.",
                "areaServed": "TR",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "SEO Danışmanlık Hizmetleri",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "SEO Danışmanlığı",
                                "description": "Arama motoru optimizasyonu, teknik SEO, içerik stratejisi ve otorite inşası hizmetleri. Google'ın modern algoritmalarına uygun organik büyüme çözümleri.",
                                "serviceType": "Search Engine Optimization",
                                "provider": { "@id": "https://bahattinyaylagul.com/#person" }
                            }
                        }
                    ]
                },
                "sameAs": [
                    "https://linkedin.com/in/bahattin-yaylagul",
                    "https://bahattinyaylagul.com"
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://bahattinyaylagul.com/seo/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "SEO çalışmaları ne zaman sonuç verir?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "SEO uzun vadeli bir yatırımdır. İlk etkiler genellikle 2-3 ay içinde görülmeye başlar, ancak kalıcı ve büyük sonuçlar için 6-12 aylık bir süreç gereklidir."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Sıralama garantisi var mı?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Google algoritmaları sürekli değiştiği için hiçbir profesyonel SEO uzmanı %100 sıralama garantisi veremez. Ancak, trafik ve görünürlük artışı için performans odaklı çalışılmaktadır."
                        }
                    }
                ]
            }
        ]
    };

    const breadcrumbJson = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://bahattinyaylagul.com/seo/#breadcrumb",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Ana Sayfa",
                "item": "https://bahattinyaylagul.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "SEO Danışmanlığı",
                "item": "https://bahattinyaylagul.com/seo"
            }
        ]
    };

    return (
        <main className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
            />
            {/* Fixed Header Wrapper */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <Navigation />
            </header>

            <article className="pt-24 pb-8">
                {/* ── HERO ── */}
                <header className="relative overflow-hidden bg-[#0a0a0a] py-20 mb-12">
                    {/* Subtle glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
                        {/* Üst etiket */}
                        <span className="inline-flex items-center gap-2 text-blue-400 font-mono font-bold tracking-widest text-xs uppercase mb-6 bg-blue-400/10 px-4 py-1.5 rounded-full border border-blue-400/15">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                            Hizmet
                        </span>

                        {/* Başlık */}
                        <h1
                            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-5 leading-[1.05] tracking-tight"
                            style={{ fontWeight: 900 }}
                        >
                            <span
                                style={{
                                    textShadow: "0 0 80px rgba(255,255,255,0.12), 0 0 160px rgba(99,102,241,0.08)"
                                }}
                            >
                                SEO{" "}
                                <span className="text-white">
                                    Danışmanlığı
                                </span>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed font-medium">
                            Sitenizi yalnızca Google için değil, yapay zekâ aramaları için de görünür kılıyorum. Teknik denetimden içerik stratejisine tüm süreci tek elden yürütüyor, her ay ölçülebilir raporla ilerlemeyi gösteriyorum.
                        </p>

                        <p className="text-sm text-white/50 mb-8 max-w-xl mx-auto leading-relaxed">
                            Teknik altyapı, semantik içerik ve otorite inşasının sistemli birleşimi ile sürdürülebilir organik büyüme.
                        </p>

                        {/* Yazar Bilgisi / Author Info */}
                        <div className="flex items-center justify-center gap-3 mb-8 text-white/85">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
                                <Image
                                    src="/images/bahattin-yaylagul.jpg"
                                    alt="Bahattin Yaylagül"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-sm font-medium">
                                Yazar:{" "}
                                <Link href="/hakkimda" aria-label="Bahattin Yaylagül Hakkında Bilgi" className="hover:text-blue-400 underline decoration-white/20 hover:decoration-blue-400 transition-colors">
                                    Bahattin Yaylagül
                                </Link>
                            </span>
                            <span className="text-white/30">•</span>
                            <a
                                href="https://linkedin.com/in/bahattin-yaylagul"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Bahattin Yaylagül LinkedIn Profili"
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0077B5] hover:opacity-80 transition-opacity"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                Bahattin Yaylagül LinkedIn Profili
                            </a>
                        </div>

                        {/* ── İçindekiler (TOC) ── */}
                        <SEOTableOfContents />

                        {/* CTA - Birincil (Dolgulu, Belirgin Stil) */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 mt-8">
                            <a
                                href="#analiz"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all text-base shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 hover:-translate-y-0.5"
                            >
                                Ücretsiz SEO Analiz Formuna Ulaşın
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <span className="text-white/40 text-xs font-medium">
                                24 saat içinde dönüş · %100 ücretsiz
                            </span>
                        </div>

                        {/* Trust Stats Bar */}
                        <div className="border-t border-white/10 pt-10">
                            <div className="flex items-center justify-center gap-0 max-w-sm mx-auto">
                                {[
                                    { value: "14 Yıl+", label: "Sektör Deneyimi" },
                                    { value: "200+", label: "Başarılı Proje" },
                                ].map((stat, i) => (
                                    <div key={i} className={`flex flex-col items-center gap-1 px-10 ${i === 0 ? "border-r border-white/10" : ""}`}>
                                        <span className="text-2xl md:text-3xl font-black text-white tracking-tight">{stat.value}</span>
                                        <span className="text-white/40 text-xs font-medium uppercase tracking-wider">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </header>

                {/* ── 2. Stratejik Yaklaşım ── */}
                <StrategicApproach />

                {/* ── 3. Danışmanlık Süreci ── */}
                <ConsultancyProcess />

                {/* ── SEO Rehberi ── */}
                <SEORehberi />

                {/* ── 4. Müşteri Yorumları ── */}
                <TestimonialsSection />

                {/* ── 5. Başarı Hikayeleri ── */}


                {/* ── 6. Uzmanlık Alanları ── */}
                <SEOAreasOfExpertise />

                {/* ── 6. Ücretsiz Analiz Formu ── */}
                <section className="py-16 bg-white" id="analiz" aria-labelledby="analiz-heading">
                    <div className="max-w-4xl mx-auto px-4 md:px-6">
                        <div className="text-center mb-10">
                            <h2 id="analiz-heading" className="text-3xl md:text-4xl font-black text-gray-900 mb-3 tracking-tight">Ücretsiz SEO Denetimi</h2>
                            <p className="text-gray-600 text-base md:text-lg">Sitenizin organik performansını detaylıca analiz edelim, büyüme için yol haritanızı çıkaralım.</p>
                        </div>
                        <SEOContactForm />
                    </div>
                </section>

                {/* FAQ */}
                <section aria-labelledby="faq-section" className="py-16">
                    <div className="max-w-4xl mx-auto px-4 md:px-6">
                        <h2 id="faq-section" className="text-3xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight">Sıkça Sorulan Sorular</h2>
                        <div className="space-y-3">
                            {[
                                {
                                    q: "SEO sonuçları ne kadar sürede görülür?",
                                    a: "Erken iyileşmeler haftalar içinde fark edilebilir; anlamlı organik trafik artışı genellikle üç ila altı ay alır. Rekabetçi anahtar kelimelerde bu süre daha da uzayabilir."
                                },
                                {
                                    q: "SEO ücretsiz midir?",
                                    a: 'Organik sıralama için Google\'a ödeme yapmazsınız. Ama etkili optimizasyon zaman, uzmanlık ve çoğu zaman araç maliyeti gerektirir. "Ücretsiz" kelimesini "maliyetsiz" ile karıştırmamak gerekir.'
                                },
                                {
                                    q: "Google'ın kaç sıralama faktörü var?",
                                    a: '"200 sıralama faktörü" sık tekrarlanan bir rakam olsa da Google hiçbir zaman kesin bir liste yayınlamadı. Gerçekte çok daha fazla sinyal söz konusu olabilir. Tek bir faktöre odaklanmak yerine bütünsel bir yaklaşım daha sağlıklı sonuç verir.'
                                },
                                {
                                    q: "Black hat SEO nedir, neden risklidir?",
                                    a: "Black hat SEO, arama motorlarının onaylamadığı tekniklerin kullanılmasıdır; white hat ise arama motoru şirketlerinin önerdiği yöntemleri kapsar. Black hat yöntemler Google tarafından tespit edildiğinde siteniz cezalandırılır. Kısa vadeli kazanım için uzun vadeli görünürlüğü riske atmak pratikte hiçbir zaman kazançlı çıkmaz."
                                },
                                {
                                    q: "Yapay zeka SEO'yu öldürür mü?",
                                    a: "Hayır. GEO, arama motoru optimizasyonunun yerini almaz; onu genişletir. Tüketicilerin %82'si yapay zeka destekli aramayı geleneksel SERP'lerden daha faydalı bulduğunu söylüyor; bu, AI Overviews gibi yüzeylerde yer almayı giderek daha kritik kılıyor — ama klasik organik aramanın önemini ortadan kaldırmıyor."
                                },
                                {
                                    q: "Teknik SEO mu, içerik mi daha önemli?",
                                    a: "İkisi birbirini tamamlar. Teknik altyapı olmadan en kaliteli içerik bile aramada performans göstermekte zorlanır; içerik olmadan teknik zemin boş kalır. Harika içerik üretmek de tek başına organik trafik garantisi değildir."
                                },
                                {
                                    q: "SEO mu, PPC mi tercih edilmeli?",
                                    a: "İkisi farklı ihtiyaçlara yanıt verir. PPC hızlı görünürlük sağlar ama bütçe kesilince trafik de durur; SEO yavaş büyür ancak sürdürülebilir bir kanal oluşturur. Çoğu durumda kısa vadede PPC, uzun vadede SEO'ya yatırım yapmak ve ikisini birlikte yürütmek en dengeli yaklaşımdır."
                                },
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-gray-50/80 transition-colors">
                                    <p className="text-base font-bold text-gray-900 mb-2">{item.q}</p>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Author Card */}
                <section aria-labelledby="author-bio" className="border-t border-gray-100 py-12">
                    <div className="max-w-4xl mx-auto px-4 md:px-6">
                        <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                            <Link href="/hakkimda" aria-label="Bahattin Yaylagül Hakkında Detaylı Bilgi" className="shrink-0 group">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg overflow-hidden relative">
                                    <Image
                                        src="/images/bahattin-yaylagul.jpg"
                                        alt="Bahattin Yaylagül"
                                        width={128}
                                        height={128}
                                        className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </Link>
                            <div className="text-center md:text-left">
                                <div className="flex flex-col md:flex-row items-center gap-3 mb-4 justify-center md:justify-start">
                                    <Link href="/hakkimda" aria-label="Bahattin Yaylagül Özgeçmiş ve Hakkında" className="hover:text-blue-600 transition-colors">
                                        <h3 id="author-bio" className="text-2xl font-sans font-bold text-gray-900">Bahattin Yaylagül</h3>
                                    </Link>
                                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full">SEO Consultant</span>
                                </div>
                                <div className="flex items-center gap-4 justify-center md:justify-start">
                                    <Link href="/hakkimda" className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-gray-700 hover:text-gray-950 hover:bg-gray-50 hover:border-gray-300 font-semibold text-sm rounded-full transition-all">
                                        Bahattin Yaylagül Kimdir ve Hakkında Detaylar
                                    </Link>
                                    <a href="https://linkedin.com/in/bahattin-yaylagul" target="_blank" rel="noopener noreferrer" aria-label="Bahattin Yaylagül Profesyonel LinkedIn Profili" className="inline-flex items-center gap-1 text-sm font-semibold text-[#0077B5] hover:opacity-80 transition-opacity">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                        Bahattin Yaylagül LinkedIn Profesyonel Profilini İncele
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </article>

            {/* ── GEO DANIŞMANLIĞI CTA BANNER ── */}
            <section className="max-w-6xl mx-auto px-4 md:px-6 mb-16 mt-8" aria-labelledby="geo-cta-heading">
                <div className="bg-gradient-to-r from-[#0a0a1a] to-[#0f172a] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
                    {/* Background Decorations */}
                    <div className="absolute -right-20 -top-20 w-72 h-72 bg-violet-600 rounded-full blur-[100px] opacity-25"></div>
                    <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-indigo-500 rounded-full blur-[80px] opacity-20"></div>

                    <div className="relative z-10 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-bold uppercase tracking-wider mb-4 border border-violet-400/20">
                            Yeni Nesil Arama Optimizasyonu
                        </div>
                        <h2 id="geo-cta-heading" className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                            GEO Danışmanlığı &amp; <br />
                            <span className="text-violet-300">Generative Engine Optimization</span>
                        </h2>
                        <p className="text-slate-300/80 text-lg">
                            ChatGPT, Gemini ve Perplexity gibi yapay zeka motorlarında <strong className="text-white">kaynak olarak gösterilmek</strong> için sitenizi hazırlayın. GEO stratejisiyle AI çağında rekabette öne geçin.
                        </p>
                    </div>
                    <div className="relative z-10 flex-shrink-0">
                        <Link href="/geo" className="inline-flex items-center gap-3 px-8 py-4 border border-violet-400/40 hover:border-violet-400 text-violet-300 hover:text-white hover:bg-violet-500/10 font-bold rounded-2xl transition-all shadow-lg text-lg">
                            Yapay Zekâ Aramaları İçin GEO Danışmanlığı
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
