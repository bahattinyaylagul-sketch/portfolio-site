/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

const headings = [
    {
        "id": "neden-kaciriyor",
        "text": "GA4 yapay zeka trafiğini neden kaçırıyor?"
    },
    {
        "id": "donusum-degeri",
        "text": "Bu trafiği ölçmeye değer mi?"
    },
    {
        "id": "kurulum",
        "text": "GA4'te yapay zeka kanalı kurulumu: adım adım"
    },
    {
        "id": "yerlesik-kanal",
        "text": "Google'ın yerleşik AI Assistant kanalı yeterli mi?"
    },
    {
        "id": "regex-bakimi",
        "text": "Regex listesini ne zaman güncellemeli?"
    },
    {
        "id": "looker-studio",
        "text": "Looker Studio'da dört kartlık yapay zeka panosu"
    },
    {
        "id": "gormedikleri",
        "text": "GA4'ün göremedikleri: tıklanmayan görünürlük"
    },
    {
        "id": "sunucu-logu",
        "text": "Sunucu logu tarafı: botları kim, ne zaman çekiyor?"
    },
    {
        "id": "turkiye",
        "text": "Türkiye'de durum: GA4, KVKK ve şişmiş Direct"
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
    GA4 varsayılan ayarlarıyla ChatGPT ve Perplexity oturumlarını Referral ya da
    Direct kanalına dağıtır; ayrı bir yapay zeka kanalınız yoksa bu trafik raporda
    kendi adıyla görünmez. Çözüm üç parçalı: Admin bölümünde regex tabanlı özel bir
    kanal grubu, bunu besleyen basit bir Looker Studio panosu ve tıklamayan bot
    etkinliği için sunucu logu okuması. Kurulum yarım saat, bakımı aylık.
  </p>
                <aside className="tldr mb-12 p-6 md:p-8 bg-violet-50/50 border border-violet-100/80 rounded-3xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-violet-600 text-white text-xs font-black uppercase tracking-widest rounded-full">TL;DR</span>
                        <span className="tldr-baslik text-sm font-bold text-violet-800">Kısaca</span>
                    </div>
                    <p className="text-gray-800 font-bold text-[15px] leading-relaxed mb-4"><strong>GA4 yapay zeka trafiğini ölçebilir, ama yalnızca siz ona nereye bakacağını söylerseniz.</strong></p>
                    <ul className="space-y-3.5 text-gray-700 text-[15px] leading-relaxed list-none pl-0 my-0"><li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Özel kanal grubunda tek bir regex satırı işi çözer; asıl kritik adım o kuralı Referral'ın <em>üstüne</em> taşımaktır.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Yapay zeka oturumlarının üçte birinden fazlası yönlendiren bilgisi taşımaz ve Direct'e düşer — kanalı kursanız da eksik ölçersiniz.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>GA4 yalnızca tıklayan insanı görür. Tıklanmayan görünürlüğü ve bot çekimlerini yalnızca sunucu logu gösterir.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Dört kartlık bir Looker Studio panosu, GA4 arayüzünde her ay kaybolan kanalı kalıcı hâle getirir. <Link href="/geo">GEO</Link> raporlamanızın omurgası bu pano olabilir.</span></li></ul>
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
                    <h2 id="neden-kaciriyor">GA4 yapay zeka trafiğini neden kaçırıyor?</h2>

  <p className="bolum-cevap">
    GA4 bir oturumu, tarayıcının gönderdiği yönlendiren (referrer) bilgisine bakarak
    sınıflandırır. ChatGPT ya da Perplexity bu bilgiyi gönderdiğinde oturum Referral
    kanalına, göndermediğinde Direct kanalına düşer. İki durumda da "yapay zeka" diye
    bir kanal yoktur; siz tanımlamadıkça GA4 bu kaynağı ayrı bir varlık olarak görmez.
    {/* kaynak: K171 */}
  </p>

  <p>
    Sorunun büyük yarısı Direct tarafında. Yapay zeka oturumlarının üçte birinden
    fazlası yönlendiren bilgisi olmadan geliyor.
    {/* kaynak: K171 */}
    Mobil ChatGPT uygulamasından gelen ziyaretlerde bu alan tamamen boş kalıyor: kullanıcı
    telefonda sohbet ediyor, bağlantıya dokunuyor, uygulama içi tarayıcı açılıyor ve GA4
    o oturumu "doğrudan gelmiş" sayıyor.
    {/* kaynak: K173 */}
    Direct kanalınız şişiyor, yapay zeka kanalınız boş duruyor.
  </p>

  <p>
    Bu, GA4'ün hatası değil, tasarımı. Analitik araçları yönlendiren başlığını okumak
    üzere kurulmuş; asistan arayüzleri ise o başlığı göndermeme eğiliminde. Aradaki
    boşluğu kapatmanın tek yolu, elinizdeki sinyali — yani yönlendiren bilgisi gelen
    oturumları — doğru etiketleyip, gelmeyeni ayrı yöntemlerle tahmin etmek.
  </p>


  <h2 id="donusum-degeri">Bu trafiği ölçmeye değer mi?</h2>

  <p className="bolum-cevap">
    Değer, çünkü hacmi küçük ama davranışı farklı. Yapay zeka arayüzünden gelen
    ziyaretçi, sorusunu zaten sormuş ve bir öneri almış hâlde geliyor; sitenize
    keşif için değil doğrulama için giriyor. Tek kaynaklı bir ölçüm bu farkı dört
    kata varan dönüşüm avantajı olarak raporluyor — sıralamayı ciddiye alın, rakamları
    kendi verinizle sınayın.
    {/* kaynak: K171 */}
  </p>

  <table>
    <caption>
      Kaynak bazında davranış farkı — <strong>tek bir çalışmanın verisi</strong>,
      örneklem büyüklüğü ve dönüşüm tanımı açıklanmamış
    </caption>
    <thead>
      <tr>
        <th scope="col">Kaynak</th>
        <th scope="col">Bounce oranı</th>
        <th scope="col">Sayfa/oturum</th>
        <th scope="col">Dönüşüm oranı</th>
      </tr>
    </thead>
    <tbody>
      <tr><th scope="row">Perplexity</th><td>%18</td><td>5,2</td><td>%5,1</td></tr>
      <tr><th scope="row">ChatGPT</th><td>%22</td><td>4,6</td><td>%4,3</td></tr>
      <tr><th scope="row">Google organik</th><td>%42</td><td>2,1</td><td>%1,8</td></tr>
      <tr><th scope="row">Facebook</th><td>%68</td><td>1,3</td><td>%0,6</td></tr>
    </tbody>
  </table>
  {/* kaynak: K172 */}

  <p>
    Tabloyu hedef olarak kullanmayın. Rakamlar tek bir sağlayıcının ölçümünden geliyor;
    kaç site, hangi sektörler, hangi dönem ve "dönüşüm" olarak neyin sayıldığı belirtilmemiş.
    Yapay zeka trafiğinin hacmi çoğu sitede birkaç yüz oturumla sınırlı olduğu için, o
    ölçekte hesaplanan bir dönüşüm oranı zaten birkaç işlemle iki katına çıkabilir. Doğru
    kullanım şu: tabloyu "bu trafiği ayrı ölçmek gerekiyor" argümanı olarak alın, üç ay
    veri biriktirin, sonra kendi sayınızı üretin. Kendi verinizle bu tablo çelişiyorsa
    haklı olan sizsiniz.
    {/* kaynak: K172 */}
  </p>

  <p>
    İki kaynağın neden bu kadar farklı davrandığı da ayrı bir konu:
    <Link href="/geo/perplexity-geo">Perplexity</Link> kaynakları yanıtın içinde numaralı
    biçimde gösterdiği için tıklama davranışı arama sonucuna benzer,
    <Link href="/geo/chatgpt-geo">ChatGPT</Link> ise bağlantıyı çoğu zaman metnin içine
    gömer. Aynı kanalda toplanan bu iki trafiğin ortalaması, ikisini de yanlış anlatır.
  </p>

  <p>
    Sayının bir de ikinci yüzü var. Bu kadar seçilmiş bir ziyaretçi kitlesinde ölçüm
    hatası pahalıya patlar: yapay zeka trafiğini Direct'in içinde bırakırsanız hem
    kanalın değerini göremezsiniz hem de Direct'in ortalamasını yukarı çekip yer imi
    trafiğinizi olduğundan iyi sanırsınız.
  </p>


  <h2 id="kurulum">GA4'te yapay zeka kanalı kurulumu: adım adım</h2>

  <p className="bolum-cevap">
    Kurulum, GA4'ün özel kanal grubu (custom channel group) özelliğine dayanır. Yeni bir
    grup oluşturur, içine "AI Assistant" adında bir kanal eklersiniz ve o kanalı oturum
    kaynağına uygulanan bir regex ile tanımlarsınız. Dört adım; üçüncüsü atlanırsa kanal
    kurulmuş görünür ama içi hiç dolmaz.
    {/* kaynak: K171 */}
  </p>

  <h3>1. Admin → Data display → Channel groups yolunu açın</h3>

  <p>
    Sol alttaki dişli ikonundan Admin'e girin, Data display başlığı altında Channel
    groups'u seçin ve "New channel group" ile yeni bir grup oluşturun. Gruba anlaşılır
    bir ad verin — "Varsayılan + AI" gibi. Yerleşik gruba dokunamazsınız; GA4 sizden
    kopyasını oluşturmanızı ister, bu normal.
    {/* kaynak: K171 */}
  </p>

  <p>
    Bu ekrana yalnızca mülk düzeyinde Editör yetkisi olan hesaplar erişir. Ajansla
    çalışıyorsanız ilk engel çoğu zaman burada çıkar.
  </p>

  <h3>2. AI Assistant adında yeni bir kanal tanımlayın</h3>

  <p>
    "Add new channel" deyin, kanal adını <em>AI Assistant</em> koyun. Koşul olarak
    "Session source" boyutunu, eşleşme türü olarak "matches regex" seçin ve şu deseni
    yapıştırın:
    {/* kaynak: K171 */}
  </p>

<pre><code>.*(chatgpt|openai|perplexity|claude|gemini|copilot|deepseek|grok).*</code></pre>

  <p>
    Bu kısa desen, oturum kaynağında bu kelimelerden biri geçen her şeyi yakalar:
    <code>chatgpt.com</code>, <code>chat.openai.com</code>, <code>perplexity.ai</code>,
    <code>copilot.microsoft.com</code> ve türevleri. Kelime bazlı çalıştığı için yeni
    bir alt alan adı çıktığında da tutmaya devam eder.
  </p>

  <p>
    Daha geniş bir varyant kullanmak isterseniz host adlarını tek tek yazan uzun bir
    liste de mümkün. Dana DiTomaso'nun yayımladığı uzun regex varyantı, kısa desene
    kıyasla ölçüm yaptığı veri setinde %15 daha fazla yapay zeka trafiği yakalamış —
    bu da tek bir hesaptaki karşılaştırma, evrensel bir kural değil.
    {/* kaynak: K160 */}
    Uzun listenin mantığı şu: kelime yerine alan adı yakalarsınız, böylece
    <code>you.com</code>, <code>phind.com</code>, <code>poe.com</code>,
    <code>mistral.ai</code> gibi kelime kökü ortak olmayan kaynaklar da kapsama girer.
    Bedeli bakım yükü: her yeni oyuncu için satır eklemeniz gerekir.
  </p>

  <h3>3. AI kanalını Referral'ın üstüne taşıyın</h3>

  <p>
    GA4 kanal kurallarını yukarıdan aşağıya, ilk eşleşmede durarak değerlendirir. AI
    kuralınız Referral'ın altında kalırsa <code>chatgpt.com</code> zaten Referral
    tanımına uyduğu için oturum orada yakalanır ve AI kanalına hiç ulaşmaz. Kanal
    kurulmuş görünür, sıfır oturumla durur.
    {/* kaynak: K160 */}
  </p>

  <p>
    Kanalın yanındaki tutamaçtan sürükleyip Referral'ın ve Organic Search'ün üstüne
    alın. Sıralamayı doğrulamadan kaydetmeyin — bu sayfaya gelen okuyucuların
    çoğunun sorunu tam olarak budur.
  </p>

  <h3>4. Kaydedin ve Traffic Acquisition raporunda kontrol edin</h3>

  <p>
    Reports → Acquisition → Traffic acquisition yolunu açın, tablonun sol üstündeki
    boyut seçicisinden kendi kanal grubunuzu seçin. Veri birkaç saat içinde görünmeye
    başlar. Özel kanal grubu geçmiş veriye de uygulanır, yani dün kurduğunuz kanal
    geçen ayın oturumlarını da sınıflandırır — bu, birazdan bahsedeceğim yerleşik
    kanaldan farkı.
  </p>

  <p>
    İlk kontrolde kanal boşsa üç şeye bakın: kural sırası (3. adım), regex'in "Session
    source" boyutuna mı yoksa yanlışlıkla "Session medium"a mı bağlandığı, ve tarih
    aralığı. Üçü de doğruysa sorun sizde değil, hacimde olabilir; küçük sitelerde ilk
    hafta gerçekten sıfır oturum görülebilir.
  </p>


  <h2 id="yerlesik-kanal">Google'ın yerleşik AI Assistant kanalı yeterli mi?</h2>

  <p className="bolum-cevap">
    Google, Mayıs 2026'da GA4'ün varsayılan kanal grubuna yerleşik bir AI Assistant
    kanalı ekledi. Kurulum derdini ortadan kaldırıyor, ama iki sınırı var: geriye dönük
    çalışmıyor ve Perplexity gibi hacimli kaynakları kapsamıyor. Kısa cevap, kendi özel
    kanalınızı yine de kurun ve yerleşik olanı yalnızca çapraz kontrol için yanında
    çalıştırın.
    {/* kaynak: K171 */}
  </p>

  <p>
    Geriye dönük çalışmaması, kanalın devreye girdiği tarihten önceki oturumların eski
    sınıflandırmasıyla kalması demek. Yıl karşılaştırması yapacaksanız yerleşik kanal
    size kesintili bir seri verir. Özel kanal grubu ise geçmişe uygulandığı için tutarlı
    bir zaman serisi üretir — raporlama açısından tek başına yeterli bir gerekçe.
  </p>

  <p>
    Kapsam farkı daha can sıkıcı. Yerleşik kanalın hangi kaynakları içerdiği Google
    tarafında tanımlı ve siz göremiyorsunuz. İki kanalı bir süre yan yana çalıştırıp
    aradaki farkı izlemek en pratik yol: yerleşik kanal sizinkinden düşük çıkıyorsa
    fark, sizin regex'inizin fazladan yakaladığı kaynaklardır.
    {/* kaynak: K171 */}
  </p>


  <h2 id="regex-bakimi">Regex listesini ne zaman güncellemeli?</h2>

  <p className="bolum-cevap">
    Takvim tek başına yetmiyor. Ayda bir gözden geçirme makul bir taban, ama asıl
    güncellemeyi tetikleyen üç olay var: Referral raporunda tanımadığınız bir host,
    yeni bir asistanın piyasaya çıkması ve Direct kanalında açıklanamayan bir sıçrama.
    Bu üçünden biri olduğunda takvimi beklemeyin.
    {/* kaynak: K173 */}
  </p>

  <h3>Tetikleyici 1 — Referral'da tanımadığınız host</h3>
  <p>
    Ayda bir Traffic acquisition raporunu Session source boyutuyla açın, ilk 50 satırı
    tarayın. Tanımadığınız bir alan adı gördüğünüzde tarayıcıda açın: bir asistan
    arayüzüyse regex'e ekleyin. Bu beş dakikalık kontrol, listeyi canlı tutmanın en
    ucuz yolu.
  </p>

  <h3>Tetikleyici 2 — Yeni asistan lansmanı</h3>
  <p>
    Bu alan ayda birkaç kez yeni oyuncu görüyor.
    {/* kaynak: K173 */}
    Yeni bir arayüz duyulduğunda regex'e eklemek için trafik beklemeyin; kural önceden
    hazırsa ilk oturumdan itibaren doğru kanala düşer. Sonradan eklerseniz özel kanal
    grubu geçmişe de uygulanacağı için veri kurtarılır, ama aradaki dönemde yanlış
    okuma yaparsınız.
  </p>

  <h3>Tetikleyici 3 — Direct'te açıklanamayan sıçrama</h3>
  <p>
    Direct oturumlarında kampanyayla, basın çıkışıyla ya da e-posta göndermiyle
    açıklanamayan bir artış varsa, iniş sayfası kırılımına bakın. Artış blog ve rehber
    sayfalarında yoğunlaşıyorsa yönlendiren bilgisi taşımayan asistan trafiği ihtimali
    yükselir. Regex bunu çözmez ama sunucu logu tarafında bakmanız gereken tarihi verir.
  </p>


  <h2 id="looker-studio">Looker Studio'da dört kartlık yapay zeka panosu</h2>

  <p className="bolum-cevap">
    GA4 arayüzü raporlama için hantal: kanal grubu seçimi her oturumda sıfırlanır,
    karşılaştırma kurmak zahmetlidir. Kanalı kurduktan sonra bir sonraki adım, aynı
    veriyi dört kartlık sabit bir Looker Studio sayfasına taşımak. Amaç güzel bir
    dashboard değil, her ay aynı yerden okunan dört sayı.
  </p>

  <p>
    Veri kaynağı olarak GA4 mülkünüzü doğrudan bağlayın; ara katman ya da harmanlanmış
    (blended) kaynak kurmayın. Sayfa düzeyinde tek bir filtre tanımlayın ve bunu kanal
    grubu yerine <em>Session source</em> boyutuna kurulmuş bir regex koşulu olarak yazın.
    Gerekçesi pratik: kanal grubu tanımını GA4 tarafında değiştirdiğinizde ya da başka
    biri sırayı bozduğunda pano sessizce boşalır. Regex filtresi panonun içinde durur,
    kimseye bağımlı olmaz. Aynı deseni iki yerde tutmanın maliyeti, panonun bir gün
    haber vermeden yalan söylemesinden ucuz.
  </p>

  <h3>Kart 1 — Yapay zeka oturum sayısı</h3>
  <p>
    Scorecard bileşeni, metrik olarak Sessions, karşılaştırma dönemi açık (önceki dönem
    ya da geçen yıl). Yanına ikinci bir scorecard koyup toplam oturuma oranını gösterin:
    çoğu sitede bu oran %1'in altında başlar ve mutlak sayıdan daha anlamlı bir trend verir.
  </p>

  <h3>Kart 2 — Kaynak kırılımı</h3>
  <p>
    Tablo bileşeni, boyut Session source, metrikler Sessions ve Engaged sessions.
    Pasta grafiği kullanmayın; kaynak sayısı arttıkça okunmaz hâle gelir. Bu kart,
    ChatGPT'yi Perplexity'den ayırmanızı sağlayan yerdir — ikisini tek "AI trafiği"
    kutusunda toplamak analizi köreltir.
    {/* kaynak: K172 */}
  </p>

  <h3>Kart 3 — Dönüşüm karşılaştırması</h3>
  <p>
    Yatay çubuk grafik, boyut olarak kanal grubu, metrik olarak anahtar olay oranı
    (key event rate). Yapay zeka kanalını Organic Search ve Direct ile yan yana koyun.
    Tek uyarı: oturum sayısı üç haneye çıkmadan bu karta bakıp karar vermeyin, payda
    küçükken oran zıplar. Karta bir de Sessions sütunu ekleyip paydanın görünmesini
    sağlayın.
  </p>

  <h3>Kart 4 — Trend</h3>
  <p>
    Zaman serisi, haftalık toplulaştırma. Günlük kırılım bu hacimde yalnızca gürültü
    üretir. Seriye ikinci bir çizgi olarak marka aramalarını eklerseniz — Search Console
    kaynağından — panonun anlatı gücü ciddi biçimde artar; asistanlarda görünürlük
    çoğu zaman önce marka aramasına yansır.
    {/* kaynak: K172 */}
  </p>

  <p>
    Panoyu ayda bir açıp bakılacak bir şey olarak kurun. Haftalık kontrol, bu hacimde
    yanlış alarm üretmekten başka işe yaramıyor. Ölçüm çerçevesinin tamamını —
    hangi metrik hangi kadansta, hangi karara bağlanır —
    <Link href="/geo/geo-kpi-olcumu">GEO KPI ölçümü</Link> sayfasında ele aldım.
  </p>


  <h2 id="gormedikleri">GA4'ün göremedikleri: tıklanmayan görünürlük</h2>

  <p className="bolum-cevap">
    GA4 yalnızca sitenize ulaşan insan ziyaretçiyi ölçer. Perplexity'de kaynak
    gösterilmelerin yalnızca %12-18'i gerçek bir tıklamayla sonuçlanıyor; geri kalan
    %82-88 GA4'te sıfır olarak görünür. Panonuzdaki oturum sayısı yapay zeka
    görünürlüğünüzün küçük ve değişken bir kesiti, tamamı değil. Kanalın düşük çıkması
    tek başına görünmediğiniz anlamına gelmez.
    {/* kaynak: K171 */}
  </p>

  <p>
    Bu boşluğu tek araçla kapatmak mümkün değil. Üç katmanlı bir ölçüm kurmak gerekiyor:
    GA4 özel kanal grubu tıklayan insanı yakalar, sunucu logları botların çekimini
    gösterir, elle yapılan bir GEO denetimi ise markanızın hangi sorgularda kaynak
    gösterildiğini ortaya koyar.
    {/* kaynak: K171 */}
    Üçü ayrı soruya cevap verir ve birbirinin yerine geçmez.
  </p>

  <h3>Beklenti yönetimi: ilk yıl neye benzer?</h3>
  <p>
    KOBİ ölçeğinde ilk ayda 0-20 oturum normal; on ikinci ayda 1.000-3.000 bandına
    ulaşmak mümkün.
    {/* kaynak: K172 */}
    Bu aralık geniş ve tek bir sağlayıcının gözlemine dayanıyor, dolayısıyla taahhüt
    değil sıra fikri olarak kullanın. Daha kullanışlı bir gösterge şu: marka
    aramalarındaki artış, yapay zeka yönlendirme trafiğinin 5-8 katı oluyor.
    {/* kaynak: K172 */}
    Yani asistanlarda görünür olmanın asıl karşılığı GA4'ün yapay zeka kanalında değil,
    Search Console'daki marka sorgularında ve Direct'in bir kısmında birikiyor.
  </p>


  <h2 id="sunucu-logu">Sunucu logu tarafı: botları kim, ne zaman çekiyor?</h2>

  <p className="bolum-cevap">
    Yapay zeka botları JavaScript çalıştırmadığı için GA4 etiketini tetiklemez; bu
    etkinliğin tek kaydı sunucu erişim logudur. Log okuması size iki şey verir:
    içeriğinizin hangi sıklıkla çekildiği ve bir kullanıcının sohbet sırasında hangi
    sayfanızı canlı olarak getirttiği. İkincisi, tıklama olmadan da görünür olduğunuzun
    en somut kanıtı.
    {/* kaynak: K171 */}
  </p>

  <h3>Hangi user-agent'lar aranır?</h3>
  <p>
    Üç kategoriye ayırmak analizi kolaylaştırır. <strong>Eğitim ve genel tarama:</strong>
    GPTBot, ClaudeBot, Google-Extended, CCBot, meta-externalagent, Bytespider.
    <strong>Canlı çekim</strong> — kullanıcı o an sohbet ederken tetiklenenler:
    ChatGPT-User, Perplexity-User, Claude-User. <strong>Arama indeksi:</strong>
    OAI-SearchBot, PerplexityBot, Applebot. İkinci kategori en değerlisi, çünkü her
    satırı bir kullanıcı etkileşimine karşılık gelir.
    {/* kaynak: K171 */}
  </p>

  <p>
    Ayrıştırma için tek satırlık bir filtre yeterli:
  </p>

<pre><code>grep -Ei "GPTBot|OAI-SearchBot|ChatGPT-User|PerplexityBot|Perplexity-User|ClaudeBot|Claude-User|Google-Extended|Applebot|CCBot|Bytespider|meta-externalagent" access.log</code></pre>

  <p>
    Çıktıyı tarih, user-agent ve istenen URL'e göre saymak işin geri kalanı. Yüz binlerce
    satırlık loglarda <code>awk</code> ile günlük sayım almak, GoAccess ile hızlı bir
    HTML özet üretmek ya da Screaming Frog Log File Analyser'a yüklemek pratik. Log
    hacmi aylık milyonlara çıkıyorsa BigQuery'ye aktarıp sorgulamak daha rahat.
    Yöntem tarafının ayrıntısı <Link href="/seo/log-analizi">log analizi</Link> sayfasında.
  </p>

  <h3>Log'a erişemiyorsanız</h3>
  <p>
    Paylaşımlı hosting ya da yönetilen bir platform kullanıyorsanız ham log çoğu zaman
    elinizde olmaz. Cloudflare gibi CDN ve WAF katmanlarının bot raporları bu durumda
    makul bir ikame: doğrulanmış bot trafiğini user-agent bazında listelerler.
    {/* kaynak: K173 */}
    Kırılım ham log kadar ayrıntılı olmaz, ama "GPTBot bu ay siteme geldi mi" sorusuna
    cevap verir.
  </p>

  <h3>Doğrulama adımını atlamayın</h3>
  <p>
    User-agent başlığı taklit edilebilir; kendini GPTBot ilan eden her istek OpenAI'dan
    gelmiyor. Sayıları rapora koymadan önce IP'leri ters DNS ile ya da sağlayıcıların
    yayımladığı IP aralığı listeleriyle doğrulayın. Doğrulanmamış trafiği ayrı bir
    satırda tutmak, hem raporun dürüstlüğü hem de kötü niyetli tarama tespiti için işe yarar.
  </p>

  <h3>Ne sıklıkla bakmalı?</h3>
  <p>
    Canlı çekim user-agent'ları için haftalık, eğitim tarayıcıları için aylık bir
    kontrol yeterli. Bunun dışında iki durumda hemen bakın: büyük bir içerik yayınının
    ardından (çekilip çekilmediğini görmek için) ve robots.txt ya da WAF kuralı
    değiştikten sonra. İkincisi kritik — botlara 403 dönmeye başladığınızı çoğu site
    aylar sonra fark ediyor. Hangi botu neye izin vereceğiniz ayrı bir karar;
    <Link href="/geo/ai-botlari-robots-txt">yapay zeka botları ve
    robots.txt</Link> sayfasında ele alıyorum.
  </p>


  <h2 id="turkiye">Türkiye'de durum: GA4, KVKK ve şişmiş Direct</h2>

  <p className="bolum-cevap">
    Türkiye'de kurumsal ölçekten KOBİ'ye kadar analitik tarafı neredeyse tamamen GA4'e
    taşınmış durumda; Universal Analytics'in kapanması alternatif bırakmadı. Bu, buradaki
    kurulumun Türk siteleri için doğrudan uygulanabilir olduğu anlamına geliyor. İki
    yerel özgüllük var: KVKK'nın izin rejimi ve Direct kanalının yapısal olarak şişkin olması.
  </p>

  <p>
    KVKK açısından yönlendiren bilgisi tek başına özel nitelikli veri değil; bir HTTP
    başlığı, tarayıcının gönderdiği teknik bir alan. Ancak GA4 bu bilgiyi çerez kimliği
    ve IP ile birlikte işlediği için toplamda kişisel veri işleme sayılır. Pratik sonuç:
    yapay zeka kanalı kurmak ek bir hukuki yükümlülük doğurmaz, mevcut aydınlatma metniniz
    ve çerez izin altyapınız neyi kapsıyorsa bu da onun içindedir. Yeni bir boyut
    toplamıyorsunuz, var olan boyutu farklı gruplandırıyorsunuz.
  </p>

  <p>
    İzin tarafının ölçüme etkisi ise gerçek. Çerez izni reddedildiğinde GA4 oturumu ya
    hiç görmez ya da modellenmiş veriye düşürür. Türkiye'de izin bannerlarının "reddet"
    seçeneğini görünür biçimde sunması yaygınlaştıkça, düşük hacimli yapay zeka kanalının
    daha da eksik ölçülmesi bekleniyor. Bu, sunucu logu katmanını Türkiye'de daha kıymetli
    kılan bir neden: log, izin durumundan bağımsız kayıt tutar.
  </p>

  <p>
    Direct şişmesi ise Türkiye'de yapay zekadan bağımsız olarak zaten yüksek. Trafiğin
    büyük bölümü WhatsApp ve Instagram'ın uygulama içi tarayıcılarından geliyor ve bu
    tarayıcılar yönlendiren bilgisini çoğu senaryoda iletmiyor. Üstüne UTM etiketi
    taşımayan e-bülten gönderimleri, kısaltılmış linkler ve basılı mecradaki QR kodları
    ekleniyor. Bu yüzden Direct'teki her artışı yapay zekaya yormak burada özellikle
    riskli bir okuma; Direct'in büyük bölümü hâlâ yer imleri, uygulama içi tarayıcılar
    ve doğrudan URL yazımından geliyor.
    {/* kaynak: K173 */}
  </p>

  <p>
    Ayırt etmenin en pratik yolu iniş sayfası kırılımı. Uygulama içi tarayıcı trafiği
    kampanya ve ürün sayfalarında yoğunlaşır; asistan trafiği rehber, karşılaştırma ve
    tanım içeren sayfalara düşer. İkisinin şekli farklı, ve bu fark GA4'te ücretsiz
    olarak görünür.
  </p>

  <p className="sayfa-cta">
    Kanalı kurmak ölçümün ilk adımı; asıl soru asistanların markanızı hangi sorgularda
    kaynak gösterdiği. Bu tarafı baştan sona ele almak isterseniz
    <Link href="/geo">GEO danışmanlığı sayfasına</Link> göz atın.
  </p>


  <h2 id="sss">Sıkça Sorulan Sorular</h2>

  <h3>Yapay zeka trafiğimin bir kısmı neden Direct'e düşüyor?</h3>
  <p>
    Yönlendiren bilgisi boş geldiğinde GA4 o oturumu Direct'e atar. Mobil ChatGPT
    uygulamasından gelen ziyaretlerde bu bilgi hiç iletilmez.
    {/* kaynak: K173 */}
    Yapay zeka oturumlarının üçte birinden fazlası bu nedenle Direct olarak kaydediliyor.
    {/* kaynak: K171 */}
    Buradan "Direct'im aslında yapay zeka" sonucunu çıkarmayın; Direct'in büyük bölümü
    hâlâ yer imleri, uygulama içi tarayıcılar ve URL yazımından geliyor.
    {/* kaynak: K173 */}
  </p>

  <h3>UTM parametresi eklemeli miyim?</h3>
  <p>
    Kontrol edebildiğiniz linklere ekleyebilirsiniz, ama bel bağlamayın. ChatGPT
    cevabındaki UTM'li bağlantılar bazen korunuyor, bazen siliniyor.
    {/* kaynak: K172 */}
  </p>

  <h3>ChatGPT ve Perplexity'yi ayrı mı takip etmeliyim?</h3>
  <p>
    Evet. İki kaynak farklı davranıyor ve farklı hacimde geliyor; hepsini tek "yapay zeka
    trafiği" kategorisinde toplamak analizi köreltir.
    {/* kaynak: K172 */}
    Kanal tek kalabilir, ama raporda mutlaka Session source kırılımını da gösterin.
  </p>

  <h3>AI Bakışı trafiğini nasıl görürüm?</h3>
  <p>
    Şu an GA4'te ayrı etiketlenmiş olarak göremezsiniz. AI Bakışı ve AI Modu'ndan gelen
    tıklamalar normal Google organik trafiğine karışıyor.
    {/* kaynak: K171 */}
    En pratik geçici çözüm Search Console verileriyle çapraz kontrol: gösterim artarken
    tıklamanın yerinde saydığı sorgular bu yüzeyin izidir.
    {/* kaynak: K172 */}
    Yüzeyin nasıl çalıştığını <Link href="/geo/ai-overviews-nedir">AI Bakışı</Link> ve
    <Link href="/geo/google-ai-modu">AI Modu</Link> sayfalarında anlattım.
  </p>

  <h3>Regex listemi ne sıklıkla güncellemeliyim?</h3>
  <p>
    Ayda en az bir kez, artı üç tetikleyiciden biri gerçekleştiğinde hemen: Referral'da
    tanımadığınız bir host, yeni bir asistanın çıkması, Direct'te açıklanamayan sıçrama.
    Bu alan ayda birkaç kez yeni oyuncu görüyor.
    {/* kaynak: K173 */}
  </p>

  <h3>Kanalı kurdum ama oturum sayısı sıfır. Ne yaptım yanlış?</h3>
  <p>
    Neredeyse her zaman kural sırası. AI kuralı Referral'ın altındaysa oturumlar orada
    yakalanır ve kanalınıza hiç ulaşmaz.
    {/* kaynak: K160 */}
    Sıra doğruysa regex'i "Session medium" yerine "Session source" boyutuna bağladığınızı
    doğrulayın, sonra tarih aralığını genişletin.
  </p>

  <h3>Looker Studio panosunu kanal grubuna mı bağlamalıyım?</h3>
  <p>
    Session source üzerinde regex filtresi kurmayı tercih edin. Kanal grubu tanımı GA4
    tarafında değişebilir ya da başka biri kural sırasını bozabilir; pano bunu size haber
    vermeden boşalır. Regex filtresi panonun içinde durur ve dışarıdaki değişikliklerden
    etkilenmez.
  </p>

  <h3>Sunucu loguna erişimim yok, ne yapabilirim?</h3>
  <p>
    Cloudflare gibi bir CDN ya da WAF kullanıyorsanız oradaki bot raporları doğrulanmış
    bot trafiğini user-agent bazında gösterir.
    {/* kaynak: K173 */}
    Kırılım ham log kadar ayrıntılı olmaz ama hangi botun geldiğini ve engellenip
    engellenmediğini görürsünüz. Hosting sağlayıcınızdan aylık ham log talep etmek de
    çoğu zaman mümkün.
  </p>

  <h3>Yapay zeka trafiği KVKK açısından ek bir yükümlülük doğurur mu?</h3>
  <p>
    Hayır. Yeni bir veri toplamıyorsunuz; GA4'ün zaten işlediği oturum kaynağı boyutunu
    farklı gruplandırıyorsunuz. Mevcut aydınlatma metniniz ve çerez izin altyapınız
    geçerliyse ek bir adım gerekmez. İzin reddedildiğinde ölçümün eksileceğini hesaba
    katın.
  </p>
                </div>
            </article>
        </div>
    );
}
