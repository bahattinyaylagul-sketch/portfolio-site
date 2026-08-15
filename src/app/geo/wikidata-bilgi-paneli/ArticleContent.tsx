/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

const headings = [
    {
        "id": "uc-sistem",
        "text": "Üç sistem, tek zincir: Wikidata, Wikipedia, bilgi paneli"
    },
    {
        "id": "adim-adim",
        "text": "Markanız için bilgi paneli: adım adım"
    },
    {
        "id": "wikipedia-gerekli-mi",
        "text": "Wikipedia maddesi gerekli mi?"
    },
    {
        "id": "teshis",
        "text": "Panel gelmiyorsa: teşhis"
    },
    {
        "id": "yanlis-bilgi",
        "text": "Paneldeki yanlış bilgiyi düzeltme"
    },
    {
        "id": "turkiye",
        "text": "Türkiye katmanı: seyrek rekabet, dar kapsam"
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
                

  <h1>Wikidata ve Bilgi Paneli: Markanız İçin Google Bilgi Paneli Nasıl Alınır?</h1>

  <p className="first-answer">
    Bilgi paneli satın alınmaz, başvurulmaz, talep edilmez. Google, markanızı
    ayrı bir varlık olarak tanıdığına yeterince ikna olduğunda paneli kendisi
    üretir. Bu ikna sürecinin en somut aracı Wikidata: markanızın adını, sektörünü,
    kuruluş yılını ve resmi sitesini makine tarafından okunabilir biçimde,
    kaynaklarıyla birlikte kayda geçiren açık veri tabanı.
  </p>

  <aside className="tldr">
    <h2 className="tldr-baslik">TL;DR — Kısaca</h2>
    <p><strong>Panelin ön koşulu Wikipedia maddesi değil, Google'ın markanızı benzersiz bir varlık olarak ayırt edebilmesidir.</strong></p>
    <ul>
      <li>Wikidata'ya kayıt açmak için ünlü olmanız gerekmiyor; ciddi ve doğrulanabilir kaynaklarla tarif edilebilir olmanız yetiyor.</li>
      <li>Kaynaksız girilen iddialar silinir. Wikidata'da işi bitiren şey property'ler değil, referanslardır.</li>
      <li>Kendi şirketiniz hakkında Wikipedia maddesi açmayın — çıkar çatışması kuralı bunu açıkça sınırlıyor ve geri tepiyor.</li>
      <li>Türk markalarının büyük çoğunluğunun Wikidata kaydı yok. Rekabetin bu kadar seyrek olduğu başka bir görünürlük alanı kalmadı.</li>
    </ul>
  </aside>


  <h2 id="uc-sistem">Üç sistem, tek zincir: Wikidata, Wikipedia, bilgi paneli</h2>

  <p className="bolum-cevap">
    Bu üçü çoğu zaman tek bir şey sanılır. Değiller. Wikidata yapılandırılmış
    veriyi depolar, Wikipedia insanın okuyacağı ansiklopedik metni sunar, Google
    ise her ikisinden beslenip arama sonucunun sağındaki kartı üretir. Aralarındaki
    ilişki tek yönlü bir besleme zinciri: veri Wikidata'da doğar, Wikipedia onu
    gösterir, Google ikisini birden okur.
    {/* kaynak: K121 */}
  </p>

  <table>
    <thead>
      <tr>
        <th>Sistem</th>
        <th>Temel işlev</th>
        <th>Veri formatı</th>
        <th>Markaya etkisi</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Wikidata</td>
        <td>Yapılandırılmış varlık verisi depolar; her öğeye Q ile başlayan benzersiz bir kimlik atanır</td>
        <td>Makine tarafından okunabilir (JSON/RDF)</td>
        <td>Google bilgi grafiğinin birincil yapılandırılmış veri kaynağı{/* kaynak: K121 */}</td>
      </tr>
      <tr>
        <td>Wikipedia</td>
        <td>İnsan tarafından okunabilir ansiklopedik içerik sunar; sağdaki özet kutusu (infobox) temel bilgileri tablolar{/* kaynak: K122 */}</td>
        <td>Wiki metni + özet kutusu şablonları</td>
        <td>Güvenilirlik sinyali; <Link href="/seo/eeat-sinyalleri">E-E-A-T sinyallerine</Link> katkı</td>
      </tr>
      <tr>
        <td>Bilgi paneli</td>
        <td>Wikidata ve Wikipedia'dan çekilen veriyi arama sonucunda kart olarak gösterir</td>
        <td>Google bilgi grafiğinin çıktısı</td>
        <td>Marka görünürlüğünü ve varlık sinyalini doğrudan belirler</td>
      </tr>
    </tbody>
  </table>

  <p>
    Zincirin işleyişini görmenin en kolay yolu Wikipedia'daki bir şirket maddesine
    bakmak. Sağdaki kutuda yazan kuruluş yılı, merkez şehri ya da resmi site adresi
    çoğu zaman o maddenin metnine elle yazılmamıştır; şablon o değerleri Wikidata'daki
    kayıttan otomatik çeker.
    {/* kaynak: K121 */}
    Yani Wikidata'daki tek bir düzeltme, o veriyi kullanan bütün dil sürümlerine
    aynı anda yansır.
    {/* kaynak: K123 */}
  </p>

  <p>
    Google için bu düzenin anlamı şu: markanızı arayan bir kullanıcıya kart
    göstereceği zaman, kartın içindeki alanları dolduracak yapılandırılmış bir
    kaynağa ihtiyacı var. Web sitenizdeki "Hakkımızda" sayfası bunu tam olarak
    karşılamaz — orada yazan bilgi doğru olabilir ama teyit edilmemiştir.
    <Link href="/geo">GEO çalışmasının</Link> varlık katmanı tam olarak bu boşluğu kapatma
    işidir: markayı, hakkında konuşulan bir kelime olmaktan çıkarıp tanımlı bir
    varlığa dönüştürmek.
  </p>

  <p>
    Panelin içine bakınca zincir daha da somutlaşıyor. Kartın başlığındaki ad ve altındaki
    kısa tanım genellikle Wikidata'daki etiket ve açıklamadan; birkaç cümlelik özet metin
    Wikipedia'dan; kuruluş yılı, merkez, kurucu gibi satırlar yine Wikidata'dan geliyor.
    Alt taraftaki sosyal profil bağlantıları ise sitenizin işaretlemesi ve doğrulanmış
    hesaplarla ilişkili. Panelde gördüğünüz her satırın bir kaynağı var; hangi satırın
    nereden geldiğini bilmek, düzeltmeyi doğru yerde yapmanızı sağlar.
  </p>

  <p>
    Bir uyarıyla devam edelim. Wikidata kaydı panelin garantisi değil. Kayıt, Google'ın
    kullanabileceği bir kanıt sunar; kararı yine Google verir. Ama kaydı olmayan bir
    markanın panel alma ihtimali, kaydı olana göre belirgin biçimde düşüktür.
  </p>


  <h2 id="adim-adim">Markanız için bilgi paneli: adım adım</h2>

  <p className="bolum-cevap">
    Süreç altı adımda özetlenebilir ve sırası önemli. Önce markanın kim olduğunu
    netleştirirsiniz, sonra bunu Wikidata'ya kaydedersiniz, kaydı doğrulanabilir
    kaynaklara bağlarsınız, kendi sitenizden bu kayda link verirsiniz, dış profilleri
    aynı hikayeye hizalarsınız ve beklersiniz. Adımları atlamak işe yaramaz; her biri
    bir öncekinin üstüne oturuyor.
  </p>

  <h3>1. Varlığı netleştirin</h3>

  <p>
    Google, ne olduğunu çözemediği bir şey için kart üretmez. Marka adınız her yerde
    aynı mı yazılıyor? Şirket unvanınız ile pazarda kullandığınız ticari ad farklıysa
    hangisi asıl? Aynı ad başka bir sektörde başka bir firma tarafından da
    kullanılıyor mu?
  </p>

  <p>
    Bu soruların cevabı belirsizse önce orayı düzeltin. Adın "Nova" mı "Nova Teknoloji"
    mi "Nova Bilişim A.Ş." mi olduğuna karar verin, sonra siteden LinkedIn'e, faturadan
    basın bültenine kadar her yerde o kararı uygulayın. Varlık netleştirmenin bütün
    yöntemi <Link href="/geo/entity-seo">varlık SEO'su sayfasında</Link> ayrıntılı duruyor;
    burada tekrar etmiyorum.
  </p>

  <h3>2. Wikidata kaydını oluşturun</h3>

  <p>
    Wikidata'ya ücretsiz üye olup yeni öğe (item) açabilirsiniz. Öğeyi açtığınızda
    sistem otomatik olarak Q ile başlayan benzersiz bir kimlik atar; markanızın
    bilgi grafiğindeki adresi budur.
    {/* kaynak: K121 */}
  </p>

  <p>
    Buradaki en yaygın yanlış anlama, Wikipedia'nın kabul kriterlerini Wikidata'ya
    taşımak. Wikipedia bir konunun bağımsız kaynaklarda <em>geniş biçimde</em> ele
    alınmış olmasını ister; bu, orta ölçekli bir şirket için genellikle aşılamayan
    bir eşiktir. Wikidata'nın eşiği başka: öğenin açıkça tanımlanabilir bir varlığa
    karşılık gelmesi ve ciddi, herkese açık kaynaklarla tarif edilebilir olması
    yeterli. Ticaret sicilinde kayıtlı, sektör basınında adı geçen bir şirket bu
    eşiği rahatlıkla geçer.
    {/* kaynak: K120 */}
  </p>

  <p>
    Kaydı açtıktan sonra doldurulması gereken temel property'ler şunlar:
  </p>

  <table>
    <thead>
      <tr>
        <th>Property</th>
        <th>Ne anlatır</th>
        <th>Marka için örnek değer</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>P31 — instance of</td>
        <td>Bu öğe <em>ne</em>? Kaydın omurgası; eksikse öğe sınıflandırılamaz</td>
        <td>işletme / yazılım şirketi</td>
      </tr>
      <tr>
        <td>P856 — official website</td>
        <td>Resmi site adresi; kaydı sizin mülkünüze bağlayan alan</td>
        <td>https://ornekmarka.com</td>
      </tr>
      <tr>
        <td>P17 — country</td>
        <td>Ülke</td>
        <td>Türkiye</td>
      </tr>
      <tr>
        <td>P571 — inception</td>
        <td>Kuruluş tarihi</td>
        <td>2014</td>
      </tr>
      <tr>
        <td>P159 — headquarters location</td>
        <td>Genel merkezin bulunduğu yer</td>
        <td>İstanbul</td>
      </tr>
    </tbody>
  </table>

  <p>
    Beşi minimum. Emin olduğunuz başka alanları da ekleyebilirsiniz — sektör, kurucu,
    logo gibi. Emin olmadığınız hiçbir property'yi tahminle doldurmayın; yanlış veri,
    eksik veriden daha pahalıya patlar.
    {/* kaynak: K120 */}
  </p>

  <p>
    Öğeyi açmadan önce arama kutusuna marka adınızı yazın. Wikidata'da aynı varlık için
    ikinci bir kayıt açmak, bilgi grafiğinde tam olarak kaçınmak istediğiniz şeyi üretir:
    Google'ın hangisinin sizi temsil ettiğini bilemediği iki rakip kayıt. Zaten bir kayıt
    varsa onu düzenleyin; benzer ama farklı bir varlığa aitse yeni kaydınızın açıklamasını
    ayrıştırıcı yazın.
  </p>

  <h3>3. Her iddiayı kaynağa bağlayın</h3>

  <p>
    Adımların en kritiği ve en çok atlananı bu. Wikidata'da kaynaksız girilen iddia
    kalıcı değildir: itiraz görür, işaretlenir, çoğu zaman silinir. Tümüyle kaynaksız
    kurulmuş bir şirket öğesi ise reklam kaydı sayılıp topluca silinme riski taşır.
  </p>

  <p>
    Kaynak derken kendi sitenizi kastetmiyorum. Resmi site yalnızca P856 gibi
    doğrudan kendisiyle ilgili alanlarda geçerli sayılır. Kuruluş yılı, merkez,
    çalışan sayısı gibi iddialar için bağımsız ve erişilebilir kaynak gerekir:
    ticaret sicil kaydı, borsa bildirimleri, üniversite ya da kamu kurumu yayınları,
    haber siteleri, sektörel yayınlar.
  </p>

  <p>
    Referansı iliştirmek zor değil: iddianın altındaki referans alanına kaynağın adresini,
    yayıncısını ve yayın tarihini girersiniz. Zahmetli olan kısmı kaynağı bulmak. Pratik
    bir kolaylık şu — bir haberde hem kuruluş yılınız hem merkeziniz geçiyorsa aynı
    referansı iki ayrı iddiaya bağlayabilirsiniz. Her alan için ayrı kaynak aramak
    gerekmiyor.
  </p>

  <p>
    Böyle kaynaklarınız yoksa sorun Wikidata'da değil. O zaman iş, önce
    <Link href="/geo/dijital-pr-ai-atif">dijital PR ile atıf üretmeye</Link> döner: markayı
    üçüncü tarafların yazdığı, tarihi ve künyesi olan metinlerde görünür kılmak.
    Wikidata kaydı o metinlerin makine tarafından okunabilir özetidir; özeti
    yazabilmek için önce metinlerin olması gerekiyor.
  </p>

  <h3>4. Kendi sitenizden kayda bağlanın</h3>

  <p>
    Wikidata'daki öğe ile sitenizin aynı varlığa ait olduğunu Google'a açıkça
    söyleyin. Bunun yolu Organization schema'sındaki <code>sameAs</code> alanı:
  </p>

  <pre><code>{"{"}
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Örnek Marka",
  "url": "https://ornekmarka.com",
  "sameAs": [
    "https://www.wikidata.org/wiki/Q00000000",
    "https://www.linkedin.com/company/ornekmarka",
    "https://www.crunchbase.com/organization/ornekmarka"
  ]
{"}"}</code></pre>

  <p>
    Bağlantı iki yönlü olmalı: Wikidata kaydında resmi siteniz, sitenizde Wikidata
    kaydınız. Tek yönlü bir işaret, doğrulanmamış bir iddia olarak kalır. Schema
    tarafının bütünü <Link href="/geo/yapay-zeka-schema" data-pending="true">yapay zeka
    için schema kurulumu sayfasında</Link>.
  </p>

  <h3>5. Dış profilleri hizalayın</h3>

  <p>
    Google, panel üretmeden önce markayı birden fazla yerde görmek ister ve gördüğü
    yerlerde aynı bilgiyi bulmak ister. Google Business Profile, LinkedIn şirket
    sayfası, Crunchbase kaydı, varsa sektörel dizinler — bunların hepsinde ad, kuruluş
    yılı, adres ve sektör tanımı birbirini tutmalı.
  </p>

  <p>
    Küçük görünen tutarsızlıklar zarar veriyor: LinkedIn'de 2015, Crunchbase'de 2016
    yazan bir kuruluş yılı, Google'ın kayıtları eşleştirme güvenini düşürür. Bu
    profilleri panel için doldurulan formlar gibi değil, aynı iddianın farklı yerlerde
    tekrarı gibi düşünün. Marka anılmalarının
    <Link href="/geo/ai-marka-mention-etkisi">yapay zeka görünürlüğüne
    etkisi</Link> de aynı tutarlılık mantığına dayanıyor.
  </p>

  <h3>6. Bekleyin ve izleyin</h3>

  <p>
    Panel aynı hafta gelmez. Google'ın tarama ve işleme döngüsüne bağlı olarak süreç
    haftalar, bazen aylar sürer; kesin bir takvim kamuya açıklanmış değil. Bu sürede
    yapılacak iş yeni property eklemek değil, marka adı sorgusunun sonuç sayfasını ve
    <Link href="/geo/geo-kpi-olcumu">GEO ölçüm panonuzu</Link> düzenli kontrol etmek.
  </p>

  <p>
    Bir de şu var: kayıt açıldıktan sonra kimse ona bakmıyor. Şirket adres değiştiriyor,
    yeni bir yatırım turu alıyor, unvanı değişiyor — Wikidata'daki değerler üç yıl önceki
    halinde kalıyor. Panelde eski merkez şehrinin yazmasının en yaygın sebebi bu. Yılda
    bir kez kaydı açıp güncelliğini kontrol etmeyi kurumsal takvime yazın.
  </p>

  <p>
    Aynı marka adı sorgusunu <Link href="/geo/chatgpt-geo">ChatGPT gibi üretken
    arayüzlerde</Link> de deneyin. Modelin markanızı doğru sektörde ve doğru tanımla
    anlatmaya başlaması, çoğu zaman panelden önce gelen bir sinyaldir.
  </p>


  <h2 id="wikipedia-gerekli-mi">Wikipedia maddesi gerekli mi?</h2>

  <p className="bolum-cevap">
    Hayır, zorunlu değil — ve peşine düşmeniz de doğru olmaz. Wikipedia maddesi paneli
    güçlendirir, çünkü panelin altındaki açıklama metni çoğu zaman oradan gelir. Ama
    maddenin kabul eşiği Wikidata'nınkinden kat kat yüksektir ve markanın kendi hakkında
    madde açması Wikipedia kurallarının açıkça sınırladığı bir davranıştır. Riski
    getirisinden büyük.
  </p>

  <p>
    Wikipedia'nın çıkar çatışması kılavuzu, kişilerin kendileri, işverenleri, müşterileri
    ya da mali bağlarının olduğu konular hakkında madde yazmasını güçlü biçimde
    caydırır. Ücret karşılığı düzenleme yapan biri bunu beyan etmek zorundadır;
    beyan etmeden yapılan düzenleme kullanım şartlarının ihlalidir.
  </p>

  <p>
    Uygulamada olan şu: ajansa yazdırılan tanıtım kokan madde birkaç gün içinde
    silinir. Silme tartışması arşivde kalıcı olarak durur ve markanın adı, "Wikipedia'da
    reklam maddesi açmaya çalışan şirket" kaydıyla eşleşir. Kazanılan görünürlük,
    kaybedilen itibarın yanında küçük kalıyor.
  </p>

  <p>
    Doğru yaklaşım pasif ama sağlam: Wikipedia maddesi bir hedef değil, bir sonuçtur.
    Bağımsız gazetecilerin, akademisyenlerin, sektör yayınlarının markanız hakkında
    yeterince yazması durumunda madde er ya da geç bir gönüllü tarafından açılır. Sizin
    işiniz o kaynakları var etmek. Bu arada Wikidata kaydınız zaten çalışıyor olur —
    Wikidata için maddeye ihtiyacınız yok.
  </p>

  <p>
    Madde açıldıysa da doğrudan düzenlemeye girişmeyin. Yanlış bilgi varsa maddenin
    tartışma sayfasında bağlantınızı açıkça belirterek düzeltme talebi bırakın. Yavaş
    işler ama iz bırakmaz.
  </p>


  <h2 id="teshis">Panel gelmiyorsa: teşhis</h2>

  <p className="bolum-cevap">
    Aylar geçti ve hâlâ kart yoksa, sorun genellikle şu üç koşuldan birindedir: Google
    markanızın ne olduğunu net biçimde tanımlayamıyordur, marka adınız için yeterli
    arama talebi yoktur ya da aynı adı taşıyan başka bir varlık sizi gölgeliyordur.
    Kayda yeni property eklemeden önce bu üçünü sırayla eleyin; çünkü hangisi eksikse
    çözüm tamamen farklı bir yerde.
  </p>

  <p>
    <strong>Net tanım.</strong> Wikidata kaydınızda P31 boşsa ya da fazla genel bir
    değer taşıyorsa Google öğeyi bir kategoriye yerleştiremez. "İşletme" demek "yazılım
    şirketi" demekten daha zayıf bir sinyaldir. Kaydın hangi cümleyi kurduğuna bakın:
    "Bu, Türkiye'de kurulmuş bir X şirketidir" cümlesi property'lerden okunabiliyor mu?
  </p>

  <p>
    <strong>Arama talebi.</strong> Google, kimsenin aramadığı bir marka için kart
    üretmez. Ayda birkaç yüz marka sorgusu bile bulunmayan bir işletmede eksik olan
    şey veri değil, bilinirlik. Bu durumda Wikidata'ya harcanan efor yanlış yere
    gidiyor demektir; talep üretmek önce gelir.
  </p>

  <p>
    <strong>Çakışan varlık.</strong> Marka adınız bir yer adı, yaygın bir kelime ya da
    başka sektörde bilinen bir şirketle aynıysa Google büyük olasılıkla o diğer varlığı
    gösterir. Çözüm ad değiştirmek değil; markayı sektörüyle birlikte anılır kılmak,
    yani kaydı ve dış profilleri sektör bağlamını taşıyacak şekilde zenginleştirmek.
  </p>

  <p>
    Kayda ulaşmış ama yanlış görünen belirtiler de var. Wikipedia özet kutusunda düz
    metin yerine Q ile başlayan bir kimlik görünüyorsa, o değerin etiketi Wikidata'da
    eksiktir — genellikle İngilizce etiket girilmemiştir.
    {/* kaynak: K121 */}
    Kutu tamamen boşsa Wikidata öğesi yeterince doldurulmamış ya da sayfa henüz
    güncellenmemiştir; Wikidata'daki değişikliklerin Wikipedia tarafına yansıması
    anlık olmayabilir, Google tarafına yansıması ise ayrı bir gecikme katmanıdır.
    {/* kaynak: K121 */}
  </p>


  <h2 id="yanlis-bilgi">Paneldeki yanlış bilgiyi düzeltme</h2>

  <p className="bolum-cevap">
    Panelde yanlış kuruluş yılı, eski logo, hatalı sektör tanımı ya da devredilmiş bir
    marka için eski sahibin adını görüyorsanız önce Wikidata'ya gidin. Google bilgi
    grafiği büyük ölçüde oradan besleniyor; çıktıyı düzeltmenin en kısa yolu kaynaktaki
    değeri düzeltmek. Paneli değil, paneli besleyen veriyi hedefleyin.
    {/* kaynak: K121 */}
  </p>

  <p>
    Wikidata'daki ilgili property'yi düzelttiğinizde Wikipedia özet kutusu güncel
    veriyi otomatik çeker. Düzeltmeye mutlaka kaynak iliştirin; kaynaksız yapılan
    değişiklik geri alınabilir ve aynı yanlış veri geri gelir.
  </p>

  <p>
    Panelin altındaki "Suggest an edit" / "Düzenleme öner" bağlantısı da bir yol ama
    daha yavaş işliyor ve talebin akıbetini takip edemiyorsunuz. Markanın resmi
    temsilcisiyseniz panelde doğrulama başvurusu yapıp düzenleme önerilerinizi öncelikli
    hale getirebilirsiniz; yine de Wikidata düzeltmesi ile birlikte yürütmek en sağlıklısı.
  </p>

  <p>
    Wikidata ile Wikipedia'daki değerler çelişirse özet kutusunda Wikidata'daki değer
    baskın gelir.
    {/* kaynak: K121 */}
    Gerçekten tartışmalı bir olgu varsa — kuruluş yılı iki ayrı kaynakta farklı
    yazıyorsa mesela — alanı boş bırakmak yerine tartışmalı olduğunu belirten
    işaretle kaydetmek daha doğru.
    {/* kaynak: K123 */}
  </p>


  <h2 id="turkiye">Türkiye katmanı: seyrek rekabet, dar kapsam</h2>

  <p className="bolum-cevap">
    Türkçe tarafta iki yapısal durum var ve ikisi de aynı sonuca çıkıyor. Türkçe
    Wikipedia'nın kapsamı İngilizceye göre dar, kurumsal maddeler seyrek; Türk
    markalarının çok büyük bölümünün ise hiç Wikidata kaydı yok. Yani bu alandaki
    rekabet, başka hiçbir görünürlük kanalında olmadığı kadar zayıf — ve bu durum
    kalıcı değil.
  </p>

  <p>
    Etiket meselesiyle başlayın. Wikidata öğenizin hem Türkçe hem İngilizce etiketi ve
    açıklaması girilmiş olmalı. Yalnız Türkçe girerseniz İngilizce ortamlarda kayıt
    kimlik numarasıyla görünür ve okunamaz hale gelir; yalnız İngilizce girerseniz Türkçe
    sonuçlarda markanın adı doğal görünmez. İkisi de birer dakikalık iş ve atlanması
    en sık rastlanan eksik.
    {/* kaynak: K121 */}
  </p>

  <p>
    Açıklama alanına da özen gösterin. "şirket" yerine "İstanbul merkezli lojistik
    yazılımı şirketi" gibi ayırt edici bir cümle, aynı adı taşıyan varlıklardan
    ayrışmanızı sağlar.
  </p>

  <p>
    Kaynak tarafında Türkiye'nin kendine has bir avantajı var: kurumsal kayıtların önemli
    bölümü kamuya açık. Ticaret Sicili Gazetesi, halka açık şirketler için KAP bildirimleri,
    kurum ve birlik yayınları, tarihli haber arşivleri — hepsi Wikidata'da referans olarak
    kullanılabilir nitelikte. İngilizce kaynak bulmak zorunda değilsiniz; Wikidata dil
    ayrımı yapmıyor, kaynağın ciddi ve erişilebilir olmasını arıyor.
  </p>

  <p>
    Türkçe Wikipedia'nın darlığı ilk bakışta dezavantaj gibi duruyor ama pratikte
    Wikidata'nın önemini artırıyor: Türk markalarının çoğu için Wikipedia maddesi
    gerçekçi bir hedef değilken, Wikidata kaydı bugün açılabilecek bir iş. Sektörünüzdeki
    beş rakibinizin adını Wikidata'da aratın. Muhtemelen çoğunun kaydı çıkmayacak.
    Aynı aramayı üç yıl sonra yaptığınızda tablo aynı olmayacak.
  </p>


  <h2 id="sss">Sıkça Sorulan Sorular</h2>

  <h3>Wikidata kaydım olmadan bilgi paneli alabilir miyim?</h3>
  <p>
    Teknik olarak mümkün ama olasılığı belirgin biçimde düşük. Google bilgi grafiği
    Wikidata'yı birincil yapılandırılmış varlık kaynağı olarak kullanıyor. Kaydınız
    yoksa güçlü schema işaretlemesi, tutarlı dış profiller ve bağımsız kaynaklardaki
    anılmalar üzerinden panel gelebilir; ama bunları zaten yapıyorsanız Wikidata kaydını
    açmamak için bir sebebiniz kalmıyor.
  </p>

  <h3>Wikidata öğemi kendim oluşturabilir miyim?</h3>
  <p>
    Evet. Wikidata'da kendi şirketiniz için öğe açmak, Wikipedia'da kendiniz hakkında
    madde yazmakla aynı kategoride değil. Uyulması gereken kural şu: girdiğiniz her
    iddia doğrulanabilir olsun, pazarlama dili kullanmayın, kaynak iliştirin. "Türkiye'nin
    lider çözüm ortağı" gibi bir açıklama kaydı doğrudan silinme adayı yapar.
  </p>

  <h3>Bilgi paneli ne kadar sürede gelir veya güncellenir?</h3>
  <p>
    Kesin süre yok. Google'ın tarama ve işleme döngüsüne bağlı; düzeltmelerin yansıması
    günler ile haftalar arasında değişebiliyor, sıfırdan panel oluşması genellikle daha
    uzun sürüyor.
  </p>

  <h3>Şirketim hakkında Wikipedia maddesi yazdırabilir miyim?</h3>
  <p>
    Yazdırabilirsiniz ama kalması pek olası değil. Ücret karşılığı düzenleme yapan kişi
    bu ilişkiyi beyan etmek zorunda; beyan edilmeyen düzenleme kullanım şartlarının
    ihlali sayılıyor. Silme tartışmaları da arşivde kalıcı olarak duruyor. Maddeyi hedef
    almak yerine, maddenin dayanacağı bağımsız kaynakları üretmeye çalışın.
  </p>

  <h3>Wikidata ile Wikipedia'daki veriler çelişirse panele ne yansır?</h3>
  <p>
    Wikidata merkezi depo olduğu için özet kutusunda Wikidata'daki değer baskın gelir ve
    her dil sürümünü tek tek güncelleme ihtiyacını ortadan kaldırır. Bilgi paneli
    tarafında da ağırlık Wikidata'dadır. Çelişkinin kaynağı gerçek bir belirsizlikse
    değeri tartışmalı olarak işaretlemek, silmekten iyidir.
  </p>

  <h3>Türkçe etiket girmek yeterli mi?</h3>
  <p>
    Değil. Hem Türkçe hem İngilizce etiket ve açıklama girin. İngilizce etiket eksikse
    kayıt İngilizce ortamlarda kimlik numarasıyla görünür.
  </p>

  <h3>Panel geldi ama trafiğim artmadı, normal mi?</h3>
  <p>
    Normal. Panel doğrudan tıklama getiren bir birim değil; markanın tanınan bir varlık
    olduğunu gösteren bir işaret. Değeri marka sorgularındaki tıklama oranında, rakiple
    aynı ekranda görünmede ve üretken motorların markanızı doğru tarif etmesinde ortaya
    çıkar. Bunları ölçmek için GEO ölçüm çerçevesine bakmanız gerekir.
  </p>

  <h3>Kaydımı açtım ama hiçbir şey olmuyor, yanlış mı yaptım?</h3>
  <p>
    İlk kontrol edilecek şey referanslar. Kaynaksız bir kayıt Google için düşük güvenli
    veridir ve büyük ihtimalle hiç kullanılmaz. İkinci kontrol P31 değerinin yeterince
    ayırt edici olup olmadığı. Üçüncüsü de sitenizdeki Organization schema'sının
    <code>sameAs</code> ile kayda geri bağlanıp bağlanmadığı.
  </p>


  <p className="cta">
    Markanızın varlık altyapısını kurmak, bilgi paneli almak ya da mevcut panelin
    yanlışlarını düzeltmek için <Link href="/geo">GEO danışmanlığı sayfasına</Link> göz atın.
  </p>


            </article>
        </div>
    );
}
