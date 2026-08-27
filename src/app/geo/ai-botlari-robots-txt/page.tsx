/* eslint-disable react/no-unescaped-entities */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ArticleContent from "./ArticleContent";
import { AUTHOR_ENTITY } from "@/lib/schema";

export const metadata: Metadata = {
    title: "AI Botları ve Robots.txt Yönetimi: Tarama İzinleri",
    description: "GPTBot ve ClaudeBot gibi yapay zeka tarayıcılarına robots.txt üzerinden nasıl erişim izni vereceğinizi veya kısıtlayacağınızı detaylı öğrenin.",
    alternates: {
        canonical: "/geo/ai-botlari-robots-txt",
    },
};

const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://bahattinyaylagul.com/geo/ai-botlari-robots-txt#article",
            "headline": "AI Botlarını robots.txt ile Yönetme: GPTBot, ClaudeBot ve Ötesi",
            "description": "GPTBot, OAI-SearchBot, ClaudeBot, Google-Extended, CCBot, Bytespider ve Perplexity-User için robots.txt yapılandırması. Eğitimi kesip ChatGPT Search'te kalma yöntemi, kopya-yapıştır bloklar, Cloudflare Content Signals ve uyumsuz botlar için WAF önlemleri.",
            "datePublished": "2026-08-15",
            "dateModified": "2026-08-15",
            "author": AUTHOR_ENTITY,
            "publisher": { "@id": "https://bahattinyaylagul.com/#organization" },
            "url": "https://bahattinyaylagul.com/geo/ai-botlari-robots-txt",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://bahattinyaylagul.com/geo/ai-botlari-robots-txt"
            },
            "isPartOf": { "@id": "https://bahattinyaylagul.com/geo#webpage" },
            "inLanguage": "tr-TR",
            "about": [
                { "@type": "Thing", "name": "Teknik GEO" },
                { "@type": "Thing", "name": "Generative Engine Optimization" }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://bahattinyaylagul.com/" },
                { "@type": "ListItem", "position": 2, "name": "GEO Danışmanlığı", "item": "https://bahattinyaylagul.com/geo" },
                { "@type": "ListItem", "position": 3, "name": "AI Botlarını robots.txt ile Yönetme", "item": "https://bahattinyaylagul.com/geo/ai-botlari-robots-txt" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                                "@type": "Question",
                                "name": "GPTBot'u engellemek ChatGPT Search'ten çıkarır mı?",
                                "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Hayır. GPTBot'u engelleyip OAI-SearchBot'a izin verirseniz eğitim taramasını durdururken ChatGPT Search'teki görünürlüğünüzü korursunuz. İkisi ayrı user-agent, ayrı boru hattı."
                                }
                },
                {
                                "@type": "Question",
                                "name": "Google-Extended'ı engellemek arama sıralamama zarar verir mi?",
                                "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Vermez. Google-Extended yalnızca Gemini gibi yapay zeka ürünleri için veri toplar; Google Search'ün tarama ve sıralama süreçlerinden bağımsızdır."
                                }
                },
                {
                                "@type": "Question",
                                "name": "CCBot'u engellemek GPTBot'u da engeller mi?",
                                "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Hayır, bunlar birbirinden bağımsız boru hatları. CCBot Common Crawl arşivini besler; o arşivi kullanan başka modeller olabilir ama OpenAI'ın kendi taraması ayrı yürür. Birini kapatmak diğerini kapatmaz."
                                }
                },
                {
                                "@type": "Question",
                                "name": "Perplexity robots.txt'e uyuyor mu?",
                                "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Kısmen. Perplexity-User için şirket \"bu bir bot değil, ajan\" argümanını öne sürüyor ve direktifi bağlayıcı saymıyor. Cloudflare'in 4 Ağustos 2025 tarihli raporu ayrıca user-agent, IP ve ASN sahteciliği yapan gizli tarayıcılar belgeledi — bu tek bir sağlayıcının kendi ağındaki gözlemi. Engelleme niyetiniz ciddiyse WAF ya da sunucu düzeyi daha güvenilir."
                                }
                },
                {
                                "@type": "Question",
                                "name": "ChatGPT-User'ı engellemeli miyim?",
                                "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Neredeyse hiçbir zaman. Bu, bir kullanıcının ChatGPT üzerinden sitenize yaptığı gerçek zamanlı getirme isteğidir; engellemek insanın kendi elleriyle istediği şeyi kırmak anlamına gelir."
                                }
                },
                {
                                "@type": "Question",
                                "name": "llms.txt robots.txt'in yerini alır mı?",
                                "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Almaz. robots.txt erişim izniyle ilgilenir ve yaygın biçimde tanınır; llms.txt ise modele hangi içeriğin okunmaya değer olduğunu öneren, henüz standartlaşmamış bir dosyadır. Biri kapıyı, diğeri kapının içindeki yönlendirme tabelasını düzenler."
                                }
                },
                {
                                "@type": "Question",
                                "name": "Alt alan adlarım için ayrı robots.txt gerekir mi?",
                                "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Evet. Kural her ana bilgisayar adı ve protokol için ayrıdır; kök alan adınızdaki dosya blog.siteniz.com ya da shop.siteniz.com için geçerli olmaz. Alt alan adında sık unutulan tuzak budur."
                                }
                },
                {
                                "@type": "Question",
                                "name": "robots.txt'i ne sıklıkla güncellemeliyim?",
                                "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Takvime değil tetikleyiciye bağlayın: yeni bir büyük LLM şirketi tarayıcı duyurduğunda, mevcut bir botun davranışı değiştiğinde ya da içerik stratejiniz değiştiğinde. OpenAI ve Anthropic kuralları saygıyla karşılayacaklarını kamuoyu önünde taahhüt etti, dolayısıyla bu iki tarafta değişiklik genelde yeni user-agent eklenmesi biçiminde gelir. Yılda bir de olsa dosyayı açıp okumak, unutulmuş bir Disallow satırını yakalamanın en ucuz yolu."
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
                        src="/images/structured_data_seo_3d.png"
                        alt="AI Botlarını robots.txt ile Yönetme: GPTBot, ClaudeBot ve Ötesi"
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
                                    <span>Teknik GEO</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
                                    AI Botlarını robots.txt ile Yönetme: GPTBot, ClaudeBot ve Ötesi
                                </h1>

                                <p className="lead-text text-gray-300 text-lg leading-relaxed font-medium max-w-xl mb-8">
                                    GPTBot, OAI-SearchBot, ClaudeBot, Google-Extended, CCBot, Bytespider ve Perplexity-User için robots.txt yapılandırması. Eğitimi kesip ChatGPT Search'te kalma yöntemi, kopya-yapıştır bloklar, Cloudflare Content Signals ve uyumsuz botlar için WAF önlemleri.
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
                                        <span>16 dk okuma</span>
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
                                src="/images/structured_data_seo_3d.png"
                                alt="AI Botlarını robots.txt ile Yönetme: GPTBot, ClaudeBot ve Ötesi"
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
                    <span className="text-gray-600 font-bold truncate">AI Botlarını robots.txt ile Yönetme</span>
                </nav>

                <ArticleContent />
            </div>

            <Footer />
        </main>
    );
}
