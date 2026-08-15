/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

const headings = [
    { id: "terminoloji-karisikligi", text: "Terminoloji neden bu kadar karışık?" },
    { id: "dort-terim", text: "Dört terim, dört hedef yüzey" },
    { id: "mekanik-fark", text: "SEO ile GEO arasındaki gerçek mekanik fark" },
    { id: "nasil-secer", text: "LLM'ler içeriği nasıl seçer?" },
    { id: "teknik-gorunurluk", text: "Teknik görünürlük: JavaScript açığı" },
    { id: "hangi-terim", text: "Hangi terimi hangi bağlamda kullanmalısınız?" },
    { id: "olcum", text: "Ne ölçülür?" },
    { id: "sss", text: "Sıkça Sorulan Sorular" },
];

export default function ArticleContent() {
    return (
        <div className="grid lg:grid-cols-[250px_1fr] gap-12 items-start relative">
            <aside className="hidden lg:block sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto pr-4 custom-scrollbar" aria-label="İçindekiler">
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
                                <span className="font-mono text-xs text-gray-400 mr-2 font-medium">{(i + 1).toString().padStart(2, '0')}</span>
                                {heading.text}
                            </a>
                        ))}
                    </nav>
                </div>
            </aside>

            <article className="min-w-0 geo-rehber">
                <p className="first-answer text-xl text-gray-700 leading-relaxed font-light mb-12 pl-6 border-l-4 border-violet-600">
                    Dört terim de aynı soruyu farklı yüzeyler için soruyor: içeriğim nerede görünecek?
                    SEO organik sonuçları, AEO öne çıkan snippet ve sesli aramayı, AIO yalnızca Google&apos;ın
                    AI Bakışı bloklarını, <Link href="/geo">GEO</Link> ise ChatGPT&apos;den Perplexity&apos;ye tüm üretken motorları hedefler.
                    LLMO bunların hepsini kapsayan şemsiye olarak kullanılıyor. Terimler rakip değil,
                    iç içe.
                </p>

                <aside className="tldr mb-12 p-6 md:p-8 bg-violet-50/50 border border-violet-100/80 rounded-3xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-violet-600 text-white text-xs font-black uppercase tracking-widest rounded-full">TL;DR</span>
                        <span className="tldr-baslik text-sm font-bold text-violet-800">Kısaca</span>
                    </div>
                    <p className="text-gray-800 font-bold text-[15px] leading-relaxed mb-4">Terimler arasındaki fark taktik değil, hedef yüzey farkıdır — hangisini kullandığınız neyi ölçtüğünüzü belirler.</p>
                    <ul className="space-y-3.5 text-gray-700 text-[15px] leading-relaxed list-none pl-0 my-0">
                        <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>AIO yalnızca Google&apos;a özgüdür; GEO platform bağımsızdır. İkisini eşitlemek Perplexity ve ChatGPT&apos;yi tamamen gözden kaçırmak demektir.</span></li>
                        <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>SEO&apos;nun para birimi bağlantı, GEO&apos;nunki bağlamsal birliktelik. Bağlantısız marka anılması GEO&apos;da doğrudan işe yarar.</span></li>
                        <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Tek bir sorguda birinci olmak yerine, ilişkili beş sorguda tutarlı görünmek daha yüksek alıntı olasılığı üretir.</span></li>
                        <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Terminoloji henüz oturmadı. Müşteriyle konuşurken terim değil, hedef yüzey üzerinden anlaşın.</span></li>
                    </ul>
                </aside>

                <div className="prose prose-lg max-w-none 
                        prose-headings:font-sans prose-headings:font-bold prose-headings:text-foreground
                        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight
                        prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-gray-800
                        prose-p:font-sans prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-6
                        prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2
                        prose-li:text-gray-600 prose-li:leading-relaxed
                        prose-strong:font-bold prose-strong:text-gray-900
                        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                        prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-gray-800
                        prose-table:text-sm
                        mb-16">
                    <h2 id="terminoloji-karisikligi">Terminoloji neden bu kadar karışık?</h2>
                    <p className="bolum-cevap">
                        Çünkü sektör bu terimleri, kavramlar oturmadan üretti. Bugün SEO, GEO, AEO, AIO ve
                        LLMO arasındaki ilişkiyi tanımlayan onlarca &quot;kesin rehber&quot; var ve neredeyse hiçbiri
                        diğeriyle aynı hiyerarşiyi çizmiyor. Bir yayın LLMO&apos;yu en geniş şemsiye sayarken,
                        başkası GEO&apos;yu üst küme, bir üçüncüsü ise üçünü eşanlamlı kabul ediyor.
                    </p>
                    <p>
                        Bu sayfada size tek bir doğru taksonomi satmayacağım, çünkü öyle bir şey henüz yok.
                        Bunun yerine işe yarayan ayrımı vereceğim: <strong>terimler değil, hedef yüzeyler
                        üzerinden düşünün.</strong>
                    </p>
                    <p>
                        Pratikte fark şurada ortaya çıkıyor. Bir müşteri &quot;yapay zeka araması için optimize
                        edelim&quot; dediğinde neyi kastettiğini sormazsanız, üç ay sonra o kişi Google AI
                        Bakışı&apos;ndaki görünürlüğü bekliyorken siz Perplexity atıfları raporluyor olabilirsiniz.
                        Terim tartışması akademik değil; kapsam ve fatura tartışması.
                    </p>
                    <p>
                        Aşağıdaki tabloyu bir uzlaşı beyanı olarak değil, ortak bir sözlük olarak okuyun.
                        {/* kaynak: K50 */}
                    </p>

                    <h2 id="dort-terim">Dört terim, dört hedef yüzey</h2>
                    <p className="bolum-cevap">
                        En işlevsel ayrım &quot;hangi ekranda görünmek istiyorsunuz&quot; sorusundan çıkıyor.
                        SEO mavi linklerde, AEO snippet ve sesli cevapta, AIO Google&apos;ın AI Bakışı
                        bloğunda, GEO ise sohbet arayüzlerinde görünmeyi hedefler. LLMO bunların
                        tümünü kapsayan çatı olarak kullanılıyor.
                    </p>
                    <table>
                        <caption>Terimlerin hedef yüzey ve metrik karşılaştırması</caption>
                        <thead>
                            <tr><th scope="col">Terim</th><th scope="col">Tek cümlede</th><th scope="col">Hedef yüzey</th><th scope="col">Başarı metriği</th><th scope="col">Platform</th></tr>
                        </thead>
                        <tbody>
                            <tr><th scope="row">SEO</th><td>Organik sonuçlarda üst sıralara çıkmak için içerik ve teknik yapıyı optimize etme.</td><td>Google, Bing organik</td><td>Sıralama, organik trafik</td><td>Motora bağımlı</td></tr>
                            <tr><th scope="row">AEO</th><td>İçeriği öne çıkan snippet, sesli arama ve sıfır pozisyonda görünecek şekilde yapılandırma.</td><td>Featured snippet, sesli arama</td><td>Sıfır pozisyon görünümü</td><td>Ağırlıkla Google</td></tr>
                            <tr><th scope="row">AIO</th><td>Yalnızca Google&apos;ın AI Bakışı bloklarına yönelik optimizasyon.</td><td>Google AI Bakışı</td><td>AI Bakışı görünümü</td><td>Yalnızca Google</td></tr>
                            <tr><th scope="row">GEO</th><td>İçeriğin üretken motorlar tarafından alıntılanması için optimizasyon.</td><td>ChatGPT, Perplexity, Gemini, Copilot</td><td>Cevap payı (share of answer)</td><td>Platform bağımsız</td></tr>
                            <tr><th scope="row">LLMO</th><td>Tüm LLM destekli yüzeyleri kapsayan çatı terim.</td><td>Tüm AI arama yüzeyleri</td><td>Alıntı oranı + marka anılması</td><td>Platform bağımsız</td></tr>
                        </tbody>
                    </table>
                    {/* kaynak: K50 */}
                    <p>
                        Tablodaki en operasyonel satır AIO. Google&apos;a özgü olduğu için taktikleri de
                        Google&apos;a özgü: yapılandırılmış veri, Search Console takibi, snippet formatı.
                        GEO ise platform bağımsız olduğundan taktikleri motordan motora değişiyor.
                        Bu ikisini aynı kefeye koyan bir strateji, Perplexity ve ChatGPT&apos;deki fırsatın
                        tamamını kaçırır.
                    </p>
                    <p>
                        Platform bazlı ayrımların detayı için{" "}
                        <Link href="/geo/ai-overviews-nedir">AI Bakışı</Link> ve{" "}
                        <Link href="/geo/chatgpt-geo">ChatGPT GEO</Link> sayfalarına bakabilirsiniz.
                    </p>

                    <h2 id="mekanik-fark">SEO ile GEO arasındaki gerçek mekanik fark</h2>
                    <p className="bolum-cevap">
                        SEO&apos;nun para birimi bağlantı, GEO&apos;nunki bağlamsal birliktelik. Google bir backlink&apos;i
                        oy olarak sayar; dil modeli ise hiperlinki görmez bile. Model, bir markayı çevresinde
                        hangi kelimelerin ne sıklıkla geçtiğinden tanır.
                        {/* kaynak: K51 */}
                    </p>
                    <p>
                        Bu tek cümle, iki disiplinin neden farklı taktikler gerektirdiğini açıklıyor.
                        PageRank mantığında ilgili sitelerden gelen her bağlantı bir güven aktarımıdır.
                        Büyük dil modelleri ise otoriteyi bağlantı grafiğinden değil, metin içindeki
                        birlikte geçme örüntülerinden türetir.
                        {/* kaynak: K51 */}
                    </p>
                    <p>
                        Pratik sonuç şu: bir marka birden fazla güvenilir kaynakta adıyla geçtiğinde
                        modeldeki varlık gömüsü güçleniyor.
                        {/* kaynak: K51 */}
                        {" "}LinkedIn gönderisi, sektör bülteni, podcast notu — SEO açısından neredeyse
                        değersiz olan bağlantısız anılmalar, GEO tarafında doğrudan ölçülebilir etki
                        yaratıyor.
                    </p>
                    <p>
                        Tersi de geçerli. Tamamen alakasız bir siteden gelen backlink SEO&apos;ya dolaylı
                        katkı verebilirken LLM görünürlüğüne katkısı sıfıra yakın.
                        {/* kaynak: K51 */}
                        {" "}Model bağlantıyı değil bağlamı okuyor; alakasız bağlam sinyal üretmiyor.
                    </p>
                    <p>
                        Bunun stratejik karşılığı, dijital PR&apos;ın rolünün değişmesi:
                        hedef link kazanmak değil, doğru bağlamda anılmak.{" "}
                        <Link href="/geo/dijital-pr-ai-atif">Dijital PR ve atıf</Link> sayfası bu tarafı
                        ayrıntılı işliyor.
                    </p>
                    {/* [İNSAN] ÖZGÜN VAKA — YAYINDAN ÖNCE DOLDUR
                        Backlink profili güçlü ama LLM görünürlüğü düşük (ya da tersi) bir marka örneği.
                        Kendi müşteri portföyünden anonimleştirilmiş bir vaka en güçlüsü olur. */}

                    <h2 id="nasil-secer">LLM&apos;ler içeriği nasıl seçer?</h2>
                    <p className="bolum-cevap">
                        Üç mekanizma belirleyici: birden fazla ilişkili sorguda tutarlı görünmek,
                        her metin parçasının kendi başına anlaşılabilir olması, ve alıntılanmaya
                        uygun sayfa tipinde bulunmak. Üçü de klasik SEO&apos;daki &quot;tek anahtar kelimede
                        birinci ol&quot; mantığından farklı çalışıyor.
                    </p>
                    <h3 id="rrf">Tek sorguda birinci olmak yetmiyor</h3>
                    <p>
                        ChatGPT Search büyük ölçüde Bing indeksinden besleniyor — OpenAI&apos;ın kendi
                        tarayıcısı da devrede, yapı hibrit.
                        {/* kaynak: K51 */}
                        {" "}Buradan &quot;o hâlde SEO yeter&quot; sonucu çıkarmak cazip ama yanlış, çünkü içerik
                        modele ham sıralama olarak değil, Reciprocal Rank Fusion (RRF) skorlamasıyla
                        aktarılıyor.
                        {/* kaynak: K50 */}
                    </p>
                    <p>
                        RRF&apos;in mantığı sade: tek bir sorguda birinci olmaktansa, birbiriyle ilişkili
                        birden fazla sorguda tutarlı biçimde üst sıralarda olmak daha yüksek skor üretiyor.
                        {/* kaynak: K50 */}
                    </p>
                    <p>
                        Somutlaştıralım. &quot;İçerik pazarlama stratejisi&quot;, &quot;içerik planı nasıl yapılır&quot; ve
                        &quot;editoryal takvim şablonu&quot; sorgularının üçünde de beşinci sırada olan bir marka,
                        yalnızca ilkinde birinci olan rakibinden daha fazla alıntı alabiliyor.
                        {/* kaynak: K50 */}
                        {" "}Bu, &quot;para terimi&quot; avcılığı yerine konunun çevresini kaplayan bir içerik ağı
                        kurmayı gerektiriyor — yani topic cluster mantığını.{" "}
                        <Link href="/seo/topikal-otorite">Topikal otorite</Link> çalışması burada doğrudan
                        karşılığını buluyor.
                    </p>
                    <h3 id="chunk">Her bölüm kendi başına ayakta durmalı</h3>
                    <p>
                        Dil modelleri belgeyi bütün olarak değil, chunk denen küçük parçalara bölerek
                        işliyor. İzole edilmiş bir parça bağlamını kaybedebiliyor.
                        {/* kaynak: K51 */}
                    </p>
                    <p>
                        Snowflake&apos;in bu soruna yönelik çalışmasında her parçaya ek bağlam bilgisi
                        eklendiğinde soru-cevap doğruluğunun %50-60 bandından %72-75 bandına çıktığı
                        bildiriliyor — ölçüm şirketin kendisine ait, o kaydı düşerek okuyun.
                        {/* kaynak: K51 */}
                    </p>
                    <p>
                        Yazı pratiğine çevirisi net: her bölüm, tek başına okunduğunda ne hakkında olduğunu
                        kendisi söylemeli. &quot;Yukarıda belirttiğimiz gibi&quot;, &quot;bu bağlamda&quot;, &quot;az önce
                        değindiğimiz&quot; tarzı bağımlı referanslar chunk bağlamını doğrudan zayıflatıyor.
                        Bu sayfadaki her H2&apos;nin altında bağımsız bir cevap paragrafı olmasının sebebi de bu.
                    </p>
                    <h3 id="sayfa-tipi">Hangi sayfa tipleri alıntılanıyor?</h3>
                    <p>
                        Ahrefs araştırmasına göre modeller, liste koleksiyonlarına kıyasla ana site
                        sayfalarını ve belgeleri tercih ediyor; alıntıların büyük bölümü ana sayfa,
                        fiyatlandırma sayfası veya hakkında sayfası gibi kategorilere düşüyor.
                        PDF&apos;ler de site sayfalarıyla eşdeğer kaynak sayılıyor.
                        {/* kaynak: K51 */}
                    </p>
                    <p>Burada sık karıştırılan bir ayrım var, açık yazayım.</p>
                    <p>
                        Bu bulgu <em>sizin kendi sayfalarınızla</em> ilgili: kendi sitenizde &quot;10 En İyi
                        Araç&quot; listesi yayınlamak, aynı bilgiyi bir ürün sayfasına ya da derinlemesine
                        rehbere yerleştirmekten daha zayıf bir alıntı adayı üretiyor. Ama
                        <em>başkasının</em> &quot;en iyi X&quot; listesinde geçmek bambaşka bir şey — orada siz
                        alıntılanan kaynak değil, alıntılanan kaynağın <em>içeriğisiniz</em>.
                    </p>
                    <p>
                        İkisi çelişmiyor: kendi listenizi yazmayın, başkasınınkine girin.
                        Bu ikinci taraf <Link href="/geo/dijital-pr-ai-atif">dijital PR sayfasında</Link>.
                    </p>

                    <h2 id="teknik-gorunurluk">Teknik görünürlük: JavaScript açığı</h2>
                    <p className="bolum-cevap">
                        GPTBot ve ClaudeBot JavaScript çalıştırmaz. Client-side render üzerine kurulu
                        siteler bu botlara pratik olarak boş sayfa gösteriyor — Google için sorun
                        olmayan bir mimari, LLM görünürlüğünde tam bir tıkanma noktası.
                        {/* kaynak: K51 */}
                    </p>
                    <p>
                        Ayrım şurada. Google Chromium tabanlı bir renderer kullandığı için React, Vue veya
                        Angular ile kurulmuş siteleri işleyebiliyor. OpenAI ve Anthropic&apos;in tarayıcıları
                        ise bu adımı atlıyor; sayfaya gelip ham HTML&apos;i alıyorlar. İçerik tarayıcıda
                        üretiliyorsa botun gördüğü şey boş div iskeletleri oluyor.
                        {/* kaynak: K51 */}
                    </p>
                    <p>
                        Kritik içerikleriniz — tanımlar, SSS blokları, ürün açıklamaları, fiyat bilgisi —
                        sunucu tarafında render edilmiyorsa, ne kadar iyi yazıldıkları önemsiz hâle geliyor.
                        Teknik GEO denetiminin ilk adımı bu.
                    </p>
                    <p>
                        Altyapının diğer iki bileşeni yapılandırılmış veri ve tanınmış varlık kaydı.
                        Şema işaretlemesi yalnızca ana sayfaya değil ürün, makale, SSS ve organizasyon
                        dahil tüm sayfa tiplerine uygulanmalı; Wikipedia veya Wikidata üzerindeki varlık
                        kaydı ise markanın belirsiz bir metin dizisi olmaktan çıkmasını sağlıyor.
                        {/* kaynak: K50 */}
                        {" "}Bu ikisini <Link href="/geo/yapay-zeka-schema" data-pending="true">schema rehberi</Link>
                        {" "}ve <Link href="/geo/entity-seo">entity SEO</Link> sayfalarında ayrı ele alıyorum.
                    </p>
                    <p>
                        llms.txt de bu listede sık anılıyor, ancak etkinliği tartışmalı — konuyu{" "}
                        <Link href="/geo/llms-txt-nedir">ayrı bir sayfada</Link> güncel verilerle inceliyorum.
                    </p>
                    <p>
                        Andrej Karpathy meseleye farklı bir yerden bakıyor: proje dokümanlarının
                        insanların tıklayacağı HTML sayfaları olarak değil, modelin bağlam penceresine
                        bütün olarak girebilecek tek bir Markdown dosyası olarak tasarlanması gerektiğini
                        savunuyor.
                        {/* kaynak: K51 */}
                        {" "}Teknik dokümantasyonu olan ürünler için bu, düşük maliyetli ve az uygulanan
                        bir hamle.
                    </p>

                    <h2 id="hangi-terim">Hangi terimi hangi bağlamda kullanmalısınız?</h2>
                    <p className="bolum-cevap">
                        Terim seçimi hedefe göre yapılır. Yalnızca Google hedefliyorsanız SEO ve AIO,
                        sohbet arayüzlerinde alıntılanmak istiyorsanız GEO, hepsini kapsayan bir program
                        kuruyorsanız LLMO doğru çerçeve.
                    </p>
                    <table>
                        <caption>Hedefe göre terim ve öncelik seçimi</caption>
                        <thead><tr><th scope="col">Hedefiniz</th><th scope="col">Öncelikli pratik</th><th scope="col">Neden</th></tr></thead>
                        <tbody>
                            <tr><td>Yalnızca Google sonuçlarında görünmek</td><td>SEO + AIO</td><td>AI Bakışı ve snippet aynı ekosistemde çalışır</td></tr>
                            <tr><td>ChatGPT veya Perplexity&apos;de alıntılanmak</td><td>GEO</td><td>Platform bağımsız; dört büyük motoru kapsar</td></tr>
                            <tr><td>Sesli arama ve sıfır pozisyon</td><td>AEO</td><td>Kısa doğrudan cevap yapıları AEO&apos;nun çekirdeği</td></tr>
                            <tr><td>Tüm AI yüzeylerinde sistematik varlık</td><td>LLMO</td><td>Bot erişimi, varlık kaydı ve üçüncü taraf içerik dahil</td></tr>
                            <tr><td>Geliştirici kitlesi veya teknik ürün</td><td>LLMO + GEO</td><td>Repo, dokümantasyon ve kod örnekleri ayrı ağırlık taşır</td></tr>
                        </tbody>
                    </table>
                    {/* kaynak: K50, K51 */}
                    <h3 id="teshis-cercevesi">Nerede tıkandığınızı bulmak</h3>
                    <p>
                        Pepper Atlas&apos;ın önerdiği üç katmanlı çerçeve teşhis için pratik bir araç —
                        aracın kendi çerçevesi olduğunu not ederek kullanın.
                        {/* kaynak: K50 */}
                    </p>
                    <p><strong>Görünürlük:</strong> GPTBot ve ClaudeBot sayfalarınıza erişebiliyor mu? Robots.txt, JavaScript render ve sunucu yanıtları burada belirleyici.</p>
                    <p><strong>Alıntılanabilirlik:</strong> E-E-A-T sinyalleri, bağlantısız anılmalar ve üçüncü taraf referanslar yeterli mi? {/* kaynak: K51 */}</p>
                    <p><strong>Çekilebilirlik:</strong> Chunk bağlamı, yapılandırılmış veri ve net cevap formatları yerinde mi?</p>
                    <p>
                        Hangi katmanda tıkandığınızı bilmeden taktik seçmek, teşhis koymadan ilaç
                        yazmaya benziyor. Bot erişimi kapalı bir sitede içerik kalitesini tartışmanın
                        anlamı yok.
                    </p>

                    <h2 id="olcum">Ne ölçülür?</h2>
                    <p className="bolum-cevap">
                        Her katmanın kendi metriği var ve birbirinin yerine geçmiyor. SEO&apos;da sıralama,
                        AEO&apos;da sıfır pozisyon görünümü, AIO&apos;da AI Bakışı görünümü, GEO&apos;da cevap payı.
                        Tek bir sayıyla dört katmanı birden raporlamak mümkün değil.
                    </p>
                    <table>
                        <caption>Katman bazında metrik ve takip aracı</caption>
                        <thead><tr><th scope="col">Pratik</th><th scope="col">Birincil metrik</th><th scope="col">Takip aracı</th></tr></thead>
                        <tbody>
                            <tr><th scope="row">SEO</th><td>Sıralama pozisyonu, CTR</td><td>Search Console, Ahrefs, Semrush</td></tr>
                            <tr><th scope="row">AEO</th><td>Sıfır pozisyon görünüm sayısı</td><td>Search Console (snippet filtresi)</td></tr>
                            <tr><th scope="row">AIO</th><td>AI Bakışı görünümü</td><td>Ahrefs Brand Radar</td></tr>
                            <tr><th scope="row">GEO</th><td>Cevap payı — kaç sorguda alıntılandınız</td><td>GEO araçları + manuel prompt testi</td></tr>
                            <tr><th scope="row">LLMO</th><td>Alıntı oranı + marka anılması</td><td>Çoklu platform izleme</td></tr>
                        </tbody>
                    </table>
                    {/* kaynak: K50, K51 */}
                    <p>
                        Bu alanın araçları henüz olgun değil. Otomatik izleme ürünleri hızla gelişiyor ama
                        manuel prompt örneklemesi hâlâ gerekli — sabit bir sorgu setini ayda bir elle
                        çalıştırmak, çoğu araçtan daha güvenilir bir taban veriyor. Ölçüm kurulumunu{" "}
                        <Link href="/geo/geo-kpi-olcumu">GEO ölçümü</Link> sayfasında adım adım anlatıyorum.
                    </p>
                    <p>
                        Zamanlama açısından bir not: alıntı örüntüleri bileşik etki gösteriyor. Erken
                        cevap payı kazanan markaların bir yıl içinde yerinden edilmesi zorlaşıyor.
                        {/* kaynak: K50 */}
                        {" "}Arama motorlarında güçlü markalar genelde LLM&apos;lerde de iyi performans veriyor,
                        ama bu otomatik değil; GEO için kendi sitenizin dışına çıkmak gerekiyor.
                        {/* kaynak: K51 */}
                    </p>
                    {/* [İNSAN] ÖZGÜN VERİ — YAYINDAN ÖNCE DOLDUR
                        Gerçek bir marka için ölçülmüş cevap payı / alıntı oranı verisi.
                        Anonimleştirilmiş de olabilir. Sayfanın en zayıf noktası burası. */}

                    <h2 id="sss">Sıkça Sorulan Sorular</h2>
                    <h3>GEO, AEO ve LLMO gerçekten aynı şey mi?</h3>
                    <p>Sektörde uzlaşı yok. Bazı kaynaklar üçünü eşanlamlı sayıyor, bazıları LLMO&apos;yu şemsiye terim kabul ediyor. Pratikte önemli olan hangi yüzeyi hedeflediğiniz — terim tartışmasına girmeden &quot;Google AI Bakışı mı, ChatGPT mi?&quot; diye sormak daha hızlı sonuç veriyor.</p>
                    <h3>SEO&apos;da iyi sıralanıyorsam GEO&apos;da da görünür müyüm?</h3>
                    <p>Büyük ölçüde evet, ama garanti değil. Arama motorlarında iyi performans gösteren markalar LLM&apos;lerde de genelde iyi performans veriyor. {/* kaynak: K51 */} Yine de ChatGPT ile Google AI Bakışı farklı alıntı mantıklarıyla çalışıyor; birinde kazanan sayfa diğerinde kaybedebiliyor. {/* kaynak: K50 */} SEO tabanı sizi bir yere kadar taşır, sonrası platform bazlı iş.</p>
                    <h3>Bağlantısız anılmalar gerçekten işe yarıyor mu?</h3>
                    <p>GEO tarafında evet. Model bir sayfaya gelen bağlantıyı değil, markanın web genelinde hangi bağlamda ve ne sıklıkla geçtiğini işliyor. {/* kaynak: K51 */} Forum yanıtı, üçüncü taraf inceleme, sektör bülteni — klasik SEO&apos;da göz ardı edilen bu atıflar GEO stratejisinin merkezinde.</p>
                    <h3>JavaScript kullanan sitem LLM&apos;lere görünmez mi?</h3>
                    <p>Client-side render ediliyorsa ciddi risk var. GPTBot ve ClaudeBot JavaScript çalıştırmıyor; sitenize geldiklerinde HTML&apos;de ne varsa onu görüyorlar. {/* kaynak: K51 */} Test etmesi kolay: sayfanın kaynak kodunu görüntüleyin. Metin orada değilse bot da göremiyor.</p>
                    <h3>AIO ile GEO aynı şey mi?</h3>
                    <p>Hayır. AIO Google&apos;a özgü bir taktik, GEO platform bağımsız. {/* kaynak: K50 */} AIO&apos;yu GEO ile eşitleyen strateji, Perplexity ve ChatGPT&apos;deki fırsatın büyük bölümünü kaçırır. AIO, GEO&apos;nun Google&apos;a özel bir alt kümesi.</p>
                    <h3>Ne zaman başlamalıyım?</h3>
                    <p>Şimdi, çünkü etki bileşik. Erken cevap payı kazanan markalar bir yıl içinde yerinden edilmesi zor bir konuma geliyor. {/* kaynak: K50 */} LLMO tek bir taktik değil; yayımlanan her sayfa, eklenen her şema etiketi ve kazanılan her incelemenin alıntı olasılığını etkilediği sürekli bir pratik.</p>
                </div>

                <div className="bg-gray-50 border-l-4 border-violet-600 p-8 rounded-r-xl my-12 not-prose">
                    <h4 className="text-xl font-bold text-foreground mb-4">Hangi terimin sizin için doğru olduğunu netleştirelim</h4>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        SEO, AEO, AIO ve GEO arasında kaybolmak yaygın. Hedef yüzeyinize göre doğru
                        önceliklendirmeyi ve ölçüm çerçevesini birlikte kuralım.
                    </p>
                    <Link href="/geo" className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white font-bold rounded-full hover:bg-violet-700 transition-colors text-sm">
                        GEO Danışmanlığı hakkında bilgi alın
                        <span>→</span>
                    </Link>
                </div>

                <div className="mt-16 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Ayrıca Bakınız</h2>
                    <ul className="space-y-6 mb-8">
                        <li className="list-none">
                            <Link href="/geo/yapay-zeka-arama-nasil-calisir" className="inline-flex items-center text-violet-600 hover:underline font-bold group text-lg">
                                <span className="w-2 h-2 rounded-full bg-violet-600 mr-3 group-hover:scale-125 transition-all" />
                                Yapay Zeka Araması Nasıl Çalışır?
                            </Link>
                            <p className="text-sm text-gray-500 ml-5 mt-1 leading-relaxed max-w-2xl">RAG ve grounding mekaniği: modelin cevabı hangi zincirden ürettiği.</p>
                        </li>
                        <li className="list-none">
                            <Link href="/geo/query-fan-out" className="inline-flex items-center text-violet-600 hover:underline font-bold group text-lg">
                                <span className="w-2 h-2 rounded-full bg-violet-600 mr-3 group-hover:scale-125 transition-all" />
                                Query Fan-Out Nedir?
                            </Link>
                            <p className="text-sm text-gray-500 ml-5 mt-1 leading-relaxed max-w-2xl">Google AI Modu&apos;nun tek sorguyu onlarca alt sorguya böldüğü mekanizma.</p>
                        </li>
                        <li className="list-none">
                            <Link href="/geo/icerik-chunking" data-pending="true" className="inline-flex items-center text-gray-400 font-bold group text-lg">
                                <span className="w-2 h-2 rounded-full bg-gray-300 mr-3" />
                                İçerik Chunking Rehberi
                            </Link>
                            <p className="text-sm text-gray-400 ml-5 mt-1 leading-relaxed max-w-2xl">Dil modellerinin içeriği parçalara bölme mantığı ve buna göre yazma pratiği.</p>
                        </li>
                        <li className="list-none">
                            <Link href="/seo/topikal-otorite" className="inline-flex items-center text-blue-600 hover:underline font-bold group text-lg">
                                <span className="w-2 h-2 rounded-full bg-blue-600 mr-3 group-hover:scale-125 transition-all" />
                                Topikal Otorite
                            </Link>
                            <p className="text-sm text-gray-500 ml-5 mt-1 leading-relaxed max-w-2xl">Bir konuda kapsamlı ve referans kaynak haline gelerek Google&apos;ın konu otoritesi sinyallerini kazanma.</p>
                        </li>
                    </ul>
                    <div className="pt-6 border-t border-gray-100">
                        <Link href="/geo" className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-gray-800 transition-colors">
                            ← GEO Danışmanlığı ana sayfasına dön
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
}
