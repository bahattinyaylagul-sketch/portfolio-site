"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const headings = [
    { id: "llms-txt-nedir", text: "1. llms.txt Nedir?" },
    { id: "format-yapi", text: "2. Format ve Yapı" },
    { id: "robots-txt-farki", text: "3. robots.txt ile Farkı" },
    { id: "etkinlik-analizi", text: "4. Etkinlik Analizi: 300.000 Domain" },
    { id: "nasil-olusturulur", text: "5. Nasıl Oluşturulur?" },
    { id: "maliyet-fayda", text: "6. Maliyet-Fayda Değerlendirmesi" },
    { id: "sik-sorulan-sorular", text: "7. Sık Sorulan Sorular" },
];

const faqItems = [
    {
        q: "llms.txt dosyası zorunlu mu?",
        a: "Hayır, llms.txt hiçbir platform tarafından zorunlu tutulmamaktadır. Direktiflere uyum tamamen LLM veya AI ajanının tercihine bırakılmıştır; dosyayı oluşturmazsanız yasal, teknik veya SEO açısından herhangi bir yaptırımla karşılaşmaz, arama sıranız düşmez.",
    },
    {
        q: "Hangi AI sistemleri llms.txt'yi okuyor?",
        a: "Kesin ve güncel bir liste bulunmuyor. Bazı SEO log analizleri GPTBot'un zaman zaman llms.txt dosyalarını çektiğini gösterse de bu davranış düzensiz ve doğrulanmamıştır. Google AI Overviews, Bing Copilot ve Perplexity bu dosyayı resmi olarak desteklediğine dair açıklama yapmamıştır.",
    },
    {
        q: "llms.txt SEO'ya katkı sağlar mı?",
        a: "Doğrudan SEO katkısı istatistiksel olarak kanıtlanmamıştır. SE Ranking analizi 300.000 domaini inceledi; llms.txt varlığı ile AI atıf sıklığı arasında korelasyon bulunamadı. Google henüz bu dosyayı bir sıralama sinyali olarak tanımadığı için klasik arama performansınızı etkilemez.",
    },
    {
        q: "llms.txt ne sıklıkla güncellenmelidir?",
        a: "Yeni sayfa, ürün, hizmet veya önemli içerik değişikliğinde llms.txt güncellenmesi önerilir. Eski kalmış bir llms.txt, LLM sisteminin sitenizi yanlış özetlemesine yol açabilir; bu durum dosyanın temel amacına ters düşer ve AI görünürlüğünü olumsuz etkileyebilir.",
    },
    {
        q: "llms.txt ile llms-full.txt arasındaki fark nedir?",
        a: "llms.txt, sitenin en kritik sayfalarına işaret eden kısaltılmış bir rehber dosyasıdır; model burayı okuduktan sonra istediği sayfaları ayrıca çeker. llms-full.txt ise tüm site içeriğini tek düz metin dosyasında birleştirir, böylece model ek istek göndermeden tüm içeriğe ulaşır.",
    },
    {
        q: "llms.txt olmayan siteler AI'da hiç görünmez mi?",
        a: "Hayır, bu yanlış bir yargıdır. llms.txt Eylül 2024'te ortaya çıkmış ihtiyari bir standarttır ve AI görünürlüğünün ön koşulu kesinlikle değildir. LLM sistemleri bu dosyayı hiç olmayan milyonlarca siteyi zaten tararken içerik kalitesi ve otorite sinyallerini daha belirleyici faktör olarak kullanmaktadır.",
    },
];

const proseBase =
    "prose prose-lg max-w-none prose-headings:font-sans prose-headings:font-bold prose-headings:text-foreground prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-gray-800 prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3 prose-h4:text-gray-900 prose-h4:font-bold prose-p:font-sans prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-6 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2 prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6 prose-ol:space-y-2 prose-li:text-gray-600 prose-li:leading-relaxed prose-strong:font-bold prose-strong:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-gray-800 prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-6";

function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy", err);
        }
    };
    return (
        <button
            onClick={handleCopy}
            className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold bg-gray-800 hover:bg-gray-700 text-gray-300 rounded border border-gray-700 transition-colors z-20"
        >
            {copied ? "Kopyalandı!" : "Kopyala"}
        </button>
    );
}

export default function ArticleContent() {
    const codeBlock1 = `# Örnek Site\n\n> Yazılım geliştirici araçları üzerine dokümantasyon sitesi.\n\n## Kılavuzlar\n\n- [Kurulum](https://example.com/docs/setup): Ortam kurulumu adım adım.\n- [API Referansı](https://example.com/docs/api): Tüm endpoint'lerin listesi.`;
    const codeBlock2 = `# Site Adı\n\n> Sitenizin tek paragraflık özeti. LLM bu satırı önce okur.\n\n## Hakkında\nSitenizin ne yaptığını, kimi hedeflediğini açıklayan metin.\n\n## Kaynaklar\n- [Ürün Sayfası](https://example.com/urun)\n- [Blog](https://example.com/blog)\n- [SSS](https://example.com/sss)`;

    return (
        <div className="grid lg:grid-cols-[250px_1fr] gap-12 items-start relative">
            {/* TOC Sidebar */}
            <aside
                className="hidden lg:block sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto pr-4 custom-scrollbar"
                aria-label="İçindekiler"
            >
                <div>
                    <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2 pl-2">
                        <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                        İÇİNDEKİLER
                    </h2>
                    <nav className="space-y-1 border-l-2 border-gray-100">
                        {headings.map((heading, i) => (
                            <a
                                key={i}
                                href={`#${heading.id}`}
                                className="block py-3 pl-4 text-sm text-gray-600 hover:text-blue-700 hover:border-l-2 hover:border-blue-700 -ml-0.5 transition-all leading-relaxed"
                            >
                                <span className="font-mono text-xs text-gray-400 mr-2 font-medium">
                                    {(i + 1).toString().padStart(2, "0")}
                                </span>
                                {heading.text}
                            </a>
                        ))}
                    </nav>
                </div>
            </aside>

            {/* Main Article */}
            <article className="min-w-0">
                {/* Section 1 */}
                <div className={`${proseBase} mb-16`}>
                    <h2 id="llms-txt-nedir">1. llms.txt Nedir?</h2>
                    <p>
                        llms.txt, büyük dil modellerinin bir web sitesinin en kritik içeriklerini daha kolay bulup
                        anlaması için kök dizine yerleştirilen, Markdown formatında yazılmış{" "}
                        <strong>önerilen bir metin dosyasıdır</strong>. Eylül 2024&apos;te Avustralyalı teknolog Jeremy
                        Howard tarafından ortaya atılan bu standart, robots.txt ve XML sitemap protokollerine benzer bir
                        mantıkla çalışır; ancak hedef kitle arama motorları değil, ChatGPT, Claude ve Perplexity gibi
                        LLM tabanlı yapay zeka sistemleridir.
                    </p>
                    <p>
                        İki somut sorunu hedef alır: LLM&apos;lerin bağlam pencereleri çoğu siteyi bütünüyle işlemek
                        için yeterince geniş değildir; reklamlar, JavaScript ve navigasyon elementleriyle dolu HTML
                        sayfalarını düz metne dönüştürmek ise hata payı yüksek bir işlemdir. llms.txt bu iki soruna
                        karşı modele &quot;işte önemli olan bu&quot; der — siteyi taratmak yerine içeriği
                        önceliklendirerek sunar.
                    </p>
                </div>

                {/* Concept Cards */}
                <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                    <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-bold text-blue-600 mb-2">Sorun 1: Bağlam Penceresi</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            LLM&apos;lerin bağlam pencereleri çoğu siteyi bütünüyle işlemek için yeterince geniş
                            değildir. Büyük siteler için bu ciddi bir kısıt oluşturur.
                        </p>
                    </div>
                    <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-bold text-purple-600 mb-2">Sorun 2: HTML Gürültüsü</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Reklamlar, JavaScript ve navigasyon elementleriyle dolu HTML sayfalarını düz metne
                            dönüştürmek hata payı yüksek bir işlemdir.
                        </p>
                    </div>
                </div>

                {/* Section 2 */}
                <div className={`${proseBase} mb-16`}>
                    <h2 id="format-yapi">2. llms.txt Dosyası Nasıl Görünür? Format ve Yapı</h2>
                    <p>
                        Dosya sitenin kök dizinine yerleştirilen düz bir Markdown metin dosyasıdır; hem insan hem dil
                        modeli okuyabilir, regex veya klasik ayrıştırıcılarla da işlenebilir.
                    </p>
                    <h3>Temel Yapı</h3>
                    <p>Dört ana bölümden oluşur:</p>
                    <ol>
                        <li><strong>H1 başlığı</strong> — Sitenin veya projenin adı</li>
                        <li><strong>Özet bloğu</strong> — Sitenin ne olduğunu birkaç cümlede açıklar</li>
                        <li><strong>Ayrıntılı bilgi</strong> — Kapsam, kısıtlamalar veya bağlam notları</li>
                        <li><strong>Bağlantı listeleri</strong> — LLM&apos;nin okumasını istediğiniz sayfalara işaret eden URL&apos;ler</li>
                    </ol>
                    <div className="relative my-6">
                        <CopyButton text={codeBlock1} />
                        <pre className="relative overflow-hidden"><code className="block pr-16">{codeBlock1}</code></pre>
                    </div>
                    <p>
                        Her URL&apos;e isteğe bağlı kısa açıklama eklenebilir; bu, modelin sayfanın ne işe yaradığını
                        bağlam olmadan anlamasını kolaylaştırır.
                    </p>
                    <h3>llms.txt ve llms-full.txt Farkı</h3>
                    <p>
                        <code>llms.txt</code> bağlantı listesi sunar — model istediği sayfayı ayrıca çeker.{" "}
                        <code>llms-full.txt</code> ise sitenin ham metnini tek dosyada toplar; model ek istek
                        göndermeden tüm içeriğe ulaşır. Boyut farkı ciddi olabilir: önerinin yazarına ait sitedeki{" "}
                        <code>llms-full.txt</code> <strong>115.378 kelime</strong> ve <strong>966 KB</strong>{" "}
                        büyüklüğündedir.
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
                            {[
                                ["Anthropic", "https://docs.anthropic.com/llms-full.txt"],
                                ["Perplexity", "https://docs.perplexity.ai/llms-full.txt"],
                                ["Zapier", "https://docs.zapier.com/llms-full.txt"],
                            ].map(([company, url]) => (
                                <tr key={company} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-gray-900">{company}</td>
                                    <td className="px-6 py-4 font-mono text-blue-600 text-xs">{url}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Section 3 */}
                <div className={`${proseBase} mb-16`}>
                    <h2 id="robots-txt-farki">3. llms.txt ile robots.txt Arasındaki Fark</h2>
                    <p>
                        İki protokol benzer mantıkla çalışıyor gibi görünse de amaç, hedef kitle ve bağlayıcılık
                        açısından köklü biçimde ayrışır.
                    </p>
                </div>

                {/* Diagram Section */}
                <div className="not-prose my-8 bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-inner flex flex-col items-center">
                    <div className="relative w-full max-w-2xl h-[400px] rounded-xl overflow-hidden shadow-md">
                        <Image
                            src="/images/llms-txt-diagram.png"
                            alt="robots.txt (Kapı Bekçisi) vs llms.txt (Brifing Belgesi) Karşılaştırma Diyagramı"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                            className="object-cover"
                        />
                    </div>
                    <span className="text-xs text-gray-500 mt-4 text-center">Görsel 1: robots.txt geleneksel botları engellerken; llms.txt AI arama botlarına brifing sunar.</span>
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
                            {[
                                ["Hedef kitle", "ChatGPT, Claude, Perplexity gibi LLM tabanlı sistemler", "Google, Bing gibi geleneksel arama motoru botları"],
                                ["Format", "Markdown", "Düz metin; User-agent, Disallow direktifleri"],
                                ["Amaç", "İçeriği önceliklendirerek AI'a sunmak", "Sayfaların taranmasını kontrol etmek"],
                                ["Direktif içeriği", "Erişim kısıtlama direktifi içermez", "İzin ver / engelle kuralları tanımlar"],
                                ["Uyum zorunluluğu", "LLM'in tercihine bırakılmış; bağlayıcı değil", "Arama motoru botları genel olarak uyar"],
                            ].map(([label, llms, robots]) => (
                                <tr key={label} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-gray-900">{label}</td>
                                    <td className="px-6 py-4 text-gray-700">{llms}</td>
                                    <td className="px-6 py-4 text-gray-700">{robots}</td>
                                </tr>
                            ))}
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

                {/* Section 4 */}
                <div className={`${proseBase} mb-16`}>
                    <h2 id="etkinlik-analizi">4. llms.txt Gerçekten İşe Yarıyor mu? 300.000 Domain Analizi</h2>
                    <p><strong>Veri net: llms.txt, AI sistemlerinin sizi alıntılama biçimini şu an için değiştirmiyor.</strong></p>
                    <p>
                        SE Ranking yaklaşık 300.000 domaini Spearman korelasyonu, XGBoost regresyonu ve SHAP analizi
                        kullanarak inceledi. Analiz edilen domainlerin yalnızca <strong>%10,13&apos;ünde</strong>{" "}
                        llms.txt dosyası mevcuttu. Trafik segmentlerine göre dağılım: düşük trafikli siteler %9,88,
                        orta trafikli %10,54, yüksek trafikli (100.001+ ziyaret) ise %8,27.
                    </p>
                </div>

                {/* Stats Image Section */}
                <div className="not-prose my-8 bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-inner flex flex-col items-center">
                    <div className="relative w-full max-w-2xl h-[400px] rounded-xl overflow-hidden shadow-md">
                        <Image
                            src="/images/llms-txt-stats.png"
                            alt="SE Ranking llms.txt 300.000 Domain Analizi Sonuçları Grafiği"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                            className="object-cover"
                        />
                    </div>
                    <span className="text-xs text-gray-500 mt-4 text-center">Görsel 2: SE Ranking XGBoost ve korelasyon analizi; benimseme oranının düşüklüğünü ve AI atıf etkisinin sıfıra yakınlığını gösterir.</span>
                </div>

                {/* Stats Banner */}
                <div className="not-prose grid grid-cols-3 gap-4 my-8">
                    {[
                        { val: "%10", label: "Benimseme Oranı", sub: "300.000 domain içinde", color: "text-blue-600" },
                        { val: "0", label: "Korelasyon", sub: "AI atıf sıklığıyla", color: "text-red-500" },
                        { val: "↓", label: "XGBoost Skoru", sub: "Dosya eklenince düşüyor", color: "text-gray-400" },
                    ].map(({ val, label, sub, color }) => (
                        <div key={label} className="p-6 bg-white border border-gray-200 rounded-xl text-center shadow-sm">
                            <div className={`text-4xl font-black ${color} mb-1`}>{val}</div>
                            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{label}</div>
                            <div className="text-xs text-gray-400 mt-1">{sub}</div>
                        </div>
                    ))}
                </div>

                <div className={`${proseBase} mb-8`}>
                    <p>
                        XGBoost modeli, llms.txt değişkenini dışarıda bırakınca daha iyi çalıştı — istatistikte
                        &quot;gürültü değişkeni&quot; olarak tanımlanır. Analiz, llms.txt ile AI atıf sıklığı arasında
                        herhangi bir korelasyon olmadığını doğrudan gösterdi.
                    </p>
                    <p>
                        Platform tarafında da tutarsız bir tablo var: GPTBot zaman zaman llms.txt dosyalarını çekiyor
                        ama bu sık değil. Google&apos;ın AI Overviews ve AI Mode&apos;u llms.txt yerine geleneksel SEO
                        sinyallerine dayanıyor.
                    </p>
                </div>

                {/* Section 5 */}
                <div className={`${proseBase} mb-16`}>
                    <h2 id="nasil-olusturulur">5. llms.txt Nasıl Oluşturulur ve Siteye Eklenir?</h2>
                    <h3>1. Markdown dosyasını hazırlayın</h3>
                    <p>Bir metin editörü açın, <code>.txt</code> uzantısıyla kaydedin. HTML etiketleri veya JavaScript kullanmayın.</p>
                    <h3>2. İçerik yapısını kurun</h3>
                    <div className="relative my-6">
                        <CopyButton text={codeBlock2} />
                        <pre className="relative overflow-hidden"><code className="block pr-16">{codeBlock2}</code></pre>
                    </div>
                    <h3>3. Dosyayı kök dizine yükleyin</h3>
                    <p>
                        Dosyayı <code>llms.txt</code> adıyla kök dizine koyun; doğru adres{" "}
                        <code>https://example.com/llms.txt</code> olmalıdır.
                    </p>
                    <h3>4. robots.txt ile çelişki kontrolü yapın</h3>
                    <p>
                        <code>robots.txt</code>&apos;te GPTBot gibi bir AI botunu engelliyorsanız,{" "}
                        <code>llms.txt</code>&apos;te o bota içerik sunmaya çalışmak çelişki yaratır.
                    </p>
                    <h3>5. Erişilebilirliği kontrol edin</h3>
                    <p>Tarayıcınızda <code>https://siteniz.com/llms.txt</code> adresine gidin. Düz metin açılıyorsa dosya doğru konumda demektir.</p>
                </div>

                {/* Tools Comparison Table */}
                <div className="not-prose my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="text-left px-6 py-4 font-bold text-gray-900">Araç</th>
                                <th className="text-left px-6 py-4 font-bold text-gray-900">Temel Özellik</th>
                                <th className="text-left px-6 py-4 font-bold text-gray-900">En Uygun Senaryo</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                ["🔥 FireCrawl", "Mevcut site içeriğini tarayarak llms.txt'yi otomatik üretir", "Büyük ve karmaşık siteler için hızlı başlangıç"],
                                ["📝 Markdowner", "Açık kaynaklı yerel kütüphane, HTML sayfalarını Markdown'a çevirir", "Statik site üreteci kullanan yazılımcılar"],
                                ["🔌 Website LLMs (WP)", "WordPress eklentisi, 3.000+ indirme ile otomatik yönetim sunar", "Kod yazmadan dinamik WordPress siteleri yönetmek"],
                            ].map(([tool, feature, scenario]) => (
                                <tr key={tool} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-gray-900">{tool}</td>
                                    <td className="px-6 py-4 text-gray-700">{feature}</td>
                                    <td className="px-6 py-4 text-gray-700">{scenario}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <div className="flex gap-3">
                        <span className="text-2xl">⚠️</span>
                        <div>
                            <h4 className="font-bold text-amber-900 mb-1">Bakım Notu</h4>
                            <p className="text-sm text-amber-800 leading-relaxed">
                                llms.txt bir kez kurup unutulan bir dosya değil. Yeni sayfa, ürün veya hizmet değişikliğinde güncelleyin.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 6 */}
                <div className={`${proseBase} mb-8`}>
                    <h2 id="maliyet-fayda">6. llms.txt Eklemeli miyim? Maliyet-Fayda Değerlendirmesi</h2>
                    <p><strong>Kısa cevap: büyük ihtimalle evet, ama beklentinizi düşük tutun.</strong></p>
                    <p>
                        Dosya küçük, teknik riski sıfıra yakın, birkaç saatlik işten fazlasını gerektirmez. Buna karşın
                        300.000 domain analizi dosyanın AI atıf biçimini bugün itibarıyla değiştirmediğini gösteriyor.
                    </p>
                    <p>
                        Brett Tabke&apos;ye göre Google, arama motoru ile LLM kod tabanını birleştirecek; bu
                        gerçekleşirse llms.txt o geçiş döneminin köprüsü olabilir. Şimdilik{" "}
                        <strong>&quot;prim ucuz, tazminat belirsiz&quot;</strong> bir sigorta poliçesi.
                    </p>
                </div>

                {/* Pros / Cons */}
                <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                    <div className="p-6 bg-green-50 border border-green-200 rounded-xl">
                        <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                            <span className="text-xl">✅</span> Artılar
                        </h3>
                        <ul className="space-y-3 text-sm text-green-800">
                            {["Standart ileride olgunlaşırsa hazır olursunuz", "Düşük teknik maliyet (birkaç saat iş)", "Google SEO–LLM entegrasyonu gerçekleşirse köprü işlevi görebilir", "Dokümantasyon siteleri için gerçek fayda mümkün"].map((item) => (
                                <li key={item} className="flex gap-2"><span className="mt-0.5">•</span><span>{item}</span></li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-6 bg-red-50 border border-red-200 rounded-xl">
                        <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                            <span className="text-xl">❌</span> Eksiler
                        </h3>
                        <ul className="space-y-3 text-sm text-red-800">
                            {["Direktiflere uyum LLM'in tercihine bırakılmış", "Rakiplerin içerik stratejinizi tek bakışta analiz etmesini kolaylaştırır", "Manipülatif taktikler bu dosyaya da taşınabilir", "Google henüz desteklemiyor"].map((item) => (
                                <li key={item} className="flex gap-2"><span className="mt-0.5">•</span><span>{item}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Sector Priority */}
                <div className="not-prose my-8 space-y-3">
                    <h3 className="font-bold text-gray-900 text-lg mb-4">Sektöre Göre Öncelik Sırası</h3>
                    {[
                        { icon: "📚", rank: "1.", title: "Dokümantasyon Siteleri", desc: "API referansları, teknik kılavuzlar — AI'ın en sık çektiği içerik türleri.", isBlue: true },
                        { icon: "🛒", rank: "2.", title: "E-ticaret & SaaS", desc: "Ürün sayfaları ve özellik açıklamaları LLM'ler için değerli, ama öncelik düşük.", isBlue: false },
                        { icon: "📰", rank: "3.", title: "Blog & İçerik Siteleri", desc: "Kişisel siteler ve bloglar için fayda şu an sınırlı.", isBlue: false },
                    ].map(({ icon, rank, title, desc, isBlue }) => (
                        <div key={rank} className={`flex items-center gap-4 p-4 border rounded-xl ${isBlue ? "bg-blue-50 border-blue-100" : "bg-gray-50 border-gray-200"}`}>
                            <span className="text-2xl">{icon}</span>
                            <div>
                                <div className={`font-bold ${isBlue ? "text-blue-900" : "text-gray-900"}`}>{rank} {title}</div>
                                <div className={`text-sm ${isBlue ? "text-blue-700" : "text-gray-600"}`}>{desc}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Section 7 — FAQ */}
                <div className={`${proseBase} mb-8`}>
                    <h2 id="sik-sorulan-sorular">7. Sık Sorulan Sorular</h2>
                </div>

                <div className="not-prose space-y-4 my-8">
                    {faqItems.map((item, i) => (
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

                {/* Topical Cluster Recommendation & Internal Links */}
                <div className="not-prose my-12 p-6 bg-blue-50/50 border border-blue-100 rounded-2xl">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="text-blue-600">💡</span> AI &amp; Arama Stratejinizi Genişletin
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        llms.txt standardı LLM tarayıcılarına doğrudan hitap ederken, markanızın yapay zeka sonuçlarında asıl konumlanması ve atıf alması için GEO (Yapay Zeka Arama Optimizasyonu) temellerini iyi oturtmanız gerekir. 
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/geo" className="p-4 bg-white border border-gray-100 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all group">
                            <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">GEO Danışmanlığı →</h4>
                            <p className="text-xs text-gray-500">Yapay zeka arama motorlarında görünürlük ve marka atıf stratejileri.</p>
                        </Link>
                        <Link href="/seo" className="p-4 bg-white border border-gray-100 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all group">
                            <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">Semantik SEO Çalışmaları →</h4>
                            <p className="text-xs text-gray-500">Google ve yapay zeka botlarının sitenizi tam anlamıyla anlaması için semantik yapılandırma.</p>
                        </Link>
                    </div>
                </div>

                {/* Sources */}
                <aside className="not-prose mt-12 p-6 bg-gray-50 border border-gray-200 rounded-xl" aria-label="Kaynaklar">
                    <h2 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Kaynaklar</h2>
                    <ul className="space-y-3">
                        <li className="flex flex-col gap-0.5">
                            <a href="https://seranking.com/blog/llms-txt/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                                LLMs.txt: Why Brands Rely On It and Why It Doesn&apos;t Work — SE Ranking
                            </a>
                            <span className="text-xs text-gray-400">SE Ranking Blog · Ocak 2025 · 300.000 domain XGBoost analizi</span>
                        </li>
                        <li className="flex flex-col gap-0.5">
                            <a href="https://searchengineland.com/llms-txt-proposed-standard-453676" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                                Meet llms.txt, a proposed standard for AI website content crawling — Search Engine Land
                            </a>
                            <span className="text-xs text-gray-400">Search Engine Land · Eylül 2024 · Jeremy Howard önerisi ilk haberi</span>
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
                        <Link href="/geo" className="inline-flex items-center justify-center w-full px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-black hover:-translate-y-1 transition-all shadow-md">
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
    );
}
