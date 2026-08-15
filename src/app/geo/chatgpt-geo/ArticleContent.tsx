/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

const headings = [
    {
        "id": "geo-nedir",
        "text": "GEO nedir, SEO'dan nerede ayrılır"
    },
    {
        "id": "chatgpt-nasil-calisir",
        "text": "ChatGPT yanıtını 2026'da nereden kuruyor"
    },
    {
        "id": "iki-bot",
        "text": "ChatGPT'nin botları: GPTBot ile OAI-SearchBot aynı şey değil"
    },
    {
        "id": "oncelik-sirasi",
        "text": "Küçük ve orta ölçekli bir site neyi önce yapmalı"
    },
    {
        "id": "teknik-zemin",
        "text": "Teknik zemin: render, chunking ve sessiz kayıplar"
    },
    {
        "id": "schema",
        "text": "Schema: neyi, hangi sektörde"
    },
    {
        "id": "llms-txt",
        "text": "llms.txt: en sona koyun, hiç koymayabilirsiniz de"
    },
    {
        "id": "icerik",
        "text": "İçerik: cevabı başa koyun, iddiayı çıkarılabilir yazın"
    },
    {
        "id": "varlik",
        "text": "Varlık otoritesi ve bilgi paneli tutarsızlığı"
    },
    {
        "id": "duygu",
        "text": "Duygu sinyalleri: geçmek yetmiyor, nasıl geçtiğiniz de sayılıyor"
    },
    {
        "id": "nis",
        "text": "Niş kazanır, genel kaybeder"
    },
    {
        "id": "eeat",
        "text": "E-E-A-T'yi somutlaştırın"
    },
    {
        "id": "platformlar",
        "text": "Platformlar arasındaki farklar"
    },
    {
        "id": "olcum",
        "text": "Ölçüm ve gerçekçi zaman çizelgesi"
    },
    {
        "id": "araclar",
        "text": "Minimum araç seti"
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
    ChatGPT'de görünmek sıralama işi değil, seçilme işidir. Model bir yanıtı kurarken
    sayfanızı ya kaynak olarak alır ya da hiç anmaz; arada kalınacak bir üçüncü sıra
    yok. Bunu belirleyen şey çoğu sitede içerik kalitesinden önce üç teknik koşuldur:
    botların sayfaya erişebilmesi, içeriğin sunucudan hazır gelmesi ve iddialarınızın
    dışarıdan doğrulanabilir olması.
  </p>
                <aside className="tldr mb-12 p-6 md:p-8 bg-violet-50/50 border border-violet-100/80 rounded-3xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-violet-600 text-white text-xs font-black uppercase tracking-widest rounded-full">TL;DR</span>
                        <span className="tldr-baslik text-sm font-bold text-violet-800">Kısaca</span>
                    </div>
                    <p className="text-gray-800 font-bold text-[15px] leading-relaxed mb-4"><strong>ChatGPT görünürlüğünün önündeki en yaygın engel içeriğinizin kalitesi değil, kendi robots.txt dosyanız.</strong></p>
                    <ul className="space-y-3.5 text-gray-700 text-[15px] leading-relaxed list-none pl-0 my-0"><li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>OpenAI'ın tek bir botu yok. GPTBot eğitim verisi toplar, OAI-SearchBot arama indeksini besler. İkisini ayırarak eğitime kapalı kalıp ChatGPT Search'te görünmeye devam edebilirsiniz — sayfanın en işe yarar tek ayrıntısı bu.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>ChatGPT Search 2026'da hibrit çalışıyor: gövdesini Bing indeksinden alıyor, üstüne OpenAI'ın kendi taramasını bindiriyor. Bing'de indekslenmemek, ChatGPT'de görünmemenin sessiz sebebi olabiliyor.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Sıra şudur: bot erişimi, sunucu tarafı render, schema, varlık kaydı tutarlılığı. llms.txt bu listenin en sonunda ve opsiyonel — hiçbir motor tarafından kullanıldığı doğrulanmadı.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Gerçekçi beklenti 6–12 hafta. Temel modelin sizi "bilmesi" ise ayrı bir iş ve çok daha yavaş.</span></li></ul>
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
                    <h2 id="geo-nedir">GEO nedir, SEO'dan nerede ayrılır</h2>

  <p className="bolum-cevap">
    GEO (Generative Engine Optimization), ChatGPT, Perplexity, Gemini ve AI Bakışı gibi
    üretken motorların içeriğinizi kaynak olarak seçmesini ve atıfta bulunmasını hedefleyen
    çalışmadır. SEO'dan asıl farkı sonuç biçiminde: arama motoru sıralar, dil modeli seçer.
    Google'da üçüncü sıraya düşmek hâlâ trafik getirir; bir ChatGPT yanıtında yer almamak
    sizi o sorgu için tamamen görünmez yapar.
    {/* kaynak: K141 */}
  </p>

  <p>
    Bu ikili yapı, iki disiplini birbirinin rakibi yapmıyor. SEO klasik arama yüzeyindeki
    görünürlüğü korurken GEO, yanıt yüzeyindeki atıf payını inşa ediyor ve büyük ölçüde
    aynı altyapının üstüne kuruluyor. Konunun bütününü
    <Link href="/geo">GEO danışmanlığı sayfasında</Link> ele aldım; burada yalnızca ChatGPT
    yüzeyine odaklanıyorum.
  </p>

  <p>
    Sinyal öncelikleri ise gerçekten farklı. Üretken motorlar ham backlink sayısına değil
    kaynağın güvenilirliğine, anahtar kelime yoğunluğuna değil varlık netliğine ve
    yapılandırılmış, doğrulanabilir gerçeklere bakıyor.
    {/* kaynak: K132 */}
  </p>

  <table>
    <thead>
      <tr><th>Boyut</th><th>SEO</th><th>GEO</th></tr>
    </thead>
    <tbody>
      <tr><td>Hedef yüzey</td><td>Google, Bing sonuç sayfası</td><td>ChatGPT, Perplexity, Gemini, AI Bakışı, AI Modu</td></tr>
      <tr><td>Mekanizma</td><td>Sıralama</td><td>Atıf ya da hiç anılmama</td></tr>
      <tr><td>Başarı ölçüsü</td><td>Sıralama, organik trafik, tıklama oranı</td><td>Yanıt payı, atıf oranı, anılma sıklığı</td></tr>
      <tr><td>Ağırlıklı sinyal</td><td>Bağlantı profili</td><td>Kaynak güveni ve dış doğrulama</td></tr>
      <tr><td>İçerik sinyali</td><td>Anahtar kelime kapsamı</td><td>Varlık netliği, çıkarılabilir gerçek cümleleri</td></tr>
      <tr><td>Geri bildirim hızı</td><td>Günler–haftalar</td><td>Haftalar–aylar, motora göre değişir</td></tr>
    </tbody>
  </table>


  <h2 id="chatgpt-nasil-calisir">ChatGPT yanıtını 2026'da nereden kuruyor</h2>

  <p className="bolum-cevap">
    ChatGPT tek bir bilgi kaynağından çalışmıyor. Yanıtın bir kısmı modelin eğitim
    verisinden, bir kısmı canlı web aramasından geliyor. Arama tarafı hibrit: gövdenin
    büyük bölümü Bing indeksinden besleniyor, OpenAI'ın kendi taraması bunun üstüne
    biniyor. Pratik sonucu şu — Bing sizi indekslememişse ChatGPT Search'ün sizi bulma
    ihtimali ciddi biçimde düşüyor.
  </p>

  <p>
    Bu ayrımı görmek, ölçüm yaparken neye bakacağınızı değiştirir. Bir sorguda ChatGPT
    size atıf veriyorsa bu neredeyse her zaman arama katmanının işidir. Aynı sorguyu
    web erişimi kapalıyken sorduğunuzda markanız yine geçiyorsa, model sizi eğitim
    verisinden biliyor demektir. İkisi farklı hızlarda kazanılır ve farklı işlerle
    beslenir.
  </p>

  <p>
    Bing tarafının ihmal edilmesi Türkiye'de sık görülen bir eksik. Çoğu site Google
    Search Console'u kurup Bing Webmaster Tools'a hiç bakmıyor; sitemap gönderilmemiş,
    indeksleme hataları yıllardır görülmemiş oluyor. Bing indeksinin ChatGPT ve Copilot
    üzerindeki etkisini
    <Link href="/geo/bing-copilot-geo">Bing ve Copilot için GEO</Link>
    sayfasında ayrıca ele alıyorum. Yarım saatlik bir kurulum, aylardır fark edilmeyen
    bir görünürlük kaybını kapatabiliyor.
  </p>


  <h2 id="iki-bot">ChatGPT'nin botları: GPTBot ile OAI-SearchBot aynı şey değil</h2>

  <p className="bolum-cevap">
    OpenAI siteleri tek bir botla taramıyor. GPTBot model eğitimi için veri toplar,
    OAI-SearchBot ChatGPT Search'ün arama indeksini besler, ChatGPT-User ise bir kullanıcı
    ya da ajan istek attığında sayfayı anlık getirir. Üçünü tek kalemde engellemek, eğitim
    verisine girmemek isterken ChatGPT'nin arama sonuçlarından da silinmek anlamına gelir.
    {/* kaynak: K141 */}
  </p>

  <table>
    <thead>
      <tr><th>Bot</th><th>Ne yapar</th><th>Engellerseniz</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><code>GPTBot</code></td>
        <td>Model eğitimi için toplu tarama</td>
        <td>İçeriğiniz gelecek eğitim setlerine girmez. ChatGPT Search'teki görünürlüğünüz doğrudan etkilenmez.</td>
      </tr>
      <tr>
        <td><code>OAI-SearchBot</code></td>
        <td>ChatGPT Search indeksini kurar ve tazeler</td>
        <td>Canlı aramalı yanıtlarda kaynak olarak gösterilmezsiniz. Görünürlük açısından en pahalı engelleme budur.</td>
      </tr>
      <tr>
        <td><code>ChatGPT-User</code></td>
        <td>Kullanıcı ya da ajan bir bağlantıyı açtığında sayfayı getirir</td>
        <td>Kullanıcı doğrudan URL'nizi verdiğinde bile model sayfayı okuyamaz.</td>
      </tr>
    </tbody>
  </table>

  <h3>İçeriğinizin eğitime girmesini istemiyorsanız</h3>

  <p>
    Telif kaygısı ya da editöryel bir tercihle eğitim verisine katılmak istemiyorsanız,
    bunu görünürlüğü feda etmeden yapabilirsiniz. Ayrımı robots.txt seviyesinde
    kurarsınız:
  </p>

  <pre><code>User-agent: GPTBot
Disallow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /</code></pre>

  <p>
    Bu blok "modelimi eğitme, ama beni arayınca bul ve kaynak göster" der. Yayındaki
    sitelerin büyük kısmında ise tam tersi yapılmış durumda: tek bir toplu kural üç botu
    birden kesiyor ve kimse bunun ChatGPT görünürlüğüne mal olduğunu fark etmiyor.
    Bir sağlayıcının ölçümü B2B sitelerinin yaklaşık %40'ının GPTBot'u farkında olmadan
    engellediğini söylüyor — rakam tek kaynağa dayanıyor ve doğrulaması yok, ama sahada
    gördüğüm tablo yönü itibarıyla buna benziyor.
    {/* kaynak: K141 */}
  </p>

  <h3>robots.txt'te izin vermek yetmeyebilir</h3>

  <p>
    Engelleme çoğu zaman robots.txt'te değil, önündeki katmanda oluyor. CDN ve güvenlik
    duvarı panellerinde "yapay zeka botlarını engelle" ayarı bir dönem varsayılan açık
    geldi; bot yönetimi kuralları, hız sınırları ve ülke bazlı filtreler de aynı sonucu
    üretebiliyor. robots.txt'iniz kusursuz olsa bile bot 403 alıyorsa sonuç değişmez.
  </p>

  <p>
    Doğrulaması log üzerinden yapılır: sunucu erişim kayıtlarında son 30 güne bakıp
    <code>OAI-SearchBot</code> ve <code>GPTBot</code> user-agent'larını arayın, dönen
    durum kodlarını sayın. Hiç kayıt yoksa bot hiç gelmemiş; 403 ya da 429 varsa
    engelleniyorsunuz. Bot yönetiminin bütün ayrıntısı
    <Link href="/geo/ai-botlari-robots-txt">yapay zeka botları ve robots.txt</Link>
    sayfasında.
  </p>

  <p>
    Bir de geri alınamazlık meselesi var. GPTBot'u bugün engellemek, geçmiş eğitim
    setlerinden çıkmanızı sağlamaz; model sizi zaten öğrendiyse o bilgi yerinde kalır.
    Engelleme ileriye dönük çalışır. Kararı bu çerçevede vermek gerekiyor.
  </p>

  <p>
    Ajan tarafı da hızla büyüyor. Kullanıcı adına gezinen tarayıcı ve asistan modları,
    sayfayı ChatGPT-User benzeri bir getiriciyle açıyor ve gördüğü HTML üzerinden işlem
    deniyor. Bu isteklere kapalı olmak, ileride bir ajanın sizin üzerinizden randevu
    alması, fiyat karşılaştırması ya da form doldurmasının önünü kesiyor. Ticari sayfalarda
    bu botu engellemenin bedeli, eğitim engellemesinin bedelinden daha somut olacak.
  </p>


  <h2 id="oncelik-sirasi">Küçük ve orta ölçekli bir site neyi önce yapmalı</h2>

  <p className="bolum-cevap">
    Kaynağı sınırlı bir ekibin GEO listesini baştan sona uygulaması gerekmiyor. İşlerin
    etkisi eşit değil ve sıralaması bellidir: erişim düzeltmeleri bir günde biter ve
    etkisi en büyüğüdür, varlık kaydı temizliği haftalar sürer ama kalıcıdır, deneysel
    dosyalar ise sona kalır. Aşağıdaki sıra bu maliyet–etki dengesine göre kurulmuş
    durumda.
  </p>

  <h3>Önce erişim, çünkü diğer her şeyin ön koşulu</h3>
  <p>
    robots.txt kontrolü, CDN bot kuralları, log doğrulaması. Bu adım tamamlanmadan
    yapılan içerik çalışması boşa gider; kimse okumadığı bir sayfayı kaynak gösteremez.
    Tipik olarak yarım gün.
  </p>

  <h3>Sonra sunucu tarafı render</h3>
  <p>
    Ana içeriğiniz tarayıcıda JavaScript çalıştıktan sonra beliriyorsa, AI botlarının
    çoğu boş sayfa görür. Google'ın render kapasitesine güvenmek burada işe yaramıyor —
    OpenAI'ın tarayıcıları aynı bütçeyle çalışmıyor.
  </p>

  <h3>Ardından üç şema tipi</h3>
  <p>
    Organization, Article ve FAQPage ile başlayın. Bu üçü çoğu sitenin ihtiyacının
    büyük bölümünü karşılar; geri kalanı sektöre göre eklenir.
  </p>

  <h3>Varlık kaydınızı tutarlı hale getirin</h3>
  <p>
    Adınız, kuruluş yılınız, adresiniz ve kurucu bilginiz site içinde, LinkedIn'de,
    dizinlerde ve Wikidata'da aynı olmalı. Bu iş yavaş ilerler ama bir kez oturduğunda
    bütün motorlara birden yarar.
  </p>

  <h3>En sonda, isterseniz, llms.txt</h3>
  <p>
    Beş dakikalık bir iş ve zararı yok. Ama listenin başına koyup önündeki dört maddeyi
    ertelemek, sahada gördüğüm en yaygın önceliklendirme hatası. Gerekçesi bir sonraki
    bölümde.
  </p>


  <h2 id="teknik-zemin">Teknik zemin: render, chunking ve sessiz kayıplar</h2>

  <p className="bolum-cevap">
    AI botları klasik arama motorlarından daha az sabırlı davranıyor. Sayfayı çeker,
    HTML'de ne varsa onu alır ve gider. Tarayıcıda üretilen içerik, sekme ardına
    gizlenmiş metin, kaydırınca yüklenen bölümler — bunların hepsi motor tarafında
    yokmuş gibi davranılır. Kayıp sessizdir, hiçbir panelde hata olarak görünmez.
  </p>

  <p>
    En sık rastladığım biçim şu: ürün açıklamaları, fiyatlar ya da SSS blokları bir
    API çağrısıyla sonradan doldurulur. Kullanıcı için sorun yok, Googlebot da bir
    şekilde görüyor, ama OAI-SearchBot'un aldığı HTML'de o alanlar boş. Sayfa
    indekslenmiş görünür, içeriği taşımaz. Ayrıntısı için
    <Link href="/geo/javascript-ssr-ai-botlari">JavaScript, SSR ve AI botları</Link>
    sayfasına bakın.
  </p>

  <p>
    Testi basit: sayfanın kaynak kodunu ham haliyle çekip (<code>curl</code> ya da
    "Sayfa kaynağını görüntüle") içinde cevabın geçtiği cümleleri arayın. Bulamıyorsanız
    model de bulamıyor. Aynı testi sıkça kaybedilen alanlar için tek tek yapın: sekmelerin
    arkasındaki teknik özellikler, akordeon içindeki SSS blokları, "devamını oku" ile açılan
    metin, sonsuz kaydırmayla yüklenen liste sayfaları ve üçüncü taraf bir widget'a
    gömülmüş yorumlar. Bunların hepsi kullanıcıya görünür, HTML'de yok.
  </p>

  <p>
    Render sorununu çözdükten sonra sıra parçalanabilirliğe gelir. Modeller sayfayı bütün
    olarak değil, anlam bloklarına ayırarak alıyor. Bir başlık altındaki metin tek bir
    soruyu baştan sona cevaplıyorsa o blok tek başına taşınabilir; üç farklı konu iç içe
    geçmişse blok bağlamından koparak anlamsızlaşır.
    <Link href="/geo/icerik-chunking">İçerik chunking</Link> bu yüzden
    biçimsel bir tercih değil, alınabilirlik meselesi.
  </p>

  <p>
    Sayfa hızı tarafında ise abartılmaya değmez. Core Web Vitals metrikleri kullanıcı
    deneyimi için anlamlı, ama bir dil modelinin sizi kaynak seçmesinde doğrudan rol
    oynamıyor. Dolaylı etkisi var: ağır sayfalar tarama bütçesini yer ve zaman aşımına
    uğrayan istekler tamamen boş döner.
  </p>


  <h2 id="schema">Schema: neyi, hangi sektörde</h2>

  <p className="bolum-cevap">
    Yapılandırılmış veri atıf garantisi vermiyor. Yaptığı iş, sayfadaki iddiaları
    makinenin karıştırmayacağı bir biçime çevirmek: kimin yazdığı, hangi kurumun
    yayınladığı, neyin fiyat neyin tarih olduğu. Model bu bilgiyi metinden de çıkarabilir,
    ama schema varken çıkarımın hata payı düşer ve varlığınızı doğru düğüme bağlar.
    {/* kaynak: K132 */}
  </p>

  <p>
    JSON-LD dışındaki biçimlerle uğraşmaya gerek yok. Organization şemasında
    <code>sameAs</code> alanını doldurmak, tek başına, çoğu küçük sitenin yaptığı en
    yüksek getirili schema işidir — çünkü varlığınızı dış kaynaklara bağlar.
  </p>

  <table>
    <thead>
      <tr><th>Sektör / sayfa tipi</th><th>Öncelikli şema</th><th>Neden</th></tr>
    </thead>
    <tbody>
      <tr><td>Her site</td><td>Organization</td><td>Varlık kimliğinin çapası; <code>sameAs</code> ile dış doğrulamayı taşır</td></tr>
      <tr><td>Blog, rehber</td><td>Article + Person (author)</td><td>Yazarlık ve tarih bilgisi, güncellik değerlendirmesine girer</td></tr>
      <tr><td>Hizmet sayfaları</td><td>Service + FAQPage</td><td>Kapsam ve sık sorulanlar doğrudan yanıt malzemesi</td></tr>
      <tr><td>E-ticaret</td><td>Product + Offer + AggregateRating</td><td>Fiyat, stok ve puan modelin en çok yanlış aktardığı alanlar</td></tr>
      <tr><td>Yerel işletme</td><td>LocalBusiness</td><td>Adres ve çalışma saati tutarlılığı, "yakınımdaki" sorgularının temeli</td></tr>
      <tr><td>Eğitim, nasıl yapılır</td><td>HowTo</td><td>Adım sırasının bozulmadan taşınmasını sağlar</td></tr>
    </tbody>
  </table>

  <p>
    Speakable şemasını listeye almadım. Sesli yanıt için tasarlandı, sınırlı bir pilot
    kapsamında kaldı ve ChatGPT'nin bu işaretlemeyi atıf seçiminde kullandığına dair
    doğrulanmış bir bulgu yok. Zamanınızı Organization ve FAQPage'e ayırın.
  </p>


  <h2 id="llms-txt">llms.txt: en sona koyun, hiç koymayabilirsiniz de</h2>

  <p className="bolum-cevap">
    llms.txt, sitenizin içeriğini dil modellerine özetleyen bir kök dizin dosyası
    önerisi. Fikir mantıklı görünüyor ama 2026 ortası itibarıyla hiçbir büyük motor bu
    dosyayı okuduğunu doğrulamadı; Google tarafından gelen açıklama önerinin desteklenmediği
    yönündeydi. Zararı yok, maliyeti düşük, etkisi ise ölçülmemiş durumda.
  </p>

  <p>
    Sorun dosyanın kendisi değil, listedeki yeri. Bir ekip llms.txt hazırlamaya yarım gün
    ayırıp CDN'inde OAI-SearchBot'un engellendiğini fark etmiyorsa, net etki sıfırın
    altındadır. Erişim, render, schema ve varlık kaydı bitmeden bu dosyaya sıra gelmez.
    Konunun tam dökümü ve karşı argümanlar
    <Link href="/geo/llms-txt-nedir">llms.txt nedir</Link> sayfasında.
  </p>


  <h2 id="icerik">İçerik: cevabı başa koyun, iddiayı çıkarılabilir yazın</h2>

  <p className="bolum-cevap">
    Model bir sayfayı okurken hikâyeyi takip etmiyor, kullanabileceği cümleleri arıyor.
    Sorunun cevabı üçüncü paragrafta bir geçiş cümlesinin ardına saklanmışsa o cümle
    seçilmez. Başlığın hemen altında, kendi başına ayakta duran, öznesi belli bir cevap
    cümlesi ise doğrudan alınabilir hale gelir ve yanıtın içine olduğu gibi taşınabilir.
    {/* kaynak: K141 */}
  </p>

  <p>
    Bir sağlayıcının ölçümü, cevabı öne alan yapının anlatı biçimine göre yaklaşık üç kat
    fazla atıf aldığını söylüyor. Bu rakam tek kaynaklı ve bağımsız doğrulaması yok;
    yine de mekanizma makul, çünkü çıkarılabilir bir cümle ile bağlama gömülü bir ima
    arasındaki fark modelin işini doğrudan kolaylaştırıyor.
    {/* kaynak: K141 */}
  </p>

  <p>
    Pratikte üç alışkanlık yeter. Her H2'nin altına o başlığın sorusunu cevaplayan kısa
    bir paragraf koyun. Sayı, tarih ve tanım gibi gerçekleri ayrı cümlelere ayırın, uzun
    bir cümlenin içine üç veri birden sıkıştırmayın. Karşılaştırmaları tabloya çevirin —
    tablo satırı modelin en temiz aldığı biçimlerden biri.
  </p>

  <p>
    Somut bir örnek fark ediyor. "Yapay zeka arama optimizasyonu maliyeti ajanstan ajansa
    değişmekle birlikte, projenin kapsamına ve sektörün rekabet düzeyine göre farklılık
    gösterebilmektedir" cümlesi hiçbir soruyu cevaplamıyor; model bundan alınabilir tek bir
    gerçek çıkaramaz. Aynı bilgiyi "GEO projeleri Türkiye'de tipik olarak üç ile altı aylık
    bir kapsamla planlanır; bütçe, teknik düzeltme yükü ve içerik hacmiyle ölçeklenir"
    biçiminde yazdığınızda ortaya taşınabilir bir cümle çıkıyor. Fark üslupta değil, cümlenin
    tek başına ayakta durup durmamasında.
  </p>

  <p>
    Bunun klasik SEO'ya zararı yok. Cevabı öne almak, kullanıcı için de daha iyi bir
    sayfa üretiyor; tarama davranışı zaten uzun girişleri atlayarak ilerliyor.
  </p>


  <h2 id="varlik">Varlık otoritesi ve bilgi paneli tutarsızlığı</h2>

  <p className="bolum-cevap">
    Modeller markanızı bir metin dizisi olarak değil, bilgi grafiğindeki bir düğüm olarak
    tutuyor. O düğümün etrafındaki bilgi çelişkiliyse model iki şeyden birini yapar:
    ya en çok tekrar edilen versiyonu doğru kabul eder ya da güvenmediği için markanızı
    hiç anmaz. İkincisi daha sık görülüyor ve fark edilmesi daha zor.
    {/* kaynak: K132 */}
  </p>

  <p>
    Tutarsızlık genelde şu alanlarda çıkıyor: yasal unvan ile pazarlama adının farklı
    olması, sitede yazan kuruluş yılının LinkedIn'dekiyle uyuşmaması, taşınmış ofisin
    eski adresinin dizinlerde kalması, kurucu adının bazı yerlerde kısaltılmış yazılması.
    Tek tek önemsiz görünürler; bir arada modelin varlık çözümlemesini bozarlar.
  </p>

  <p>
    Wikidata bu tabloda özel bir yerde duruyor, çünkü büyük modellerin beslendiği açık
    bilgi grafiği kaynaklarından biri. Bir Wikidata kaydınız varsa Organization şemasındaki
    <code>sameAs</code> alanına ekleyin; yoksa ve kayda değer bir varlıksanız açılması
    değerlendirilmeli. Yöntemi
    <Link href="/geo/wikidata-bilgi-paneli">Wikidata ve bilgi paneli</Link>
    sayfasında, varlık çalışmasının bütünü ise
    <Link href="/geo/entity-seo">Entity SEO</Link> sayfasında.
  </p>

  <p>
    Kontrolü şöyle yapabilirsiniz: ChatGPT'ye markanızın ne yaptığını, ne zaman
    kurulduğunu ve kimin kurduğunu ayrı ayrı sorun. Yanlış cevap aldığınız her alan,
    dışarıda düzeltilmesi gereken bir kayda işaret ediyor. Düzeltme sitenizde değil,
    çelişkinin kaynağında yapılır.
  </p>


  <h2 id="duygu">Duygu sinyalleri: geçmek yetmiyor, nasıl geçtiğiniz de sayılıyor</h2>

  <p className="bolum-cevap">
    Üretken bir motor markanızı andığında yalnızca adınızı taşımıyor, bir çerçeve de
    kuruyor. "Kurumsal ekipler için güçlü bir seçenek" ile "destek tarafında şikâyet
    alan bir sağlayıcı" aynı anılma sayısına düşer ama tamamen farklı sonuç üretir.
    Yanıt payını ölçüp duygu yönünü ölçmemek, panonun yarısını okumak demek.
    {/* kaynak: K132 */}
  </p>

  <p>
    Bu çerçeve büyük ölçüde sizin sitenizden değil, sizin hakkınızda yazılanlardan geliyor.
    İnceleme siteleri, forum başlıkları, karşılaştırma yazıları ve haber içerikleri modelin
    ton kaynağı. Kendi sayfanızda "sektörün lideri" yazmanız burada hiçbir şey değiştirmiyor.
  </p>

  <p>
    Ölçmek için sabit bir soru seti kurun ve yanıtları yalnızca "geçtim / geçmedim" diye
    değil, kullanılan sıfatlarla birlikte kaydedin. Aynı olumsuz nitelemenin farklı
    motorlarda tekrar ettiğini görüyorsanız, kaynağı bulunabilir bir yerde duruyor
    demektir — çoğu zaman tek bir eski inceleme ya da yoğun okunmuş bir forum başlığı.
  </p>

  <p>
    Düzeltmenin yolu o kaynağı sildirmeye çalışmaktan geçmiyor; genelde mümkün de değil.
    İşe yarayan şey karşı ağırlık üretmek: aynı konuda güncel, doğrulanabilir ve başka
    yerlerde alıntılanan içerik çıkarmak, eski şikâyetin ele alındığını gösteren açık bir
    kayıt bırakmak, inceleme platformlarındaki yanıt alanlarını boş bırakmamak. Model
    çoğunluğa bakıyor; tek bir olumsuz kaynağın ağırlığı, yanına konan doğrulanmış
    içerikle azalıyor.
  </p>


  <h2 id="nis">Niş kazanır, genel kaybeder</h2>

  <p className="bolum-cevap">
    "En iyi CRM" gibi geniş sorgularda küçük bir sitenin ChatGPT yanıtına girme şansı
    düşük; o alanı büyük yayıncılar ve inceleme platformları tutuyor. Aynı site
    "50 kişilik bir ajansın Türkçe destekli CRM'de bakması gerekenler" sorusunda rahatlıkla
    kaynak olabiliyor, çünkü o spesifik soruyu doğrudan cevaplayan başka içerik yok.
  </p>

  <p>
    Bunun sebebi motorların sorguyu parçalamasında. Model geniş bir soruyu alt sorulara
    bölüp her biri için ayrı kaynak topluyor; alt soruların bir kısmı son derece dar
    oluyor. Rekabetin seyreldiği yer tam olarak orası.
  </p>

  <p>
    Somutlaştıralım. "Türkiye'de e-ihracat yapan bir firma hangi muhasebe yazılımını
    kullanmalı" sorusu arka planda birden çok alt soruya dağılıyor: yazılımın çoklu para
    birimi desteği, e-fatura entegrasyonu, gümrük beyanı uyumu, yurt dışı pazaryeri
    bağlantıları. Genel yazılım karşılaştırmaları ilk iki alt soruyu doyuruyor, ama gümrük
    ve pazaryeri tarafında ortada neredeyse kaynak yok. O boşluğu dolduran tek sayfa
    sizseniz, marka büyüklüğünden bağımsız olarak yanıta giriyorsunuz.
  </p>

  <p>
    Stratejik karşılığı net: içerik planını kategori başlıklarına göre değil, müşterinin
    gerçekten sorduğu cümlelere göre kurun. Satış görüşmelerinde tekrar eden sorular,
    destek kayıtlarındaki tipik problemler ve sektöre özgü kısıtlar bu listeyi üretir.
    Geniş rehberler otoriteyi taşır, dar sayfalar atıfı getirir.
  </p>


  <h2 id="eeat">E-E-A-T'yi somutlaştırın</h2>

  <p className="bolum-cevap">
    Deneyim, uzmanlık, otorite ve güvenilirlik sinyalleri metinde iddia edildiğinde değil,
    sayfada kanıtlandığında işe yarıyor. Model "20 yıllık tecrübe" cümlesini doğrulayamaz;
    ama adı geçen bir yazarın kendi profil sayfasına bağlanmasını, o profilin dış
    platformlarda karşılığı olmasını, güncelleme tarihini, kaynak bağlantılarını ve künye
    bilgisini yapısal olarak görebilir.
  </p>

  <p>
    Yapılacaklar sıkıcı ama kısa: her içeriğin gerçek bir yazarı olsun ve o yazarın
    kimliği site içinde tek bir sayfada toplansın ve o sayfa dış profillere bağlansın;
    güncelleme tarihi görünsün; veri
    içeren iddialar kaynağına bağlansın; iletişim ve yasal bilgiler bulunabilir olsun.
    Ayrıntılı çerçeveyi <Link href="/seo/eeat-sinyalleri">E-E-A-T sinyalleri</Link> sayfasında
    yazdım.
  </p>


  <h2 id="platformlar">Platformlar arasındaki farklar</h2>

  <p className="bolum-cevap">
    ChatGPT için yaptığınız işin büyük kısmı diğer motorlarda da işe yarar, ama davranışları
    aynı değil. Perplexity kaynakları açıkça listeler ve neredeyse gerçek zamanlı indeksler;
    Gemini ve AI Modu Google'ın kendi altyapısına yaslanır; ChatGPT'nin arama katmanı Bing'e
    bağlıdır. Ölçüm ve beklenti bu farklara göre ayarlanır.
    {/* kaynak: K132 */}
  </p>

  <table>
    <thead>
      <tr><th>Yüzey</th><th>İndeks kaynağı</th><th>Atıf davranışı</th><th>İlk etkiye kadar</th></tr>
    </thead>
    <tbody>
      <tr><td>ChatGPT Search</td><td>Bing + OpenAI taraması</td><td>Sorguya göre değişken; bazen yalnızca metin içi anılma</td><td>6–10 hafta</td></tr>
      <tr><td>ChatGPT (arama kapalı)</td><td>Eğitim verisi</td><td>Atıf yok, yalnızca anılma</td><td>3–6 ay, model güncellemesine bağlı</td></tr>
      <tr><td>Perplexity</td><td>Kendi taraması</td><td>Kaynakları numaralı listeler, en şeffaf yüzey</td><td>6–10 hafta</td></tr>
      <tr><td>AI Bakışı</td><td>Google indeksi</td><td>Bağlantı kartları, sınırlı sayıda kaynak</td><td>4–8 hafta</td></tr>
      <tr><td>Gemini / AI Modu</td><td>Google indeksi</td><td>Fan-out sonrası az sayıda kaynak</td><td>4–8 hafta</td></tr>
    </tbody>
  </table>

  <p>
    Her yüzey için ayrı sayfa yazdım:
    <Link href="/geo/perplexity-geo">Perplexity GEO</Link>,
    <Link href="/geo/ai-overviews-nedir">AI Bakışı nedir</Link>,
    <Link href="/geo/google-ai-modu">Google AI Modu</Link> ve
    <Link href="/geo/gemini-geo">Gemini GEO</Link>.
    Yalnızca tek bir yüzeye optimize etmek kısa vadede pratik görünse de diğer motorlardan
    gelen talebi kaçırtıyor; bir sağlayıcı ölçümü karmaşık B2B aramalarının yaklaşık
    %65'inde AI Bakışı çıktığını söylüyor, ama o oran diğer yüzeylerin sıfır olduğu
    anlamına gelmiyor.
    {/* kaynak: K141 */}
  </p>

  <h3>ChatGPT'ye sayfa gönderemezsiniz, Perplexity'ye gönderebilirsiniz</h3>

  <p>
    Aradaki en pratik fark burada. Perplexity, indekslenmesini istediğiniz adresleri
    doğrudan iletebileceğiniz bir gönderim yolu sunuyor; yeni yayınlanan bir sayfanın
    yanıtlara girme süresini kısaltıyor. OpenAI tarafında böyle bir kanal yok. ChatGPT'de
    yeni içeriğin görünmesi, OAI-SearchBot'un kendi takvimiyle uğramasına ve Bing'in
    sayfayı indekslemesine bağlı.
  </p>

  <p>
    Elinizdeki tek hızlandırıcı dolaylı: sitemap'i güncel tutmak, iç bağlantılarla yeni
    sayfayı sık taranan sayfalardan işaret etmek ve Bing Webmaster Tools'tan URL
    göndermek. Yeni bir sayfanın ChatGPT yanıtlarında belirmesi için birkaç hafta beklemek
    normal; ilk hafta sonuç görmemek bir hata işareti değil.
  </p>


  <h2 id="olcum">Ölçüm ve gerçekçi zaman çizelgesi</h2>

  <p className="bolum-cevap">
    ChatGPT görünürlüğünü tek bir sayıya indiremezsiniz. İzlenmeye değer dört şey var:
    sabit bir soru setinde kaç yanıtta geçtiğiniz, kaçında kaynak gösterildiğiniz,
    anılmaların tonu ve rakiplerinizin aynı sette aldığı pay. Bunların hiçbiri GA4'te
    görünmez; GA4 yalnızca yanıttaki bağlantıya tıklandıktan sonrasını gösterir, motorun
    içinde olan biteni değil.
    {/* kaynak: K132 */}
  </p>

  <p>
    Ölçümün kendisi araç gerektirmiyor. 25–30 soruluk sabit bir set kurun, ayda bir kez
    temiz bir oturumda çalıştırın, sonucu basit bir tabloya yazın: soru, motor, geçtiniz mi,
    atıf aldınız mı, hangi cümlede. Setin sabit kalması sayısından daha önemli — her ay
    değiştirilen yüz soruluk bir set hiçbir eğilim göstermez. Kurulumun ayrıntısı
    <Link href="/geo/geo-kpi-olcumu">GEO KPI ölçümü</Link> sayfasında.
  </p>

  <h3>GA4'ten ne alabilirsiniz, ne alamazsınız</h3>

  <p>
    GA4 atıf oranını ölçmez, çünkü atıf sizin sitenizde değil motorun içinde gerçekleşir.
    Gösterebildiği tek şey, bir kullanıcı yanıttaki bağlantıya tıkladıktan sonra oluşan
    oturum. Bunu görünür kılmak için yönlendiren alan adlarına göre bir segment kurmak
    gerekiyor: <code>chatgpt.com</code>, <code>perplexity.ai</code>, <code>copilot.microsoft.com</code>
    ve benzerleri. Keşif raporlarında yönlendiren kaynağı boyut olarak ekleyip bu listeyi
    filtre haline getirmek yeterli.
  </p>

  <p>
    Rakamın eksik geleceğini baştan kabul edin. Bazı arayüzler yönlendiren bilgisini hiç
    göndermiyor, bir kısmı da doğrudan trafik gibi görünüyor. GA4'teki yapay zeka trafiği
    gerçek hacmin alt sınırıdır; eğilimi izlemeye yarar, mutlak büyüklüğü ölçmeye yaramaz.
    Bu yüzden prompt seti ölçümüyle birlikte okunması gerekiyor — biri motorun içini,
    diğeri dışını görüyor.
  </p>

  <h3>6–12 hafta: gerçekçi olan bant</h3>

  <p>
    Erişim düzeltmelerinin etkisi en hızlı görülen kısım. robots.txt ya da CDN kuralını
    açtıktan sonra ilk iki hafta içinde loglarda bot trafiğinin döndüğünü görürsünüz;
    bu, sonuç değil sonucun ön koşulu.
  </p>

  <p>
    Dördüncü ile sekizinci hafta arasında Google tarafındaki yüzeylerde ilk görünümler
    çıkmaya başlıyor, çünkü indeksleme ve şema işleme oradaki döngü daha hızlı. Altıncı
    ile onuncu hafta arasında Perplexity ve ChatGPT Search atıfları belirginleşiyor.
    Onikinci haftada elinizde bir eğilim çizgisi olur; öncesinde gördüğünüz dalgalanma
    büyük ölçüde gürültü.
    {/* kaynak: K141 */}
  </p>

  <p>
    Temel modelin sizi bilmesi bambaşka bir zaman ölçeğinde. Eğitim döngüleri aylarla
    ifade ediliyor ve dışarıdan hızlandıramazsınız; oradaki tek kaldıraç, model bir
    sonraki turda veriyi topladığında sizin hakkınızda yeterince dış kaynak bulunmasıdır.
    Bu da dijital PR ve anılma işinin neden yavaş ama kalıcı olduğunu açıklıyor.
    {/* kaynak: K141 */}
  </p>


  <h2 id="araclar">Minimum araç seti</h2>

  <p className="bolum-cevap">
    GEO için yeni bir yazılım yığını kurmanız gerekmiyor. Elinizdeki SEO araçları işin
    büyük kısmını görüyor; eksik olan tek şey yanıt yüzeyindeki davranışı kaydeden bir
    tablo, o da manuel tutulabiliyor. Aşağıdaki liste kategori bazlı — ürün adları hızla
    değişiyor, aracı değil ölçtüğü şeyi seçin.
    {/* kaynak: K132 */}
  </p>

  <table>
    <thead>
      <tr><th>Kategori</th><th>Örnek</th><th>GEO'daki işlevi</th></tr>
    </thead>
    <tbody>
      <tr><td>Arama konsolları</td><td>Google Search Console, Bing Webmaster Tools</td><td>İndeksleme ve teknik uygunluk; Bing tarafı ChatGPT için doğrudan önemli</td></tr>
      <tr><td>SEO paketi</td><td>Semrush, Ahrefs</td><td>Bağlantı ve içerik verisi, rakip karşılaştırması</td></tr>
      <tr><td>Sunucu logları</td><td>Ham erişim kayıtları, log analizörü</td><td>AI botlarının gerçekten gelip gelmediğinin tek kesin kanıtı</td></tr>
      <tr><td>Schema doğrulama</td><td>Schema.org validator, Rich Results Test</td><td>JSON-LD hatalarını yakalar</td></tr>
      <tr><td>Marka izleme</td><td>Mention, Brandwatch benzeri araçlar</td><td>Varlık grafiğini besleyen dış anılmaları takip eder</td></tr>
      <tr><td>Manuel prompt seti</td><td>ChatGPT, Perplexity, Gemini + bir tablo</td><td>Gerçek atıf davranışını doğrudan gösterir; en ucuz ve en dürüst yöntem</td></tr>
    </tbody>
  </table>


  <h2 id="sss">Sıkça Sorulan Sorular</h2>

  <h3>GPTBot'u engellersem ChatGPT'de görünmez miyim?</h3>
  <p>
    Hayır. GPTBot yalnızca model eğitimi için veri toplar. ChatGPT Search'teki görünürlüğünüzü
    belirleyen bot OAI-SearchBot'tur. İkisini robots.txt'te ayırarak eğitime kapalı kalıp
    arama sonuçlarında görünmeye devam edebilirsiniz. Yaygın hata, tek bir toplu kuralla
    üçünü birden kesmek.
  </p>

  <h3>llms.txt eklemeli miyim?</h3>
  <p>
    İsterseniz ekleyin, ama listenin başına koymayın. Hiçbir büyük motorun bu dosyayı
    kullandığı doğrulanmadı.
  </p>

  <h3>ChatGPT'de kaynak olmak için backlink şart mı?</h3>
  <p>
    Bağlantılar dolaylı yardım ediyor, çünkü hem Bing indekslemesini hem de dış doğrulamayı
    besliyorlar. Ama tek başına belirleyici değiller. Aynı otoriteye sahip iki sayfadan,
    cevabı başlığın hemen altında net bir cümleyle veren seçiliyor; diğeri taranıp
    kullanılmadan bırakılıyor.
  </p>

  <h3>Bing'de indekslenmemek gerçekten ChatGPT'yi etkiler mi?</h3>
  <p>
    Evet, arama katmanı için. ChatGPT Search'ün gövdesi Bing indeksinden besleniyor;
    orada bulunmayan bir sayfanın canlı yanıtta kaynak gösterilme ihtimali düşük. Bing
    Webmaster Tools kurulumu ve sitemap gönderimi yarım saatlik iş ve GEO listesindeki
    en düşük maliyetli maddelerden biri.
  </p>

  <h3>ChatGPT markamı neden yanlış tanımlıyor?</h3>
  <p>
    Çünkü kaynaklar birbiriyle çelişiyor. Sitenizdeki künye, LinkedIn sayfanız, sektörel
    dizinler ve Wikidata kaydı farklı bir kuruluş yılı, farklı bir unvan ya da farklı bir
    kategori söylüyorsa model kendi tahminini üretir. Düzeltme sitenizde değil, çelişkinin
    çıktığı dış kaynakta yapılır ve etkisi haftalar sonra görülür.
  </p>

  <h3>SEO yapıyorsam GEO'ya ayrıca ihtiyacım var mı?</h3>
  <p>
    İyi bir teknik SEO zemini GEO işinin belki yarısını zaten karşılıyor. Geri kalanı
    ayrı: bot ayrımı, varlık kaydı tutarlılığı, cevap odaklı yapı ve yanıt yüzeyinin
    ölçümü. Bunlar klasik SEO panolarında hiç görünmediği için ayrıca ele alınmaları
    gerekiyor.
  </p>

  <h3>Cevabı başa almak sıralamama zarar verir mi?</h3>
  <p>
    Vermiyor. Kullanıcı davranışı da uzun girişleri atlayarak ilerlediği için çoğu sayfada
    her iki tarafa birden yarıyor.
  </p>

  <h3>Küçük bir siteyle büyük markalarla yarışabilir miyim?</h3>
  <p>
    Geniş sorgularda zor, dar sorgularda fazlasıyla mümkün. Motorlar geniş soruları alt
    sorulara bölüyor ve o alt soruların bir kısmı çok spesifik oluyor; sektörünüze özgü,
    net bir soruyu doğrudan cevaplayan tek kaynak sizseniz orada seçilirsiniz. Küçük
    sitelerin gerçek fırsatı bu tarafta.
  </p>


  <p className="sayfa-cta">
    Sitenizin ChatGPT'ye açık olup olmadığını, hangi sorgularda kaynak gösterildiğinizi
    ve öncelik listenizin nereden başlaması gerektiğini birlikte çıkarmak için
    <Link href="/geo">GEO danışmanlığı sayfasına</Link> göz atabilirsiniz.
  </p>
                </div>
            </article>
        </div>
    );
}
