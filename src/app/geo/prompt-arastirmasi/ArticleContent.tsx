/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

const headings = [
    {
        "id": "nedir",
        "text": "Prompt araştırması nedir, anahtar kelime araştırmasından nerede ayrılır"
    },
    {
        "id": "kaynaklar",
        "text": "Müşterilerinizin prompt'larını nerede bulursunuz"
    },
    {
        "id": "set-kurma",
        "text": "Prompt setini kurmak ve yönetmek"
    },
    {
        "id": "bicim-etkisi",
        "text": "Prompt biçimi sonucu değiştirir"
    },
    {
        "id": "olcume-baglama",
        "text": "Prompt seti ölçümün girdisidir"
    },
    {
        "id": "turkiye",
        "text": "Türkiye katmanı: Türkçe prompt'ların kendine özgü hâlleri"
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
                

  <h1>Prompt Araştırması: Müşteriniz Yapay Zekaya Ne Soruyor?</h1>

  <p className="first-answer">
    Prompt araştırması, hedef kitlenizin yapay zeka asistanlarına markanız ve
    kategoriniz hakkında sorduğu gerçek cümleleri toplama ve bunları ölçülebilir
    sabit bir sete dönüştürme işidir. Anahtar kelime araştırmasının GEO'daki
    karşılığıdır; çıktısı bir hacim tablosu değil, her ay aynı biçimde çalıştırılan
    bir soru listesidir.
  </p>

  <aside className="tldr">
    <h2 className="tldr-baslik">TL;DR — Kısaca</h2>
    <p><strong>Ölçemediğiniz sorularda görünmüyor olabilirsiniz; prompt araştırması hangi soruları ölçeceğinize karar verme işidir.</strong></p>
    <ul>
      <li>Anahtar kelime kısa ve bağlamsız, prompt uzun ve kısıtlı. "en iyi crm" ile "20 kişilik ajans için entegrasyonu iyi uygun fiyatlı bir CRM önerir misin" aynı ihtiyacın iki farklı dilsel biçimi.</li>
      <li>En zengin prompt kaynağı araçlarda değil, kendi satış ve destek kayıtlarınızda duruyor.</li>
      <li>Aynı ihtiyacı farklı biçimde sormak farklı kaynak listesi getirir — tek prompt'la yapılan ölçüm yanıltır.</li>
      <li>Türkçe ve İngilizce ayrı setler ister; ikisi aynı sorunun cevabını farklı kaynaklardan çeker.</li>
    </ul>
  </aside>


  <h2 id="nedir">Prompt araştırması nedir, anahtar kelime araştırmasından nerede ayrılır</h2>

  <p className="bolum-cevap">
    İkisinin amacı ortak: insanların ihtiyacını kendi kelimeleriyle yakalamak.
    Ayrıldıkları yer o kelimelerin biçimi. Arama kutusuna yazılan ifade kısadır,
    dilbilgisi zayıftır, bağlam taşımaz. Yapay zekaya sorulan cümle ise uzundur,
    kısıt içerir, çoğu zaman birden fazla soruyu tek nefeste sorar.
    <Link href="/geo">GEO çalışmasının</Link> girdisi artık bu ikinci biçim.
  </p>

  <p>
    Somutlaştıralım. Arama kutusuna "en iyi crm" yazan kullanıcı ile ChatGPT'ye
    "20 kişilik bir dijital ajans için uygun fiyatlı bir CRM önerir misin, Google
    Workspace ve WhatsApp entegrasyonları da önemli" yazan kullanıcı aynı kişi
    olabilir. İhtiyaç aynı. Ama ilkinde sistemin elinde iki kelime var, ikincisinde
    şirket büyüklüğü, sektör, bütçe hassasiyeti ve iki spesifik entegrasyon
    gereksinimi var. Model bu kısıtları filtre olarak kullanır. Sizin ürününüz
    WhatsApp entegrasyonu sunmuyorsa, "en iyi crm" listesinde ilk üçte olsanız bile
    o cevapta yer almazsınız.
  </p>

  <p>
    Buradan çıkan sonuç, GEO'da hacim takibinin neden işe yaramadığını da açıklıyor.
    Bir prompt'un aylık kaç kez yazıldığını gösteren bir veri kaynağı yok — ve
    olsaydı bile işe yaramazdı, çünkü prompt'lar tekilleşiyor. İki kullanıcının
    kelimesi kelimesine aynı cümleyi yazma ihtimali düşük. Ölçtüğünüz şey artık
    tekil ifadenin hacmi değil, <em>ihtiyaç kalıbının</em> temsilcisi olan bir soru.
  </p>

  <p>
    Motorlar da zaten böyle çalışıyor. Uzun bir prompt sisteme geldiğinde tek bir
    sorgu olarak işlenmiyor; alt sorulara bölünüp paralel olarak aranıyor.
    <Link href="/geo/query-fan-out">Query fan-out mekanizması</Link>
    bu yüzden prompt araştırmasının teknik zeminini oluşturuyor: siz bir prompt
    seçiyorsunuz, motor onu beş on alt sorguya çeviriyor, cevap o alt sorguların
    ortak kaynaklarından kuruluyor.
  </p>

  <p>
    Ham metinlerde sık geçen bir başka nokta da yerini burada buluyor. "Prompt
    engineer" unvanı 2025 itibarıyla ayrı bir meslek olmaktan çıkıp genel bir
    yetkinliğe dönüştü; modeller kullanıcı niyetini eskisine göre çok daha iyi
    sezinlediği için sihirli formüller yazan uzmana ihtiyaç kalmadı.
    {/* kaynak: K87 */}
    Ama bu, prompt'un pazarlamacı için önemsizleştiği anlamına gelmiyor. Tam tersi:
    prompt yazmak sıradanlaştıkça prompt'u <em>araştırma nesnesi</em> olarak görmek
    değer kazandı. Artık soru "nasıl iyi prompt yazarım" değil, "müşterim hangi
    prompt'u yazıyor ve orada var mıyım".
  </p>

  <p>
    Bu ayrımı klasik tarafla birlikte düşünmek gerekiyor.
    <Link href="/seo/arama-niyeti">Arama niyeti analizi</Link> hâlâ geçerli; niyet
    kategorileri değişmedi. Değişen, niyetin ifade edildiği cümlenin uzunluğu ve
    bağlam yoğunluğu.
  </p>


  <h2 id="kaynaklar">Müşterilerinizin prompt'larını nerede bulursunuz</h2>

  <p className="bolum-cevap">
    Prompt verisi satın alınabilir bir şey değil. Kimse size "kategorinizde şu ay
    en çok şu cümle soruldu" diyen bir rapor veremez, çünkü asistanlar sorgu
    günlüklerini yayınlamıyor. Elinizdeki tek yol, gerçek insanların gerçek
    sorularını topladığınız beş ayrı damarı birleştirmek. Bunların bir kısmı zaten
    şirketinizin içinde duruyor.
  </p>

  <h3>Satış ve destek kayıtları — en değerli kaynak, en az kullanılan</h3>

  <p>
    Bir kullanıcının yapay zekaya sorduğu cümle, satış temsilcinize sorduğu cümleye
    şaşırtıcı ölçüde benzer. İkisi de doğal dilde, ikisi de bağlamlı, ikisi de
    kısıtlı. "Bizim ekibimiz 12 kişi, şu an Excel'de takip ediyoruz, geçiş zor olur
    mu" cümlesi bir demo kaydından da çıkabilir, bir ChatGPT ekran görüntüsünden de.
  </p>

  <p>
    Yöntem şu: son altı ayın demo kayıtlarını, canlı destek transkriptlerini,
    satış öncesi e-postalarını ve teklif taleplerini tarayın. Soru cümlelerini
    olduğu gibi çıkarın — özetlemeyin, düzeltmeyin, kısaltmayın. Müşterinin kurduğu
    cümle neyse o. Sonra bunları tekrar sıklığına göre gruplayın. Aynı endişeyi
    dile getiren on beş farklı cümle bulduğunuzda, elinizde bir prompt kalıbı var
    demektir.
  </p>

  <p>
    Kaydederken cümlenin yanına iki şey daha yazın: sorunun hangi aşamada geldiği
    (ilk temas, teklif sonrası, kullanım sırasında) ve soranın rolü. Aynı cümle
    finans müdüründen geldiğinde farklı, teknik ekipten geldiğinde farklı bir
    prompt'a dönüşüyor. Bu iki alan, ileride setinizi kategoriye ayırırken
    kararı sizin yerinize veriyor.
  </p>

  <p>
    Çoğu ekip bu adımı atlıyor. Sebebi basit: bu veri bir araçta hazır durmuyor,
    okumak gerekiyor. Ama rakiplerinizin de atladığı adım bu, dolayısıyla en az
    kalabalık alan burası.
  </p>

  <h3>Search Console'un uzun kuyruğunu prompt'a çevirmek</h3>

  <p>
    Search Console'daki dört beş kelimelik, soru biçimli, tıklaması az ama
    gösterimi olan sorgular prompt hammaddesidir. Bu sorgular zaten kullanıcının
    tam cümle kurmaya çalıştığı anlardır; yalnızca arama kutusunun disiplini onları
    kırpmıştır.
  </p>

  <p>
    Çevirme işlemi mekanik. Sorguyu alın, eksik bağlamı ekleyin, kısıt koyun.
    "e-fatura entegrasyonu maliyeti" sorgusu prompt olarak "küçük bir e-ticaret
    işletmesi için e-fatura entegrasyonunun ilk kurulum ve aylık maliyeti ne olur,
    hangi kalemlere dikkat etmeliyim" hâline gelir. Eklediğiniz bağlam uydurma
    değil; müşteri profilinizden geliyor. Zaten ilk kaynakta topladığınız satış
    kayıtları bu bağlamı size veriyor.
  </p>

  <h3>Halkın sorduğu sorular ve forumlar</h3>

  <p>
    "Bunlar da soruldu" kutusu, Google'ın kendi sorgu günlüğünden damıttığı soru
    listesidir — hazır, ücretsiz ve gerçek. Bir kategori sorgusunda kutuyu açıp
    açıp genişletmek, on beş dakikada otuz soru çıkarır.
  </p>

  <p>
    Forum tarafı daha ham ama daha dürüst. Ekşi Sözlük başlıkları, sektörel Facebook
    grupları, Reddit'in ilgili subreddit'leri ve Türkiye özelinde şikayet
    platformları, insanların filtresiz sorularını barındırıyor. Bu kaynağın ikinci
    bir faydası var:
    <Link href="/geo/reddit-forum-mention-etkisi">forum içeriklerinin yapay zeka
    cevaplarındaki ağırlığı</Link> düşünüldüğünde, oradaki soruları toplarken aynı
    zamanda modelin beslendiği metni okuyorsunuz.
  </p>

  <h3>Motorun kendisine sormak</h3>

  <p>
    En hızlı yöntem, asistana doğrudan sormak: "Bu konuda insanlar sana en çok ne
    soruyor?" ya da "Bir kullanıcı [kategori] seçerken sana hangi soruları
    yöneltir?" Modelin verdiği cevap gerçek bir sorgu günlüğü değil — model kendi
    günlüğüne bakmıyor, eğitim verisinden bir tahmin üretiyor. Bunu bilerek kullanın.
  </p>

  <p>
    Yine de işe yarar, çünkü tahmin ettiği şey tam olarak "bu kategoride tipik soru
    nasıl kurulur" kalıbıdır. Aynı soruyu
    <Link href="/geo/chatgpt-geo">ChatGPT</Link> ve
    <Link href="/geo/perplexity-geo">Perplexity</Link> üzerinde ayrı ayrı sorun; farklı
    cevaplar verirlerse bu da bilgi. Çıkan listeyi doğrulanmamış kabul edip diğer
    dört kaynakla kesiştirin.
  </p>

  <h3>Rakiplerin müşterileri</h3>

  <p>
    İnceleme sitelerindeki yorumlar, uygulama mağazası değerlendirmeleri ve şikayet
    platformlarındaki başlıklar, rakibin müşterisinin neyi sorguladığını gösterir.
    Bir kullanıcının "X yazılımında raporlama neden bu kadar kısıtlı" diye yazdığı
    şikayet, prompt setinize "raporlama esnekliği iyi olan bir [kategori] önerir
    misin" satırı olarak girer.
  </p>

  <p>
    Bu kaynak özellikle karşılaştırma prompt'ları için verimli. İnsanlar
    memnuniyetsizliklerini alternatif ararken dile getiriyor ve o dil, doğrudan
    yapay zekaya sordukları dille örtüşüyor.
  </p>


  <h2 id="set-kurma">Prompt setini kurmak ve yönetmek</h2>

  <p className="bolum-cevap">
    Topladığınız yüzlerce cümle ölçülebilir değil. Bunları 20–30 sorguluk sabit
    bir sete indirmeniz gerekiyor. Set dört kategoriye bölünür: marka, kategori,
    karşılaştırma ve problem. Her kategori farklı bir soruyu yanıtlar ve dağılım
    bozulursa ölçüm tek yöne bakar. Seçim ölçütü hacim değil temsil gücü — bir
    satır, arkasındaki onlarca benzer cümlenin yerine geçebiliyor mu?
  </p>

  <p>
    <strong>Marka prompt'ları</strong> adınızın doğrudan geçtiği sorulardır: "X
    firması güvenilir mi", "X'in fiyatlandırması nasıl işliyor". Burada beklenti
    yüksek — kendi adınızla sorulan soruda görünmüyorsanız temel bir varlık sorunu
    var demektir. Bu grup aynı zamanda modelin sizin hakkınızda yanlış bilgi üretip
    üretmediğini yakaladığınız yer.
  </p>

  <p>
    <strong>Kategori prompt'ları</strong> markasız, ihtiyaç odaklı sorular: "yeni
    kurulan bir şirket için muhasebe programı önerir misin". GEO'nun asıl savaş
    alanı burası. Kazanmak zor, kazanınca değerli.
  </p>

  <p>
    <strong>Karşılaştırma prompt'ları</strong> sizi bir rakiple yan yana koyar.
    Modelin hangi kriterleri öne çıkardığını, hangi kaynağa dayandığını ve sizi
    nasıl konumlandırdığını en net burada görürsünüz.
  </p>

  <p>
    <strong>Problem prompt'ları</strong> ürünü değil, çözülen sorunu merkeze alır:
    "ekipteki müşteri takibi dağınık, nasıl toparlarım". Kullanıcı henüz kategori
    adını bilmiyor. Bu gruptaki görünürlük, huninin en üstünü tutar.
  </p>

  <p>
    Setin sabit kalması pazarlık konusu değil. Ölçümün anlamı karşılaştırılabilirlikten
    geliyor; her ay sorguları değiştirirseniz elinizde trend değil, birbirinden
    bağımsız fotoğraflar kalır. On sorguluk sabit bir seti altı ay izlemek, her ay
    yenilenen elli sorguluk bir setten kat kat fazla şey öğretir.
  </p>

  <p>
    Güncelleme için üç meşru gerekçe var: yeni bir ürün ya da hizmet hattı
    açtınız, pazarda yeni bir rakip belirdi, ya da kategorinin dili değişti —
    örneğin sektör "yapay zeka destekli" ifadesini kullanmaya başladı. Güncellerken
    eski satırları silmeyin; yeni satırları ayrı bir blok olarak ekleyin ve
    ölçümde iki bloğu ayrı raporlayın. Böylece geçmiş serinin sürekliliği bozulmaz.
  </p>

  <p>
    Seti nerede tuttuğunuz da ölçümün ömrünü belirliyor. Basit bir tablo yeterli:
    her satırda prompt metni, kategorisi, dili, sete eklenme tarihi ve hangi
    kaynaktan geldiği. Kaynak sütununu atlamayın — altı ay sonra "bu soruyu neden
    ekledik" tartışması çıktığında cevabı orada bulursunuz. Aynı tabloya her ölçüm
    turunun sonucunu ayrı sütun olarak eklerseniz, ay ay karşılaştırma kendiliğinden
    oluşur.
  </p>

  <p>
    Türkçe ve İngilizce ayrı setler gerektiriyor. Aynı sorunun Türkçe ve İngilizce
    hâli farklı kaynak havuzlarını tetikliyor, dolayısıyla ikisi tek sette
    birleştirildiğinde ortaya çıkan yüzde hiçbir şey anlatmıyor. Yurt dışına satış
    yapan bir markanın iki seti de izlemesi gerekir; yalnız yerel pazarda
    çalışıyorsanız Türkçe set yeterli, ama İngilizce setten örneklem almak modelin
    kategoriyi nasıl kurduğunu görmek için yine de faydalı.
  </p>


  <h2 id="bicim-etkisi">Prompt biçimi sonucu değiştirir</h2>

  <p className="bolum-cevap">
    Aynı ihtiyacı iki farklı cümleyle sorduğunuzda iki farklı kaynak listesi
    alırsınız. Bu bir aksaklık değil, dil modellerinin çalışma biçimi. Cümlenin
    kuruluşu, kısıtların sırası, örnek verilip verilmemesi — hepsi çıktıyı
    kaydırıyor. Ölçüm tasarımınız bu oynaklığı hesaba katmıyorsa, tek bir cümleyle
    aldığınız sonucu kategorinin tamamına genellemiş olursunuz ve o genelleme
    çoğu zaman tutmuyor.
  </p>

  <p>
    Etkinin büyüklüğü model davranışı üzerine yapılan çalışmalarda net biçimde
    gösterildi: few-shot düzeneklerde yalnızca biçimlendirmeyi değiştirmek doğruluk
    üzerinde çarpıcı farklar üretiyor, hatta verilen örneklerin sırasını değiştirmek
    bile sonucu ciddi biçimde kaydırıyor.
    {/* kaynak: K87 */}
    Ölçüm açısından çıkarım şu: tek bir prompt'la "kategoride görünürlüğüm şu"
    demek istatistiksel olarak temelsiz. Aynı ihtiyacı en az iki üç varyantla
    sormanız, sonucu o varyantların ortalaması üzerinden okumanız gerekiyor.
  </p>

  <p>
    İkinci bulgu daha da doğrudan iş yükü yaratıyor: bir modelde iyi çalışan prompt
    yapısı, başka bir modelde performansı düşürebiliyor.
    {/* kaynak: K87 */}
    Setinizi ChatGPT'de kalibre edip aynı cümleleri Gemini'ye taşıdığınızda
    aldığınız sonuç, Gemini'nin gerçek davranışını değil sizin ChatGPT'ye göre
    şekillenmiş cümlelerinizi ölçüyor olabilir. Pratik çözüm, setin anlamını sabit
    tutup ifadesini platform başına gözden geçirmek: aynı soru, o platformda doğal
    duran cümleyle.
  </p>

  <p>
    Varyant üretirken üç ekseni değiştirin — kısıt sayısı (kısıtsız / iki kısıtlı),
    soru biçimi (emir kipi / soru kipi) ve çıktı beklentisi (liste isteyen / serbest
    metin isteyen). Bu üç eksenin kombinasyonları setinizi şişirmeden varyasyon
    verir.
  </p>


  <h2 id="olcume-baglama">Prompt seti ölçümün girdisidir</h2>

  <p className="bolum-cevap">
    Prompt araştırması kendi başına bir çıktı üretmez. Ürettiği şey,
    <Link href="/geo/geo-kpi-olcumu">GEO ölçüm çerçevesinin</Link>
    girdisi olan soru listesidir. Görünürlük oranı, atıf payı ve cevap payı gibi
    metriklerin hepsi "hangi sorgularda" sorusuna bir cevap ister; o cevabı prompt
    seti verir. Sırayı ters kurmak yaygın bir hata: önce araç seçilir, sonra aracın
    önerdiği sorgularla ölçüm başlar ve ekip kendi müşterisinin sormadığı soruları
    aylarca izler.
  </p>

  <p>
    Setin kalitesi doğrudan metriğin kalitesi demek. Yalnızca marka prompt'larından
    oluşan bir set size sürekli yüksek yüzdeler gösterir ve hiçbir şey öğretmez.
    Yalnızca zor kategori sorularından oluşan bir set aylarca sıfır üretir ve ekibi
    yorar. Dört kategorinin dengesi, panonun okunabilir olmasını sağlayan şey.
  </p>

  <p>
    Ölçümü nereden başlatacağınız konusunda pratik bir tavsiye: Perplexity'den
    başlayın. Her cevabın altında kaynakları açıkça listelediği için atıf sayımı
    manuel olarak yapılabilir durumda.
    {/* kaynak: K99 */}
    ChatGPT tarafında kaynak gösterimi sorguya ve moda göre değiştiği için aynı
    sayım daha kırılgan; orada atıf yerine metin içi anılmayı taban almak daha
    sağlıklı. Setinizin ilk turunu Perplexity'de çalıştırıp yöntemi oturttuktan
    sonra diğer platformlara genişletmek, ekibin ölçüme alışması açısından da
    kolaylık sağlıyor.
  </p>

  <p>
    Trafik tarafı ayrı bir katman.
    <Link href="/geo/ga4-ai-trafigi">GA4'te yapay zeka
    yönlendirmelerini ayrıştırmak</Link> prompt setinizle doğrudan eşleşmez — hangi
    prompt'un tıklama getirdiğini göremezsiniz. İki veriyi yan yana koyup korelasyon
    aramak yerine, prompt setini görünürlük tarafında, GA4'ü tıklama tarafında ayrı
    ayrı okuyun.
  </p>

  <p>
    Setin hangi kategorisinde zayıfsanız yapılacak iş de değişiyor. Kategori ve
    karşılaştırma prompt'larında görünmüyorsanız sorun genellikle kendi sitenizde
    değil; üçüncü taraf kaynaklarda adınızın geçmemesinde.
    <Link href="/geo/dijital-pr-ai-atif">Dijital PR ile atıf
    kazanma</Link> tarafı bu boşluğu kapatan çalışma. Marka prompt'larında zayıflık
    ise varlık tanımlarınızın eksik olduğuna işaret eder.
  </p>


  <h2 id="turkiye">Türkiye katmanı: Türkçe prompt'ların kendine özgü hâlleri</h2>

  <p className="bolum-cevap">
    Türkçe prompt seti kurarken İngilizce yöntemi çevirerek ilerlemek işe yaramıyor.
    Türkçe soruların cümle yapısı, terim tercihleri ve modelin bu sorulara hangi
    kaynaklardan cevap ürettiği farklı çalışıyor. İngilizce setin birebir çevirisi
    gramer olarak doğru ama davranış olarak yanlış bir liste üretiyor. Üç konuya
    ayrı dikkat gerekiyor.
  </p>

  <p>
    Birincisi cümle yapısı. Türkçe soru sonda toplanıyor — kısıtlar başta sıralanıp
    asıl soru en sona bırakılıyor: "Şirketimiz 15 kişi, ayda 200 fatura kesiyoruz,
    e-ticaret entegrasyonu da lazım, hangi ön muhasebe programını önerirsin?"
    İngilizce'de soru genellikle başta duruyor ve kısıtlar arkadan geliyor.
    Setinizi kurarken Türkçe cümleleri bu doğal sırayla yazın; İngilizce kalıbı
    Türkçeye giydirmek yapay bir metin üretiyor ve o metin gerçek kullanıcı
    davranışını temsil etmiyor.
  </p>

  <p>
    İkincisi ve daha kritik olanı: Türkçe sorup İngilizce kaynaktan cevap alma
    durumu. Kullanıcı Türkçe soruyor, model Türkçe cevaplıyor, ama cevabı kurduğu
    kaynaklar İngilizce. Bu, Türkçe içeriğin zayıf olduğu niş kategorilerde neredeyse
    kural. Sonucu şu: Türkçe prompt'ta görünmemenizin sebebi Türkçe içeriğinizin
    yetersizliği olmayabilir — modelin o soruya İngilizce kaynaklardan cevap
    üretiyor olması da olabilir. Ölçüm yaparken kaynak listesinin dilini de kaydedin.
    Kaynakların çoğu İngilizce çıkıyorsa, o kategoride Türkçe içerik üreterek boşluk
    doldurma fırsatı var demektir.
  </p>

  <p>
    Üçüncüsü terim karşılıkları. Sektörel terimlerin Türkçede çoğu zaman iki üç
    karşılığı dolaşıyor ve kullanıcılar hepsini kullanıyor: "bulut" ve "cloud",
    "ön muhasebe" ve "pre-accounting", "e-ihracat" ve "cross-border". Setinizde
    tek bir varyantı sabitlerseniz ölçüm yanlı olur. Bir ihtiyaç için hangi terimin
    ne kadar yaygın olduğunu Search Console verinizden görebilirsiniz; en yaygın
    ikisini sete ayrı satır olarak koyun.
  </p>

  <p>
    Sektör terimlerinin karşılığı konusunda bir tuzak daha var: resmi terim ile
    halk arasındaki terim ayrışıyor. Mevzuatta "elektronik belge saklama" geçen
    hizmet, kullanıcının ağzında "e-arşiv saklama" oluyor. Setinizi resmi terimlerle
    kurarsanız kimsenin sormadığı soruları ölçersiniz. Kural şu: müşteri hangi
    kelimeyi kullanıyorsa sette o kelime durur, kurumsal metinlerinizde hangisi
    geçtiği ayrı mesele.
  </p>

  <p>
    Türkçe karakter meselesi de sessiz bir sorun. Kullanıcıların bir kısmı
    "şirketim için" yerine "sirketim icin" yazıyor. Modeller bunu genellikle doğru
    yorumluyor, ama setinizin bir iki satırında bu biçimi bilerek tutmak, gerçek
    kullanım koşullarını temsil etmesi açısından değerli.
  </p>


  <h2 id="sss">Sıkça Sorulan Sorular</h2>

  <h3>Prompt araştırması anahtar kelime araştırmasının yerini tamamen alacak mı?</h3>
  <p>
    Hayır, ikisi paralel yürüyecek. Klasik arama hacmi düşse bile sıfırlanmıyor ve
    anahtar kelime verisi hâlâ prompt araştırmasının en somut hammaddesi. Değişen
    şey ağırlık: bütçenin ve dikkatin bir kısmı hacim tablolarından soru
    listelerine kayıyor.
  </p>

  <h3>Prompt hacmi ölçen bir araç var mı?</h3>
  <p>
    Gerçek anlamda yok. Bazı GEO araçları "prompt hacmi" adı altında rakam veriyor
    ama bunlar asistan sorgu günlüğünden değil, kendi modellerinden ya da klasik
    arama verisinden türetilmiş tahminler. Karar verirken bu rakamları mutlak
    doğru saymayın; yön göstergesi olarak kullanın.
  </p>

  <h3>Kaç prompt yeterli?</h3>
  <p>
    Manuel ölçüm için 20–30 satır makul. Dört kategoriyi kabaca eşit dağıtırsanız
    her kategoriye altı yedi satır düşer ve bu, tek kişinin ayda bir çalıştırabileceği
    bir yük. Otomatik ölçüm kuruyorsanız sayıyı artırabilirsiniz, ama setin
    kategori dengesi bozulmadığı sürece.
  </p>

  <h3>Aynı prompt'u tekrar sorduğumda farklı cevap alıyorum, ölçüm nasıl güvenilir olur?</h3>
  <p>
    Değişkenlik modelin doğasında. Çözüm tek ölçümü doğru saymak değil, tekrarı
    yönteme dahil etmek: her prompt'u temiz oturumda, aynı gün içinde iki üç kez
    çalıştırıp sonucu görüldü/görülmedi biçiminde değil, kaç turda görüldü biçiminde
    kaydedin. Aylık raporda tek turluk sonuç yerine bu oran anlamlı.
  </p>

  <h3>Türkçe ve İngilizce setleri birleştirebilir miyim?</h3>
  <p>
    Birleştirmeyin. İki dil farklı kaynak havuzu tetikliyor ve ortak yüzde ikisinin
    de gerçeğini gizliyor.
  </p>

  <h3>Prompt setini kim hazırlamalı?</h3>
  <p>
    Setin ilk taslağını satış ve destek ekibiyle birlikte çıkarmak en verimlisi;
    gerçek müşteri cümlelerine erişimi olan onlar. Pazarlama ekibi taslağı kategori
    dengesine göre düzenler, ölçümü de yürütür. Yalnız pazarlama masasında yazılan
    setler kaçınılmaz olarak marka ve kategori prompt'larına kayıyor, problem
    prompt'ları eksik kalıyor.
  </p>

  <h3>Rakiplerin prompt setini görebilir miyim?</h3>
  <p>
    Doğrudan hayır. Ama rakibin hangi sorularda güçlü olduğunu kendi setinizi
    çalıştırırken görürsünüz: cevaplarda tekrar tekrar çıktığı sorgular, onun
    kazandığı alan. Bu, setinizi genişletirken de yön veriyor.
  </p>

  <h3>Prompt seti hazırlarken yapay zekadan yardım almak sonucu bozar mı?</h3>
  <p>
    Taslak üretmek için kullanmak sorun değil, tek kaynak yapmak sorun. Modelin
    ürettiği sorular kategorinin tipik dilini yansıtır; sizin müşterinizin
    özgül endişelerini yansıtmaz. Model çıktısını iskelet, satış kayıtlarınızı
    et olarak düşünün.
  </p>

  <p className="sayfa-cta">
    Prompt setini kurmak GEO çalışmasının ilk adımı; asıl iş o sorularda görünür
    hâle gelmek. Markanızın yapay zeka cevaplarındaki konumunu baştan sona ele
    almak isterseniz <Link href="/geo">GEO danışmanlığı sayfasına</Link> göz atın.
  </p>


            </article>
        </div>
    );
}
