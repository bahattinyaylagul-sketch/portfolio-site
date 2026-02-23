import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Generative Engine Optimization (GEO) Rehberi – Bahattin Yaylagül",
    description: "GEO (Generative Engine Optimization) nedir? AI ve LLM modellerinde sıralama almak için gerekli stratejiler, teknikler ve kapsamlı rehber.",
    alternates: {
        canonical: "/icgoruler/geo-rehberi",
    },
};

const headings = [
    { id: "temel-kavramlar", text: '1. Temel Kavramlar ve Yeni Arama Katmanları' },
    { id: "teknik-altyapi", text: '2. GEO’nun Teknik Altyapısı (Machine Learning & NLP)' },
    { id: "geo-faktorleri", text: '3. A\'dan Z\'ye GEO Sıralama Faktörleri' },
    { id: "uygulama-plani", text: '4. İçerik İçin Uygulama Planı' },
    { id: "sonuc", text: 'Sonuç: GEO = İyi Pazarlama' },
];

export default function BlogPost() {
    return (
        <main className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
            {/* Fixed Header Wrapper */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <Navigation />
            </header>

            {/* Hero Header - Full Width Moz Style */}
            <div className="w-full bg-gray-900 pt-16 pb-0 relative overflow-hidden mt-20">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/geo-hero.png"
                        alt="Generative Engine Optimization AI Brain"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
                </div>

                {/* Abstract Background Shapes (Kept as extra layer if needed, or removed if image is enough. Let's keep for depth but reduce opacity) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>
                </div>

                <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="space-y-8 flex flex-col justify-center h-full pb-16 pt-12">
                            <div>
                                <div className="flex items-center gap-3 text-yellow-400 font-bold tracking-widest text-xs uppercase mb-4">
                                    <span className="text-blue-400">İçgörüler</span>
                                    <span className="w-px h-3 bg-white/20"></span>
                                    <span>GEO & AI Search</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
                                    Generative Engine Optimization (GEO): Kapsamlı Rehber ve Sıralama Faktörleri
                                </h1>

                                {/* Divider & Date Meta */}
                                <div className="border-t border-white/10 pt-6 flex items-center gap-6 text-sm font-medium text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span>13 Şubat 2026</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                        <span>8 dk okuma</span>
                                    </div>
                                </div>
                            </div>

                            {/* Author Section */}
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

                        {/* 3D Illustration */}
                        <div className="relative hidden lg:block h-[500px] w-full">
                            <Image
                                src="/images/geo-hero.png"
                                alt="Generative Engine Optimization Visual"
                                fill
                                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-8 pt-12 pb-20">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-8 font-medium tracking-wide font-sans">
                    <Link href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</Link>
                    <span className="text-gray-200">/</span>
                    <Link href="/icgoruler" className="hover:text-blue-600 transition-colors">İçgörüler</Link>
                    <span className="text-gray-200">/</span>
                    <span className="text-gray-600 font-bold truncate">GEO: Kapsamlı Rehber</span>
                </nav>

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
                                        className="block py-3 pl-4 text-sm text-gray-600 hover:text-blue-700 hover:border-l-2 hover:border-blue-700 -ml-0.5 transition-all leading-relaxed"
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
                        <p className="text-xl text-gray-700 leading-relaxed font-light mb-12 pl-6 border-l-4 border-blue-600">
                            Dijital pazarlama dünyası, klasik SEO'dan (Search Engine Optimization) çok daha karmaşık ve katmanlı bir yapıya evrilmektedir. Artık hedef sadece "mavi linklere" tıklatmak değil, yapay zeka modellerinin (LLM) ürettiği yanıtlarda <strong className="font-bold text-gray-900">"kaynak"</strong> ve <strong className="font-bold text-gray-900">"otorite"</strong> olarak yer almaktır. Bu yeni disiplin <strong>GEO (Generative Engine Optimization)</strong> olarak adlandırılmaktadır.
                        </p>

                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-12 text-sm text-gray-600 italic">
                            Bu makale, sağlanan stratejik raporlar, teknik analizler ve sektör içi vaka analizlerine (Lorelight, CCI raporları vb.) dayanarak hazırlanmıştır.
                        </div>

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
                                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                                mb-16"
                        >
                            <h2 id="temel-kavramlar">1. Temel Kavramlar ve Yeni Arama Katmanları</h2>
                            <p>
                                2025 yılı itibarıyla arama optimizasyonu tek bir disiplin olmaktan çıkmış, birbirini tamamlayan dört ana katmana ayrılmıştır. Bu katmanları anlamak, GEO'nun mantığını çözmek için şarttır.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg font-bold text-blue-600 mb-2">1. GEO (Generative Engine Optimization)</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        İçeriğin yapay zeka modelleri (ChatGPT, Gemini, Perplexity vb.) tarafından anlaşılması, sentezlenmesi ve alıntılanabilir (cited) hale getirilmesi sürecidir. Hedef: Klasik sıralama değil, "tavsiye edilme" ve "sentezlenen cevabın parçası olma"dır. Özellikle Google SGE ve Perplexity gibi modellerde "topical authority" (konusal otorite) kazanmayı amaçlar.
                                    </p>
                                </div>
                                <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg font-bold text-purple-600 mb-2">2. AEO (Answer Engine Optimization)</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        İçeriğin, yapay zeka özetlerinde (AI Overviews) veya sesli asistanlarda "doğrudan cevap" olarak sunulmasını hedefler. Farkı: GEO, geniş kapsamlı sentez ve kaynak gösterme üzerineyken; AEO, "Sıfırıncı Pozisyon" (Zero-click) ve net, kısa yanıtlar üzerine kuruludur.
                                    </p>
                                </div>
                                <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg font-bold text-emerald-600 mb-2">3. AIO (AI Integration Optimization)</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        İçerik üretim ve yönetim süreçlerinin yapay zeka araçlarıyla (Örn: ChatGPT o3, Claude Sonnet) optimize edilmesi ve ölçeklendirilmesidir. Bu, sadece içerik yazdırmak değil, iş akışlarını otomatize etmek anlamına gelir.
                                    </p>
                                </div>
                                <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg font-bold text-orange-600 mb-2">4. SXO (Search Experience Optimization)</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Kullanıcının arama niyetini (intent) karşılayan deneyimin ve dönüşüm oranlarının (CRO) optimize edilmesidir. AI cevabından gelen trafiği tutmak ve dönüştürmek için kritik bir katmandır.
                                    </p>
                                </div>
                            </div>

                            <h2 id="teknik-altyapi">2. GEO’nun Teknik Altyapısı (Machine Learning & NLP)</h2>
                            <p>
                                GEO'yu anlamak için, arama motorlarının ve LLM'lerin arka planda nasıl çalıştığını bilmek gerekir. Klasik anahtar kelime eşleşmesi yerini Semantik Arama ve Vektör teknolojilerine bırakmıştır.
                            </p>

                            <h3>Vektör Depoları (Vector Stores) ve Embeddings</h3>
                            <p>
                                AI, kelimeleri metin olarak değil, sayısal kavramlar (embeddings) olarak görür. "Kedi" ve "Yavru kedi" kelimeleri, anlamsal düzlemde birbirine "Kedi" ve "Araba" kelimelerinden daha yakındır.
                            </p>

                            {/* Infographic: Semantic Distance */}
                            <div className="my-8 p-8 bg-gray-50 rounded-2xl border border-gray-100 not-prose">
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 text-center">Anlamsal Mesafe (Semantic Distance)</h4>
                                <div className="relative h-48 w-full bg-white rounded-xl border border-dashed border-gray-200 overflow-hidden">
                                    {/* Grid Lines */}
                                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-10">
                                        {[...Array(24)].map((_, i) => <div key={i} className="border-r border-b border-gray-400"></div>)}
                                    </div>

                                    {/* Nodes */}
                                    <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all"></div>
                                        <span className="text-xs font-bold text-gray-700 mt-2 bg-white px-2 py-1 rounded shadow-sm">Kedi</span>
                                    </div>

                                    <div className="absolute top-[35%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all"></div>
                                        <span className="text-xs font-bold text-gray-700 mt-2 bg-white px-2 py-1 rounded shadow-sm">Yavru Kedi</span>
                                        {/* Connection Line */}
                                        <div className="absolute -top-6 -left-8 w-16 h-px bg-blue-500/30 -rotate-12 pointer-events-none"></div>
                                    </div>

                                    <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 flex flex-col items-center group cursor-pointer">
                                        <div className="w-3 h-3 bg-red-400 rounded-full ring-4 ring-red-100 group-hover:ring-red-200 transition-all"></div>
                                        <span className="text-xs font-bold text-gray-700 mt-2 bg-white px-2 py-1 rounded shadow-sm">Araba</span>
                                    </div>
                                </div>
                                <p className="text-center text-xs text-gray-400 mt-3 italic">Konusal olarak yakın kelimeler (Embedding Space) birbirine kümelenir.</p>
                            </div>

                            <ul>
                                <li><strong>Önemi:</strong> İçeriğinizin, kullanıcı sorgusuyla anlamsal (semantik) olarak eşleşmesi için bu düzlemde yakın olması gerekir. Bu, anahtar kelime tekrarı yerine bağlamsal bütünlük gerektirir.</li>
                            </ul>

                            <h3>RAG (Retrieval-Augmented Generation)</h3>
                            <p>
                                Modellerin (ChatGPT, Claude vb.) güncel bilgiye erişmek için dış veritabanlarını veya interneti tarayıp, bulduğu bilgiyi kendi dil yeteneğiyle sentezlemesi yöntemidir.
                            </p>

                            {/* Infographic: RAG Workflow */}
                            <div className="my-8 not-prose">
                                <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-6 bg-blue-50/50 rounded-xl border border-blue-100">
                                    <div className="flex flex-col items-center text-center max-w-[120px]">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-blue-100 mb-2 text-blue-600">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>
                                        <span className="text-xs font-bold text-blue-900">Sorgu (Prompt)</span>
                                    </div>
                                    <div className="hidden md:block h-px w-full bg-blue-200 relative">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-blue-200 rotate-45"></div>
                                    </div>
                                    <div className="flex flex-col items-center text-center max-w-[120px]">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-blue-100 mb-2 text-blue-600">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                            </svg>
                                        </div>
                                        <span className="text-xs font-bold text-blue-900">Retrieval (Geri Çağırma)</span>
                                    </div>
                                    <div className="hidden md:block h-px w-full bg-blue-200 relative">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-blue-200 rotate-45"></div>
                                    </div>
                                    <div className="flex flex-col items-center text-center max-w-[120px]">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-blue-100 mb-2 text-blue-600">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <span className="text-xs font-bold text-blue-900">LLM Sentezi</span>
                                    </div>
                                    <div className="hidden md:block h-px w-full bg-blue-200 relative">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-blue-200 rotate-45"></div>
                                    </div>
                                    <div className="flex flex-col items-center text-center max-w-[120px]">
                                        <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shadow-sm border border-green-200 mb-2 text-green-600">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <span className="text-xs font-bold text-green-700">Final Cevap</span>
                                    </div>
                                </div>
                            </div>

                            <h3>Learning to Rank (LTR - Sıralama Öğrenmesi)</h3>
                            <p>
                                Bilgi erişim sistemlerinde, belgelerin en alakalıdan en aza doğru sıralanması için makine öğrenmesinin kullanılmasıdır. GEO'da üç yaklaşım öne çıkar:
                            </p>
                            <ol>
                                <li><strong>Noktasal (Pointwise):</strong> Her belge tek başına puanlanır.</li>
                                <li><strong>Çiftli (Pairwise):</strong> Belge çiftleri karşılaştırılır (Hangisi daha iyi cevap?).</li>
                                <li><strong>Liste Bazlı (Listwise):</strong> Tüm liste bir bütün olarak değerlendirilir.</li>
                            </ol>
                            <p>
                                <strong>GEO İpucu:</strong> İçeriğinizin rakiplerle kıyaslandığında (pairwise) daha net ve yapılandırılmış olması, AI'ın tercihini etkiler.
                            </p>

                            <h2 id="geo-faktorleri">3. A'dan Z'ye GEO Sıralama Faktörleri</h2>
                            <p>
                                Aşağıdaki faktörler, AI Search Authority dökümanları ve C-Level rehberlerinden derlenmiştir. Bu faktörler, bir içeriğin AI tarafından "cevap" olarak seçilme olasılığını (Probability) belirler.
                            </p>

                            {/* Infographic Grid: GEO Factors */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 not-prose">
                                {/* Factor A */}
                                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
                                    <div className="text-3xl font-black text-gray-100 mb-2">A</div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Authority (İtibar)</h4>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                        AI, eğitim verisindeki "güvenilir" kaynakları önceliklendirir.
                                    </p>
                                    <div className="text-xs bg-blue-50 text-blue-700 p-3 rounded-lg font-medium">
                                        🚀 Lorelight Verisi: Otoriter yayınlarda mention şarttır.
                                    </div>
                                </div>

                                {/* Factor B */}
                                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
                                    <div className="text-3xl font-black text-gray-100 mb-2">B</div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">BLUF Prensibi</h4>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                        "Bottom Line Up Front". AI modelleri netliği sever.
                                    </p>
                                    <div className="text-xs bg-green-50 text-green-700 p-3 rounded-lg font-medium">
                                        💡 İpucu: Cevabı ilk 100 kelimede net verin.
                                    </div>
                                </div>

                                {/* Factor C */}
                                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
                                    <div className="text-3xl font-black text-gray-100 mb-2">C</div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Citation & Mention</h4>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                        Linkli atıf (Citation) ve metin içi geçiş (Mention) dengesi.
                                    </p>
                                    <div className="text-xs bg-purple-50 text-purple-700 p-3 rounded-lg font-medium">
                                        📊 Veri: Mention alan markalar %40 daha kalıcı.
                                    </div>
                                </div>

                                {/* Factor D */}
                                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
                                    <div className="text-3xl font-black text-gray-100 mb-2">D</div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Data (Veri ve Tablo)</h4>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                        AI, yapılandırılmış veriyi (Structured Data) kolay işler.
                                    </p>
                                    <div className="text-xs bg-yellow-50 text-yellow-700 p-3 rounded-lg font-medium">
                                        ⚠️ Zorunlu: Mutlaka karşılaştırma tablosu ekleyin.
                                    </div>
                                </div>

                                {/* Factor E */}
                                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
                                    <div className="text-3xl font-black text-gray-100 mb-2">E</div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Edge Cases</h4>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                        Genel bilgi yerine spesifik, uç senaryolara odaklanın.
                                    </p>
                                    <div className="text-xs bg-gray-50 text-gray-700 p-3 rounded-lg font-medium">
                                        ❓ Örnek: "Eğer X olursa, Y yapılmalıdır."
                                    </div>
                                </div>

                                {/* Factor F */}
                                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
                                    <div className="text-3xl font-black text-gray-100 mb-2">F</div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Freshness</h4>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                        AI hafızasında "Resurface" (tekrar görünme) oranı kritiktir.
                                    </p>
                                    <div className="text-xs bg-red-50 text-red-700 p-3 rounded-lg font-medium">
                                        📈 Hedef: Düzenli içerik ile volatiliteyi yönetin.
                                    </div>
                                </div>
                            </div>

                            <h2 id="uygulama-plani">4. İçerik İçin Uygulama Planı (Checklist)</h2>
                            <p>
                                Bu dökümanlara dayanarak, GEO uyumlu bir içerik oluştururken izlemeniz gereken 10 adım:
                            </p>
                            <ol className="list-decimal pl-6 space-y-4 marker:text-blue-600 marker:font-bold">
                                <li><strong>Konu Seçimi (Decision Moment):</strong> Kullanıcının karar verme eşiğinde olduğu, tek paragrafla cevaplanamayan bir konu seçin.</li>
                                <li><strong>Özgünlük Kontrolü:</strong> AI'ın kendi kendine üretemeyeceği "operasyonel gerçeklik" veya "uzman görüşü" ekleyin.</li>
                                <li><strong>BLUF Prensibi:</strong> İlk 100 kelimede net cevabı verin.</li>
                                <li><strong>Adım Adım Süreç:</strong> Süreci maddeler halinde, net bir dille anlatın.</li>
                                <li><strong>Senaryolar:</strong> "Eğer / Ama / İstisna" durumlarını ekleyin (Edge cases).</li>
                                <li><strong>Görsel Kanıt:</strong> Tablo veya karşılaştırma listesi ekleyin (Zorunlu).</li>
                                <li><strong>Semantik Yapı:</strong> Hiyerarşiyi (H1-H2-H3) mantıksal bir akışla kurun.</li>
                                <li><strong>Marka Varlığı:</strong> Marka ismini doğal bir otorite sinyali olarak geçirin.</li>
                                <li><strong>FAQ Yapısı:</strong> "Nedir" soruları yerine, karar vermeye yardımcı olacak "Peki ya..." sorularını yanıtlayın.</li>
                                <li><strong>Son Kontrol (Gate):</strong> "Kullanıcı başka bir yere gitmeden bu sayfada işini bitirebilir mi?" Evet ise yayınlayın.</li>
                            </ol>

                            <h2 id="sonuc">Sonuç: GEO = İyi Pazarlama</h2>
                            <p>
                                "GEO stratejisi" aslında marka inşasından ayrı bir şey değildir. AI modelleri, insanlar için değerli, güvenilir ve otoriter olan içeriği taklit etmek ve sunmak üzere eğitilmiştir.
                            </p>
                            <p>
                                Dolayısıyla, teknik optimizasyonlar (tablolar, schema, BLUF) gerekli olsa da, asıl sıralama faktörü gerçek dünyada bir marka değeri ve uzmanlık (E-E-A-T) oluşturmaktır. AI çağında kazananlar, algoritmaları kandırmaya çalışanlar değil; net, öz ve gerçekten faydalı bilgi sunarak AI modellerinin "güvenilir kaynağı" haline gelenler olacaktır.
                            </p>
                        </div>

                        {/* Cross Link to Consulting Page */}
                        <div className="my-16 p-8 bg-blue-50/50 border border-blue-100 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden">
                            {/* Background pattern */}
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                            <div className="relative z-10 flex-1">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Markanızı Yapay Zeka Çağına Taşıyın</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    Generative Engine Optimization (GEO) stratejilerinin işinize özel nasıl kurgulanabileceğini görmek ve markanıza AI arama motorlarında görünürlük kazandırmak ister misiniz?
                                </p>
                            </div>

                            <div className="relative z-10 shrink-0 w-full md:w-auto">
                                <Link
                                    href="/geo"
                                    className="inline-flex items-center justify-center w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-md"
                                >
                                    GEO Danışmanlığı Hizmetini İncele
                                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Footer / Share / Connect */}
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
