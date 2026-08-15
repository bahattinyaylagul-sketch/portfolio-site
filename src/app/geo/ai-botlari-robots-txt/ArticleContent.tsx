/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

const headings = [
    {
        "id": "bot-listesi",
        "text": "Hangi bot ne yapar: eğitim mi, arama mı?"
    },
    {
        "id": "perplexity-tartismasi",
        "text": "Perplexity'nin \"ajan\" savunması"
    },
    {
        "id": "stratejiler",
        "text": "Üç strateji, üç kopya-yapıştır blok"
    },
    {
        "id": "karar",
        "text": "Hangi site hangi bloğu seçmeli?"
    },
    {
        "id": "cloudflare",
        "text": "Cloudflare'in yönetilen robots.txt'i ve \"prepend\" mantığı"
    },
    {
        "id": "content-signals",
        "text": "Content Signals: izin ver/engelle ikilisinin ötesi"
    },
    {
        "id": "sunucu-onlemleri",
        "text": "robots.txt yetmediğinde: sunucu ve WAF katmanı"
    },
    {
        "id": "turkiye",
        "text": "Türkiye'deki kurulumlar için pratik notlar"
    },
    {
        "id": "hatalar",
        "text": "Sık yapılan hatalar"
    },
    {
        "id": "dogrulama",
        "text": "Kuralın işe yaradığını nasıl anlarsınız?"
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
    AI tarayıcılarını tek bir düğmeyle değil, bot bot yönetirsiniz. En işe yarar
    hamle GPTBot'u kapatıp OAI-SearchBot'a izin vermek: model eğitimi için yapılan
    tarama durur, ChatGPT Search'teki görünürlüğünüz yerinde kalır. Ama robots.txt
    bir bariyer değil, rica. Bytespider gibi kuralı tanımayan tarayıcılar için WAF
    ya da sunucu katmanında ayrı bir engel şart.
  </p>
                <aside className="tldr mb-12 p-6 md:p-8 bg-violet-50/50 border border-violet-100/80 rounded-3xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-violet-600 text-white text-xs font-black uppercase tracking-widest rounded-full">TL;DR</span>
                        <span className="tldr-baslik text-sm font-bold text-violet-800">Kısaca</span>
                    </div>
                    <p className="text-gray-800 font-bold text-[15px] leading-relaxed mb-4"><strong>Eğitimi kesmek ile yapay zeka aramasından çekilmek aynı şey değil; doğru user-agent ayrımıyla birincisini yapıp ikincisinden kaçınabilirsiniz.</strong></p>
                    <ul className="space-y-3.5 text-gray-700 text-[15px] leading-relaxed list-none pl-0 my-0"><li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span><code>GPTBot: Disallow</code> + <code>OAI-SearchBot: Allow</code> — sayfadan tek bir şey alacaksanız bu iki satır.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>ChatGPT-User'ı engellemek kullanıcının kendi elleriyle başlattığı getirme isteğini kırar. Neredeyse hiçbir senaryoda mantıklı değil.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Bytespider robots.txt'i tanımıyor. Sunucu ya da WAF katmanında durdurulmazsa "engelledim" cümlesi kâğıt üzerinde kalır.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Cloudflare'in yönetilen robots.txt'i dosyanızı silmez, kurallarını başa ekler; Content Signals ise izin ver/engelle ikilisinin ötesinde lisans sinyali taşır.</span></li></ul>
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
                    <p>
    Bu sayfa <Link href="/geo">GEO danışmanlığı</Link> rehberinin teknik kolundaki
    erişim katmanını anlatıyor: hangi botun ne topladığı, hangisinin kuralı
    dinlediği ve dinlemeyeni nerede durduracağınız. İçeriğin botlar tarafından
    <em>okunabilir</em> olması ayrı bir konu — orası
    <Link href="/geo/javascript-ssr-ai-botlari">JavaScript, SSR ve AI botları</Link>
    sayfasının işi.
  </p>


  <h2 id="bot-listesi">Hangi bot ne yapar: eğitim mi, arama mı?</h2>

  <p className="bolum-cevap">
    AI tarayıcıları tek kategori değil. Bir kısmı model ön-eğitimi için korpus
    topluyor, bir kısmı canlı arama sonucu üretmek üzere sayfayı o an çekiyor,
    bir kısmı da kullanıcının verdiği URL'yi tek seferlik getiriyor. Üçü de aynı
    sunucuya vuruyor ama engellemenin sonucu tamamen farklı: birincisi
    görünürlüğünüze dokunmaz, ikincisi sizi yanıtlardan siler.
    {/* kaynak: K135 */}
  </p>

  <p>
    Aşağıdaki tabloda "robots.txt Uyumu" sütunu üç değer alıyor: <strong>Uyar</strong>
    (şirket kurala saygı duyacağını açıkça taahhüt etmiş), <strong>Uymaz</strong>
    (dosyadaki direktif pratikte geçersiz), <strong>Tartışmalı</strong> (şirket
    kendisini robots.txt'in kapsamı dışında görüyor).
  </p>

  <table>
    <thead>
      <tr>
        <th>Bot</th>
        <th>Şirket</th>
        <th>İşlev</th>
        <th>robots.txt uyumu</th>
        <th>Engellemenin görünürlük etkisi</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>GPTBot</code></td>
        <td>OpenAI</td>
        <td>Model ön-eğitimi</td>
        <td>Uyar</td>
        <td>ChatGPT Search'e etkisi yok; yalnızca eğitim veri kümesinden çıkarsınız</td>
      </tr>
      <tr>
        <td><code>OAI-SearchBot</code></td>
        <td>OpenAI</td>
        <td>ChatGPT Search (31 Ekim 2024'te duyuruldu)</td>
        <td>Uyar</td>
        <td>Engellerseniz ChatGPT Search sonuçlarından düşersiniz</td>
      </tr>
      <tr>
        <td><code>ChatGPT-User/2.0</code></td>
        <td>OpenAI</td>
        <td>Kullanıcı tetiklemeli anlık tarama</td>
        <td>Uyar</td>
        <td>Gerçek zamanlı URL sorgularında görünmezsiniz</td>
      </tr>
      <tr>
        <td><code>ClaudeBot</code></td>
        <td>Anthropic</td>
        <td>Model ön-eğitim korpusu</td>
        <td>Uyar (taahhütlü)</td>
        <td>Claude'un eğitim verisinden çıkarsınız; arama görünürlüğü etkilenmez</td>
      </tr>
      <tr>
        <td><code>Claude-SearchBot</code></td>
        <td>Anthropic</td>
        <td>Claude'un web arama aracı</td>
        <td>Uyar</td>
        <td>Claude'un arama yanıtlarında yer alamazsınız</td>
      </tr>
      <tr>
        <td><code>Google-Extended</code></td>
        <td>Google</td>
        <td>Gemini eğitimi (28 Eylül 2023)</td>
        <td>Uyar</td>
        <td>Google Search sıralamasını etkilemez</td>
      </tr>
      <tr>
        <td><code>CCBot</code></td>
        <td>Common Crawl</td>
        <td>Açık kaynak model eğitimi</td>
        <td>Uyar (<code>Crawl-delay</code> dahil)</td>
        <td>Açık kaynak LLM'lerin eğitim verisinden çıkarsınız</td>
      </tr>
      <tr>
        <td><code>Bytespider</code></td>
        <td>ByteDance</td>
        <td>Doubao LLM eğitimi</td>
        <td>Uymaz</td>
        <td>robots.txt direktifi geçersiz; sunucu ya da WAF engeli gerekir</td>
      </tr>
      <tr>
        <td><code>Perplexity-User</code></td>
        <td>Perplexity</td>
        <td>Ajan tabanlı tarama</td>
        <td>Tartışmalı</td>
        <td>"Bot değil, ajan" savunmasıyla direktifi tanımıyor</td>
      </tr>
    </tbody>
  </table>
  {/* kaynak: K135 */}

  <p>
    Tablodaki en pahalı yanlış anlama şu: "AI botlarını engelledim" diyen çoğu
    site aslında hem eğitimi hem aramayı birden kapatıyor. GPTBot ile
    OAI-SearchBot ayrı user-agent'lar ve OpenAI bunları bilerek ayırdı. Eğitimden
    rahatsızsanız ilkini kapatın; ikincisini kapattığınız anda ChatGPT'nin
    kaynak listesinden çıkarsınız ve bunun geri dönüşü, dosyayı düzelttikten
    sonra yeniden taranmayı beklemektir. Aynı ayrım Anthropic tarafında da var:
    ClaudeBot eğitim, Claude-SearchBot arama.
    {/* kaynak: K135 */}
  </p>

  <p>
    Tabloda yer almayan ama kayıtlarınızda karşınıza çıkacak birkaç isim daha
    var: Amazonbot, Applebot-Extended ve meta-externalagent. Applebot-Extended
    Apple'ın üretken model eğitimini kapsar ve klasik Applebot'tan ayrıdır —
    yani Siri ve Spotlight tarafındaki görünürlüğünüzü kaybetmeden yalnızca
    eğitimi kapatabilirsiniz; yapı OpenAI'ınkiyle aynı mantıkta kurulmuş.
    meta-externalagent ise Meta'nın model eğitim tarayıcısı. Bu üçü kural
    tanıyan tarafta yer alıyor, dolayısıyla robots.txt satırı gerçekten
    karşılık buluyor.
  </p>

  <p>
    Bir de sınıflandırması yeni yeni oturan bir grup var: kullanıcı adına
    çok adımlı iş yapan tarayıcı ajanları. ChatGPT-User/2.0 bunların en
    yaygını. Klasik tarayıcı gibi indeks kurmuyor, bir insanın o an verdiği
    talimatla tek bir sayfayı çekiyor. Erişim kararını verirken bunları
    "bot" kutusuna atmak, kendi ziyaretçinizi kapıda çevirmekle aynı kapıya
    çıkıyor.
  </p>


  <h2 id="perplexity-tartismasi">Perplexity'nin "ajan" savunması</h2>

  <p className="bolum-cevap">
    Perplexity, kullanıcı adına sayfa getiren yazılımını bot değil ajan olarak
    tanımlıyor ve robots.txt'e uymak zorunda olmadığını savunuyor. Argüman şu:
    dosya otomatik tarayıcıları hedefler, kullanıcının o an talep ettiği bir
    getirme işlemi ise tarayıcı ziyaretine daha yakındır. Sonuç pratikte
    dosyanızın Perplexity için bağlayıcı olmamasıdır.
    {/* kaynak: K135 */}
  </p>

  <p>
    Tartışma teoride kalmadı. Cloudflare 4 Ağustos 2025'te yayımladığı raporda
    Perplexity'nin user-agent, IP ve ASN sahteciliğine başvuran gizli tarayıcılar
    kullandığını belgeledi. Bu tek bir altyapı sağlayıcısının kendi ağında
    yaptığı ölçüm — bağımsız doğrulaması olan bir sektör bulgusu değil, ama
    kaynağı da rastgele bir blog değil.
    {/* kaynak: K135 */}
  </p>

  <p>
    Karar verirken şunu ayırın: Perplexity'yi trafik kanalı olarak istiyorsanız
    engellemek zaten amaca aykırı — o durumda yapılacak iş
    <Link href="/geo/perplexity-geo">Perplexity'de kaynak gösterilme</Link> tarafında.
    İstemiyorsanız robots.txt satırı size güvence vermez; işi WAF katmanına
    devredin.
  </p>


  <h2 id="stratejiler">Üç strateji, üç kopya-yapıştır blok</h2>

  <p className="bolum-cevap">
    Yapılandırma seçeneği aslında üç tane: yalnızca eğitimi kesmek, her şeyi
    kapatmak, hiçbir şeye dokunmamak. Hangisini seçeceğiniz yapay zeka
    arayüzlerinde görünmek isteyip istemediğinize bağlı. Kararı verirken
    "içeriğim çalınmasın" refleksiyle "yanıtlarda adım geçsin" hedefinin
    çoğu zaman çeliştiğini hesaba katın.
  </p>

  <p>
    <strong>Blok A — Eğitimi kes, aramada kal.</strong> Sitelerin büyük
    çoğunluğu için doğru başlangıç. Eğitim korpusundan çıkarsınız, ChatGPT
    Search'te ve kullanıcının elle başlattığı getirmelerde kalırsınız.
  </p>

<pre><code>User-agent: GPTBot
Disallow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /</code></pre>

  <p>
    <strong>Blok B — Tümünü engelle.</strong> Ücretli içerik, üyelik arkası
    yayıncılık ya da lisanslama pazarlığı yürüten yayıncılar için. Bedeli
    açık: ChatGPT Search, Claude web araması ve Perplexity yanıtlarından
    çıkarsınız.
  </p>

<pre><code>User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: Google-Extended
Disallow: /</code></pre>

  <p>
    Blok B'deki <code>Bytespider</code> satırı bir niyet beyanı. Dosyayı
    okumadığı için tek başına hiçbir şey yapmaz; asıl engel
    <a href="#sunucu-onlemleri">sunucu katmanında</a> kurulur.
  </p>

  <p>
    <strong>Blok C — Tümüne izin ver.</strong> robots.txt'in varsayılanı zaten
    izindir, dolayısıyla bu blok teknik olarak gereksiz. Yine de yazmanın bir
    faydası var: ekipteki bir başkası aylar sonra dosyayı açtığında "burada bir
    karar verilmiş" görür, kazara <code>Disallow</code> eklemez.
  </p>

<pre><code>User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /</code></pre>

  <p>
    İki uyarı. Birincisi, robots.txt her ana bilgisayar adı ve protokol için
    ayrıdır: <code>blog.siteniz.com</code> kendi dosyasını ister, kök alan
    adınızdaki kural oraya geçmez. İkincisi, <code>Disallow</code> taramayı
    engeller ama halihazırda eğitilmiş modellerden içeriğinizi geri almaz —
    geçmişe dönük bir silme mekanizması değil.
  </p>


  <h2 id="karar">Hangi site hangi bloğu seçmeli?</h2>

  <p className="bolum-cevap">
    Karar tek bir soruya iniyor: içeriğiniz kendi başına satılan bir ürün mü,
    yoksa sizi bulunur kılan bir vitrin mi? Birinci gruptaysanız kapatmanın
    bedeli düşük, ikinci gruptaysanız kapatmak kendi ayağınıza sıkmak. Aradaki
    fark sektör değil iş modeli — aynı sektörde iki site zıt kararlar verebilir.
  </p>

  <p>
    <strong>Hizmet ve B2B siteleri.</strong> Gelir, içeriğin kendisinden değil
    içeriğin getirdiği görüşmelerden geliyor. Yapay zeka arayüzlerinde kaynak
    gösterilmek doğrudan işe yarıyor. Blok A mantıklı; hatta eğitim tarafını da
    açık bırakmak savunulabilir, çünkü marka adınızın model ağırlıklarına
    girmesi uzun vadede lehinize çalışır.
  </p>

  <p>
    <strong>Yayıncılar ve içerik üreticileri.</strong> Burada içerik ürünün
    kendisi. Reklam ya da abonelik geliri sayfa görüntülemeye bağlıysa,
    özetlenip kaynak bile gösterilmeden tüketilmek doğrudan gelir kaybı. Blok B
    ya da Blok A'nın sertleştirilmiş bir hâli tartışılır. Lisans pazarlığı
    ihtimali varsa Content Signals sinyallerini de eklemek işi kolaylaştırır.
  </p>

  <p>
    <strong>E-ticaret.</strong> Ürün sayfalarının yapay zeka yanıtlarında
    geçmesi neredeyse her zaman istenen bir şey; kapatmak için özel bir sebep
    olmalı. Buradaki asıl sorun izin değil yük: filtre ve sıralama
    kombinasyonlarının ürettiği milyonlarca URL, kural tanımayan bir tarayıcı
    tarafından sonuna kadar dolaşılır. Çözüm robots.txt'te bot adlarıyla
    uğraşmak değil, parametreli yolları tüm tarayıcılara kapatmak.
  </p>

  <p>
    <strong>Dokümantasyon ve destek merkezleri.</strong> En net vaka. Bu
    içeriğin amacı sorunun cevaplanması; cevabın nerede verildiği ikincil.
    Açık bırakın, hatta modele okuma haritası sunmayı düşünün.
  </p>


  <h2 id="cloudflare">Cloudflare'in yönetilen robots.txt'i ve "prepend" mantığı</h2>

  <p className="bolum-cevap">
    Cloudflare'in yönetilen robots.txt özelliği mevcut dosyanızı silmez. HTTP 200
    ile doğrulanmış bir robots.txt varsa yeni kuralları dosyanın önüne ekler;
    dosya yoksa sıfırdan oluşturur. Bu ayrım önemli, çünkü çakışan kurallarda
    ilk eşleşen blok kazanır ve sizin elle yazdığınız satırlar Cloudflare'in
    eklediklerinin altında kalır.
    {/* kaynak: K133 */}
  </p>

  <p>
    Etkinleştirme yolu: Security Settings → Bot traffic → "Set your preference
    to block training in robots.txt". Varsayılan olarak Amazonbot,
    Applebot-Extended, Bytespider, CCBot, ClaudeBot, Google-Extended, GPTBot ve
    meta-externalagent için <code>Disallow: /</code> kuralı gelir. Aynı anda
    <code>User-Agent: *</code> için <code>search=yes, ai-train=no,
    use=reference</code> sinyalleri otomatik uygulanır.
    {/* kaynak: K133 */}
  </p>

  <p>
    Dikkat edilecek nokta, bu varsayılan listede <code>OAI-SearchBot</code>
    ya da <code>Claude-SearchBot</code> bulunmaması — yani özellik kutudan
    çıktığı haliyle Blok A mantığına yakın davranıyor, eğitimi kesip aramayı
    açık bırakıyor. Yine de anahtarı çevirmeden önce mevcut dosyanızı bir kez
    okuyun: WordPress gibi sistemler robots.txt'i fiziksel dosya olmadan
    dinamik üretir ve bu da 200 döndüğü için Cloudflare "var" kabul edip
    başa ekleme yapar.
  </p>


  <h2 id="content-signals">Content Signals: izin ver/engelle ikilisinin ötesi</h2>

  <p className="bolum-cevap">
    Content Signals, robots.txt içine yerleştirilen makine tarafından okunabilir
    direktifler kümesi. Klasik <code>Allow</code>/<code>Disallow</code> yalnızca
    erişimi düzenler; Content Signals erişilen içeriğin <em>ne için</em>
    kullanılabileceğini ayrı bir eksende ifade eder. Tarama izni ile kullanım
    izni birbirinden ayrılmış olur.
    {/* kaynak: K133 */}
  </p>

  <p>
    Cloudflare'in test ettiği <code>content-use</code> uzantısı üç düzey
    tanımlıyor:
  </p>

  <ul>
    <li><code>use=immediate</code> — içerikle o an etkileşim kurulur, hiçbir şey depolanıp yeniden kullanılamaz</li>
    <li><code>use=reference</code> — indeksleme, alıntı ve geri bağlantı serbest</li>
    <li><code>use=full</code> — özetleme ve yeniden üretim dahil en geniş izin düzeyi</li>
  </ul>
  {/* kaynak: K133 */}

  <p>
    Hukuki tarafı burada devreye giriyor. Bu kısıtlamalar <strong>AB Direktifi
    2019/790 Madde 4</strong> kapsamında hakların açık rezervasyonu olarak ifade
    edilir. Madde 4, metin ve veri madenciliğine bir istisna tanır ama hak
    sahibinin bunu makine tarafından okunabilir biçimde saklı tutmasına da
    izin verir. Content Signals tam olarak o "makine tarafından okunabilir
    rezervasyon" kutusunu doldurmaya çalışan bir mekanizma.
    {/* kaynak: K133 */}
  </p>

  <p>
    Türkiye'de yerleşik bir site için bu doğrudan bağlayıcı bir yükümlülük
    doğurmaz; sinyalin değeri, AB pazarına içerik sunan ya da ileride lisans
    pazarlığı yapmayı düşünen yayıncılar için niyetin tarihli ve teknik bir
    kaydını bırakmasında. Sinyali koymanın maliyeti birkaç satır, koymamanın
    maliyeti ise "itiraz etmediniz" argümanına açık kalmak.
  </p>

  <p>
    Aynı mantığın içerik tarafındaki karşılığı için
    <Link href="/geo/llms-txt-nedir">llms.txt nedir</Link> sayfasına bakın: robots.txt
    erişimi düzenler, llms.txt ise modele neyi okuması gerektiğini önerir. İkisi
    rakip değil, farklı katmanlar.
  </p>

  <p>
    Content Signals'ın bugünkü zayıf noktası da açık: hiçbir model sağlayıcısı
    bu sinyallere uymayı taahhüt etmiş değil. Yani teknik bir yaptırım değil,
    beyan. Değeri, ileride bir uyuşmazlıkta ya da lisans görüşmesinde
    dayanacağınız kaydı bugünden bırakmak. Dosyaya eklemek beş satır sürüyor,
    kaldırmak bir o kadar; bu asimetri denemeyi ucuz kılıyor.
  </p>


  <h2 id="sunucu-onlemleri">robots.txt yetmediğinde: sunucu ve WAF katmanı</h2>

  <p className="bolum-cevap">
    robots.txt teknik bir bariyer değil, gönüllü bir anlaşmadır. Dosyayı okumayı
    seçmeyen bir istemci için hiçbir yaptırımı yok. Gerçek engel HTTP yanıtında
    kurulur: user-agent ya da IP eşleşmesinde 403 dönmek, hız sınırı uygulamak,
    şüpheli trafiği doğrulama duvarının arkasına almak.
    {/* kaynak: K133 */}
  </p>

  <p>
    Bytespider bu sorunun en somut örneği. HAProxy'nin 2024 raporuna göre AI
    tarayıcı trafiğinin yaklaşık %90'ı Bytespider kaynaklıydı — tek bir altyapı
    şirketinin kendi ağındaki ölçüm olduğunu akılda tutun, sektör ortalaması
    değil. Yön olarak söylediği şey yine de net: "AI botlarını engelledim"
    diyorsanız ama Bytespider'ı sunucu katmanında durdurmadıysanız,
    engellemenin büyük bölümü kâğıt üzerinde kalıyor.
    {/* kaynak: K135 */}
  </p>

  <p>
    Cloudflare kullanıyorsanız iş kolay: Bot Management panelindeki
    <em>AI Scrapers and Crawlers</em> kategorisini etkinleştirmek yeterli.
    Cloudflare'iniz yoksa nginx tarafında iki adım var — bilinen user-agent
    dizesini reddetmek ve kalan bot trafiğine hız sınırı koymak.
    {/* kaynak: K135 */}
  </p>

<pre><code># http {"{"}{"}"} bloğunda tanımlanır
map $http_user_agent $ai_uyumsuz {"{"}
    default        0;
    "~*Bytespider" 1;
{"}"}

limit_req_zone $binary_remote_addr zone=botlar:10m rate=5r/s;

# server {"{"}{"}"} bloğunda uygulanır
server {"{"}
    if ($ai_uyumsuz) {"{"}
        return 403;
    {"}"}

    location / {"{"}
        limit_req zone=botlar burst=20 nodelay;
    {"}"}
{"}"}</code></pre>

  <p>
    User-agent eşleşmesi taklit edilebilir bir sinyaldir; kararlı bir engel
    istiyorsanız bunu IP aralığı kontrolü veya ters DNS doğrulamasıyla
    birleştirin. Hız sınırındaki değerler örnektir — kendi trafiğinize
    bakmadan kopyalamayın, meşru arama motoru botlarını da yakalayabilir.
  </p>


  <h2 id="turkiye">Türkiye'deki kurulumlar için pratik notlar</h2>

  <p className="bolum-cevap">
    Türkiye'deki sitelerin önemli bir kısmı paylaşımlı hosting ya da tek VPS
    üzerinde çalışıyor; nginx yapılandırmasına erişim çoğu zaman yok.
    O durumda WAF katmanını sunucuda değil, önündeki CDN'de kurarsınız.
    Cloudflare'in ücretsiz planı bile tek bir user-agent kuralını çalıştırmaya
    yeter ve alan adı yönlendirmesi dışında bir şey gerektirmez.
  </p>

  <p>
    Sırasıyla denenecek üç yol var. Alan adınız Cloudflare'e bağlıysa WAF →
    Custom rules altında <code>http.user_agent contains "Bytespider"</code>
    ifadesiyle bir <em>Block</em> kuralı açın; ücretsiz planda kural kotası
    sınırlı ama bu iş için bir kural yetiyor. Cloudflare yoksa ve sunucu Apache
    ya da LiteSpeed ise <code>.htaccess</code> içinde
    <code>RewriteCond %{"{"}HTTP_USER_AGENT{"}"}</code> ile aynı engeli kurabilirsiniz —
    LiteSpeed <code>.htaccess</code> kurallarını okur, bu yüzden cPanel'li
    paylaşımlı paketlerde çalışır. Üçüncü seçenek, hosting panelindeki
    ModSecurity kural setine kendi imzanızı eklemek; sağlayıcı destek talebi
    isteyebilir.
  </p>

  <p>
    Maliyet tarafında Türkiye'ye özgü bir mekanizma var ve rakam vermeye gerek
    yok, muhakeme yetiyor. Paylaşımlı paketlerde fatura bant genişliğinden çok
    <em>eşzamanlı PHP işlemi</em> kotasına bağlıdır. Kuralı tanımayan bir
    tarayıcı önbelleğe düşmeyen dinamik URL'leri — arama sonuçları, filtre
    kombinasyonları, sayfalama zincirleri — hızlı hızlı çektiğinde her istek bir
    PHP işçisi tutar. Kota dolduğunda sunucu gerçek kullanıcılara da kaynak
    limiti hatası döndürmeye başlar. Yani zarar "biraz fazla bant genişliği"
    değil, doğrudan erişilebilirlik kaybı olarak görünür.
  </p>

  <p>
    İkinci etken oran meselesi. Yalnızca Türkiye'ye hitap eden bir sitenin insan
    trafiği coğrafi olarak sınırlıdır, oysa tarayıcılar coğrafya tanımaz. Aynı
    mutlak bot hacmi, aylık ziyaretçisi mütevazı bir sitede toplam isteklerin
    çok daha büyük bir dilimini kaplar. Küçük siteler bu yükü büyük sitelerden
    daha ağır hisseder — sezgiye ters ama aritmetik böyle.
  </p>

  <p>
    Engellemeden önce denenmeye değer bir ara adım var: yükü kesmek için
    trafiği durdurmak şart değil, ucuzlatmak yetebilir. Bot isteklerinin
    büyük bölümü zaten aynı birkaç bin sayfaya gidiyor ve bunlar tam sayfa
    önbelleğinden servis edilebilirse PHP hiç çalışmaz. Türkiye'de yaygın
    olan LiteSpeed + LSCache ya da WordPress tarafında sunucu düzeyi önbellek
    kullanan kurulumlarda, önbelleğin oturum açmamış ziyaretçiler için
    gerçekten devrede olduğunu doğrulamak tek başına sorunu çözebilir.
    Önbelleğe düşmeyen şey neyse — arama sonuçları, sepet, filtre
    kombinasyonları — engellenmesi gereken de odur.
  </p>

  <p>
    Alan adı Türkiye'deki bir sağlayıcıda dursa bile önüne bir CDN koymak
    bu işi kolaylaştırıyor, çünkü user-agent kuralı uygulama sunucusuna hiç
    ulaşmadan kenarda çalışır. Kenarda dönen 403, sunucuda dönen 403'ten
    çok daha ucuz. Kurulumda tek dikkat edilecek nokta, kaynak sunucunun
    yalnızca CDN üzerinden erişilebilir olması — IP'si doğrudan açık kalırsa
    kenar kuralı basitçe atlanır.
  </p>

  <p>
    Tahmin yürütmek yerine ölçün. Sunucu erişim kayıtlarında user-agent bazında
    istek sayısı, çekilen bayt ve isabet edilen URL desenleri birkaç dakikada
    çıkar; yöntem <Link href="/seo/log-analizi">log analizi</Link> sayfasında.
    Engellemeden önce ve sonra aynı raporu almak, kuralın işe yarayıp
    yaramadığını gösteren tek dürüst kanıttır.
  </p>


  <h2 id="hatalar">Sık yapılan hatalar</h2>

  <p className="bolum-cevap">
    robots.txt'in sözdizimi basit görünür, tam da bu yüzden yanlışlar sessizce
    yaşar. Dosya hatalı olduğunda uyarı almazsınız; yalnızca beklediğiniz şey
    olmaz. Aşağıdakiler denetimlerde en sık rastladığım kalıplar.
  </p>

  <p>
    <strong>Yıldızla toplu engelleme.</strong> <code>User-agent: *</code>
    altına <code>Disallow: /</code> yazıp "AI botlarını kapattım" sanmak.
    O satır Googlebot'u da kapsar. AI tarafını hedefleyeceksiniz, botları tek
    tek adlandırın.
  </p>

  <p>
    <strong>Grupları boş satırla ayırmamak.</strong> İki <code>User-agent</code>
    satırı arasında boş satır yoksa bunlar tek bir grup sayılır ve altındaki
    kural ikisine birden uygulanır. Blok A'yı boş satırsız yapıştırırsanız
    OAI-SearchBot da <code>Disallow</code> yemiş olur — yani tam istemediğiniz
    şey olur.
  </p>

  <p>
    <strong>Disallow'u noindex sanmak.</strong> Engellenen bir sayfa
    taranmadığı için üzerindeki <code>noindex</code> etiketi de okunamaz.
    Bir URL'nin dizinden çıkmasını istiyorsanız taramayı açık bırakıp etiketi
    okutmanız gerekir. İki mekanizma birbirinin yerine geçmez.
  </p>

  <p>
    <strong>Yolları ters işaretlemek.</strong> <code>Disallow: /panel</code>
    ile <code>Disallow: /panel/</code> aynı şey değil; ilki
    <code>/panelim</code> gibi yolları da kapsar. Ayrıca büyük-küçük harf
    duyarlıdır.
  </p>

  <p>
    <strong>Dosyanın kendisinin kapalı olması.</strong> Bazı güvenlik
    eklentileri ya da CDN kuralları bot user-agent'larına robots.txt için de
    403 döndürür. Bu durumda kural okunmaz, tarayıcı da çoğu zaman
    "kısıtlama yok" varsayar. Doğrulamayı gerçek user-agent ile yapmanın
    sebebi bu.
  </p>


  <h2 id="dogrulama">Kuralın işe yaradığını nasıl anlarsınız?</h2>

  <p className="bolum-cevap">
    Dosyayı yayımlamak doğrulama değildir. Üç şeye ayrı ayrı bakın: dosya doğru
    servis ediliyor mu, uyumlu botlar kurala uymuş mu, uyumsuz olanlar gerçekten
    403 alıyor mu. Üçü farklı yerlerden görünür ve biri düzelirken diğeri
    bozulabilir.
  </p>

  <p>
    İlki en basiti: <code>curl -A "GPTBot" https://siteniz.com/robots.txt</code>
    ile dosyanın 200 döndüğünü ve içeriğin beklediğiniz gibi olduğunu görün.
    Cloudflare'in yönetilen kuralları devredeyse çıktının başında sizin
    yazmadığınız satırlar belirecek — prepend mantığı burada gözle görülür
    hale gelir. Aynı kontrolü kimliksiz bir user-agent ile tekrarlayıp iki
    çıktıyı karşılaştırmak da işe yarar: aralarında fark varsa dosyayı
    koşullu servis eden bir katman var demektir ve bu, kuralın bazı botlara
    hiç ulaşmadığı anlamına gelir.
  </p>

  <p>
    İkincisi kayıt dosyalarında. <code>Disallow</code> verdiğiniz bir bot
    kuralı okuduktan sonra genellikle robots.txt'e uğramaya devam eder ama
    içerik URL'lerini çekmeyi bırakır; kayıtlarda bu deseni görene kadar
    "engellendi" demeyin. Uyumsuz botlarda ise bakılacak şey 403 oranı: istek
    sayısı düşmeyebilir, düşmesi gereken şey 200 dönen istek sayısıdır.
  </p>

  <p>
    Üçüncüsü sonuç tarafı. Erişim kararlarının yapay zeka görünürlüğüne etkisini
    <Link href="/geo/geo-kpi-olcumu">GEO KPI ölçümü</Link>
    çerçevesiyle izleyin; teknik kontrolü rutine bağlamak isterseniz
    <Link href="/geo/geo-teknik-denetim" data-pending="true">GEO teknik denetim</Link>
    listesinde robots.txt maddesi var. Tarama bütçesi ve dosya hijyeninin
    klasik arama tarafındaki karşılıkları da
    <Link href="/seo/teknik-seo">teknik SEO</Link> altında duruyor.
  </p>

  <p>
    Erişimi tümden kapatmak yerine kontrollü bir kanal açmak isteyenler için
    üçüncü bir yol daha var: yapılandırılmış veriyi modele sunucu üzerinden
    vermek. <Link href="/geo/mcp-nlweb">MCP ve NLWeb</Link>
    sayfası bu yaklaşımı ele alıyor. Kaynak gösterilme tarafındaki içerik
    kararları içinse <Link href="/geo/chatgpt-geo">ChatGPT GEO</Link> rehberi.
  </p>


  <h2 id="sss">Sıkça Sorulan Sorular</h2>

  <h3>GPTBot'u engellemek ChatGPT Search'ten çıkarır mı?</h3>
  <p>
    Hayır. GPTBot'u engelleyip OAI-SearchBot'a izin verirseniz eğitim taramasını
    durdururken ChatGPT Search'teki görünürlüğünüzü korursunuz. İkisi ayrı
    user-agent, ayrı boru hattı.
    {/* kaynak: K135 */}
  </p>

  <h3>Google-Extended'ı engellemek arama sıralamama zarar verir mi?</h3>
  <p>
    Vermez. Google-Extended yalnızca Gemini gibi yapay zeka ürünleri için veri
    toplar; Google Search'ün tarama ve sıralama süreçlerinden bağımsızdır.
    {/* kaynak: K135 */}
  </p>

  <h3>CCBot'u engellemek GPTBot'u da engeller mi?</h3>
  <p>
    Hayır, bunlar birbirinden bağımsız boru hatları. CCBot Common Crawl arşivini
    besler; o arşivi kullanan başka modeller olabilir ama OpenAI'ın kendi
    taraması ayrı yürür. Birini kapatmak diğerini kapatmaz.
    {/* kaynak: K135 */}
  </p>

  <h3>Perplexity robots.txt'e uyuyor mu?</h3>
  <p>
    Kısmen. Perplexity-User için şirket "bu bir bot değil, ajan" argümanını öne
    sürüyor ve direktifi bağlayıcı saymıyor. Cloudflare'in 4 Ağustos 2025 tarihli
    raporu ayrıca user-agent, IP ve ASN sahteciliği yapan gizli tarayıcılar
    belgeledi — bu tek bir sağlayıcının kendi ağındaki gözlemi. Engelleme
    niyetiniz ciddiyse WAF ya da sunucu düzeyi daha güvenilir.
    {/* kaynak: K135 */}
  </p>

  <h3>ChatGPT-User'ı engellemeli miyim?</h3>
  <p>
    Neredeyse hiçbir zaman. Bu, bir kullanıcının ChatGPT üzerinden sitenize
    yaptığı gerçek zamanlı getirme isteğidir; engellemek insanın kendi elleriyle
    istediği şeyi kırmak anlamına gelir.
    {/* kaynak: K135 */}
  </p>

  <h3>llms.txt robots.txt'in yerini alır mı?</h3>
  <p>
    Almaz. robots.txt erişim izniyle ilgilenir ve yaygın biçimde tanınır;
    llms.txt ise modele hangi içeriğin okunmaya değer olduğunu öneren, henüz
    standartlaşmamış bir dosyadır. Biri kapıyı, diğeri kapının içindeki
    yönlendirme tabelasını düzenler.
  </p>

  <h3>Alt alan adlarım için ayrı robots.txt gerekir mi?</h3>
  <p>
    Evet. Kural her ana bilgisayar adı ve protokol için ayrıdır; kök alan
    adınızdaki dosya <code>blog.siteniz.com</code> ya da
    <code>shop.siteniz.com</code> için geçerli olmaz. Alt alan adında sık
    unutulan tuzak budur.
  </p>

  <h3>robots.txt'i ne sıklıkla güncellemeliyim?</h3>
  <p>
    Takvime değil tetikleyiciye bağlayın: yeni bir büyük LLM şirketi tarayıcı
    duyurduğunda, mevcut bir botun davranışı değiştiğinde ya da içerik
    stratejiniz değiştiğinde. OpenAI ve Anthropic kuralları saygıyla
    karşılayacaklarını kamuoyu önünde taahhüt etti, dolayısıyla bu iki tarafta
    değişiklik genelde yeni user-agent eklenmesi biçiminde gelir. Yılda bir de
    olsa dosyayı açıp okumak, unutulmuş bir <code>Disallow</code> satırını
    yakalamanın en ucuz yolu.
    {/* kaynak: K134 */}
    {/* kaynak: K135 */}
  </p>

  <p className="cta">
    Erişim kurallarını içerik ve ölçüm tarafıyla birlikte kurgulamak isterseniz
    <Link href="/geo">GEO danışmanlığı</Link> sayfasından başlayın.
  </p>
                </div>
            </article>
        </div>
    );
}
