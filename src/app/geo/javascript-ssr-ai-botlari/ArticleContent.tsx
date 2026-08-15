/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

const headings = [
    {
        "id": "hangi-bot-js-calistiriyor",
        "text": "Hangi yapay zeka tarayıcısı JavaScript çalıştırıyor?"
    },
    {
        "id": "hydration-gap",
        "text": "Hydration gap: kullanıcı için milisaniye, bot için kalıcı boşluk"
    },
    {
        "id": "gelir-meselesi",
        "text": "SSR neden teknik değil gelir meselesi?"
    },
    {
        "id": "rendering-stratejisi",
        "text": "Hangi rendering stratejisi hangi sayfaya?"
    },
    {
        "id": "duzeltme-sirasi",
        "text": "Nereden başlamalı: düzeltme sırası"
    },
    {
        "id": "turkiye",
        "text": "Türkiye'de bu sorun nerede birikiyor?"
    },
    {
        "id": "test",
        "text": "Sitenizi test edin: yapay zeka tarayıcısı ne görüyor?"
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
    Büyük yapay zeka tarayıcılarının çoğu JavaScript çalıştırmaz. GPTBot, ClaudeBot,
    PerplexityBot ve OAI-SearchBot sitenizi yalnızca sunucudan gelen ham HTML olarak
    okur; tarayıcıda çalışan kod onlar için hiç çalışmaz. İçeriğiniz sayfa yüklendikten
    sonra bir API çağrısıyla geliyorsa bu botlar boş bir kabuk görür. Çözüm sunucu
    tarafı render (SSR) ya da artımlı statik yenileme (ISR).
  </p>
                <aside className="tldr mb-12 p-6 md:p-8 bg-violet-50/50 border border-violet-100/80 rounded-3xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-violet-600 text-white text-xs font-black uppercase tracking-widest rounded-full">TL;DR</span>
                        <span className="tldr-baslik text-sm font-bold text-violet-800">Kısaca</span>
                    </div>
                    <p className="text-gray-800 font-bold text-[15px] leading-relaxed mb-4"><strong>Google'da birinci sırada olan bir sayfa, yapay zeka tarayıcıları için tamamen boş olabilir — ve bunu ancak bakmayı bilirseniz fark edersiniz.</strong></p>
                    <ul className="space-y-3.5 text-gray-700 text-[15px] leading-relaxed list-none pl-0 my-0"><li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>JS dosyasını indirmek ile çalıştırmak aynı şey değil. GPTBot dosyayı çekiyor, işlemiyor.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Sorun yalnızca eğitim botlarında değil: kullanıcı sorusuna şu anda yanıt üreten getirim botları da render etmiyor.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Dynamic rendering'i yalnızca Googlebot için kurmak, yapay zeka tarafında hiçbir şeyi çözmez — çoğu kurulumun sessiz hatası bu.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Teşhis on saniye sürüyor: <code>Ctrl+U</code>. DevTools bu iş için yanıltıcı, çünkü JavaScript çalıştıktan sonrasını gösteriyor.</span></li></ul>
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
                    <h2 id="hangi-bot-js-calistiriyor">Hangi yapay zeka tarayıcısı JavaScript çalıştırıyor?</h2>

  <p className="bolum-cevap">
    Neredeyse hiçbiri. Ölçümlere göre GPTBot, ClaudeBot ve PerplexityBot dahil büyük
    yapay zeka tarayıcılarının (crawler) %69'u JavaScript çalıştıramıyor. İçeriğiniz
    yalnızca JavaScript çalıştıktan sonra ekrana geliyorsa bu botlar gerçek anlamda
    boş bir sayfa görür — hata almazlar, 404 dönmez, sadece okuyacak bir şey bulamazlar.
    Bu eşiği geçmeden <Link href="/geo">GEO</Link> tarafında yaptığınız içerik çalışmasının
    karşılığını almanız mümkün değil.
    {/* kaynak: K150 */}
  </p>

  <p>
    Burada çoğu ekibin gözden kaçırdığı bir nüans var. "JavaScript indirmek" ile
    "JavaScript çalıştırmak" iki ayrı iştir. GPTBot isteklerinin %11,5'inde bir
    JavaScript dosyası çekiyor; ClaudeBot bu oranı %23,84'e taşıyor. İkisi de dosyayı
    alıyor, ikisi de çalıştırmıyor.
    {/* kaynak: K150 */}
    Sunucu loglarınızda <code>.js</code> uzantılı istekler görüp "demek ki render
    ediyor" diye düşünmek, bu yüzden sık yapılan ve pahalıya patlayan bir çıkarım.
    Fetch, execute değildir.
  </p>

  <p>
    Aşağıdaki tablo Haziran 2026 itibarıyla gözlenen davranışı özetliyor. Bot
    yetenekleri sabit değil; bunu ezberlenecek bir liste değil, o günün fotoğrafı
    olarak okuyun. Kendi sitenizde ne olduğunu ise en sonda anlattığım testlerle
    doğrudan görebilirsiniz.
  </p>

  <table className="karsilastirma">
    <thead>
      <tr>
        <th>Tarayıcı</th>
        <th>JS Çalıştırma</th>
        <th>Tür</th>
        <th>Not</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Googlebot</td>
        <td>Tam</td>
        <td>Arama</td>
        <td>Evergreen Chromium kullanır; tam destek veren tek büyük tarayıcı</td>
      </tr>
      <tr>
        <td>Google Gemini</td>
        <td>Tam (dolaylı)</td>
        <td>Getirim</td>
        <td>Kendi adına gezen ayrı bir botu yok; Google'ın render edilmiş indeksinden yararlanır</td>
      </tr>
      <tr>
        <td>ChatGPT Operator</td>
        <td>Tam</td>
        <td>Ajan</td>
        <td>Ocak 2025'te tam JS render ve bilgisayarlı görü ile çıktı; GPTBot'tan ayrı bir şey</td>
      </tr>
      <tr>
        <td>Bingbot</td>
        <td>Sınırlı</td>
        <td>Arama</td>
        <td>Modern framework'lerin tamamını kaldırmıyor; statik HTML öneriliyor</td>
      </tr>
      <tr>
        <td>GPTBot</td>
        <td>Yok</td>
        <td>Eğitim</td>
        <td>İsteklerinin %11,5'inde JS indirir, çalıştırmaz</td>
      </tr>
      <tr>
        <td>OAI-SearchBot</td>
        <td>Yok</td>
        <td>Getirim</td>
        <td>ChatGPT'nin canlı arama tarafını besler, render etmez</td>
      </tr>
      <tr>
        <td>ClaudeBot</td>
        <td>Yok</td>
        <td>Eğitim</td>
        <td>Yalnızca metin tabanlı HTML ayrıştırır</td>
      </tr>
      <tr>
        <td>Claude-SearchBot</td>
        <td>Yok</td>
        <td>Getirim</td>
        <td>JavaScript render etmez</td>
      </tr>
      <tr>
        <td>PerplexityBot</td>
        <td>Yok</td>
        <td>Getirim</td>
        <td>İstemci tarafı render edilen bir SPA'da yalnızca boş uygulama kabuğunu görür; en hızlı büyüyen yapay zeka tarayıcısı</td>
      </tr>
      <tr>
        <td>Meta-ExternalAgent</td>
        <td>Yok</td>
        <td>Eğitim</td>
        <td>JavaScript render etmez</td>
      </tr>
      <tr>
        <td>Bytespider</td>
        <td>Yok</td>
        <td>Eğitim</td>
        <td>JavaScript render etmez</td>
      </tr>
    </tbody>
  </table>
  {/* kaynak: K150 */}
  {/* kaynak: K154 */}
  {/* kaynak: K155 */}

  <p>
    Tablodaki "tür" sütunu, çoğu tartışmanın atladığı ayrımı taşıyor. Eğitim botları
    (GPTBot, ClaudeBot, Bytespider) model eğitimi için veri toplar; getirim botları
    (OAI-SearchBot, Claude-SearchBot, PerplexityBot) kullanıcının az önce sorduğu
    soruya yanıt üretmek için sitenize gelir.
    {/* kaynak: K155 */}
    İkisi de JavaScript çalıştıramıyor. Ama getirim botları sitenizi geçmişte bir ara
    değil, şu anda okuyor — ve okuyamadıklarında kaybettiğiniz şey gelecekteki bir
    eğitim seti değil, bu haftaki <Link href="/geo/chatgpt-geo">ChatGPT atıfları</Link>.
  </p>

  <p>
    Bot davranışını erişim tarafından yönetmek ayrı bir konu; hangi botu içeri
    alacağınıza karar vermek için <Link href="/geo/ai-botlari-robots-txt">yapay
    zeka botları ve robots.txt</Link> sayfasına bakın. Bu sayfanın konusu ise şu: botu
    içeri aldınız, peki içeride ne buluyor?
  </p>


  <h2 id="hydration-gap">Hydration gap: kullanıcı için milisaniye, bot için kalıcı boşluk</h2>

  <p className="bolum-cevap">
    Hydration gap, sunucunun HTML'i gönderdiği an ile istemci tarafındaki JavaScript'in
    sayfayı içerikle doldurduğu an arasındaki penceredir. İnsan kullanıcı için bu
    pencere birkaç yüz milisaniye — fark etmez bile. GPTBot ya da ClaudeBot içinse
    kapanmayan bir boşluktur, çünkü o pencereyi kapatacak kodu hiç çalıştırmazlar.
    {/* kaynak: K152 */}
  </p>

  <p>
    Somutlaştıralım. Bir e-ticaret katalog sayfasında ürün adı ve sayfa iskeleti
    sunucu tarafında render ediliyor; spesifikasyon tablosu, fiyat, stok durumu ve
    JSON-LD ise bileşen mount olduktan sonra gelen API çağrısıyla yerleşiyor. Ekranda
    her şey yolunda. Yapay zeka tarayıcısının gördüğü ise yalnızca ürün adı: altmış
    dolu özellik hiçbir indekse girmiyor.
    {/* kaynak: K152 */}
    Aynı sayfa Google'da üst sıralarda durabilir, çünkü Googlebot render ediyor. Bu
    da yanlış bir güven duygusu üretir — <Link href="/seo/teknik-seo">teknik SEO</Link>
    tarafında hiçbir alarm çalmaz.
    {/* kaynak: K154 */}
  </p>

  <p>
    Son bir yılda bu sorunun yeni bir kaynağı çıktı: yapay zeka destekli kodlama
    araçları. Build hatasını en hızlı yoldan susturmak için dosyanın başına
    <code>'use client'</code> direktifini ekliyorlar. Direktif işe yarıyor, hata
    kayboluyor, kimse geri dönüp bakmıyor. Oysa o tek satır koca içerik bloklarını
    istemci tarafına itiyor ve bloğu yapay zeka tarafına görünmez kılıyor.
    {/* kaynak: K153 */}
    Kod incelemelerinde aranacak şey artık bu: gerekçesiz eklenmiş istemci direktifleri.
  </p>

  <p>
    "SSR kullanıyoruz" demek de tek başına yetmiyor. Streaming SSR ve kısmi hidrasyon
    gibi yaklaşımlarda sayfanın bir bölümü sunucudan gelirken kalanı sonradan akıyor;
    bot ilk yanıtı alıp bağlantıyı kapattığında akan kısmı hiç görmemiş oluyor. Aynı
    şekilde çerez onayı arkasına gizlenen içerik, "devamını oku" ile açılan bloklar ve
    sekmeli arayüzlerin pasif sekmeleri de ham HTML'de bulunmayabiliyor. Ölçüt basit:
    içerik ilk sunucu yanıtının gövdesinde var mı, yok mu?
  </p>

  <p>
    Sunucudan ne geldiği kadar, ne sırayla geldiği de sayıyor. ChatGPT atıflarının
    %44,2'si sayfanın ilk %30'luk bölümünden geliyor.
    {/* kaynak: K155 */}
    Yani cevabı sayfanın üçte birlik ilk diliminde vermek, aşağıda ne yazdığınızdan
    daha belirleyici. Bunu içerik tarafında nasıl kuracağınız
    <Link href="/geo/icerik-chunking">içerik parçalama</Link> konusunun
    işi; teknik tarafta karşılığı, o ilk dilimin sunucudan hazır gelmesi.
  </p>


  <h2 id="gelir-meselesi">SSR neden teknik değil gelir meselesi?</h2>

  <p className="bolum-cevap">
    Çünkü yapay zeka üzerinden gelen ziyaretçi, arama trafiğinden çok daha yüksek
    niyetle geliyor. Bir ölçümde yapay zeka kaynaklı ziyaretlerin dönüşüm oranı %14,2,
    Google organik trafiğinde ise %2,8 çıktı — beş kat fark. Render edemediği için
    ürün sayfanızı okuyamayan bir bot, size trafik değil, doğrudan ciro kaybettiriyor.
    {/* kaynak: K155 */}
  </p>

  <p>
    Bu dönüşüm farkı tek bir sağlayıcının ölçümü; nesnel bir sabit gibi okumayın.
    Yine de yönü mantıklı: kullanıcı yapay zekaya sorusunu sorup karşılaştırmayı
    yaptırdıktan sonra sitenize geliyor, yani araştırma aşamasını dışarıda tamamlamış
    oluyor. Aynı ölçüm setinde ChatGPT atıflarının %20,1'i doğrudan ürün sayfalarına
    yapılıyor.
    {/* kaynak: K155 */}
    Ürün sayfası, JavaScript sorununun en yoğun olduğu sayfa tipi. Çakışma tam olarak
    burada.
  </p>

  <p>
    Hızın da bir payı var. İlk içerikli boyama (FCP) süresi 0,4 saniyenin altında olan
    sayfalar ortalama 6,7 ChatGPT atıfı alırken, daha yavaş sayfalar 2,1'de kalıyor.
    {/* kaynak: K154 */}
    Buradan "sayfayı hızlandırın, atıf gelsin" sonucu çıkmaz; bu bir korelasyon.
    Hızlı sayfalar genellikle teknik bakımı düzgün, sunucudan render eden sitelerde
    bulunur — muhtemelen ölçülen şey hızın kendisi değil, hızı üreten disiplin.
    <Link href="/seo/core-web-vitals">Core Web Vitals</Link> tarafında yaptığınız iş burada
    da işinize yarıyor, ama nedenselliği tersten kurmayın.
  </p>

  <p>
    Ölçek tarafında çarpıcı bir vaka var: bir SPA'ya pre-rendering eklendikten sonra
    yapay zeka botları tüm sayfa isteklerinin %47,95'ini oluşturmuş.
    {/* kaynak: K154 */}
    Tek vaka, genelleme değil. Ama sunucunuzun kapasite planında artık ikinci bir
    kitle olduğunu hatırlatıyor: sayfalarınızı insanlar kadar sık isteyen, hiç tıklama
    üretmeyen, buna karşılık sizi yanıtlara sokan bir kitle.
  </p>

  <p>
    Bu ikinci kitlenin bütçeye yansıması iki yönlü. Bir yandan sunucu maliyeti ve
    önbellek stratejisi yeniden düşünülmeyi gerektiriyor; diğer yandan trafik
    raporlarında görünmeyen bir görünürlük kanalı açılıyor. Yapay zeka botlarının
    ziyaretleri oturum sayınıza yazılmıyor, ama o ziyaretlerde okudukları içerik
    kullanıcının önüne yanıt olarak çıkıyor. Klasik analitik bakışıyla "değersiz
    trafik" diye kesilen bot erişimi, aslında satış hunisinin en üstündeki katman
    hâline geldi.
  </p>


  <h2 id="rendering-stratejisi">Hangi rendering stratejisi hangi sayfaya?</h2>

  <p className="bolum-cevap">
    Tek doğru cevap yok; sayfanın işine bakılır. İçeriği yapay zekaya görünmesi
    gereken her sayfa — makaleler, servis sayfaları, ürün sayfaları — sunucudan
    render edilmeli. Katalog gibi hacimli ama yavaş değişen bölümlerde ISR sunucu
    yükünü düşürür. Etkileşimli arayüzlerde istemci tarafı render sorun değildir,
    çünkü zaten indekslenecek bir içerik yoktur.
  </p>

  <table className="karsilastirma">
    <thead>
      <tr>
        <th>Strateji</th>
        <th>Yapay Zeka Görünürlüğü</th>
        <th>Uygun Olduğu Durum</th>
        <th>Dikkat</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>SSR</td>
        <td>Tam</td>
        <td>Servis sayfaları, makaleler, ürün sayfaları</td>
        <td>Büyük kataloglarda sunucu yükü ciddi biçimde artar</td>
      </tr>
      <tr>
        <td>ISR</td>
        <td>Tam</td>
        <td>Spesifikasyonu sabit, yalnızca fiyat ve stoğu değişen kataloglar</td>
        <td>Yenileme aralığında içerik eskiyebilir</td>
      </tr>
      <tr>
        <td>Pre-rendering</td>
        <td>Kısmi</td>
        <td>Tam SSR geçişi mümkün olmadığında ara çözüm</td>
        <td>Düzenli yenileme kalıcı bir bakım yükü yaratır</td>
      </tr>
      <tr>
        <td>Dynamic rendering</td>
        <td>Riskli</td>
        <td>—</td>
        <td>Yalnızca Googlebot için kurulursa yapay zeka tarayıcıları boş HTML alır</td>
      </tr>
      <tr>
        <td>CSR</td>
        <td>Yok</td>
        <td>Sohbet, harita, oyun gibi etkileşimli arayüzler</td>
        <td>İndekslenmesi gereken içerik için uygun değil</td>
      </tr>
    </tbody>
  </table>
  {/* kaynak: K152 */}
  {/* kaynak: K153 */}
  {/* kaynak: K154 */}
  {/* kaynak: K155 */}

  <p>
    Tablodaki en tehlikeli satır dynamic rendering. Prerender.io benzeri servisleri
    yalnızca Googlebot user-agent'ı için tetikleyen kurulumlar hâlâ yaygın; bu
    kurulumda GPTBot ve PerplexityBot boş sayfayla karşılaşmaya devam eder.
    {/* kaynak: K155 */}
    Google da bu yaklaşımı yıllardır kalıcı bir çözüm değil, geçici bir yama olarak
    tanımlıyor.
    {/* kaynak: K152 */}
    Dynamic rendering kullanmaya devam edecekseniz en azından bot listesini genişletin;
    aksi hâlde yapay zeka tarafında hiçbir şey çözmemiş olursunuz.
  </p>

  <p>
    Bir de beklemeye dair soru var. 2027'ye kadar yapay zeka tarayıcılarının %65'inin
    JavaScript'i destekleyeceği yönünde bir öngörü dolaşıyor.
    {/* kaynak: K150 */}
    Bu bir tahmin, ölçüm değil — tutabilir de tutmayabilir de. Kararı değiştirmiyor:
    tahmin tutsa bile o tarihe kadar geçen sürede içeriğiniz yanıtlara girmeyecek,
    tutmazsa zaten SSR'siz kalıcı olarak görünmez olacaksınız. Her iki senaryoda da
    yapılacak iş aynı.
  </p>


  <h2 id="duzeltme-sirasi">Nereden başlamalı: düzeltme sırası</h2>

  <p className="bolum-cevap">
    Tüm siteyi bir anda SSR'a taşımak nadiren gerçekçi. Önce şablonları etkiye göre
    sıralayın: yapay zekanın alıntılamasını istediğiniz sayfa tipleri — ürün, kategori,
    rehber içerik, servis sayfaları — ilk sırada. Ardından o şablonlarda hangi
    alanların istemci tarafında kaldığını çıkarın. Genellikle sayfanın tamamı değil,
    üç beş alan sorunlu oluyor ve düzeltme sanıldığından küçük çıkıyor.
  </p>

  <p>
    Şablon envanteri çıkarmanın hızlı yolu şu: her sayfa tipinden bir örnek alın,
    cURL çıktısıyla tarayıcıdaki görüntüyü yan yana koyun ve eksik alanları listeleyin.
    Bu liste doğrudan iş emrine dönüşür. Deneyimime göre listenin başında hep aynı
    şeyler oluyor: fiyat, stok, varyantlar, yorum özeti ve JSON-LD. Bunlar sayfanın
    kelime sayısının küçük bir bölümü, ama yapay zekanın bir ürünü yanıtta önerebilmesi
    için ihtiyaç duyduğu bilginin neredeyse tamamı.
  </p>

  <p>
    Framework tarafında karşılıkları kabaca şöyle. Next.js App Router'da iş,
    <code>'use client'</code> sınırını yaprak bileşenlere itmek ve veriyi sunucu
    bileşeninde çekmek; etkileşim gerektiren küçük parçalar istemcide kalabilir, metin
    ve veri kalmamalı. Nuxt tarafında <code>useAsyncData</code> ile sunucudan gelen
    veriyi ilk yanıtın parçası yapmak yeterli oluyor. Astro gibi varsayılanı statik
    olan kurulumlarda sorun genellikle "island" olarak işaretlenmemesi gereken
    bileşenlerin işaretlenmesinden çıkıyor. WordPress üzerinde React tabanlı bir
    tema veya blok kullanılıyorsa, kontrol edilecek şey blokların sunucu tarafında
    da render edilip edilmediği.
  </p>

  <p>
    Katalog büyükse ISR'ı ciddi biçimde değerlendirin. Bir spesifikasyon tablosunun
    dakikada bir tazelenmesi gerekmiyor; fiyat ve stok gibi hızlı değişen alanları
    sunucudan gelen HTML'e yazıp gerisini belirli aralıklarla yenilemek, hem sunucu
    yükünü hem de bakım maliyetini makul tutuyor. Sunucu tarafında her isteği canlı
    render etmek, on binlerce ürünlü bir katalogda hızla bir altyapı sorununa dönüşür.
    {/* kaynak: K152 */}
  </p>

  <p>
    Son olarak bir ölçüm noktası kurun. Düzeltmeden önce ve sonra, aynı şablonlar için
    cURL çıktısındaki içerik uzunluğunu kaydedin; sunucu loglarında yapay zeka
    botlarının aldığı yanıt boyutunu izleyin. Değişimi somut bir sayıyla göstermek,
    bir sonraki teknik bütçeyi almanın en kolay yolu.
  </p>


  <h2 id="turkiye">Türkiye'de bu sorun nerede birikiyor?</h2>

  <p className="bolum-cevap">
    İki yerde: hazır e-ticaret altyapılarına sonradan eklenen istemci tarafı
    bileşenlerde ve ajans eliyle yapılan headless geçişlerde. Türkiye'deki mağazaların
    büyük bölümü Ticimax, İdeaSoft, T-Soft, Shopify, WooCommerce ya da OpenCart
    üzerinde duruyor. Bu altyapıların çekirdek şablonları sunucudan HTML üretir —
    yani temel sağlamdır. Sorun çekirdekte değil, üzerine eklenen katmanda başlıyor.
  </p>

  <p>
    Tipik senaryo şöyle işliyor. Ürün sayfası sunucudan geliyor, ama beden ve renk
    varyant seçicisi, taksit tablosu, kargo süresi hesaplayıcısı, yorum modülü ve
    "benzer ürünler" bloğu üçüncü taraf bir widget olarak JavaScript'le sonradan
    yerleşiyor. İnsan için sayfa zenginleşiyor. PerplexityBot içinse ürün sayfası
    fiyatsız, yorumsuz, varyantsız bir başlıktan ibaret kalıyor — üstelik JSON-LD
    de çoğu zaman aynı widget'la beraber geldiği için
    <Link href="/geo/yapay-zeka-schema" data-pending="true">yapay zeka için schema</Link>
    tarafı da boşa düşüyor.
  </p>

  <p>
    Kategori sayfalarında mekanizma biraz farklı. Filtreleme ve sıralama hızlı
    hissettirsin diye tamamen istemci tarafına alınıyor; ilk yükte gelen HTML'de
    ürün listesi ya hiç yok ya da ilk birkaç ürünle sınırlı. Sonsuz kaydırma varsa
    durum daha kötü: bot ilk ekranın ötesini hiç görmüyor. Türkçe sorgularda yapay
    zekanın seçebileceği kaynak havuzu İngilizceye kıyasla dar olduğu için, listeden
    düşmenin bedeli de orantısız biçimde yüksek.
  </p>

  <p>
    Headless geçişler ise sorunun daha pahalı versiyonu. Son yıllarda kurumsal
    markalarda "Next.js ile headless'a geçelim" kararı sık veriliyor ve teknik olarak
    doğru bir karar. Ancak proje sonunda ortaya çıkan şey çoğu zaman Next.js kabuğu
    içinde çalışan bir istemci uygulaması oluyor: veri storefront API'sinden
    <code>useEffect</code> içinde çekiliyor, sayfa isteğe bağlı olarak dinamikleşiyor,
    <code>'use client'</code> ağacın tepesine çıkıyor. Kabul testlerinde kimse ham
    HTML'e bakmadığı için sorun aylarca fark edilmiyor.
  </p>

  <p>
    Bir de dil katmanı var. Türkçe içerikte yapay zekanın seçebileceği kaynak sayısı
    sınırlı olduğu için, doğru yapılandırılmış tek bir sayfa İngilizce bir pazarda
    olacağından daha fazla yer kaplayabiliyor. Bunun tersi de geçerli: kategorinizde
    ham HTML'i temiz olan üç rakip varsa, yanıtlarda sürekli o üçü görürsünüz. Görece
    küçük bir teknik düzeltmenin görünürlük getirisinin bu kadar yüksek olmasının
    nedeni, havuzun dar olması.
  </p>

  <p>
    Pratik öneri: geçiş projelerinin kabul kriterlerine tek satır ekleyin — "kritik
    şablonların her birinde fiyat, stok, açıklama ve JSON-LD, JavaScript kapalıyken
    ham HTML'de görünür olacak". Bu maddeyi sözleşmeye koymak, canlıya çıktıktan
    sonra yapılacak refactor'un maliyetinin yanında bedava kalıyor. Denetimi bir
    çerçeveye oturtmak isterseniz
    <Link href="/geo/geo-teknik-denetim" data-pending="true">GEO teknik denetim</Link>
    adımlarını takip edebilirsiniz.
  </p>


  <h2 id="test">Sitenizi test edin: yapay zeka tarayıcısı ne görüyor?</h2>

  <p className="bolum-cevap">
    Teşhis için araç satın almanız gerekmiyor. Sayfanın ham kaynağına bakmak, cURL ile
    tek bir istek atmak ve JavaScript'i kapatıp yenilemek — bu üçü on dakikada net bir
    cevap veriyor. Ölçeği büyütmek gerektiğinde tarama araçları ve sunucu logları
    devreye giriyor. Sıra önemli: önce teşhis, sonra ölçüm.
  </p>

  <h3>Ham kaynağa bakın</h3>
  <p>
    <code>Ctrl+U</code> ile sayfanın sunucudan gelen HTML'ini açın ve içerikte
    aradığınız metni orada arayın. Boş <code>&lt;div&gt;</code> kabukları ve
    <code>&lt;script&gt;</code> etiketlerinden başka bir şey yoksa GPTBot, ClaudeBot ve
    PerplexityBot da aynı boşluğu görüyor demektir.
    {/* kaynak: K154 */}
    DevTools'un Elements sekmesini bu iş için kullanmayın: orada gördüğünüz DOM,
    JavaScript çalıştıktan <em>sonraki</em> hâldir ve size her zaman iyi haber verir.
    {/* kaynak: K152 */}
  </p>

  <h3>cURL ile botun bakış açısını taklit edin</h3>
  <p>
    Tarayıcı devrede olmadığı için cURL, bir yapay zeka tarayıcısının gördüğüne çok
    yakın bir çıktı verir:
  </p>
  <pre><code>curl -s "https://siteniz.com/sayfa" | grep -i "json-ld\|product\|&lt;table"</code></pre>
  <p>
    Çıktıda JSON-LD bloğunu ve gerçek içerik değerlerini — fiyatı, spesifikasyonu,
    tablo satırlarını — görüyorsanız sunucu tarafı render çalışıyor.
    {/* kaynak: K152 */}
    {/* kaynak: K155 */}
    Boş dönüyorsa ya da yalnızca şablon iskeletini alıyorsanız teşhis konmuş demektir.
    Aynı komutu ürün, kategori, blog ve servis sayfası için ayrı ayrı çalıştırın;
    çoğu sitede şablonlar arasında ciddi fark çıkıyor.
  </p>

  <h3>JavaScript'i kapatıp yenileyin</h3>
  <p>
    Geliştirici araçlarından JavaScript'i devre dışı bırakın ve sayfayı yenileyin.
    İçerik kayboluyorsa SSR ya da pre-rendering şart. Testi mobil genişlikte de
    tekrarlayın; bazı temalarda mobil şablon masaüstünden farklı davranıyor ve
    içeriğin daha büyük bölümü sonradan yükleniyor.
    {/* kaynak: K154 */}
  </p>

  <h3>Tarama araçlarıyla ölçeği büyütün</h3>
  <p>
    Tek tek sayfa kontrolü teşhis için yeterli, envanter için değil. Screaming Frog'da
    JS rendering açıkken "JS" sekmesindeki render edilmiş kelime sayısı değişim
    yüzdesine bakın: yüksek fark, o sayfada içeriğin JavaScript'e bağlı olduğunu
    söyler. Sitebulb'ün Response vs Render raporu aynı farkı doğrudan gösteriyor.
    {/* kaynak: K153 */}
    Google Search Console'daki "İncelenen sayfayı görüntüle" özelliği ise yalnızca
    Google'ın ne gördüğünü verir — yapay zeka tarayıcıları için iyimser bir tablo
    çizdiğini akılda tutun.
  </p>

  <h3>Sunucu loglarını okuyun</h3>
  <p>
    Log dosyalarında GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot ve
    PerplexityBot ziyaretlerini filtreleyin. Bakılacak iki şey var: 200 durum kodu
    alıyorlar mı, ve aldıkları yanıtın boyutu ne kadar?
    {/* kaynak: K154 */}
    {/* kaynak: K155 */}
    Her isteğe 200 dönüyor ama yanıt boyutu şablon iskeletiyle aynıysa, bot içeri
    giriyor ve elleri boş çıkıyor demektir. Bu, tek bir sayfa testinden çok daha
    güvenilir bir kanıt.
    <Link href="/geo/perplexity-geo">Perplexity tarafındaki</Link> davranışı izlemenin en
    doğrudan yolu da bu.
  </p>

  <h3>Temel sinyalleri statikleştirin</h3>
  <p>
    Canonical etiketi ve metadata JavaScript ile enjekte edilmemeli;
    <code>&lt;head&gt;</code> içinde statik durmalı. JSON-LD ilk sunucu yanıtında
    bulunmalı — sonradan eklenen schema, render etmeyen bir bot için hiç yok demektir.
    {/* kaynak: K155 */}
    Karşılaştırma verisi sunuyorsanız HTML tablo biçimini tercih edin; tablolar
    ayrıştırılması en kolay yapılardan biri.
    {/* kaynak: K155 */}
    Bu arada <Link href="/geo/llms-txt-nedir">llms.txt</Link> dosyasının getirim davranışı
    üzerinde maddi bir etkisi Haziran 2026 itibarıyla hiçbir büyük platform tarafından
    doğrulanmadı; dosyayı koymak zararsız ama render sorununun yerine geçmiyor.
    {/* kaynak: K155 */}
  </p>

  <p className="cta">
    Render katmanı, yapay zeka görünürlüğünün en somut ve en hızlı düzelen kısmı —
    ama tek başına yeterli değil. Sitenizin yapay zeka yanıtlarındaki konumunu içerik,
    varlık ve teknik taraflarıyla birlikte ele almak isterseniz
    <Link href="/geo">GEO danışmanlığı sayfasına</Link> göz atın.
  </p>


  <h2 id="sss">Sıkça Sorulan Sorular</h2>

  <h3>GPTBot hiç JavaScript çalıştırmıyor mu?</h3>
  <p>
    Hayır. Haziran 2026 itibarıyla GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot
    ve PerplexityBot dahil büyük yapay zeka tarayıcılarının tamamı JavaScript render
    etmiyor. GPTBot isteklerinin bir kısmında JavaScript dosyasını indiriyor, ancak
    indirmek çalıştırmak anlamına gelmiyor.
  </p>

  <h3>ChatGPT Operator diğer botlardan farklı mı?</h3>
  <p>
    Evet, farklı. Ocak 2025'te tam JavaScript render ve bilgisayarlı görü yetenekleriyle
    tanıtıldı; bir tarayıcıyı gerçekten sürüyor. Ama Operator bir kullanıcının
    talebiyle tekil sayfalara giden bir ajan, sitenizi sistematik olarak tarayan bir
    bot değil. GPTBot veya OAI-SearchBot ile aynı kefeye koyup "demek ki OpenAI render
    ediyor" sonucuna varmak yanıltıcı olur.
  </p>

  <h3>Gemini veya Copilot için SSR şart mı?</h3>
  <p>
    Doğrudan şart değil. Gemini ve Copilot canlı arama kullandığında zaten render
    edilmiş arama indekslerinden yararlanıyor; Googlebot ve Bingbot işi önceden
    yapmış oluyor. Tek ölçüme göre ChatGPT'nin web arama yanıtlarının yaklaşık %92'si
    Bing indeksinden besleniyor. Yine de bu, SSR'siz kalmanın güvenli olduğu anlamına
    gelmez: ChatGPT, Claude ve Perplexity'nin kendi botları sitenize doğrudan geliyor
    ve orada arama indeksinin koruması yok.
  </p>

  <h3>llms.txt dosyası yapay zeka görünürlüğünü artırıyor mu?</h3>
  <p>
    Şu an için kanıtlanmış bir etkisi yok. Hiçbir büyük platform dosyayı kullandığını
    doğrulamadı.
  </p>

  <h3>Yapay zeka kodlama araçları SSR kurulumunu bozuyor mu?</h3>
  <p>
    Bozabiliyor. Build hatasını hızlıca gidermek için dosyaların başına
    <code>'use client'</code> direktifi ekliyorlar; direktif hatayı susturuyor ama
    içerik bloğunu istemci tarafına taşıyor. Kod incelemesinde gerekçesiz eklenmiş
    istemci direktiflerini aramak, bu sorunun en ucuz önlemi.
  </p>

  <h3>Dynamic rendering yeterli bir çözüm mü?</h3>
  <p>
    Geçici yama olarak iş görüyor, uzun vadeli strateji değil. Google yıllardır bu
    yaklaşımı geçici çözüm diye tanımlıyor. Kullanacaksanız bot listesine yapay zeka
    tarayıcılarını da eklediğinizden emin olun; yalnızca Googlebot için kurulmuş bir
    dynamic rendering, bu sayfada anlatılan sorunun hiçbirini çözmez.
  </p>

  <h3>Google'da iyi sıralanıyorum, yine de sorun olabilir mi?</h3>
  <p>
    Evet, hatta en sık karşılaşılan durum bu. Googlebot JavaScript çalıştırdığı için
    sayfanız Google'da sorunsuz görünür ve hiçbir SEO aracı alarm vermez. Yapay zeka
    tarayıcıları aynı sayfayı boş okur. İki kanalın teşhisi ayrı yapılmalı; Search
    Console'un yeşil olması yapay zeka tarafı hakkında bilgi vermiyor.
  </p>

  <h3>Sitemin tamamını SSR'a taşımam gerekiyor mu?</h3>
  <p>
    Hayır. Yapay zekanın alıntılamasını istediğiniz şablonlarla sınırlı kalabilirsiniz.
    Sohbet arayüzü, hesaplayıcı, harita gibi etkileşimli bileşenlerin istemci tarafında
    kalması sorun değil — orada indekslenecek bir içerik zaten yok. Kritik olan, ürün
    ve içerik sayfalarındaki metin, fiyat, stok ve schema verisinin ilk sunucu yanıtında
    bulunması.
  </p>
                </div>
            </article>
        </div>
    );
}
