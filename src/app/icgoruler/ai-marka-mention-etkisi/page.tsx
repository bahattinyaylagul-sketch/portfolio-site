import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI ve Marka Mention Etkisi – Bahattin Yaylagül",
    description: "Marka isminin link olmadan geçmesi (Brand Mentions) AI modellerini nasıl etkiler? Güven skoru ve GEO başarısı üzerine derinlemesine bir analiz.",
    alternates: {
        canonical: "/icgoruler/ai-marka-mention-etkisi",
    },
};

const headings = [
    { id: "yeniden-gorunme", text: '1. "Yeniden Görünme" Süresini %40 Artırır' },
    { id: "algisal-guven", text: '2. Algısal Güven (Perceptual Trust) Oluşturur' },
    { id: "semantik-oy", text: '3. Semantik Oy (Semantic Vote) Olarak İşlenir' },
    { id: "isim-tutarliligi", text: '4. İsim Tutarlılığı Hafızayı Güçlendirir' },
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
                {/* Abstract Background Shapes */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] -ml-32 -mb-32"></div>
                </div>

                <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="space-y-8 flex flex-col justify-center h-full pb-8">
                            <div>
                                <div className="flex items-center gap-3 text-yellow-400 font-bold tracking-widest text-xs uppercase mb-4">
                                    <span className="text-blue-400">İçgörüler</span>
                                    <span className="w-px h-3 bg-white/20"></span>
                                    <span>GEO & AI Search</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
                                    Marka İsminin Mention Olarak Geçmesi AI Hafızasını Nasıl Etkiler?
                                </h1>

                                {/* Divider & Date Meta */}
                                <div className="border-t border-white/10 pt-6 flex items-center gap-6 text-sm font-medium text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span>31 Ocak 2026</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                        <span>4 dk okuma</span>
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
                                src="/images/ai-mention-3d.png"
                                alt="AI Mention 3D Illustration"
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
                    <Link href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</Link>
                    <span className="text-gray-200">/</span>
                    <Link href="/icgoruler" className="hover:text-blue-600 transition-colors">İçgörüler</Link>
                    <span className="text-gray-200">/</span>
                    <span className="text-gray-600 font-bold truncate">Marka İsminin Mention Olarak Geçmesi</span>
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
                            Marka isminin link olmadan, sadece metin içinde "mention" (bahsedilme) olarak geçmesi, AI algoritmalarının hafızasını ve karar mekanizmasını <strong className="font-bold text-gray-900">"Algısal Güven" (Perceptual Trust)</strong> ve <strong className="font-bold text-gray-900">"Yeniden Görünme" (Resurface)</strong> açısından doğrudan etkiler.
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
                                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                                mb-16"
                        >
                            <p>
                                Kaynaklara göre, marka isminin mention olarak geçmesinin AI hafızasındaki 4 temel etkisi şunlardır:
                            </p>

                            <h2 id="yeniden-gorunme">1. "Yeniden Görünme" Süresini %40 Artırır</h2>
                            <p>
                                AI modelleri için en kritik etki, markanın hafızada kalma süresidir. Araştırmalara göre, AI tarafından "Mention" edilen markalar, hiç bahsedilmeyenlere göre <strong>%40 daha uzun süre</strong> arama sonuçlarında (cevap setlerinde) tekrar tekrar görünmeye (resurface) devam eder.
                            </p>
                            <p>
                                Mention, yapay zekaya <em>"bu marka bu konuyla ilgilidir"</em> sinyalini vererek markayı potansiyel cevap havuzunda tutar.
                            </p>

                            {/* Infographic: 40% Stat */}
                            <div className="my-8 p-6 bg-gray-50 rounded-xl border border-gray-100 not-prose">
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">AI Hafızasında Kalma Süresi</h4>
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
                                            <span>Mention Olmayan Markalar</span>
                                            <span className="text-xs bg-gray-200 px-2 py-1 rounded">Standart Süre</span>
                                        </div>
                                        <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-gray-400 w-[60%]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm font-bold text-gray-900 mb-2">
                                            <span>Mention Edilen Markalar</span>
                                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded border border-blue-200">%40 Daha Uzun</span>
                                        </div>
                                        <div className="h-3 w-full bg-blue-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-600 w-full shadow-[0_0_10px_rgba(37,99,235,0.4)] animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400 mt-4 italic">
                                    * Mention'lar, markanın tekrar hatırlanma (resurface) sıklığını ve süresini doğrudan artırır.
                                </p>
                            </div>

                            <h2 id="algisal-guven">2. Algısal Güven (Perceptual Trust) Oluşturur</h2>
                            <p>
                                AI Search dünyasında iki tür güven vardır:
                            </p>
                            <ul>
                                <li><strong>Citation (Alıntılama):</strong> Linkli kaynak gösterimidir, doğrudan teknik güven sağlar.</li>
                                <li><strong>Mention (Bahsedilme):</strong> Marka isminin geçmesidir, algısal güven sağlar.</li>
                            </ul>
                            <p>
                                Mention, AI'ın markayı tanımasını sağlar. Link verilmese bile, AI bu veriyi işler ve markayı bir "varlık" (entity) olarak hafızasına kazır. Bu durum, <strong>GEO (Generative Engine Optimization)</strong> sürecinin ilk ve en temel adımıdır.
                            </p>

                            {/* Infographic: Comparison Cards */}
                            <div className="grid md:grid-cols-2 gap-4 my-10 not-prose">
                                <div className="p-6 rounded-xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 shadow-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                            </svg>
                                        </div>
                                        <h4 className="font-bold text-gray-900">Backlink (Link)</h4>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                        Teknik bir referanstır. Otoriteyi doğrudan aktarır ve sıralama sinyali olarak nettir.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-xs font-semibold text-gray-500 bg-gray-50 p-2 rounded">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>Teknik Güven
                                        </li>
                                        <li className="flex items-center gap-2 text-xs font-semibold text-gray-500 bg-gray-50 p-2 rounded">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>PageRank Aktarımı
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-6 rounded-xl bg-gradient-to-b from-blue-50 to-white border border-blue-100 shadow-sm relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl -mr-8 -mt-8"></div>
                                    <div className="flex items-center gap-3 mb-4 relative z-10">
                                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                            </svg>
                                        </div>
                                        <h4 className="font-bold text-blue-900">Brand Mention</h4>
                                    </div>
                                    <p className="text-sm text-blue-800/80 mb-4 leading-relaxed relative z-10">
                                        Algısal bir güvendir. AI'ın markayı tanımasını ve "Entity" olarak kaydetmesini sağlar.
                                    </p>
                                    <ul className="space-y-2 relative z-10">
                                        <li className="flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50/50 p-2 rounded">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Algısal Güven
                                        </li>
                                        <li className="flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50/50 p-2 rounded">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Entity Oluşumu
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <h2 id="semantik-oy">3. Semantik Oy (Semantic Vote) Olarak İşlenir</h2>
                            <p>
                                Özellikle haber siteleri, Reddit, forumlar veya sektörel portallarda markanızdan bahsedilmesi, AI modelleri tarafından bir "semantik oy" olarak yorumlanır.
                            </p>
                            <p>
                                AI, bu mention'ları toplar ve markanızı ilgili konu başlığında <strong>(Topic Authority)</strong> yetkin bir figür olarak sınıflandırır. Bu sayede, gelecekteki sorgularda sizi kaynak (citation) olarak gösterme ihtimali artar.
                            </p>

                            {/* Infographic: AI Authority Cycle */}
                            <div className="my-14 p-8 bg-gray-900 rounded-2xl text-white not-prose relative overflow-hidden">
                                {/* Background Effects */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                                <h4 className="text-center font-bold mb-12 text-lg tracking-wide">AI Otorite Döngüsü</h4>

                                <div className="relative">
                                    {/* Connecting Line (Desktop) */}
                                    <div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-emerald-500/30 -z-10"></div>

                                    <div className="grid md:grid-cols-3 gap-8">
                                        {/* Step 1 */}
                                        <div className="relative flex flex-col items-center text-center group">
                                            <div className="w-14 h-14 bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center mb-4 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                                                <span className="font-mono text-blue-400 font-bold text-xl">1</span>
                                            </div>
                                            <h5 className="font-bold text-base mb-2">Mention</h5>
                                            <p className="text-xs text-gray-400 leading-relaxed px-4">
                                                İçerik içinde markanızdan bahsedilir
                                            </p>
                                        </div>

                                        {/* Step 2 */}
                                        <div className="relative flex flex-col items-center text-center group">
                                            <div className="w-14 h-14 bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center mb-4 group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300">
                                                <span className="font-mono text-purple-400 font-bold text-xl">2</span>
                                            </div>
                                            <h5 className="font-bold text-base mb-2">Semantic Vote</h5>
                                            <p className="text-xs text-gray-400 leading-relaxed px-4">
                                                AI, bağlamı ve güvenilirliği analiz eder
                                            </p>
                                        </div>

                                        {/* Step 3 */}
                                        <div className="relative flex flex-col items-center text-center group">
                                            <div className="w-14 h-14 bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center mb-4 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300">
                                                <span className="font-mono text-emerald-400 font-bold text-xl">3</span>
                                            </div>
                                            <h5 className="font-bold text-base mb-2">Entity Memory</h5>
                                            <p className="text-xs text-gray-400 leading-relaxed px-4">
                                                Marka "güvenilir kaynak" olarak hafızaya alınır
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h2 id="isim-tutarliligi">4. İsim Tutarlılığı Hafızayı Güçlendirir</h2>
                            <p>
                                AI'ın markanızı doğru hatırlaması ve mention etkisini maksimuma çıkarması için <strong>"İsim İstikrarı"</strong> şarttır. Marka ve ürün isimlerinin tüm içeriklerde ve platformlarda tekil, net ve değişmez bir biçimde kullanılması, AI'ın parçaları birleştirmesini kolaylaştırır.
                            </p>
                            <p>
                                Farklı varyasyonlar kullanmak (örn: "X Marka", "X.com", "X A.Ş.") AI hafızasında bölünmelere yol açarak mention etkisini zayıflatabilir.
                            </p>

                            <div className="bg-gray-50 border-l-4 border-blue-600 p-8 rounded-r-xl my-12 not-prose">
                                <h4 className="text-xl font-bold text-foreground mb-4">Özetle</h4>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Link (backlink) teknik bir referansken, <strong>mention</strong> markanın AI ekosistemindeki "bilinirliğini" ve "kalıcılığını" yönetir. Hedefiniz, mention'larla AI hafızasına girmek ve zamanla bunu linkli bir kaynağa (Citation) dönüştürmektir.
                                </p>
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
