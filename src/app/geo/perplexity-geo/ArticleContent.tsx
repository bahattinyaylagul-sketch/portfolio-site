/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

const headings = [
    {
        "id": "perplexity-geo-nedir",
        "text": "Perplexity GEO nedir?"
    },
    {
        "id": "kaynak-secimi",
        "text": "Perplexity hangi kaynakları seçer?"
    },
    {
        "id": "turkiye",
        "text": "Türkiye'de Perplexity ve Türkçe kaynak havuzu"
    },
    {
        "id": "kontrol-listesi",
        "text": "İçerik ve teknik optimizasyon kontrol listesi"
    },
    {
        "id": "perplexitybot-robots-txt",
        "text": "PerplexityBot, robots.txt ve gizli tarayıcı tartışması"
    },
    {
        "id": "olcum",
        "text": "Perplexity GEO başarısını nasıl ölçersiniz?"
    },
    {
        "id": "comet-alisveris",
        "text": "Comet tarayıcısı ve Perplexity'nin alışveriş yüzeyi"
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
                

  <h1>Perplexity GEO: Yanıtın Kaynağı Olmak İçin Ne Gerekiyor?</h1>

  <p className="first-answer">
    Perplexity, soruyu yanıtlamadan önce web'i canlı tarayan ve her yanıtın altına
    kullandığı kaynakları numaralayarak yazan bir arama motoru. Burada başarı sıralama
    pozisyonu değil, atıf sıklığı. İçeriğiniz taranabilir, güncel ve doğrudan cevap veren
    bir yapıdaysa; birinci sırada olmadan da yanıtın içinde görünebilirsiniz.
  </p>

  <aside className="tldr">
    <h2 className="tldr-baslik">TL;DR — Kısaca</h2>
    <p><strong>Perplexity'de kazanan sayfa en yüksek otoriteye sahip olan değil, sorunun tam karşılığını en temiz biçimde veren ve o an erişilebilir olan sayfa.</strong></p>
    <ul>
      <li>Tek yanıtta birden çok kaynak atıf alıyor — bu, GEO'yu sıfır toplamlı bir yarış olmaktan çıkarıyor.</li>
      <li>Canlı tarama yüzünden güncellik ve sunucu tarafı erişilebilirlik, backlink profilinden daha belirleyici hale geliyor.</li>
      <li>Perplexity'nin robots.txt'e yaklaşımı tartışmalı; hem görünür olmak isteyenin hem engellemek isteyenin bilmesi gereken bir konu.</li>
      <li>Comet tarayıcısı ve alışveriş yüzeyi, işin ucunu "atıf almak"tan "ajanın işlemi tamamlayabilmesi"ne taşıyor.</li>
    </ul>
  </aside>

  <h2 id="perplexity-geo-nedir">Perplexity GEO nedir?</h2>

  <p className="bolum-cevap">
    Perplexity GEO, içeriğinizin Perplexity'nin yanıt üretim zincirinde kaynak olarak
    seçilmesini hedefleyen optimizasyon çalışmasıdır. Ölçüsü sıralama değil, atıf sıklığı
    ve yanıt metninde markanızın nasıl anıldığı. Motor, cevabı yazmadan önce gerçek zamanlı
    web araması yapıp bulduğu sayfalardan alıntı çıkardığı için, içeriğin güncelliği ve
    o an erişilebilir olması klasik aramadakinden çok daha ağır basıyor.
  </p>
  {/* kaynak: K77 */}
  {/* kaynak: K78 */}

  <p>
    Mekanizmayı bir cümleyle özetlemek gerekirse: Perplexity bir dizin motoru gibi değil,
    okuduğunu özetleyen bir araştırmacı gibi çalışıyor. Sorguyu alıyor, birkaç arama
    yapıyor, dönen sayfaların içeriğini çekiyor, bunları modele bağlam olarak veriyor ve
    yanıtı o bağlamdan kuruyor. Bu zincirin adı RAG (retrieval-augmented generation) —
    <Link href="/geo/yapay-zeka-arama-nasil-calisir">yapay zeka aramanın
    nasıl çalıştığını</Link> anlatan sayfada zincirin tamamı ayrıntılı duruyor.
  </p>

  <p>
    Pratik sonuç şu: sayfanız bu zincirin herhangi bir halkasında elenirse, ne kadar iyi
    yazıldığının bir önemi kalmıyor. Arama adımında dönmezse okunmuyor. Okunurken içeriği
    JavaScript'in arkasındaysa boş geliyor. Boş gelmese bile cevabı paragrafların içine
    gömülmüşse model onu çıkarmakta zorlanıyor. Bu üç eleme noktası
    <Link href="/geo">GEO çalışmasının</Link> tamamında aynı sırayla karşınıza çıkıyor;
    Perplexity yalnızca en görünür örneği.
  </p>

  <p>
    Klasik SEO ile en keskin ayrım, rekabetin biçiminde. Google'da bir sorgunun birinci
    sırası tek. Perplexity'nin tek bir yanıtında beş, altı, bazen daha fazla kaynak yan
    yana atıf alabiliyor. Rakibinizin atıf alması sizin almamanız anlamına gelmiyor.
    Bu yüzden Perplexity, otoritesi henüz oturmamış siteler için Google'dan daha geçirgen
    bir yüzey.
  </p>
  {/* kaynak: K77 */}

  <p>
    Bir ayrıntı sık atlanıyor: Perplexity tek bir arama modu değil. Hızlı yanıt veren
    varsayılan mod ile daha fazla kaynak tarayıp uzun rapor üreten araştırma modu, aynı
    soruya farklı kaynak kümeleriyle cevap veriyor. Derin araştırma akışında motor onlarca
    sayfa çekiyor ve orada uzun kuyruklu, spesifik içeriklerin girme şansı belirgin biçimde
    artıyor. Varsayılan modda göremediğiniz bir sayfa, araştırma modunda ilk on kaynağın
    içinde olabiliyor.
  </p>

  <p>
    İkinci ayrıntı takip sorularında. Kullanıcı ilk cevabı aldıktan sonra "peki ya fiyatı"
    ya da "Türkiye'de geçerli mi" diye devam ediyor ve motor her seferinde yeni bir arama
    turu başlatıyor. Bir konuşmanın üçüncü sorusunda atıf almak, birincisinde almaktan çok
    daha kolay — çünkü soru daralmış oluyor ve o daralmış soruya cevap veren sayfa sayısı
    azalıyor. Sayfanızda yalnızca ana soruyu değil, ondan doğan alt soruları da
    cevaplamanın karşılığı burada.
  </p>

  <p>
    Aynı mantığın diğer platformlarda nasıl değiştiğini görmek isterseniz
    <Link href="/geo/chatgpt-geo">ChatGPT GEO</Link> ve
    <Link href="/geo/google-ai-modu">Google AI Modu</Link> sayfaları bu
    sayfayla birlikte okunmak üzere yazıldı. Genel çerçeve ve önceliklendirme
    <Link href="/geo">GEO danışmanlığı</Link> tarafında duruyor.
  </p>

  <h2 id="kaynak-secimi">Perplexity hangi kaynakları seçer?</h2>

  <p className="bolum-cevap">
    Perplexity'nin kaynak tercihi, Google'ın bağlantı ağırlıklı sıralama mantığından
    belirgin biçimde ayrışıyor. Alan otoritesi ve içeriğin başka yerlerde alıntılanması
    hâlâ sayılıyor; ama forum ve topluluk içeriği, kurumsal blog yazılarının önüne
    geçebiliyor. Niş bazında da tercihler oturmuş durumda: finansal sorgularda finans
    yayınları, sağlık sorgularında klinik kaynaklar tekrar tekrar aynı yanıtlarda çıkıyor.
  </p>
  {/* kaynak: K78 */}

  <h3>Topluluk içeriğinin ağırlığı</h3>

  <p>
    En çok konuşulan gözlem Reddit üzerinden geliyor. Bir karşılaştırmada Reddit,
    Google'ın deneysel yapay zeka aramasında 95. sırada kalırken Perplexity'de 6. sıraya
    çıkıyor. Bu rakamı tek bir çalışmanın ölçümü olarak okuyun — örneklemi, sorgu seti ve
    tarihi kamuya açık biçimde tekrarlanmadı, dolayısıyla evrensel bir katsayı değil.
    Yönü doğru, büyüklüğü tartışmalı.
  </p>
  {/* kaynak: K78 */}

  <p>
    Yönün doğru olmasının nedeni anlaşılabilir. Perplexity, "gerçek insanlar bu ürünü
    kullandıktan sonra ne dedi" tipindeki sorulara cevap ararken, kurumsal bir ürün
    sayfasının değil, tartışmanın içine bakıyor. Oy alan yorum, tekrarlanan şikayet,
    aynı sorunun üç ayrı başlıkta aynı biçimde cevaplanması — bunların hepsi doğrulama
    sinyali. Forum atıflarının markaya nasıl döndüğünü
    <Link href="/geo/reddit-forum-mention-etkisi">forum ve topluluk mention etkisi</Link>
    sayfasında ayrıca ele aldık.
  </p>

  <h3>İçeriğin içinde ne olduğu</h3>

  <p>
    Sayfa düzeyinde iki bileşen öne çıkıyor: adıyla anılan uzman görüşü ve başka yerde
    bulunmayan özgün veri. Bir GEO araç sağlayıcısının ölçümüne göre uzman alıntısı
    eklemek yapay zeka görünürlüğünü %41, özgün istatistik eklemek %29 artırıyor.
    İkisi de tek kaynaklı satıcı verisi; kontrol grubu ve sektör kırılımı paylaşılmadı.
    Rakamı hedef olarak almayın, hipotez olarak alın ve kendi sayfalarınızda önce/sonra
    ölçün.
  </p>
  {/* kaynak: K77 */}

  <p>
    Görsel içerik tarafında dolaşan "genel sorguların %70'i görsel içeriklere atıf yapıyor"
    bulgusu da aynı kategoride. Perplexity'nin yanıtlarında görsel kartlar ve tablolar
    gösterdiği doğru, ama bu oranın nasıl hesaplandığı belirsiz. Görselleri "atıf almak
    için" değil, açıklaması metinle birlikte anlam kazandığı için ekleyin; alt metin ve
    çevresindeki paragraf, görselin kendisinden daha çok iş görüyor.
  </p>
  {/* kaynak: K78 */}

  <p>
    Bir de kimsenin ölçmediği ama her denemede görünen bir şey var: Perplexity, cevabı
    tek bir yerden almayı sevmiyor. Aynı iddiayı iki bağımsız kaynakta bulduğunda ikisini
    birden gösteriyor. İçeriğinizin başka sitelerde doğrulanabilir olması — bir veri
    noktasının kaynağını göstermeniz, bir tanımı yaygın kullanımla aynı biçimde vermeniz —
    seçilme ihtimalini artırıyor.
  </p>

  <h3>Alan otoritesi hâlâ sayılıyor mu?</h3>

  <p>
    Sayılıyor, ama farklı biçimde. Perplexity bir sitenin genel bağlantı profilinden çok,
    o sitenin belirli bir konuda tekrar tekrar kaynak gösterilmesine bakıyor. Sağlık
    sorgularında klinik yayınların, finans sorgularında sektör basınının aynı yanıtlarda
    üst üste çıkması bunun sonucu. Genel bir otorite skorundan ziyade konu bazlı bir
    güven birikimi çalışıyor.
  </p>
  {/* kaynak: K78 */}

  <p>
    Bunun küçük siteler için anlamı iyi haber. Tek bir dar konuda kapsamlı ve güncel bir
    kaynak olmak, on ayrı konuda orta kalitede içerik üretmekten daha hızlı sonuç veriyor.
    Markanın hangi konunun otoritesi olduğunu makineye anlatma işi ise ayrı bir başlık —
    varlık bağlama ve tutarlı adlandırma
    <Link href="/geo/entity-seo">varlık tabanlı SEO</Link> tarafında.
  </p>

  <h2 id="turkiye">Türkiye'de Perplexity ve Türkçe kaynak havuzu</h2>

  <p className="bolum-cevap">
    Türkiye'de Perplexity, ChatGPT'nin yanında hâlâ niş bir kullanıcı kitlesine sahip:
    araştırma yapan profesyoneller, yazılımcılar, akademi. Buna karşılık Türkçe sorgularda
    motorun çekebileceği kaynak havuzu ince. Model, doyurucu Türkçe içerik bulamadığında
    ya İngilizce kaynağa yaslanıyor ya da elindeki zayıf materyalden cevap kuruyor.
    Boşluk burada.
  </p>

  <p>
    Bu bölümde sayı vermiyorum, çünkü Türkiye'ye özgü Perplexity kullanım verisi kamuya
    açık biçimde yayımlanmadı. Elimizde olan şey gözlem: bir konuda Türkçe sorduğunuzda
    yanıtın altında çıkan kaynakların önemli bölümü ya İngilizce ya da aynı iki üç büyük
    Türkçe yayın oluyor. Aynı soruyu İngilizce sorduğunuzda kaynak çeşitliliği katbekat
    artıyor.
  </p>

  <p>
    Bunun işletme tarafındaki karşılığı sade: Türkçe bir nişte doyurucu, güncel ve
    yapılandırılmış tek bir kaynak olmak, İngilizce'de aynı işi yapmaktan çok daha ucuz.
    İngilizce'de aynı sorunun otuz iyi cevabı varken Türkçe'de üç tane var, ikisi de 2023
    tarihli.
  </p>

  <h3>Türk UGC platformları nereye oturuyor?</h3>

  <p>
    Perplexity'nin topluluk doğrulamasına verdiği ağırlık, Türkiye'de Reddit'ten çok
    yerel platformlarda karşılık buluyor. Ekşi Sözlük, Şikayetvar ve Donanım Haber
    forumları; bir markanın gerçek kullanıcı deneyimini, arıza kalıplarını ve karşılaştırma
    tartışmalarını barındıran en yoğun Türkçe arşivler. Modelin aradığı yapı burada zaten
    var: aynı soruya farklı insanların verdiği, birbirini doğrulayan ya da çürüten cevaplar.
  </p>

  <p>
    Ama bir uyarı gerekiyor. Bu platformların hepsi motorun erişimine açık değil ve
    erişilebilir olanlarda içerik ağır biçimde JavaScript ve oturum duvarlarının arkasında
    duruyor. Bir platformun Perplexity yanıtlarında sık çıkması, o platforma yatırım
    yapmanız gerektiği anlamına da gelmiyor — özellikle şikayet odaklı arşivlerde marka
    görünürlüğü ile marka algısı ters yönde çalışabiliyor.
  </p>

  <p>
    Yapılabilir olan şey daha dolaylı: kendi içeriğinizi, o platformlarda tartışılan
    soruların diline yaklaştırmak. Kullanıcı "X modeli ısınıyor mu" diye soruyorsa,
    ürün sayfanızdaki "üstün termal performans" ifadesi o sorunun cevabı değil.
  </p>

  <p>
    Boşluğun en görünür olduğu yerler, mevzuatın ya da fiyatın yerelleştiği konular.
    Türkiye'deki vergi ve teşvik uygulamaları, yerel sağlık geri ödeme koşulları, ithal
    ürünlerin garanti ve servis süreçleri, sektörel sertifikasyon zorunlulukları — bunların
    hiçbirinde İngilizce kaynak işe yaramıyor ve model Türkçe tarafta çoğu zaman güncelliği
    geçmiş forum yazılarına düşüyor. Aynı konuda tarihli, kaynağı gösterilmiş ve düzenli
    güncellenen tek bir sayfa, o sorgu kümesinin tamamını uzun süre taşıyabiliyor.
  </p>

  <p>
    Bir de dil tarafında pratik bir nokta var. Türkçe'de aynı kavramın hem Türkçe hem
    İngilizce karşılığı dolaşıyor ve kullanıcı ikisini karışık kullanıyor. Sayfada her iki
    biçimi de doğal olarak geçirmek — tanımı verirken parantez içinde İngilizce karşılığını
    yazmak gibi — motorun sorguyu içerikle eşleştirmesini kolaylaştırıyor. Bu, anahtar
    kelime doldurmak değil; iki dilli bir okuyucunun zaten beklediği netlik.
  </p>

  <h2 id="kontrol-listesi">İçerik ve teknik optimizasyon kontrol listesi</h2>

  <p className="bolum-cevap">
    Perplexity için yapılacak işler ikiye ayrılıyor: motorun sayfanıza ulaşmasını sağlayan
    teknik katman ve ulaştığında cevabı çıkarmasını kolaylaştıran içerik katmanı. Teknik
    katman eşik niteliğinde — geçemezseniz içerik katmanının hiçbir anlamı yok. Aşağıdaki
    maddeler bu iki katmanı, yapılması gereken sırayla ve gerekçeleriyle birlikte veriyor.
  </p>

  <h3>Cevabı ilk paragrafa koyun</h3>

  <p>
    Ters piramit yapısı burada estetik bir tercih değil, çıkarım kolaylığı. Motor sayfanın
    üst bölümünü öncelikli işliyor; sorunun cevabı üçüncü alt başlığın altındaysa,
    modelin onu bulup çıkarma ihtimali düşüyor. Her H2'nin altına o başlığın sorusuna
    doğrudan cevap veren 40-80 kelimelik bir paragraf koymak, bu sayfanın kendisinde de
    uygulanan yöntem.
  </p>
  {/* kaynak: K78 */}

  <h3>Başlıkları soru biçiminde ve kısa yazın</h3>

  <p>
    H2 ve H3 cümlelerini 20 kelimenin altında tutun. "Nedir", "nasıl yapılır", "ne kadar
    sürer" kalıbındaki başlıklar hem modelin sayfayı bölümlere ayırmasını kolaylaştırıyor
    hem kullanıcının taramasını. İçeriğin makine tarafından anlamlı parçalara nasıl
    bölündüğü konusu <Link href="/geo/icerik-chunking">içerik chunking</Link>
    sayfasında ayrıca işleniyor.
  </p>
  {/* kaynak: K77 */}
  {/* kaynak: K78 */}

  <h3>Şema işaretlemesini ekleyin, ama görünür içerikle birebir</h3>

  <p>
    FAQ ve HowTo şeması, sayfanın yapısını makineye tarif etmenin en ucuz yolu. Kritik
    kural: şemadaki soru ve cevaplar sayfada görünen metinle aynı olmalı. Görünmeyen
    içeriği şemaya koymak hem Google tarafında yaptırım riski taşıyor hem de modele
    tutarsız iki sinyal gönderiyor.
  </p>
  {/* kaynak: K78 */}

  <h3>Güncelliği gerçekten koruyun</h3>

  <p>
    Son 30 gün içinde güncellenmiş sayfaların daha yüksek atıf aldığı gözlemi tekrar tekrar
    dile getiriliyor — bu da tek kaynaklı bir ölçüm, kesin bir eşik olarak okumayın.
    Yine de canlı tarama yapan bir motorda güncelliğin sayacağı açık. Tarih alanını
    değiştirip içeriğe dokunmamak işe yaramıyor; motor sayfayı yeniden çekip içeriği
    karşılaştırıyor. Değişen bir şey yoksa güncelleme de yok.
  </p>
  {/* kaynak: K77 */}

  <h3>Sunucu tarafı render ve hız</h3>

  <p>
    Yapay zeka tarayıcılarının büyük bölümü JavaScript çalıştırmıyor ya da eksik
    çalıştırıyor. Kritik içerik istemci tarafında üretiliyorsa motor boş bir iskelet
    görüyor. Sunucu tarafı render veya statik üretim, bu sayfalar için tercih değil
    zorunluluk — ayrıntısı
    <Link href="/geo/javascript-ssr-ai-botlari">JavaScript, SSR ve yapay
    zeka botları</Link> sayfasında. TTFB'yi 200 ms altında tutmak da aynı nedenle önemli:
    zaman aşımına uğrayan istek, düşük kaliteli içerikten farksız.
  </p>
  {/* kaynak: K77 */}

  <h3>Takip sorularını aynı sayfada karşılayın</h3>

  <p>
    Perplexity kullanıcısı nadiren tek soruyla ayrılıyor. Ana sorunun ardından gelen
    "maliyeti ne", "alternatifi var mı", "ne kadar sürer" tipindeki devam sorularını aynı
    sayfada ayrı alt başlıklarla karşılamak, aynı konuşma içinde ikinci ve üçüncü kez atıf
    alma ihtimalini artırıyor. FAQ bloğunu bir işaretleme formalitesi olarak değil, bu
    devam sorularının listesi olarak kurun.
  </p>
  {/* kaynak: K78 */}

  <h3>Sorguları tahmin etmeyin, izleyin</h3>

  <p>
    Perplexity'nin geçmiş konuşmalarınızı gösteren arayüzü, nişinizde gerçek kullanıcıların
    hangi kelimelerle soru sorduğunu görmenin en dolaysız yolu. Anahtar kelime aracının
    verdiği "perplexity geo" ile kullanıcının yazdığı "perplexity'de nasıl kaynak
    gösterilirim" arasındaki fark, içeriğin başlık yapısını doğrudan belirliyor.
  </p>
  {/* kaynak: K78 */}

  <h2 id="perplexitybot-robots-txt">PerplexityBot, robots.txt ve gizli tarayıcı tartışması</h2>

  <p className="bolum-cevap">
    Perplexity'nin tarayıcı davranışı sektörün en tartışmalı başlıklarından biri. Şirket,
    kullanıcı bir soru sorduğunda tetiklenen getirmeleri "tarama" değil "kullanıcı adına
    çalışan ajan" olarak tanımlıyor ve bu isteklerin robots.txt kurallarına tabi olmadığını
    savunuyor. Cloudflare 4 Ağustos 2025 tarihli raporunda bunun ötesine geçen davranışları
    belgeledi.
  </p>

  <p>
    Perplexity'nin iki farklı kullanıcı aracısı var: içeriği dizinlemek için gezen
    <code>PerplexityBot</code> ve bir kullanıcının sorusu üzerine tek sayfa çeken
    <code>Perplexity-User</code>. Şirketin resmi tutumu, ikincisinin robots.txt'e
    bakmadığı yönünde — gerekçe, tarayıcınıza bir adres yazdığınızda tarayıcının da
    robots.txt'e bakmaması. Bu analoji ilk bakışta makul; sorun, tek bir kullanıcı
    isteğinin arka planda onlarca sayfa getirmesine dönüştüğünde analojinin bozulması.
  </p>

  <p>
    Cloudflare'in raporu daha ağır bir iddia içeriyordu: engellenen alan adlarına
    erişmek için beyan edilmemiş kullanıcı aracıları, jenerik bir masaüstü Chrome kimliği
    ve dönüşümlü ağ blokları kullanıldığı. Cloudflare bunun üzerine Perplexity'yi
    doğrulanmış bot listesinden çıkardı ve engelleme kuralları yayımladı. Perplexity
    trafiğin bir bölümünün üçüncü taraf bir servise ait olduğunu ve isteklerin kullanıcı
    kaynaklı olduğunu söyleyerek karşı çıktı. Tartışma teknik olarak kapanmadı.
  </p>

  <p>
    Sizin için pratik sonucu şu. Perplexity'de görünmek istiyorsanız, robots.txt'te
    <code>PerplexityBot</code> ve <code>Perplexity-User</code> için açık izin vermek
    doğru adım — ama tek başına yeterli değil, çünkü asıl elemeyi CDN ve WAF katmanınız
    yapıyor. Bot yönetimi kuralları, hız sınırları veya "şüpheli" kullanıcı aracısı
    filtreleri, izin verdiğinizi sandığınız isteği sessizce düşürebiliyor. Sunucu
    günlüklerinde bu iki ajanın gerçekten 200 aldığını doğrulamadan işi bitmiş saymayın.
  </p>

  <p>
    Görünmek istemiyorsanız tablo daha zor. Robots.txt bir rica; Cloudflare'in
    belgelediği davranış, ricanın her zaman dinlenmediğini gösteriyor. Gerçek kontrol
    ağ katmanında — doğrulanmış bot listeleri, IP aralığı kontrolü ve içerik ücret
    duvarları. Hangi botun neyi yaptığı, hangi direktifin ne anlama geldiği ve engelleme
    kararının maliyeti
    <Link href="/geo/ai-botlari-robots-txt">yapay zeka botları ve
    robots.txt</Link> sayfasında tek tek açılıyor.
  </p>

  <p>
    Karar verirken şunu hesaba katın: Perplexity'yi engellemek, atıf almayı da engelliyor.
    Trafik değeri ile içeriğin izinsiz kullanılması arasındaki denge sektöre göre değişiyor.
    Haber ve araştırma yayıncıları için bu bir gelir sorunu; hizmet satan bir işletme için
    genellikle değil.
  </p>

  <h2 id="olcum">Perplexity GEO başarısını nasıl ölçersiniz?</h2>

  <p className="bolum-cevap">
    Ölçümün merkezinde sıralama pozisyonu yok. Bakılacak şeyler: hedef sorgularda atıf
    alma sıklığı, yanıt metninde markanızın nasıl tarif edildiği ve Perplexity'den gelen
    trafiğin site içi davranışı. Üçü de farklı yerlerden okunuyor ve hiçbiri Search Console
    benzeri resmi bir panelden gelmiyor; hepsi dolaylı ölçüm.
  </p>
  {/* kaynak: K77 */}

  <p>
    Aşağıdaki tablo sektörde dolaşan hedef değerleri topluyor. Hepsi araç sağlayıcılarının
    kendi ölçümleri; bağımsız doğrulaması yok, sektör ve site büyüklüğü kırılımı
    paylaşılmadı. Kıyas noktası olarak kullanın, taahhüt olarak değil.
  </p>

  <table className="karsilastirma">
    <thead>
      <tr>
        <th>Metrik</th>
        <th>Dolaşımdaki hedef</th>
        <th>Veri niteliği</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Hedef sorgularda atıf oranı</td>
        <td>6. ayda %25 üzeri</td>
        <td>Tek araç sağlayıcısı ölçümü — örneklem açıklanmadı</td>
      </tr>
      <tr>
        <td>Yapay zeka kaynaklı trafiğin etkileşim oranı</td>
        <td>%30 artış</td>
        <td>Satıcı ölçümü — karşılaştırma tabanı belirsiz</td>
      </tr>
      <tr>
        <td>Perplexity kullanıcılarının oturum süresi</td>
        <td>%42 artış</td>
        <td>Tek çalışma verisi — kendi GA4'ünüzde doğrulayın</td>
      </tr>
      <tr>
        <td>Yapay zeka görünürlük skoru</td>
        <td>%40 artış</td>
        <td>Aracın kendi tanımladığı skor — platformlar arası karşılaştırılamaz</td>
      </tr>
      <tr>
        <td>Rakiplerle kaynak örtüşmesi</td>
        <td>Artış yönlü</td>
        <td>Yöntem bağımlı; mutlak değer değil trend olarak okunmalı</td>
      </tr>
    </tbody>
  </table>
  {/* kaynak: K77 */}
  {/* kaynak: K78 */}

  <p>
    Araç tarafında AthenaHQ, Goodie AI, Geordy ve BrightEdge gibi isimler geçiyor; bunların
    çoğu niş ürünler ve hepsini tek tek denemenin karşılığı yok. Kategori olarak "GEO izleme
    araçları" hepsi aynı işi yapıyor: belirlediğiniz sorguları düzenli aralıklarla motora
    sorup dönen yanıtta markanızın geçip geçmediğini kaydediyor. Ürettikleri sayı gerçek
    gösterim verisi değil, örneklemden çıkan tahmin. Kişiselleştirme ve zaman içindeki
    model değişimi yüzünden aynı sorgu farklı anlarda farklı kaynak gösterebiliyor.
  </p>
  {/* kaynak: K77 */}

  <p>
    Ücretsiz ve daha güvenilir olan yol, kendi analitiğiniz.
    <code>perplexity.ai</code> yönlendirme trafiğini ayrı bir segment olarak izlemek için
    GA4'te referral kaynağına regex filtresi kuruyorsunuz. Kurulumun adımları ve yaygın
    hataları <Link href="/geo/ga4-ai-trafigi">GA4'te yapay zeka trafiği
    ölçümü</Link> sayfasında; hangi KPI'ların anlamlı olduğu ise
    <Link href="/geo/geo-kpi-olcumu">GEO KPI ölçümü</Link> tarafında.
  </p>
  {/* kaynak: K78 */}

  <p>
    Sayısal metriklerin yanında ihmal edilen bir ölçüm var: yanıtın markanızı nasıl tarif
    ettiği. Atıf almak, doğru anlatılmak anlamına gelmiyor. Motor sizi rakibinizin
    kategorisine koyabiliyor, kapsam dışı bir hizmeti size atfedebiliyor ya da güncelliğini
    yitirmiş bir fiyatı tekrarlayabiliyor. Hedef sorgularınızı ayda bir elle sorup dönen
    metni okumak — otomatik hiçbir araç bunun yerini tutmuyor — hataların nereden geldiğini
    görmenin en hızlı yolu. Yanlış bilgi genellikle sizin sitenizdeki eski bir sayfadan ya
    da güncellenmemiş bir dizinden geliyor; kaynağı bulup düzeltmek, yeni içerik
    üretmekten daha çabuk sonuç veriyor.
  </p>

  <p>
    Ölçümün bir de karşılaştırma tarafı var. Aynı sorgu kümesini rakiplerinizin markasıyla
    sorup hangi kaynakların çıktığına bakmak, kendi atıf oranınıza bakmaktan daha çok bilgi
    veriyor. Tekrar eden alan adları, motorun o konuda kime güvendiğini gösteren en doğrudan
    işaret; o listede olmayan bir siteyseniz sorun genellikle içerik kalitesinde değil,
    konu kapsamının darlığında.
  </p>

  <p>
    Zaman beklentisi konusunda tek bir rakam dolaşıyor: kapsamlı bir GEO uygulamasının
    atıf oranına yansıması ortalama altı ay. Kendi projelerimde ilk sinyaller — daha önce
    hiç geçmeyen bir sorguda markanın görünmeye başlaması — genellikle 6-8 hafta içinde
    çıkıyor, ama bu istikrarlı bir atıf oranı demek değil.
  </p>
  {/* kaynak: K77 */}

  <h2 id="comet-alisveris">Comet tarayıcısı ve Perplexity'nin alışveriş yüzeyi</h2>

  <p className="bolum-cevap">
    Comet, Perplexity'nin Chromium tabanlı tarayıcısı. Farkı, sayfanın yanında duran ve
    kullanıcı adına işlem yapabilen bir asistan barındırması: sekmeleri okuyup
    karşılaştırma çıkarabiliyor, form doldurabiliyor, sepete ürün ekleyebiliyor. Burada
    sayfanız artık yalnızca okunan bir metin değil, üzerinde işlem yapılan çalışır bir arayüz.
  </p>

  <p>
    Ayrım önemli. Klasik GEO'da hedef, modelin sayfanızdaki cümleyi alıp yanıta koyması.
    Ajanlı taramada hedef, ajanın sayfanızda bir görevi tamamlayabilmesi. İkincisi çok
    daha kırılgan: çerez duvarı, zorunlu üyelik, kapanmayan bir açılır pencere ya da
    yalnızca fare hareketiyle açılan bir menü, ajanı ilk adımda durduruyor.
  </p>

  <p>
    Ajan, kullanıcının oturum açmış tarayıcısı içinde çalıştığı için istekler normal
    kullanıcı trafiğinden ayırt edilemiyor. Bu, ölçüm tarafında bir kör nokta yaratıyor:
    analitiğinizde "insan" görünen bir oturumun ne kadarının ajan tarafından
    yürütüldüğünü bilemiyorsunuz. Robots.txt tartışmasının teknik olarak çözümsüz kalmasının
    nedeni de bu — sunucu tarafında ikisini ayıracak güvenilir bir işaret yok.
  </p>

  <p>
    Ajanlı tarama, yayıncı tarafında bir gelir sorusu da açıyor. Ajan sayfayı kullanıcı
    adına okuyup özetlediğinde reklam gösterimi gerçekleşmiyor, kullanıcı sayfada zaman
    geçirmiyor ve dönüşüm hunisinin üst basamakları atlanıyor. Buna karşılık ajanın
    tamamladığı işlem — rezervasyon, sepet, form — hunide çok daha aşağıda duruyor. Aynı
    teknoloji, bazı iş modellerinde trafiği kesip bazılarında doğrudan işlem getiriyor.
  </p>

  <h3>E-ticaret için ne değişiyor?</h3>

  <p>
    Perplexity, ürün sorgularında kaynak listesi yerine görsel ürün kartları gösteriyor ve
    satıcıların ürün akışı sağlayabildiği bir program yürütüyor. Karşılaştırmayı motor
    yapıyor; kullanıcı üç siteyi gezmeden fiyat, kargo ve stok bilgisini tek ekranda
    görüyor.
  </p>

  <p>
    Bunun operasyonel karşılığı, ürün verisinin doğruluğunun pazarlama metninden daha
    değerli hale gelmesi. Fiyatı güncel olmayan bir katalog, stokta olmayan bir varyant
    ya da yapılandırılmış veriyle sayfadaki fiyatın uyuşmaması — üçü de ürünü
    karşılaştırmadan düşürüyor. Product şeması, kargo ve iade koşullarının makine okunur
    biçimde verilmesi, ürün akışının düzenli beslenmesi; bu üç iş, bir ürün açıklamasını
    yeniden yazmaktan daha çok getiriyor.
  </p>

  <p>
    Ödeme adımına kadar giden ajanlı akışlar henüz her pazarda ve her satıcıda çalışmıyor.
    Ama hazırlık maliyeti düşük ve zaten yapmanız gereken işlerle örtüşüyor: temiz ürün
    verisi, erişilebilir sayfa yapısı, oturum gerektirmeyen bilgi katmanı.
  </p>

  <h2 id="sss">Sıkça Sorulan Sorular</h2>

  <h3>Perplexity GEO ile ChatGPT GEO arasındaki temel fark ne?</h3>
  <p>
    Perplexity her yanıtta canlı web araması yapıp kullandığı kaynakları numaralayarak
    gösteriyor; atıf mekanizması görünür ve doğrudan. ChatGPT'nin yanıtı büyük ölçüde
    eğitim verisinden geliyor, arama yalnızca gerektiğinde devreye giriyor ve hangi
    kaynağın yanıtı ne kadar etkilediği çoğu zaman görünmüyor. Perplexity'de güncellik ve
    erişilebilirlik daha ağır basarken, ChatGPT'de markanın web genelinde tutarlı biçimde
    anılması daha belirleyici.
  </p>

  <h3>Reddit ve forum içerikleri Perplexity'de neden bu kadar öne çıkıyor?</h3>
  <p>
    Motor, topluluk doğrulamasını güvenilirlik sinyali olarak okuyor. Aynı soruya farklı
    kişilerin verdiği, oylanmış ve birbirini tekrarlayan cevaplar, tek bir kurumsal
    sayfanın iddiasından daha güçlü bir kanıt kümesi oluşturuyor.
  </p>

  <h3>İçeriğimi ne sıklıkla güncellemeliyim?</h3>
  <p>
    Son 30 gün içinde güncellenen sayfaların daha yüksek atıf aldığı gözlemi yaygın, ama
    tek kaynaklı bir ölçüm — sabit bir eşik gibi davranmayın. İşleyen yaklaşım, sayfayı
    trafiğe ve konunun değişim hızına göre önceliklendirmek: hızlı değişen bir konuda ayda
    bir gerçek revizyon, durağan bir konuda altı ayda bir yeterli. Yalnızca tarih alanını
    değiştirmek işe yaramıyor.
  </p>

  <h3>Görsel içerik atıfları gerçekten etkiliyor mu?</h3>
  <p>
    Perplexity yanıtlarında görsel ve tablo gösterdiği için görsellerin bir katkısı var,
    ama "genel sorguların %70'i görsel içeriklere atıf yapıyor" biçimindeki rakam tek
    çalışmanın bulgusu ve hesaplama yöntemi açık değil. Görseli, açıklaması ve çevresindeki
    metinle birlikte anlam taşıdığı yerde kullanın.
  </p>

  <h3>Robots.txt'te Perplexity'ye izin verirsem içeriğim modeli eğitmekte kullanılır mı?</h3>
  <p>
    İki iş birbirinden ayrı: yanıt üretmek için sayfanızı çekmek ile içeriği eğitim verisine
    dahil etmek aynı şey değil. Sorun, Perplexity'nin kullanıcı tetikli getirmeleri
    robots.txt kapsamı dışında saymasından kaynaklanan belirsizlik. Kesin kontrol istiyorsanız
    karar noktası robots.txt değil, ağ katmanı.
  </p>

  <h3>Perplexity'yi tamamen engellemeli miyim?</h3>
  <p>
    Yanıtı iş modeliniz belirliyor. Geliri sayfa gösteriminden gelen yayıncılar için
    engelleme savunulabilir bir tercih. Hizmet ya da ürün satan bir işletme içinse
    engelleme, hem atıfı hem de ondan gelen nitelikli trafiği kapatmak anlamına geliyor.
  </p>

  <h3>Comet için ayrıca bir şey yapmam gerekiyor mu?</h3>
  <p>
    Ayrı bir optimizasyon katmanı değil, mevcut işlerin bir uzantısı. Ajanın sayfanızda
    ilerleyebilmesi için gereken şeyler — oturum gerektirmeyen bilgi, klavyeyle
    erişilebilir arayüz, agresif olmayan açılır pencereler, temiz form etiketleri — zaten
    erişilebilirlik ve dönüşüm için yapılması gerekenler. Ek olarak ürün ve fiyat verisinin
    yapılandırılmış biçimde sunulması ajanlı alışveriş akışlarında doğrudan işe yarıyor.
  </p>

  <h3>Türkçe içerikte Perplexity fırsatı gerçek mi?</h3>
  <p>
    Türkiye'ye özgü yayımlanmış kullanım verisi yok, dolayısıyla rakamla konuşamam.
    Gözlemle konuşabilirim: Türkçe sorgularda dönen kaynak çeşitliliği İngilizce'ye kıyasla
    belirgin biçimde dar ve pek çok nişte güncel, yapılandırılmış tek bir Türkçe kaynak
    bile yok. Bu boşluk kalıcı değil, ama şu an açık.
  </p>

  <p className="sayfa-cta">
    Hangi sorgularda atıf aldığınızı ölçmek ve içerik yapınızı bu yüzeye göre kurmak için
    <Link href="/geo">GEO danışmanlığı sayfasına</Link> göz atabilirsiniz.
  </p>


            </article>
        </div>
    );
}
