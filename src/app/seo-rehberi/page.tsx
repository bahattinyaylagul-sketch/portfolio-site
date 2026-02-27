"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const headings = [
    { id: "bolum-1", text: "Bölüm 1: SEO Nedir? (2026 Vizyonu)" },
    { id: "bolum-2", text: "Bölüm 2: SEO Nasıl Yapılır?" },
    { id: "teknik-seo", text: "1. JavaScript Krizi" },
    { id: "performans", text: "2. Performans (INP/HTTP3)" },
    { id: "schema", text: "3. Yapısal Veri (Schema)" },
    { id: "geo-icerik", text: "4. GEO İçerik Mimarisi" },
    { id: "otorite", text: "5. Otorite İnşası (E-E-A-T)" },
    { id: "olcumleme-evrimi", text: "6. Ölçümleme Evrimi" },
    { id: "itibar-muhendisligi", text: "7. İtibar Mühendisliği" },
    { id: "schema-temizligi", text: "8. Schema Temizliği" },
    { id: "craw4llm", text: "9. LLM Ön Eğitimi (Veri Düğümü)" },
    { id: "uzmanlik-alanlari", text: "Stratejik SEO Kümeleri" },
    { id: "otorite-kontrolu", text: "🛑 Otorite Kontrolü" },
];

export default function SEOGuideHub() {
    const [activeSection, setActiveSection] = useState(headings[0].id);

    useEffect(() => {
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

        headings.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    // Set page title for client side (Next.js 13+ app router mostly uses metadata, but doing this purely client side is fine for now, or preferably generating it in a parent layout/page)
    useEffect(() => {
        document.title = "SEO Nedir ve Nasıl Yapılır? (2026 AI Otorite Rehberi)";
    }, []);

    return (
        <main className="min-h-screen bg-gray-50/50 flex flex-col font-sans">
            <Navigation />

            {/* Hero - Reference Style: Left text + Right image */}
            <div className="relative overflow-hidden bg-[#0A0F1C] mt-[72px]">
                {/* Subtle background glow */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-900/40 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-900/30 rounded-full blur-[100px]"></div>
                </div>

                <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[500px]">
                        {/* Left: Text Content */}
                        <div className="flex flex-col justify-center py-16 lg:py-20 pr-0 lg:pr-16">
                            {/* Breadcrumb */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-blue-400 font-bold tracking-widest text-xs uppercase">SEO Danışmanlığı</span>
                                <span className="w-px h-3 bg-white/20"></span>
                                <span className="text-yellow-400 font-bold tracking-widest text-xs uppercase">Kapsamlı Rehber</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
                                SEO Nedir ve<br />
                                Nasıl Yapılır?
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mt-1 text-3xl md:text-4xl lg:text-5xl">
                                    2026 Üretken Arama Rehberi
                                </span>
                            </h1>

                            {/* Desc */}
                            <p className="text-base text-gray-400 leading-relaxed max-w-xl mb-8">
                                Arama motoru optimizasyonu (SEO), yapay zeka tarafından sentezlenen cevaplara, sohbet arayüzlerine ve otonom ajanlara yönelik yeni bir çağa girmiştir.
                            </p>

                            {/* Meta */}
                            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-500 mb-8">
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>GÜNCEL: 2026</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    <span>15 dk okuma</span>
                                </div>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <Link href="/hakkimda" className="w-11 h-11 rounded-full border-2 border-white/10 relative overflow-hidden hover:border-blue-400 transition-colors bg-gray-700 shrink-0">
                                    <Image src="/images/bahattin-yaylagul.jpg" alt="Bahattin Yaylagül" fill className="object-cover" />
                                </Link>
                                <div>
                                    <span className="text-gray-500 text-xs font-medium uppercase tracking-wider block mb-0.5">Yazar</span>
                                    <Link href="/hakkimda" className="text-white font-bold text-base leading-none hover:text-blue-400 transition-colors">
                                        Bahattin Yaylagül
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right: Featured Image */}
                        <div className="hidden lg:block relative">
                            <div className="absolute inset-0">
                                <Image
                                    src="/images/seo-rehberi-hero.png"
                                    alt="SEO Rehberi 2026 - Organik Büyüme ve Arama Motoru Optimizasyonu"
                                    fill
                                    className="object-cover object-center"
                                    priority
                                />
                                {/* Left fade into dark background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C] via-[#0A0F1C]/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Area with Sticky Sidebar (Matches ArticleContent.tsx structure) */}
            <div className="max-w-6xl mx-auto px-6 pt-12 pb-20 flex-grow">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-8 font-medium tracking-wide">
                    <Link href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</Link>
                    <span className="text-gray-200">/</span>
                    <Link href="/seo" className="hover:text-blue-600 transition-colors">SEO</Link>
                    <span className="text-gray-200">/</span>
                    <span className="text-gray-600 font-bold">SEO Rehberi HUB</span>
                </nav>

                <div className="flex flex-col lg:grid lg:grid-cols-[280px_1fr] gap-12 items-start relative">

                    {/* Left Sidebar: TOC Only - Sticky */}
                    <aside className="hidden lg:block sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto pr-4 custom-scrollbar">
                        <div>
                            <div className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2 pl-2">
                                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                                İÇİNDEKİLER
                            </div>
                            <nav className="space-y-1 border-l-2 border-gray-100">
                                {headings.map((heading) => {
                                    const isSubHeading = ["teknik-seo", "performans", "schema", "geo-icerik", "otorite", "olcumleme-evrimi", "itibar-muhendisligi", "schema-temizligi", "craw4llm"].includes(heading.id);

                                    return (
                                        <a
                                            key={heading.id}
                                            href={`#${heading.id}`}
                                            className={`block py-3 pl-4 text-sm transition-all leading-relaxed -ml-0.5 border-l-2
                                            ${isSubHeading ? 'ml-2 text-[13px] py-1.5' : ''}
                                            ${activeSection === heading.id
                                                    ? "text-blue-700 border-blue-700 font-medium bg-blue-50/50"
                                                    : "text-gray-600 border-transparent hover:text-blue-700 hover:border-blue-300"
                                                }`}
                                            onClick={(e) => {
                                                const element = document.getElementById(heading.id);
                                                if (element) {
                                                    const headerOffset = 100;
                                                    const elementPosition = element.getBoundingClientRect().top;
                                                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                                                    window.scrollTo({
                                                        top: offsetPosition,
                                                        behavior: "smooth"
                                                    });
                                                }
                                            }}
                                        >
                                            {heading.text}
                                        </a>
                                    )
                                })}
                            </nav>

                            <div className="mt-8 pt-6 border-t border-gray-100/50">
                                <Link
                                    href="/seo"
                                    className="block w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm text-center rounded-xl hover:shadow-[0_8px_20px_rgb(59,130,246,0.3)] transition-all hover:-translate-y-0.5"
                                >
                                    SEO Danışmanlığı Alın
                                </Link>
                                <p className="text-xs text-gray-500 text-center mt-3 font-medium">Bu stratejileri markanıza uygulayalım</p>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Article */}
                    <article className="min-w-0 font-sans prose prose-lg md:prose-xl prose-blue max-w-none text-gray-700">
                        <div className="px-6 py-5 bg-blue-50/50 rounded-2xl border border-blue-100/50 mb-12 shadow-sm">
                            <p className="text-xl text-gray-800 font-medium m-0 leading-relaxed font-sans">
                                Geleneksel SEO, sizi yalnızca bir listeye sokmayı hedeflerken; modern SEO ve GEO (Üretken Motor Optimizasyonu), içeriğinizin yapay zeka (AI) sistemleri tarafından bulunmasını, güvenilmesini ve <strong className="text-blue-600 font-bold">alıntılanmasını (Being Cited)</strong> sağlayan bir mühendislik disiplinidir.
                            </p>
                        </div>

                        {/* BÖLÜM 1 */}
                        <div id="bolum-1" className="scroll-mt-32">
                            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mt-12 mb-6 tracking-tight">
                                BÖLÜM 1: SEO Nedir? (2026 Vizyonu ile Yeniden Tanımlama)
                            </h2>
                            <p className="leading-relaxed">
                                2026 yılında SEO; web sitenizi hem geleneksel arama motoru botları (Googlebot) hem de Büyük Dil Modelleri (LLM'ler - ChatGPT, Claude, Perplexity) için <strong>"sıfır hatayla okunabilir"</strong> ve <strong>"atıf yapılabilir"</strong> bir bilgi düğümüne dönüştürme sanatıdır.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
                                <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">✕</div>
                                        <h4 className="font-bold text-lg text-gray-900 m-0">Eski SEO</h4>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">"Sıralama (Ranking)" odaklıydı. Kelime yoğunluğu ve basit backlinkler yeterliydi. Bilgi mimarisi sadece Googlebot'a yönelikti.</p>
                                </div>
                                <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl shadow-sm ring-1 ring-blue-600/5">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">✓</div>
                                        <h4 className="font-bold text-lg text-gray-900 m-0">Yeni SEO (GEO)</h4>
                                    </div>
                                    <p className="text-gray-800 text-sm leading-relaxed font-medium">"Atıf Alma (Citation)" odaklıdır. AI modelleri, içeriğinizi parçalar, doğrular ve kullanıcının karşısına kendi sentezlediği bir cevapla çıkarır. Yapay zeka özetlerinde kaynak olarak gösterilen sayfalar en nitelikli trafiği alır.</p>
                                </div>
                            </div>
                        </div>

                        {/* BÖLÜM 2 */}
                        <div id="bolum-2" className="scroll-mt-32 mt-20">
                            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 tracking-tight">
                                BÖLÜM 2: SEO Nasıl Yapılır? (Kritik Katmanlar ve Aksiyon Planı)
                            </h2>
                            <p className="mb-10 text-lg">
                                Sitenizi 2026 standartlarına taşımak için aşağıdaki katmanları sırasıyla ve eksiksiz olarak optimize etmelisiniz.
                            </p>

                            <div className="space-y-16">
                                {/* Layer 1 */}
                                <div id="teknik-seo" className="scroll-mt-32 relative pl-8 border-l-4 border-blue-600">
                                    <div className="absolute -left-5 top-1 w-10 h-10 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center font-black text-blue-600 shadow-md">1</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mt-0 mb-4">
                                        Görünmez Altyapı ve "JavaScript Krizi"
                                    </h3>
                                    <p className="text-lg">
                                        En iyi içeriği yazsanız bile, eğer AI botları sitenizi göremiyorsa yok hükmündesinizdir. 2026'daki en büyük kriz, modern web sitelerinin %70'ini etkileyen <strong>JavaScript Görünmezliği</strong>dir.
                                    </p>
                                    <ul>
                                        <li><strong>Sorun:</strong> Googlebot JavaScript'i işleyebilse de; ChatGPT, Claude ve Perplexity gibi AI modelleri JavaScript çalıştıramaz. Yalnızca ham HTML yanıtını görürler. Siteniz React veya Vue ile yapıldıysa ve "Client-Side Rendering" kullanıyorsa, AI için bomboş bir sayfadan ibarettir.</li>
                                        <li><strong>Çözüm (AFR - AI First Rendering):</strong> Kritik içeriğinizin (metinler, fiyatlar, SSS) sunucu tarafında oluşturulduğundan (SSR) emin olun.</li>
                                        <li>
                                            <strong>Nasıl Test Edilir:</strong>
                                            <div className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg my-3 font-mono text-sm shadow-inner break-all">
                                                $ curl https://siteniz.com
                                            </div>
                                            Çıkan ham HTML kodunda asıl metninizi göremiyorsanız, yapay zeka dünyasında koca bir sıfırsınız!
                                        </li>
                                    </ul>
                                </div>

                                {/* Layer 2 */}
                                <div id="performans" className="scroll-mt-32 relative pl-8 border-l-4 border-blue-600">
                                    <div className="absolute -left-5 top-1 w-10 h-10 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center font-black text-blue-600 shadow-md">2</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mt-0 mb-4">
                                        Performans ve Core Web Vitals
                                    </h3>
                                    <p className="text-lg">Kullanıcı deneyimi metrikleri (CWV) yapay zeka çağında daha da katılaştı.</p>
                                    <ul>
                                        <li><strong>HTTP/3 ve QUIC:</strong> TCP tabanlı eski protokoller yerine UDP tabanlı HTTP/3'e geçiş yapın. Bu, veri paketlerinin sırayla gitme zorunluluğunu (Head-of-Line Blocking) ortadan kaldırır.</li>
                                        <li><strong>INP (Interaction to Next Paint):</strong> 2026'nın en önemli performans metriğidir. Kullanıcı sitenizde bir butona tıkladığında, sayfanın tepki verme süresi <strong>200 mili-saniyenin altında</strong> olmalıdır.</li>
                                    </ul>
                                </div>

                                {/* Layer 3 */}
                                <div id="schema" className="scroll-mt-32 relative pl-8 border-l-4 border-blue-600">
                                    <div className="absolute -left-5 top-1 w-10 h-10 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center font-black text-blue-600 shadow-md">3</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mt-0 mb-4">
                                        Yapısal Veri (Schema) ile AI İletişimi
                                    </h3>
                                    <p className="text-lg">Schema markup, içeriğinizin AI sistemleri tarafından anlaşılmasını sağlayan bir çeviri katmanıdır. Doğru JSON-LD işaretlemesine sahip sayfaların yapay zeka tarafından alıntılanma ihtimali 2.5 kat daha yüksektir.</p>
                                    <ul>
                                        <li><strong>Uygulama:</strong> Sadece Article değil; <code>FAQPage</code> ve <code>HowTo</code> şemalarını kullanın. Soru-cevap şemalarındaki cevapları AI'ın kolayca çekebilmesi için 40-60 kelime arasında tutun.</li>
                                        <li><strong>Temizlik:</strong> Değeri düşük birçok schema gereksiz yere kullanılır. Yalnızca temel verilere odaklanın (Organization, Product, Review vb.).</li>
                                    </ul>
                                </div>

                                {/* Layer 4 */}
                                <div id="geo-icerik" className="scroll-mt-32 relative pl-8 border-l-4 border-blue-600">
                                    <div className="absolute -left-5 top-1 w-10 h-10 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center font-black text-blue-600 shadow-md">4</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mt-0 mb-4">
                                        GEO Odaklı İçerik Mimarisi
                                    </h3>
                                    <p className="text-lg">AI ajanları "hikaye anlatan" blogları sevmez; net beyanlara, tablolara ve kesin verilere açtır.</p>
                                    <ul>
                                        <li><strong>Tersine Piramit ve TL;DR:</strong> Sayfanın en tepesine sorunun doğrudan ve kısa bir cevabını yazın.</li>
                                        <li><strong>Karar Anı Mühendisliği:</strong> AI'ın halüsinasyon görebileceği Uç Durum (Edge Case) senaryolarını işleyin. "Genel geçer" bilgilerden ziyade hiper-spesifik kararlara ışık tutun.</li>
                                        <li><strong>Veri ve Analiz:</strong> İçeriklerinize mutlaka karşılaştırma testleri ve yapılandırılmış formatlar sunun.</li>
                                    </ul>
                                </div>

                                {/* Layer 5 */}
                                <div id="otorite" className="scroll-mt-32 relative pl-8 border-l-4 border-blue-600">
                                    <div className="absolute -left-5 top-1 w-10 h-10 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center font-black text-blue-600 shadow-md">5</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mt-0 mb-4">
                                        Otorite İnşası ve Algoritmik Ağlar
                                    </h3>
                                    <ul>
                                        <li><strong>Programatik SEO (pSEO):</strong> Özgün veri tabanlarını kullanarak hiper-spesifik temiz sayfalar oluşturun. (Bunu asla yapay zeka spami üreterek yapmayın, Airtable veya benzeri temiz şablonlarla inşa edin.)</li>
                                        <li><strong>Trust Graph (E-E-A-T):</strong> AI, bilginin doğruluğunu teyit etmek için yazarın gerçekliğine bakar. Şeffaf biyografiler, yazar sertifikaları ve metodolojileri olmazsa olmazdır.</li>
                                    </ul>
                                </div>

                                {/* Layer 6 */}
                                <div id="olcumleme-evrimi" className="scroll-mt-32 relative pl-8 border-l-4 border-blue-600">
                                    <div className="absolute -left-5 top-1 w-10 h-10 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center font-black text-blue-600 shadow-md">6</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mt-0 mb-4">
                                        Ölçümleme Evrimi: Tıklamalardan "Atıf Payına" (Citation Share) Geçiş
                                    </h3>
                                    <p className="text-lg">
                                        Eğer 2026 yılında başarınızı hala sadece "organik tıklama (Click)" ve "sıra (Ranking)" metrikleriyle ölçüyorsanız, oyunu yanlış okuyorsunuz demektir. Kullanıcıların arama motorlarında yaptıkları sorguların %60'ından fazlası artık başka bir siteye tıklamadan (Zero-click) sonuçlanmaktadır.
                                    </p>
                                    <ul>
                                        <li><strong>Yeni Hedef 1. Sıra Değil, Atıf Almaktır:</strong> AI özetlerinde (AI Overviews) veya Copilot yanıtlarında kaynak (citation) olarak gösterilmek, geleneksel 1. sıradan çok daha değerlidir. Yeni temel performans göstergeniz (KPI) "AI Overview Citation Share" (Yapay Zeka Atıf Payı) olmalıdır.</li>
                                        <li><strong>Düşük Hacim, Yüksek Niyet (Fewer Visits, Higher Intent):</strong> AI, basit soruları kendisi yanıtlayarak sitenize gelen genel trafiği düşürecektir. Ancak sitenize tıklayıp gelen kullanıcılar, AI'ın veremediği derinliğe ihtiyaç duyan, satın alma veya karar verme niyeti en yüksek olan (qualified) kullanıcılardır. Bu nedenle dönüşüm oran optimizasyonu (CRO), SEO'nun ayrılmaz bir parçası olmuştur.</li>
                                    </ul>
                                </div>

                                {/* Layer 7 */}
                                <div id="itibar-muhendisligi" className="scroll-mt-32 relative pl-8 border-l-4 border-blue-600">
                                    <div className="absolute -left-5 top-1 w-10 h-10 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center font-black text-blue-600 shadow-md">7</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mt-0 mb-4">
                                        İtibar Mühendisliği ve Trust Graph (2026'nın Off-Page SEO'su)
                                    </h3>
                                    <p className="text-lg">
                                        Geleneksel "link inşası" (link building) dönemi kapandı. 2026'da Off-Page SEO tek bir kelimeyle tanımlanır: <strong>Güven (Trust)</strong>. AI modelleri, bir bilgiyi sentezlerken veya "en iyi" tavsiyesini verirken algoritmasını güven sinyalleri üzerine kurar.
                                    </p>
                                    <ul>
                                        <li><strong>Backlink Yerine İtibar Mühendisliği:</strong> Eski usul teknik link kutucuklarını işaretlemek yerine, "Reputation Engineering" (İtibar Mühendisliği) yapmalısınız. Gerçek müşteri yorumları, dijital PR, saygın platformlardaki (Forbes, TechCrunch vb.) marka atıfları ve yazarın gerçek dünyadaki uzmanlık sinyalleri (E-E-A-T), LLM'lerin sizi güvenilir bir "varlık" (Entity) olarak tanımasını sağlar.</li>
                                        <li><strong>Ajanları (AI Agents) İkna Etmek:</strong> Artık sitenizi insanlar kadar, kullanıcılar adına ürün karşılaştıran veya araştırma yapan bağımsız "AI Ajanları" da ziyaret ediyor. Bu ajanlar ikna edici tasarıma veya pazarlama diline değil; makine tarafından okunabilen net verilere, şemalara ve doğrulanabilir gerçeklere tepki verir.</li>
                                    </ul>
                                </div>

                                {/* Layer 8 */}
                                <div id="schema-temizligi" className="scroll-mt-32 relative pl-8 border-l-4 border-blue-600">
                                    <div className="absolute -left-5 top-1 w-10 h-10 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center font-black text-blue-600 shadow-md">8</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mt-0 mb-4">
                                        Yapısal Veri (Schema) Temizliği ve AI Çeviri Katmanı
                                    </h3>
                                    <p className="text-lg">
                                        2026'da Google, karmaşa yaratan ve az kullanılan birçok şema türünü (Book actions, Course, Fact Check, Special Announcement vb.) kullanımdan kaldırmıştır. Artık mesele sayfanızı görsel olarak süslemek değil, AI'ın içeriği temelden anlamasını sağlamaktır.
                                    </p>
                                    <ul>
                                        <li><strong>AI'ı Besleyen Kritik Şemalar:</strong> FAQPage (Soru-Cevap), HowTo (Nasıl Yapılır), Article (Makale), Organization (Organizasyon) ve sesli asistanlar için Speakable şemaları 2026'nın zorunluluklarıdır.</li>
                                        <li><strong>Optimizasyon Kuralı:</strong> Soru-cevap şemalarındaki cevapları, yapay zekanın doğrudan çekip (extract) kullanabileceği kısalıkta (40-60 kelime) ve netlikte tutun. Yanlış veya eksik şema, makine için hiç şema olmamasından daha tehlikelidir; içeriğinizin AI tarafından görmezden gelinmesine yol açar.</li>
                                    </ul>
                                </div>

                                {/* Layer 9 */}
                                <div id="craw4llm" className="scroll-mt-32 relative pl-8 border-l-4 border-blue-600">
                                    <div className="absolute -left-5 top-1 w-10 h-10 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center font-black text-blue-600 shadow-md">9</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mt-0 mb-4">
                                        LLM Ön Eğitimi İçin Veri Düğümü Olmak (CRAW4LLM Yaklaşımı)
                                    </h3>
                                    <p className="text-lg">
                                        Sitenizin sadece dizine eklenmesi (indexing) değil, gelecekteki LLM modellerinin eğitim verisine (pretraining data) dahil olması hedeflenmelidir.
                                    </p>
                                    <ul>
                                        <li><strong>PageRank'in Çöküşü:</strong> Geleneksel botlar, siteleri aldıkları link sayısına (Indegree / PageRank) göre tarardı. Ancak yeni nesil AI tarayıcıları (örneğin CRAW4LLM mimarisi), bağlantı sayısına değil; sayfanın "Ön Eğitim Etki Skoruna" (Pretraining Influence Score) bakar.</li>
                                        <li><strong>Ne Anlama Geliyor?</strong> İçeriğiniz saf bilgi, yüksek doğruluk ve benzersiz bir değer (proprietary data, case study) içermiyorsa, milyarlarca sayfalık "tarama israfı" (crawl waste) filtresine takılır ve LLM eğitiminden dışlanır. Makinelere ham, benzersiz ve yapılandırılmış bilgi sunan siteler (Nodes) geleceğin otorite kaynakları olacaktır.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Stratejik Kümeler */}
                        <div id="uzmanlik-alanlari" className="scroll-mt-32 mt-20 pt-10 border-t border-gray-200">
                            <h2 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">
                                Stratejik SEO Kümeleri
                            </h2>
                            <p className="mb-8">Bu rehberin kapsadığı her bir alan için aşağıdaki özel strateji sayfalarımıza geçiş yapabilirsiniz:</p>

                            <div className="grid md:grid-cols-2 gap-4 not-prose">
                                <Link href="/teknik-seo" className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all group">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-lg">Teknik SEO & Altyapı</h4>
                                        <span className="text-2xl">⚙️</span>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed mt-2">AI Bot Yönetimi (llms.txt), DOM boyutu optimizasyonu ve Tarama İsrafı (Crawl Waste) önleme stratejileri.</p>
                                </Link>

                                <Link href="/core-web-vitals" className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all group">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-lg">Core Web Vitals Optimizasyonu</h4>
                                        <span className="text-2xl">⚡</span>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed mt-2">INP skorlarını &lt;200ms düzeyine düşürme, LCP optimizasyonu, görsel mimarisi ve HTTP/3 adaptasyonu.</p>
                                </Link>

                                <Link href="/geo" className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all group">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-lg">GEO & Yapay Zeka Arama Uyumu</h4>
                                        <span className="text-2xl">🤖</span>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed mt-2">SGE/AI Overviews için içerik formatlama, "Citation Share" artırma ve Semantik arama uyumu (LLM Optimizasyonu).</p>
                                </Link>

                                <Link href="/eeat-sinyalleri" className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all group">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-lg">Topikal Otorite & E-E-A-T</h4>
                                        <span className="text-2xl">📈</span>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed mt-2">Otorite mühendisliği, yazar profilleri, Trust Graph sinyalleri ve Programatik SEO bağlantıları inşası.</p>
                                </Link>
                            </div>
                        </div>

                        {/* Otorite Kontrolü */}
                        <div id="otorite-kontrolu" className="scroll-mt-32 mt-20 p-8 md:p-12 bg-[#0A0F1C] border border-indigo-900/60 rounded-[2rem] relative overflow-hidden not-prose">
                            {/* Glow */}
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none"></div>

                            <h2 className="text-3xl font-black text-white mt-0 mb-6 flex items-center gap-3">
                                🛑 Otorite Kontrolü <span className="text-indigo-400">(The Final Gate)</span>
                            </h2>
                            <p className="text-base text-gray-400 font-medium mb-8 leading-relaxed">
                                İçeriğinizi veya teknik bir değişikliği yayına almadan önce kendinize şu soruları sorun:
                            </p>

                            <div className="space-y-3 text-base">
                                <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex gap-4">
                                    <strong className="min-w-[140px] text-blue-400 shrink-0">AI Citation Testi:</strong>
                                    <span className="text-gray-300">Bu sayfa, bir LLM tarafından bir soruya &quot;tek ve net kaynak&quot; olarak gösterilebilir mi?</span>
                                </div>
                                <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex gap-4">
                                    <strong className="min-w-[140px] text-blue-400 shrink-0">JS Bağımsızlığı:</strong>
                                    <span className="text-gray-300">Ham HTML (curl) yanıtım, bu sayfanın ana fikrini ve verisini barındırıyor mu?</span>
                                </div>
                                <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex gap-4">
                                    <strong className="min-w-[140px] text-blue-400 shrink-0">Karar Testi:</strong>
                                    <span className="text-gray-300">Ziyaretçi bu sayfayı okuduktan sonra, başka bir web sitesine gitme ihtiyacı hisseder mi?</span>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-indigo-950/60 border border-indigo-800/40 rounded-2xl">
                                <strong className="block text-indigo-400 mb-2 uppercase tracking-wider text-xs font-bold">Kesin Mühendislik Kuralı</strong>
                                <p className="text-gray-300 text-sm leading-relaxed m-0">Eğer bu sorulardan herhangi birine &quot;Hayır&quot; diyorsanız, o çalışmayı henüz yayınlamayın. 2026 dünyasında AI sistemlerinde ceza yoktur; &quot;yok sayılma&quot; ve &quot;görünmezlik&quot; vardır. Görünmezliği reddedin ve sisteminizi mühendislik kesinliğiyle inşa edin.</p>
                            </div>
                        </div>

                    </article>
                </div>
            </div>

            <Footer />
        </main>
    );
}
