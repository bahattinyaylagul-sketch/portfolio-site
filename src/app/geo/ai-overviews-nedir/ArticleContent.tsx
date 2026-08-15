/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

const headings = [
    {
        "id": "ai-bakisi-nedir",
        "text": "AI Bakışı nedir?"
    },
    {
        "id": "turkiye-lansmani",
        "text": "AI Bakışı Türkiye'de ne zaman açıldı ve ne değişti?"
    },
    {
        "id": "nasil-calisir",
        "text": "AI Bakışı nasıl çalışır: sorgu yayma ve kaynak sentezi"
    },
    {
        "id": "ai-modu-farki",
        "text": "AI Bakışı ile AI Modu aynı şey mi?"
    },
    {
        "id": "ne-zaman-gorunur",
        "text": "Ne zaman görünür, ne zaman görünmez?"
    },
    {
        "id": "trafik-etkisi",
        "text": "Organik trafik ve SEO üzerindeki gerçek etki"
    },
    {
        "id": "gorunurluk-kriterleri",
        "text": "AI Bakışı'nda görünmek için içerik ve teknik kriterler"
    },
    {
        "id": "olcum",
        "text": "Search Console ile AI Bakışı trafiğini izleme"
    },
    {
        "id": "opt-out",
        "text": "AI Bakışı'ndan çıkma ve önizleme kontrolü"
    },
    {
        "id": "hukuki-riskler",
        "text": "Yayıncılar için hukuki ve etik riskler"
    },
    {
        "id": "tarihce",
        "text": "SGE'den AI Bakışı'na: kısa tarihçe"
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
    AI Bakışı, Google'ın Gemini modeliyle arama sonuçlarının en üstünde otomatik olarak
    ürettiği yapay zeka özetidir. Birden fazla siteden sentezlenen yanıt, ücretli reklamların
    hemen altında ve tüm organik sonuçlardan önce görünür; kullandığı kaynaklara bağlantı
    verir. Türkiye'de 18 Şubat 2026'da resmi Türkçe adıyla açıldı. Her sorguda çıkmaz —
    Google yalnızca klasik sonuçlara katkı sağlayacağına karar verdiği durumlarda gösterir.
  </p>
                <aside className="tldr mb-12 p-6 md:p-8 bg-violet-50/50 border border-violet-100/80 rounded-3xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-violet-600 text-white text-xs font-black uppercase tracking-widest rounded-full">TL;DR</span>
                        <span className="tldr-baslik text-sm font-bold text-violet-800">Kısaca</span>
                    </div>
                    <p className="text-gray-800 font-bold text-[15px] leading-relaxed mb-4"><strong>AI Bakışı sıralamayı değil görünürlüğü yeniden dağıtıyor: organik birinci sırada olmak artık ekranda olmakla aynı şey değil.</strong></p>
                    <ul className="space-y-3.5 text-gray-700 text-[15px] leading-relaxed list-none pl-0 my-0"><li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Türkiye 18 Şubat 2026'da açıldı ve önceki dalgaların dışında kalmıştı. Türkçe cevap havuzu hâlâ ince; fırsat penceresi şu an açık.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>"AI Bakışı için özel optimizasyon" diye bir şey yok. Dizine eklenmemiş, <code>nosnippet</code> taşıyan ya da cevabı sayfanın ortasına saklayan sayfa yarışa hiç giremiyor.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Search Console AIO trafiğini ayrı raporlamıyor. Yüksek ortalama konum + beklenenin altında tıklama oranı, elinizdeki tek pratik tanı yöntemi.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Resmi bir çıkış yolu yok. Tek gerçek kaldıraç <code>nosnippet</code> ve bedeli snippet'in tamamından vazgeçmek.</span></li></ul>
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
                    {/* kaynak: K42 */}
  {/* kaynak: K41 */}

  


  <h2 id="ai-bakisi-nedir">AI Bakışı nedir?</h2>

  <p className="bolum-cevap">
    AI Bakışı (AI Overviews), Google'ın Gemini modelini kullanarak arama sonuç sayfasının
    en üstünde ürettiği yapay zeka özetidir. Birden fazla web kaynağından sentezlenir,
    kullanıcıya doğrudan yanıt verir ve yararlandığı sitelere bağlantı gösterir. SERP'te
    sıfırıncı konumu işgal eder: reklamların hemen altında, organik listenin ve öne çıkan
    snippet'in tamamından önce.
  </p>
  {/* kaynak: K42 */}

  <p>
    Konumun kendisi hikâyenin yarısı. Diğer yarısı şu: bu blok her sorguda çıkmıyor.
    Google'ın sistemi, üretilecek özetin klasik arama sonuçlarına gerçekten bir şey katıp
    katmayacağını değerlendiriyor ve yalnızca katacağına karar verdiğinde gösteriyor.
    {/* kaynak: K41 */}
    Marka aramalarında veya "instagram giriş" tipi navigasyonel sorgularda genelde
    görünmüyor. Açıklama, karşılaştırma, karar verme gerektiren sorularda devreye giriyor.
  </p>

  <p>
    Bu ayrım, <Link href="/geo">GEO danışmanlığı</Link> tarafında ilk yapılan işi belirliyor:
    hedef sorgu listenizin hangi kısmının AIO tetiklediğini bilmeden bütçe ayırmak, ekranda
    olmayan bir yarışa yatırım yapmak demek.
  </p>

  <h3>Öne çıkan snippet ile farkı</h3>

  <p>
    Öne çıkan snippet tek bir web sayfasından kelimesi kelimesine alınan bir alıntıdır.
    AI Bakışı ise birden fazla kaynaktan derleyip yeniden yazar.
    {/* kaynak: K42 */}
    Biri kopyalar, diğeri sentezler. Pratik sonucu göründüğünden daha önemli: klasik bir
    web aramasına kıyasla daha fazla sayıda faydalı bağlantı gösterilebiliyor
    {/* kaynak: K41 */}
    ve tek bir sitenin sıfırıncı konumu tekeline alması yerine birkaç kaynak aynı anda
    görünürlük kazanabiliyor. Snippet'te kaybettiğiniz sorguda AI Bakışı'nda kaynak olarak
    yer alma ihtimaliniz duruyor.
  </p>


  <h2 id="turkiye-lansmani">AI Bakışı Türkiye'de ne zaman açıldı ve ne değişti?</h2>

  <p className="bolum-cevap">
    Google, AI Modu ve AI Bakışı'nı Türkiye'de 18 Şubat 2026'da kullanıma açtı. Duyuruyu
    Google Türkiye Ülke Direktörü Mehmet Keteloğlu yaptı ve iki yüzey Türkçe resmi adlarıyla
    tanıtıldı. Türkiye, özelliğin daha önce açıldığı 180 ülkelik dalganın dışında bırakılmıştı;
    yani Türkçe arama sonuçları yıllarca bu bloğu görmedi. Türkçe cevap havuzunun ince olmasının
    sebebi de bu gecikme.
  </p>
  {/* kaynak: Google Türkiye resmi duyurusu, 18 Şubat 2026 */}

  <p>
    Duyuru
    <a href="https://blog.google/intl/tr-tr/urun-duyurulari/turkiyede-ai-modu-ve-ai-bakisi-donemi-basliyor/" rel="noopener" target="_blank">Google'ın Türkiye blogunda</a>
    yayımlandı ve terminolojiyi de sabitledi: sonuç sayfasının üstündeki özet bloğunun adı
    AI Bakışı, ayrı sekmenin adı AI Modu.
  </p>

  <p>
    Terimin kendisi burada stratejik bir mesele. Lansmana kadar Türkçe SEO içeriğinde
    "Yapay Zeka Genel Bakışı", "Yapay Zeka Özetleri", "Yapay Zeka Bakışı" gibi yarım düzine
    karşılık dolaşıyordu. Google'ın seçtiği ad <strong>AI Bakışı</strong>. Kullanıcı arama
    kutusuna bu adı yazmaya başladığında, içeriğini eski karşılıklara çapalamış sayfalar
    sorgunun tamamını kaçırır. Bu sayfanın URL'i tarihsel nedenlerle
    <code>/geo/ai-overviews-nedir</code> olarak kalıyor, ancak metnin çapası AI Bakışı.
  </p>

  <p>
    Gecikmenin yarattığı asimetri şu: İngilizce sorgularda AIO iki yıldır çalışıyor ve o dilde
    cevap veren içerik yığını çoktan oluştu. Türkçede tablo bambaşka. Birçok orta ve uzun
    kuyruklu Türkçe sorguda modelin sentezleyebileceği yeterlilikte, yapılandırılmış,
    doğrudan cevap veren Türkçe kaynak yok. Sistem bu durumda ya İngilizce kaynaklardan
    çeviriyor ya da forum ve soru-cevap içeriğine yaslanıyor.
  </p>

  <p>
    Bu, ölçülebilir bir fırsat penceresi. Türkçe bir sorgu için ilk ciddi, kaynaklı, soru-cevap
    yapılı sayfayı siz yayımlarsanız rekabetiniz yerli birkaç zayıf içerik oluyor — İngilizcedeki
    gibi yüzlerce olgunlaşmış rakip değil. Pencere kapanacak; şu an açık.
  </p>

  <p>
    Bir uyarı da gerekiyor. Ham verilerde AI Bakışı'nın Mayıs 2025 itibarıyla 200'den fazla
    ülkede çalıştığı belirtiliyor
    {/* kaynak: K43 */}
    ama Türkiye Şubat 2026'ya kadar kapsam dışındaydı. İki bilgi tam olarak bağdaşmıyor;
    kapsam sayıları muhtemelen dil desteği ile ülke erişimini aynı torbada topluyor. Ülke
    bazlı kapsam iddialarını olduğu gibi almak yerine, kendi hedef sorgularınızda gözle
    doğrulamak daha güvenli.
  </p>


  <h2 id="nasil-calisir">AI Bakışı nasıl çalışır: sorgu yayma ve kaynak sentezi</h2>

  <p className="bolum-cevap">
    AI Bakışı tek bir kaynaktan cevap kopyalamaz. Büyük dil modelleriyle birden fazla web
    sayfasını tarar, analiz eder ve tek bir yanıtta birleştirir.
    Perde arkasında sorunuz onlarca alt sorguya bölünür; bu tekniğe <strong>sorgu yayma</strong>
    (query fan-out) denir. Sistem bu alt sorguların sonuçlarını paralel toplayıp sentezler.
    Sizin göründüğünüz yer, cevabın tamamı değil, o alt sorgulardan biridir.
  </p>
  {/* kaynak: K43 */}
  {/* kaynak: K41 */}

  <p>
    "Evde protein kaynakları" yazdığınızda sistem arka planda "bitkisel protein",
    "hayvansal protein", "günlük protein ihtiyacı" gibi yan sorguları da çalıştırıyor olabilir.
    Bunun içerik tarafındaki karşılığı doğrudan: ana sorguya mükemmel cevap veren tek bir
    dev sayfa yerine, alt soruların her birine ayrı ayrı ve net cevap veren bölümler kazanıyor.
    Mekanizmanın ayrıntısını <Link href="/geo/query-fan-out">sorgu yayma
    sayfasında</Link>, bölümlerin nasıl parçalanacağını
    <Link href="/geo/icerik-chunking">içerik chunking</Link> sayfasında ele alıyorum.
  </p>

  <p>
    Kullanıcı tarafında da bir ayar var: özetteki dilin karmaşıklığı seçilebiliyor,
    basitleştirilmiş ya da ayrıntılı sürüm istenebiliyor.
    {/* kaynak: K43 */}
    Yani aynı sorgu için üretilen metin sabit değil. Bir kez bakıp "bu sorguda AIO şöyle
    diyor" diye not almak yanıltıcı olabilir.
  </p>


  <h2 id="ai-modu-farki">AI Bakışı ile AI Modu aynı şey mi?</h2>

  <p className="bolum-cevap">
    Hayır, ikisi ayrı yüzey. AI Bakışı klasik arama sonuç sayfasının üstüne yerleşen bir
    bloktur; altında mavi bağlantılar, reklamlar ve diğer SERP öğeleri durmaya devam eder.
    AI Modu ise sonuç sayfasının tamamının yapay zeka tarafından üretildiği ayrı bir sekmedir.
    İkisi Türkiye'de aynı gün açıldı ve bu yüzden sık karıştırılıyor.
  </p>

  <p>
    Ayrımın pratik önemi ölçümde ortaya çıkıyor: bir sorguda AI Bakışı'nda kaynak
    gösterilmeniz, AI Modu'nda da gösterileceğiniz anlamına gelmiyor. AI Modu'nun kendi
    davranışını, sorgu yayma yoğunluğunu ve içerik gereksinimlerini
    <Link href="/geo/google-ai-modu">Google AI Modu sayfasında</Link> ayrıca
    işliyorum. Bu sayfa yalnızca AI Bakışı ile ilgili.
  </p>


  <h2 id="ne-zaman-gorunur">Ne zaman görünür, ne zaman görünmez?</h2>

  <p className="bolum-cevap">
    AI Bakışı, birden fazla arama gerektirecek kadar karmaşık sorgularda devreye girer;
    tek cevaplı basit sorularda genellikle üretilmez. Sağlık ve finans gibi hassas konularda
    davranışı kısıtlı ve değişkendir. Tarayıcı oturumunuz, eklentileriniz ve
    kişiselleştirme ayarlarınız da sonucu etkileyebilir — yani "ben göremiyorum" ile
    "yayında yok" aynı şey değildir.
  </p>

  <table>
    <thead>
      <tr><th>Koşul</th><th>Durum</th><th>Açıklama</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>Karmaşık, çok adımlı sorgular</td>
        <td>Görünür</td>
        <td>Normalde birden fazla arama gerektiren sorular AIO'yu tetikler {/* kaynak: K42 */}</td>
      </tr>
      <tr>
        <td>Basit, tek cevaplı sorgular</td>
        <td>Görünmez</td>
        <td>Sistem katkı sağlamayacağını değerlendirirse özet üretmez {/* kaynak: K41 */}</td>
      </tr>
      <tr>
        <td>YMYL konuları (sağlık, finans)</td>
        <td>Kısıtlı</td>
        <td>Hassas konularda gösterim daraltılıyor; tamamen kapalı değil, sorguya göre değişiyor {/* kaynak: K42 */}</td>
      </tr>
      <tr>
        <td>Sağlık aramaları (Ocak 2026 sonrası)</td>
        <td>Daha kısıtlı</td>
        <td>The Guardian araştırmasının ardından Google sağlık sorgularında kapsamı daralttı {/* kaynak: K43 */}</td>
      </tr>
      <tr>
        <td>Gizli mod (incognito)</td>
        <td>Değişken</td>
        <td>Oturum ve kişiselleştirme farkı nedeniyle sonuç normal pencereden farklı çıkabilir {/* kaynak: K42 */}</td>
      </tr>
      <tr>
        <td>Reklam engelleyici etkin tarayıcı</td>
        <td>Değişken</td>
        <td>Bazı filtre listeleri bloğun yüklenmesini engelliyor; davranış eklentiye bağlı {/* kaynak: K42 */}</td>
      </tr>
    </tbody>
  </table>

  <p>
    "Neden göremiyorum?" sorusunun cevabı çoğu zaman sizde. Önce reklam engelleyiciyi kapatın,
    sonra temiz bir tarayıcı profilinde deneyin, sonra konunun YMYL kapsamına girip girmediğini
    kontrol edin. Bu üçünü eledikten sonra hâlâ göremiyorsanız sorgunuz büyük olasılıkla
    AIO'nun katkı sağlamayacağı kadar basit değerlendiriliyordur.
    {/* kaynak: K41 */}
  </p>

  <p>
    Türkçe tarafında dördüncü bir neden daha var: sorgunun Türkçe cevap havuzu yetersiz
    olabilir. Şubat 2026 öncesinde hiç AIO görmemiş bir dil için bu sıradan bir durum.
    Aynı soruyu İngilizce sorup blok çıkıyorsa, engel sorgunun karmaşıklığı değil kaynak
    yokluğudur — ve bu doğrudan sizin doldurabileceğiniz bir boşluk.
  </p>


  <h2 id="trafik-etkisi">Organik trafik ve SEO üzerindeki gerçek etki</h2>

  <p className="bolum-cevap">
    Trafik kaybı tartışması tek boyutlu anlatılıyor. Ölçülen iki etki var ve zıt yönde
    çalışıyorlar: AI Bakışı hem tıklama hacmini düşürüyor hem de gelen tıklamanın niteliğini
    yükseltiyor. Küçük ve otoritesi oturmamış siteler için bu denge kurulmuyor; onlar
    kaynak olarak seçilmedikleri için nitelik tartışmasına hiç giremiyor.
  </p>

  <p>
    Ekran kaplama meselesi somut. Aralık 2024 tarihli bir araştırmaya göre AI Bakışı ile öne
    çıkan snippet birlikte göründüğünde masaüstünde ekranın %67,1'ini, mobilde %75,7'sini
    kaplıyor.
    {/* kaynak: K43 */}
    Tek bir çalışmanın ölçümü, yöntem bağımlı ve bugün için epey eski — ama yönü doğru:
    organik birinci sırada olsanız bile kullanıcı sizi hiç görmeyebilir. Sıralamayı kazanmak
    görünürlüğü garanti etmiyor.
  </p>

  <p>
    Sıfır tıklama tarafında da kanıt var: yapay zeka özetlerinin sıfır tıklama aramalarını
    artırdığı ve bunun doğrudan organik trafik kaybına yol açtığı raporlanıyor.
    {/* kaynak: K42 */}
    Etki özellikle bilgi amaçlı sorgularda belirgin.
  </p>

  <p>
    Öte yandan AIO üzerinden gelen tıklama farklı bir kullanıcı getiriyor. AI Bakışı bulunan
    sayfalara tıklayan kullanıcıların sitede daha uzun kalma ihtimali daha yüksek
    {/* kaynak: K41 */}
    ve bu kişilerin daha derin bir anlayış arayışında olduğu değerlendiriliyor.
    {/* kaynak: K42 */}
    Özet zaten yüzeysel merakı karşılıyor; kalanı tıklıyor. Hacim düşerken ziyaretçi başına
    değer yükseliyor.
  </p>

  <p>
    Bu iyimser okuma her site için geçerli değil. AI Bakışı yetkili kaynaklardan içerik
    çektiği için kurumsal otorite inşa etmemiş sitelerin görünürlük kazanması giderek
    zorlaşıyor.
    {/* kaynak: K42 */}
    Trafik kalitesi argümanı bu segment için anlamsız: önce kaynak olarak seçilmek gerekiyor.
    Otorite tarafındaki işi <Link href="/geo/entity-seo">entity SEO</Link> ve
    <Link href="/seo/topikal-otorite">topikal otorite</Link> sayfalarında ayrı ele alıyorum.
  </p>

  <p>
    Sayısal iddialara ihtiyatlı yaklaşmak gerek. Penske Media Corporation, kendi sitelerine
    bağlanan aramaların %20'sinde AI Bakışı göründüğünü iddia etti.
    {/* kaynak: K43 */}
    Bu ölçüm, Google'a dava açan tarafın kendisine ait. Google sözcüsü José Castañeda iddiayı
    asılsız olarak nitelendirdi ve AIO'nun trafiği daha geniş bir site çeşitliliğine
    yönlendirdiğini savundu.
    {/* kaynak: K43 */}
    Bağımsız doğrulama henüz yok; iki taraf da kendi verisini sunuyor.
  </p>

  {/* [İNSAN] ÖZGÜN VERİ — YAYINDAN ÖNCE DOLDUR
       Kendi Google Search Console verinizden AIO öncesi/sonrası tıklama oranı
       karşılaştırması eklenecek. Tercihen Türkçe sorgu bazında ve
       Şubat 2026 lansmanı kırılım noktası olarak işaretlenerek. */}


  <h2 id="gorunurluk-kriterleri">AI Bakışı'nda görünmek için içerik ve teknik kriterler</h2>

  <p className="bolum-cevap">
    Google'ın açıklaması net: AI Bakışı için özel bir optimizasyon yok.
    Ama bu "hiçbir şey yapma" anlamına gelmiyor. Temel teknik koşulları karşılamayan sayfa
    havuza hiç girmiyor; girenler arasında da soruyu ilk paragrafta yanıtlayan, başlık
    hiyerarşisi düzgün, verisi metin formatında olan sayfalar seçiliyor. İş, yeni bir
    disiplin değil, eskisinin daha katı uygulanması.
  </p>
  {/* kaynak: K41 */}

  <h3>Teknik ön koşulları doğrulayın</h3>
  <p>
    Sayfanın dizine eklenmiş olması şart.
    {/* kaynak: K41 */}
    <code>nosnippet</code> etiketi taşıyan ya da robots.txt'te taramaya kapatılmış sayfalar
    özete hiç giremez.
    {/* kaynak: K41 */}
    Search Console'da "Dizine Eklendi" durumunu doğrulayın. Bot erişimi tarafındaki tüm
    yönergeleri <Link href="/geo/ai-botlari-robots-txt">AI botları ve
    robots.txt</Link> sayfasında topladım.
  </p>

  <h3>İçeriği keşfedilebilir kılın</h3>
  <p>
    Hiçbir iç bağlantı almayan sayfaların taranma sıklığı düşük olur, dolayısıyla havuza
    girme şansı da azalır.
    {/* kaynak: K41 */}
    Ana kategori sayfalarından ve konuyla ilgili yazılardan bağlantı verin.
  </p>

  <h3>Soruyla başlayın, cevapla devam edin</h3>
  <p>
    Soru tabanlı uzun kuyruklu anahtar kelimeler, AI Bakışı'nı tetikleyen bilgi sorgularıyla
    doğrudan örtüşüyor.
    {/* kaynak: K42 */}
    Sayfa, soruyu ilk 100 kelimede yanıtlamalı.
    {/* kaynak: K42 */}
    Cevabı paragrafın sonuna saklamak hem modeli hem okuyucuyu yoruyor. Bu sayfadaki
    <code>.first-answer</code> ve <code>.bolum-cevap</code> blokları tam olarak bunun için var.
  </p>

  <h3>Başlık hiyerarşisini soru formatında kurun</h3>
  <p>
    H1–H2–H3 yapısı modelin içeriği hızlı taramasına doğrudan katkı sağlıyor.
    {/* kaynak: K42 */}
    "Genel Bilgiler" gibi muğlak başlıklar yerine "AI Bakışı hangi sorguları tetikler?"
    biçimini tercih edin. Başlık, altındaki paragrafın hangi soruya ait olduğunu tek başına
    söylemeli.
  </p>

  <h3>Öne çıkan snippet sıralamalarınızı aday listesi olarak kullanın</h3>
  <p>
    Halihazırda öne çıkan snippet ya da "Bunlar da sorulur" kutusunda yer alan içerikler,
    AI Bakışı için de iyi yapılandırılmış sayılıyor.
    {/* kaynak: K42 */}
    Search Console'da sıfırıncı konumda gördüğünüz sayfalar en güçlü adaylarınız — sıfırdan
    içerik üretmeden önce bu listeyi tüketin.
  </p>

  <h3>Şemayı görünür metinle eşleyin</h3>
  <p>
    FAQ, HowTo veya Article şeması sayfanın konusunu makine düzeyinde netleştiriyor.
    {/* kaynak: K42 */}
    Kritik kural: şemadaki bilgi sayfadaki görünür metinle eşleşmeli.
    {/* kaynak: K41 */}
    Çelişen veri işe yaramamakla kalmıyor, güven kaybına yol açıyor.
  </p>

  <h3>Veriyi görsele gömmeyin</h3>
  <p>
    Önemli içeriği metin formatında sunun.
    {/* kaynak: K41 */}
    Bir tabloyu ekran görüntüsü olarak yayımlarsanız Google onu okuyamaz. Aynı veriyi HTML
    tablosu ya da düz metin olarak da sayfaya koyun. Türkiye'de bu hata özellikle fiyat
    listelerinde ve karşılaştırma tablolarında yaygın; tasarımcı görsel verir, sayfa da
    modelin gözünde boşalır.
  </p>

  <h3>İşletme ve ürün verisini güncel tutun</h3>
  <p>
    E-ticaret ve yerel işletme sayfaları için Merchant Center ile İşletme Profili
    bilgilerinin güncel olması gerekiyor.
    {/* kaynak: K41 */}
    Eski bilgi, modelin o kaynağı atlamasına yol açıyor.
  </p>

  <h3>Forum mantığıyla yazın — bu veriye dayanan bir öneri</h3>
  <p>
    Semrush'un Haziran 2025 araştırması beklenmedik bir bulgu ortaya koydu: AI Bakışı'nda en
    çok atıf yapılan kaynak Quora, ikincisi Reddit.
    {/* kaynak: K43 */}
    {/* kaynak: K44 */}
    Ölçüm Semrush'un kendisine ait ve yöntemi tam olarak yayımlanmadı, ama bulgunun yönü
    başka çalışmalarla da uyumlu. İkisi de aynı formatla çalışıyor: kullanıcı sorusu, doğrudan
    cevap, sonra destekleyici detay. Başlığı soru yapın, ilk cümleyi cevap yapın, gerekçeyi
    sonraya bırakın. Forum ve topluluk içeriğinin atıf üzerindeki etkisini
    <Link href="/geo/reddit-forum-mention-etkisi">Reddit ve forum anılmaları</Link> sayfasında
    ayrıntılandırdım.
  </p>

  <p>
    Türkiye'de bu bulgunun karşılığı bire bir değil. Türkçede Quora zayıf, Reddit'in Türkçe
    alt topluluklarıysa dar. Buna karşılık Ekşi Sözlük, Donanım Haber ve Şikayetvar gibi
    yerli platformlar aynı soru-cevap dokusunu üretiyor. Bu kaynakların Türkçe AIO
    sonuçlarında ne kadar yer tuttuğu henüz yayımlanmış veriyle ölçülmedi; lansman yeni.
    Kendi sektörünüzde birkaç sorgu üzerinde elle kontrol etmek, tahmin yürütmekten hızlı
    sonuç veriyor.
  </p>

  {/* [İNSAN] ÖZGÜN VAKA — YAYINDAN ÖNCE DOLDUR
       Kendi sitenizden bir sayfanın AIO'da atıflanma öncesi/sonrası yapısını
       karşılaştıran özgün vaka eklenecek. Öncesi/sonrası başlık yapısı ve
       ilk paragraf farkı gösterilsin. */}


  <h2 id="olcum">Search Console ile AI Bakışı trafiğini izleme</h2>

  <p className="bolum-cevap">
    Google, AI Bakışı kaynaklı tıklamaları ayrı bir kanal olarak raporlamıyor. Yapay zeka
    özelliklerinde görünen sitelerin trafiği, Performans raporundaki <strong>"Web" arama
    türü</strong> altında genel veriyle birleşik geliyor. Hangi tıklamanın nereden geldiğini
    doğrudan görmek mümkün değil. Elinizde kalan yöntem dolaylı: yüksek ortalama konuma
    rağmen düşük tıklama oranı.
  </p>
  {/* kaynak: K41 */}

  <h3>Yüksek konum, düşük CTR taraması</h3>
  <p>
    Bir sorguda ortalama konumunuz 1–3 arasındaysa ama tıklama oranı beklentinin belirgin
    altındaysa, o sorguda büyük olasılıkla bir AI Bakışı bloğu devreye girmiştir.
    {/* kaynak: K42 */}
    Uygulaması basit: Performans → Sorgular → ortalama konuma göre sırala → CTR sütununu
    ekle. Konum 1–5 arasında olup CTR'si %2'nin altında kalan sorguları işaretleyin.
    {/* kaynak: K42 */}
    Ardından o sorguları temiz bir tarayıcı profilinde aratıp bloğun gerçekten çıkıp
    çıkmadığını gözle doğrulayın. Bu doğrulama adımı atlanırsa liste, mevsimsel dalgalanma
    ve reklam yoğunluğu gibi başka nedenleri de AIO sanmanıza yol açar.
  </p>

  <h3>Üçüncü taraf araçlar</h3>
  <p>
    Semrush, Domain Overview altında AI Bakışı görünürlüğünü üç kategoride raporluyor:
    görünürlük, bahsedilme sayısı ve alıntılanan sayfalar.
    {/* kaynak: K42 */}
    Hangi içeriklerin özete kaynaklık ettiğini sayfa bazında görmek için değerli. Ahrefs ise
    hangi sayfaların AI Bakışı tetiklediğini ve alan adının ne sıklıkla bağlantılandığını
    gösteriyor;
    {/* kaynak: K42 */}
    rakip bir alan adının blokta ne kadar yer kapladığını buradan ölçebilirsiniz. İkisinin de
    Türkçe sorgu kapsamı İngilizceye kıyasla dar — lansman yeni olduğu için veri havuzları
    henüz oturmadı.
  </p>

  <p>
    CTR düşüşüyle birlikte dönüşüm oranındaki değişimi Google Analytics üzerinden izlemek
    tabloyu netleştiriyor.
    {/* kaynak: K41 */}
    Tıklama düşüp dönüşüm sabit kalıyorsa kaybettiğiniz trafik zaten dönüşmeyen trafiktir.
    Hangi metriklerin bu işte anlamlı olduğunu
    <Link href="/geo/geo-kpi-olcumu">GEO KPI ölçümü</Link> sayfasında
    tartışıyorum.
  </p>

  {/* [İNSAN] EKRAN GÖRÜNTÜSÜ / MÜŞTERİ VERİSİ — YAYINDAN ÖNCE DOLDUR
       Gerçek bir Search Console ekranı veya anonimleştirilmiş müşteri verisiyle
       yüksek konum / düşük CTR örneği eklenecek. */}


  <h2 id="opt-out">AI Bakışı'ndan çıkma ve önizleme kontrolü</h2>

  <p className="bolum-cevap">
    AI Bakışı'ndan doğrudan çıkmanın resmi bir yolu yok.
    Elinizde yalnızca dolaylı kontrol mekanizmaları var ve hepsinin bir bedeli bulunuyor:
    ya snippet'ten ya da organik görünürlüğün tamamından vazgeçiyorsunuz. Ortası olan tek
    seçenek <code>nosnippet</code>, o da sayfanın SERP'teki açıklamasını sıfırlıyor.
  </p>
  {/* kaynak: K42 */}

  <ul>
    <li>
      <code>nosnippet</code> meta etiketi hem snippet oluşturulmasını hem de yapay zeka
      özetine dahil edilmeyi engelliyor.
      {/* kaynak: K41 */}
      Sayfa organik sıralamada kalmaya devam ettiği için en az hasarlı seçenek.
    </li>
    <li>
      <code>data-nosnippet</code> ve <code>max-snippet</code> etiketleri önizlemeyi bölüm
      düzeyinde ya da karakter sınırıyla kısıtlamak için kullanılabiliyor.
      {/* kaynak: K41 */}
    </li>
    <li>
      <code>robots.txt</code> Googlebot'un belirli sayfaları taramasını engelleyebilir
      {/* kaynak: K42 */}
      ama taramayı durdurmak indekslemeyi durdurmuyor.
      {/* kaynak: K42 */}
      Başka bir siteden bağlantı alan sayfa, siz engellemiş olsanız bile indekslenmeye
      devam edebilir.
    </li>
    <li>
      <code>Google-Extended</code> direktifi Google'ın diğer sistemlerindeki yapay zeka
      eğitimini sınırlıyor
      {/* kaynak: K41 */}
      ve <strong>AI Bakışı'nı hedeflemiyor.</strong> Bunu bir çıkış yöntemi olarak öneren
      kaynaklar yanılıyor.
    </li>
    <li>
      <code>noindex</code> sayfayı hem AI Bakışı'ndan hem normal arama sonuçlarından
      tamamen çıkarıyor.
      {/* kaynak: K42 */}
      Özetten kurtulmak için organik görünürlüğünüzün tamamından vazgeçmiş oluyorsunuz.
      {/* kaynak: K42 */}
    </li>
  </ul>

  <p>
    Operasyonel risk zamanlamada. Önizleme kontrolü değişikliğinizi Google'ın işlemesi birkaç
    gün ile birkaç ay arasında sürebiliyor.
    {/* kaynak: K41 */}
    Değişikliği canlıya aldıktan sonra Search Console'daki URL Denetleme aracıyla sayfanın
    güncel durumunu kontrol edin.
    {/* kaynak: K41 */}
    "Uyguladım, çalışmadı" değerlendirmesini birkaç gün sonra yapmak erken.
  </p>

  <p>
    Karar çerçevesi sade: sayfanın organik trafiği sizin için değerliyse <code>nosnippet</code>
    ile başlayın. <code>noindex</code>'e yalnızca o sayfanın arama görünürlüğünün zaten
    önemi olmadığı durumlarda başvurun. Pratikte çıkış talebi gelen sayfaların çoğunda gerçek
    sorun AIO değil, sayfanın cevabının özetlenebilecek kadar sığ olması oluyor.
  </p>

  {/* [İNSAN] TEST VAKASI — YAYINDAN ÖNCE DOLDUR
       nosnippet uygulandıktan sonra AIO görünürlüğünün ne kadar sürede değiştiğine
       dair gerçek bir site örneği veya kontrollü test eklenecek. */}


  <h2 id="hukuki-riskler">Yayıncılar için hukuki ve etik riskler</h2>

  <p className="bolum-cevap">
    AI Bakışı'nın hukuki tarafı henüz çerçeveye kavuşmadı. İki büyük dava sürüyor: Penske
    Media'nın Eylül 2025'te açtığı içerik kullanımı davası ve Chegg'in Şubat 2025'te açtığı
    antitröst davası. Tarafların hiçbiri henüz kesin sonuç almadı. Yayıncı tarafında asıl
    endişe dava açacak kaynağı olmayan küçük siteler için — onların itirazı çoğunlukla
    sessiz kalıyor.
  </p>
  {/* kaynak: K43 */}

  <p>
    Penske Media Corporation, Eylül 2025'te Google'a dava açtı. İddia net: AI Bakışı,
    yayıncıların web sitelerinden izinsiz içerik kullanıyor.
    {/* kaynak: K43 */}
    Küçük yayıncıların fikri mülkiyet hakları üzerindeki endişeler daha da derin,
    {/* kaynak: K43 */}
    çünkü onların hukuki süreç yürütecek kaynağı yok.
  </p>

  <p>
    24 Şubat 2025'te eğitim platformu Chegg, Alphabet'e antitröst yasasını ihlal ettiği
    iddiasıyla dava açtı. Chegg'e göre AI Bakışı öğrencileri düşük kaliteli, doğrulanmamış
    yapay zeka özetlerine yönlendiriyor ve orijinal içerik üreticilerini piyasadan dışlıyor.
    {/* kaynak: K43 */}
    Şirket satış ve borsadan çıkma seçeneklerini değerlendirdiğini de açıkladı.
    {/* kaynak: K43 */}
  </p>

  <p>
    2026 tarihli bir Google patenti, arama sonuçlarında web sitesi açılış sayfasını yapay
    zeka tarafından optimize edilmiş bir kopyayla değiştirme imkânını tanımlıyor.
    {/* kaynak: K43 */}
    Patent başvurusu ürün demek değil ve bu fikir hayata geçirilmedi. Yine de içeriğinizin
    bir kopyasının sizin yerinize kullanıcıya sunulması ihtimali, telif tartışmasını bambaşka
    bir yere taşıyor.
  </p>

  <p>
    Günlük işte daha somut bir risk halüsinasyon. AI Bakışı hatalı bilgi üretebiliyor ve
    kullanıcı bunu kaynağa gitmeden fark edemiyor.
    {/* kaynak: K43 */}
    Yanlış bir özet sizin sayfanıza dayandırıldığında okuyucu hatayı size bağlar. Sitenizi
    hiç ziyaret etmeden oluşan bu algı hasarını düzeltmenin pratikte bir yolu yok. Markanızla
    ilgili yanlış ifadeleri periyodik olarak taramak, düzeltmenin tek gerçekçi yolu — ve bu
    çalışma <Link href="/seo/eeat-sinyalleri">E-E-A-T sinyalleri</Link> ile
    <Link href="/geo/dijital-pr-ai-atif">dijital PR</Link> tarafına bağlanıyor.
  </p>

  {/* [İNSAN] YERLİ VAKA — YAYINDAN ÖNCE DOLDURULABİLİR
       Benzer bir hukuki süreçten geçen ya da trafik kaybı nedeniyle iş modelini
       değiştirmek zorunda kalan yerli bir yayıncı vakası eklenebilir. */}


  <h2 id="tarihce">SGE'den AI Bakışı'na: kısa tarihçe</h2>

  <p className="bolum-cevap">
    Özellik, Mayıs 2023'teki Google I/O'da Search Generative Experience (SGE) adıyla sınırlı
    test olarak tanıtıldı. Mayıs 2024'te İngilizce adı "AI Overviews" olarak değiştirildi ve
    ABD'de genel kullanıma açıldı. Ağustos 2024'ten itibaren ülke sayısı hızla arttı.
    Türkçe adı "AI Bakışı" ise ancak Şubat 2026'daki Türkiye lansmanıyla kullanıma girdi.
  </p>
  {/* kaynak: K43 */}

  <p>
    Ağustos 2024'te Birleşik Krallık, Hindistan, Japonya, Brezilya, Meksika ve Endonezya
    dahil bir dizi ülkede çoklu dil desteğiyle açıldı; Ekim 2024'te ülke sayısı 100'ü geçti.
    {/* kaynak: K43 */}
    Mayıs 2025 itibarıyla 200'den fazla ülke ve bölgede, 40'tan fazla dilde çalıştığı
    bildirildi.
    {/* kaynak: K43 */}
    Türkiye bu tabloda gecikmeli kaldı ve 18 Şubat 2026'da eklendi.
  </p>

  <p>
    Mart 2025'te Google, sonuç sayfasının tamamının yapay zeka tarafından üretildiği AI
    Modu'nu test etmeye başladı.
    {/* kaynak: K43 */}
    Bu ayrı bir yüzey ve ayrı bir konu;
    <Link href="/geo/google-ai-modu">AI Modu sayfasında</Link> ele alıyorum.
  </p>

  <p>
    Tarihçenin bir dersi var: adlandırma da kapsam da iki yılda üç kez değişti. Bugün
    "AI Bakışı" için doğru olan taktiklerin bir yıl sonra aynı kalacağını varsaymayın. Sabit
    olan tek şey, modelin ayrıştırılabilir, doğrulanabilir ve doğrudan cevap veren metni
    tercih etmesi. Aynı mantık <Link href="/geo/chatgpt-geo">ChatGPT</Link> ve
    <Link href="/geo/perplexity-geo">Perplexity</Link> tarafında da geçerli;
    <Link href="/geo/llms-txt-nedir">llms.txt</Link> gibi yeni öneriler ise henüz standart değil.
  </p>


  <h2 id="sss">Sıkça Sorulan Sorular</h2>

  <h3>AI Bakışı Türkiye'de ne zaman açıldı?</h3>
  <p>
    Google, AI Modu ve AI Bakışı'nı Türkiye'de 18 Şubat 2026'da kullanıma açtı; duyuruyu
    Google Türkiye Ülke Direktörü Mehmet Keteloğlu yaptı.
  </p>

  <h3>AI Bakışı ile AI Modu aynı şey mi?</h3>
  <p>
    Hayır. AI Bakışı klasik sonuç sayfasının üstündeki özet bloğudur, altında mavi bağlantılar
    durmaya devam eder. AI Modu ise sonuç sayfasının tamamının yapay zeka tarafından
    üretildiği ayrı bir sekmedir. Türkiye'de aynı gün açıldıkları için sık karıştırılıyor.
  </p>

  <h3>AI Bakışı'ndan nasıl çıkabilirim?</h3>
  <p>
    Doğrudan çıkış yapmanın resmi bir yolu yoktur. <code>nosnippet</code> meta etiketi
    sayfanın özete dahil edilmesini engeller ve organik sıralamayı korur; <code>noindex</code>
    ise sayfayı aramadan tamamen çıkarır. <code>Google-Extended</code> direktifi bu iş için
    uygun değildir — yapay zeka eğitimini sınırlar, AI Bakışı'nı hedeflemez. Değişikliklerin
    Google tarafından işlenmesi birkaç gün ila birkaç ay sürebilir.
  </p>

  <h3>Sağlık ve finans sorgularında AI Bakışı neden çıkmıyor?</h3>
  <p>
    Google, sağlığı veya maddi durumu etkileyebilecek hassas YMYL konularında gösterimi
    kasıtlı olarak daraltıyor. Bu tam bir kapatma değil; kapsam sorguya göre değişiyor ve
    Ocak 2026'daki The Guardian araştırmasının ardından sağlık sorgularında daha da
    kısıtlandı.
  </p>

  <h3>AI Bakışı trafiğimi Search Console'da nasıl takip ederim?</h3>
  <p>
    Yapay zeka özelliklerinden gelen trafik, Performans raporunda "Web" arama türü altında
    genel veriyle birleşik raporlanır. Ayrı bir AI Bakışı filtresi henüz yok. Bu yüzden
    dolaylı yöntem kullanılır: ortalama konumu yüksek ama tıklama oranı beklenenin belirgin
    altında kalan sorguları listeleyin. Konum 1–5 aralığında olup CTR'si %2'nin altındaki
    sorgular en güçlü adaylardır. Listeyi çıkardıktan sonra o sorguları elle aratıp bloğun
    gerçekten göründüğünü doğrulayın, aksi halde mevsimsel dalgalanmayı AI Bakışı sanırsınız.
  </p>

  <h3>Küçük bir site AI Bakışı'nda görünebilir mi?</h3>
  <p>
    Evet. Atıf yapılan kaynaklar arasında Quora ve Reddit gibi kullanıcı içerikli platformlar
    ilk sıralarda yer alıyor; bu, alan adı otoritesinden çok soruya verilen yanıtın
    kalitesinin belirleyici olduğunu gösteriyor. Yine de küçük sitelerin işi kolay değil,
    çünkü sistem genel olarak yetkili kaynaklara yaslanıyor.
  </p>

  <h3>AI Bakışı reklam içeriyor mu?</h3>
  <p>
    Evet. Google, güçlü ticari niyet tespit ettiğinde bloğun içine ve çevresine ücretli
    reklamlar yerleştiriyor; bunlar genellikle görsel ve fiyat bilgisi içeren ürün karuselleri
    biçiminde çıkıyor.
  </p>

  <h3>Hangi içerikler AI Bakışı'nda en çok atıf alıyor?</h3>
  <p>
    Semrush'un Haziran 2025 araştırmasına göre en çok atıf yapılan kaynak Quora, ikinci sırada
    ise Reddit. Ölçüm Semrush'un kendisine ait. Ortak nokta format: soru başlığı, doğrudan
    cevap, ardından gerçek deneyime dayanan açıklama. Türkçede aynı dokuyu Ekşi Sözlük ve
    sektörel forumlar üretiyor, ancak bunların Türkçe sonuçlardaki payı henüz ölçülmedi.
  </p>

  <h3>Önizleme kontrolü değişikliğim ne zaman geçerli olur?</h3>
  <p>
    <code>nosnippet</code> gibi etiketlerin işlenmesi birkaç gün ila birkaç ay sürebilir.
  </p>


  <aside className="sayfa-cta">
    <p>
      Hedef sorgularınızda AI Bakışı çıkıyor mu, çıkıyorsa kim kaynak gösteriliyor —
      bunu ölçmeden atılan her adım tahmin. Türkçe pencerenin açık olduğu bu dönemde
      durum tespitiyle başlamak istiyorsanız
      <Link href="/geo">GEO danışmanlığı sayfasından</Link> ulaşabilirsiniz.
    </p>
  </aside>
                </div>
            </article>
        </div>
    );
}
