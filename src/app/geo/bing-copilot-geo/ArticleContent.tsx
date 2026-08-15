/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

const headings = [
    {
        "id": "mekanizma",
        "text": "Copilot yanıtını Bing indeksinden nasıl kuruyor"
    },
    {
        "id": "yuzeyler",
        "text": "Hangi Copilot web'e bakıyor, hangisi bakmıyor"
    },
    {
        "id": "bing-google-farki",
        "text": "Bing'de neden daha az sayfanız indeksli"
    },
    {
        "id": "kontrol-listesi",
        "text": "Bing indekslemenizi ölçün ve düzeltin"
    },
    {
        "id": "indexnow",
        "text": "IndexNow: yeni sayfayı beklemeden bildirmek"
    },
    {
        "id": "bwt-raporlari",
        "text": "Bing Webmaster Tools'da hangi raporu okumalı"
    },
    {
        "id": "b2b",
        "text": "B2B'nin en güçlü argümanı: karar verici zaten Copilot'un içinde"
    },
    {
        "id": "turkiye",
        "text": "Türkiye katmanı: Bing'in payı düşük, Copilot'un durumu ayrı"
    },
    {
        "id": "chatgpt",
        "text": "Bir çalışma, iki platform"
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
    Microsoft Copilot, web'e baktığı her yanıtta Bing indeksine başvurur. Bing'de
    indekslenmemiş bir sayfa Copilot tarafından alıntılanamaz — arada başka bir yol yok.
    Bu yüzden Copilot görünürlüğü içerik işi olmadan önce indeksleme işidir: Bingbot'un
    girebildiği, Bing Webmaster Tools'a tanıtılmış ve site haritası kabul edilmiş bir site
    olmadan geri kalan her çalışma boşa gider.
  </p>
                <aside className="tldr mb-12 p-6 md:p-8 bg-violet-50/50 border border-violet-100/80 rounded-3xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-violet-600 text-white text-xs font-black uppercase tracking-widest rounded-full">TL;DR</span>
                        <span className="tldr-baslik text-sm font-bold text-violet-800">Kısaca</span>
                    </div>
                    <p className="text-gray-800 font-bold text-[15px] leading-relaxed mb-4"><strong>Copilot'ta görünmenin ön koşulu Bing indeksinde olmak; Bing'de olmanın ön koşulu da Bing'e ayrıca çalışmak, çünkü Google'daki durumunuz oraya taşınmıyor.</strong></p>
                    <ul className="space-y-3.5 text-gray-700 text-[15px] leading-relaxed list-none pl-0 my-0"><li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Copilot'un her yüzeyi web'e bakmıyor. Hedefiniz web erişimli Copilot ve Microsoft 365 içinde web temellendirmesi açık olan kurulumlar.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Bing'de indekslenen sayfa sayınız Google'dakinden düşükse sorun genellikle içerikte değil; tarama bütçesi, gönderilmemiş site haritası ve çelişkili canonical sinyallerinde.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>IndexNow, yeni ve güncellenen sayfaları beklemeden bildirmenin en kısa yolu. Cloudflare, Yoast ve Rank Math tarafında hazır entegrasyon var.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Aynı çalışma ChatGPT'yi de kazandırıyor: ChatGPT'nin web araması büyük ölçüde Bing indeksinden besleniyor.</span></li></ul>
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
                    {/* kaynak: K177 */}

  

  <h2 id="mekanizma">Copilot yanıtını Bing indeksinden nasıl kuruyor</h2>

  <p className="bolum-cevap">
    Copilot, kullanıcının cümlesini önce bir ya da birkaç arama sorgusuna çeviriyor. Bing bu
    sorgulara karşılık sıralanmış sonuçları, her sayfadan çekilmiş metin parçacıklarıyla
    birlikte döndürüyor. Model yanıtı bu parçacıklardan yazıyor ve kullandıklarını bağlantıyla
    gösteriyor. Yani modelin gördüğü şey sayfanızın tamamı değil, sayfanızdan kopmuş birkaç
    yüz karakterlik bir parça — ve o parçanın tek başına anlaşılır olması gerekiyor.
  </p>
  {/* kaynak: K177 */}

  <p>
    Bu ayrım pratikte çok şey değiştiriyor. Bing'de ilk sırada olmanız parçacığınızın seçileceği
    anlamına gelmiyor. Seçilme kriteri farklı: paragrafın hemen başında doğrudan yanıt veren,
    içinde tutulabilir bir veri ya da tanım taşıyan, hangi başlığın altında durduğu belli olan ve
    kullanıcının sorusuyla anlamca örtüşen metinler öne çıkıyor. Üçüncü sıradaki net bir paragraf,
    birinci sıradaki dolambaçlı bir girişten daha sık alıntılanıyor.
  </p>
  {/* kaynak: K177 */}

  <p>
    Buradan çıkan iş şu: sayfayı, her başlık altındaki ilk paragraf tek başına ayakta duracak
    biçimde yazmak. Bir bölümü bağlamından koparıp Copilot'un yanıtına yapıştırdığınızda anlamlı
    kalıyorsa doğru yazılmış demektir. Bu yaklaşımın ayrıntısı
    <Link href="/geo/icerik-chunking">içerik chunking</Link> sayfasında;
    tüm yüzeyler için ortak çerçeveyi <Link href="/geo">GEO danışmanlığı</Link> sayfasında topladım.
  </p>

  <h2 id="yuzeyler">Hangi Copilot web'e bakıyor, hangisi bakmıyor</h2>

  <p className="bolum-cevap">
    "Copilot" tek bir ürün değil, aynı markayı taşıyan birkaç ayrı yüzey. Bazıları yanıtı web'den
    temellendiriyor, bazıları yalnızca kurum içi veriye ya da o an açık olan dosyaya bakıyor. GEO
    çalışmanız sadece web'e bakan yüzeylerde karşılık buluyor. Bu ayrımı atlayan ekipler, hiç web'e
    bakmayan bir arayüzde markalarını aratıp "Copilot bizi tanımıyor" sonucuna varıyor; ölçüm
    baştan yanlış yerde yapılıyor.
  </p>

  <h3>Web Copilot</h3>
  <p>
    Tarayıcıdan ya da mobil uygulamadan kullanılan, herkese açık sürüm. Asıl hedef bu: sorguyu
    Bing'e taşıyan, dönen parçacıklardan yanıt kuran ve kaynak bağlantısı gösteren yüzey burası.
    Bir sayfanın Copilot'ta alıntılanıp alıntılanmadığını test edeceğiniz yer de burası.
  </p>
  {/* kaynak: K177 */}

  <h3>Microsoft 365 içindeki Copilot</h3>
  <p>
    Word, Outlook, Teams ve Excel içinde çalışan sürüm. Varsayılan bilgi kaynağı kurumun kendi
    verisi: e-postalar, dosyalar, toplantı kayıtları, sohbet geçmişi. Buna ek olarak web
    temellendirmesi devreye girebiliyor ve o an arkada yine Bing var. Kritik nokta, bu web
    erişiminin kurum yöneticisi tarafından kapatılabilmesi. Yani aynı şirketin iki farklı
    departmanında Copilot'un web'e bakma davranışı farklı olabilir. Sizin tarafınızdan bakınca
    sonuç değişmiyor: web erişimi açık olan her kurumda, indekslenmiş sayfanız Word'ün içindeki
    bir taslağa kaynak olabiliyor.
  </p>

  <h3>Windows Copilot ve Edge kenar çubuğu</h3>
  <p>
    Windows'un içine gömülü Copilot, web sorularında büyük ölçüde web Copilot deneyimini taşıyor;
    ayrıca sistem ayarı değiştirme gibi işletim sistemi işleri yapıyor. Edge'in kenar çubuğundaki
    Copilot'un ise ayrı bir davranışı var: kullanıcının o an açık olan sayfasını okuyabiliyor.
    Burada "indekslenmiş olmak" değil, "sayfanın metninin tarayıcıda gerçekten var olması"
    belirleyici. İçeriğini yalnızca istemci tarafında üreten sayfalar bu noktada da kaybediyor —
    <Link href="/geo/javascript-ssr-ai-botlari">JavaScript, SSR ve AI botları</Link>
    sayfasındaki mesele aynı mesele.
  </p>

  <h3>GitHub Copilot</h3>
  <p>
    Kod tamamlama ürünü. Pazarlama içeriğinizle ilgisi yok, karışıklığı önlemek için yazıyorum.
  </p>

  <h2 id="bing-google-farki">Bing'de neden daha az sayfanız indeksli</h2>

  <p className="bolum-cevap">
    Google'da binlerce sayfası indeksli olan bir sitenin Bing'de bunun küçük bir bölümüyle
    görünmesi olağan dışı değil. Sebep çoğu zaman içeriğin kötü olması değil, iki motorun keşif ve
    seçim mantığının farklı olması. Bing daha az tarıyor, site sahibinin bildirimine daha çok
    güveniyor ve çelişkili sinyal gördüğünde URL'yi kendi kararıyla düzeltmek yerine listeden
    düşürüyor. Dört tipik sebep var.
  </p>
  {/* kaynak: K177 */}

  <h3>Tarama bütçesi ve keşif</h3>
  <p>
    Bingbot, aynı site üzerinde Googlebot kadar agresif gezmiyor. Google iç linkler ve dış
    bağlantılar üzerinden keşfi kendi başına yürütürken, Bing site sahibinin bildirimini bir
    girdi olarak ciddiye alıyor. Site haritası göndermeyen, Bing Webmaster Tools'a hiç kayıt
    olmamış bir sitede derin sayfalar basitçe keşfedilmemiş kalıyor.
  </p>

  <h3>Site haritası ihmali</h3>
  <p>
    Çoğu ekipte XML site haritası Google Search Console'a gönderiliyor ve iş bitmiş sayılıyor.
    Bing tarafında aynı dosya hiç tanıtılmadığı için motor, sitenin tam listesini hiçbir zaman
    görmüyor. Haritanın kendisi bozuksa — 404 veren, yönlendirilen ya da noindex URL'lerle dolu —
    Bing haritanın tümüne olan güvenini düşürüyor.
  </p>

  <h3>Canonical yorumu</h3>
  <p>
    Google, çelişkili canonical sinyallerini kendi kararıyla düzeltmeye çalışıyor. Bing daha
    literal davranıyor: sayfa kendini A'ya işaret ediyor ama site haritasında B duruyorsa,
    iç linkler C'ye gidiyorsa, motor genellikle bu URL kümesinden birini indeksleyip diğerlerini
    tamamen dışarıda bırakıyor. Parametreli URL'ler, dil sürümleri ve baskı görünümleri en sık
    kaybedilen gruplar. Canonical, site haritası ve iç link üçlüsünün aynı URL'yi göstermesi
    Bing'de Google'dakinden daha çok işe yarıyor.
  </p>

  <h3>Kalite eşiği</h3>
  <p>
    Bing, indekse aldığı sayfa sayısını bilinçli olarak sınırlıyor ve ince içeriği daha erken
    eliyor. Etiket arşivleri, sayfalanmış listelerin onuncu sayfası, tek paragraflık ürün
    varyantları ve şablondan üretilmiş şehir sayfaları Google'da "indekslendi ama sıralanmıyor"
    durumunda kalırken Bing'de doğrudan indeks dışında kalabiliyor. Sitenizin Bing'deki ayak izini
    büyütmenin en hızlı yolu genellikle yeni sayfa yazmak değil, zayıf sayfa kümelerini
    birleştirip azaltmak.
  </p>

  <h3>Render sınırı</h3>
  <p>
    Bing JavaScript çalıştırabiliyor, ama bunu her sayfa için ve her zaman yapmıyor. İçeriğin
    kritik kısmı istemci tarafında yükleniyorsa sayfanın Bing'in gördüğü hâli boş bir kabuk
    olabiliyor. Sunucu tarafı render ya da ön render, Bing'de Google'dakinden daha belirleyici bir
    fark yaratıyor. Bunun teknik zeminini
    <Link href="/seo/teknik-seo">teknik SEO</Link> tarafında ayrıca ele aldım.
  </p>

  <h2 id="kontrol-listesi">Bing indekslemenizi ölçün ve düzeltin</h2>

  <p className="bolum-cevap">
    Sıralama iyileştirmesine geçmeden önce yapılacak dört iş var ve hepsi bir öğleden sonrada
    tamamlanabilir. Amaç, Copilot'un sizi bulabileceği asgari zemini kurmak: kaç sayfanızın
    indekste olduğunu bilmek, botları kazara engellemediğinizden emin olmak, siteyi Bing'e
    tanıtmak ve yeni içeriği tarayıcının uğramasını beklemeden bildirmek. Bu dördü tamamlanmadan
    yapılan içerik çalışması ölçülemez hâlde kalıyor.
  </p>

  <h3>İndeks durumunu ölçün</h3>
  <p>
    <code>bing.com</code> arama çubuğuna <code>site:alanadiniz.com</code> yazın. Dönen sonuç sayısı
    yaklaşık bir değerdir, ama Google'daki karşılığıyla yan yana koyduğunuzda aradaki uçurumu
    görürsünüz. Önemli alt dizinler için ayrı ayrı çalıştırın: <code>site:alanadiniz.com/blog</code>
    ve <code>site:alanadiniz.com/hizmetler</code> gibi. Kaybın nerede yoğunlaştığını bu şekilde
    daraltırsınız.
  </p>
  {/* kaynak: K177 */}

  <h3>robots.txt'i denetleyin</h3>
  <p>
    Bingbot, Bing'in ana indeksleme ajanı. BingPreview sayfa önizlemelerini çekiyor; msnbot ise
    eski bir Microsoft ajanı olmasına rağmen bazı bağlamlarda hâlâ karşınıza çıkıyor. Üçünün de
    robots.txt'inizde engellenmediğini doğrulayın; kalıntı bir <code>Disallow</code> satırı
    varsa kaldırın. Ajan bazlı kuralların tam listesi ve hangi botun neyi yaptığı
    <Link href="/geo/ai-botlari-robots-txt">yapay zeka botları ve robots.txt</Link>
    sayfasında.
  </p>
  {/* kaynak: K177 */}

  <h3>Bing Webmaster Tools'a kaydolun ve site haritasını gönderin</h3>
  <p>
    Panele hiç kaydolmamış bir site Copilot açısından karanlıkta duruyor. Kayıt sırasında Search
    Console'dan içe aktarma seçeneği var; doğrulama ve site haritası bu yolla dakikalar içinde
    tamamlanıyor. Haritayı gönderdikten sonra kabul edilen ve reddedilen URL sayılarını
    karşılaştırın — aradaki fark, düzeltmeniz gereken listeyi doğrudan veriyor.
  </p>
  {/* kaynak: K177 */}

  <h3>Dört adımdan sonra</h3>
  <p>
    <code>site:</code> sorgusunu birkaç hafta arayla tekrarlayın. Sayı hareket etmiyorsa sorun
    keşifte değil, kalite eşiğinde ya da canonical çelişkisindedir; yukarıdaki başlıklara geri
    dönün.
  </p>
  {/* kaynak: K177 */}

  <h2 id="indexnow">IndexNow: yeni sayfayı beklemeden bildirmek</h2>

  <p className="bolum-cevap">
    IndexNow, bir URL yayımlandığında, güncellendiğinde veya silindiğinde arama motorlarına anında
    haber veren açık bir protokol. Botun sitenize kendiliğinden uğramasını beklemek yerine
    değişikliği siz bildiriyorsunuz. Bing, protokolü destekleyen motorların başında geliyor; aynı
    bildirim Yandex, Seznam ve Naver tarafında da karşılık buluyor. Tek gönderim birden fazla
    motoru besliyor.
  </p>

  <h3>Nasıl çalışıyor</h3>
  <p>
    Üç parça var. Bir anahtar üretiyorsunuz. Anahtarın aynısını içeren düz metin dosyasını sitenizin
    kök dizinine koyuyorsunuz — <code>https://alanadiniz.com/&lt;anahtar&gt;.txt</code> gibi. Sonra
    değişen URL'yi protokolün uç noktasına gönderiyorsunuz. Motor bildirimi alınca kök dizindeki
    dosyaya bakıp anahtarı doğruluyor; doğrulama tutmazsa bildirim yok sayılıyor. Bu, herhangi
    birinin sizin alan adınız için sahte bildirim göndermesini engelleyen basit ve etkili bir kilit.
  </p>

  <p>
    Tek URL için basit bir GET isteği yeterli. Toplu gönderimde ise anahtar, ana bilgisayar adı ve
    URL listesini taşıyan bir JSON gövdesi POST ediliyor. Yanıt kodu bildirimin kabul edilip
    edilmediğini söylüyor; anahtar doğrulanamadığında ya da URL'ler beyan edilen alan adına ait
    olmadığında hata dönüyor.
  </p>

  <h3>Anahtarı nereden alırsınız</h3>
  <p>
    En pratik yol Bing Webmaster Tools'un IndexNow bölümünden anahtar üretmek; panel anahtarı ve
    barındırmanız gereken dosyayı birlikte veriyor. Anahtarı kendiniz de üretebilirsiniz — protokol
    belirli uzunluk aralığında rastgele bir karakter dizisi istiyor, sihirli bir tarafı yok. Panelden
    üretmenin avantajı, gönderimlerin aynı panelde raporlanması.
  </p>

  <h3>Hazır entegrasyon gelen katmanlar</h3>
  <p>
    Kod yazmadan çözülebilecek bir iş. Cloudflare kullanıyorsanız IndexNow entegrasyonu bir ayar
    düğmesi; önbellek katmanı içeriğin değiştiğini zaten gördüğü için bildirimi kendisi
    gönderiyor. WordPress tarafında Yoast SEO ve Rank Math kendi IndexNow modülleriyle geliyor;
    yayımla düğmesine bastığınız anda bildirim gidiyor. Bazı site kurucuları ve e-ticaret
    platformları da protokolü arka planda çalıştırıyor. Kendi altyapınızı yönetiyorsanız yayın
    akışınızın sonuna tek bir HTTP çağrısı eklemek yeterli.
  </p>

  <h3>Ne zaman işe yarar, ne zaman yaramaz</h3>
  <p>
    Kazanç, içeriğin tazeliğinin değer taşıdığı yerlerde birikiyor: sık güncellenen fiyat ve stok
    sayfaları, haber ve duyuru akışları, kampanya sayfaları, sürekli revize edilen dokümantasyon.
    Ayrıca silinen ya da yönlendirilen URL'lerin indeksten daha hızlı düşmesini sağlıyor.
  </p>
  <p>
    Yanılgı şurada: IndexNow indekslenmeyi garanti etmiyor. Yaptığı tek şey keşfi hızlandırmak.
    Motor sayfayı kalite eşiğinin altında görüyorsa bildirim de onu değiştirmiyor. Statik bir
    kurumsal sitede yılda üç sayfa değişiyorsa kurulumun getirisi de sembolik kalıyor. Her küçük
    düzenlemede yüzlerce URL püskürtmek ise faydasız — anlamlı değişikliği bildirin.
  </p>

  <h2 id="bwt-raporlari">Bing Webmaster Tools'da hangi raporu okumalı</h2>

  <p className="bolum-cevap">
    Panelde Copilot'a ayrılmış bağımsız bir atıf raporu bulunmuyor. Buna karşılık indekslemenin
    sağlığını gösteren raporlar doğrudan Copilot görünürlüğünün ön koşulunu ölçüyor: hangi
    sayfalarınız indekste, hangileri taranırken hata veriyor, hangi sorgularda gösteriliyorsunuz.
    Copilot'a hazır olup olmadığınızı bugün ancak bu dolaylı göstergelerle okuyabiliyorsunuz.
  </p>

  <h3>Site Explorer ve URL İnceleme</h3>
  <p>
    Site Explorer, dizin dizin ilerleyerek hangi bölümlerinizin indekste olduğunu gösteriyor.
    <code>site:</code> sorgusunun yaklaşık sayısı yerine sayfa bazında karar vermek isterseniz
    başlangıç noktası burası. Tek bir URL'nin durumunu, kanonik değerlendirmesini ve Bing'in
    gördüğü hâlini URL İnceleme aracından okuyorsunuz — istemci tarafı render sorunlarını en hızlı
    burada yakalarsınız.
  </p>

  <h3>Arama Performansı</h3>
  <p>
    Gösterim, tıklama ve sorgu kırılımı. Copilot atıflarını doğrudan saymıyor, ama Bing tarafındaki
    sorgu havuzunuzun genişleyip genişlemediğini gösteriyor. Copilot'un yanıt kurduğu sorgular ile
    bu listedeki soru biçimli sorgular arasında ciddi bir örtüşme var; hangi konularda parçacık
    verecek durumda olduğunuzu buradan okursunuz.
  </p>
  <p>
    Microsoft panele zaman zaman yeni kırılımlar ekliyor. Hesabınızda Copilot ya da yapay zeka
    etiketli bir bölüm görüyorsanız kullanın; görmüyorsanız yokluğu bir arıza değil.
  </p>

  <h3>Tarama bilgisi, site haritaları ve IndexNow</h3>
  <p>
    Tarama raporları Bingbot'un aldığı hata kodlarını listeliyor; site haritası ekranı gönderilen
    ve kabul edilen URL sayısını karşılaştırıyor; IndexNow ekranı gönderdiğiniz bildirimlerin
    durumunu gösteriyor. Bu üçü birlikte okunduğunda "sayfa neden indekste değil" sorusunun cevabı
    çoğu zaman kendiliğinden çıkıyor.
  </p>
  <p>
    Ölçümü Copilot ve diğer yüzeylerle birlikte kurmak isterseniz çerçeveyi
    <Link href="/geo/geo-kpi-olcumu">GEO KPI ölçümü</Link> sayfasına ayırdım.
  </p>

  <h2 id="b2b">B2B'nin en güçlü argümanı: karar verici zaten Copilot'un içinde</h2>

  <p className="bolum-cevap">
    Copilot'u diğer yapay zeka yüzeylerinden ayıran şey, kullanıcının ona gitmek zorunda olmaması.
    ChatGPT için bir sekme açmak gerekiyor; Microsoft 365 kullanan bir kurumda Copilot zaten
    Outlook'un, Teams'in ve Word'ün içinde duruyor. Hedef kitleniz tedarikçi kısa listesini bu
    uygulamaların içinde oluşturuyorsa, Copilot'ta görünmemek doğrudan erişim kaybı.
  </p>
  {/* kaynak: K177 */}

  <p>
    Senaryoyu somutlaştırayım. Bir satın alma sorumlusu Word'de karşılaştırma tablosu hazırlıyor ve
    Copilot'tan "şu kategoride Türkiye'de hizmet veren sağlayıcıları özetle" diyor. Ya da bir ekip
    lideri Teams'te aldığı teklifi değerlendirirken Copilot'a alternatif soruyor. Web erişimi açık
    bir kurulumda bu isteklerin arkasında Bing var. Kısa listeye girmeniz, bir arama sonuç
    sayfasında beşinci sırada bulunmanıza değil, o soruya karşılık gelen parçacığınızın indekste
    olmasına bağlı.
  </p>

  <p>
    Bu, tüketici tarafındaki yapay zeka trafiğinden farklı bir hikâye. Orada rekabet ettiğiniz şey
    dikkat. Burada rekabet ettiğiniz şey, henüz size ulaşmamış bir alıcının kendi çalışma
    ortamındaki varsayılan bilgi kaynağı. B2B'de değerlendirme aşaması sizinle
    temas kurulmadan yürüyor; ilk görüşmeye gelindiğinde kısa liste çoktan yazılmış oluyor ve
    Copilot bu aşamanın tam ortasına oturuyor.
  </p>

  <p>
    Pratik karşılığı: fiyatlandırma mantığı, entegrasyon listesi, uyum ve güvenlik başlıkları,
    hizmet kapsamı ve kim için uygun olmadığınız — bunların hepsi açık web'de, indekslenmiş ve
    doğrudan cevap veren sayfalarda durmalı. PDF'e gömülü, form arkasına kilitli ya da yalnızca
    satış görüşmesinde anlatılan bilgi Copilot'un yanıtına giremiyor.
    <Link href="/geo/b2b-saas-geo" data-pending="true">B2B SaaS için GEO</Link> sayfasında bu içerik
    setini ayrıntılandırdım; makine tarafında okunabilir hâle getirmek için
    <Link href="/geo/yapay-zeka-schema" data-pending="true">yapay zeka için schema</Link> tarafına da
    bakın.
  </p>
  {/* kaynak: K177 */}

  <h2 id="turkiye">Türkiye katmanı: Bing'in payı düşük, Copilot'un durumu ayrı</h2>

  <p className="bolum-cevap">
    Türkiye'de arama pazarı Google ağırlıklı ve Bing'in payı küçük. Buradan "o hâlde Bing'e
    çalışmaya değmez" sonucu çıkarılıyor, ama çıkarım hatalı: Copilot bing.com üzerinden
    tüketilmiyor. Windows'un içinden, Edge'in kenar çubuğundan ve Microsoft 365 uygulamalarından
    kullanılıyor. Arama motorunun pazar payı bu yüzeylerin kullanımını sınırlamıyor; iki ayrı
    dağıtım kanalından bahsediyoruz.
  </p>

  <p>
    Türkiye'de kurumsal tarafın Microsoft 365 ile çalışması yaygın bir durum. Bankacılıkta,
    holding yapılarında, sanayi ve kamuya iş yapan şirketlerde Outlook ve Teams standart araç.
    Bilgisayarlar Windows ile geliyor, kurumsal politikalarda Edge çoğu zaman varsayılan tarayıcı,
    yeni klavyelerde Copilot'a ayrılmış bir tuş bile var. Yani Bing'i hiç kullanmayan bir çalışan
    Copilot'u günde birkaç kez kullanabiliyor.
  </p>

  <p>
    Rakam vermiyorum çünkü Türkiye'ye özgü, yayımlanmış Copilot kullanım verisi yok. Muhakeme
    yeterince açık: pazar payının düşüklüğü tüketici tarafındaki arama davranışını anlatıyor,
    kurumsal masaüstündeki yapay zeka yüzeyini değil. Türkiye'de B2B satış yapan bir şirket için
    Bing indekslemesinin getirisi, Bing'in arama payına bakarak tahmin edilenden yüksek.
  </p>

  <h2 id="chatgpt">Bir çalışma, iki platform</h2>

  <p className="bolum-cevap">
    Bing indekslemesine harcadığınız emek yalnızca Copilot'a yazılmıyor. ChatGPT'nin web araması da
    büyük ölçüde Bing indeksinden besleniyor; iki ürün aynı keşif katmanını paylaşıyor. Bing'de
    görünür hâle gelen bir sayfa, birbirinden bağımsız iki yüzeyde birden alıntılanabilir konuma
    geliyor. Bütçe onayı isterken bu ikili getiriyi anlatmak, işi tek bir motorun pazar payı
    üzerinden savunmaktan kolay.
  </p>
  {/* kaynak: K177 */}

  <p>
    Tam eşitlik değil: OpenAI kendi tarayıcısını da işletiyor ve zamanla kendi keşif katmanını
    kalınlaştırıyor. Yine de bugün ChatGPT'nin canlı web yanıtlarının büyük bölümü Bing'in
    sıralamasından geçiyor. Bot bazlı ayrımların ve ChatGPT'ye özgü kaynak seçimi davranışının
    ayrıntısı <Link href="/geo/chatgpt-geo">ChatGPT GEO</Link> sayfasında.
  </p>

  <h2 id="sss">Sıkça Sorulan Sorular</h2>

  <h3>Google'da varım, Copilot'ta neden görünmüyorum?</h3>
  <p>
    Google sıralaması Bing indekslemesini garanti etmiyor. Bing'e ayrıca çalışılmamış şirketlerde
    indekslenen sayfa sayısı Google'daki karşılığının belirgin biçimde altında kalıyor. Copilot
    yalnızca Bing indeksindeki sayfalardan alıntı yaptığı için, indekste olmayan bir sayfanın
    Google'daki performansı burada hiçbir işe yaramıyor.
  </p>
  {/* kaynak: K177 */}

  <h3>ChatGPT de Bing mi kullanıyor?</h3>
  <p>
    Web taraması devredeyken evet, ChatGPT büyük ölçüde Bing indeksine dayanıyor ve Copilot ile
    aynı mekanizmayı paylaşıyor. OpenAI'ın kendi tarayıcı katmanı bunun üstüne ekleniyor, yerine
    geçmiyor.
  </p>
  {/* kaynak: K177 */}

  <h3>Copilot'ta alıntılanmayı nasıl ölçerim?</h3>
  <p>
    Copilot için bir analitik paneli yok. Şu an için en güvenilir dolaylı yöntem, Bing Webmaster
    Tools'daki gösterim ve tıklama verisini takip etmek; buna sunucu loglarında Bingbot
    hareketliliğini ve analitik tarafında Copilot yönlendirmelerini ekleyebilirsiniz. Bunların
    üstüne, kendi kategorinizde önem taşıyan soruları düzenli aralıklarla Copilot'a sorup
    yanıttaki kaynak listesini kaydetmek gerekiyor. Zahmetli ama gerçek durumu gösteren tek yöntem
    bu.
  </p>

  <h3>B2B şirketler için Bing neden stratejik kanal?</h3>
  <p>
    Copilot kurumsal ekiplerin her gün kullandığı uygulamaların içine gömülü. Hedef kitleniz iş
    kararlarını Teams, Outlook veya Word içinde alıyorsa, Copilot'ta görünmemek kısa listeye hiç
    girmemek anlamına geliyor.
  </p>
  {/* kaynak: K177 */}

  <h3>Microsoft 365 Copilot benim sayfamı görebilir mi?</h3>
  <p>
    Kurumun web temellendirmesi açıksa görebiliyor; yönetici bu ayarı kapattıysa Copilot yalnızca
    o kurumun kendi verisiyle çalışıyor ve dışarıdan hiçbir siteye ulaşmıyor. Bu tercih sizin
    kontrolünüzde değil, dolayısıyla planlamayı "web erişimi açık kurumlar" üzerinden yapmak
    doğru olanı.
  </p>

  <h3>IndexNow kurmam şart mı?</h3>
  <p>
    Şart değil, ama maliyeti neredeyse sıfır. Cloudflare ya da WordPress eklentisi kullanıyorsanız
    tek düğme. Sık güncellenen bir katalogunuz veya haber akışınız varsa getirisi hemen görünür;
    yılda birkaç kez değişen statik bir sitede farkı hissedilmez.
  </p>

  <h3>Bing'de indekslenmek Google performansımı etkiler mi?</h3>
  <p>
    Doğrudan bir etkisi yok, iki motor birbirinin sinyallerini kullanmıyor. Ancak Bing için
    yapılan işlerin çoğu — temiz site haritası, çelişkisiz canonical, sunucu tarafında render
    edilmiş içerik, zayıf sayfaların birleştirilmesi — Google tarafında da işe yarayan teknik
    düzeltmeler.
  </p>

  <p className="sayfa-cta">
    Bing indeksindeki gerçek ayak izinizi çıkarmak ve Copilot'un alıntılayabileceği bir içerik
    yapısı kurmak için <Link href="/geo">GEO danışmanlığı sayfasına</Link> göz atabilirsiniz.
  </p>
                </div>
            </article>
        </div>
    );
}
