/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

const headings = [
    {
        "id": "turkiye-lansmani",
        "text": "AI Modu Türkiye'de ne zaman açıldı?"
    },
    {
        "id": "ai-modu-nedir",
        "text": "Google AI Modu nedir ve geleneksel aramadan farkı ne?"
    },
    {
        "id": "ai-modu-ai-bakisi-farki",
        "text": "AI Modu ile AI Bakışı arasındaki fark ne?"
    },
    {
        "id": "fan-out",
        "text": "Fan-out mekaniği: AI Modu içeriğinizi nasıl değerlendiriyor?"
    },
    {
        "id": "optimizasyon",
        "text": "AI Modu'nda kaynak olmak için ne yapmalısınız?"
    },
    {
        "id": "turkce-firsat",
        "text": "Türkçe sorgularda rekabet neden bu kadar seyrek?"
    },
    {
        "id": "test",
        "text": "AI Modu'ndaki görünürlüğünüzü nasıl test edersiniz?"
    },
    {
        "id": "kpi",
        "text": "Trafik düşerken gelir artabilir mi? Yeni KPI çerçevesi"
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
    Google AI Modu (AI Mode), tek bir soruyu arka planda onlarca alt sorguya bölen ve
    yanıtı Gemini ile baştan kuran ayrı bir arama sekmesidir. Yanıt gövdesinde çoğunlukla
    yalnızca 1-3 kaynak görünür. Türkiye'de 18 Şubat 2026'da açıldı. Bu yüzeyde yer almak
    için sıralama yetmiyor; alt soruların her birine tek tek cevap veren, varlık olarak
    tanınan ve makine tarafından ayrıştırılabilen içerik gerekiyor.
  </p>
                <aside className="tldr mb-12 p-6 md:p-8 bg-violet-50/50 border border-violet-100/80 rounded-3xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-violet-600 text-white text-xs font-black uppercase tracking-widest rounded-full">TL;DR</span>
                        <span className="tldr-baslik text-sm font-bold text-violet-800">Kısaca</span>
                    </div>
                    <p className="text-gray-800 font-bold text-[15px] leading-relaxed mb-4"><strong>AI Modu Türkiye'de 18 Şubat 2026'da açıldı ve Türkçe içerik arzı bu yüzeye hazır değil — bu, kapanmadan önce girilmesi gereken bir zaman aralığı.</strong></p>
                    <ul className="space-y-3.5 text-gray-700 text-[15px] leading-relaxed list-none pl-0 my-0"><li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Türkiye, AI Modu'nun daha önceki 180 ülkelik açılım dalgasının dışında bırakılmıştı. Türkçe rekabet bu yüzden hâlâ ince.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>AI Modu ile AI Bakışı aynı şey değil: biri ayrı bir sekme ve reklamsız, diğeri sonuç sayfasının üstünde duran bir özet bloğu.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Fan-out mekaniği yüzünden tek bir sayfa onlarca alt sorgu üzerinden değerlendiriliyor. Yüzeysel kapsam ilk elemede düşüyor.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Ölçüm tarafında tıklama sayısı tek başına yanıltıcı; oturum derinliği ve dönüşüm oranı olmadan tabloyu okuyamazsınız.</span></li></ul>
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
                    <h2 id="turkiye-lansmani">AI Modu Türkiye'de ne zaman açıldı?</h2>

  <p className="bolum-cevap">
    Google, AI Modu ve AI Bakışı özelliklerini Türkiye'de <strong>18 Şubat 2026</strong>
    tarihinde kullanıma açtı. Duyuruyu Google Türkiye Ülke Direktörü Mehmet Keteloğlu
    yaptı. Açılım kademeli yapıldı: Android ve iOS için Google uygulaması ile arama
    sonuçları sayfası üzerinden. İki özellik de Gemini 3 model ailesine dayanıyor ve
    metin, ses ve kamera girdisini birlikte işleyebiliyor.
  </p>
  {/* kaynak: blog.google/intl/tr-tr — 18 Şubat 2026, doğrulandı 15 Ağustos 2026 */}

  <p>
    Tarihin neden bu kadar önemli olduğu, <Link href="/geo">GEO danışmanlığı</Link> tarafında
    Şubat'tan bu yana bakılan her projede aynı biçimde ortaya çıkıyor. Google, AI Modu'nu
    180'i aşkın ülkeye açtığı dalgada Türkiye'yi kapsam dışında bırakmıştı. Türkçe konuşan
    kullanıcı, dünyanın geri kalanı bu arayüzü aylardır kullanırken geleneksel sonuç
    sayfasında kaldı. Şubat 2026'ya kadar Türkçe bir sorgunun AI Modu yanıtında hangi
    kaynağın çıkacağını test etmenin pratik bir yolu bile yoktu.
  </p>

  <p>
    Bunun doğrudan sonucu şu: Türkçe içerik üreticilerinin ezici çoğunluğu bu yüzey için
    hiçbir hazırlık yapmadı. İngilizce pazarda 2025 boyunca olgunlaşan taktikler — bölüm
    bazlı cevap yapısı, varlık bağlama, makine okunur işaretleme — Türkçe sitelerin büyük
    bölümünde henüz uygulanmamış durumda.
  </p>

  <p>
    Gecikmenin ikinci sonucu daha az konuşuluyor: model, Türkçe bir soruyu yanıtlarken
    çekebileceği Türkçe kaynak havuzunun sığ olduğu bir alanda çalışıyor. Bir konuda
    doyurucu Türkçe kaynak bulamadığında ya İngilizce içeriğe yaslanıyor ya da elindeki
    zayıf Türkçe materyalden yanıt kuruyor. İkinci durum sizin için açık bir kapı.
  </p>

  <p>
    Zaman aralığı sınırsız değil. Büyük Türk yayıncıları ve kurumsal markalar bu yüzeye
    Şubat'tan bu yana yatırım yapmaya başladı; on iki ay sonra tablo bugünkü kadar boş
    olmayacak.
  </p>

  <p>
    Lansmanın bir ayrıntısı stratejik olarak fazla konuşulmadı: duyuruda AI Modu ve AI Bakışı
    aynı anda açıldı. Yani Türkiye'de iki yüzey aynı gün devreye girdi ve kullanıcı
    davranışı ikisi arasında henüz oturmadı. Bu, hangi yüzeyin hangi sorgu tipinde
    tetiklendiğini gözlemlemek için elverişli bir dönem — kalıplar sabitlendikten sonra
    aynı gözlemi yapmak çok daha zor olacak.
  </p>

  <h2 id="ai-modu-nedir">Google AI Modu nedir ve geleneksel aramadan farkı ne?</h2>

  <p className="bolum-cevap">
    AI Modu, tek bir sorguya karşılık arka planda birden çok paralel arama tetikleyen,
    Gemini destekli uçtan uca bir arama deneyimi. Geleneksel sonuç sayfasının on mavi
    bağlantısı burada yok; yerine konuşmaya dayalı, ayrı bir sekmede açılan bir arayüz
    var. Yanıt gövdesinde tipik olarak 1-3 kaynak gösteriliyor, kalanı bir açılır katmanın
    arkasında duruyor.
  </p>
  {/* kaynak: K108-F1 */}
  {/* kaynak: K111-F5 */}
  {/* kaynak: K108-F11 */}

  <p>
    AI Modu, ABD'de Mayıs 2025'te yayına girdi ve orada milyonlarca kullanıcı için
    varsayılan arama deneyimi konumuna geldi. Türkiye lansmanı bundan yaklaşık dokuz ay
    sonra, Şubat 2026'da gerçekleşti — iki tarihi karıştırmamak gerekiyor, çünkü ABD
    pazarına ait davranış ve CTR verilerinin Türkiye'ye birebir taşınacağını gösteren bir
    şey henüz yok.
  </p>
  {/* kaynak: K112-F4 */}
  {/* kaynak: K111-F1 */}

  <p>
    Arayüz farkının pratik karşılığı şu: kullanıcı AI Modu sekmesine geçmek için bilinçli
    bir hareket yapıyor. Bu, kullanıcı tabanının kendiliğinden bölündüğü anlamına geliyor.
    Sekmeye geçenler genellikle daha uzun, daha karmaşık, tek bir bağlantıyla
    karşılanamayacak sorular soruyor. Karar aşamasına yakın kullanıcı profili burada
    yoğunlaşıyor. Sizin için bu, hacim kaybının bir bölümünün niteliğe dönüşebileceği
    anlamına gelir — ama yalnızca yanıtın içinde görünüyorsanız.
  </p>
  {/* kaynak: K108 */}

  <h2 id="ai-modu-ai-bakisi-farki">AI Modu ile AI Bakışı arasındaki fark ne?</h2>

  <p className="bolum-cevap">
    İkisi farklı yüzey ve farklı mekanik. AI Bakışı (AI Overviews) klasik sonuç sayfasının
    üstünde beliren bir özet bloğu; altında organik sonuçlar ve reklamlar duruyor. AI Modu
    ise ayrı bir sekme — organik liste de reklam da yok, yalnızca üretilen yanıt ve içine
    gömülü birkaç kaynak var. Optimizasyon mantıkları örtüşüyor, ölçüm mantıkları
    örtüşmüyor.
  </p>

  <table className="karsilastirma">
    <thead>
      <tr>
        <th>Özellik</th>
        <th>Geleneksel Arama</th>
        <th>AI Bakışı (AI Overviews)</th>
        <th>AI Modu (AI Mode)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Arayüz</td>
        <td>10 mavi bağlantı + SERP</td>
        <td>SERP üstü özet kutusu</td>
        <td>Ayrı sekme, konuşmaya dayalı</td>
      </tr>
      <tr>
        <td>Organik sonuçlar</td>
        <td>Var</td>
        <td>Var</td>
        <td>Yok</td>
      </tr>
      <tr>
        <td>Reklam</td>
        <td>Var</td>
        <td>Var</td>
        <td>Yok</td>
      </tr>
      <tr>
        <td>Gösterilen kaynak sayısı</td>
        <td>10+</td>
        <td>Birkaç</td>
        <td>1-3 (kalanı açılır katmanda)</td>
      </tr>
      <tr>
        <td>İçerik işleme biçimi</td>
        <td>Listeleme</td>
        <td>Özetleme</td>
        <td>Yorum, bağlantı kurma, çıkarım</td>
      </tr>
      <tr>
        <td>Türkiye'de erişim</td>
        <td>Var</td>
        <td>18 Şubat 2026'dan itibaren</td>
        <td>18 Şubat 2026'dan itibaren</td>
      </tr>
    </tbody>
  </table>
  {/* kaynak: K111-F5 · K108-F7 · K108-F8 · K108-F11 · K112-F24 */}
  {/* kaynak: Türkiye erişim satırı — blog.google/intl/tr-tr, 18 Şubat 2026. Ham metindeki "yalnızca ABD" ifadesi hatalıydı, düzeltildi. */}

  <p>
    Tablodaki iki satır diğerlerinden daha belirleyici: reklamın olmaması ve kaynak
    sayısının 1-3'e inmesi. AI Bakışı'nda reklam yer alırken AI Modu tamamen reklamdan
    arındırılmış durumda. Bunun anlamı, bu yüzeyde para ile görünürlük satın alma
    seçeneğinizin bulunmaması. Organik kaynak olmak tek yol.
  </p>
  {/* kaynak: K108-F8 */}

  <p>
    İki yüzeyi ayrı ele almak gerekiyor çünkü ölçüm araçları da farklı davranıyor. AI
    Bakışı'ndaki görünürlüğün mekaniğini ve o yüzeye özgü taktikleri
    <Link href="/geo/ai-overviews-nedir">AI Bakışı sayfasında</Link> ayrıntılı olarak ele aldım;
    bu sayfa AI Modu'na, yani reklamsız ve sohbet tabanlı olan tarafa odaklanıyor. Aynı
    içerik iki yüzeyde birden çalışabilir, ama bunu varsaymak yerine ayrı ayrı test etmek
    gerekiyor.
  </p>

  <h2 id="fan-out">Fan-out mekaniği: AI Modu içeriğinizi nasıl değerlendiriyor?</h2>

  <p className="bolum-cevap">
    AI Modu sorgunuzu tek bir arama olarak işlemiyor. Arka planda query fan-out adı verilen
    teknikle soruyu alt konulara bölüp bunları eş zamanlı araştırıyor. Belgelenmiş bir
    örnekte tek bir kullanıcı sorgusu 16 ayrı arama tetikledi. Yani sayfanız tek bir açıdan
    değil, onlarca açıdan taranıyor ve her açı ayrı bir eleme aşaması.
  </p>
  {/* kaynak: K108 */}

  <p>
    Paralel aramalar bittiğinde sistem durmuyor. Topladığı bilgilerden yapılandırılmış bir
    mantık zinciri kurup yanıtı bu adımlara göre doğruluyor. Bir sayfanın alıntılanması
    için hem ilgili alt soruları karşılaması hem de bu soruların birbirine bağlanan
    mantığını desteklemesi gerekiyor. Bir alt soruya iyi cevap veren ama zincirin geri
    kalanıyla ilişkilenmeyen sayfa, o zincirde kendine yer bulamıyor.
  </p>
  {/* kaynak: K112 */}

  <p>
    Fan-out'un ayrıntılı mekaniğini ve hangi sorgu tiplerinin kaç dala bölündüğünü
    <Link href="/geo/query-fan-out">query fan-out sayfasında</Link> ayrıca
    işledim.
  </p>

  <h3>Türkçe bir sorgunun nasıl dağıldığına dair örnek</h3>

  <p>
    Mekaniği somutlaştırmak için "küçük işletme için hangi ön muhasebe programı uygun"
    tipinde bir Türkçe sorguyu düşünün. Bu tek cümle model tarafından birbirinden bağımsız
    çalışan alt sorulara dağıtılıyor: fiyat aralıkları neler, e-fatura entegrasyonu hangi
    üründe var, mali müşavir erişimi nasıl çalışıyor, kaç kullanıcıya kadar ölçekleniyor,
    veri taşıma zor mu, Türkiye mevzuatına uyumlu mu. Altı ayrı alt soru, altı ayrı arama.
  </p>

  <p>
    Şimdi kendi sayfanıza bu gözle bakın. Yalnızca fiyat karşılaştırması yapan bir sayfa bu
    zincirin tek halkasında görünebilir, o da yanıtın küçük bir bölümünde. Mevzuat uyumu ve
    veri taşıma gibi halkalarda ise hiç yok. Yanıtın gövdesindeki 1-3 kaynaktan biri olmak,
    genellikle birden çok halkada birden görünmeyi gerektiriyor.
  </p>

  <p>
    Buradan çıkan pratik iş şu: hedef sorgunuzu bir kez yazıp bırakmak yerine, o sorgunun
    bölüneceği alt soruları elle listeleyin ve her birinin sitenizde bir karşılığı olup
    olmadığını işaretleyin. Karşılığı olmayan her satır ya yeni bir bölüm ya da yeni bir
    sayfa demektir. Bu egzersizi yapan Türkçe site sayısı şu anda çok az.
  </p>

  <p>
    Kullanıcıların ne sorduğu tarafında NP Digital'in araştırması iki bulgu veriyor:
    kullanıcıların %72'si çok spesifik, "tam olarak istediğim şey" diye tarif edilebilecek
    sorgular giriyor; %76'sı daha insani ve konuşma tarzı etkileşimi tercih ediyor. Her iki
    rakam da araştırmayı yapan ajansın kendi ölçümü, bağımsız doğrulaması yok. Yine de
    yönü net: teknik doğruluk ile doğal dil aynı metinde bulunmak zorunda.
  </p>
  {/* kaynak: K112 */}

  <p>
    Hub-and-spoke kümeleri tam burada devreye giriyor. Dar bir konuyu derinlemesine ele
    alan site, geniş bir alanı yüzeysel kapsayan siteye göre daha otoriter kabul ediliyor.
    Deep Search tarafında ise çok kaynaklı ve semantik açıdan zengin sayfalar tercih
    ediliyor. Bunun site mimarisindeki karşılığı, birbirine link vermeyen konu siloları
    değil, iç bağlantılarla örülmüş içerik kümeleri —
    <Link href="/seo/topikal-otorite">topikal otorite</Link> kurmanın klasik yöntemi burada
    doğrudan işe yarıyor.
  </p>
  {/* kaynak: K111 */}
  {/* kaynak: K110 */}

  <p>
    Fan-out'un içerik biçimine dair bir sonucu daha var: sayfanın parçalara ayrılabilir
    olması gerekiyor. Model sayfanızın tamamını değil, alt sorguya karşılık gelen bölümünü
    çekiyor. Uzun ve başlıksız bir metin bloğu bu işlem için kötü bir aday.
    <Link href="/geo/icerik-chunking">İçerik chunking</Link> bu yüzden
    kozmetik bir düzenleme değil, doğrudan alıntılanabilirlik meselesi.
  </p>

  <h2 id="optimizasyon">AI Modu'nda kaynak olmak için ne yapmalısınız?</h2>

  <p className="bolum-cevap">
    Beş müdahale alanı var: yapılandırılmış veriyi kurmak, marka varlığınızı platformlar
    arasında bağlamak, her bölümü bağımsız cevap olarak yazmak, içeriği atıf alınabilir
    hale getirmek ve metni görsel-video sinyalleriyle desteklemek. Sıralama önemli —
    şemasız bir sayfada geri kalan dördü çok daha yavaş sonuç veriyor.
  </p>

  <h3>Yapılandırılmış veriyi önce kurun</h3>

  <p>
    Aiso'nun ölçümüne göre yapılandırılmış veri kullanan sayfalarda dil modellerinin veri
    çıkarma kalitesi %30 artıyor. Bu bir satıcı ölçümü; rakamın kendisinden çok yönü
    anlamlı. Başlangıç için en yüksek getirili üç tür FAQPage, HowTo ve Article. Bu üçü
    kurulmadan diğer şema türlerine geçmenin pratik bir faydasını görmedim.
    <Link href="/geo/yapay-zeka-schema" data-pending="true">Yapay zeka için schema</Link>
    tarafında hangi alanların gerçekten okunduğu ayrı bir konu.
  </p>
  {/* kaynak: K112 */}
  {/* kaynak: K111 */}

  <h3>sameAs ve IPTC işaretlemesini birlikte kullanın</h3>

  <p>
    <code>sameAs</code> özelliğiyle farklı platformlardaki marka kimliklerinizi — LinkedIn,
    Wikipedia, Wikidata, sektör dizinleri — tek bir varlığa bağlayın. Buna ek olarak yapay
    zeka üretimli görsel ve metinler için IPTC
    <code>DigitalSourceTypeTrainedAlgorithmicMedia</code> meta verisini ekleyin. İlki
    Knowledge Graph tarafında kimliğinizi netleştiriyor, ikincisi içerik kökeni konusunda
    şeffaflık sinyali veriyor. Türkçe pazarda <code>sameAs</code> zincirini eksiksiz kuran
    site sayısı çok düşük; bu, düşük maliyetli bir ayrışma noktası.
    <Link href="/geo/entity-seo">Entity SEO</Link> çalışmasının teknik
    ayağı büyük ölçüde budur.
  </p>
  {/* kaynak: K110 */}

  <h3>Her H2'yi bağımsız bir soru-cevap olarak yazın</h3>

  <p>
    Yapay zeka sistemleri makalenin tamamını özetlemek yerine tek tek bölümleri çekiyor.
    Bunun yazım kuralına çevrilmiş hâli şu: her H2 altındaki ilk paragraf, o başlıktaki
    soruya doğrudan cevap vermeli ve bir önceki bölümü okumamış birine anlamlı gelmeli.
    "Yukarıda anlattığımız gibi" ile başlayan bir paragraf, çekildiği yerde anlamsız bir
    parça hâline geliyor.
  </p>
  {/* kaynak: K111 */}

  <p>
    Bu sayfadaki her bölümün altındaki kısa cevap paragrafları da aynı mantıkla yazıldı.
    Test etmesi kolay: bölümü tek başına kopyalayıp okuyun, cevap ayakta kalıyor mu?
  </p>

  <h3>İçeriği atıf alınabilir hâle getirin</h3>

  <p>
    İsimli yazar, açık kimlik bilgisi ve dış kaynaklara verilen atıf içeren sayfaların
    kaynak gösterilme olasılığı belirgin biçimde daha yüksek. Birincil araştırmanız veya
    özgün veriniz varsa bunu makalenin dip notlarında değil üst kısmında belirtin. Anonim,
    yazarsız, "içerik ekibi" imzalı metinler bu yarışta geride kalıyor —
    <Link href="/seo/eeat-sinyalleri">E-E-A-T sinyalleri</Link> AI Modu tarafında klasik
    sıralamadaki kadar dolaylı değil, doğrudan bir eleme kriteri gibi çalışıyor.
  </p>
  {/* kaynak: K110 */}
  {/* kaynak: K111 */}

  <h3>Yapısal ve multimedya sinyallerini tamamlayın</h3>

  <p>
    <code>isAccessibleForFree</code>, <code>inLanguage</code> ve
    <code>contentLocation</code> etiketleri içeriğin daha hassas kategorize edilmesini
    sağlıyor. Türkçe içerik için <code>inLanguage: "tr-TR"</code> ve
    <code>contentLocation</code> özellikle önemli, çünkü modelin Türkiye bağlamına ait bir
    soruya Türkçe kaynak ararken kullandığı ayırt edici sinyaller arasında. Metin
    içeriklerin yüksek kaliteli görsel ve videoyla desteklenmesi, somut veri noktası
    barındırması da AI Modu için doğrudan önerilen bileşenler arasında sayılıyor.
  </p>
  {/* kaynak: K110 */}
  {/* kaynak: K109 */}
  {/* kaynak: K108 */}

  <h3>En sık gördüğüm dört hata</h3>

  <p>
    Birincisi, cevabı gömmek. Sayfa doğru bilgiyi içeriyor ama bilgi üçüncü ekranın
    ortasında, bir anekdotun arkasında duruyor. Model o paragrafa ulaşıyor ancak parçayı
    tek başına çektiğinde anlamlı bir cevap elde edemiyor.
  </p>

  <p>
    İkincisi, terim kayması. Aynı sayfada "AI Modu", "yapay zeka modu" ve "Google AI Mode"
    dönüşümlü kullanılıyor. Bunu üslup zenginliği sanmak yaygın; oysa varlık çözümlemesi
    açısından üç ayrı dizgi üretiyor ve sinyali bölüyor.
  </p>

  <p>
    Üçüncüsü, tarih ve kaynak belirsizliği. "Son araştırmalara göre" ile başlayan bir cümle
    insan okur için idare eder, makine için doğrulanamaz bir iddiadır. Tarihi, kurumu ve
    mümkünse bağlantıyı yazmak alıntılanma olasılığını doğrudan etkiliyor.
  </p>

  <p>
    Dördüncüsü, şemayı içerikten kopuk kurmak. Sayfada görünmeyen bir soruyu FAQPage şemasına
    eklemek fayda değil risk üretir; Google bunu yapılandırılmış veri ihlali sayıyor. Şema
    sayfanın aynası olmalı, süslemesi değil.
  </p>

  <h2 id="turkce-firsat">Türkçe sorgularda rekabet neden bu kadar seyrek?</h2>

  <p className="bolum-cevap">
    Türkiye açılımı Şubat 2026'da yapıldığı için Türkçe içerik üreticilerinin bu yüzeye
    hazırlanma süresi olmadı. İngilizce pazarda 2025 boyunca standartlaşan şema, varlık ve
    bölüm yapısı pratikleri Türkçe sitelerin büyük bölümünde hâlâ uygulanmamış durumda.
    Model ise Türkçe bir soruya cevap verirken çekebileceği nitelikli Türkçe kaynak
    havuzunun sığ olduğu bir alanda çalışıyor.
  </p>

  <p>
    Bu boşluğun her sektörde aynı büyüklükte olmadığını söylemek gerekiyor. Somut veri
    yerine uygulama muhakemesiyle konuşuyorum: aşağıdaki ayrım ölçülmüş bir sıralama değil,
    Türkçe sonuçlarda gözlemlenen içerik yoğunluğuna dayanan bir okuma.
  </p>

  <h3>Boşluğun en geniş olduğu alanlar</h3>

  <p>
    B2B yazılım, üretim ve endüstriyel tedarik tarafında Türkçe içerik neredeyse tamamen
    ürün sayfalarından ibaret. Bir satın alma sorumlusunun sorduğu "hangi durumda hangi
    çözüm" sorusuna cevap veren Türkçe kaynak sayısı çok az; model bu boşlukta ya İngilizce
    kaynağa gidiyor ya da elindeki en yakın Türkçe sayfayı kullanıyor. Aynı durum hukuk,
    muhasebe ve mevzuat yorumu için de geçerli — üstelik burada mevzuatın Türkiye'ye özgü
    olması İngilizce kaynağa kaçış seçeneğini de ortadan kaldırıyor.
  </p>

  <p>
    Sağlık, finans ve sigorta tarafında tablo farklı. İçerik hacmi yüksek ama kalite
    dağılımı çok geniş, kimliği belirsiz yayıncı sayısı fazla. Bu, isimli uzman yazar ve
    kurumsal kimlik gösterebilen markalar için avantaj — çünkü YMYL konularında model
    kaynak seçerken kimlik sinyallerine daha çok yaslanıyor.
  </p>

  <h3>Boşluğun daha dar olduğu alanlar</h3>

  <p>
    Seyahat, yemek tarifi ve genel tüketici teknolojisi kategorilerinde Türkçe içerik arzı
    zaten yoğun. Buralarda AI Modu görünürlüğü kazanmak, ince bir kategoride kazanmaktan
    belirgin biçimde daha maliyetli. Sıfırdan girilecek alan olarak önermem.
  </p>

  <p>
    Nerede olursanız olun, Türkçe için geçerli tek bir öncelik var: konuyu Türkçe
    terminolojiyle, Türkiye bağlamındaki örneklerle ve tek bir tutarlı terim setiyle
    yazmak. Aynı kavramı bir paragrafta "AI Modu", diğerinde "yapay zeka modu" diye
    yazan sayfa kendi varlık sinyalini bölüyor.
  </p>

  <h2 id="test">AI Modu'ndaki görünürlüğünüzü nasıl test edersiniz?</h2>

  <p className="bolum-cevap">
    Otomatik bir rapor beklemeyin — Search Console AI Modu tıklamalarını ayrıştırmadığı için
    ilk ölçüm elle yapılıyor. Yöntem şu: hedef sorgularınızı bir listeye çıkarın, her birini
    AI Modu sekmesinde çalıştırın, yanıtta gösterilen kaynakları ve markanızın metin içinde
    anılıp anılmadığını kaydedin. Ayda bir tekrarlanan bu tablo, herhangi bir araçtan daha
    güvenilir bir başlangıç noktası veriyor.
  </p>

  <p>
    Kayıt tutarken iki şeyi ayırmak gerekiyor: bağlantı olarak kaynak gösterilmek ve metnin
    içinde marka olarak anılmak. İkisi farklı kazanımlar. Bağlantı trafik getirebilir; marka
    anılması getirmez ama sonraki sorgularda ve diğer platformlarda birikimli etki yaratır.
    Yalnızca birincisini ölçen bir tablo, çalışmanın etkisinin bir bölümünü görünmez kılıyor.
  </p>

  <p>
    Testi yaparken oturumu kişiselleştirmeden arındırın. Kendi sitenizi düzenli ziyaret eden
    bir hesapla yapılan sorgu size gerçekte olduğundan daha iyimser bir tablo gösterebilir.
  </p>

  <h3>Neyi kaydetmeye değer?</h3>

  <p>
    Her sorgu için yanıtta görünen kaynakların alan adları, markanızın geçip geçmediği,
    yanıtın hangi alt soruları kapsadığı ve sizin sayfanızın hangi alt soruda karşılık
    verebileceği. Dördüncü sütun en değerlisi, çünkü doğrudan içerik planına dönüşüyor —
    eksik kalan alt soru, yazılacak bir sonraki bölümdür.
  </p>

  <p>
    Türkiye açılımı yeni olduğu için bu tabloyu tutan marka sayısı az. Altı ay sonra elinizde
    kimsede olmayan bir zaman serisi olacak; bu, hem içerik kararlarını hem de bütçe
    savunmasını kolaylaştırıyor.
  </p>

  <h2 id="kpi">Trafik düşerken gelir artabilir mi? Yeni KPI çerçevesi</h2>

  <p className="bolum-cevap">
    Tıklama sayısı artık tek başına bir başarı göstergesi değil. AI yanıtları bilgilendirici
    sorgularda tıklamayı ciddi biçimde azaltıyor, ancak yanıt içinde kaynak gösterilen
    sitelere gelen ziyaretçilerin daha derin oturum ürettiğine dair bulgular var. Doğru
    çerçeve, tıklama hacmini dönüşüm oranı ve oturum derinliğiyle birlikte okumak.
  </p>
  {/* kaynak: K110 */}

  <p>
    En çok dolaşan iki vakayla başlayalım. NerdWallet 2024'te aylık trafiğinin %20'sini
    kaybetti, aynı dönemde %35 daha fazla gelir elde etti. HubSpot da benzer bir tablo
    çizdi. Bu rakamlar ilgi çekici ama tek yönlü okunmamalı: buradan "AI trafiği geliri
    artırıyor" sonucu çıkmaz. Aynı dönemde iki şirketin de fiyatlandırması, ürün karması,
    reklam ortaklıkları ve pazarlama harcaması değişti. Elimizdeki şey nedensellik değil,
    korelasyon — ve iki şirketlik bir örneklem.
  </p>
  {/* kaynak: K108 */}

  <p>
    Vakaların gerçek değeri başka yerde: "trafik düştüyse iş kötüye gitti" varsayımının
    otomatik doğru olmadığını gösteriyorlar. Raporlamanızda tek metrik trafikse, bu tip bir
    dönemi yanlış okuma riskiniz yüksek.
  </p>

  <p>
    CTR tarafındaki tablo daha net. AI Bakışı tetikleyen sorgularda tıklama oranı ortalama
    %34,5 düşüyor; bazı sorgu türlerinde düşüş %64'e kadar çıkıyor. Ama sorgu tipi burada
    belirleyici bir ayrım yaratıyor: en sert darbeyi bilgilendirici sorgular alıyor, gezinme
    ve işlemsel sorgular çok daha az etkileniyor. Bu rakamların İngilizce sorgu setlerinden
    geldiğini not etmek gerekiyor; Türkçe için karşılaştırılabilir bir ölçüm henüz kamuya
    açık değil.
  </p>
  {/* kaynak: K108 */}
  {/* kaynak: K111 */}

  <h3>Ölçümdeki kör nokta</h3>

  <p>
    Google Search Console AI Bakışı ve AI Modu dokunma noktalarını toplam rakamların içinde
    sayıyor, ancak veriyi kaynak yüzeyine göre filtrelemenize izin vermiyor. Yani AI
    Modu'ndan kaç tıklama aldığınızı Search Console'dan ayrıştıramıyorsunuz. Bu kör nokta
    bir araç ekosistemi doğurdu: Goodie AI gibi AEO platformları, Writesonic ve Profound
    gibi görünürlük araçları alıntıları ve marka anılmalarını izlemek üzere konumlandı.
    Hiçbiri Search Console'un yerini tutmuyor; hepsi kendi örneklem yöntemiyle çalışıyor ve
    ölçtükleri şey Google'ın gerçek gösterim verisi değil.
  </p>
  {/* kaynak: K108 */}
  {/* kaynak: K110 */}
  {/* kaynak: K112 */}

  <p>
    Pratikte kurulabilecek en dürüst çerçeve şu: marka sorgularının hacmini, doğrudan
    trafiği ve AI yüzeylerinden gelen oturumların dönüşüm oranını ayrı ayrı izleyin.
    Hangi metriklerin gerçekten kurulabilir olduğunu
    <Link href="/geo/geo-kpi-olcumu">GEO KPI ölçümü</Link> sayfasında
    ayrıntılandırdım.
  </p>

  <p>
    Bir uyarı daha: AI Modu'ndaki görünürlük tek platforma bağlı bir kazanım değil.
    <Link href="/geo/chatgpt-geo">ChatGPT GEO</Link> ve
    <Link href="/geo/perplexity-geo">Perplexity GEO</Link> tarafında yaptığınız çalışma buradaki
    sinyalleri de besliyor, çünkü üçü de büyük ölçüde aynı web korpusundan ve aynı varlık
    tanıma mantığından besleniyor.
  </p>

  <h2 id="sss">Sıkça Sorulan Sorular</h2>

  <h3>Sitem Google'da dizindeyse AI Modu'nda otomatik olarak görünür mü?</h3>
  <p>
    Dizine eklenmiş her sayfa ek bir gereksinim olmadan AI Modu'nda görünmeye uygundur. Ama uygun olmak ile alıntılanmak aynı şey değil. Uygunluk bir eşik, alıntılanma bir seçim; seçimi belirleyen şey içeriğin alt sorulara ne kadar iyi cevap verdiği ve markanın varlık olarak ne kadar net tanındığı.
  </p>
  {/* kaynak: K112 */}

  <h3>AI Modu Türkiye'de hangi cihazlarda ve hangi yüzeylerde çalışıyor?</h3>
  <p>
    Google'ın 18 Şubat 2026 tarihli duyurusuna göre AI Modu ve AI Bakışı, Android ve iOS için Google uygulamasında ve arama sonuçları sayfasında kademeli olarak açıldı. İkisi de Gemini 3 model ailesine dayanıyor ve metin, ses ve kamera girdisini birlikte işleyebiliyor. Kademeli açılım nedeniyle her kullanıcı aynı anda aynı deneyimi görmeyebilir.
  </p>
  {/* kaynak: blog.google/intl/tr-tr — 18 Şubat 2026 */}

  <h3>Googlebot-Extended ile yapay zeka eğitimini engellersem AI Modu'ndaki görünürlüğüm düşer mi?</h3>
  <p>
    Hayır, ikisi birbirinden bağımsız. Googlebot-Extended direktifi içeriğinizi model eğitim verisinden çıkarır, ancak AI Bakışı veya AI Modu yanıtlarında alıntılanmanızı engellemez. Bu iki kararı ayrı ayrı vermelisiniz.
  </p>
  {/* kaynak: K111 */}

  <h3>AI Modu'nda kaynak gösterilmek için birinci sırada olmak şart mı?</h3>
  <p>
    Şart değil. Sistem yalnızca üst sıralardaki sayfaları değil, konuyla ilgili ve iyi yapılandırılmış alt konularda daha düşük sırada duran sayfaları da alıntılayabiliyor. Fan-out mekaniği bunu mümkün kılıyor: ana sorguda onuncu sırada olan bir sayfa, o sorgunun bölündüğü alt sorulardan birinde en iyi cevap olabilir. Küçük ve odaklı siteler için asıl fırsat burada.
  </p>
  {/* kaynak: K111 */}

  <h3>E-ticaret siteleri AI Modu'nda nasıl öne çıkar?</h3>
  <p>
    Ürün odaklı sitelerde iki teknik adım öne çıkıyor. Birincisi, Google'ın yapay zeka ajanlarıyla entegre çalışan rezervasyon ve bilet platformlarına bağlanmak. İkincisi, ajanların gerçek zamanlı stok ve fiyat bilgisine ulaşabilmesi için genel bir API veya yapılandırılmış ürün akışı sunmak. Stok bilgisi güncel olmayan bir katalog, ajan tabanlı alışveriş akışında baştan eleniyor.
  </p>
  {/* kaynak: K110 */}

  <h3>Bilgilendirici sorgularda tıklama oranı ne kadar düşüyor?</h3>
  <p>
    Ölçümler AI yanıtı tetikleyen sorgularda ortalama %34,5 düşüş gösteriyor, bazı sorgu türlerinde bu oran %64'e çıkıyor. En sert düşüş bilgilendirici sorgularda yaşanıyor; gezinme ve işlemsel sorgular çok daha az etkileniyor. Bu veriler İngilizce sorgu setlerinden geliyor, Türkçe için doğrudan karşılığı henüz ölçülmedi.
  </p>
  {/* kaynak: K108 */}
  {/* kaynak: K111 */}

  <h3>Uzun ve karmaşık sorgularda durum farklı mı?</h3>
  <p>
    Evet ve bu bir fırsat. Uzun kuyruklu karmaşık sorgularda doğrudan tıklama azalsa bile yanıt içinde atıf alma oranı artıyor. AI Modu'nun ayrı bir sekme olması da kullanıcıların oraya geçmek için bilinçli bir hareket yapmasını gerektiriyor; bu sekmeye geçen kullanıcı genellikle daha spesifik bir niyetle geliyor.
  </p>
  {/* kaynak: K111 */}
  {/* kaynak: K108 */}

  <h3>AI Modu'ndan gelen trafiği Search Console'da görebilir miyim?</h3>
  <p>
    Ayrıştırılmış olarak göremezsiniz. Search Console AI Bakışı ve AI Modu dokunma noktalarını raporluyor ancak veriyi kaynak yüzeyine göre filtrelemeye izin vermiyor. Üçüncü taraf görünürlük araçları bu boşluğu kendi örneklem yöntemleriyle doldurmaya çalışıyor, fakat ürettikleri sayı Google'ın gerçek gösterim verisi değil, tahmindir.
  </p>
  {/* kaynak: K108 */}

  <p className="sayfa-cta">
    AI Modu'nda hangi sorgularda görünüp hangilerinde görünmediğinizi ölçmek ve içerik
    yapınızı bu yüzeye göre kurmak için
    <Link href="/geo">GEO danışmanlığı sayfasına</Link> göz atabilirsiniz.
  </p>
                </div>
            </article>
        </div>
    );
}
