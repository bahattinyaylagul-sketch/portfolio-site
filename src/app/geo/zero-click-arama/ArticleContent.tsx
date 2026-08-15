/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

const headings = [
    {
        "id": "nedir",
        "text": "Zero-click arama nedir, ne değildir"
    },
    {
        "id": "olcek",
        "text": "2026'da ölçek: rakamlar ne söylüyor"
    },
    {
        "id": "olcumun-sinirlari",
        "text": "Bu rakamlar nasıl ölçüldü — ve nereye kadar geçerli"
    },
    {
        "id": "sektor-haritasi",
        "text": "Risk sektöre göre dağılıyor"
    },
    {
        "id": "iki-yuzey",
        "text": "AI Bakışı ile AI Modu aynı tehdit değil"
    },
    {
        "id": "milyar-mi-yuzde-mi",
        "text": "Bir milyar kullanıcı mı, %0,34 mü?"
    },
    {
        "id": "kalan-trafik",
        "text": "Kaybedilen tıklama ile kaybedilen gelir aynı şey değil"
    },
    {
        "id": "turkiye",
        "text": "Türkiye bu eğrinin neresinde?"
    },
    {
        "id": "ne-yapmali",
        "text": "Ne ölçmeli, neyi değiştirmeli"
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
    Zero-click arama, kullanıcının aradığı yanıtı sonuç sayfasında alıp hiçbir siteye
    tıklamadan ayrılmasıdır. 2026 clickstream ölçümlerinde Google aramalarının yaklaşık
    %68'i böyle bitiyor. Bu oran tek başına gelir kaybı demek değil: tıklama sayısı
    düşerken kalan tıklamaların ticari değeri yükseliyor. Kritik soru, hangi sorgu
    türünde kaybettiğiniz.
    {/* kaynak: K81 */}
  </p>
                <aside className="tldr mb-12 p-6 md:p-8 bg-violet-50/50 border border-violet-100/80 rounded-3xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-violet-600 text-white text-xs font-black uppercase tracking-widest rounded-full">TL;DR</span>
                        <span className="tldr-baslik text-sm font-bold text-violet-800">Kısaca</span>
                    </div>
                    <p className="text-gray-800 font-bold text-[15px] leading-relaxed mb-4"><strong>Tıklama kaybı gerçek ama tekdüze değil; kaybı doğrudan gelir kaybına çevirmek 2026'nın en pahalı ölçüm hatası.</strong></p>
                    <ul className="space-y-3.5 text-gray-700 text-[15px] leading-relaxed list-none pl-0 my-0"><li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Google aramalarının %68'i tıklamasız kapanıyor. İki yılda 7,5 puanlık artış var, mobilde oran %77'ye çıkıyor.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Risk sektöre göre dağılıyor: B2B teknoloji ve sağlıkta ağır, e-ticaret ve yerel işletmede şimdilik sınırlı.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>AI Modu'nun kullanıcı sayısı ile sorgu payı arasındaki uçurum, tehdidi hem abartmanın hem küçümsemenin kapısını açıyor. İkisi de yanlış.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Bu rakamların hiçbiri Türkiye ölçümü değil. AI Bakışı ve AI Modu ülkeye 18 Şubat 2026'da geldi; Türk siteleri eğrinin çok daha erken bir noktasında.</span></li></ul>
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
                    <h2 id="nedir">Zero-click arama nedir, ne değildir</h2>

  <p className="bolum-cevap">
    Bir arama, kullanıcı hiçbir organik veya ücretli sonuca tıklamadan sona eriyorsa
    zero-click sayılır. Ölçüm birimi ziyaretçi değil, sorgu. Yani "%68 tıklamasız"
    ifadesi kullanıcıların %68'inin siteye hiç gitmediği anlamına gelmez; aramaların
    %68'inin bir tıklama üretmeden kapandığını söyler. Bu ayrım, rakamı okurken
    yapılan en yaygın hatanın kaynağı.
  </p>

  <p>
    Tıklamasız arama yeni bir olgu değil. Hava durumu, döviz kuru, bir oyuncunun doğum
    tarihi — bunların yanıtı yıllardır sonuç sayfasında duruyor ve kimse tıklamıyordu.
    Değişen şey, yanıtı sayfada verilebilen soru kümesinin genişlemesi. Üretken yüzeyler
    artık "hangi CRM'i seçmeliyim", "şu iki ilaç birlikte kullanılır mı", "bu hatayı nasıl
    çözerim" gibi, cevabı tek bir olgu olmayan sorulara da paragraf yazıyor. Bu sorular
    tam olarak içerik üreticilerinin trafik kazandığı sorulardı.
    <Link href="/geo">GEO tarafında</Link> yaptığımız işin çıkış noktası da bu kayma.
  </p>

  <p>
    Terimi kullanırken iki şeyi karıştırmamak gerekiyor. Zero-click bir <em>sonuç sayfası
    davranışıdır</em>; yapay zeka özetleri onu hızlandıran etkenlerden biri, tek sebebi
    değil. Öne çıkan snippet'lar, bilgi panelleri, Google'ın kendi dikey ürünleri ve
    doğrudan yanıt kutuları yıllardır aynı yönde çalışıyordu. AI Bakışı ve AI Modu bu
    eğilimi icat etmedi, hızlandırdı. Terimler arasındaki sınırları
    <Link href="/geo/geo-seo-aeo-farki">SEO, GEO ve AEO farkı</Link>
    sayfasında ayrı ayrı ele aldım.
  </p>

  <p>
    Bir de sık karıştırılan ikinci bir şey var: zero-click ile "yapay zeka trafik kaybı"
    aynı ölçüm değil. Zero-click, aramanın Google içinde bitmesidir. Yapay zeka trafik
    kaybı ise kullanıcının aramayı hiç açmayıp doğrudan bir sohbet arayüzüne gitmesini de
    kapsar; ikincisi Search Console'da hiçbir iz bırakmaz, çünkü orada bir arama hiç
    gerçekleşmemiştir. Gösterimleriniz düşerken sıralamanız yerinde duruyorsa
    büyük ihtimalle ikinci olguya bakıyorsunuz.
  </p>


  <h2 id="olcek">2026'da ölçek: rakamlar ne söylüyor</h2>

  <p className="bolum-cevap">
    Clickstream panellerine göre 2026'da Google aramalarının %68,01'i tıklamasız
    kapanıyor. Günlük 8,5 milyar aramanın 5,51 milyarı hiçbir siteye trafik
    üretmiyor. Oran 2024'te %60,45'ti — iki yılda 7,56 puanlık artış. Aynı dönemde
    en az bir tıklama üreten aramaların payı 9,51 puan geriledi. Mutlak sayı büyük
    görünse de asıl bilgi bu iki yıllık hareketin hızında saklı.
    {/* kaynak: K80 */}{/* kaynak: K81 */}
  </p>

  <p>
    Puan farkını yüzdeye çevirdiğinizde tablo sertleşiyor: tıklama üreten aramaların
    payındaki 9,51 puanlık düşüş, göreli olarak %22,9'luk bir kayba karşılık geliyor.
    SparkToro bunu on yılın en hızlı düşüşü olarak niteliyor ve ölçüm geçmişine
    bakıldığında abartılı bir ifade değil — 2019–2023 arasında oran yılda bir–iki puan
    hareket ediyordu.
    {/* kaynak: K80 */}{/* kaynak: K84 */}
  </p>

  <p>
    Cihaz kırılımı, ortalamanın gizlediği şeyi gösteriyor. Mobilde tıklamasız oran
    %77,2, masaüstünde %50,6. Aradaki 26 puan, ekran alanının darlığıyla ve mobilde
    yanıtın ilk ekranı tamamen doldurmasıyla açıklanıyor. Trafiğinin ezici çoğunluğu
    mobilden gelen bir yayıncı için ortalama %68 rakamı iyimser bir tahmindir.
    {/* kaynak: K81 */}
  </p>

  <p>
    Rakamı raporlarken bir uyarı: %68 ile %60 arasındaki fark, sitenizin trafiğinin
    %8 azalacağı anlamına gelmiyor. Zero-click bir pazar toplamı; sizin payınız sorgu
    karmanıza, ortalama pozisyonunuza ve marka aramalarınızın ağırlığına göre değişir.
    Marka sorgularında tıklamasızlık düşük kalmaya devam ediyor, çünkü kullanıcı zaten
    belirli bir siteyi arıyor. Toplam rakamı kendi tahmininizin yerine koymak, sektör
    ortalamasını kendi cironuz sanmakla aynı hata.
  </p>


  <h2 id="olcumun-sinirlari">Bu rakamlar nasıl ölçüldü — ve nereye kadar geçerli</h2>

  <p className="bolum-cevap">
    Zero-click verileri Google'dan gelmiyor. Gönüllü kullanıcı panellerinin tarayıcı
    hareketlerinden derleniyor; yani ölçüm bir sayım değil, örnekleme. Panel yöntemi
    trendi güvenilir biçimde yakalar ama mutlak oranı ondalık hassasiyetle vermez.
    Aşağıdaki üç sınır, bu rakamları bir sunuma koymadan önce bilinmesi gerekenler —
    ve rakamı veren tarafın kendisi de bunları açıkça yazmış durumda.
  </p>

  <p>
    Birincisi kapsam. Analiz, Google'ın mobil arama <em>uygulamasındaki</em> sorguları
    dışarıda bıraktı; yalnızca tarayıcı üzerinden yapılan aramalar ölçüldü. SparkToro'nun
    kendi notu, uygulama içi tıklamasız davranışın bu rakamların da üzerinde olma
    ihtimalini işaret ediyor. Yani %68 bir tavan değil, alt sınır.
    {/* kaynak: K80 */}
  </p>

  <p>
    İkincisi karşılaştırılabilirlik. Farklı yıllardaki analizler aynı paneli kullanmadı.
    2024 ile 2026 arasındaki 7,56 puanlık farkı sanki aynı termometreyle ölçülmüş gibi
    sunmak yanıltıcı olur. Yönün doğruluğundan şüphe etmek için sebep yok; ondalık
    hassasiyetteki puan farkına dayanan hesaplar ise kırılgan.
    {/* kaynak: K80 */}
  </p>

  <p>
    Üçüncüsü coğrafya. Panellerin ağırlığı ABD ve Batı Avrupa. Türkiye gibi ürün
    yayılımının geç başladığı pazarlarda oranın aynı seviyede olması için bir neden yok.
    Bu konuya ayrı bir bölüm ayırdım.
  </p>


  <h2 id="sektor-haritasi">Risk sektöre göre dağılıyor</h2>

  <p className="bolum-cevap">
    Tek bir zero-click oranına göre plan yapmak, sektörünüzün nerede durduğunu bilmeden
    bütçe kesmek demek. AI Bakışı'nın tetiklenme sıklığı sorgu türüne göre onda birden
    beşte dörde kadar değişiyor; tanım ve olgu soran sorgularda tıklama neredeyse
    tamamen kayboluyor, işlemsel sorgularda büyük ölçüde duruyor.
  </p>

  <table>
    <caption>Sektöre göre AI Bakışı tetiklenmesi ve tıklamasız arama riski (2026)</caption>
    <thead>
      <tr>
        <th scope="col">Sektör</th>
        <th scope="col">AI Bakışı tetiklenmesi</th>
        <th scope="col">Risk</th>
        <th scope="col">Gözlenen tıklama tablosu</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">B2B / teknoloji</th>
        <td>%70–82</td>
        <td>Çok yüksek</td>
        <td>Ortalama %34 trafik kaybı, bazı nişlerde %70</td>
      </tr>
      <tr>
        <th scope="row">Sağlık</th>
        <td>%43</td>
        <td>Yüksek</td>
        <td>Tıklamasız oran %78, yıllık +8 puan</td>
      </tr>
      <tr>
        <th scope="row">Bilim / eğitim</th>
        <td>%43,6</td>
        <td>Yüksek</td>
        <td>Tanım ve olgu sorgularında %86–91</td>
      </tr>
      <tr>
        <th scope="row">Yerel işletme</th>
        <td>%7–7,9</td>
        <td>Düşük</td>
        <td>Tıklamasız oran %68,7 (AI'dan bağımsız, zaten yüksek)</td>
      </tr>
      <tr>
        <th scope="row">Gayrimenkul</th>
        <td>%5,8</td>
        <td>Düşük–orta</td>
        <td>İşlemsel sorgularda %39,4</td>
      </tr>
      <tr>
        <th scope="row">E-ticaret</th>
        <td>%3,2</td>
        <td>Düşük</td>
        <td>Tıklamasız oran %38</td>
      </tr>
    </tbody>
  </table>
  {/* kaynak: K81 */}{/* kaynak: K83 */}{/* kaynak: K84 */}
  <p><small>Tetiklenme oranları ile tıklamasız oranlar farklı çalışmalardan derlendi; satır içi karşılaştırma yön gösterir, kesin fark vermez.</small></p>

  <p>
    En sert ayrışma B2B teknolojide. AI Bakışı'nın tetiklendiği sorgu payı 2024'te %36
    iken Şubat 2026'da %82'ye çıkmış. Bu segmentin içeriği tam da modelin sevdiği türden:
    yapılandırılmış, tanım ağırlıklı, karşılaştırmalı, ticari niyeti dolaylı. Karar
    vericinin "X nedir", "X ile Y farkı", "en iyi X araçları" aramalarının yanıtı artık
    sonuç sayfasında bitiyor ve site ziyareti ancak fiyat ya da demo aşamasında geliyor.
    {/* kaynak: K84 */}
  </p>

  <p>
    E-ticaretteki düşük oran ise bir tesadüf değil, ticari bir karar. Google alışveriş
    sorgularında AI Bakışı'nı geri çekti; çünkü özet, tıklamayı ve dolayısıyla reklam
    gelirini bastırıyordu. Tıklamasız aramanın nerede duracağını belirleyen asıl
    mekanizma burada görünüyor: kullanıcı deneyimi değil, Google'ın gelir modeli.
    Yerel sorgulardaki %68,7'lik tıklamasızlık ise AI'dan değil, harita paketinin
    yıllardır yaptığı işten geliyor.
    {/* kaynak: K81 */}{/* kaynak: K84 */}
  </p>

  <p>
    Sağlık ve bilim tarafındaki tabloyu ayrıca not etmek gerekiyor. Sağlıkta tıklamasız
    oran %78'e ulaşmış ve yıllık artış 8 puan; tanım ile olgu soran bilimsel sorgularda
    ise oran %86–91 bandında. Burada kaybedilen trafiğin geri gelme ihtimali yok, çünkü
    kullanıcı gerçekten de tek cümlelik bir yanıt arıyordu. Bu segmentlerde doğru hedef,
    özet kutusunda kaynak olarak görünmek ve derinlik gerektiren ikinci sorguyu
    kazanmak.
    {/* kaynak: K81 */}
  </p>


  <h2 id="iki-yuzey">AI Bakışı ile AI Modu aynı tehdit değil</h2>

  <p className="bolum-cevap">
    AI Bakışı, klasik sonuç listesinin üstünde beliren bir özet kutusu; mavi linkler
    altında durmaya devam ediyor. AI Modu ise sayfayı tümüyle devralıyor, geleneksel
    sonuç listesi diye bir şey kalmıyor. Aradaki yapısal fark, tıklama davranışında on
    puanlık bir uçuruma dönüşüyor; iki yüzey için aynı savunmayı kurmak da bu yüzden
    işe yaramıyor.
    {/* kaynak: K83 */}
  </p>

  <table>
    <caption>İki yüzeyin tıklama davranışı</caption>
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">AI Bakışı</th>
        <th scope="col">AI Modu</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Tıklamasız oran</th>
        <td>%83</td>
        <td>%93</td>
      </tr>
      <tr>
        <th scope="row">1. sıradaki organik sonucun CTR'si</th>
        <td>%31,7 → %19,8</td>
        <td>Geleneksel sonuç yok</td>
      </tr>
      <tr>
        <th scope="row">Özet içindeki linke tıklama</th>
        <td>%1 civarı</td>
        <td>—</td>
      </tr>
      <tr>
        <th scope="row">Tüm aramalar içindeki pay (Oca–Nis 2026)</th>
        <td>Çoğunluk</td>
        <td>%0,34</td>
      </tr>
    </tbody>
  </table>
  {/* kaynak: K80 */}{/* kaynak: K81 */}{/* kaynak: K83 */}{/* kaynak: K84 */}

  <p>
    İlk satırın anlamı şu: AI Bakışı görünen bir sorguda birinci sıradaki sonuç
    tıklamalarının yaklaşık üçte birini kaybediyor. 2024 ölçümünde bu düşüş %34
    seviyesindeydi, 2026'da %61'e çıkmış — yani sadece özet daha sık çıkmıyor, çıktığında
    daha çok tıklama yutuyor. Özetin içine konan kaynak linklerinin tıklanma oranı ise
    %1 civarında. Atıf almak görünürlük kazandırır, trafik değil.
    {/* kaynak: K81 */}{/* kaynak: K84 */}
  </p>

  <p>
    Karşılaştırma için: Perplexity'nin tıklamasız oranı %93, ChatGPT Search'ün %82.
    AI Modu bu sohbet arayüzleriyle aynı ligde davranıyor, klasik arama sayfasıyla değil.
    Yüzeylerin nasıl çalıştığını
    <Link href="/geo/ai-overviews-nedir">AI Bakışı</Link> ve
    <Link href="/geo/google-ai-modu">Google AI Modu</Link> sayfalarında
    ayrı ayrı anlattım.
    {/* kaynak: K81 */}
  </p>


  <h2 id="milyar-mi-yuzde-mi">Bir milyar kullanıcı mı, %0,34 mü?</h2>

  <p className="bolum-cevap">
    Google, I/O 2026'da AI Modu'nun aylık bir milyar kullanıcıyı geçtiğini açıkladı.
    Aynı dönemde bağımsız clickstream verisi, Ocak–Nisan 2026 aralığında tüm aramaların
    yalnızca %0,34'ünün AI Modu'nda yapıldığını gösteriyor. İki rakam da doğru olabilir,
    çünkü farklı şeyleri sayıyorlar — ve hangisine baktığınız stratejinizi baştan
    değiştiriyor.
    {/* kaynak: K80 */}
  </p>

  <p>
    Birincisi bir <em>kullanıcı</em> sayımı: ilgili ay içinde yüzeye bir kez bile
    değen herkes sayılır. Sekmeye yanlışlıkla girip geri dönen kişi de o milyarın
    içindedir. İkincisi bir <em>sorgu payı</em>: panelde kaydedilen her arama oturumunun
    hangi yüzeyde gerçekleştiğini ölçer. Bir ürünün geniş erişimi olup küçük kullanım
    payına sahip olması gayet mümkün — teknoloji tarihinde bunun onlarca örneği var.
  </p>

  <p>
    Üstelik %0,34 de olduğundan küçük görünüyor olabilir. Panelin dışarıda bıraktığı yer
    Google'ın mobil uygulaması; AI Modu'nun en görünür konumda sunulduğu yüzey tam olarak
    orası. İki rakam da kendi yönünde eksik: kullanıcı sayısı erişimi şişiriyor, sorgu
    payı kullanımı olduğundan düşük gösteriyor.
    {/* kaynak: K80 */}
  </p>

  <p>
    Pratik sonuç iki yönlü. Bugün trafiğinizi eritenin AI Modu olduğunu düşünüyorsanız
    yanlış yerdesiniz — kaybın büyük kısmı klasik sonuç sayfasına yerleşmiş AI Bakışı'ndan
    ve onun altındaki CTR çöküşünden geliyor. Öte yandan %0,34'e bakıp "henüz erken"
    demek de riskli; küçük tabanlı bir oranın iki katına çıkması, büyük tabanlı bir oranın
    iki puan artmasından çok daha hızlı gerçekleşir. AI Modu'nu bugünün trafik sorunu
    değil, gelecek yılın taban senaryosu olarak izleyin.
  </p>


  <h2 id="kalan-trafik">Kaybedilen tıklama ile kaybedilen gelir aynı şey değil</h2>

  <p className="bolum-cevap">
    Zero-click paniğinin en zayıf noktası, kaybedilen tıklamayı doğrudan kaybedilen
    gelir sayması. Ölçümler tersini söylüyor: AI Bakışı üzerinden gelen kullanıcılar
    standart organik trafiğe kıyasla %23 daha yüksek dönüşüm üretiyor, oturumda %34
    daha uzun kalıyor, hemen çıkma oranları %41 daha düşük ve oturum başına 2,7 kat
    fazla sayfa görüntülüyor.
    {/* kaynak: K81 */}
  </p>

  <p>
    Mekanizma sezgisel: tıklamasız arama bir filtre gibi çalışıyor. Cevabını alıp giden
    ziyaretçi zaten dönüşmeyecek olan meraklıydı. Geriye, özeti okuduktan sonra hâlâ
    siteye girme ihtiyacı duyan kullanıcı kalıyor — yani niyeti daha derin olan kişi.
    AI Modu'nda tıklama oranı %7'ye kadar iniyor, ama o %7'nin ticari performansı
    orantısız biçimde yüksek.
    {/* kaynak: K82 */}{/* kaynak: K83 */}
  </p>

  <p>
    Burada bir uyarı gerekiyor. Bu farkın tamamını yüzeye bağlamak yanlış olur; kısmen
    seçilim etkisi işliyor. Özeti aşıp tıklayan kullanıcı, aynı kişinin normal aramadaki
    halinden daha kararlıdır — kanal değil, kullanıcının kendisi farklıdır. Dönüşüm
    üstünlüğü gerçek ama nedeni tıklamanın nereden geldiği değil, kimin tıkladığı.
  </p>

  <p>
    Görünürlük tarafındaki bulgu daha net: AI Bakışı'nda atıf alan markalar, atıf almayan
    rakiplerine kıyasla %35 daha fazla organik ve %91 daha fazla ücretli tıklama alıyor
    (Seer Interactive, Nisan 2026). Özet içindeki linke tıklanmasa bile markayı orada
    görmek, kullanıcının sonraki davranışını değiştiriyor. ChatGPT, Perplexity ve Grok'tan
    gelen yönlendirme trafiğinin standart organik trafiğin 4,4–5 katı dönüşüm üretmesi de
    aynı yöne işaret ediyor.
    {/* kaynak: K84 */}
  </p>

  <p>
    Google tarafındaki ticari hamle de sessizce ilerliyor: AI Bakışı'larının %25,5'i artık
    reklam içeriyor ve bu reklamlarda tıklama başı maliyet %35 artmış durumda. Organik
    tıklamanın azaldığı bir yüzeyde ücretli tıklamanın pahalılaşması tesadüf değil.
    {/* kaynak: K84 */}
  </p>


  <h2 id="turkiye">Türkiye bu eğrinin neresinde?</h2>

  <p className="bolum-cevap">
    Yukarıdaki rakamların tamamı ABD ağırlıklı clickstream panellerinden geliyor. AI
    Bakışı ve AI Modu Türkiye'de 18 Şubat 2026'da kullanıma açıldı — Google Türkiye Ülke
    Direktörü Mehmet Keteloğlu'nun duyurusuyla. Yani Türk siteleri bu eğrinin çok daha
    erken bir noktasında; ABD verisini Türkiye'ye birebir taşımak ölçüm değil, tahmin
    üretir.
    {/* kaynak: Google Türkiye duyurusu, 18 Şubat 2026 */}
  </p>

  <p>
    Neden taşınamayacağının üç somut sebebi var. Yüzeyler Türkiye'de birkaç aydır
    yayında, ABD'de iki yıldır; tetiklenme oranı ve kullanıcı alışkanlığı oturmuş
    değil. Türkçe sorgu havuzundaki içerik derinliği İngilizceyle kıyaslanamaz, bu da
    modelin özet üretme sıklığını doğrudan etkiliyor. Ve sorgu karması farklı: Türkiye'de
    yerel ve e-ticaret sorgularının payı yüksek, bunlar tablodaki en düşük riskli iki
    kategori.
  </p>

  <p>
    Yön ise aynı. Türkiye'nin mobil ağırlıklı arama davranışı, mobilde tıklamasız oranın
    masaüstünün 26 puan üzerinde olduğu düşünülürse, yayılım hızlandığında farkı
    kapatmayı kolaylaştıracak bir etken. Ayrıca Google yüzeyleri pazarlara sırayla açıyor
    ama ürün mantığını her yerde aynı tutuyor; Türkiye'ye özgü bir "yumuşak sürüm" yok.
  </p>

  <p>
    Yapılacak şey, ithal rakamla plan yapmak yerine kendi tabanınızı çıkarmak. Search
    Console'da 18 Şubat 2026 öncesi ve sonrası için aynı sorgu setini karşılaştırın;
    gösterim sabit kalırken tıklamanın düştüğü sorgular sizin kendi zero-click ölçümünüz
    olur. Trafik tarafında
    <Link href="/geo/ga4-ai-trafigi">GA4'te yapay zeka kaynaklı
    trafiği ayırmak</Link> ve
    <Link href="/geo/geo-kpi-olcumu">GEO KPI çerçevesini kurmak</Link>
    aynı işin iki ayağı. Türkiye için henüz güvenilir bir sektör kırılımı yayımlanmadı;
    ilk çıkan rakama sarılmadan önce hangi panelin, hangi cihazda, hangi tarih aralığında
    ölçtüğüne bakın.
  </p>


  <h2 id="ne-yapmali">Ne ölçmeli, neyi değiştirmeli</h2>

  <p className="bolum-cevap">
    Zero-click'e karşı alınacak tedbir "daha fazla içerik üretmek" değil. Sorgu
    envanterinizi niyete göre ayırmak, kaybın yapısal olduğu yerde hedefi tıklamadan
    atfa çevirmek, tıklamanın hâlâ mümkün olduğu yerde savunmayı sıkılaştırmak ve
    ikisinin oranını çeyrek dönemlik olarak yeniden ölçmek. Sıralama bu, hepsini aynı
    anda yapmak değil.
  </p>

  <p>
    İlk iş envanteri ikiye bölmek. Tanım, olgu ve "nedir" sorgularında kayıp yapısaldır;
    burada tıklama hedeflemek bütçe yakmaktır, hedef atıf almaktır. Karşılaştırma,
    fiyatlandırma, işlemsel ve yerel sorgularda tıklama hâlâ orada duruyor; asıl korunacak
    yer burası. Aynı sitede iki farklı strateji yürütmek tuhaf gelebilir ama veriler bunu
    zorunlu kılıyor.
  </p>

  <p>
    Atıf tarafında iki kaldıraç öne çıkıyor:
    <Link href="/geo/dijital-pr-ai-atif">dijital PR ile kazanılmış medya</Link>
    ve toplulukta bırakılan iz. Üretken motorların forum içeriğine olan iştahı biliniyor;
    <Link href="/geo/reddit-forum-mention-etkisi">Reddit ve forum anılmalarının etkisi</Link>
    ayrı bir sayfanın konusu. ChatGPT özelinde ise Bing indeksi kritik: atıfların büyük
    çoğunluğu Bing'in üst sonuçlarından geliyor, dolayısıyla Bing Webmaster Tools'u
    kurmamış olmak doğrudan görünürlük kaybı demek —
    <Link href="/geo/bing-copilot-geo">Bing ve Copilot tarafı</Link>
    burada devreye giriyor.
    {/* kaynak: K84 */}
  </p>

  <p>
    Bir de yapılmaması gerekenler var. <code>nosnippet</code> etiketiyle içeriğinizi
    özetlenmekten korumak ilk bakışta mantıklı görünür; aynı etiket sizi öne çıkan
    snippet'lardan ve zengin sonuçlardan da çıkardığı için pratikte çoğu sitede net
    zarardır. Kapıyı kapatmadan önce ne kadar trafiğin o kapıdan geldiğini ölçün.
    {/* kaynak: K84 */}
  </p>

  <p>
    Raporlama tarafında da bir düzeltme şart. Organik oturum sayısını tek başına
    performans göstergesi olarak sunmaya devam ederseniz, tıklamasız oranın yükseldiği
    her çeyrekte kötü görünürsünüz — işiniz iyi gitse bile. Oturum başına dönüşüm oranı,
    marka dışı sorgularda gösterim payı ve yapay zeka yüzeylerinde atıf sıklığı, aynı
    gerçekliği daha dürüst ölçen üç metrik. Yönetime bunları anlatmak için en iyi zaman,
    trafiğin düştüğü çeyrekten önceki çeyrek.
  </p>

  <p className="cta">
    Kendi sitenizde kaybın nerede yapısal, nerede geri kazanılabilir olduğunu görmek
    istiyorsanız
    <Link href="/geo">GEO danışmanlığı sayfasına</Link> göz atın.
  </p>


  <h2 id="sss">Sıkça Sorulan Sorular</h2>

  <h3>Search Console'da zero-click etkisini nasıl anlarım?</h3>
  <p>
    Gösterim sayısı sabit kalırken tıklamaların düşmesi klasik belirtidir. Sorgu bazında
    bakın: aynı ortalama pozisyonda durup CTR'si eriyen sorgular, üstünde bir yanıt
    yüzeyi belirmiş olma ihtimali yüksek olanlardır. Tek bir sorguya değil, sorgu
    kümesine bakmak gerekir; tekil dalgalanma gürültü olabilir.
    {/* kaynak: K83 */}
  </p>

  <h3>Zero-click oranı 2028'e kadar nereye gider?</h3>
  <p>
    Yaygın öngörü %68–72 bandı ve organik tıklamalarda 2024'e kıyasla %25 azalma. Bunun
    ölçülmüş bir veri değil, mevcut eğrinin uzatılmasıyla üretilmiş bir tahmin olduğunu
    belirtmek gerekiyor; Google'ın reklam gelirini koruma refleksi tek başına bu eğriyi
    büküyor.
    {/* kaynak: K81 */}
  </p>

  <h3>Pazarlamacıların kaçı yapay zeka görünürlüğünü ölçüyor?</h3>
  <p>
    Yalnızca %14'ü AI Bakışı gösterim payını ve atıf sıklığını takip ediyor
    (Goodfirms, 2026). Rekabet avantajının nerede olduğunu gösteren rakam bu.
    {/* kaynak: K84 */}
  </p>

  <h3>ChatGPT atıfları için Bing indeksi neden önemli?</h3>
  <p>
    ChatGPT'nin verdiği atıfların %87'si Bing'in üst sonuçlarından geliyor. Google'da
    iyi sıralanıp Bing'de indekslenmemek, ChatGPT görünürlüğünü tek başına sıfırlayabilir.
    {/* kaynak: K84 */}
  </p>

  <h3>GEO'nun geleneksel SEO'dan farkı ne?</h3>
  <p>
    GEO, sonuç listesinde sıralanmak yerine yapay zeka yanıtlarında kaynak olarak
    gösterilmeyi hedefler. Optimize edilen şey sayfa değil, sayfanın modele sunduğu
    doğrulanabilir bilgi parçası. Sık aktarılan bir iddiaya göre LLM kaynaklarının %58'i
    Reddit, Quora ve forum içeriklerinden geliyor — bu rakam tek bir kaynağa dayanıyor ve
    bağımsız doğrulaması yok, yön göstergesi olarak alın.
    {/* kaynak: K83 */}{/* kaynak: K84 */}
  </p>

  <h3>nosnippet etiketini kullanmalı mıyım?</h3>
  <p>
    Çoğu site için hayır. Özetlenmeyi engeller ama öne çıkan snippet ve zengin sonuç
    görünürlüğünü de birlikte götürür.
    {/* kaynak: K84 */}
  </p>

  <h3>Öne çıkan snippet, AI Bakışı varken ne kadar değer kaybediyor?</h3>
  <p>
    AI Bakışı yokken öne çıkan snippet'ın CTR'si %42,2; AI Bakışı ile birlikte
    göründüğünde %23,8'e iniyor. Göreli düşüş %43,6. Snippet'ı kaybetmiyorsunuz,
    üstüne bir katman biniyor.
    {/* kaynak: K81 */}
  </p>

  <h3>Türkiye'deki siteler bu rakamlara göre plan yapabilir mi?</h3>
  <p>
    Yönü için evet, seviyesi için hayır. AI Bakışı ve AI Modu Türkiye'de 18 Şubat
    2026'da açıldığı için tetiklenme sıklığı ve tıklama kaybı ABD seviyesinde değil.
    Doğru yaklaşım, o tarihi kırılma noktası kabul edip Search Console'da kendi
    öncesi–sonrası karşılaştırmanızı çıkarmak.
  </p>
                </div>
            </article>
        </div>
    );
}
