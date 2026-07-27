/* eslint-disable react/no-unescaped-entities */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { AUTHOR_ENTITY } from "@/lib/schema";

export const metadata: Metadata = {
    title: "AI Overviews Nedir? Nasıl Çalışır, SEO'ya Etkisi ve İçerik Stratejisi – Bahattin Yaylagül",
    description: "AI Overviews (Yapay Zeka Bakışı) nedir, query fan-out nasıl çalışır, organik trafiği nasıl etkiler? SEO kriterleri, Search Console izleme yöntemleri ve içerik stratejisi rehberi.",
    alternates: {
        canonical: "/geo/ai-overviews-nedir",
    },
};

const headings = [
    { id: "ai-overviews-nedir", text: "AI Overviews Nedir?" },
    { id: "nasil-calisir", text: "Nasıl Çalışır: Query Fan-Out" },
    { id: "ne-zaman-gorunur", text: "Ne Zaman Görünür, Ne Zaman Görünmez?" },
    { id: "organik-trafik-etkisi", text: "Organik Trafik ve SEO Etkisi" },
    { id: "icerik-ve-teknik-seo", text: "İçerik ve Teknik SEO Kriterleri" },
    { id: "search-console-izleme", text: "Search Console ile Trafik İzleme" },
    { id: "opt-out-kontrol", text: "Opt-Out ve Önizleme Kontrolü" },
    { id: "hukuki-etik-riskler", text: "Hukuki ve Etik Riskler" },
    { id: "tarihce", text: "Kısa Tarihçe: SGE'den Bugüne" },
    { id: "faq", text: "Sıkça Sorulan Sorular" },
];

const jsonLd = JSON.stringify([
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "AI Overviews Nedir? Nasıl Çalışır, SEO'ya Etkisi ve İçerik Stratejisi",
        "description": "AI Overviews (Yapay Zeka Bakışı) nedir, query fan-out nasıl çalışır, organik trafiği nasıl etkiler? SEO kriterleri, Search Console izleme yöntemleri ve içerik stratejisi rehberi.",
        "datePublished": "2026-07-27",
        "dateModified": "2026-07-27",
        "author": AUTHOR_ENTITY,
        "publisher": {
            "@type": "Person",
            "@id": "https://bahattinyaylagul.com/#bahattin-yaylagul",
            "name": "Bahattin Yaylagül",
            "url": "https://bahattinyaylagul.com"
        },
        "url": "https://bahattinyaylagul.com/geo/ai-overviews-nedir",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://bahattinyaylagul.com/geo/ai-overviews-nedir"
        },
        "inLanguage": "tr",
        "about": {
            "@type": "Thing",
            "name": "AI Overviews",
            "description": "Google's AI-powered search result summaries generated using the Gemini model, appearing at the top of SERP."
        },
        "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [
                "#ai-overviews-nedir p:first-of-type",
                ".lead-text"
            ]
        },
        "mentions": [
            {
                "@type": "SoftwareApplication",
                "name": "Google Gemini",
                "manufacturer": { "@type": "Organization", "name": "Google" }
            },
            {
                "@type": "SoftwareApplication",
                "name": "Google Search Console",
                "manufacturer": { "@type": "Organization", "name": "Google" }
            },
            {
                "@type": "Organization",
                "name": "Semrush"
            },
            {
                "@type": "Organization",
                "name": "Ahrefs"
            },
            {
                "@type": "Organization",
                "name": "Penske Media Corporation"
            },
            {
                "@type": "Organization",
                "name": "Chegg"
            }
        ]
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://bahattinyaylagul.com" },
            { "@type": "ListItem", "position": 2, "name": "GEO Danışmanlığı", "item": "https://bahattinyaylagul.com/geo" },
            { "@type": "ListItem", "position": 3, "name": "AI Overviews Nedir?", "item": "https://bahattinyaylagul.com/geo/ai-overviews-nedir" }
        ]
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "AI Overviews'tan nasıl çıkabilirim?",
                "acceptedAnswer": { "@type": "Answer", "text": "AI Overviews'tan doğrudan çıkış yapmanın resmi bir yolu yoktur. robots.txt dosyasına Google-Extended yönergesini ekleyebilir ya da nosnippet meta etiketiyle snippet gösterimini kapatabilirsiniz. Ancak bu değişikliklerin Google tarafından işlenmesi birkaç gün ila birkaç ay sürebilir." }
            },
            {
                "@type": "Question",
                "name": "AI Overviews sağlık ve finans sorgularında neden görünmüyor?",
                "acceptedAnswer": { "@type": "Answer", "text": "Google, sağlık veya finansı etkileyebilecek hassas YMYL konularında yapay zeka özetini kasıtlı olarak göstermez. Yanlış bir tıbbi ya da finansal bilginin doğrudan zararı olabileceği için bu sorgularda AIO yerine genellikle yetkili kurumların organik sonuçları görünür." }
            },
            {
                "@type": "Question",
                "name": "AI Overviews trafiğimi Search Console'da nasıl takip ederim?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yapay zeka özelliklerinden gelen trafik, Search Console Performans raporunda Web arama türü altında raporlanır. Ayrı bir AI Overviews filtresi henüz mevcut değil. Yüksek ortalama konum ama beklenenden düşük tıklama oranı gösteren sorgular, o arama için AI Overview varlığına işaret edebilir." }
            },
            {
                "@type": "Question",
                "name": "Küçük bir site AI Overviews'ta görünebilir mi?",
                "acceptedAnswer": { "@type": "Answer", "text": "Evet, mümkün. Atıf yapılan kaynaklar arasında Quora ve Reddit gibi kullanıcı içerikli platformlar ilk sıralarda yer alıyor. Bu, alan adı otoritesinden çok soruya verilen yanıtın kalitesinin belirleyici olduğunu gösteriyor." }
            },
            {
                "@type": "Question",
                "name": "AI Overviews reklamlar içeriyor mu?",
                "acceptedAnswer": { "@type": "Answer", "text": "Evet, içeriyor. Google, güçlü ticari niyet tespit ettiğinde AI Overviews içine ve çevresine ücretli reklamlar entegre ediyor. Bu reklamlar genellikle görsel ve fiyat bilgisi içeren ürün karuselleri biçiminde karşınıza çıkıyor." }
            },
            {
                "@type": "Question",
                "name": "Hangi içerikler AI Overviews'ta en çok atıf alıyor?",
                "acceptedAnswer": { "@type": "Answer", "text": "Semrush'un Haziran 2025 araştırmasına göre AI Bakışı'nda en çok atıf yapılan kaynak Quora, ikinci sırada ise Reddit'tir. Soru-cevap formatındaki, doğrudan ve anlaşılır dille yazılmış, gerçek deneyime dayalı içerikler öne çıkıyor." }
            },
            {
                "@type": "Question",
                "name": "Önizleme kontrolü değişikliğim ne zaman geçerli olur?",
                "acceptedAnswer": { "@type": "Answer", "text": "nosnippet etiketi veya Google-Extended gibi değişikliklerin Google tarafından işlenmesi birkaç gün ila birkaç ay sürebilir. Search Console'dan sayfanın yeniden taranmasını talep edebilirsiniz; bu süreci biraz hızlandırabilir, ancak garantili bir zaman çerçevesi yoktur." }
            }
        ]
    }
]);

export default function AIOverviewsPage() {
    return (
        <main className="min-h-screen bg-white font-sans selection:bg-violet-100 selection:text-violet-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd }}
            />
            {/* Fixed Header Wrapper */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <Navigation />
            </header>

            {/* Hero Header - Full Width */}
            <div className="w-full bg-[#0a0a0a] pt-16 pb-0 relative overflow-hidden mt-20">
                {/* Abstract Background Shapes */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>
                </div>

                <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
                    <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">
                        {/* Text Content */}
                        <div className="space-y-8 flex flex-col justify-center h-full pb-8">
                            <div>
                                <div className="flex items-center gap-3 text-yellow-400 font-bold tracking-widest text-xs uppercase mb-4">
                                    <span className="text-violet-400">GEO Danışmanlığı</span>
                                    <span className="w-px h-3 bg-white/20"></span>
                                    <span>AI Overviews & SERP</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
                                    AI Overviews Nedir? Nasıl Çalışır, SEO'ya Etkisi ve İçerik Stratejisi
                                </h1>

                                {/* Divider & Date Meta */}
                                <div className="border-t border-white/10 pt-6 flex items-center gap-6 text-sm font-medium text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span>27 Temmuz 2026</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                        <span>12 dk okuma</span>
                                    </div>
                                </div>
                            </div>

                            {/* Author Section */}
                            <div className="flex items-center gap-4 pt-2">
                                <Link href="/hakkimda" className="w-12 h-12 rounded-full border-2 border-white/10 relative overflow-hidden hover:border-violet-400 transition-colors">
                                    <Image src="/images/bahattin-yaylagul.jpg" alt="Bahattin Yaylagül" fill className="object-cover" />
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
                                            className="text-gray-400 hover:text-violet-500 transition-colors"
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

                        {/* 3D Illustration/Cover */}
                        <div className="relative hidden lg:block h-[400px] w-full">
                            <Image
                                src="/images/crawling_indexing_3d.png"
                                alt="AI Overviews Cover 3D"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-8 pt-12 pb-20">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-8 font-medium tracking-wide font-sans">
                    <Link href="/" className="hover:text-violet-600 transition-colors">Ana Sayfa</Link>
                    <span className="text-gray-200">/</span>
                    <Link href="/geo" className="hover:text-violet-600 transition-colors">GEO Danışmanlığı</Link>
                    <span className="text-gray-200">/</span>
                    <span className="text-gray-600 font-bold truncate">AI Overviews Nedir?</span>
                </nav>

                <div className="grid lg:grid-cols-[250px_1fr] gap-12 items-start relative">
                    {/* Left Sidebar: TOC Only */}
                    <aside className="hidden lg:block sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto pr-4 custom-scrollbar">
                        <div>
                            <div className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2 pl-2">
                                <svg className="w-4 h-4 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                                İÇİNDEKİLER
                            </div>
                            <nav className="space-y-1 border-l-2 border-gray-100">
                                {headings.map((heading, i) => (
                                    <a
                                        key={i}
                                        href={`#${heading.id}`}
                                        className="block py-3 pl-4 text-sm text-gray-600 hover:text-violet-700 hover:border-l-2 hover:border-violet-700 -ml-0.5 transition-all leading-relaxed"
                                    >
                                        <span className="font-mono text-xs text-gray-400 mr-2 font-medium">{(i + 1).toString().padStart(2, '0')}</span>
                                        {heading.text}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content Column */}
                    <article className="min-w-0">
                        {/* Lead Description */}
                        <p className="lead-text text-xl text-gray-700 leading-relaxed font-light mb-12 pl-6 border-l-4 border-violet-600">
                            AI Overviews (Yapay Zeka Bakışı), Google'ın arama sonuçlarının en üstünde Gemini modeliyle ürettiği yapay zeka özetleridir. Bu rehber, AIO'nun nasıl çalıştığını, organik trafiğe etkisini, içerik stratejisini ve hukuki risklerini kapsamlı biçimde ele alıyor.
                        </p>

                        {/* Content Body */}
                        <div
                            className="prose prose-lg max-w-none 
                                prose-headings:font-sans prose-headings:font-bold prose-headings:text-foreground
                                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight
                                prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-gray-800
                                prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3 prose-h4:text-gray-900 prose-h4:font-bold
                                prose-p:font-sans prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-6
                                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2
                                prose-li:text-gray-600 prose-li:leading-relaxed
                                prose-strong:font-bold prose-strong:text-gray-900
                                prose-a:text-violet-600 prose-a:no-underline hover:prose-a:underline
                                mb-16"
                        >
                            {/* --- AI Overviews Nedir? --- */}
                            <h2 id="ai-overviews-nedir" style={{ scrollMarginTop: "100px" }}>AI Overviews Nedir?</h2>
                            <p>
                                <strong>AI Overviews (Yapay Zeka Bakışı)</strong>, Google'ın Gemini modeli kullanarak arama sonuçlarının en üstünde otomatik olarak ürettiği yapay zeka özetleridir. Birden fazla web kaynağından sentezlenen bu özetler, kullanıcıya doğrudan yanıt sunarken kaynak sitelere bağlantı verir. SERP'te sıfırıncı konumu işgal eder — ücretli reklamların hemen altında, organik sonuçların ve Featured Snippet'ın tamamından önce görünür.
                            </p>
                            <p>
                                Yapay Zeka Bakışı her sorguda çıkmaz. Google'ın sistemi AIO'nun klasik aramaya gerçekten katkı sağlayıp sağlamayacağını değerlendirir; yalnızca yararlı olduğuna karar verilen durumlarda gösterir. Basit navigasyonel sorgularda veya marka aramalarında genellikle görünmez; karmaşık, açıklama gerektiren sorularda devreye girer.
                            </p>

                            {/* --- Nasıl Çalışır --- */}
                            <h2 id="nasil-calisir" style={{ scrollMarginTop: "100px" }}>Nasıl Çalışır: Query Fan-Out ve Kaynak Sentezi</h2>
                            <p>
                                Yapay Zeka Bakışı tek bir kaynaktan cevap kopyalamaz. Büyük dil modelleri kullanarak birden fazla web sayfasını tarar, analiz eder ve sentezleyerek tek bir yanıt üretir.
                            </p>
                            <p>
                                Perde arkasında şu oluyor: Siz bir soru yazıyorsunuz, sistem arka planda o soruyu onlarca alt sorguya bölüyor. Bu tekniğe <strong>sorgu yayma (query fan-out)</strong> deniyor. "Evde protein kaynakları" diye sorduğunuzda sistem aynı anda "bitkisel protein", "hayvansal protein", "günlük protein ihtiyacı" gibi yan sorguları da çalıştırıyor olabilir.
                            </p>
                            <p>
                                <strong>Featured Snippet ile farkı:</strong> Öne çıkan snippet tek bir web sitesinden kelimesi kelimesine alınan yanıttır. AI Overviews ise birden fazla kaynaktan sentez yapar — biri kopyalar, diğeri derler. Pratik sonucu: klasik bir web aramasına kıyasla daha fazla sayıda faydalı bağlantı gösterebilir; tek bir sitenin sıfırıncı konumu tekeline alması yerine birden fazla kaynak aynı anda görünürlük kazanabilir.
                            </p>
                            <p>
                                Kullanıcılar özetteki dilin karmaşıklığını kendileri ayarlayabiliyor — basitleştirilmiş veya ayrıntılı seçenek sunuluyor.
                            </p>

                            {/* --- Ne Zaman Görünür --- */}
                            <h2 id="ne-zaman-gorunur" style={{ scrollMarginTop: "100px" }}>Ne Zaman Görünür, Ne Zaman Görünmez?</h2>
                            <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm bg-white">
                                <table className="min-w-full divide-y divide-gray-200 text-sm font-sans mb-0">
                                    <thead className="bg-gray-50 font-bold text-gray-900">
                                        <tr>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Koşul</th>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Durum</th>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Açıklama</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 text-gray-600">
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Karmaşık, çok adımlı sorgular</td>
                                            <td className="px-6 py-4"><span className="text-green-600 font-bold">✅ Görünür</span></td>
                                            <td className="px-6 py-4">Normalde birden fazla arama gerektiren sorular AIO'yu tetikler</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Basit, tek cevaplı sorgular</td>
                                            <td className="px-6 py-4"><span className="text-red-600 font-bold">❌ Görünmez</span></td>
                                            <td className="px-6 py-4">Sistem katkı sağlamayacağını değerlendirirse AIO üretmez</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">YMYL konuları (sağlık, finans)</td>
                                            <td className="px-6 py-4"><span className="text-red-600 font-bold">❌ Görünmez</span></td>
                                            <td className="px-6 py-4">Hassas konularda AIO devre dışı bırakılır</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Sağlık aramaları (Ocak 2026 sonrası)</td>
                                            <td className="px-6 py-4"><span className="text-orange-600 font-bold">❌ Kısıtlı</span></td>
                                            <td className="px-6 py-4">The Guardian araştırmasının ardından Google sağlık sorgularında AIO'yu daralttı</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Gizli mod (incognito)</td>
                                            <td className="px-6 py-4"><span className="text-red-600 font-bold">❌ Görünmez</span></td>
                                            <td className="px-6 py-4">Özel tarama oturumlarında AIO gösterilmez</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Reklam engelleyici etkin tarayıcı</td>
                                            <td className="px-6 py-4"><span className="text-red-600 font-bold">❌ Görünmez</span></td>
                                            <td className="px-6 py-4">Aktif reklam engelleyici AIO'nun yüklenmesini engeller</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>
                                <strong>"Neden göremiyorum?"</strong> sorusunun en yaygın üç nedeni: gizli modda geziyorsunuzdur, reklam engelleyiciniz açıktır ya da aradığınız konu YMYL kapsamına giriyordur. Bu üçünü eledikten sonra hâlâ göremiyorsanız, sorgunuz büyük olasılıkla AIO'nun katkı sağlamayacağı kadar basit değerlendiriliyor.
                            </p>

                            {/* --- Organik Trafik ve SEO Etkisi --- */}
                            <h2 id="organik-trafik-etkisi" style={{ scrollMarginTop: "100px" }}>Organik Trafik ve SEO Üzerindeki Gerçek Etki</h2>
                            <p>
                                Trafik kaybı tartışması tek boyutlu anlatılıyor — gerçek tablo daha karmaşık.
                            </p>
                            <p>
                                <strong>Ekran kaplama meselesi somut:</strong> Aralık 2024 araştırmasına göre AI Bakışı ile Featured Snippet birlikte göründüğünde masaüstünde ekranın %67,1'ini, mobilde ise %75,7'sini kaplıyor. Organik 1. sırada olsanız bile kullanıcı tarafından hiç görünmeyebilirsiniz — sıralamayı kazanmak artık görünürlüğü garanti etmiyor.
                            </p>
                            <p>
                                <strong>Sıfır tıklama etkisi:</strong> AI özetlerinin sıfır tıklama aramalarını artırdığına dair kanıtlar mevcut ve bu doğrudan organik trafik kaybına yol açıyor. Bilgi amaçlı sorgularda bu etki daha belirgin.
                            </p>
                            <p>
                                <strong>Öte yandan:</strong> AIO kaynaklı tıklamalar farklı bir kullanıcı profilini getiriyor. Yapay Zeka Bakışı olan sayfalarda tıklayan kullanıcıların sitede daha fazla zaman geçirme ihtimali daha yüksek ve bu kullanıcıların daha derin anlayış arayışında olduğu değerlendiriliyor. Hacim düşse de gelen ziyaretçi daha nitelikli.
                            </p>
                            <p>
                                <strong>Küçük ve yeni siteler için tablo daha net:</strong> AIO yetkili kaynaklardan içerik çektiğinden, kurumsal otorite inşa etmemiş sitelerin görünürlük kazanması giderek zorlaşıyor. Trafik kalitesi argümanı bu segment için anlamsız — önce kaynak olarak seçilmek gerekiyor.
                            </p>
                            <p>
                                Penske Media Corporation, kendi sitelerine bağlanan aramaların %20'sinde AI Bakışı göründüğünü iddia etti. Google sözcüsü José Castañeda bu iddiayı "asılsız" olarak nitelendirdi ve AIO'nun trafiği daha fazla web sitesi çeşitliliğine yönlendirdiğini savundu — bağımsız doğrulama henüz yetersiz.
                            </p>

                            {/* --- İçerik ve Teknik SEO Kriterleri --- */}
                            <h2 id="icerik-ve-teknik-seo" style={{ scrollMarginTop: "100px" }}>AI Overviews'ta Görünmek İçin İçerik ve Teknik SEO Kriterleri</h2>
                            <p>
                                Google'ın açıklaması net: Yapay Zeka Bakışı için özel bir optimizasyon yok. Ama bu "hiçbir şey yapmana gerek yok" anlamına gelmiyor — temel SEO koşullarını karşılamayan bir sayfa zaten yarışa giremiyor.
                            </p>

                            <ol className="space-y-4 pl-6 mb-8 font-sans text-gray-600 leading-relaxed list-decimal">
                                <li>
                                    <strong>Teknik ön koşulları kontrol et:</strong> Sayfanın dizine eklenmiş olması şart. <code>nosnippet</code> etiketi taşıyan veya <code>robots.txt</code>'te taramaya izin verilmeyen sayfalar yapay zeka özetine hiç giremez. Google Search Console'da "Dizine Eklendi" durumunu doğrula.
                                </li>
                                <li>
                                    <strong>Dahili bağlantılarla içeriği keşfedilebilir kıl:</strong> Orphan page olarak duran içerikler taranma sıklığı düşük olur, dolayısıyla AIO havuzuna girme şansı da azalır. Ana kategori sayfalarından ve ilgili yazılardan bağlantı ver.
                                </li>
                                <li>
                                    <strong>Soruyla başla, cevapla bitir:</strong> Soru tabanlı uzun kuyruklu anahtar kelimeler, AI Overviews'ı tetikleyen bilgi sorgularıyla doğrudan örtüşür. Sayfa, soruyu ilk 100 kelimede yanıtlamalı. Cevabı paragrafın sonuna saklamak Gemini'yi de okuyucuyu da yorar.
                                </li>
                                <li>
                                    <strong>Başlık hiyerarşisini doğru kur:</strong> H1, H2, H3 yapısı AI'ın içeriği hızlı taramasına doğrudan katkı sağlar. "Genel Bilgiler" gibi muğlak başlıklar yerine "AI Overviews Hangi Sorguları Tetikler?" gibi soru formatı tercih et.
                                </li>
                                <li>
                                    <strong>Featured Snippet sıralamalarını referans al:</strong> Halihazırda featured snippet veya "People Also Ask" kutusunda yer alan içerikler, AI Overviews için de iyi yapılandırılmış sayılır. Search Console'da sıfırıncı konumda gördüğün sayfalar AIO için en güçlü adaylardır.
                                </li>
                                <li>
                                    <strong>Schema markup ekle:</strong> FAQ, HowTo veya Article schema'sı sayfanın konusunu makine düzeyinde netleştirir. Kritik kural: schema içindeki bilgiler sayfadaki görünür metinle eşleşmeli — çelişen veriler güven kaybına yol açar.
                                </li>
                                <li>
                                    <strong>Metni ön plana çıkar, görsele gömme:</strong> Önemli içerikleri metin formatında sun. Bir tablodaki veriyi görsel olarak yayınlarsan Google onu okuyamaz; aynı veriyi HTML tablosu veya düz metin olarak da sayfaya ekle.
                                </li>
                                <li>
                                    <strong>İşletme ve ürün verilerini güncel tut:</strong> E-ticaret veya yerel işletme sayfaları için Merchant Center ve İşletme Profili bilgilerinin güncel olması gerekiyor. Eski bilgi AI'ın o kaynağı atlamasına yol açar.
                                </li>
                                <li>
                                    <strong>Forum tarzı içerik yaz — bu veri destekli bir öneri:</strong> Semrush'un Haziran 2025 araştırması beklenmedik bir bulgu ortaya koydu: AI Bakışı'nda en çok atıf yapılan kaynak Quora, ikincisi Reddit. Her ikisi de kullanıcı sorusu → doğrudan cevap → destekleyici detay formatıyla çalışıyor. Başlığı soru yap, ilk cümleyi cevap yap, sonraki paragrafları gerekçe ve bağlam olarak kullan.
                                </li>
                            </ol>

                            {/* --- Search Console ile İzleme --- */}
                            <h2 id="search-console-izleme" style={{ scrollMarginTop: "100px" }}>Search Console ile AI Overviews Trafiğini İzleme</h2>
                            <p>
                                Google, AI Overviews kaynaklı tıklamaları ayrı bir kanal olarak raporlamıyor. Yapay zeka özelliklerinde görünen sitelerin trafiği, Search Console Performans raporundaki "Web" arama türü altında genel trafik verisiyle birleştirilmiş biçimde sunuluyor. Hangi tıklamanın nereden geldiğini doğrudan görmek mümkün değil.
                            </p>

                            <h3>Tanı Yöntemi: Yüksek Konum + Düşük CTR</h3>
                            <p>
                                Bir sorgu için ortalama konumunuz 1-3 arasında ama tıklama oranı beklentinin belirgin altındaysa, o sorguda büyük olasılıkla bir AI Overviews kutusu devreye girmiştir. Bunu uygulamak için: <strong>Performans → Sorgular → Ortalama Konuma göre sırala → CTR sütununu ekle.</strong> Konum 1-5 arasında olup CTR'si %2'nin altında kalan sorguları işaretleyin. Ardından o sorguları incognito modda aratın; AI Overviews kutusunun çıkıp çıkmadığını doğrudan doğrulayın.
                            </p>

                            <h3>Üçüncü Taraf Araçlar</h3>
                            <p>
                                <strong>Semrush</strong>, Domain Overview altında AI Overview görünürlüğünü üç kategoride raporluyor: görünürlük, bahsedilme sayısı ve alıntılanan sayfalar. Hangi içeriklerin özete kaynaklık ettiğini sayfa bazında görmek için özellikle değerli.
                            </p>
                            <p>
                                <strong>Ahrefs</strong> ise hangi sayfaların AI Overviews tetiklediğini ve domain'in ne sıklıkla bağlantılandırıldığını gösteriyor. Rakip bir domain'in AIO'da ne kadar yer kapladığını da buradan ölçebilirsiniz.
                            </p>
                            <p>
                                CTR düşüşüyle birlikte dönüşüm oranındaki değişimi Google Analytics üzerinden gözlemlemek de net bir tablo verir.
                            </p>

                            {/* --- Opt-Out ve Önizleme Kontrolü --- */}
                            <h2 id="opt-out-kontrol" style={{ scrollMarginTop: "100px" }}>AI Overviews'tan Çıkma (Opt-Out) ve Önizleme Kontrolü</h2>
                            <p>
                                AI Overviews'tan doğrudan çıkmanın resmi bir yolu yok. Elinizde yalnızca dolaylı kontrol mekanizmaları var.
                            </p>

                            <h3>Mevcut Araçlar ve Gerçek Sınırlılıkları</h3>
                            <ul>
                                <li><strong>nosnippet meta etiketi:</strong> Snippet oluşturmasını ve yapay zeka özetine dahil edilmesini engeller. Sayfanın organik sıralamada görünmeye devam etmesine izin verdiği için en az hasarlı seçenek.</li>
                                <li><strong>data-nosnippet ve max-snippet etiketleri:</strong> İçerik önizlemesini kısıtlamak için kullanılabilir.</li>
                                <li><strong>robots.txt:</strong> Googlebot'un belirli sayfaları taramasını engelleyebilir; ancak taramayı durdurmak indekslemeyi durdurmaz. Başka bir siteden bağlantı alan sayfa engelleseniz bile indekslenmeye devam edebilir.</li>
                                <li><strong>Google-Extended direktifi:</strong> Google'ın diğer sistemlerindeki yapay zeka eğitimini sınırlar — AI Overviews'ı doğrudan hedeflemez.</li>
                                <li><strong>noindex:</strong> Sayfayı AI Overviews'tan ve normal arama sonuçlarından tamamen çıkarır. Yapay zeka özetinden kurtulmak için organik görünürlüğünüzün tamamından vazgeçmiş olursunuz.</li>
                            </ul>
                            <p>
                                <strong>Operasyonel risk:</strong> Önizleme kontrolü değişikliğinizi yaptıktan sonra Google'ın bunu işlemesi birkaç gün ile birkaç ay arasında sürebilir. Değişikliği canlıya aldıktan sonra Search Console'daki URL Denetleme aracıyla sayfanın güncel önbellek durumunu kontrol edin.
                            </p>
                            <p>
                                <strong>Pratik karar çerçevesi:</strong> O sayfanın organik trafiği sizin için değerliyse <code>nosnippet</code> ile başlayın; <code>noindex</code>'e yalnızca o sayfanın arama görünürlüğünün zaten önemi olmadığı durumlarda başvurun.
                            </p>

                            {/* --- Hukuki ve Etik Riskler --- */}
                            <h2 id="hukuki-etik-riskler" style={{ scrollMarginTop: "100px" }}>Yayıncılar İçin Hukuki ve Etik Riskler</h2>
                            <h3>İçerik Sahipliği</h3>
                            <p>
                                Penske Media Corporation, Eylül 2025'te Google'a dava açtı; iddia net: AI Bakışı, yayıncıların web sitelerinden izinsiz içerik kullanıyor. Küçük yayıncıların fikrî mülkiyet hakları üzerindeki endişeler daha da derin; dava açacak kaynakları olmadığı için bu endişe çoğunlukla sessiz kalıyor.
                            </p>

                            <h3>2026 Patent Endişesi</h3>
                            <p>
                                2026 tarihli bir Google patenti, arama sonuçlarında web sitesi açılış sayfasını yapay zeka tarafından optimize edilmiş bir kopyayla değiştirme imkânını tanımlıyor. Henüz hayata geçirilmedi, ama içeriğinizin bir kopyasının sizin yerinize kullanıcıya sunulması ihtimali telif hakkı tartışmasını bambaşka bir boyuta taşıyor.
                            </p>

                            <h3>Antitröst — Chegg Davası</h3>
                            <p>
                                24 Şubat 2025'te eğitim platformu Chegg, Alphabet'e antitröst yasasını ihlal ettiği iddiasıyla dava açtı. Chegg'e göre AI Bakışı öğrencileri "düşük kaliteli, doğrulanmamış yapay zeka özetlerine" yönlendiriyor ve orijinal içerik üreticilerini piyasadan dışlıyor. Şirket, satış veya borsadan çıkma seçeneklerini de değerlendirdiğini açıkladı.
                            </p>

                            <h3>Halüsinasyon Riski</h3>
                            <p>
                                AI Bakışı hatalı bilgi üretebiliyor; kullanıcı bunu kaynağa gitmeden fark edemiyor. Yanlış bir özet sizin içeriğinize dayandırıldığında okuyucu hatayı size bağlayabilir — sitenizi ziyaret etmeden oluşan bu algı hasarını düzeltmek neredeyse imkânsız.
                            </p>

                            <h3>Küçük Yayıncılar İçin Görünürlük Sorunu</h3>
                            <p>
                                Kullanıcıların özetlere güvenerek kaynak siteleri ziyaret etmemesiyle oluşan trafik kaybı ve daha küçük içerik sağlayıcıların görünürlüğüne dair etik endişeler henüz bir hukuki çerçeveye kavuşmuş değil.
                            </p>

                            {/* --- Kısa Tarihçe --- */}
                            <h2 id="tarihce" style={{ scrollMarginTop: "100px" }}>Kısa Tarihçe: SGE'den Bugüne</h2>
                            <p>
                                Mayıs 2023'teki Google I/O konferansında özellik, <strong>Search Generative Experience (SGE)</strong> adıyla sınırlı test olarak tanıtıldı. Mayıs 2024'te "AI Bakışı" olarak yeniden adlandırılıp ABD'de genel kullanıma açıldı — OpenAI ve ChatGPT'nin arama davranışını değiştirmeye başladığı döneme denk gelen bu hamle, sektör tarafından Google'ın rekabete doğrudan yanıtı olarak okundu.
                            </p>
                            <p>
                                Ağustos 2024'te Birleşik Krallık, Hindistan, Japonya, Brezilya, Meksika ve Endonezya dahil birçok ülkede çoklu dil desteğiyle açıldı; Ekim 2024'te bu sayı 100'ü aştı. Mayıs 2025 itibarıyla AI Bakışı 200'den fazla ülke ve bölgede, 40'tan fazla dilde çalışıyor. Mart 2025'te Google, SERP'in tamamının yapay zeka tarafından oluşturulduğu "AI Modu"nu test etmeye başladı.
                            </p>
                        </div>

                        {/* SSS Accordion Section */}
                        <section id="faq" className="mt-16 pt-16 border-t border-gray-100" style={{ scrollMarginTop: "100px" }}>
                            <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">Sık Sorulan Sorular</h2>
                            <div className="space-y-4">
                                <details className="group bg-gray-50/50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none font-sans">
                                        <span className="font-bold text-gray-955 text-base pr-4">AI Overviews'tan nasıl çıkabilirim?</span>
                                        <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-200/60 pt-5 bg-white">
                                        AI Overviews'tan doğrudan çıkış yapmanın resmi bir yolu yoktur. robots.txt dosyasına Google-Extended yönergesini ekleyebilir ya da nosnippet meta etiketiyle snippet gösterimini kapatabilirsiniz. Ancak bu değişikliklerin Google tarafından işlenmesi birkaç gün ila birkaç ay sürebilir.
                                    </div>
                                </details>

                                <details className="group bg-gray-50/50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none font-sans">
                                        <span className="font-bold text-gray-955 text-base pr-4">AI Overviews sağlık ve finans sorgularında neden görünmüyor?</span>
                                        <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-200/60 pt-5 bg-white">
                                        Google, sağlık veya finansı etkileyebilecek hassas YMYL konularında yapay zeka özetini kasıtlı olarak göstermez. Yanlış bir tıbbi ya da finansal bilginin doğrudan zararı olabileceği için bu sorgularda AIO yerine genellikle yetkili kurumların organik sonuçları görünür.
                                    </div>
                                </details>

                                <details className="group bg-gray-50/50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none font-sans">
                                        <span className="font-bold text-gray-955 text-base pr-4">AI Overviews trafiğimi Search Console'da nasıl takip ederim?</span>
                                        <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-200/60 pt-5 bg-white">
                                        Yapay zeka özelliklerinden gelen trafik, Search Console Performans raporunda "Web" arama türü altında raporlanır. Ayrı bir "AI Overviews" filtresi henüz mevcut değil. Yüksek ortalama konum ama beklenenden düşük tıklama oranı gösteren sorgular, o arama için AI Overview varlığına işaret edebilir.
                                    </div>
                                </details>

                                <details className="group bg-gray-50/50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none font-sans">
                                        <span className="font-bold text-gray-955 text-base pr-4">Küçük bir site AI Overviews'ta görünebilir mi?</span>
                                        <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-200/60 pt-5 bg-white">
                                        Evet, mümkün. Atıf yapılan kaynaklar arasında Quora ve Reddit gibi kullanıcı içerikli platformlar ilk sıralarda yer alıyor. Bu, alan adı otoritesinden çok soruya verilen yanıtın kalitesinin belirleyici olduğunu gösteriyor. Küçük bir site, niş bir konuda net ve iyi yapılandırılmış bir yanıt sunuyorsa atıf alabilir.
                                    </div>
                                </details>

                                <details className="group bg-gray-50/50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none font-sans">
                                        <span className="font-bold text-gray-955 text-base pr-4">AI Overviews reklamlar içeriyor mu?</span>
                                        <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-200/60 pt-5 bg-white">
                                        Evet, içeriyor. Google, güçlü ticari niyet tespit ettiğinde AI Overviews içine ve çevresine ücretli reklamlar entegre ediyor. Bu reklamlar genellikle görsel ve fiyat bilgisi içeren ürün karuselleri biçiminde karşınıza çıkıyor.
                                    </div>
                                </details>

                                <details className="group bg-gray-50/50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none font-sans">
                                        <span className="font-bold text-gray-955 text-base pr-4">Hangi içerikler AI Overviews'ta en çok atıf alıyor?</span>
                                        <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-200/60 pt-5 bg-white">
                                        Semrush'un Haziran 2025 araştırmasına göre AI Bakışı'nda en çok atıf yapılan kaynak Quora, ikinci sırada ise Reddit'tir. Soru-cevap formatındaki, doğrudan ve anlaşılır dille yazılmış, gerçek deneyime dayalı içerikler öne çıkıyor.
                                    </div>
                                </details>

                                <details className="group bg-gray-50/50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none font-sans">
                                        <span className="font-bold text-gray-955 text-base pr-4">Önizleme kontrolü değişikliğim ne zaman geçerli olur?</span>
                                        <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-200/60 pt-5 bg-white">
                                        nosnippet etiketi veya Google-Extended gibi değişikliklerin Google tarafından işlenmesi birkaç gün ila birkaç ay sürebilir. Search Console'dan sayfanın yeniden taranmasını talep edebilirsiniz; bu süreci biraz hızlandırabilir, ancak garantili bir zaman çerçevesi yoktur.
                                    </div>
                                </details>
                            </div>
                        </section>

                        {/* CTA */}
                        <aside className="my-16 p-8 bg-gray-50 border border-gray-100 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden" aria-label="GEO Danışmanlığı Teklifi">
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-gray-200 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                            <div className="relative z-10 flex-1">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Overviews Stratejinizi Şekillendirin</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    Google AI Bakışı'nda kaynak olarak görünmek ve organik trafik kaybını minimize etmek için GEO odaklı içerik stratejisi oluşturmanıza yardımcı olabilirim.
                                </p>
                            </div>
                            <div className="relative z-10 shrink-0 w-full md:w-auto">
                                <Link href="/geo" className="inline-flex items-center justify-center w-full px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-black hover:-translate-y-1 transition-all shadow-md">
                                    GEO Danışmanlığı Hizmetini İncele
                                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </aside>


                        {/* Author Card */}
                        <section aria-labelledby="author-bio" className="mt-16 border-t border-gray-100 py-12 bg-white">
                            <article className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                <Link href="/hakkimda" aria-label="Bahattin Yaylagül Hakkında Detaylı Bilgi" className="shrink-0 group">
                                    <span className="sr-only">Bahattin Yaylagül Kimdir ve Hakkında Detaylar</span>
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
                                        <Link href="/hakkimda" aria-label="Bahattin Yaylagül Özgeçmiş ve Hakkında" className="hover:text-violet-600 transition-colors">
                                            <h3 id="author-bio" className="text-2xl font-sans font-bold text-gray-900">Bahattin Yaylagül</h3>
                                        </Link>
                                        <span className="px-3 py-1 bg-violet-50 text-violet-700 text-xs font-bold uppercase tracking-wider rounded-full">SEO Consultant</span>
                                    </div>
                                    <div className="flex items-center gap-4 justify-center md:justify-start">
                                        <Link href="/hakkimda" className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-gray-700 hover:text-gray-950 hover:bg-gray-50 hover:border-gray-300 font-semibold text-sm rounded-full transition-all">
                                            Bahattin Yaylagül Kimdir ve Hakkında Detaylar
                                        </Link>
                                        <a href="https://linkedin.com/in/bahattin-yaylagul" target="_blank" rel="noopener noreferrer" aria-label="Bahattin Yaylagül Profesyonel LinkedIn Profili" className="inline-flex items-center gap-1 text-sm font-semibold text-[#0077B5] hover:opacity-80 transition-opacity">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                            LinkedIn Profilini İncele
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </section>
                    </article>
                </div>
            </div>

            <Footer />
        </main>
    );
}
