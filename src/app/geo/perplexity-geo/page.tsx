/* eslint-disable react/no-unescaped-entities */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Perplexity GEO: Yapay Zeka Arama Motorunda Görünürlük Kazanma Rehberi – Bahattin Yaylagül",
    description: "Perplexity AI aramalarında alıntılanmak, kaynak olarak önerilmek ve organik AI trafiğinizi artırmak için yapılması gereken optimizasyon pratikleri.",
    alternates: {
        canonical: "/geo/perplexity-geo",
    },
};

const headings = [
    { id: "perplexity-vs-seo", text: "Perplexity GEO vs Klasik SEO" },
    { id: "hangi-kaynaklar", text: "Perplexity'nin Alıntıladığı Kaynaklar" },
    { id: "nasil-yapilandirilir", text: "İçerik Yapılandırma Adımları" },
    { id: "perplexity-vs-chatgpt", text: "Perplexity GEO vs ChatGPT AEO" },
    { id: "zaman-cizelgesi", text: "Zaman Çizelgesi & Metrikler" },
    { id: "geo-ajanslari", text: "GEO Ajansları ve Seçim Kriterleri" },
    { id: "faq", text: "Sıkça Sorulan Sorular" },
];

export default function BlogPost() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://bahattinyaylagul.com" },
            { "@type": "ListItem", "position": 2, "name": "GEO Danışmanlığı", "item": "https://bahattinyaylagul.com/geo" },
            { "@type": "ListItem", "position": 3, "name": "Perplexity GEO Rehberi", "item": "https://bahattinyaylagul.com/geo/perplexity-geo" }
        ]
    };

    return (
        <main className="min-h-screen bg-white font-sans selection:bg-violet-100 selection:text-violet-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Fixed Header Wrapper */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <Navigation />
            </header>

            {/* Hero Header - Full Width Moz Style */}
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
                                    <span>Perplexity & AI Search</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
                                    Perplexity GEO: Yapay Zeka Arama Motorunda Görünürlük Kazanma Rehberi
                                </h1>

                                {/* Divider & Date Meta */}
                                <div className="border-t border-white/10 pt-6 flex items-center gap-6 text-sm font-medium text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span>26 Temmuz 2026</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                        <span>7 dk okuma</span>
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
                                src="/images/ranking_factors_3d.png"
                                alt="Perplexity GEO Cover 3D"
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
                    <span className="text-gray-600 font-bold truncate">Perplexity GEO</span>
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
                        <p className="text-xl text-gray-700 leading-relaxed font-light mb-12 pl-6 border-l-4 border-violet-600">
                            Perplexity AI aramalarında alıntılanmak ve kaynak olarak önerilmek, markanıza yüksek dönüşümlü trafik kazandırır. İşte Perplexity botlarının markanızı kaynak göstermesini sağlamanın tam rehberi.
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
                            <h2 id="perplexity-vs-seo" style={{ scrollMarginTop: "100px" }}>Perplexity GEO Nedir ve Klasik SEO'dan Farkı Ne?</h2>
                            <p>
                                <strong>Perplexity GEO (Generative Engine Optimization)</strong>, içeriğinizin Perplexity AI yanıtlarında kaynak olarak alıntılanmasını sağlamak için uygulanan optimizasyon pratiğidir. Anahtar kelime yoğunluğu burada belirleyici değildir; kaynak otoritesi, içerik güncelliği ve doğrulanabilir veri yapısı belirleyicidir.
                            </p>
                            <p>
                                Klasik SEO'da anahtar kelime yerleşimi, backlink sayısı ve teknik sayfa optimizasyonu odak noktasıdır. Perplexity'de sistem her yanıtın arkasındaki kaynakları açıkça gösterir — alıntılanıyorsanız kullanıcı bunu görür, alıntılanmıyorsanız yoksunuzdur. Yüksek hacimli içerik üretmek burada görünürlük kazandırmaz; az ama otoriter ve yapısal olarak sağlam içerik daha işlevlidir.
                            </p>
                            <p>
                                ChatGPT ile karşılaştırıldığında ayrım netleşir: ChatGPT kaynağı gizler, Perplexity görünür atıflar gösterir ve kaynak otoritesini sıralama kararında daha belirgin biçimde kullanır. Sistem aynı zamanda gerçek zamanlı veri doğruluğunu ön plana çıkarır; güncel olmayan veya kaynaksız iddialar alıntı yarışında geride kalır.
                            </p>

                            <h2 id="hangi-kaynaklar" style={{ scrollMarginTop: "100px" }}>Perplexity Hangi Kaynakları Alıntılar?</h2>
                            <p>
                                Perplexity'nin atıf mekanizması "kaynak izlenebilirliği" ilkesi üzerine kuruludur; gerçek zamanlı arama ile akademik ve profesyonel veritabanı bağlantısını bir arada kullanır.
                            </p>

                            <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm bg-white">
                                <table className="min-w-full divide-y divide-gray-200 text-sm font-sans mb-0">
                                    <thead className="bg-gray-50 font-bold text-gray-900">
                                        <tr>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Katman</th>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Kaynak Türü</th>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Örnekler</th>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Neden Tercih Edilir / Edilmez</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 text-gray-600">
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Birincil</td>
                                            <td className="px-6 py-4">Gerçek zamanlı haber siteleri</td>
                                            <td className="px-6 py-4">Güncel haber yayınları</td>
                                            <td className="px-6 py-4 text-emerald-600 font-semibold">En güncel veriyi sunar</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Birincil</td>
                                            <td className="px-6 py-4">Akademik makale veritabanları</td>
                                            <td className="px-6 py-4">arXiv</td>
                                            <td className="px-6 py-4 text-emerald-600 font-semibold">Doğrulanabilir, izlenebilir kaynak</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Birincil</td>
                                            <td className="px-6 py-4">Profesyonel sektör veritabanları</td>
                                            <td className="px-6 py-4">Statista</td>
                                            <td className="px-6 py-4 text-emerald-600 font-semibold">Otoriter, yapılandırılmış veri</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Birincil</td>
                                            <td className="px-6 py-4">Resmi ürün dokümantasyonu</td>
                                            <td className="px-6 py-4">Yazılım/ürün dökümantasyonu</td>
                                            <td className="px-6 py-4 text-emerald-600 font-semibold">Birincil kaynak niteliği taşır</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">İkincil</td>
                                            <td className="px-6 py-4">Yüksek aktiviteli profesyonel forumlar</td>
                                            <td className="px-6 py-4">Reddit</td>
                                            <td className="px-6 py-4 text-blue-600 font-semibold">Topluluk doğrulaması sağlar</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">İkincil</td>
                                            <td className="px-6 py-4">Hakemli içerikler</td>
                                            <td className="px-6 py-4">Editöryal denetimden geçmiş yayınlar</td>
                                            <td className="px-6 py-4 text-blue-600 font-semibold">Dolaylı otorite sunar</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Kaçınılan</td>
                                            <td className="px-6 py-4">Güncel olmayan içerik</td>
                                            <td className="px-6 py-4">1 yıldan eski veriler</td>
                                            <td className="px-6 py-4 text-rose-600 font-semibold">Zaman damgası güvenilirliği düşük</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Kaçınılan</td>
                                            <td className="px-6 py-4">Anonim içerik</td>
                                            <td className="px-6 py-4">Yazar/kaynak bilgisi belirsiz sayfalar</td>
                                            <td className="px-6 py-4 text-rose-600 font-semibold">İzlenebilirlik sağlanamaz</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>
                                İçeriğinizde açık yazar bilgisi yoksa veya verileriniz 12 aydan eskiyse Perplexity sizi büyük olasılıkla atlar. Birincil katmana giremiyorsanız Reddit gibi yüksek aktiviteli platformlarda varlık göstermek ikincil alıntı için geçerli bir alternatiftir.
                            </p>

                            <h2 id="nasil-yapilandirilir" style={{ scrollMarginTop: "100px" }}>Perplexity'de Alıntılanmak İçin İçerik Nasıl Yapılandırılır?</h2>
                            <ol className="space-y-4 pl-6 mb-8 font-sans text-gray-600 leading-relaxed list-decimal">
                                <li>
                                    <strong>Önce Otorite Zeminini Kur:</strong> Perplexity'de başarı için içeriğin diğer güvenilir sayfalar tarafından desteklenmesi gerekir. Sayfanız tek başına bir ada gibi duruyorsa, ne kadar iyi yazılmış olursa olsun alıntılanma olasılığı düşüktür. Sektördeki referans yayınlar, araştırma kurumları veya tanınan medya organlarından bağlantı almayı önce hedefleyin.
                                </li>
                                <li>
                                    <strong>Her İddiayı Doğrudan Doğrulanabilir Hale Getir:</strong> İçerik kaynaklarının bağlantılar aracılığıyla doğrudan doğrulanabilir olması gerekir. "Araştırmalara göre" gibi muğlak atıflar işe yaramaz. Bir istatistik kullanıyorsanız orijinal kaynağa link verin. Perplexity'nin RAG mekanizması alıntıladığı içeriğin izini sürmek ister — bu zinciri siz kurmazsanız sistem başka bir kaynak seçer.
                                </li>
                                <li>
                                    <strong>İçeriği Soru-Cevap Mantığıyla Yapılandır:</strong> Başlıklarınızı gerçek kullanıcı sorularına göre yazın; her bölümün ilk bir-iki cümlesi soruyu yanıtlasın. "X durumunda Y yapılır" gibi net yargılarla açın. Uzun girişler ve teorik arka plan paragrafları alıntılanmaz.
                                </li>
                                <li>
                                    <strong>Güncelliği Sistematik Hale Getir:</strong> Gerçek zamanlı performans ve veri doğruluğu Perplexity GEO'nun temel kriterleri arasındadır. En güncel marka dinamiklerini ve sektör veri raporlarını düzenli olarak güncellemek gerekir. Her üç ayda bir şunu sorun: Bu sayfadaki istatistikler hâlâ geçerli mi? Değiştiyse sayfayı güncelleyin ve "Son güncelleme" tarihini görünür tutun.
                                </li>
                                <li>
                                    <strong>İçerik Yapısını Makinenin Okuyacağı Şekilde Düzenle:</strong> Düz metin blokları yerine hiyerarşik başlıklar (H2, H3), maddeli listeler ve tanım formatları kullanın. Perplexity'nin alıntı mekanizması pasaj bazlı çalışır; her paragraf tek bir fikri işlesin. FAQ ve HowTo schema markup eklemek bu okunabilirliği destekler.
                                </li>
                                <li>
                                    <strong>Dış Referanslarla Desteklenmiş Bir İçerik Ağı Oluştur:</strong> Aynı konuyu farklı açılardan ele alan birden fazla sayfanız varsa ve bunlar birbirini mantıklı biçimde linkliyorsa, Perplexity bu ağı bir otorite sinyali olarak okur. Dijital PR çalışmaları ve sektör yayınlarındaki atıflar bu ağı dışarıdan besler.
                                </li>
                            </ol>

                            <h2 id="perplexity-vs-chatgpt" style={{ scrollMarginTop: "100px" }}>Perplexity GEO ile ChatGPT AEO Arasındaki Fark</h2>
                            <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm bg-white">
                                <table className="min-w-full divide-y divide-gray-200 text-sm font-sans mb-0">
                                    <thead className="bg-gray-50 font-bold text-gray-900">
                                        <tr>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Kriter</th>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Perplexity GEO</th>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">ChatGPT AEO</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 text-gray-600">
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Kaynak gösterimi</td>
                                            <td className="px-6 py-4">Görünür, tıklanabilir atıflar</td>
                                            <td className="px-6 py-4">Genellikle gizli ya da sınırlı</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Optimizasyon önceliği</td>
                                            <td className="px-6 py-4">Kaynak otoritesi, E-E-A-T</td>
                                            <td className="px-6 py-4">İçerik güncelliği, sentezlenebilirlik</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Alıntı mekanizması</td>
                                            <td className="px-6 py-4">RAG tabanlı, kaynak hiyerarşisi belirleyici</td>
                                            <td className="px-6 py-4">Sentez ağırlıklı, model bilgisi + web karışımı</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Kullanıcıya sunulan</td>
                                            <td className="px-6 py-4">Yanıt + kaynak listesi</td>
                                            <td className="px-6 py-4">Tek akıcı yanıt</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">İçerik yapısının önemi</td>
                                            <td className="px-6 py-4">Yüksek — yapılandırılmış içerik doğrudan alıntılanır</td>
                                            <td className="px-6 py-4">Orta — model içeriği yeniden çerçeveler</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>
                                Perplexity için net başlıklar ve otorite sinyalleri (yazar bilgisi, referanslar, kurumsal güvenilirlik) belirleyicidir. Sadece Perplexity'yi hedefleyen bir yaklaşım AI arama trafiğinin büyük bölümünü dışarıda bırakır; Perplexity, ChatGPT, Gemini ve Google AI Overviews farklı kullanıcı kitlesine ve farklı alıntı mantığına sahiptir.
                            </p>

                            <h2 id="zaman-cizelgesi" style={{ scrollMarginTop: "100px" }}>Zaman Çizelgesi ve Başarı Metrikleri</h2>
                            <p>
                                İlk atıflar 4 ila 8 hafta içinde görünmeye başlar; kalıcı ve bileşik görünürlük 3 ila 6 ay içinde oluşur. Bileşik görünürlük mevcut domain otoritenize bağlı olarak hızlanır ya da yavaşlar — sıfırdan başlayan bir site için 6 ayın alt sınırı bile iyimser olabilir.
                            </p>
                            <p>
                                Takip için somut kriterler belirleyin: hangi sorgu kümelerinde alıntılandığınızı, alıntının yanıtın neresinde göründüğünü (giriş mi, ek kaynak mı) ve kaç farklı soru tipinde tekrarlandığını izleyin. Tek bir sorgudaki atıf başarı değil, sinyal sayılır.
                            </p>
                            <p>
                                <strong>Pratik kontrol noktası:</strong> 8. haftanın sonunda hedef sorgu listenizin en az %20'sinde alıntı almadıysanız içerik yapısını ve kaynak otoritesini yeniden gözden geçirin.
                            </p>

                            <h2 id="geo-ajanslari" style={{ scrollMarginTop: "100px" }}>Perplexity GEO Ajansları: Tescilli Araçlar ve Seçim Kriterleri</h2>
                            <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm bg-white">
                                <table className="min-w-full divide-y divide-gray-200 text-sm font-sans mb-0">
                                    <thead className="bg-gray-50 font-bold text-gray-900">
                                        <tr>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Ajans</th>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Tescilli Araç / Çerçeve</th>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Motor Kapsamı</th>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Hedef Müşteri Profili</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 text-gray-600">
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">TripleDart</td>
                                            <td className="px-6 py-4">Slate (içerik yapılandırma + şema + prompt testi)</td>
                                            <td className="px-6 py-4">Perplexity, ChatGPT (B2B odaklı)</td>
                                            <td className="px-6 py-4">Yalnızca B2B teknoloji ve SaaS şirketleri</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Pepper</td>
                                            <td className="px-6 py-4">Atlas platformu + VCR çerçevesi</td>
                                            <td className="px-6 py-4">Perplexity, ChatGPT, Gemini, Google AI Overviews, Claude</td>
                                            <td className="px-6 py-4">Çok motorlu görünürlük isteyen markalar</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Intero Digital</td>
                                            <td className="px-6 py-4">GRO (Generative Response Optimization) çerçevesi</td>
                                            <td className="px-6 py-4">Perplexity dahil çok motorlu</td>
                                            <td className="px-6 py-4">Site yapısı + entity + dijital PR entegrasyonu isteyen şirketler</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Animalz</td>
                                            <td className="px-6 py-4">Platform takibi yok; içerik kalitesi ve otorite inşası odaklı</td>
                                            <td className="px-6 py-4">ChatGPT, Perplexity, Google AI Overviews, Gemini</td>
                                            <td className="px-6 py-4">Uzun vadeli otorite inşası öncelikli markalar</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Omniscient Digital</td>
                                            <td className="px-6 py-4">Kamuya açık tescilli araç belirtilmemiş</td>
                                            <td className="px-6 py-4">ChatGPT, Perplexity, Google AI Overviews</td>
                                            <td className="px-6 py-4">Aktif çok motorlu optimizasyon isteyen şirketler</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">First Page Sage</td>
                                            <td className="px-6 py-4">Kamuya açık tescilli araç belirtilmemiş</td>
                                            <td className="px-6 py-4">Perplexity ve Claude açıkça belirtilmiş</td>
                                            <td className="px-6 py-4">Perplexity + Claude görünürlüğü öncelikli markalar</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Graphite</td>
                                            <td className="px-6 py-4">Kamuya açık tescilli araç belirtilmemiş</td>
                                            <td className="px-6 py-4">Ağırlıklı olarak ChatGPT ve Google AI Overviews</td>
                                            <td className="px-6 py-4">Google AI Overviews + ChatGPT odaklı şirketler</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Minuttia</td>
                                            <td className="px-6 py-4">Kamuya açık tescilli araç belirtilmemiş</td>
                                            <td className="px-6 py-4">Belirtilmemiş</td>
                                            <td className="px-6 py-4">~10M dolar ve üzeri ARR üreten köklü şirketler</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3>Ajans Seçerken Sormanız Gereken 4 Soru</h3>
                            <p>Bir ajansla görüşmeye oturduğunuzda şu kriterleri doğrudan sorun:</p>
                            <ul>
                                <li><strong>1. Kaynak inşa yöntemleri neler?</strong> Dijital PR ve entity optimizasyonunu nasıl yürüttüklerini somut olarak açıklayamazlarsa geçin.</li>
                                <li><strong>2. Takip sıklığı ne?</strong> Atlas gibi gerçek zamanlı platforma erişimleri var mı? Aylık raporla çalışan bir ajans motorun davranış değişikliklerini geç fark eder.</li>
                                <li><strong>3. Kaç motoru kapsıyorlar?</strong> Yalnızca Perplexity odaklı yaklaşım yapısal olarak yetersizdir; ChatGPT, Gemini ve Google AI Overviews kapsamı da şarttır.</li>
                                <li><strong>4. Perplexity'ye özgü kanıtları var mı?</strong> Perplexity alıntı oranlarında ölçülebilir iyileşme gösteren vaka çalışması isteyin.</li>
                            </ul>

                            <h3>GEO Ajansı Fiyatlandırma Modelleri</h3>
                            <p>Çoğu GEO ajansı fiyatlarını açıkça yayınlamaz; kapsam, hedeflenen motor sayısı ve içerik hacmine göre fiyatlandırma yapar:</p>
                            <ul>
                                <li><strong>Yönetimli Retainer:</strong> Sabit aylık ücret karşılığında alıntı izleme, içerik güncellemesi ve raporlama.</li>
                                <li><strong>Platform + Hizmet:</strong> Ajansın izleme aracına erişim ücreti üstüne stratejik içerik ve danışmanlık üretimi.</li>
                                <li><strong>Proje / Denetim:</strong> Tek seferlik çalışma. Mevcut içeriğin alıntılanabilirliğini değerlendirme ve öncelikli aksiyon listesi çıkarma.</li>
                            </ul>
                            <p>
                                <em>Teklif alırken şunu net söyleyin: kaç motor (Perplexity, ChatGPT, Gemini), hangi içerik kategorileri, aylık kaç yeni içerik. Bu üç bilgi olmadan gelen teklifler kıyaslanamaz.</em>
                            </p>
                        </div>

                        {/* SSS Accordion Section */}
                        <section id="faq" className="mt-16 pt-16 border-t border-gray-100" style={{ scrollMarginTop: "100px" }}>
                            <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">Sık Sorulan Sorular</h2>
                            <div className="space-y-4">
                                <details className="group bg-gray-50/50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none font-sans">
                                        <span className="font-bold text-gray-955 text-base pr-4">Perplexity GEO ile SEO aynı şey mi?</span>
                                        <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-200/60 pt-5 bg-white">
                                        Hayır. Klasik SEO Google'ın mavi link sıralamasını hedefler; Perplexity GEO yapay zekanın yanıt üretirken hangi kaynakları alıntılayacağını etkiler. Teknik örtüşmeler var — hızlı yükleme, temiz URL yapısı, açık yazar bilgisi gibi — ama GEO'nun asıl odağı içeriğin RAG sistemine uygun yapılandırılması ve güvenilir sayfalar tarafından desteklenmesidir.
                                    </div>
                                </details>

                                <details className="group bg-gray-50/50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none font-sans">
                                        <span className="font-bold text-gray-955 text-base pr-4">İçeriğim ne zaman alıntılanmaya başlar?</span>
                                        <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-200/60 pt-5 bg-white">
                                        İlk Perplexity atıfları yayından sonra 4 ila 8 hafta içinde görülür. Bileşik görünürlük — birden fazla sorguda düzenli olarak anılmak — mevcut site otoritesine bağlı olarak 3 ila 6 ay içinde oluşur.
                                    </div>
                                </details>

                                <details className="group bg-gray-50/50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none font-sans">
                                        <span className="font-bold text-gray-955 text-base pr-4">Yalnızca Perplexity'e odaklanmak yeterli mi?</span>
                                        <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-200/60 pt-5 bg-white">
                                        Yeterli değil. ChatGPT, Gemini ve Google AI Overviews da kullanıcıların yapay zeka yanıtı aldığı platformlardır. Üstelik Perplexity'nin alıntı kararı kısmen içeriğin diğer güvenilir kaynaklarca desteklenip desteklenmediğine bakar. Pratik yaklaşım: önce bir platformda derinleşin, ardından öğrendiklerinizi diğerlerine taşıyın.
                                    </div>
                                </details>

                                <details className="group bg-gray-50/50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none font-sans">
                                        <span className="font-bold text-gray-955 text-base pr-4">Hangi içerik türleri öncelikli alıntılanır?</span>
                                        <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-200/60 pt-5 bg-white">
                                        Perplexity, açık yazar bilgisi olmayan ve 1 yıldan eski verileri içeren içerikleri alıntı kaynağı olarak kullanmaktan kaçınır. İmzalı, tarihlenmiş, düzenli güncellenen; spesifik veri içeren, tek bir soruya doğrudan yanıt veren ve yapılandırılmış (başlık hiyerarşisi, liste, tablo) içerikler öne geçer.
                                    </div>
                                </details>

                                <details className="group bg-gray-50/50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none font-sans">
                                        <span className="font-bold text-gray-955 text-base pr-4">GEO ajansı tutmadan kendi başıma uygulayabilir miyim?</span>
                                        <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-200/60 pt-5 bg-white">
                                        Evet. Yazar bilgisi eklemek, içeriği güncel tutmak, soru-cevap formatında yapılandırmak ve dijital PR ile dış atıf kazanmak ajans gerektirmeyen adımlardır. Ajans farkı genellikle tescilli izleme araçlarında ve çok platformlu eş zamanlı optimizasyonda ortaya çıkar. Bütçeniz kısıtlıysa önce kendi içeriğinizi GEO prensiplerine göre düzenleyin; ajans yatırımını ölçülebilir bir trafik tabanı oluştuktan sonra değerlendirin.
                                    </div>
                                </details>

                                <details className="group bg-gray-50/50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none font-sans">
                                        <span className="font-bold text-gray-955 text-base pr-4">Ajanslar neden fiyatlarını açıklamıyor?</span>
                                        <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-200/60 pt-5 bg-white">
                                        Kapsam, hedeflenen motor sayısı ve içerik hacmine göre fiyatlandırma yapıyorlar; standart paketler henüz yerleşmedi. Teklif alırken şunu sorun: Kaç platform kapsanıyor? Aylık kaç içerik üretiliyor? Alıntı takibi nasıl raporlanıyor? Bu sorulara net yanıt veremeyen ajanslardan uzak durun.
                                    </div>
                                </details>
                            </div>
                        </section>

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
                                <Link href="/geo" className="inline-flex items-center justify-center w-full px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-black hover:-translate-y-1 transition-all shadow-md">
                                    GEO Danışmanlığı Hizmetini İncele
                                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </aside>

                        {/* Ayrıca Bakınız */}
                        <div className="mt-16 border-t border-gray-100 pt-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ayrıca Bakınız</h2>
                            <ul className="space-y-6 mb-8">
                                <li className="list-none">
                                    <Link href="/geo/chatgpt-geo" className="inline-flex items-center text-violet-600 hover:underline font-bold group text-lg">
                                        <span className="w-2 h-2 rounded-full bg-violet-600 mr-3 group-hover:scale-125 transition-all" />
                                        ChatGPT GEO: Yapay Zeka Yanıtlarında Kaynak Olarak Görünme Rehberi
                                    </Link>
                                    <p className="text-sm text-gray-500 ml-5 mt-1 leading-relaxed max-w-2xl">ChatGPT'nin yanıtlarında kaynak göstermesini sağlamanın tam rehberi.</p>
                                </li>
                                <li className="list-none">
                                    <Link href="/geo/llms-txt-nedir" className="inline-flex items-center text-violet-600 hover:underline font-bold group text-lg">
                                        <span className="w-2 h-2 rounded-full bg-violet-600 mr-3 group-hover:scale-125 transition-all" />
                                        llms.txt Nedir?
                                    </Link>
                                    <p className="text-sm text-gray-500 ml-5 mt-1 leading-relaxed max-w-2xl">Yapay zeka modellerinin sitenizi doğru taraması için kök dizin standardı.</p>
                                </li>
                            </ul>
                            <div className="pt-6 border-t border-gray-100">
                                <Link href="/geo" className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-gray-800 transition-colors">
                                    ← GEO Danışmanlığı ana sayfasına dön
                                </Link>
                            </div>
                        </div>

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
