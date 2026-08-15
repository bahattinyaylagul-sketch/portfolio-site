/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

const headings = [
    { id: "entity-seo-nedir", text: "Entity SEO nedir?" },
    { id: "knowledge-graph-panel-farki", text: "Knowledge Graph vs Knowledge Panel" },
    { id: "dort-adim", text: "Markayı varlık olarak tanıtmanın 4 adımı" },
    { id: "tanimayi-bozan-hatalar", text: "Varlık tanınmasını bozan 3 hata" },
    { id: "turkiye-ozel", text: "Türkiye'deki markalar için farklı olan ne?" },
    { id: "olcum", text: "Entity SEO başarısı nasıl ölçülür?" },
    { id: "zaman-cizelgesi", text: "Ne zaman sonuç verir?" },
    { id: "sss", text: "Sıkça Sorulan Sorular" },
];

export default function ArticleContent() {
    return (
        <div className="grid lg:grid-cols-[250px_1fr] gap-12 items-start relative">
            {/* Left Sidebar: TOC */}
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

            {/* Main Content */}
            <article className="min-w-0 geo-rehber">
                {/* FIRST ANSWER */}
                <p className="first-answer text-xl text-gray-700 leading-relaxed font-light mb-12 pl-6 border-l-4 border-violet-600">
                    Entity SEO, arama motorlarının markanızı bir kelime öbeği olarak değil, doğrulanmış ve diğer varlıklarla ilişkilendirilmiş tekil bir <em>şey</em> olarak tanımasını sağlama işidir. Anahtar kelime optimizasyonunda hedef bir sorguda sıralanmaktır; entity SEO'da hedef, Google'ın bilgi grafiğinde "bu marka şudur, şuraya aittir, şunlarla ilişkilidir" kaydının oluşmasıdır. AI arama katmanında alıntılanmanın ön koşulu bu kayıttır.
                </p>

                {/* TL;DR */}
                <aside className="tldr mb-12 p-6 md:p-8 bg-violet-50/50 border border-violet-100/80 rounded-3xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-violet-600 text-white text-xs font-black uppercase tracking-widest rounded-full">TL;DR</span>
                        <span className="tldr-baslik text-sm font-bold text-violet-800">Kısaca</span>
                    </div>
                    <p className="text-gray-800 font-bold text-[15px] leading-relaxed mb-4">Google sizi tanımıyorsa sıralayamaz; entity SEO tam olarak bu tanıma sorununu çözer.</p>
                    <ul className="space-y-3.5 text-gray-700 text-[15px] leading-relaxed list-none pl-0 my-0">
                        <li className="flex items-start gap-3">
                            <span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span>
                            <span>Knowledge Graph arka plandaki varlık veritabanı, Knowledge Panel ise onun görünen yüzü. Panel bir hedef değil, tanınmanın yan ürünü.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span>
                            <span>Dört adım: varlığı tek biçimde tanımla, bir "entity home" sayfası kur, Schema.org işaretlemesi uygula, Wikidata üzerinden dış doğrulama bağla.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span>
                            <span>AI Overview görünürlüğüyle marka bahsi arasındaki korelasyon 0,664; geri bağlantılarda aynı sayı 0,218'de kalıyor.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span>
                            <span>Schema uygulaması 4–8 haftada ilk sinyalleri verir. Tam tanıma 3–6 ay kesintisiz tutarlılık ister.</span>
                        </li>
                    </ul>
                </aside>

                {/* Content Body */}
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
                        mb-16"
                >
                    <h2 id="entity-seo-nedir">Entity SEO nedir?</h2>

                    {/* bolum-cevap */}
                    <p className="bolum-cevap">
                        Entity SEO, markanızı, kurucunuzu veya ürününüzü Google'ın bilgi grafiğinde ayrı bir varlık olarak kaydettirmek için dijital sinyalleri düzenleme pratiğidir. Klasik SEO kelimeleri eşleştirir; entity SEO varlıkları ve aralarındaki ilişkileri tanımlar.
                        {/* kaynak: K92, K95-F1 */}
                    </p>

                    <p>
                        Ayrımı en net gösteren şey Google'ın 2012'de Knowledge Graph'ı duyururken kullandığı ifadedir: <em>things, not strings</em> — yani karakter dizileri değil, şeyler.
                        {/* kaynak: K94 */}
                        {" "}Arama motoru "baş ağrısı" harflerini değil, <em>baş ağrısı</em> kavramını ve o kavramın ilaçlarla, semptomlarla, uzmanlık alanlarıyla kurduğu ilişkiyi işler.
                    </p>

                    <p>
                        Bu, pratikte şu anlama geliyor. On yıl önce bir sayfanın konusunu anlamak için Google'ın elinde birlikte geçen kelimelerden yürüttüğü olasılıksal tahminler vardı. Bugün ise doğrulanmış ilişkilerden oluşan yapılandırılmış bir veritabanı var, ve içerik o veritabanına bağlanabildiği ölçüde anlaşılıyor.
                        {/* kaynak: K95-F6 */}
                        {" "}Bağlanamayan içerik yanlış anlaşılmıyor; hiç anlaşılmıyor.
                    </p>

                    <p>
                        Üretken arama motorları bu yapıyı daha da sertleştirdi. Bir dil modeli yanıt üretirken hangi kaynağı alıntılayacağına karar veriyorsa, kaynağın kim olduğunu bilmesi gerekir. Kimliği belirsiz bir alan adı, aynı bilgiyi veren tanınmış bir varlığın yanında sistematik olarak eleniyor. Entity SEO'nun GEO ile kesiştiği nokta burası: <Link href="/geo" className="text-violet-600 hover:underline font-semibold">AI aramada görünürlük</Link> çalışmasının teknik tarafı schema ise, kimlik tarafı entity SEO'dur.
                    </p>


                    <h2 id="knowledge-graph-panel-farki">Knowledge Graph ile Knowledge Panel neden karıştırılıyor?</h2>

                    <p className="bolum-cevap">
                        Knowledge Graph, Google'ın varlıkları, niteliklerini ve ilişkilerini tuttuğu arka uç veritabanıdır. Knowledge Panel ise bir varlık yeterince iyi tanındığında arama sonuçlarının sağında beliren görsel özet kutusudur. Panel, grafikten beslenir; ama grafikte kayıtlı olan her varlık panel tetiklemez.
                        {/* kaynak: K92-F6, K92-F7, K95-F7 */}
                    </p>

                    <p>
                        Karışıklığın maliyeti şu: paneli hedef sanan markalar, panel çıkmadığında çalışmanın işe yaramadığını düşünüp bırakıyor. Oysa panel görünmeden çok önce grafik kaydı oluşmuş, marka sorgularında CTR yükselmiş, AI yanıtlarında alıntılanmaya başlanmış olabilir.
                    </p>

                    <p>
                        Google'ın paneli göstermesi için üç koşulun birden sağlanması gerekiyor: varlığın net tanımlanmış olması, o varlık için yeterli arama talebi bulunması ve aynı adı taşıyan çakışan başka bir varlığın olmaması.
                        {/* kaynak: K95 */}
                        {" "}Üçüncüsü özellikle Türkiye'de sık takılan yer; ortak bir kelimeyi marka adı olarak seçmiş şirketler kendi adlarıyla yarışıyor.
                    </p>

                    <p>
                        Yani paneli takip edin, ama başarı ölçütünüz yapmayın. Detaylı süreç için <Link href="/geo/wikidata-bilgi-paneli" className="text-violet-600 hover:underline font-semibold">Wikidata ve bilgi paneli rehberine</Link> bakabilirsiniz.
                    </p>


                    <h2 id="dort-adim">Markanızı varlık olarak tanıtmanın dört adımı</h2>

                    <p className="bolum-cevap">
                        Sıra şudur: önce varlığı tek biçimde tanımlarsınız, sonra onu anlatan kanonik bir sayfa kurarsınız, ardından o sayfayı makine okunur hale getirirsiniz, en sonunda da dış kaynaklarla doğrularsınız. Adımların sırası önemli — schema'yı, ne olduğunuza karar vermeden uygulamak boş etiket üretir.
                        {/* kaynak: K95 */}
                    </p>

                    <h3 id="adim-1">1. Varlığı tanımlayın</h3>

                    <p>
                        Resmî marka adı, iş kategorisi, kuruluş tarihi, merkez konumu ve kilit kişiler. Beş alan, tek bir doğru cevap.
                        {/* kaynak: K92 */}
                    </p>

                    <p>
                        Burada gördüğüm en yaygın hata teknik değil, kurumsal: hakkımızda sayfasında 2018, LinkedIn'de 2019, faturada başka bir ticari unvan yazıyor. Google bunu bir çelişki olarak değil, <em>düşük güven</em> olarak okuyor. Tanıma süreci yavaşlamıyor sadece, kimi zaman hiç başlamıyor.
                    </p>

                    <h3 id="adim-2">2. Bir "entity home" kurun</h3>

                    <p>
                        Entity home, Google'ın markanın ne olduğunu okuduğu kanonik sayfadır. Genelde hakkımızda sayfası olur. İçinde <code>@id</code> ve <code>sameAs</code> bildirimlerini taşıyan bir JSON-LD bloğu bulunmalı.
                        {/* kaynak: K93 */}
                    </p>

                    <p>
                        Sitenizde en çok iç bağlantı alan sayfa bu olmalı.
                        {/* kaynak: K95 */}
                        {" "}Çoğu sitede bu sayfa menünün en sağında, kimsenin linklemediği bir yerde duruyor — oysa varlık mimarisinin merkezi orası.
                    </p>

                    <h3 id="adim-3">3. Yapılandırılmış veriyi uygulayın</h3>

                    <p>
                        Schema.org işaretlemesi, içeriğinizi bilgi grafiklerinin okuyabileceği formata çevirir. Minimum kapsam: Organization, LocalBusiness, Person ve Product.
                        {/* kaynak: K92 */}
                        {" "}Buna <code>sameAs</code> özelliklerini eklediğinizde, aynı varlığın web genelindeki doğrulanabilir kaynaklarla eşleştiğini beyan etmiş olursunuz.
                        {/* kaynak: K95 */}
                    </p>

                    <p>
                        Uygulama detayları için <Link href="/geo/yapay-zeka-schema" data-pending="true" className="text-violet-600 hover:underline font-semibold">yapay zeka için schema rehberi</Link> ayrı bir sayfa olarak duruyor; burada tekrarlamıyorum.
                    </p>

                    <h3 id="adim-4">4. Wikidata bağlantısını kurun</h3>

                    <p>
                        Wikidata'da P856 (resmî web sitesi) özelliğini eklemek, alan adınızla Knowledge Graph arasında çift yönlü bir sinyal oluşturur.
                        {/* kaynak: K93 */}
                        {" "}Kişi varlıklarını organizasyona bağlamak içinse P108 (employer) kullanılır.
                        {/* kaynak: K93 */}
                    </p>

                    <p>
                        İkincisini neredeyse kimse yapmıyor. Kurucusu tanınan ama şirketiyle bağı kurulmamış marka, iki ayrı zayıf varlık olarak kalıyor; bağ kurulduğunda kişinin otoritesi kuruma akmaya başlıyor. Düşük maliyetli, yüksek getirili bir adım.
                    </p>


                    <h2 id="tanimayi-bozan-hatalar">Varlık tanınmasını bozan üç hata</h2>

                    <p className="bolum-cevap">
                        Entity SEO çalışmalarının çoğu yeni sinyal ekleyemediği için değil, mevcut sinyaller birbiriyle çeliştiği için sonuç vermez. Tutarsız adlandırma, çakışan varlık ve terk edilmiş profiller — üçü de eklediğiniz her yeni sinyalin değerini düşürür.
                    </p>

                    <p>
                        <strong>Tutarsız adlandırma</strong> en yaygını. "Yaylagül Danışmanlık", "Yaylagul Danismanlik", "B. Yaylagül" aynı varlığın üç farklı yazımıysa, Google'ın bunları birleştirmesi gerekir ve bu birleştirme her zaman başarılı olmaz. Türkçe'de sorun katmerli: İ/I, ş/s, ğ/g dönüşümleri yüzünden aynı marka adı dört beş varyantta dolaşabiliyor. Bir biçim seçin, her yerde onu kullanın, diğerlerini <code>alternateName</code> olarak bildirin.
                    </p>

                    <p>
                        <strong>Çakışan varlık</strong> ikinci sırada. Marka adınız yaygın bir kelimeyse veya başka bir sektörde tanınmış bir varlıkla aynıysa, Google hangisini kastettiğinizi ayırt edemez. Çözüm ad değiştirmek değil; varlığı sektörü, konumu ve ilişkileriyle o kadar spesifik tanımlamak ki ayrışma kendiliğinden olsun.
                    </p>

                    <p>
                        <strong>Terk edilmiş profiller</strong> ise sessiz olanı. Üç yıl önce açılıp bırakılmış, eski logolu, eski adresli bir dizin kaydı hâlâ <code>sameAs</code> ağınızın parçası sayılıyor ve çelişkili veri üretiyor. Yılda bir kez kendi marka adınızı aratıp ilk üç sayfadaki tüm kayıtları gözden geçirmek, çoğu schema iyileştirmesinden daha fazla iş görür.
                    </p>


                    <h2 id="turkiye-ozel">Türkiye'deki markalar için farklı olan ne?</h2>

                    <p className="bolum-cevap">
                        Türkçe varlık ekosistemi İngilizce'den daha seyrek: Wikipedia kapsamı dar, sektörel dizinler zayıf, doğrulanmış kaynak sayısı az. Bu bir dezavantaj gibi görünse de pratikte tersi çalışıyor — az sayıda tutarlı sinyal, kalabalık bir alanda yüzlerce sinyalden daha hızlı tanınma sağlıyor.
                    </p>

                    <p>
                        Uygulamada üç noktaya dikkat edin. Wikidata kaydınızda hem Türkçe hem İngilizce etiket ve açıklama girin; tek dilli kayıtlar uluslararası grafikte zayıf eşleşiyor. Google Business Profile'ı yerel işletme olmasanız bile açın — Türkiye'de kurumsal varlıkların en güçlü tek doğrulama kaynağı hâlâ burası. Ve marka adınızın Türkçe karakterli/karaktersiz iki varyantını da <code>alternateName</code> olarak bildirin.
                    </p>

                    <p>
                        Ekşi Sözlük, Şikayetvar ve sektörel forumlar da bu resmin parçası, ama farklı bir mekanizmayla çalışıyorlar: varlık kaydı oluşturmuyorlar, mevcut kaydın etrafındaki bağlamı besliyorlar. Bu tarafı <Link href="/geo/reddit-forum-mention-etkisi" className="text-violet-600 hover:underline font-semibold">forum mention'larının GEO etkisi</Link> sayfasında ele alıyorum.
                    </p>


                    <h2 id="olcum">Entity SEO başarısı nasıl ölçülür?</h2>

                    <p className="bolum-cevap">
                        Klasik SEO metrikleri burada yanıltıyor. En çok bahsedilen markaların yalnızca dörtte birinden azı, aynı zamanda en çok kaynak gösterilen markalar arasına giriyor.
                        {/* kaynak: K90 */}
                        {" "}Bahsedilmek ile alıntılanmak aynı şey değil, ve entity SEO'nun ölçüsü ikincisi.
                    </p>

                    <p>
                        Elimizdeki en çarpıcı veri şu: AI Overview görünürlüğü ile marka bahisleri arasındaki korelasyon 0,664 iken, geri bağlantılarla korelasyon 0,218'de kalıyor.
                        {/* kaynak: K93 */}
                        {" "}Bu, backlink'in değersizleştiği anlamına gelmiyor; AI katmanında farklı bir sinyalin baskın hale geldiği anlamına geliyor. Korelasyonun nedensellik olmadığını da not düşelim — çok bahsedilen markalar zaten büyük markalar olma eğiliminde.
                    </p>
                </div>

                {/* Measurement Table */}
                <div className="not-prose my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                    <table className="w-full text-sm">
                        <caption className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-50 border-b border-gray-200">Entity SEO ölçüm çerçevesi</caption>
                        <thead>
                            <tr className="bg-gray-900 text-white">
                                <th className="text-left px-6 py-4 font-bold">Metrik</th>
                                <th className="text-left px-6 py-4 font-bold">Araç</th>
                                <th className="text-left px-6 py-4 font-bold">Hedef / Kıyaslama</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr className="hover:bg-gray-50 transition-colors"><td className="px-6 py-4 font-medium text-gray-900">Knowledge Graph varlık doğrulaması</td><td className="px-6 py-4 text-gray-700">Google KG Search API</td><td className="px-6 py-4 text-gray-700">Varlık kaydı mevcut mu?</td></tr>
                            <tr className="hover:bg-gray-50 transition-colors"><td className="px-6 py-4 font-medium text-gray-900">AI Overview görünürlüğü</td><td className="px-6 py-4 text-gray-700">Semrush / manuel SERP kontrolü</td><td className="px-6 py-4 text-gray-700">Marka bahsi korelasyonu ≥ 0,664</td></tr>
                            <tr className="hover:bg-gray-50 transition-colors"><td className="px-6 py-4 font-medium text-gray-900">Zengin sonuç uygunluğu</td><td className="px-6 py-4 text-gray-700">Google Search Console</td><td className="px-6 py-4 text-gray-700">Tanınan varlık snippet'ta %50 daha sık</td></tr>
                            <tr className="hover:bg-gray-50 transition-colors"><td className="px-6 py-4 font-medium text-gray-900">AI trafiği dönüşüm oranı</td><td className="px-6 py-4 text-gray-700">GA4 segment karşılaştırması</td><td className="px-6 py-4 text-gray-700">Organik trafiğin belirgin üstünde</td></tr>
                            <tr className="hover:bg-gray-50 transition-colors"><td className="px-6 py-4 font-medium text-gray-900">Schema tutarlılığı</td><td className="px-6 py-4 text-gray-700">Schema Validator</td><td className="px-6 py-4 text-gray-700"><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">sameAs</code> ve varlık bağları hatasız</td></tr>
                            <tr className="hover:bg-gray-50 transition-colors"><td className="px-6 py-4 font-medium text-gray-900">Marka sorgusu CTR</td><td className="px-6 py-4 text-gray-700">Search Console</td><td className="px-6 py-4 text-gray-700">Panel tetiklendiğinde belirgin sıçrama</td></tr>
                        </tbody>
                    </table>
                </div>
                {/* kaynak: K90, K92, K93, K95 */}

                <div
                    className="prose prose-lg max-w-none 
                        prose-headings:font-sans prose-headings:font-bold prose-headings:text-foreground
                        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight
                        prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-gray-800
                        prose-p:font-sans prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-6
                        prose-strong:font-bold prose-strong:text-gray-900
                        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                        prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-gray-800
                        mb-16"
                >
                    <p>
                        Vaka verileri bu çerçevenin gerçekçi olduğunu gösteriyor. Sıfır alan otoritesiyle başlayan bir e-ticaret markası altı ayda 668.000 gösterim ve 6.795 organik tıklamaya ulaştı; varlık odaklı bir içerik platformu aylık 278.000 oturumdan 1,18 milyon oturuma çıktı; bir schema sağlayıcısının varlık bağlama testinde birincil sorguda CTR %336 arttı.
                        {/* kaynak: K95, K93 */}
                        {" "}Son ikisinin ölçümü ilgili araç sağlayıcılar tarafından yapıldı, dolayısıyla iyimser tarafta okunmalı.
                    </p>


                    <h2 id="zaman-cizelgesi">Ne zaman sonuç verir?</h2>

                    <p className="bolum-cevap">
                        Schema uygulaması 4–8 hafta içinde ilk sinyalleri üretir. Tam Knowledge Graph tanıması ise 3–6 ay kesintisiz tutarlılık ister — buradaki belirleyici değişken çalışmanın hacmi değil, sinyallerin birbiriyle çelişmemesi.
                        {/* kaynak: K95 */}
                    </p>

                    <p>
                        İlk 30 gün için sıralama şu: schema denetimi, Organization schema kurulumu, Google Business Profile talebi, hakkımızda sayfasının yeniden yazımı.
                        {/* kaynak: K95 */}
                    </p>

                    <p>
                        Sonraki iki ay Wikidata kaydı, <code>sameAs</code> ağının genişletilmesi ve eski/çelişkili profillerin temizlenmesiyle geçer. Altıncı aya gelindiğinde ya grafikte kayıtlısınızdır ya da tutarsız kalmış bir sinyal vardır — ve bu durumda daha fazla schema eklemek işe yaramaz, çelişkiyi bulmak gerekir.
                    </p>


                    <h2 id="sss">Sıkça Sorulan Sorular</h2>

                    <h3>Knowledge Panel nasıl alınır?</h3>
                    <p>
                        Doğrudan talep edilebilecek bir şey değil. Panel, bilgi grafiği tanınmasının görünür yan ürünü; Google onu yalnızca varlık iyi tanımlanmışsa, yeterli arama talebi varsa ve aynı adı taşıyan çakışan bir varlık yoksa gösteriyor.
                        {/* kaynak: K95 */}
                        {" "}Panel çıkmıyorsa bu üç koşuldan hangisinin eksik olduğunu bulmak, panel talebiyle uğraşmaktan daha verimli.
                    </p>

                    <h3>Wikidata kaydı zorunlu mu?</h3>
                    <p>
                        Hayır, ama muhtemelen en yüksek getirili tek adım. Wikipedia'dan farklı olarak Wikidata'nın notability şartı yok, dolayısıyla küçük markalar da kayıt oluşturabiliyor.
                        {/* kaynak: K93 */}
                    </p>

                    <h3>Backlink mi, mention mı daha etkili?</h3>
                    <p>
                        AI arama katmanında mention. Marka bahislerinin AI Overview görünürlüğüyle korelasyonu 0,664, geri bağlantılarınki 0,218.
                        {/* kaynak: K93 */}
                        {" "}Klasik organik sıralamada backlink hâlâ belirleyici olmaya devam ediyor — yani bu bir "yerine geçme" değil, bir katman farkı.
                    </p>

                    <h3>Schema olmadan entity SEO yapılabilir mi?</h3>
                    <p>
                        Yapılabilir ama çok daha yavaş ilerler. Güçlü varlık sinyali taşımayan sayfalar AI arama alıntı katmanında pratikte görünmez kalıyor.
                        {/* kaynak: K95 */}
                        {" "}Schema tanınmanın koşulu değil, hızlandırıcısı.
                    </p>

                    <h3>Küçük markalar nereden başlamalı?</h3>
                    <p>
                        Tek bir marka adı biçimi belirleyip her platformda onu kullanmaktan. Sonra Wikidata kaydı, sonra Organization schema.
                        {/* kaynak: K93 */}
                        {" "}Bu üçü en az kaynakla en hızlı sinyal birikimini veriyor. Sıralamayı bozup schema'dan başlamak, tanımlanmamış bir varlığı etiketlemek anlamına geldiği için işe yaramıyor.
                    </p>

                    <h3>Kişisel marka için de geçerli mi?</h3>
                    <p>
                        Evet, hatta daha kritik. Person varlığı ile Organization varlığı arasındaki bağ kurulduğunda ikisi birbirini besliyor; kurulmadığında ikisi de tek başına zayıf kalıyor. Danışman, avukat, hekim gibi kişi merkezli hizmetlerde entity çalışmasının çıkış noktası kurum değil, kişi olmalı.
                    </p>
                </div>

                {/* CTA — Tek CTA, §4 Kural 5: /geo'ya yönlendir */}
                <div className="bg-gray-50 border-l-4 border-violet-600 p-8 rounded-r-xl my-12 not-prose">
                    <h4 className="text-xl font-bold text-foreground mb-4">Markanızın varlık otoritesini inşa edin</h4>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        Entity SEO, yapay zeka arama motorlarında alıntılanmanın ön koşuludur. Markanızın Knowledge Graph kaydını, schema mimarisini ve dijital kimlik tutarlılığını stratejik olarak kurmak için profesyonel destek alın.
                    </p>
                    <Link href="/geo" className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white font-bold rounded-full hover:bg-violet-700 transition-colors text-sm">
                        GEO Danışmanlığı hakkında bilgi alın
                        <span>→</span>
                    </Link>
                </div>

                {/* Ayrıca Bakınız — §4 Kural 3: 3 kardeş + 1 komşu */}
                <div className="mt-16 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Ayrıca Bakınız</h2>
                    <ul className="space-y-6 mb-8">
                        {/* Kardeş D: ai-marka-mention-etkisi */}
                        <li className="list-none">
                            <Link href="/geo/ai-marka-mention-etkisi" className="inline-flex items-center text-violet-600 hover:underline font-bold group text-lg">
                                <span className="w-2 h-2 rounded-full bg-violet-600 mr-3 group-hover:scale-125 transition-all" />
                                Marka Mention'ları ve AI Hafızası
                            </Link>
                            <p className="text-sm text-gray-500 ml-5 mt-1 leading-relaxed max-w-2xl">Link içermeyen marka anılmalarının LLM modellerinin bilgi ağındaki yeri ve kalıcılık etkisi.</p>
                        </li>
                        {/* Kardeş D: reddit-forum-mention-etkisi */}
                        <li className="list-none">
                            <Link href="/geo/reddit-forum-mention-etkisi" className="inline-flex items-center text-violet-600 hover:underline font-bold group text-lg">
                                <span className="w-2 h-2 rounded-full bg-violet-600 mr-3 group-hover:scale-125 transition-all" />
                                Reddit ve Forum Mention'larının GEO Etkisi
                            </Link>
                            <p className="text-sm text-gray-500 ml-5 mt-1 leading-relaxed max-w-2xl">Sosyal medya ve topluluk kanallarındaki atıfların yapay zeka tavsiyelerine doğrudan etkisi.</p>
                        </li>
                        {/* Kardeş D: dijital-pr-ai-atif */}
                        <li className="list-none">
                            <Link href="/geo/dijital-pr-ai-atif" className="inline-flex items-center text-violet-600 hover:underline font-bold group text-lg">
                                <span className="w-2 h-2 rounded-full bg-violet-600 mr-3 group-hover:scale-125 transition-all" />
                                Dijital PR ve "En İyi X" Listeleri
                            </Link>
                            <p className="text-sm text-gray-500 ml-5 mt-1 leading-relaxed max-w-2xl">Yapay zeka arama motorlarının öneri sorgularında hangi editöryel listeleri okuduğunu tespit etme, o listelere girme ve atıfı ölçülebilir GEO sinyaline çevirme rehberi.</p>
                        </li>
                        {/* Kardeş D: wikidata-bilgi-paneli */}
                        <li className="list-none">
                            <Link href="/geo/wikidata-bilgi-paneli" className="inline-flex items-center text-violet-600 hover:underline font-bold group text-lg">
                                <span className="w-2 h-2 rounded-full bg-violet-600 mr-3 group-hover:scale-125 transition-all" />
                                Wikidata ve Bilgi Paneli Rehberi
                            </Link>
                            <p className="text-sm text-gray-500 ml-5 mt-1 leading-relaxed max-w-2xl">Wikidata kaydı oluşturma, P856/P108 özellikleri ve Knowledge Panel stratejisi.</p>
                        </li>
                        {/* Komşu cluster (SEO silo köprüsü): §4 Kural 4 */}
                        <li className="list-none">
                            <Link href="/seo/topikal-otorite" className="inline-flex items-center text-blue-600 hover:underline font-bold group text-lg">
                                <span className="w-2 h-2 rounded-full bg-blue-600 mr-3 group-hover:scale-125 transition-all" />
                                Topikal Otorite
                            </Link>
                            <p className="text-sm text-gray-500 ml-5 mt-1 leading-relaxed max-w-2xl">Bir konuda kapsamlı ve referans kaynak haline gelerek Google'ın konu otoritesi sinyallerini kazanma.</p>
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
