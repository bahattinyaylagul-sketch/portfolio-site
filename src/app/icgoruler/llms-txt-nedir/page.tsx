/* eslint-disable react/no-unescaped-entities */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "llms.txt Nedir? Format, Analiz ve Uygulama Rehberi",
    description: "llms.txt nedir, nasıl oluşturulur ve gerçekten işe yarıyor mu? 300.000 domain analizi, robots.txt farkı, format rehberi ve maliyet-fayda değerlendirmesi.",
    alternates: {
        canonical: "/icgoruler/llms-txt-nedir",
    },
};

const jsonLd = `[
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "llms.txt Nedir? Format, Analiz ve Uygulama Rehberi",
    "description": "llms.txt nedir, nasil olusturulur ve gercekten ise yariyor mu? 300.000 domain analizi, format rehberi ve maliyet-fayda degerlendirmesi.",
    "datePublished": "2026-07-04",
    "dateModified": "2026-07-04",
    "author": {
      "@type": "Person",
      "name": "Bahattin Yaylagul",
      "url": "https://bahattinyaylagul.com/hakkimda"
    },
    "publisher": {
      "@type": "Person",
      "name": "Bahattin Yaylagul",
      "url": "https://bahattinyaylagul.com"
    },
    "url": "https://bahattinyaylagul.com/icgoruler/llms-txt-nedir",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://bahattinyaylagul.com/icgoruler/llms-txt-nedir"
    },
    "inLanguage": "tr"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://bahattinyaylagul.com" },
      { "@type": "ListItem", "position": 2, "name": "Icgoruler", "item": "https://bahattinyaylagul.com/icgoruler" },
      { "@type": "ListItem", "position": 3, "name": "llms.txt Nedir?", "item": "https://bahattinyaylagul.com/icgoruler/llms-txt-nedir" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "llms.txt dosyasi zorunlu mu?",
        "acceptedAnswer": { "@type": "Answer", "text": "Hayir. Direktiflere uyum LLM tercihine birakilmistir." }
      },
      {
        "@type": "Question",
        "name": "Hangi AI sistemleri llms.txt okuyor?",
        "acceptedAnswer": { "@type": "Answer", "text": "Kesin liste yok. GPTBot zaman zaman cekiyor. Google henuz desteklemiyor." }
      },
      {
        "@type": "Question",
        "name": "llms.txt SEO katki saglar mi?",
        "acceptedAnswer": { "@type": "Answer", "text": "Dogrudan katkisi kanitlanmamis. 300.000 domain analizi korelasyon olmadigini gosterdi." }
      },
      {
        "@type": "Question",
        "name": "llms.txt ne siklikla guncellenmelidir?",
        "acceptedAnswer": { "@type": "Answer", "text": "Site guncellendikce llms.txt de yenilenmelidir." }
      },
      {
        "@type": "Question",
        "name": "llms.txt ile llms-full.txt farki nedir?",
        "acceptedAnswer": { "@type": "Answer", "text": "llms.txt kisa rehber dosyasidir. llms-full.txt tum icerigi tek dosyada toplar." }
      }
    ]
  }
]`;

const headings = [
    { id: "llms-txt-nedir", text: "1. llms.txt Nedir?" },
    { id: "format-yapi", text: "2. Format ve Yapı" },
    { id: "robots-txt-farki", text: "3. robots.txt ile Farkı" },
    { id: "etkinlik-analizi", text: "4. Etkinlik Analizi: 300.000 Domain" },
    { id: "nasil-olusturulur", text: "5. Nasıl Oluşturulur?" },
    { id: "maliyet-fayda", text: "6. Maliyet-Fayda Değerlendirmesi" },
    { id: "sik-sorulan-sorular", text: "7. Sık Sorulan Sorular" },
];

export default function LlmsTxtPage() {
    return (
        <main className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd }}
            />
            {/* Fixed Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <Navigation />
            </header>

            {/* Hero */}
            <header className="w-full bg-gray-900 pt-16 pb-0 relative overflow-hidden mt-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/llms-txt-hero.png"
                        alt="llms.txt — AI Tarayıcıları için Web Standardı"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
                </div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>
                </div>

                <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text */}
                        <div className="space-y-8 flex flex-col justify-center h-full pb-16 pt-12">
                            <div>
                                <div className="flex items-center gap-3 text-yellow-400 font-bold tracking-widest text-xs uppercase mb-4">
                                    <span className="text-blue-400">İçgörüler</span>
                                    <span className="w-px h-3 bg-white/20"></span>
                                    <span>GEO & AI Search</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
                                    llms.txt Nedir? Tanım, Format, Etkinlik Analizi ve Uygulama Rehberi
                                </h1>

                                <div className="border-t border-white/10 pt-6 flex items-center gap-6 text-sm font-medium text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span>4 Temmuz 2026</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                        <span>15 dk okuma</span>
                                    </div>
                                </div>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-2">
                                <Link href="/hakkimda" className="w-12 h-12 rounded-full border-2 border-white/10 relative overflow-hidden hover:border-blue-400 transition-colors">
                                    <Image src="/images/bahattin-yaylagul.jpg" alt="Bahattin Yaylagül" fill className="object-cover" />
                                </Link>
                                <div className="flex flex-col">
                                    <span className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-0.5">Yazar</span>
                                    <div className="flex items-center gap-3">
                                        <Link href="/hakkimda" className="text-white font-bold text-lg leading-none hover:text-blue-400 transition-colors">
                                            Bahattin Yaylagül
                                        </Link>
                                        <a
                                            href="https://linkedin.com/in/bahattinyaylagul"
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

                        {/* Hero Image */}
                        <div className="relative hidden lg:block h-[500px] w-full">
                            <Image
                                src="/images/llms-txt-hero.png"
                                alt="llms.txt — AI Tarayıcıları için Web Standardı"
                                fill
                                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-[1400px] mx-auto px-6 md:px-8 pt-12 pb-20">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-8 font-medium tracking-wide font-sans">
                    <Link href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</Link>
                    <span className="text-gray-200">/</span>
                    <Link href="/icgoruler" className="hover:text-blue-600 transition-colors">İçgörüler</Link>
                    <span className="text-gray-200">/</span>
                    <span className="text-gray-600 font-bold truncate">llms.txt Nedir?</span>
                </nav>

                <div className="grid lg:grid-cols-[250px_1fr] gap-12 items-start relative">
                    {/* TOC Sidebar */}
                    <aside className="hidden lg:block sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto pr-4 custom-scrollbar" aria-label="İçindekiler">
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
                                        className="block py-3 pl-4 text-sm text-gray-600 hover:text-blue-700 hover:border-l-2 hover:border-blue-700 -ml-0.5 transition-all leading-relaxed"
                                    >
                                        <span className="font-mono text-xs text-gray-400 mr-2 font-medium">{(i + 1).toString().padStart(2, '0')}</span>
                                        {heading.text}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Article */}
                    <article className="min-w-0">

                        {/* Content */}
                        <div
                            className="prose prose-lg max-w-none 
                                prose-headings:font-sans prose-headings:font-bold prose-headings:text-foreground
                                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight
                                prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-gray-800
                                prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3 prose-h4:text-gray-900 prose-h4:font-bold
                                prose-p:font-sans prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-6
                                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2
                                prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6 prose-ol:space-y-2
                                prose-li:text-gray-600 prose-li:leading-relaxed
                                prose-strong:font-bold prose-strong:text-gray-900
                                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                                prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-gray-800
                                prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-6
                                mb-16"
                        >
                            <h2 id="llms-txt-nedir">1. llms.txt Nedir?</h2>
                            {/* section wrapper handled by article/prose container */}
                            <p>
                                llms.txt, büyük dil modellerinin bir web sitesinin en kritik içeriklerini daha kolay bulup anlaması için kök dizine yerleştirilen, Markdown formatında yazılmış <strong>önerilen bir metin dosyasıdır</strong>. Eylül 2024'te Avustralyalı teknolog Jeremy Howard tarafından ortaya atılan bu standart, robots.txt ve XML sitemap protokollerine benzer bir mantıkla çalışır; ancak hedef kitle arama motorları değil, ChatGPT, Claude ve Perplexity gibi LLM tabanlı yapay zeka sistemleridir.
                            </p>
                            <p>
                                İki somut sorunu hedef alır: LLM'lerin bağlam pencereleri çoğu siteyi bütünüyle işlemek için yeterince geniş değildir; reklamlar, JavaScript ve navigasyon elementleriyle dolu HTML sayfalarını düz metne dönüştürmek ise hata payı yüksek bir işlemdir. llms.txt bu iki soruna karşı modele <strong>"işte önemli olan bu"</strong> der — siteyi taratmak yerine içeriği önceliklendirerek sunar.
                            </p>

                            {/* Two-column concept cards */}
                            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg font-bold text-blue-600 mb-2">Sorun 1: Bağlam Penceresi</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        LLM'lerin bağlam pencereleri çoğu siteyi bütünüyle işlemek için yeterince geniş değildir. Büyük siteler için bu ciddi bir kısıt oluşturur.
                                    </p>
                                </div>
                                <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg font-bold text-purple-600 mb-2">Sorun 2: HTML Gürültüsü</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Reklamlar, JavaScript ve navigasyon elementleriyle dolu HTML sayfalarını düz metne dönüştürmek hata payı yüksek bir işlemdir.
                                    </p>
                                </div>
                            </div>

                            <h2 id="format-yapi">2. llms.txt Dosyası Nasıl Görünür? Format ve Yapı</h2>
                            <p>
                                Dosya sitenin kök dizinine yerleştirilen düz bir Markdown metin dosyasıdır; hem insan hem dil modeli okuyabilir, regex veya klasik ayrıştırıcılarla da işlenebilir.
                            </p>

                            <h3>Temel Yapı</h3>
                            <p>Dört ana bölümden oluşur:</p>
                            <ol>
                                <li><strong>H1 başlığı</strong> — Sitenin veya projenin adı</li>
                                <li><strong>Özet bloğu</strong> — Sitenin ne olduğunu birkaç cümlede açıklar</li>
                                <li><strong>Ayrıntılı bilgi</strong> — Kapsam, kısıtlamalar veya bağlam notları</li>
                                <li><strong>Bağlantı listeleri</strong> — LLM'nin okumasını istediğiniz sayfalara işaret eden URL'ler</li>
                            </ol>

                            <pre><code>{`# Örnek Site

> Yazılım geliştirici araçları üzerine dokümantasyon sitesi.

## Kılavuzlar

- [Kurulum](https://example.com/docs/setup): Ortam kurulumu adım adım.
- [API Referansı](https://example.com/docs/api): Tüm endpoint'lerin listesi.`}</code></pre>

                            <p>
                                Her URL'e isteğe bağlı kısa açıklama eklenebilir; bu, modelin sayfanın ne işe yaradığını bağlam olmadan anlamasını kolaylaştırır.
                            </p>

                            <h3>llms.txt ve llms-full.txt Farkı</h3>
                            <p>
                                <code>llms.txt</code> bağlantı listesi sunar — model istediği sayfayı ayrıca çeker. <code>llms-full.txt</code> ise sitenin ham metnini tek dosyada toplar; model ek istek göndermeden tüm içeriğe ulaşır. Boyut farkı ciddi olabilir: önerinin yazarına ait sitedeki <code>llms-full.txt</code> <strong>115.378 kelime</strong> ve <strong>966 KB</strong> büyüklüğündedir.
                            </p>
                        </div>

                        {/* llms-full.txt Table */}
                        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="text-left px-6 py-4 font-bold text-gray-900">Şirket</th>
                                        <th className="text-left px-6 py-4 font-bold text-gray-900">llms-full.txt Adresi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">Anthropic</td>
                                        <td className="px-6 py-4 font-mono text-blue-600 text-xs">https://docs.anthropic.com/llms-full.txt</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">Perplexity</td>
                                        <td className="px-6 py-4 font-mono text-blue-600 text-xs">https://docs.perplexity.ai/llms-full.txt</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">Zapier</td>
                                        <td className="px-6 py-4 font-mono text-blue-600 text-xs">https://docs.zapier.com/llms-full.txt</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div
                            className="prose prose-lg max-w-none 
                                prose-headings:font-sans prose-headings:font-bold prose-headings:text-foreground
                                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight
                                prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-gray-800
                                prose-p:font-sans prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-6
                                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2
                                prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6 prose-ol:space-y-2
                                prose-li:text-gray-600 prose-li:leading-relaxed
                                prose-strong:font-bold prose-strong:text-gray-900
                                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                                prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-gray-800
                                prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-6
                                mb-16"
                        >
                            <h2 id="robots-txt-farki">3. llms.txt ile robots.txt Arasındaki Fark</h2>
                            <p>
                                İki protokol benzer mantıkla çalışıyor gibi görünse de amaç, hedef kitle ve bağlayıcılık açısından köklü biçimde ayrışır.
                            </p>
                        </div>

                        {/* Comparison Table */}
                        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-900 text-white">
                                        <th className="text-left px-6 py-4 font-bold">Boyut</th>
                                        <th className="text-left px-6 py-4 font-bold text-blue-400">llms.txt</th>
                                        <th className="text-left px-6 py-4 font-bold text-gray-300">robots.txt</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-semibold text-gray-900">Hedef kitle</td>
                                        <td className="px-6 py-4 text-gray-700">ChatGPT, Claude, Perplexity gibi LLM tabanlı sistemler</td>
                                        <td className="px-6 py-4 text-gray-700">Google, Bing gibi geleneksel arama motoru botları</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-semibold text-gray-900">Format</td>
                                        <td className="px-6 py-4 text-gray-700">Markdown</td>
                                        <td className="px-6 py-4 text-gray-700">Düz metin; User-agent, Disallow direktifleri</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-semibold text-gray-900">Amaç</td>
                                        <td className="px-6 py-4 text-gray-700">İçeriği önceliklendirerek AI'a sunmak</td>
                                        <td className="px-6 py-4 text-gray-700">Sayfaların taranmasını kontrol etmek</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-semibold text-gray-900">Direktif içeriği</td>
                                        <td className="px-6 py-4 text-gray-700">Erişim kısıtlama direktifi <strong>içermez</strong></td>
                                        <td className="px-6 py-4 text-gray-700">İzin ver / engelle kuralları tanımlar</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-semibold text-gray-900">Uyum zorunluluğu</td>
                                        <td className="px-6 py-4 text-gray-700">LLM'in tercihine bırakılmış; bağlayıcı değil</td>
                                        <td className="px-6 py-4 text-gray-700">Arama motoru botları genel olarak uyar</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                            <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl">
                                <div className="text-2xl mb-3">🚧</div>
                                <h3 className="font-bold text-gray-900 mb-2">robots.txt = Kapı Bekçisi</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Neyin taranacağını kontrol eder. Bağlayıcıdır — arama motorları bu direktiflere uyar.</p>
                            </div>
                            <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl">
                                <div className="text-2xl mb-3">📋</div>
                                <h3 className="font-bold text-gray-900 mb-2">llms.txt = Brifing Belgesi</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Yapay zekaya sitenin ne hakkında olduğunu ve hangi içeriğin öncelikli olduğunu anlatır. Bağlayıcı değildir.</p>
                            </div>
                        </div>

                        <div
                            className="prose prose-lg max-w-none 
                                prose-headings:font-sans prose-headings:font-bold prose-headings:text-foreground
                                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight
                                prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-gray-800
                                prose-p:font-sans prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-6
                                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2
                                prose-li:text-gray-600 prose-li:leading-relaxed
                                prose-strong:font-bold prose-strong:text-gray-900
                                prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-gray-800
                                prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-6
                                mb-16"
                        >
                            <h2 id="etkinlik-analizi">4. llms.txt Gerçekten İşe Yarıyor mu? 300.000 Domain Analizi</h2>

                            <p>
                                <strong>Veri net: llms.txt, AI sistemlerinin sizi alıntılama biçimini şu an için değiştirmiyor.</strong>
                            </p>

                            <p>
                                SE Ranking yaklaşık 300.000 domaini Spearman korelasyonu, XGBoost regresyonu ve SHAP analizi kullanarak inceledi. Analiz edilen domainlerin yalnızca <strong>%10,13'ünde</strong> llms.txt dosyası mevcuttu. Trafik segmentlerine göre dağılım: düşük trafikli siteler %9,88, orta trafikli %10,54, yüksek trafikli (100.001+ ziyaret) ise %8,27. En geniş teknik ekiplere sahip yüksek trafikli siteler bu dosyayı en az benimseyen grup.
                            </p>
                        </div>

                        {/* Stats Banner */}
                        <div className="not-prose grid grid-cols-3 gap-4 my-8">
                            <div className="p-6 bg-white border border-gray-200 rounded-xl text-center shadow-sm">
                                <div className="text-4xl font-black text-blue-600 mb-1">%10</div>
                                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Benimseme Oranı</div>
                                <div className="text-xs text-gray-400 mt-1">300.000 domain içinde</div>
                            </div>
                            <div className="p-6 bg-white border border-gray-200 rounded-xl text-center shadow-sm">
                                <div className="text-4xl font-black text-red-500 mb-1">0</div>
                                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Korelasyon</div>
                                <div className="text-xs text-gray-400 mt-1">AI atıf sıklığıyla</div>
                            </div>
                            <div className="p-6 bg-white border border-gray-200 rounded-xl text-center shadow-sm">
                                <div className="text-4xl font-black text-gray-400 mb-1">↓</div>
                                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">XGBoost Skoru</div>
                                <div className="text-xs text-gray-400 mt-1">Dosya eklenince düşüyor</div>
                            </div>
                        </div>

                        <div
                            className="prose prose-lg max-w-none 
                                prose-headings:font-sans prose-headings:font-bold prose-headings:text-foreground
                                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight
                                prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-gray-800
                                prose-p:font-sans prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-6
                                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2
                                prose-li:text-gray-600 prose-li:leading-relaxed
                                prose-strong:font-bold prose-strong:text-gray-900
                                prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-gray-800
                                mb-8"
                        >
                            <p>
                                XGBoost modeli, llms.txt değişkenini dışarıda bırakınca daha iyi çalıştı — istatistikte "gürültü değişkeni" olarak tanımlanır: modele eklediğinizde tahmin gücünü düşürüyor. Analiz, llms.txt ile AI atıf sıklığı arasında herhangi bir korelasyon olmadığını doğrudan gösterdi.
                            </p>
                            <p>
                                Platform tarafında da tutarsız bir tablo var: GPTBot zaman zaman llms.txt dosyalarını çekiyor ama bu sık değil ve resmi süreçte etkisi doğrulanmış değil. Google'ın AI Overviews ve AI Mode'u llms.txt yerine geleneksel SEO sinyallerine dayanıyor; Google'ın bu dosyayı desteklediğine dair herhangi bir bilgi bulunmuyor.
                            </p>
                        </div>

                        <div
                            className="prose prose-lg max-w-none 
                                prose-headings:font-sans prose-headings:font-bold prose-headings:text-foreground
                                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight
                                prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-gray-800
                                prose-p:font-sans prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-6
                                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2
                                prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6 prose-ol:space-y-2
                                prose-li:text-gray-600 prose-li:leading-relaxed
                                prose-strong:font-bold prose-strong:text-gray-900
                                prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-gray-800
                                prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-6
                                mb-16"
                        >
                            <h2 id="nasil-olusturulur">5. llms.txt Nasıl Oluşturulur ve Siteye Eklenir?</h2>

                            <h3>1. Markdown dosyasını hazırlayın</h3>
                            <p>
                                Bir metin editörü açın, <code>.txt</code> uzantısıyla kaydedin. HTML etiketleri veya JavaScript kullanmayın — bu yapılar LLM'lerin dosyayı ayrıştırmasını zorlaştırır.
                            </p>

                            <h3>2. İçerik yapısını kurun</h3>

                            <pre><code>{`# Site Adı

> Sitenizin tek paragraflık özeti. LLM bu satırı önce okur.

## Hakkında
Sitenizin ne yaptığını, kimi hedeflediğini açıklayan metin.

## Kaynaklar
- [Ürün Sayfası](https://example.com/urun)
- [Blog](https://example.com/blog)
- [SSS](https://example.com/sss)`}</code></pre>

                            <p>
                                Özet bloğunu (<code>&gt;</code> ile başlayan satır) atlamayın; büyük dil modelleri bu kısmı bağlam kurucusu olarak kullanır.
                            </p>

                            <h3>3. Dosyayı kök dizine yükleyin</h3>
                            <p>
                                Dosyayı <code>llms.txt</code> adıyla kök dizine koyun; doğru adres <code>https://example.com/llms.txt</code> olmalıdır. FTP, cPanel veya hosting kontrol panelinizin dosya yöneticisini kullanabilirsiniz. WordPress kullanıcıları <code>public_html</code> klasörüne manuel yükleyebilir ya da <strong>Website LLMs</strong> eklentisini kurabilir — eklenti üç ayda 3.000'den fazla indirmeye ulaşmış, dosyayı otomatik oluşturup güncel tutuyor.
                            </p>

                            <h3>4. robots.txt ile çelişki kontrolü yapın</h3>
                            <p>
                                robots.txt dosyanıza llms.txt için özel bir satır eklemeniz gerekmez — <code>Sitemap:</code> direktifi yalnızca XML site haritaları içindir ve llms.txt, robots.txt tarafından tanınan bir standart değildir. Yapmanız gereken tek şey tutarlılık kontrolüdür: <code>robots.txt</code>'te GPTBot gibi bir AI botunu engelliyorsanız, <code>llms.txt</code>'te o bota içerik sunmaya çalışmak çelişki yaratır.
                            </p>

                            <h3>5. Erişilebilirliği kontrol edin</h3>
                            <p>
                                Tarayıcınızda <code>https://siteniz.com/llms.txt</code> adresine gidin. Sayfa düz metin olarak açılıyorsa dosya doğru konumda demektir.
                            </p>
                        </div>

                        {/* Tools Cards */}
                        <div className="not-prose grid md:grid-cols-3 gap-4 my-8">
                            <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-2xl mb-3">🔥</div>
                                <h4 className="font-bold text-gray-900 mb-1">FireCrawl</h4>
                                <p className="text-sm text-gray-600">Mevcut site içeriğinizi tarayarak dosyayı otomatik üretiyor.</p>
                            </div>
                            <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-2xl mb-3">📝</div>
                                <h4 className="font-bold text-gray-900 mb-1">Markdowner</h4>
                                <p className="text-sm text-gray-600">Açık kaynaklı, Markdown'a dönüştürür.</p>
                            </div>
                            <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-2xl mb-3">🔌</div>
                                <h4 className="font-bold text-gray-900 mb-1">Website LLMs (WP)</h4>
                                <p className="text-sm text-gray-600">WordPress eklentisi, 3.000+ indirme, otomatik güncelleme.</p>
                            </div>
                        </div>

                        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                            <div className="flex gap-3">
                                <span className="text-2xl">⚠️</span>
                                <div>
                                    <h4 className="font-bold text-amber-900 mb-1">Bakım Notu</h4>
                                    <p className="text-sm text-amber-800 leading-relaxed">
                                        llms.txt bir kez kurup unutulan bir dosya değil. Yeni sayfa, ürün veya hizmet değişikliğinde güncelleyin; aksi hâlde LLM'ler sitenizi yanlış özetleyebilir.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="prose prose-lg max-w-none 
                                prose-headings:font-sans prose-headings:font-bold prose-headings:text-foreground
                                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight
                                prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-gray-800
                                prose-p:font-sans prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-6
                                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2
                                prose-li:text-gray-600 prose-li:leading-relaxed
                                prose-strong:font-bold prose-strong:text-gray-900
                                mb-8"
                        >
                            <h2 id="maliyet-fayda">6. llms.txt Eklemeli miyim? Maliyet-Fayda Değerlendirmesi</h2>
                            <p>
                                <strong>Kısa cevap: büyük ihtimalle evet, ama beklentinizi düşük tutun.</strong>
                            </p>
                            <p>
                                Dosya küçük, teknik riski sıfıra yakın, birkaç saatlik işten fazlasını gerektirmez. Buna karşın 300.000 domain analizi, dosyanın AI atıf biçimini bugün itibarıyla değiştirmediğini gösteriyor. Düşük maliyet, ama kanıtlanmış fayda da yok.
                            </p>
                            <p>
                                Brett Tabke'ye göre Google, arama motoru ile LLM kod tabanını birleştirecek; bu gerçekleşirse llms.txt o geçiş döneminin köprüsü olabilir — ya da tamamen gereksiz hale gelebilir. Şimdilik <strong>"prim ucuz, tazminat belirsiz"</strong> bir sigorta poliçesi.
                            </p>
                        </div>

                        {/* Pros / Cons */}
                        <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                            <div className="p-6 bg-green-50 border border-green-200 rounded-xl">
                                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                    <span className="text-xl">✅</span> Artılar
                                </h3>
                                <ul className="space-y-3 text-sm text-green-800">
                                    <li className="flex gap-2"><span className="mt-0.5">•</span><span>Standart ileride olgunlaşırsa hazır olursunuz</span></li>
                                    <li className="flex gap-2"><span className="mt-0.5">•</span><span>Düşük teknik maliyet (birkaç saat iş)</span></li>
                                    <li className="flex gap-2"><span className="mt-0.5">•</span><span>Google SEO–LLM entegrasyonu gerçekleşirse köprü işlevi görebilir</span></li>
                                    <li className="flex gap-2"><span className="mt-0.5">•</span><span>Dokümantasyon siteleri için gerçek fayda mümkün</span></li>
                                </ul>
                            </div>
                            <div className="p-6 bg-red-50 border border-red-200 rounded-xl">
                                <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                    <span className="text-xl">❌</span> Eksiler
                                </h3>
                                <ul className="space-y-3 text-sm text-red-800">
                                    <li className="flex gap-2"><span className="mt-0.5">•</span><span>Direktiflere uyum LLM'in tercihine bırakılmış</span></li>
                                    <li className="flex gap-2"><span className="mt-0.5">•</span><span>Rakiplerin içerik stratejinizi tek bakışta analiz etmesini kolaylaştırır</span></li>
                                    <li className="flex gap-2"><span className="mt-0.5">•</span><span>Manipülatif taktikler bu dosyaya da taşınabilir</span></li>
                                    <li className="flex gap-2"><span className="mt-0.5">•</span><span>Google henüz desteklemiyor</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Sector Priority */}
                        <div className="not-prose my-8 space-y-3">
                            <h3 className="font-bold text-gray-900 text-lg mb-4">Sektöre Göre Öncelik Sırası</h3>
                            <div className="flex items-center gap-4 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                                <span className="text-2xl">📚</span>
                                <div>
                                    <div className="font-bold text-blue-900">1. Dokümantasyon Siteleri</div>
                                    <div className="text-sm text-blue-700">API referansları, teknik kılavuzlar, SDK açıklamaları — AI'ın en sık çektiği içerik türleri. En fazla kazanır.</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                                <span className="text-2xl">✍️</span>
                                <div>
                                    <div className="font-bold text-gray-900">2. Blog ve İçerik Siteleri</div>
                                    <div className="text-sm text-gray-600">Fayda orta düzey. Eklemeye değer ama öncelik değil.</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                                <span className="text-2xl">🛒</span>
                                <div>
                                    <div className="font-bold text-gray-900">3. E-ticaret Siteleri</div>
                                    <div className="text-sm text-gray-600">En düşük öncelik. XML sitemap ve robots.txt'nin zaten karşıladığı ihtiyaçları tekrar ediyor.</div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div
                            className="prose prose-lg max-w-none 
                                prose-headings:font-sans prose-headings:font-bold prose-headings:text-foreground
                                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight
                                prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-gray-800
                                prose-p:font-sans prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-6
                                prose-strong:font-bold prose-strong:text-gray-900
                                mb-8"
                        >
                            <h2 id="sik-sorulan-sorular">7. Sık Sorulan Sorular</h2>
                        </div>

                        <div className="not-prose space-y-4 my-8">
                            {[
                                {
                                    q: "llms.txt dosyası zorunlu mu?",
                                    a: "Hayır. llms.txt direktiflerine uyum LLM veya AI ajanının tercihine bırakılmıştır. Dosyayı oluşturmazsanız yasal veya teknik bir yaptırımla karşılaşmazsınız."
                                },
                                {
                                    q: "Hangi AI sistemleri llms.txt'yi okuyor?",
                                    a: "Kesin bir liste yok. Bazı SEO logları GPTBot'un zaman zaman llms.txt dosyalarını çektiğini gösteriyor. Google'ın llms.txt dosyasını desteklediğine dair henüz herhangi bir bilgi bulunmuyor. Anthropic ve Perplexity kendi llms-full.txt dosyalarını yayımlıyor, ancak bu dosyaları aktif olarak okuyup okumadıkları ayrı bir soru."
                                },
                                {
                                    q: "llms.txt SEO'ya katkı sağlar mı?",
                                    a: "Doğrudan bir katkısı kanıtlanmış değil. İstatistiksel analiz, llms.txt varlığı ile AI atıf sıklığı arasında korelasyon olmadığını ortaya koydu. Geleneksel arama sıralamanıza da etkisi beklenmez; Google bu dosyayı henüz tanımıyor."
                                },
                                {
                                    q: "llms.txt ne sıklıkla güncellenmelidir?",
                                    a: "Web siteniz güncellendiğinde llms.txt de yenilenmelidir. Statik bırakılan bir llms.txt zamanla sitenizi yanlış temsil eder — bu dosyanın asıl amacına aykırıdır."
                                },
                                {
                                    q: "llms.txt ile llms-full.txt arasındaki fark nedir?",
                                    a: "llms.txt, sitenin en önemli içeriklerine işaret eden kısa yapılandırılmış bir rehber dosyasıdır. llms-full.txt ise tüm içeriği tek düz metin dosyasında birleştirir. Anthropic, Perplexity ve Zapier bu dosyayı yayımlamaktadır."
                                },
                                {
                                    q: "llms.txt olmayan siteler AI'da hiç görünmez mi?",
                                    a: "Hayır. llms.txt, Eylül 2024'te ortaya çıkmış önerilen bir standarttır — AI görünürlüğünün ön koşulu değil. LLM'ler bu dosya olmayan milyonlarca siteyi zaten tarıyor ve içerik kalitesine, otorite sinyallerine göre atıf yapıyor. Bununla birlikte kalitesiz bir llms.txt, hiç olmamasından daha kötü sonuç doğurabilir."
                                },
                            ].map((item, i) => (
                                <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                                    <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors list-none">
                                        <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                                        <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                                        {item.a}
                                    </div>
                                </details>
                            ))}
                        </div>

                        {/* Sources */}
                        <aside className="not-prose mt-12 p-6 bg-gray-50 border border-gray-200 rounded-xl" aria-label="Kaynaklar">
                            <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Kaynaklar</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="https://seranking.com/blog/llms-txt/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                                        LLMs.txt: Why Brands Rely On It and Why It Doesn't Work — SE Ranking
                                    </a>
                                </li>
                                <li>
                                    <a href="https://searchengineland.com/llms-txt-proposed-standard-453676" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                                        Meet llms.txt, a proposed standard for AI website content crawling — Search Engine Land
                                    </a>
                                </li>
                            </ul>
                        </aside>

                        {/* CTA */}
                        <aside className="my-16 p-8 bg-gray-50 border border-gray-100 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden" aria-label="GEO Danışmanlığı Teklifi">
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-gray-200 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                            <div className="relative z-10 flex-1">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Markanızı Yapay Zeka Çağına Taşıyın</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    GEO ve AI görünürlük stratejilerinin işinize özel nasıl kurgulanabileceğini görmek ister misiniz?
                                </p>
                            </div>

                            <div className="relative z-10 shrink-0 w-full md:w-auto">
                                <Link
                                    href="/geo"
                                    className="inline-flex items-center justify-center w-full px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-black hover:-translate-y-1 transition-all shadow-md"
                                >
                                    GEO Danışmanlığı Hizmetini İncele
                                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </aside>

                        {/* Back Link */}
                        <div className="border-t border-gray-100 mt-16 pt-8">
                            <Link href="/icgoruler" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-foreground transition-colors">
                                ← Tüm İçgörülere Dön
                            </Link>
                        </div>
                    </article>
                </div>
            </div>

            <Footer />
        </main>
    );
}
