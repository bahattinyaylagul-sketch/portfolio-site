/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

const headings = [
    {
        "id": "nedir",
        "text": "İçerik chunking nedir?"
    },
    {
        "id": "token-kelime",
        "text": "Token mu, kelime mi? Türkçe'de pasaj uzunluğu nasıl ölçülür?"
    },
    {
        "id": "pasaj-yazimi",
        "text": "Alıntılanabilir pasaj nasıl yazılır?"
    },
    {
        "id": "fark",
        "text": "Alıntılanabilir ve alıntılanamayan pasaj: fark nerede?"
    },
    {
        "id": "retrieval",
        "text": "AI bir pasajı nasıl seçer?"
    },
    {
        "id": "baglam",
        "text": "Bağlamı chunk'a geri koymak: Contextual Retrieval"
    },
    {
        "id": "bu-sayfa",
        "text": "Bu sayfa kendi kuralına göre yazıldı"
    },
    {
        "id": "uygulama",
        "text": "Mevcut içerikte chunking denetimi nasıl yapılır?"
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
    İçerik chunking, bir metni yapay zeka sistemlerinin tek başına işleyebileceği küçük ve
    odaklı pasajlara bölme tekniğidir. AI sistemleri bir sayfayı bütün olarak değil, bu
    pasajlar üzerinden değerlendirir. Atıf sayfanın otoritesinden değil, belirli bir alt
    soruyu tek başına yanıtlayan pasajdan gelir.
    {/* kaynak: K65 */}
    {/* kaynak: K59 */}
  </p>
                <aside className="tldr mb-12 p-6 md:p-8 bg-violet-50/50 border border-violet-100/80 rounded-3xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-violet-600 text-white text-xs font-black uppercase tracking-widest rounded-full">TL;DR</span>
                        <span className="tldr-baslik text-sm font-bold text-violet-800">Kısaca</span>
                    </div>
                    <p className="text-gray-800 font-bold text-[15px] leading-relaxed mb-4"><strong>3.000 kelimelik makaleniz tek bir rakip olarak değil, ayrı ayrı puanlanan onlarca pasaj olarak yarışır — kazanan sayfa değil, pasajdır.</strong></p>
                    <ul className="space-y-3.5 text-gray-700 text-[15px] leading-relaxed list-none pl-0 my-0"><li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Hedef pasaj boyutu 256–512 token. Türkçe'de bu, İngilizce'ye göre daha az kelimeye denk düşer; pratik karşılığı 50–120 kelime.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>"Yukarıda belirttiğimiz gibi" ile açılan paragraf, bağlamından koparıldığı anda anlamsızlaşır ve retrieval aşamasında zaten elenir.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Corpus ve retriever sabitken bile en iyi ile en kötü chunking yöntemi arasında %9'a varan recall farkı ölçüldü.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Chunk sınırlarını siz belirlemezseniz chunker belirler — ve fikrin ortasından keser. Başlık yapısı bu yüzden biçimsel bir tercih değil.</span></li></ul>
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
                    <h2 id="nedir">İçerik chunking nedir?</h2>

  <p className="bolum-cevap">
    İçeriği, yapay zeka sistemlerinin daha kolay işleyip bilgi çıkarabileceği küçük ve odaklı
    birimlere bölme tekniğidir. Sistem sayfanızı okuyup bir bütün olarak puanlamaz; onu
    parçalara ayırır, her parçayı ayrı bir aday olarak saklar ve kullanıcı sorusu geldiğinde
    yalnızca o soruya en iyi karşılık gelen parçayı yanıta taşır.
    {/* kaynak: K59 */}
    {/* kaynak: K65 */}
  </p>

  <p>
    Buradan çıkan pratik sonuç, <Link href="/geo">AI aramada görünürlük</Link> çalışmasının
    klasik sayfa optimizasyonundan ayrıldığı yerdir: 3.000 kelimelik bir makale tek bir rakip
    olarak değil, ayrı ayrı değerlendirilen pasajlar kümesi olarak rekabet eder. Güçlü bir
    alan adına sahip olmak tek başına bunu değiştirmiyor — otorite sayfa düzeyinde birikir,
    seçim pasaj düzeyinde yapılır.
    {/* kaynak: K65 */}
  </p>

  <p>
    Terimin kendisi yeni değil. Chunking, RAG mimarilerinin ilk adımı olarak yıllardır
    mühendislik tarafında konuşuluyordu; içerik tarafına geçmesinin sebebi, üretken arama
    sistemlerinin aynı hattı canlı web üzerinde çalıştırmaya başlaması.
    <Link href="/geo/yapay-zeka-arama-nasil-calisir">Yapay zeka aramanın nasıl çalıştığını</Link>
    anlatan sayfada bu hattın tamamı var; burada yalnızca ilk halkasına, yani metnin nasıl
    bölündüğüne bakıyoruz.
  </p>

  <p>
    Chunk sınırının nereden geçtiğini pratikte HTML belirliyor. Başlık etiketleri, liste
    öğeleri, tablo satırları ve tanım blokları doğal kesme noktaları üretir; bunlardan yoksun
    uzun bir metin bloğunda bölme işi karakter sayısına ya da cümle sınırına düşer. Aynı içerik
    bu yüzden iki farklı işaretlemeyle iki farklı pasaj kümesi üretebiliyor — metin değişmese
    bile.
  </p>

  <p>
    Bir ayrım işe yarıyor: chunking bir sıralama faktörü değil, bir görünürlük ön koşulu.
    Kötü bölünmüş bir sayfa "daha aşağıda" sıralanmaz — hiç aday olmaz, çünkü sorguya karşılık
    gelen parçası ya bir başka konunun içine gömülmüştür ya da kendi başına okunduğunda ne
    dediği anlaşılmaz.
  </p>


  <h2 id="token-kelime">Token mu, kelime mi? Türkçe'de pasaj uzunluğu nasıl ölçülür?</h2>

  <p className="bolum-cevap">
    Retrieval sistemleri kelimeyle değil token'la çalışır. Soru-cevap retrieval'ı için
    genel olarak en iyi performansı veren aralık 256–512 token; bu, pratikte önerilen
    200–500 token bandının içinde kalır. Kelimeye çevirmek gerekirse: Türkçe'de aynı anlam
    İngilizce'den daha fazla token tuttuğu için 256–512 token yaklaşık 50–120 kelimeye
    denk gelir.
    {/* kaynak: K65 */}
  </p>

  <p>
    Sayfa boyunca bu çerçeveyi kullanıyorum, çünkü üç farklı sayı görmek gereksiz bir karışıklık
    yaratıyor: <strong>256–512 token = Türkçe'de kabaca 50–120 kelime</strong>. Bundan sonraki
    bölümlerde "pasaj" derken kastettiğim uzunluk bu.
  </p>

  <p>
    Neden Türkçe'de oran farklı? Modern dil modelleri metni kelimelere değil alt-kelime
    parçalarına böler. Bu parça sözlükleri ağırlıklı olarak İngilizce metinle eğitildiği için
    İngilizce'de sık geçen bir kelime çoğunlukla tek parça hâlinde temsil edilir. Türkçe sondan
    eklemeli bir dil: kök üzerine dizilen ek zincirleri her seferinde yeni bir yüzey biçimi
    üretir. "Kitap" tek parça olabilir; "kitaplarımızdan" büyük olasılıkla birkaç parçaya
    bölünür. Türkçe'ye özgü harfler ve yaygın olmayan ek kombinasyonları bu bölünmeyi artırır.
  </p>

  <p>
    Sonucu şu: aynı bilgiyi anlatan Türkçe bir paragraf, İngilizcesinden daha fazla token
    harcar. Token bütçesi sabit olduğuna göre, Türkçe pasajları daha kısa tutmak gerekir.
    İngilizce için yaygın kullanılan "100 token ≈ 75 kelime" başparmak kuralı Türkçe'ye
    doğrudan uygulanamaz — Türkçe'de kelime başına düşen token sayısı belirgin biçimde
    yüksektir.
  </p>

  <p>
    Sabit bir Türkçe çarpanı vermiyorum, çünkü oran tokenizer'dan tokenizer'a değişiyor;
    aynı metin farklı modellerde farklı sayıda token üretiyor. Ölçmek isterseniz doğru yol,
    hedeflediğiniz modelin kendi tokenizer'ından kendi metninizi geçirmek. Pratikte işe yarayan
    kural daha basit: Türkçe yazarken 120 kelimeyi üst sınır kabul edin, 50–90 kelime bandını
    varsayılan olarak kullanın.
  </p>


  <h2 id="pasaj-yazimi">Alıntılanabilir pasaj nasıl yazılır?</h2>

  <p className="bolum-cevap">
    Dört şey belirleyici: başlığın soru olarak kurulması, yanıtın ilk cümleye taşınması,
    paragrafın 50–120 kelimede tutulması ve pasajın çevresindeki metin olmadan da anlamlı
    olması. Bunların hiçbiri stil tercihi değil — her biri, retrieval hattının belirli bir
    aşamasında pasajın elenip elenmeyeceğini doğrudan etkiliyor.
    {/* kaynak: K63 */}
    {/* kaynak: K59 */}
  </p>

  <h3 id="soru-baslik">Başlığı soru olarak yaz, yanıtı ilk cümleye taşı</h3>

  <p>
    Her H2 ve H3, başlığın ima ettiği soruya doğrudan yanıtla açılmalı. Uzun giriş cümleleri
    retrieval'da elenme riskini artırıyor: pasajın vektörü ilk cümlelerin taşıdığı anlamla
    şekilleniyor ve o cümleler "bu konuyu ele almadan önce" tarzı bir ısınma yapıyorsa, vektör
    soruya değil ısınmaya benziyor.
    {/* kaynak: K63 */}
    {/* kaynak: K59 */}
  </p>

  <h3 id="uzunluk">Paragrafı 50–120 kelimede tut</h3>

  <p>
    120 kelimeyi aşan pasajlarda retrieval modeli token bütçesine sığdırmak için kesme yapıyor
    ve kesilen yer sizin seçtiğiniz yer olmuyor; bu da çıkarımın güvenilirliğini düşürüyor.
    Ama kısa tutmak tek başına yetmiyor. O 50–120 kelimenin içinde somut bir şey olmalı:
    bir sayı, adlandırılmış bir varlık, bir süreç adımı, bir kaynak alıntısı. Kısa ve boş bir
    paragraf, uzun ve dolu bir paragraftan daha az alıntılanıyor —
    <Link href="/seo/bilgi-kazanci">bilgi kazancı</Link> ölçütü burada da geçerli.
    {/* kaynak: K65 */}
  </p>

  <h3 id="bagimsizlik">Her paragrafı bağımsız yaz</h3>

  <p>
    "Yukarıda bahsettiğimiz gibi", "bu yöntem", "az önce anlattığımız yaklaşım" türü ifadeler
    pasajı bağlama bağımlı kılar. Chunk sistemden çıkarıldığında o bağlam yanında gelmez;
    geriye ne dediği belirsiz bir metin parçası kalır. Ölçüt basit: paragrafı tek başına bir
    kâğıda kopyalayın, makalenin geri kalanını okumamış biri anlıyorsa pasaj bağımsızdır.
    {/* kaynak: K65 */}
    {/* kaynak: K59 */}
  </p>

  <h3 id="sinir-kontrolu">Chunk sınırlarını başlık yapısıyla sen belirle</h3>

  <p>
    Chunker bir yerden kesecek. H2 ve H3 başlıkları ona nereden keseceğini söyler: fikrin
    ortasından değil, konu sınırından. Başlıksız uzun bir metinde bölme işlemi karakter ya da
    cümle sayısına göre yapılır ve bir argümanın ortasına düşmesi olağandır. Öz-yeterlilik ve
    başlık disiplini, içerik yazarının vektör veritabanı davranışı üzerinde doğrudan kontrol
    kurabildiği birkaç kaldıraçtan ikisi.
    {/* kaynak: K65 */}
  </p>


  <h2 id="fark">Alıntılanabilir ve alıntılanamayan pasaj: fark nerede?</h2>

  <p className="bolum-cevap">
    Fark beş boyutta toplanıyor: bağımsızlık, uzunluk, odak, somutluk ve açılış cümlesi.
    Alıntılanabilir pasaj tek bir fikri, kendi başına anlaşılır biçimde ve doğrudan bir
    yargıyla açarak anlatır. Alıntılanamayan pasaj ya bağlamına muhtaçtır ya birden fazla
    fikri karıştırır ya da somut hiçbir şey söylemez.
    {/* kaynak: K65 */}
    {/* kaynak: K63 */}
  </p>

  <table>
    <thead>
      <tr>
        <th scope="col">Boyut</th>
        <th scope="col">Alıntılanabilir pasaj</th>
        <th scope="col">Alıntılanamayan pasaj</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Bağımsızlık</td>
        <td>Önceki paragraf okunmadan da tam anlam taşır</td>
        <td>Bağlam için önceki bölüme muhtaç</td>
      </tr>
      <tr>
        <td>Uzunluk</td>
        <td>50–120 kelime (yaklaşık 256–512 token)</td>
        <td>Tek cümlelik kırıntı ya da 300+ kelimelik blok</td>
      </tr>
      <tr>
        <td>Odak</td>
        <td>Tek fikir, tek amaç</td>
        <td>Birden fazla fikri karıştırır; embedding dağılır</td>
      </tr>
      <tr>
        <td>Somutluk</td>
        <td>İstatistik, adlandırılmış varlık ya da süreç adımı içerir</td>
        <td>Genel marka dili veya belirsiz iddia</td>
      </tr>
      <tr>
        <td>Açılış cümlesi</td>
        <td>Doğrudan tanım ya da net yargıyla açılır</td>
        <td>"Bu konuyu ele almadan önce…" tipi bağlam kurma cümlesiyle açılır</td>
      </tr>
    </tbody>
  </table>
  {/* kaynak: K65 */}
  {/* kaynak: K63 */}

  <p>
    İki pasaj tipi ölçümlerde öne çıkıyor: numaralı süreç açıklamaları ve "X ile Y arasındaki
    fark şudur" biçimindeki karşılaştırmalar. İkisinin ortak yanı, sınırının metnin kendisi
    tarafından çizilmiş olması — nerede başladığı ve nerede bittiği belli.
    {/* kaynak: K63 */}
  </p>

  <p>
    Farkı somutlaştırmak için aynı bilginin iki yazımına bakalım. Alıntılanamayan hâli:
    "Bu konuya geçmeden önce yukarıda anlattığımız yapıyı hatırlamakta fayda var. Söz konusu
    yöntem, daha önce değindiğimiz sorunu büyük ölçüde çözüyor ve birçok ekip için ciddi bir
    avantaj sağlıyor." Burada hiçbir varlık adı, hiçbir sayı, hiçbir tanım yok; paragraf
    yalnızca kendisinden önce gelen metne işaret ediyor.
  </p>

  <p>
    Aynı bilginin alıntılanabilir hâli: "Contextual Retrieval, her chunk'ın başına o parçanın
    belgedeki yerini açıklayan kısa bir bağlam cümlesi ekler. Anthropic'in kendi deneyinde bu
    ekleme, retrieval başarısızlıklarını %5,7'den %1,9'a düşürdü." İkinci versiyon aynı
    uzunlukta değil ama aynı işi tek başına yapıyor: konuyu adlandırıyor, mekanizmayı
    söylüyor, ölçümü ve ölçümün kimden geldiğini veriyor. Bir yanıt motorunun bunu bağlamından
    koparıp yanıta taşıması için sayfanın geri kalanına ihtiyacı yok.
  </p>


  <h2 id="retrieval">AI bir pasajı nasıl seçer?</h2>

  <p className="bolum-cevap">
    Sistem sayfayı segmentlere ayırır, her segmenti vektör veritabanında bir embedding olarak
    saklar ve sorgu geldiğinde hangi segmentin o soruyu en iyi yanıtladığını hesaplar. Buna
    passage-based retrieval deniyor. Seçim sayfalar arasında değil, pasajlar arasında yapılıyor;
    aynı sayfanın iki bölümü birbirinden bağımsız yarışabiliyor ve biri yanıta girerken diğeri
    hiç değerlendirmeye alınmıyor.
    {/* kaynak: K59 */}
    {/* kaynak: K63 */}
  </p>

  <p>
    RAG hattı bir eleme tüneli gibi çalışıyor; her aşama bir öncekinden daha az aday bırakıyor:
  </p>

  <ol>
    <li>
      <strong>Chunking.</strong> Metin parçalara bölünür. Birden fazla konuyu aynı anda işleyen
      pasajın vektörü dağınık çıkar; hiçbir sorguya güçlü benzerlik vermez.
      {/* kaynak: K65 */}
    </li>
    <li>
      <strong>Embedding ve indeksleme.</strong> Her parça sayısal bir vektöre dönüştürülüp
      saklanır. "Yukarıda belirttiğimiz gibi…" ile açılan pasajlar daha bu aşamada düşük puan
      alır, çünkü taşıdıkları anlam kendi içlerinde tamamlanmıyor.
      {/* kaynak: K65 */}
    </li>
    <li>
      <strong>Retrieval.</strong> Sorgu vektörüne kosinüs benzerliğiyle en yakın top-k parça
      getirilir.
      {/* kaynak: K65 */}
      {/* kaynak: K60 */}
    </li>
    <li>
      <strong>Reranking.</strong> İkinci bir model, gelen parçaları soruyla birlikte yeniden
      puanlar. Bu aşamada ilk cümlesinde çözen pasajlar üstün gelir.
      {/* kaynak: K65 */}
    </li>
    <li>
      <strong>Generation.</strong> Hayatta kalan parçalar modele verilir ve yanıt üretilir.
      Atıf, yalnızca bu son kümeye kalan pasajlardan çıkar.
    </li>
  </ol>

  <p>
    Retrieval kalitesi, model seçiminden çok chunking kalitesine bağlı. Daha güçlü bir modele
    geçmek, yanlış bölünmüş bir metinden doğru pasajı çıkarmıyor — model yalnızca kendisine
    verilen parçalar arasından seçim yapıyor.
    {/* kaynak: K65 */}
  </p>

  <p>
    Aynı mekanizma, tek bir sorgunun arka planda çoğaltıldığı
    <Link href="/geo/query-fan-out">query fan-out</Link> sürecinde her alt sorgu için ayrı ayrı
    çalışıyor. Yani bir sayfa, üretilen alt sorgu sayısı kadar farklı elemeye giriyor ve her
    birinde farklı bir pasajıyla yarışıyor.
  </p>


  <h2 id="baglam">Bağlamı chunk'a geri koymak: Contextual Retrieval</h2>

  <p className="bolum-cevap">
    Chunking'in yapısal sorunu şu: parça bağlamından koparılınca anlamının bir kısmını
    kaybediyor. Contextual Retrieval, indeksleme sırasında her parçanın başına o parçanın
    belgedeki yerini açıklayan kısa bir bağlam cümlesi ekleyerek bunu telafi eden bir yaklaşım.
    Amaç, parçayı kaynağından koparmadan aramaya hazır hâle getirmek.
    {/* kaynak: K65 */}
  </p>

  <p>
    Anthropic'in yayımladığı deneyde bu yöntem, retrieval başarısızlıklarını %5,7'den %1,9'a
    düşürdü. Sayı satıcının kendi ölçümü ve kendi test kurulumunda elde edildi; bağımsız bir
    doğrulama değil. Yine de mekanizması içerik tarafına doğrudan çeviriliyor: sistemin
    sonradan eklemek zorunda kaldığı bağlamı, siz zaten pasajın içine yazmışsanız telafiye
    ihtiyaç kalmıyor.
    {/* kaynak: K65 */}
  </p>

  <p>
    Bölme yönteminin kendisi de ölçülebilir bir fark yaratıyor. Corpus ve retriever sabit
    tutulduğunda bile en iyi ile en kötü chunking yöntemi arasında %9'a varan recall farkı
    ölçüldü. Bu, aynı içeriğin yalnızca nasıl bölündüğüne bağlı olarak on soruda birinde
    bulunamaması demek.
    {/* kaynak: K65 */}
  </p>

  <p>
    Sizin tarafınızdaki karşılığı: yayıncı olarak chunker'ı seçemiyorsunuz. Hangi sistemin
    hangi yöntemle böldüğünü bilmiyorsunuz ve bu sistemden sisteme değişiyor. Kontrol
    edebildiğiniz tek şey, hangi yöntem uygulanırsa uygulansın metnin makul yerlerden
    bölünmesini kolaylaştırmak. Başlık disiplini ve tek fikirli paragraflar tam olarak bunu yapıyor.
  </p>


  <h2 id="bu-sayfa">Bu sayfa kendi kuralına göre yazıldı</h2>

  <p className="bolum-cevap">
    Bu sayfada her H2'nin hemen altında, o başlığın sorusunu tek başına yanıtlayan bir paragraf
    var. Hepsi 40–80 kelime aralığında, her biri tek bir fikirle sınırlı ve hiçbiri kendinden
    önceki bölüme geri gönderme yapmıyor. Yani anlattığım kural, üzerinde durduğunuz metinde
    uygulanmış hâlde — iddia ile sayfanın kendisi aynı şeyi söylüyor.
  </p>

  <p>
    Kontrol etmek kolay: sayfayı yukarı kaydırıp herhangi bir başlık altındaki ilk paragrafı
    tek başına okuyun. "Chunk boyutu ne olmalı" ya da "AI bir pasajı nasıl seçer" sorusunun
    yanıtı, çevresindeki hiçbir cümle olmadan orada duruyor mu? Duruyorsa o paragraf
    alıntılanabilir bir pasajdır.
  </p>

  <p>
    Bunu bir gösteri olsun diye yapmıyorum. Sitedeki GEO rehberlerinin tamamı aynı iskeletle
    yazılıyor: H1 altında bağlamsız açılış cevabı, ardından TL;DR, sonra her H2 için bağımsız
    bölüm cevabı. İskeletin sebebi estetik değil — üretken arama sistemlerinin sayfayı nasıl
    parçaladığına dair yukarıda anlatılan mekanizma.
    <Link href="/geo/ai-icin-icerik-yazimi" data-pending="true">Yapay zeka için içerik yazımı</Link>
    sayfasında bu iskeletin tamamı, chunking dışındaki gereklilikleriyle birlikte anlatılıyor.
  </p>

  <p>
    Bir uyarı da gerekiyor: kuralı mekanikleştirmek metni bozar. Her paragrafı aynı uzunlukta,
    aynı kalıpla açılan bloklara çevirirseniz okunabilirliği öldürürsünüz ve yapay zeka üretimi
    izlenimi verirsiniz. Kural, cevabın erken gelmesi ve pasajın kendi kendine yetmesi;
    ritmin tekdüzeleşmesi değil.
  </p>


  <h2 id="uygulama">Mevcut içerikte chunking denetimi nasıl yapılır?</h2>

  <p className="bolum-cevap">
    En hızlı yol, sayfanın en çok trafik alan bölümlerini alıp her paragrafı bağlamından
    kopararak tek tek okumak. Anlamını koruyan paragraf pasaj olarak çalışır; "bu", "söz
    konusu", "yukarıdaki" gibi geri göndermelerle açılan paragraf çalışmaz. Denetim, düzeltme
    işinden çok daha kısa sürüyor; orta ölçekli bir sayfa için yarım saat genellikle yetiyor.
  </p>

  <p>
    Sırayla bakılacak şeyler kısa bir liste hâlinde toplanabilir:
  </p>

  <ul>
    <li>Başlıklar soru mu, yoksa "Genel Bakış" gibi içeriksiz etiketler mi?</li>
    <li>Her başlığın altındaki ilk paragraf, başlığın sorusunu yanıtlıyor mu?</li>
    <li>120 kelimeyi aşan paragraflar var mı? Varsa doğal bir kırılma noktası bulunuyor mu?</li>
    <li>Geri gönderme ifadeleriyle açılan paragraflar hangileri?</li>
    <li>Paragrafların içinde somut bir veri, tarih, ad veya adım var mı?</li>
    <li>İki başlık arasında 800 kelimelik başlıksız blok kaldı mı?</li>
  </ul>

  <p>
    Düzeltmeye nereden başlanacağı sorusunun yanıtı ölçümden çıkıyor.
    <Link href="/geo/geo-kpi-olcumu">GEO KPI ölçümü</Link> tarafında hangi sayfalarınızın hangi
    yanıtlarda kaynak gösterildiğini izliyorsanız, atıf alan ama düzensiz sayfalar öncelikli
    listedir: orada zaten bir ilgi var, yalnızca pasaj yapısı onu boşa harcıyor. Platform
    davranışları da farklılaşıyor — <Link href="/geo/ai-overviews-nedir">AI Bakışı</Link> kısa ve
    tanım niteliğindeki pasajlara yaslanırken,
    <Link href="/geo/perplexity-geo">Perplexity</Link> daha uzun ve kaynak yoğun parçalara alan
    açıyor.
  </p>

  <p>
    Bir de yapmamak gereken bir şey var: mevcut metni parçalamak için cümleleri bölüp her
    birine başlık atmak. Bu, chunk sayısını artırır ama her chunk'ın taşıdığı bilgiyi
    seyreltir. Hedef daha çok parça değil, daha çok <em>kendi başına ayakta duran</em> parça.
    <Link href="/seo/semantik-yazim">Semantik yazım</Link> ilkeleriyle çakışan bir yan yok; ikisi
    aynı yöne çekiyor.
  </p>


  <h2 id="sss">Sıkça Sorulan Sorular</h2>

  <h3>Chunk boyutu ne olmalı?</h3>
  <p>
    Soru-cevap retrieval'ı için 256–512 token aralığı genel olarak en iyi performansı veriyor.
    Türkçe metinde bunun pratik karşılığı yaklaşık 50–120 kelime.
    {/* kaynak: K65 */}
  </p>

  <h3>Türkçe içerikte pasajı neden daha kısa tutmak gerekiyor?</h3>
  <p>
    Çünkü Türkçe sondan eklemeli bir dil ve dil modellerinin kullandığı alt-kelime sözlükleri
    ağırlıklı olarak İngilizce metinle oluşturuldu. Türkçe kelimelerdeki ek zincirleri birden
    fazla parçaya bölünüyor, dolayısıyla aynı anlam daha fazla token harcıyor. Token bütçesi
    sabit olduğu için Türkçe pasaj, aynı bilgiyi taşıyan İngilizce pasajdan daha az kelime
    içerebiliyor. Kesin oran tokenizer'a göre değişir; kendi modelinizin tokenizer'ıyla ölçmek
    en doğrusu.
  </p>

  <h3>Overlap (örtüşme) şart mı?</h3>
  <p>
    Hayır. Ocak 2026'da yayımlanan sistematik bir analiz, chunk overlap'in test edilen
    kurulumda ölçülebilir fayda sağlamadığını, buna karşın indeksleme maliyetini artırdığını
    buldu. Bulgu tek bir kurulumda elde edildi; her mimari için genel kural sayılmamalı.
    {/* kaynak: K65 */}
  </p>

  <h3>Chunking, SEO'nun yerini alır mı?</h3>
  <p>
    Almaz. Güçlü bir bağlantı profili ve teknik SEO temelleri hâlâ gerekli. İçerik chunking,
    iyi yazarlığa dair formatlama ilkelerinin başka bir adı sayılabilir.
    {/* kaynak: K63 */}
    {/* kaynak: K59 */}
  </p>

  <h3>Uzun makale yazmak hâlâ işe yarar mı?</h3>
  <p>
    Yarar, ama mantığı değişti. Uzun içeriğin ortasında kalan bilgiler "lost-in-the-middle"
    sorunuyla gözden kaçabiliyor. Uzunluk kendi başına ne avantaj ne dezavantaj; belirleyici
    olan metnin kaç tane kendi başına anlaşılır pasaja bölünebildiği.
    {/* kaynak: K60 */}
  </p>

  <h3>AI atfı için alan adı otoritesi yeterli mi?</h3>
  <p>
    Tek başına değil. Ölçümler içerik kalitesinin yapay zeka yanıtlarındaki sıralamayı
    chunking'den daha fazla etkilediğini, buna karşılık yalnızca başka kaynakları yeniden
    ifade eden içeriğin daha az atıf aldığını gösteriyor.
    {/* kaynak: K59 */}
    {/* kaynak: K63 */}
  </p>

  <h3>Yanlış chunking ne kadar fark yaratır?</h3>
  <p>
    Aynı corpus ve aynı retriever kullanılsa bile en iyi ile en kötü chunking yöntemi arasında
    %9'a varan recall farkı ölçüldü. Anthropic'in Contextual Retrieval deneyinde ise retrieval
    başarısızlıkları %5,7'den %1,9'a düştü — bu ikinci sayı satıcının kendi test kurulumundan
    geliyor.
    {/* kaynak: K65 */}
  </p>

  <p className="cta">
    Mevcut sayfalarınızın hangi pasajlarının alıntılanabilir durumda olduğunu ve hangilerinin
    retrieval aşamasında elendiğini birlikte çıkarmak isterseniz,
    <Link href="/geo">GEO danışmanlığı</Link> sayfasından kapsam ve çalışma biçimine bakabilirsiniz.
  </p>
                </div>
            </article>
        </div>
    );
}
