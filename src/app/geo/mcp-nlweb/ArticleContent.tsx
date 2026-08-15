/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

const headings = [
    {
        "id": "neden-onemli",
        "text": "Bu neden bir GEO konusu?"
    },
    {
        "id": "karsilastirma",
        "text": "Üç protokol, tek tabloda"
    },
    {
        "id": "hangisi",
        "text": "Hangi senaryoda hangisi?"
    },
    {
        "id": "anlik-durum",
        "text": "Anlık durum: nerede çalışıyor?"
    },
    {
        "id": "llms-txt-karsilastirma",
        "text": "llms.txt mi, WebMCP mi?"
    },
    {
        "id": "sss",
        "text": "Sıkça Sorulan Sorular"
    }
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
                                <span className="font-mono text-xs text-gray-400 mr-2 font-medium">
                                    {(i + 1).toString().padStart(2, '0')}
                                </span>
                                {heading.text}
                            </a>
                        ))}
                    </nav>
                </div>
            </aside>

            <article className="min-w-0 geo-rehber">
                <p className="first-answer text-xl text-gray-700 leading-relaxed font-light mb-12 pl-6 border-l-4 border-violet-600">
    Üçü de yapay zeka ajanlarının web siteleriyle konuşmasını sağlayan protokoller,
    ama farklı katmanlarda çalışıyorlar. MCP temel protokol; ajan ile araç arasındaki
    ortak dil. WebMCP bu protokolü tarayıcıya taşıyor — site, ajana doğrudan JavaScript
    üzerinden araç sunuyor. NLWeb ise sunucu tarafında çalışıp mevcut siteyi bir doğal
    dil arayüzüne çeviriyor.
  </p>
                <aside className="tldr mb-12 p-6 md:p-8 bg-violet-50/50 border border-violet-100/80 rounded-3xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-violet-600 text-white text-xs font-black uppercase tracking-widest rounded-full">TL;DR</span>
                        <span className="tldr-baslik text-sm font-bold text-violet-800">Kısaca</span>
                    </div>
                    <p className="text-gray-800 font-bold text-[15px] leading-relaxed mb-4"><strong>GEO şu ana kadar "ajan sitemi okuyabiliyor mu" sorusuydu; bu protokoller "ajan sitemde işlem yapabiliyor mu" sorusunu açıyor.</strong></p>
                    <ul className="space-y-3.5 text-gray-700 text-[15px] leading-relaxed list-none pl-0 my-0"><li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>MCP protokol, WebMCP tarayıcı katmanı, NLWeb sunucu katmanı. Rakip değil, farklı seviyeler.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Her NLWeb örneği aynı zamanda bir MCP sunucusu — ikisi birbirini dışlamıyor.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>WebMCP henüz yalnızca Chrome'da ve tek tüketici ajan var. Erken aşama.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Bugün acil değil, ama e-ticaret ve rezervasyon işi yapıyorsanız takvime almalısınız.</span></li></ul>
                </aside>
                
                <div className="prose prose-lg max-w-none 
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
                        prose-table:text-sm
                        mb-16">
                    <h2 id="neden-onemli">Bu neden bir GEO konusu?</h2>

  <p className="bolum-cevap">
    Çünkü ajanlı web, GEO'nun kapsamını genişletiyor. Bugüne kadar mesele içeriğinizin
    bir dil modeli tarafından okunup alıntılanmasıydı. Bu protokoller bir adım öteye
    geçiyor: ajan sitenizde arama yapabiliyor, sepete ürün ekleyebiliyor, randevu
    alabiliyor. Görünürlük artık "cevapta geçmek" değil, "işlemin gerçekleştiği yer
    olmak" hâline geliyor.
  </p>

  <p>
    Fark şurada somutlaşıyor. Kullanıcı ajana "bana uygun bir koşu ayakkabısı bul ve
    sipariş ver" dediğinde, ajan önce bilgi kaynaklarına bakıyor — burası klasik GEO
    alanı. Sonra bir siteye gidip işlemi tamamlaması gerekiyor. Ajanın işlem
    yapabildiği siteler bu ikinci aşamada varken, yapamadığı siteler eleniyor.
  </p>

  <p>
    Bugün bu bir acil durum değil. Ama e-ticaret, rezervasyon, randevu veya
    abonelik satıyorsanız, önümüzdeki bir yılın teknik yol haritasına girmesi gereken
    bir başlık.
  </p>


  <h2 id="karsilastirma">Üç protokol, tek tabloda</h2>

  <p className="bolum-cevap">
    MCP sunucu tarafında çalışan temel protokoldür ve fiili endüstri standardı hâline
    gelmiştir. WebMCP tarayıcı sekmesi içinde çalışır, ayrı bir backend gerektirmez.
    NLWeb sunucu taraflıdır ve HTTP üzerinden çalışır; mevcut site içeriğini ajanlara
    açmanın en hızlı yoludur.
  </p>

  <table>
    <caption>MCP, WebMCP ve NLWeb karşılaştırması</caption>
    <thead>
      <tr><th scope="col">Kriter</th><th scope="col">MCP</th><th scope="col">WebMCP</th><th scope="col">NLWeb</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">Çalıştığı katman</th><td>Sunucu / backend</td><td>Tarayıcı sekmesi</td><td>Sunucu taraflı</td></tr>
      <tr><th scope="row">Geliştiren</th><td>Anthropic</td><td>Google ve Microsoft mühendisleri, W3C Web ML Community Group</td><td>Microsoft (açık kaynak)</td></tr>
      <tr><th scope="row">Standart durumu</th><td>Fiili endüstri standardı</td><td>W3C taslak spesifikasyonu</td><td>Açık kaynak referans uygulama</td></tr>
      <tr><th scope="row">Ajanın bağlandığı yer</th><td>Backend MCP sunucusu</td><td><code>document.modelContext</code> — tarayıcı içi</td><td><code>/mcp</code> endpoint'i</td></tr>
      <tr><th scope="row">Temel API</th><td>Araç tanımları + JSON-RPC</td><td><code>document.modelContext</code></td><td><code>/ask</code> ve <code>/mcp</code></td></tr>
      <tr><th scope="row">Tarayıcı bağımlılığı</th><td>Yok</td><td>Zorunlu</td><td>Yok</td></tr>
      <tr><th scope="row">Güvenlik modeli</th><td>Sunucu kontrolü</td><td>Tarayıcı aracılı — çağrılar ajandan sayfaya değil, tarayıcı üzerinden geçer</td><td>Sunucu taraflı erişim kontrolü</td></tr>
    </tbody>
  </table>
  {/* kaynak: K143, K165, K167 */}

  <p>
    Tabloda gözden kaçan bir ayrıntı var: <strong>her NLWeb örneği aynı zamanda bir MCP
    sunucusudur.</strong>
    {/* kaynak: K143 */}
    Yani NLWeb kurduğunuzda MCP'yi de kurmuş oluyorsunuz. WebMCP ise farklı bir şey
    yapıyor — mevcut frontend kodunuzu, arka uç yazmadan ajansal bir yeteneğe çeviriyor.
    {/* kaynak: K166 */}
  </p>

  <p>
    NLWeb'i RSS, RDF ve Schema.org'un yaratıcısı R.V. Guha tasarladı.
    {/* kaynak: K143 */}
    Bu detay boş bir künye bilgisi değil: aynı kişinin yapılandırılmış veri geleneğinden
    geldiğini bilmek, NLWeb'in neden şema odaklı düşündüğünü açıklıyor.
  </p>


  <h2 id="hangisi">Hangi senaryoda hangisi?</h2>

  <p className="bolum-cevap">
    Mevcut içeriği ajanlara açmak istiyorsanız NLWeb, sayfanıza işlem yeteneği eklemek
    istiyorsanız WebMCP, kendi ajanınızı yazıyorsanız doğrudan MCP. Üçünü aynı anda
    kullanmak da mümkün — birbirlerini dışlamıyorlar.
  </p>

  <h3 id="nlweb-ne-zaman">İçeriğinizi ajanlara açmak: NLWeb</h3>

  <p>
    Kod yazmadan mevcut içeriği sorgulanabilir hâle getirmenin en hızlı yolu. Cloudflare
    AI Search üzerinden doğrudan dağıtılabiliyor; etkinleştirdiğinizde bir NLWeb Worker
    devreye giriyor ve siteniz NLWeb API endpoint'leri üzerinden sorgulanabilir oluyor.
    {/* kaynak: K144 */}
  </p>

  <p>
    İçerik ağırlıklı siteler — blog, dokümantasyon, bilgi tabanı — için mantıklı ilk adım.
  </p>

  <h3 id="webmcp-ne-zaman">Sayfanıza araç eklemek: WebMCP</h3>

  <p>
    Kurulum tek script düzeyinde. Cloudflare kendi altyapısındaki sitelere kod değişikliği
    gerektirmeden sundu; Shopify ise tüm Liquid storefront'lar için varsayılan açtı ve
    katalog arama, sepet, ödeme ve politika sorgulama araçları hazır geliyor.
    {/* kaynak: K167 */}
  </p>

  <p>
    Teknik entegrasyon dakikalar alıyor. Asıl iş araç tanımlarını ve izin mantığını
    yazmak.
    {/* kaynak: K166 */}
  </p>

  <p>
    Güvenlik tarafında varsayılan makul: formlar kullanıcı onayı istiyor.
    <code>toolautosubmit</code> özelliği ajanın doğrudan göndermesine izin veriyor, ama
    hassas işlemlerde açık onayı zorunlu tutmak mümkün.
    {/* kaynak: K166, K167 */}
    Ödeme akışlarında formu ajanın doldurup gönderme butonunu kullanıcıya bırakması
    yaygın desen — bunu varsayılan kabul edin.
  </p>

  <h3 id="mcp-ne-zaman">Kendi ajanınızı yazmak: MCP</h3>

  <p>
    Hem NLWeb hem WebMCP, MCP araç çağrılarına yanıt veriyor. Protokol katmanında
    konuştuğunuzda hangisinin arkada durduğu fark etmiyor. Ajan geliştiriyorsanız
    doğrudan MCP'ye yazın.
  </p>


  <h2 id="anlik-durum">Anlık durum: nerede çalışıyor?</h2>

  <p className="bolum-cevap">
    WebMCP henüz erken aşamada. Yalnızca Chrome'da çalışıyor, tek tüketici ajan var
    ve API adı son bir yılda iki kez değişti. Üretim kararı verirken bu oynaklığı
    hesaba katın.
  </p>

  <p>
    <strong>Tarayıcı desteği:</strong> Origin trial Chrome 149'da başladı ve Chrome
    156'ya kadar sürüyor. Edge 147'nin sürüm notlarında yer almıyor; Firefox ve Safari
    için kamuya açık sinyal yok.
    {/* kaynak: K167 */}
  </p>

  <p>
    <strong>Tüketici ajan:</strong> Şu an yalnızca Chrome'daki Gemini WebMCP araçlarını
    tüketiyor. Google ve Microsoft standardı birlikte geliştiriyor ama aktif tüketim
    tarafında tek oyuncu var.
    {/* kaynak: K165, K167 */}
  </p>

  <p>
    <strong>API kararsızlığı:</strong> Önce <code>window.agent</code> olarak tasarlandı
    ama yayınlanmadı. Sonra <code>navigator.modelContext</code> geldi, Chrome 150 onu
    deprecated etti. W3C taslağı getter'ı <code>document.modelContext</code>'e taşıdı —
    gerekçe makul: araçlar tarayıcıya değil sayfaya ait.
    {/* kaynak: K167 */}
  </p>

  <p>
    Bu üçü birlikte okunduğunda tablo net: WebMCP'ye bugün yatırım yapmak erken benimseme
    kararı, altyapı kararı değil. Shopify veya Cloudflare kullanıyorsanız zaten
    varsayılan geliyor — o durumda kapatmak için bir sebebiniz yok. Kendi altyapınızı
    yönetiyorsanız beklemek de savunulabilir.
  </p>


  <h2 id="llms-txt-karsilastirma">llms.txt mi, WebMCP mi?</h2>

  <p className="bolum-cevap">
    İkisi farklı işler yapıyor. llms.txt sitenizin statik içerik haritasını sunuyor,
    WebMCP ise çağrılabilir araçlar sunuyor. Ajanın bir şeyi <em>okumasını</em>
    istiyorsanız birincisi, <em>yapmasını</em> istiyorsanız ikincisi.
    {/* kaynak: K167 */}
  </p>

  <p>
    Google tarafından John Mueller, llms.txt'yi "tamamen spekülatif" olarak nitelendirdi
    ve WebMCP yaklaşımını tercih ettiğini belirtti.
    {/* kaynak: K167 */}
    llms.txt'nin güncel durumunu ve verilerini
    <Link href="/geo/llms-txt-nedir">ayrı sayfada</Link> ele alıyorum; kısa cevap, statik
    dosyanın vaat ettiği faydayı sağlamadığı yönünde.
  </p>

  <p>
    Ama bu WebMCP'nin llms.txt'nin yerini aldığı anlamına gelmiyor. İkisi farklı
    katmanlar. Ajanın sitenizi <em>bulması</em> hâlâ klasik GEO işi — bot erişimi,
    yapılandırılmış veri, varlık kaydı. Bunları
    <Link href="/geo/ai-botlari-robots-txt">bot yönetimi</Link> ve
    <Link href="/geo/yapay-zeka-schema" data-pending="true">schema</Link> sayfalarında
    ele alıyorum.
  </p>


  <h2 id="sss">Sıkça Sorulan Sorular</h2>

  <h3>WebMCP hangi tarayıcılarda çalışıyor?</h3>
  <p>
    Şu an yalnızca Chrome. Origin trial Chrome 149'da başladı, Chrome 156'ya kadar
    sürüyor. Edge 147 sürüm notlarında yok; Firefox ve Safari için kamuya açık sinyal
    bulunmuyor.
    {/* kaynak: K167 */}
  </p>

  <h3>WebMCP API adı neden değişti?</h3>
  <p>
    İki kez değişti. <code>window.agent</code> tasarlandı ama yayınlanmadı;
    <code>navigator.modelContext</code> geldi ve Chrome 150'de deprecated edildi;
    W3C taslağı <code>document.modelContext</code>'e taşıdı. Gerekçe, araçların
    tarayıcıya değil sayfaya ait olması.
    {/* kaynak: K167 */}
    Pratik sonucu: entegrasyon kodunuzu soyutlama katmanı arkasına almakta fayda var.
  </p>

  <h3>WebMCP'yi siteye eklemek ne kadar sürer?</h3>
  <p>
    Tek bir script etiketi yeterli.
    {/* kaynak: K166 */}
    Teknik entegrasyon dakikalar alıyor. Asıl zaman araç tanımlarını yazmakta ve
    hangi işlemin hangi izinle çalışacağına karar vermekte geçiyor.
  </p>

  <h3>NLWeb ile MCP'yi ayrı ayrı kurmam gerekir mi?</h3>
  <p>
    Hayır. Her NLWeb örneği aynı zamanda bir MCP sunucusu olarak çalışıyor.
    {/* kaynak: K143 */}
  </p>

  <h3>Bugün başlamak zorunda mıyım?</h3>
  <p>
    Hayır, ama sektörünüze bağlı. İçerik yayıncısıysanız beklemek makul. E-ticaret,
    rezervasyon veya randevu satıyorsanız ve platformunuz zaten destek sunuyorsa
    açmamak için sebep yok. Kendi altyapınızı yönetiyorsanız, standart oturana kadar
    izlemek savunulabilir bir pozisyon.
  </p>

  <h3>Ajanlar sitede hangi işlemleri yapabiliyor?</h3>
  <p>
    Araçlar üç tipe ayrılıyor: bilgi çeken read-only araçlar (arama, detay, müsaitlik),
    sayfa üzerinde işlem yapan act araçları, ve ödeme veya rezervasyon gibi süreci
    tamamlayan transact araçları.
    {/* kaynak: K168 */}
    Risk profili de bu sırayla artıyor; transact katmanında kullanıcı onayını
    varsayılan tutmak doğru yaklaşım.
  </p>
                </div>
            </article>
        </div>
    );
}
