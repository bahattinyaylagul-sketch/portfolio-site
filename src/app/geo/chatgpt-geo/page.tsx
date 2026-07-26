/* eslint-disable react/no-unescaped-entities */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ChatGPT GEO: Yapay Zeka Yanıtlarında Kaynak Olarak Görünmenin Tam Rehberi – Bahattin Yaylagül",
    description: "ChatGPT, Gemini ve Perplexity gibi yapay zeka arama motorlarının yanıtlarında markanızı kaynak olarak alıntılatmanın pratik yolları ve teknik optimizasyon rehberi.",
    alternates: {
        canonical: "/geo/chatgpt-geo",
    },
};

const headings = [
    { id: "nedir-fark-nedir", text: "GEO Nedir ve SEO'dan Farkı" },
    { id: "seo-vs-geo", text: "SEO vs GEO: Temel Farklar" },
    { id: "nereden-baslamali", text: "Site İçin Öncelik Sırası" },
    { id: "teknik-geo", text: "Teknik GEO: Schema & Yapı" },
    { id: "platform-karsilastirmasi", text: "Modellerin Karşılaştırması" },
    { id: "geo-basari-olcum", text: "GEO Başarısını Ölçme" },
    { id: "otorite-ve-guven", text: "Otorite & Güven Sinyalleri" },
    { id: "faq", text: "Sıkça Sorulan Sorular" },
];

export default function BlogPost() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://bahattinyaylagul.com" },
            { "@type": "ListItem", "position": 2, "name": "GEO Danışmanlığı", "item": "https://bahattinyaylagul.com/geo" },
            { "@type": "ListItem", "position": 3, "name": "ChatGPT GEO Rehberi", "item": "https://bahattinyaylagul.com/geo/chatgpt-geo" }
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
                                    <span>ChatGPT & AI Search</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
                                    ChatGPT GEO: Yapay Zeka Yanıtlarında Kaynak Olarak Görünmenin Tam Rehberi
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
                                        <span>6 dk okuma</span>
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
                                alt="ChatGPT GEO Cover 3D"
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
                    <span className="text-gray-600 font-bold truncate">ChatGPT GEO</span>
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
                            Yapay zeka modellerinin arama süreçlerinde kaynak göstermesini sağlamak, markanızın organik görünürlük geleceğini doğrudan belirler. İşte teknik ve içerik katmanında uygulamanız gereken tam GEO (Generative Engine Optimization) çerçevesi.
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
                            <h2 id="nedir-fark-nedir" style={{ scrollMarginTop: "100px" }}>GEO Nedir ve SEO'dan Farkı Neden Kritik?</h2>
                            <p>
                                <strong>GEO (Generative Engine Optimization)</strong>, ChatGPT, Gemini ve Perplexity gibi üretken yapay zeka motorlarının yanıtlarında markanızı kaynak olarak alıntılaması için içerik ve teknik yapınızı optimize etme pratiğidir. SEO'dan temel farkı şudur: arama motorunda 10 bağlantı arasında sıralanmak yerine, yapay zekanın ürettiği tek yanıtta yalnızca 2-3 kez anılan marka arasına girmeniz gerekir.
                            </p>
                            <p>
                                Teknoloji, seyahat ve finans alanındaki yayıncılar, AI özetleri devreye girdikten sonra %10-15 trafik düşüşü bildiriyor. Trafik kaybolmuyor — yapay zeka yanıtı içinde "eritiliyor." Kullanıcı cevabı alıyor, bağlantıya tıklamıyor. Anılmak ile hiç anılmamak arasındaki fark, artık görünürlüğün tamamı. SEO'da anahtar kelimeler ve geri bağlantılar için optimizasyon yaparsınız; GEO'da ise yapay zekanın bağlamsal anlayışı için — yani modelin sizin içeriğinizi güvenilir, alıntılanabilir ve konuya özgü bulması için.
                            </p>

                            <h2 id="seo-vs-geo" style={{ scrollMarginTop: "100px" }}>SEO vs GEO: Temel Farklar</h2>
                            <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm bg-white">
                                <table className="min-w-full divide-y divide-gray-200 text-sm font-sans mb-0">
                                    <thead className="bg-gray-50 font-bold text-gray-900">
                                        <tr>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Eksen</th>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">SEO</th>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">GEO</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 text-gray-600">
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900 bg-gray-50/50">Hedef</td>
                                            <td className="px-6 py-4">Arama sonuçlarında üst sıralarda yer almak</td>
                                            <td className="px-6 py-4">Yapay zeka yanıtında ismiyle anılmak</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900 bg-gray-50/50">Optimizasyon Nesnesi</td>
                                            <td className="px-6 py-4">Anahtar kelimeler, geri bağlantılar, sayfa otoritesi</td>
                                            <td className="px-6 py-4">Alıntılanabilir olgular, istatistikler, bağlamsal güvenilirlik</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900 bg-gray-50/50">Başarı Metriği</td>
                                            <td className="px-6 py-4">Sıralama pozisyonu, organik tıklama (CTR)</td>
                                            <td className="px-6 py-4">AI yanıtında alıntılanma sıklığı, kaynak gösterilme oranı</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900 bg-gray-50/50">Rekabet Yapısı</td>
                                            <td className="px-6 py-4">10 bağlantı arasında görünürlük yarışı</td>
                                            <td className="px-6 py-4">2-3 anılan marka arasına girme ya da hiç anılmama</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900 bg-gray-50/50">Kullanıcı Deneyimi</td>
                                            <td className="px-6 py-4">Kullanıcı bağlantılar arasından seçim yapar</td>
                                            <td className="px-6 py-4">Kullanıcı tek yanıt alır, tıklama opsiyoneli kalır</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 id="nereden-baslamali" style={{ scrollMarginTop: "100px" }}>Nereden Başlamalı? Küçük ve Orta Ölçekli Site İçin Öncelik Sırası</h2>
                            <p>
                                GEO'nun en çarpıcı tarafı şu: büyük reklam bütçesi değil, içerik kalitesi kazandırır. Aşağıdaki adımlar sınırlı zaman ve bütçeyle maksimum etkiyi hedefler; her adım bir öncekinin üstüne inşa edilir:
                            </p>

                            <ol className="space-y-4 pl-6 mb-8 font-sans text-gray-600 leading-relaxed list-decimal">
                                <li>
                                    <strong>Teknik erişim kapısını aç (robots.txt):</strong> Hiçbir içerik çalışması, yapay zeka botları sitenizi tarayamazsa işe yaramaz. robots.txt dosyanda <code>GPTBot</code>, <code>AnthropicBot</code> ve <code>PerplexityBot</code>'a erişim izni verildiğini kontrol et. GPTBot'u engellersen gelecekteki AI alıntılarını doğrudan kaybedersin. Bu adım 10 dakika sürer ve maliyeti sıfırdır.
                                </li>
                                <li>
                                    <strong>llms.txt dosyası oluştur:</strong> robots.txt botların sitenizi tarayıp tarayamayacağını belirlerken, llms.txt site sahiplerinin hangi bölümler için AI eğitim izni tanıdığını bildirdiği önerilen bir formattır. Henüz zorunlu bir standart değil, ancak modellerin içeriğini daha güvenle kullanmasına zemin hazırlıyor. Sitenin kök dizinine kısa bir llms.txt eklemek, özellikle içerik ağırlıklı sayfalarda sinyali güçlendirir.
                                </li>
                                <li>
                                    <strong>Mevcut içeriği answer-first formatına dönüştür:</strong> Yeni içerik üretmeden önce en çok trafik alan 3-5 sayfayı düzenle. Ana sorunun yanıtı ilk 100 kelime içinde yer almalı. Her paragraf bağımsız okunduğunda da anlamlı olmalı; "yukarıda belirttiğimiz gibi" tarzı bağımlı geçişler ChatGPT'nin pasaj çıkarma mantığına aykırı çalışır. Kısa paragraflar modelin daha az token üzerinden tahmin yapmasını sağlar; bu da halüsinasyon riskini azaltır.
                                </li>
                                <li>
                                    <strong>Her hizmet/ürün sayfasına SSS bölümü ekle:</strong> Bir kullanıcı ChatGPT'ye "X nedir?" diye sorduğunda, model tam da bu soru-cevap yapısını alıntılamayı tercih eder. Her sayfada en az 4-5 gerçek kullanıcı sorusunu kısa ve doğrudan cevaplarıyla yaz. Soruları müşteri destek maillerinden veya Google Search Console'daki sorgu raporlarından çekebilirsin.
                                </li>
                                <li>
                                    <strong>FAQPage schema ile yapılandırılmış veri ekle:</strong> SSS bölümleri yazdıktan sonra bunları JSON-LD formatında işaretle. FAQPage schema, içeriğin hem Bing arama indeksine hem de yapay zeka modellerine makine tarafından okunabilir biçimde sunulmasını sağlar. Ücretsiz schema üreticileriyle 15-20 dakikada sayfaya eklenebilir.
                                </li>
                                <li>
                                    <strong>Entity sinyallerini dışarıya taşı:</strong> Wikidata girişi, Crunchbase profili ve Google Business Profile, AI tarafından entity sinyali olarak değerlendirilen platformlardır. Mümkünse bir Wikipedia sayfası da oluştur; bu adım markanın model belleğinde bağımsız bir varlık olarak kodlanmasına yardımcı olur. Bu profillerin hepsi ücretsiz; tek seferlik bir yatırım.
                                </li>
                                <li>
                                    <strong>Harici otoriter kaynaklarda anılmayı hedefle:</strong> Ticari makaleler, sektör dizinleri ve medya haberleri GEO'nun kaynak otoritesi direğini besler. Kendi sitenizde ne kadar iyi içerik yazarsanız yazın, dış kaynaklar sizi zikretmiyorsa AI modelleri güvenilirliği teyit edemez. Hedef: ayda en az 1-2 harici atıf. Sektör yayınlarına konuk yazı teklif et, araştırma verisi paylaş veya uzman yorumu sun.
                                </li>
                            </ol>
                            <p>
                                <em>GEO'nun üç temel direği — teknik okunabilirlik, içerik kalitesi, kaynak otoritesi — bu sırayla ele alındığında, sınırlı bütçeyle bile ölçülebilir bir görünürlük kazanımı mümkün.</em>
                            </p>

                            <h2 id="teknik-geo" style={{ scrollMarginTop: "100px" }}>Teknik GEO: Schema, Yapı ve Bot Erişimi</h2>
                            <h3>JSON-LD ve Sektöre Göre Schema Seçimi</h3>
                            <p>
                                JSON-LD schema, sayfa türünü, yazarı ve yayın tarihini bildirerek AI modellerindeki güven puanlarını artırır. Schema.org işaretlemesi sayesinde yapay zeka, şirketin ne yaptığını ve hangi hizmetleri sunduğunu doğrudan yapılandırılmış veri katmanından okur.
                            </p>

                            <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm bg-white">
                                <table className="min-w-full divide-y divide-gray-200 text-sm font-sans mb-0">
                                    <thead className="bg-gray-50 font-bold text-gray-900">
                                        <tr>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Sektör / İçerik Türü</th>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Önerilen Schema</th>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Ne Sağlar</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 text-gray-600">
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Hukuk</td>
                                            <td className="px-6 py-4"><code>LocalBusiness + Attorney</code></td>
                                            <td className="px-6 py-4">İsim, hizmet ve konum bilgilerini Google Bilgi Grafiği'ne iletir</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Sağlık</td>
                                            <td className="px-6 py-4"><code>MedicalOrganization + Physician</code></td>
                                            <td className="px-6 py-4">Doktor profilleri için doğrulanabilir olgusal veri sağlar</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">E-ticaret</td>
                                            <td className="px-6 py-4"><code>Product</code></td>
                                            <td className="px-6 py-4">Yorumları, fiyatları ve özellikleri AI'a sunulabilir formatta iletir</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Veri odaklı içerik</td>
                                            <td className="px-6 py-4"><code>Dataset + DataCatalog</code></td>
                                            <td className="px-6 py-4">İçeriğin "kaynak" olarak sınıflandırılmasını güçlendirir</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Ses / asistan</td>
                                            <td className="px-6 py-4"><code>Speakable</code></td>
                                            <td className="px-6 py-4">Hangi paragrafların sesli okunacağını siz belirlersiniz</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Sertifika / akreditasyon</td>
                                            <td className="px-6 py-4"><code>Certification</code></td>
                                            <td className="px-6 py-4">Uzmanlığın belgeli kanıtını makine tarafından okunabilir kılar</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Görseller / videolar</td>
                                            <td className="px-6 py-4"><code>ImageObject + VideoObject</code></td>
                                            <td className="px-6 py-4">Görsellerin ve videoların AI tarafından alıntılanmasını kolaylaştırır</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Soru-cevap içeriği</td>
                                            <td className="px-6 py-4"><code>FAQPage + HowTo</code></td>
                                            <td className="px-6 py-4">Hem zengin arama sonucu hem AI alıntısı için çift kazanım</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3>Dinamik İçeriğin Sessiz Riski</h3>
                            <p>
                                JavaScript ile render edilen bir SSS bölümü, kullanıcı ekranında görünse de GPTBot veya Bingbot sayfayı taradığında o içerik henüz DOM'a yazılmamış olabilir. Schema'nız var, içeriğiniz iyi — ama bot boş bir kutu görüyor.
                            </p>
                            <p>
                                <strong>Pratik kontrol:</strong> Sayfanızı curl ile veya Google Search Console'un "URL İnceleme" aracında "Taranmış sayfa" görünümüyle açın. Gördüğünüz içerik kullanıcının gördüğüyle eşleşmiyorsa bot da aynı boşluğu görüyor demektir.
                            </p>

                            <h3>Core Web Vitals: Bot Erişiminin Ön Koşulu</h3>
                            <p>
                                Largest Contentful Paint 2,5 saniyenin altında, Total Blocking Time ise 200 milisaniyenin altında olmalıdır. Bu eşiklerin aşılması botların sayfayı tam tarayamadan bağlantıyı kesmesine yol açabilir. Görseller AVIF veya WebP formatında sunulmalı ve HTTP/2 ya da HTTP/3 üzerinde barındırılmalıdır. HTTPS güvenliği, erişilebilir site haritası ve kırık bağlantı olmaması da teknik güven sinyalleri arasında sayılır.
                            </p>

                            <h2 id="platform-karsilastirmasi" style={{ scrollMarginTop: "100px" }}>Platform Karşılaştırması: ChatGPT, Perplexity ve Gemini</h2>
                            <p>
                                Her platform aynı içeriği farklı biçimde değerlendirir. Bu farkları bilmeden "genel GEO" yapmak, hedef tahtasız ok atmak gibidir.
                            </p>

                            <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm bg-white">
                                <table className="min-w-full divide-y divide-gray-200 text-sm font-sans mb-0">
                                    <thead className="bg-gray-50 font-bold text-gray-900">
                                        <tr>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Platform</th>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">İndeks Kaynağı</th>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Kaynak Gösterme</th>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Özel Optimizasyon Taktiği</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 text-gray-600">
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">ChatGPT (web erişimli)</td>
                                            <td className="px-6 py-4">Bing arama indeksi</td>
                                            <td className="px-6 py-4">GPT-4o tıklanabilir alıntı ve URL gösterir</td>
                                            <td className="px-6 py-4">Bing Webmaster Tools'a site ekle; OAI-SearchBot'u izinli bırak</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">ChatGPT (eğitim verisi)</td>
                                            <td className="px-6 py-4">Eğitim kesim tarihi öncesi veri</td>
                                            <td className="px-6 py-4">URL göstermez</td>
                                            <td className="px-6 py-4">Uzun süredir yayında, yüksek yetkili kaynaklarca atıflanmış içerik üret</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Perplexity AI</td>
                                            <td className="px-6 py-4">Kendi indeksi + aktif web tarama</td>
                                            <td className="px-6 py-4">Her cümle için ayrı kaynak alıntısı</td>
                                            <td className="px-6 py-4">URL gönderim portalını kullan; cümle düzeyinde alıntılanabilir kısa paragraflar yaz</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Google Gemini</td>
                                            <td className="px-6 py-4">Google arama indeksi</td>
                                            <td className="px-6 py-4">Değişken</td>
                                            <td className="px-6 py-4">E-E-A-T sinyallerini güçlendir; mevcut Google SEO altyapısını kullan</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Microsoft Copilot</td>
                                            <td className="px-6 py-4">Bing arama indeksi</td>
                                            <td className="px-6 py-4">Kaynak bağlantıları gösterir</td>
                                            <td className="px-6 py-4">Bing Webmaster Tools + URL gönderim portalı</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3>ChatGPT'nin İki Farklı Botu: OAI-SearchBot ve GPTBot Ayrımı</h3>
                            <p>
                                GPTBot eğitim verisi toplamak için çalışır; bu botun ziyareti içeriğinizi model ağırlıklarına dahil edebilir ama gerçek zamanlı yanıtlarda sizi kaynak göstermez. OAI-SearchBot ise web erişimli ChatGPT'nin anlık arama sorgularında kullandığı bottur. Gerçek zamanlı alıntı almak istiyorsanız OAI-SearchBot'u engellemiyor olmanız şart.
                            </p>
                            <pre className="bg-gray-50 p-4 border border-gray-200 rounded-xl my-4 text-xs font-mono text-gray-700 leading-relaxed">
{`User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /`}
                            </pre>
                            <p>
                                GPTBot'u engellemek gelecekteki eğitim verisi katkısını keser; OAI-SearchBot'u engellemek ise web erişimli ChatGPT'nin sizi bugün alıntılamasını doğrudan önler.
                            </p>

                            <h3>Perplexity'nin URL Gönderim Portalı</h3>
                            <p>
                                Perplexity, Copilot ile birlikte yeni veya güncellenmiş URL'leri hızlandıran bir gönderim portalı sunar. Yeni içerik yayımladığınızda bu portala URL göndermek, organik keşfi beklemeye kıyasla indekslenme süresini kısaltır. Perplexity'nin her cümle için ayrı alıntı yapması şu anlama gelir: tek uzun paragraf yerine, her biri bağımsız bir iddia içeren kısa paragraflar yazmak alıntılanma olasılığını artırır.
                            </p>

                            <h2 id="geo-basari-olcum" style={{ scrollMarginTop: "100px" }}>GEO Başarısını Ölçme: Araçlar, Metrikler ve Zaman Çizelgesi</h2>
                            <p>
                                GEO'da geleneksel SEO'daki gibi tek bir sıralama paneli yok; birden fazla araç, birden fazla modelde paralel izleme şart.
                            </p>

                            <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm bg-white">
                                <table className="min-w-full divide-y divide-gray-200 text-sm font-sans mb-0">
                                    <thead className="bg-gray-50 font-bold text-gray-900">
                                        <tr>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Araç</th>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Ne Ölçer</th>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Nasıl Kurulur</th>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Hangi Modelleri Kapsar</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 text-gray-600">
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">AI Search Grader</td>
                                            <td className="px-6 py-4">0–100 arası AI Search Score</td>
                                            <td className="px-6 py-4">Domain ve hedef sorgu girilir; anında rapor üretir</td>
                                            <td className="px-6 py-4">ChatGPT, Gemini, Claude, Mistral, Llama 4</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">GA4 (Regex Filtresi)</td>
                                            <td className="px-6 py-4">ChatGPT ve OpenAI kaynaklı referral trafik</td>
                                            <td className="px-6 py-4">Kaynak alanına chatgpt|openai regex'i tanımlanır</td>
                                            <td className="px-6 py-4">ChatGPT / OpenAI</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">GA4 (Özel Boyutlar)</td>
                                            <td className="px-6 py-4">AI platformlarından gelen trafiğin kaynağa göre dağılımı</td>
                                            <td className="px-6 py-4">chat.openai.com, perplexity.ai, gemini.google.com için boyutlar eklenir</td>
                                            <td className="px-6 py-4">ChatGPT, Perplexity, Gemini</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">UTM Parametreleri</td>
                                            <td className="px-6 py-4">AI kaynaklı tıklamaların kampanya bazında izlenmesi</td>
                                            <td className="px-6 py-4">URL'lere ?utm_source=chatgpt&utm_campaign=GEO eklenir</td>
                                            <td className="px-6 py-4">ChatGPT (manuel)</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Brand24 / Talkwalker</td>
                                            <td className="px-6 py-4">AI yanıt kutularındaki marka alıntı sıklığı</td>
                                            <td className="px-6 py-4">Marka adı ve domain için izleme akışı kurulur</td>
                                            <td className="px-6 py-4">Genel AI yanıt kutuları</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Manuel Model Testi</td>
                                            <td className="px-6 py-4">Belirli sorularda şirketin yanıtta yer alıp almadığı</td>
                                            <td className="px-6 py-4">ChatGPT'ye müşterinin sorabileceği soru sorulur</td>
                                            <td className="px-6 py-4">Test edilen her model</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Perplexity AI</td>
                                            <td className="px-6 py-4">Alıntı bazlı kaynak görünürlüğü</td>
                                            <td className="px-6 py-4">Her yanıttaki kaynak listesi manuel incelenir</td>
                                            <td className="px-6 py-4">Perplexity AI</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">Bing Webmaster Tools</td>
                                            <td className="px-6 py-4">Bing AI yanıtlarındaki kaynak bağlantıları</td>
                                            <td className="px-6 py-4">Bing Chat'te hedef sorgular test edilir</td>
                                            <td className="px-6 py-4">Microsoft Copilot / Bing AI</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3>GA4'te Pratik Kurulum</h3>
                            <ul>
                                <li><strong>Regex filtresi:</strong> GA4 &gt; Raporlar &gt; Trafik Kaynağı bölümünde özel segment oluşturun. Kaynak alanına <code>chatgpt|openai</code> yazın.</li>
                                <li><strong>UTM etiketleme:</strong> Dış linklerde URL'lerinize <code>?utm_source=chatgpt&amp;utm_campaign=GEO</code> ekleyin. AI platformlarından gelen tıklamalar kampanya raporunda ayrı görünür.</li>
                                <li><strong>Özel boyutlar:</strong> chat.openai.com, perplexity.ai ve gemini.google.com için GA4'e ayrı özel boyutlar tanımlayın. Hangi AI platformunun daha fazla trafik gönderdiğini platform bazında karşılaştırabilirsiniz.</li>
                            </ul>

                            <h3>6–12 Haftalık Beklenti Zaman Çizelgesi</h3>
                            <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm bg-white">
                                <table className="min-w-full divide-y divide-gray-200 text-sm font-sans mb-0">
                                    <thead className="bg-gray-50 font-bold text-gray-900">
                                        <tr>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Hafta</th>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Beklenti</th>
                                            <th scope="col" className="px-6 py-4 text-left font-bold tracking-wider">Yapılacak</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 text-gray-600">
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">1–2</td>
                                            <td className="px-6 py-4">Teknik altyapı hazır</td>
                                            <td className="px-6 py-4">Schema kurulumu, robots.txt, GPTBot erişimi doğrulama</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">3–4</td>
                                            <td className="px-6 py-4">İlk indeksleme sinyalleri</td>
                                            <td className="px-6 py-4">Bing ve Perplexity'de değişiklikler haftalar içinde indekslenebilir; manuel test başlatılır</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">5–8</td>
                                            <td className="px-6 py-4">Erken alıntı kazanımları</td>
                                            <td className="px-6 py-4">Bing Chat ve Perplexity'de ilk kaynak görünürlüğü; GA4 regex filtresi veri toplamaya başlar</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">9–12</td>
                                            <td className="px-6 py-4">Ölçülebilir kazanımlar</td>
                                            <td className="px-6 py-4">Teknik düzeltmeler ve içerik yenilemelerinden sonra 8-12 hafta içinde ölçülebilir AI alıntı artışı</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold text-gray-900">12+</td>
                                            <td className="px-6 py-4">Aylık rutin</td>
                                            <td className="px-6 py-4">GEO görünürlüğü aylık periyotta izlenir; ilk sonuçlar 6–12 hafta sonra netleşir</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>
                                Gelişmiş GEO denetimleri birden fazla modelde onlarca sorgunun sistematik olarak test edilmesini kapsar: hedef kitlenizin sorabileceği 20-30 sorgu listesi hazırlayın, ChatGPT, Gemini ve Perplexity'de çalıştırın, sitenizin kaç yanıtta kaynak göründüğünü sayın. AI Search Grader bu süreci kısmen otomatikleştirir.
                            </p>

                            <h2 id="otorite-ve-guven" style={{ scrollMarginTop: "100px" }}>Otorite ve Güven Sinyalleri: AI Bir Kaynağı Neden Dışlar?</h2>
                            <h3>Duygu Sinyalleri Düşündüğünüzden Daha Fazla Ağırlık Taşıyor</h3>
                            <p>
                                AI modelleri G2, Capterra ve TrustRadius gibi yazılım değerlendirme platformlarını duygu sinyalleri için aktif olarak tarar. Trustpilot ve Google Business Profile'daki müşteri yorumları da bu değerlendirmenin parçasıdır. Web siteniz teknik olarak kusursuz olsa bile, üçüncü taraf platformlardaki olumsuz veya tutarsız geri bildirimler sizi yanıt dışı bırakabilir. Yalnızca kendi içeriğinizi optimize etmek yeterli değil; markanızın dışarıda nasıl göründüğünü düzenli kontrol etmeniz gerekiyor.
                            </p>

                            <h3>Knowledge Panel Tutarsızlığı Sessiz Bir Kural Dışı Edici</h3>
                            <p>
                                Google Knowledge Panel'in doğruluğu ve güncelliği, AI'ın markayı referans göstermesini doğrudan etkiler. Panel'de yanlış bir kategori, eski bir adres veya çelişkili bir açıklama varsa, AI bu tutarsızlığı güven sorunu olarak okuyabilir. Wikipedia sayfası ve Wikidata girişi, markanın AI tarafından ayrı ve doğrulanabilir bir varlık olarak tanınmasına yardımcı olur.
                            </p>
                            <p>
                                <strong>Kontrol listesi:</strong> Knowledge Panel → Wikipedia/Wikidata → Schema markup. Bu üçü birbiriyle çelişiyorsa AI tutarsız bir varlıkla karşılaşıyor demektir.
                            </p>

                            <h3>Niş Kazanır, Genel Kaybeder</h3>
                            <p>
                                Niş uzmanlık ve yerel veriler yanıt kalitesi puanlamasında genel kurumsal sayfaları geride bırakabilir. Büyük bir markanın "Türkiye'de SaaS fiyatlandırma stratejileri" hakkında yazdığı genel bir sayfa, bu konuya odaklanmış küçük bir analist bloguna atıf yarışında kaybedebilir. AI spesifik soruları yanıtlamak için spesifik kaynaklara ihtiyaç duyar.
                            </p>

                            <h3>E-E-A-T Sinyalleri Somut Olmalı</h3>
                            <p>
                                E-E-A-T; yazar biyografileri, sertifikalar, vaka çalışmaları ve müşteri yorumlarını kapsar. Bunların sayfada görünmesi gerekir — "hakkımızda" sayfasında gömülü kalmış bir cümle yetmez. JSON-LD yapılandırılmış veri, answer-first metin yazarlığı ve E-E-A-T sinyallerini güçlendirmek binlerce AI yanıtının analizine göre atıf olasılığını artıran en temel teknik koşullardır. Orijinal araştırma ve teknik incelemeler bu sinyali güçlendirir çünkü başka kaynakların sizi alıntılamasını sağlar. Yüksek kaliteli backlink kazanmak da aynı mekanizmayla çalışır: AI modellerinin eğitim verilerinde markanızı otoriter kaynak olarak konumlandırır.
                            </p>
                            <p>
                                <em>LinkedIn veya Twitter'da binlerce kez paylaşılan içerikler AI eğitim korpusuna girme olasılığını artırır; sosyal medyayı GEO stratejisinin dışında tutmayın.</em>
                            </p>
                        </div>

                        {/* SSS Accordion Section */}
                        <section id="faq" className="mt-16 pt-16 border-t border-gray-100" style={{ scrollMarginTop: "100px" }}>
                            <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">Sık Sorulan Sorular</h2>
                            <div className="space-y-4">
                                <details className="group bg-gray-50/50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none font-sans">
                                        <span className="font-bold text-gray-955 text-base pr-4">GEO sonuçları ne kadar sürede görülür?</span>
                                        <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-200/60 pt-5 bg-white">
                                        Teknik düzeltmeler ve içerik yenilemelerinden sonra 8-12 hafta içinde ölçülebilir AI alıntı kazanımları beklenmeli. GEO optimizasyonu tek seferlik bir düzeltme değil, süregelen bir süreçtir; görünürlüğü aylık periyotlarla takip etmeyi öneririm.
                                    </div>
                                </details>

                                <details className="group bg-gray-50/50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none font-sans">
                                        <span className="font-bold text-gray-955 text-base pr-4">GPTBot'u engellemek zararlı mı?</span>
                                        <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-200/60 pt-5 bg-white">
                                        Evet. GPTBot'u robots.txt ile engellemek gelecekteki AI alıntılarını doğrudan olumsuz etkiler. Bot erişimini açık tutmak GEO'nun teknik temellerinden biridir.
                                    </div>
                                </details>

                                <details className="group bg-gray-50/50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none font-sans">
                                        <span className="font-bold text-gray-955 text-base pr-4">Küçük bir site büyük markayı geçebilir mi?</span>
                                        <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-200/60 pt-5 bg-white">
                                        Geçebilir. Küçük bir işletme, mükemmel içerik ve iyi optimize edilmiş bir siteyle büyük bir şirketten daha sık atıf alabilir. AI sistemleri marka büyüklüğünü değil, içeriğin soruya ne kadar net ve güvenilir yanıt verdiğini değerlendirir — özellikle büyük rakiplerin henüz GEO uygulamaya başlamamış olduğu düşünüldüğünde.
                                    </div>
                                </details>

                                <details className="group bg-gray-50/50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none font-sans">
                                        <span className="font-bold text-gray-955 text-base pr-4">llms.txt dosyası zorunlu mu?</span>
                                        <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-200/60 pt-5 bg-white">
                                        Zorunlu değil, ama işlevsel. Site sahiplerinin belirli bölümler için AI eğitim izinlerini ayarlamasına olanak tanıyan önerilen bir formattır. Kurulumu basit olduğu için eklemeyi öneririm; zarar vermez, potansiyel faydası var.
                                    </div>
                                </details>

                                <details className="group bg-gray-50/50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none font-sans">
                                        <span className="font-bold text-gray-955 text-base pr-4">ChatGPT eğitim verisini mi kullanıyor, yoksa gerçek zamanlı mı tarıyor?</span>
                                        <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-200/60 pt-5 bg-white">
                                        İkisi de — ama duruma göre değişir. GPT-4 gibi büyük dil modelleri bazı bilgileri eğitim verisinden üretir; ancak gerçek zamanlı web erişimi gerektiğinde Bing'in arama indeksini kullanır. İçeriğinizin hem Bing'de indekslenmiş hem de eğitim verisi olarak değer taşıyacak kalitede olması gerekiyor.
                                    </div>
                                </details>

                                <details className="group bg-gray-50/50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none font-sans">
                                        <span className="font-bold text-gray-955 text-base pr-4">GEO için ayrı sayfa açmak gerekiyor mu?</span>
                                        <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-200/60 pt-5 bg-white">
                                        Hayır. Mevcut sayfalarınızı AI yanıtlarına uygun biçimde yapılandırmak yeterlidir. Yeni sayfalar açmak yerine mevcut içeriği netleştirmek, FAQPage schema eklemek ve otorite sinyallerini güçlendirmek çok daha verimli bir başlangıç noktasıdır.
                                    </div>
                                </details>

                                <details className="group bg-gray-50/50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none font-sans">
                                        <span className="font-bold text-gray-955 text-base pr-4">Türkçe içerik GEO'da dezavantajlı mı?</span>
                                        <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-200/60 pt-5 bg-white">
                                        Kısmen evet, ama aynı zamanda bir avantaj. Türkçe içerik havuzu İngilizceye kıyasla çok daha küçük; kaliteli ve yapılandırılmış Türkçe içerik bu boşluğu dolduruyor ve rekabetin düşük olduğu bir alanda öne çıkma şansı yaratıyor.
                                    </div>
                                </details>
                            </div>
                        </section>

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
