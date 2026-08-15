/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

const headings = [
    {
        "id": "iki-katman",
        "text": "İki katman, iki farklı soru"
    },
    {
        "id": "capraz-matris",
        "text": "Yanıt–atıf çapraz matrisi: dört konum, dört farklı iş"
    },
    {
        "id": "kpi-cercevesi",
        "text": "GEO KPI çerçevesi"
    },
    {
        "id": "atif-tanisi",
        "text": "Atıf tanısı: frekans değil, kalite ve dağılım"
    },
    {
        "id": "manuel-yontem",
        "text": "Araç almadan nasıl ölçersiniz? Manuel prompt seti yöntemi"
    },
    {
        "id": "olcum-tuzaklari",
        "text": "Ölçümü bozan dört alışkanlık"
    },
    {
        "id": "raporlama",
        "text": "Bu metrikler müşteriye ve yöneticiye nasıl sunulur?"
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
    GEO ölçümü tek bir sayıya inmez. Üretken motorlar her sorguda iki ayrı çıktı
    üretir: modelin yazdığı yanıt metni ve o metne iliştirilen atıflar. Markanızın
    yanıtta geçmesiyle kaynak olarak gösterilmesi farklı şeylerdir ve farklı
    ölçülür. Sağlam bir GEO panosu bu iki katmanı ayrı izler, üstüne rakip
    karşılaştırması koyar.
  </p>
                <aside className="tldr mb-12 p-6 md:p-8 bg-violet-50/50 border border-violet-100/80 rounded-3xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-violet-600 text-white text-xs font-black uppercase tracking-widest rounded-full">TL;DR</span>
                        <span className="tldr-baslik text-sm font-bold text-violet-800">Kısaca</span>
                    </div>
                    <p className="text-gray-800 font-bold text-[15px] leading-relaxed mb-4"><strong>"GEO'da iyiyiz" cümlesi, hangi katmanda iyi olduğunuzu söylemediği sürece anlamsızdır.</strong></p>
                    <ul className="space-y-3.5 text-gray-700 text-[15px] leading-relaxed list-none pl-0 my-0"><li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Yanıtta geçme ve atıf alma bağımsız iki metriktir. Biri güçlü diğeri zayıfsa yapılacak iş tamamen değişir.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Atıf sayısı yanıltır; kaynağın kalitesi ve dağılımı frekansı ezer.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Araç almadan da ölçebilirsiniz: 20–30 sorguluk sabit bir set, ayda bir, temiz oturumda. Yöntemi aşağıda adım adım anlattım.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>GA4 GEO metriklerini ölçmez, yalnızca sonrasındaki tıklamayı görür. İkisini karıştırmak raporu bozar.</span></li></ul>
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
                    <h2 id="iki-katman">İki katman, iki farklı soru</h2>

  <p className="bolum-cevap">
    Üretken bir motora soru sorduğunuzda iki şey üretilir: modelin kendi cümleleriyle
    yazdığı yanıt ve o yanıtın altına iliştirilen kaynak bağlantıları. Bu iki katman
    birbirinden bağımsız çalışır. Markanız yanıtın ortasında geçerken hiçbir atıf
    almıyor olabilir; ya da tersine, kaynak listesinde durup metinde adınız hiç
    anılmayabilir.
    {/* kaynak: K124 */}
  </p>

  <p>
    Geleneksel aramada sıralama pozisyonu her şeyi özetliyordu. Onuncu sıradaysanız
    onuncu sıradaydınız; tartışacak bir şey yoktu. <Link href="/geo">GEO tarafında</Link>
    o tek sayının yerini iki ayrı dinamik aldı: yanıtın parçası olmak ve atıf almak.
    {/* kaynak: K131 */}
    Marka görünürlüğü artık bir tabloda değil, modelin ürettiği metnin içinde ölçülüyor.
    {/* kaynak: K126 */}
  </p>

  <p>
    Ayrımın neden bu kadar önemli olduğunu bir örnekle göstereyim. Diyelim bir
    muhasebe yazılımı markasınız ve "küçük işletme için muhasebe programı" sorgusunda
    ChatGPT sizi öneriyor — ama kaynak olarak üç ayrı karşılaştırma blogunu gösteriyor.
    Bu, modelin sizi eğitim verisinden ya da genel bilgisinden hatırladığı anlamına
    gelir. Hoş bir konum, kırılgan bir konum. Model güncellendiğinde ya da yanıt
    üretirken web'e daha çok yaslandığında o anılma buharlaşabilir, çünkü altında
    kanıt yok — yorum var.
    {/* kaynak: K124 */}
  </p>

  <p>
    Tersi durum daha sinsi. Siteniz atıf listesinde sürekli görünüyor ama yanıt metni
    rakibinizi anlatıyorsa, modele veri sağlıyorsunuz demektir; anlatıyı kuran siz
    değilsiniz. Kullanıcı yanıtı okur, kaynak listesine bakmadan karar verir. Ölçüm
    panonuz yalnızca atıf sayarsa bu durumu hiç görmezsiniz.
  </p>

  <p>
    Bu yüzden Google Analytics ya da Search Console bu işi çözmez.
    <Link href="/geo/ga4-ai-trafigi">GA4'te yapay zeka trafiğini
    izlemek</Link> ayrı ve gerekli bir iştir, ama gördüğü şey tıklamadan <em>sonrası</em>.
    Yanıtta geçip geçmediğinizi, kaç atıf aldığınızı, rakibin sizi nerede geçtiğini
    ancak motorlara doğrudan sorarak öğrenirsiniz.
    {/* kaynak: K126 */}
  </p>


  <h2 id="capraz-matris">Yanıt–atıf çapraz matrisi: dört konum, dört farklı iş</h2>

  <p className="bolum-cevap">
    İki katmanı iki eksene koyduğunuzda dört hücre çıkar ve her hücre başka bir iş
    listesi anlamına gelir. Aynı "görünürlük düşük" şikâyeti, hangi hücrede olduğunuza
    göre içerik işine, dijital PR işine ya da varlık netliği işine dönüşür. Matrisi
    doldurmadan bütçe ayırmak, tanı koymadan ilaç yazmaktır.
  </p>

  <table>
    <caption>Yanıt katmanı ile atıf katmanının kesişimi</caption>
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Güçlü atıf</th>
        <th scope="col">Zayıf atıf</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Güçlü yanıt</th>
        <td>İdeal konum. Hem anlatıyı kuruyorsunuz hem kanıt sizde. Korunması gereken yer burası.</td>
        <td>Kırılgan. Model sizi yorumla anıyor, kaynakla değil — güncellemede kaybolabilir.</td>
      </tr>
      <tr>
        <th scope="row">Zayıf yanıt</th>
        <td>Tematik hizalama sorunu. Kaynak bolluğuna rağmen model sizi konuyla eşleştiremiyor.</td>
        <td>Görünmezlik. Ne anılma var ne atıf; işe temelden başlanacak.</td>
      </tr>
    </tbody>
  </table>
  {/* kaynak: K124 */}

  <p>
    Sağ üst hücre — güçlü yanıt, zayıf atıf — bir rakipte görüldüğünde ilginç bir
    sinyal verir: o marka kazanılmış medya olmadan anlatıyı kazanıyordur. Genellikle
    marka bilinirliğinin eğitim verisinde bıraktığı iz sayesinde. Siz aynı konumdaysanız
    keyfini çıkarın ama üstüne kanıt inşa edin;
    <Link href="/geo/dijital-pr-ai-atif">dijital PR ile atıf kazanma</Link> tarafı tam olarak
    bunun için var.
    {/* kaynak: K124 */}
  </p>

  <p>
    Sol alt hücre çoğu B2B sitesinde karşıma çıkan durum. Site otoriter, kaynak
    gösteriliyor, yine de yanıt metninde marka adı yok. Buradaki sorun genelde
    içeriğin konuyla değil şirketle ilgili yazılmış olması. Model, sayfayı bir konunun
    kanıtı olarak kullanıyor ama markayı o konunun sağlayıcısı olarak tanımıyor.
    Çözüm <Link href="/geo/entity-seo">varlık netliği</Link> tarafında: kim olduğunuz, ne
    yaptığınız ve hangi kategoriye ait olduğunuz makine tarafından okunabilir biçimde
    yazılı mı?
    {/* kaynak: K124 */}
  </p>

  <p>
    Bir de üçüncü bir kesişim var, matriste görünmeyen: ton. Atıflarınız olumlu
    içeriklerden geliyor ama yanıtlar sizden nötr bir dille söz ediyorsa, model
    içerikten doğru mesajı çıkaramıyor demektir. Bu genelde kaynak metinlerin
    değerlendirme değil tanıtım dilinde yazılmasından çıkar.
    {/* kaynak: K124 */}
  </p>


  <h2 id="kpi-cercevesi">GEO KPI çerçevesi</h2>

  <p className="bolum-cevap">
    Aşağıdaki tablo ölçülebilir ve savunulabilir metrikleri topluyor. Hepsini birden
    izlemek zorunda değilsiniz — ilk üç satır çoğu marka için yeterli bir taban kurar.
    Araç sütununu bilinçli olarak sadeleştirdim: bu kategorideki ürünler hızla değişiyor,
    isim ezberlemek yerine metriğin ne olduğunu bilmek işinize yarar.
  </p>

  <table>
    <caption>GEO metrikleri, hesaplama mantıkları ve önerilen kadans</caption>
    <thead>
      <tr>
        <th scope="col">Metrik</th>
        <th scope="col">Ne ölçer</th>
        <th scope="col">Nasıl hesaplanır</th>
        <th scope="col">Nereden</th>
        <th scope="col">Kadans</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">AI görünürlük oranı</th>
        <td>Satın alma niyetli sorgularda markanın yanıtta görünme sıklığı</td>
        <td>(Markanın göründüğü sorgu ÷ toplam sorgu) × 100 — anlamlı olması için en az 50 sorgu</td>
        <td>Manuel prompt seti, GEO izleme araçları, Profound</td>
        <td>Aylık</td>
      </tr>
      <tr>
        <th scope="row">Yanıtta geçme oranı</th>
        <td>Atıf olmadan, yalnızca metin içinde anılma sıklığı</td>
        <td>(Markanın geçtiği yanıt ÷ toplam yanıt) × 100</td>
        <td>Manuel prompt seti, GEO izleme araçları</td>
        <td>Aylık</td>
      </tr>
      <tr>
        <th scope="row">Atıf oranı</th>
        <td>Sitenizin kaynak olarak gösterilme yüzdesi</td>
        <td>(Kaynak gösterildiği sorgu ÷ toplam sorgu) × 100</td>
        <td>Perplexity ve AI Modu'nda doğrudan gözlem; GEO izleme araçları</td>
        <td>Aylık</td>
      </tr>
      <tr>
        <th scope="row">Ağırlıklı atıf payı</th>
        <td>Atıfların yalnızca sayısını değil kaynak kalitesini</td>
        <td>Ham atıf sayısı × kaynak ağırlığı; ulusal bir yayından tek atıf, düşük kaliteli on blogu geçebilir</td>
        <td>GEO izleme araçları; küçük ölçekte elle ağırlıklandırma</td>
        <td>Aylık</td>
      </tr>
      <tr>
        <th scope="row">Cevap payı <em>(share of answer)</em></th>
        <td>Bir konu alanında rakiplere kıyasla görünürlük payınız</td>
        <td>Marka görünürlük oranı ÷ (tüm rakiplerin görünürlük oranı toplamı) × 100</td>
        <td>GEO izleme araçları, Profound</td>
        <td>Aylık</td>
      </tr>
      <tr>
        <th scope="row">Yanıt içi pozisyon</th>
        <td>Marka adının yanıt metninde kaçıncı sırada geçtiği</td>
        <td>İlk geçişin metindeki sırası (1., 2., 3. öneri…)</td>
        <td>Manuel gözlem, GEO izleme araçları</td>
        <td>Aylık</td>
      </tr>
      <tr>
        <th scope="row">Ton dağılımı</th>
        <td>Yanıtlardaki marka anlatısının olumlu/nötr/olumsuz dağılımı</td>
        <td>Yanıt metni ve atıf kaynakları ayrı ayrı sınıflandırılır</td>
        <td>Manuel okuma; kurumsal ölçekte izleme araçları</td>
        <td>Üç aylık</td>
      </tr>
      <tr>
        <th scope="row">Rakip açığı</th>
        <td>Rakiple aranızdaki anılma ve atıf kalitesi farkı</td>
        <td>Rakibin ağırlıklı atıf skoru − sizin ağırlıklı atıf skorunuz</td>
        <td>Aynı prompt setinin rakip için çalıştırılması</td>
        <td>Üç aylık</td>
      </tr>
      <tr>
        <th scope="row">Yapay zeka kaynaklı oturum</th>
        <td>Yanıttan sitenize gelen gerçek tıklamalar</td>
        <td>Yönlendiren alan adına göre segment</td>
        <td>GA4, sunucu logları; Semrush ve Ahrefs'in görünürlük modülleri</td>
        <td>Haftalık</td>
      </tr>
    </tbody>
  </table>
  {/* kaynak: K126, K128, K131 */}

  <p>
    Kadans sütununda ham kaynaklardan ayrıldım. Araç sağlayıcıları haftalık takip
    öneriyor; benim gözlemim, haftalık veride sinyalden çok gürültü olduğu yönünde.
    Aynı sorguyu iki gün arayla sorup farklı yanıt almak sıradan bir durum. Aylık
    kadans hem daha temiz bir eğilim verir hem de manuel yöntemi sürdürülebilir kılar.
    Yalnızca trafik metriği haftalık izlenmeye değer, çünkü orada gerçekten günlük
    dalgalanan bir veri var.
  </p>

  <p>
    Bir uyarı: bu metriklerin hiçbiri motor arası toplanabilir değil. ChatGPT'deki
    görünürlük oranıyla <Link href="/geo/perplexity-geo">Perplexity'deki</Link>
    oranı ortalamaya vurmak yanıltıcıdır; iki sistem farklı kaynak mantığıyla çalışır.
    Metrikleri motor bazında tutun, raporda yan yana gösterin, tek sayıya indirmeyin.
  </p>


  <h2 id="atif-tanisi">Atıf tanısı: frekans değil, kalite ve dağılım</h2>

  <p className="bolum-cevap">
    Atıf sayısına bakmak yanıltır. Asıl sorular şunlar: hangi kaynaklardan atıf
    alıyorsunuz, o kaynaklar ne kadar taze, rakibinizle aranızdaki oran ne? Aynı
    "ayda 40 atıf" rakamı, kaynak dağılımına göre sağlıklı bir tablo da olabilir
    ciddi bir açığın örtüsü de. Tanıyı koyduran şey toplam değil, o toplamın nereden
    geldiği ve zaman içinde hangi yöne kaydığı.
  </p>

  <p>
    Üç tipik patoloji var ve üçü de farklı yere işaret ediyor.
  </p>

  <p>
    <strong>Dar dağılım.</strong> Atıflarınızın tamamı sektör yayınlarından geliyor,
    genel yayınlardan hiç yok. Modelin sizi niş bir kaynak olarak sınıflandırdığı
    anlamına gelir; geniş kitle sorgularında görünmezsiniz.
    {/* kaynak: K124 */}
  </p>

  <p>
    <strong>Bayat kaynak.</strong> Atıf alan sayfalarınız sürekli eski yazılarınız.
    Araç sağlayıcılarının ölçümlerine göre içerik üç ayı geçtiğinde yapay zeka
    atıfları belirgin biçimde düşüyor — bu rakam bağımsız doğrulanmış değil, ama
    yönü mantıklı. Güncelleme takviminiz yoksa burası zamanla erir.
    {/* kaynak: K126 */}
  </p>

  <p>
    <strong>Hacim açığı.</strong> Rakip sizi üçe bir geçiyorsa mesele kalite değil,
    kapsama. Konunun alt sorularının çoğunda içeriğiniz yok.
    {/* kaynak: K124 */}
  </p>

  <p>
    Kaynak kalitesinin frekansı ezdiğini not düşmek gerekiyor. Tanınmış bir yayından
    gelen tek atıf, düşük kaliteli on blogdan ağır basar — çünkü modeller kaynak
    güvenilirliğini ayrı bir sinyal olarak işliyor. Küçük bir ekipseniz karmaşık
    ağırlıklandırma formülleri kurmayın; kaynakları üç kovaya ayırın (ulusal/tanınmış,
    sektörel, düşük) ve her kovanın yüzdesini izleyin. Formülün rafineliği değil,
    dağılımın yönü karar verdirir.
    {/* kaynak: K124 */}
  </p>


  <h2 id="manuel-yontem">Araç almadan nasıl ölçersiniz? Manuel prompt seti yöntemi</h2>

  <p className="bolum-cevap">
    Bu bölüm, GEO izleme aboneliği almayacak okuyucu için. İyi haber: ölçümün
    çekirdeği zaten manuel bir işlem — araçlar da aynı şeyi ölçekte yapıyor.
    Sabit bir sorgu seti, sabit bir takvim ve temiz bir tarayıcı oturumuyla
    kendi taban verinizi kurabilirsiniz. Karşılığında zaman verirsiniz, ama
    neyi ölçtüğünüzü tam olarak bilirsiniz.
  </p>

  <h3>Adım 1 — 20–30 sorguluk sabit bir set kurun</h3>

  <p>
    Setin boyutu önemli değil, sabitliği önemli. Otuz sorguyu bir kere kurun ve
    aylarca değiştirmeyin; değiştirdiğiniz anda karşılaştırma zeminini kaybedersiniz.
    Yeni sorgu eklemek gerekirse eskileri silmeden ekleyin ve raporda hangi ayda
    eklendiğini not edin.
  </p>

  <p>
    Sorguları beş aileye dağıtın:
  </p>

  <table>
    <caption>Prompt seti aileleri ve örnek kalıplar</caption>
    <thead>
      <tr>
        <th scope="col">Aile</th>
        <th scope="col">Ne ölçer</th>
        <th scope="col">Örnek kalıp</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Marka sorguları</th>
        <td>Model sizi tanıyor mu, doğru anlatıyor mu</td>
        <td>"[Marka] ne yapıyor?", "[Marka] güvenilir mi?"</td>
      </tr>
      <tr>
        <th scope="row">Kategori sorguları</th>
        <td>Kategoriye ait sayılıp sayılmadığınız</td>
        <td>"[Şehir]'de [hizmet] veren firmalar"</td>
      </tr>
      <tr>
        <th scope="row">"En iyi" kalıpları</th>
        <td>Öneri listelerine girip girmediğiniz</td>
        <td>"KOBİ'ler için en iyi [ürün]"</td>
      </tr>
      <tr>
        <th scope="row">Alternatif kalıpları</th>
        <td>Rakip adının yanında anılma</td>
        <td>"[Rakip] alternatifleri neler?"</td>
      </tr>
      <tr>
        <th scope="row">Karşılaştırma kalıpları</th>
        <td>Doğrudan kafa kafaya konum</td>
        <td>"[Marka] mı [Rakip] mi?"</td>
      </tr>
    </tbody>
  </table>

  <p>
    Türkçe ve İngilizce sorguları ayrı satır sayın. Aynı sorunun iki dildeki yanıtı
    çoğu zaman farklı markalar öneriyor, çünkü modelin çektiği kaynak havuzu değişiyor.
    Yurt dışı hedefiniz yoksa seti tamamen Türkçe tutun.
  </p>

  <h3>Adım 2 — Aynı seti, aynı gün, üç motorda çalıştırın</h3>

  <p>
    Ayın belirli bir gününü seçin — ayın ilk salısı gibi — ve o gün seti
    <Link href="/geo/chatgpt-geo">ChatGPT</Link>,
    <Link href="/geo/perplexity-geo">Perplexity</Link> ve
    <Link href="/geo/google-ai-modu">Google AI Modu</Link> üzerinde
    baştan sona çalıştırın. Üçü yetmiyorsa ikiyle başlayın; hiç ölçmemekten iyidir.
    <Link href="/geo/ai-overviews-nedir">AI Bakışı</Link> bloklarını da
    izlemek istiyorsanız aynı sorguları normal Google aramasında tekrarlayıp bloğun
    çıkıp çıkmadığını kaydedin.
  </p>

  <p>
    Her sorguyu yeni bir sohbette sorun. Aynı sohbette art arda sorulan sorular
    birbirini besler; ikinci yanıt, birinciden taşan bağlamla şekillenir ve ölçtüğünüz
    şey artık motorun varsayılan davranışı olmaz.
  </p>

  <h3>Adım 3 — Beş sütunlu bir tabloya kaydedin</h3>

  <p>
    Elektronik tablo yeter. Sütunlar: sorgu, motor, marka yanıtta geçti mi (E/H),
    atıf var mı (E/H), yanıtta geçen rakipler. İsterseniz altıncı sütun olarak yanıt
    içi pozisyonu ekleyin. Ekran görüntüsü almayın, metni yapıştırın — arama
    yapabildiğiniz veri, bakabildiğiniz veriden daha değerli.
  </p>

  <p>
    Ay sonunda iki yüzde hesaplayın: kaç sorguda geçtiniz, kaç sorguda atıf aldınız.
    Bu iki sayı sizin taban çizginiz. Üçüncü ayın sonunda eğilim okunmaya başlar;
    ilk iki ayın verisi tek başına bir şey söylemez.
  </p>

  <h3>Adım 4 — Oturumu temiz tutun</h3>

  <p>
    Kişiselleştirme ölçümü bozar. Hesabınızdan çıkın ya da gizli pencere kullanın;
    ChatGPT'de hafıza özelliği açıksa geçmiş konuşmalarınız yanıtı etkiler, ölçüm
    öncesi kapatın. Kendi sitenizi sık ziyaret ettiğiniz bir tarayıcıda ölçüm yapmak,
    kendi anketinizi kendi ofisinizde doldurmak gibidir.
  </p>

  <p>
    Konum da değişken. VPN kullanıyorsanız her ay aynı çıkışı kullanın; Türkiye
    hedefliyorsanız VPN'i tamamen kapatın.
  </p>

  <h3>Manuel yöntem neden daha sağlam bir taban verir?</h3>

  <p>
    Çünkü değişkenliği siz kontrol edersiniz. Üretken motorlarda aynı soruya iki farklı
    yanıt gelmesi hata değil, tasarım; kişiselleştirme, hafıza, oturum bağlamı ve
    modelin kendi örnekleme davranışı sonucu kaydırır. Üçüncü taraf bir araç bu
    değişkenleri kendi altyapısında sabitler ve size sonucu verir — ama hangi
    varsayımlarla sabitlediğini genelde açıklamaz.
  </p>

  <p>
    Kendi setinizi çalıştırdığınızda ise ölçüm koşullarının tamamı elinizde: hangi
    sorgu, hangi motor, hangi tarih, hangi oturum. Araç verisi ölçek kazandırır,
    manuel veri güven kazandırır. İkisini birlikte kullanabiliyorsanız manuel seti
    aracın kalibrasyonu olarak tutun — araç size aylık %40 görünürlük diyorsa ve
    elle ölçtüğünüzde %15 çıkıyorsa, konuşulacak bir konu var demektir.
  </p>

  <p>
    Manuel yöntemin sınırı da açık: otuz sorgu, aracın taradığı binlerce sorgunun
    yanında küçük bir örneklem. Uzun kuyruk sorgularda ne olduğunu göremezsiniz ve
    haftalık dalgalanmaları yakalayamazsınız. Sıfırdan başlayan bir marka için bu
    kayıp, ödenmeyen abonelik bedelinin yanında küçük kalıyor.
  </p>


  <h2 id="olcum-tuzaklari">Ölçümü bozan dört alışkanlık</h2>

  <p className="bolum-cevap">
    GEO panolarının çoğu yanlış metrik seçtiği için değil, doğru metriği yanlış
    koşullarda topladığı için yanıltıyor. Aşağıdaki dördü, danışmanlık işlerinde
    en sık düzelttiğim hatalar. Hiçbiri karmaşık değil; hepsi de raporun yönünü
    tersine çevirebilecek kadar etkili. Ölçüm yöntemini kurarken bu dördünü baştan
    yazılı bir kurala bağlarsanız, altı ay sonra veriye güvenip güvenmeyeceğinizi
    tartışmak zorunda kalmazsınız.
  </p>

  <p>
    <strong>Sorgu setini iyileştirmek.</strong> Görünürlük düşük çıkınca sorguları
    "daha uygun" olanlarla değiştirme dürtüsü güçlüdür. Yaptığınız şey ölçümü
    iyileştirmek değil, ölçüm zeminini kaydırmaktır. Set sabit kalır; iyileştirilecek
    olan içeriktir.
  </p>

  <p>
    <strong>Marka sorgularını genele karıştırmak.</strong> Marka adınızı içeren
    sorgularda görünürlük oranınız neredeyse her zaman yüksek çıkar — model adınızı
    zaten sorudan alıyor. Bu satırları kategori sorgularıyla aynı ortalamaya katarsanız
    rakam şişer ve rapor gerçeği örter. İki grubu ayrı yüzde olarak gösterin.
  </p>

  <p>
    <strong>Tek yanıtı kanıt saymak.</strong> Bir sorguda güzel bir yanıt görüp ekran
    görüntüsünü müşteriye göndermek yaygın bir refleks. Aynı sorgu ertesi gün başka
    bir marka önerebilir. Ekran görüntüsü örnek olur, veri olmaz.
  </p>

  <p>
    <strong>Motorları toplamak.</strong> Üç motorun ortalamasını almak, üç farklı
    ülkenin seçim sonucunu toplamaya benzer. Kaynak seçimi, atıf davranışı ve
    güncelleme ritmi her platformda farklı. Raporda üç sütun tutun, bir sütuna
    indirmeyin.
  </p>

  <p>
    Bir de ölçüm sıklığı meselesi var. Panoyu her gün açıp yanıtları okumak,
    dalgalanmayı eğilim sanmaya yol açıyor. Ölçüm günü dışında motorlara markanızı
    sormamak, kulağa saçma gelse de disiplin açısından işe yarıyor.
  </p>


  <h2 id="raporlama">Bu metrikler müşteriye ve yöneticiye nasıl sunulur?</h2>

  <p className="bolum-cevap">
    Rapor, metrik listesi değil karar aracıdır. Yöneticinin sorduğu soru "cevap payımız
    kaç" değil, "bu para işe yaradı mı" olur. Her metriği bir karara bağlayın, bağlanmayanı
    rapordan çıkarın. Kadansı da metriğe göre ayırın: her şeyi her ay göstermek raporu
    okunmaz hale getirir.
  </p>

  <table>
    <caption>Metrik–karar eşlemesi ve sunum kadansı</caption>
    <thead>
      <tr>
        <th scope="col">Metrik</th>
        <th scope="col">Hangi soruyu yanıtlar</th>
        <th scope="col">Hangi karara bağlanır</th>
        <th scope="col">Kime, ne sıklıkta</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Görünürlük oranı</th>
        <td>Genel olarak yol alıyor muyuz?</td>
        <td>Bütçenin devamı ya da durdurulması</td>
        <td>Yönetim, aylık</td>
      </tr>
      <tr>
        <th scope="row">Cevap payı</th>
        <td>Rakiplere göre neredeyiz?</td>
        <td>Hangi konu alanına yatırım yapılacağı</td>
        <td>Yönetim, aylık</td>
      </tr>
      <tr>
        <th scope="row">Atıf oranı ve dağılımı</th>
        <td>Kanıt tabanımız sağlam mı?</td>
        <td>Dijital PR bütçesi ve hedef yayın listesi</td>
        <td>Pazarlama ekibi, aylık</td>
      </tr>
      <tr>
        <th scope="row">Yanıt içi pozisyon</th>
        <td>İlk öneri miyiz, üçüncü mü?</td>
        <td>İçerik derinleştirme önceliği</td>
        <td>İçerik ekibi, aylık</td>
      </tr>
      <tr>
        <th scope="row">Ton dağılımı</th>
        <td>Model bizden nasıl söz ediyor?</td>
        <td>Mesaj düzeltmesi, kriz yönetimi</td>
        <td>Yönetim, üç aylık</td>
      </tr>
      <tr>
        <th scope="row">Yapay zeka kaynaklı oturum ve dönüşüm</th>
        <td>Bu görünürlük paraya dönüyor mu?</td>
        <td>Kanalın ticari savunması</td>
        <td>Yönetim, üç aylık</td>
      </tr>
    </tbody>
  </table>

  <p>
    Sunumda en çok işe yarayan çerçeve rakip karşılaştırması. "Görünürlük oranımız 18"
    cümlesi kimseye bir şey söylemez; "otuz sorgunun altısında geçiyoruz, en yakın
    rakip on dördünde" cümlesi bütçe açtırır. Mutlak sayıyı değil, aradaki farkı ve
    farkın yönünü gösterin.
    {/* kaynak: K128 */}
  </p>

  <p>
    Bir başka pratik: üç aylık incelemelerde metrikleri satış hattıyla eşleştirin.
    Formlara "Bizi nasıl duydunuz?" sorusunu ekleyip yanıt seçeneklerine ChatGPT ve
    benzeri araçları koymak, kanalın ticari katkısını gösteren en ucuz yöntem. Veri
    kaba olur ama yönetimin anladığı dilde konuşur.
    {/* kaynak: K128 */}
  </p>

  <p>
    Beklenti yönetimi için son bir not. Araç sağlayıcılarının kendi ölçümleri, içerik
    ve otorite çalışmalarının atıf oranına yansımasının 60–90 gün aldığını söylüyor.
    Bağımsız bir doğrulaması yok, ama sahadaki his de bu aralıkta. İlk ayın raporunda
    değişim beklemeyin ve bunu daha ilk toplantıda söyleyin.
    {/* kaynak: K126 */}
  </p>

  <p className="cta">
    Ölçüm çerçevesini kurmak, GEO çalışmasının başlangıcı değil bir parçası.
    Markanızın yapay zeka yanıtlarındaki konumunu baştan sona ele almak isterseniz
    <Link href="/geo">GEO danışmanlığı sayfasına</Link> göz atın.
  </p>


  <h2 id="sss">Sıkça Sorulan Sorular</h2>

  <h3>GA4 ile GEO ölçülür mü?</h3>
  <p>
    Hayır. GA4 atıf oranını, görünürlük oranını ya da cevap payını göremez; bunlar
    sitenizde değil motorun içinde gerçekleşir.
    {/* kaynak: K126 */}
    GA4'ün yaptığı iş, yapay zeka arayüzlerinden gelen yönlendirme trafiğini
    segmentlemek — ve bazı platformlar yönlendiren bilgisini vermediği için o rakam
    da eksik kalır.
    {/* kaynak: K128 */}
    İkisi birbirinin yerine geçmez, birbirini tamamlar.
  </p>

  <h3>Atıf payı nasıl hesaplanır?</h3>
  <p>
    Sabit bir prompt setini motorlarda çalıştırıp kaç yanıtta kaynak olarak
    gösterildiğinizi sayarsınız; bu sayıyı toplam sorguya bölersiniz.
    {/* kaynak: K124 */}
    Perplexity kaynakları açıkça listelediği için ölçüm orada en kolay.
    {/* kaynak: K131 */}
    ChatGPT gibi kaynak göstermenin sorguya göre değiştiği sistemlerde ise atıf yerine
    metin içi anılma sıklığını taban alın.
    {/* kaynak: K131 */}
  </p>

  <h3>Kaç sorguluk bir set yeterli?</h3>
  <p>
    Manuel ölçüm için 20–30 sorgu makul bir başlangıç. Araçla çalışıyorsanız 50–100
    sorgu daha kararlı bir yüzde verir.
    {/* kaynak: K126 */}
    Sayıdan daha önemlisi setin sabit kalması: on sorguluk sabit bir seti üç ay
    izlemek, her ay değiştirilen yüz sorguluk bir setten daha çok şey öğretir.
  </p>

  <h3>Ölçümü ne sıklıkla tekrarlamalıyım?</h3>
  <p>
    Aylık. Araç satıcıları haftalık öneriyor ama üretken motorların gün içindeki
    değişkenliği düşünüldüğünde haftalık veri çoğunlukla gürültü üretir. Yalnızca
    trafik tarafı haftalık izlenmeye değer.
  </p>

  <h3>GEO sonuçları ne zaman görülür?</h3>
  <p>
    Araç sağlayıcılarının ölçümlerine göre içerik ve otorite çalışmalarının atıf
    oranına yansıması 60–90 günü buluyor.
    {/* kaynak: K126 */}
    Marka sorgularında iyileşme daha erken görülebilir; kategori ve "en iyi"
    sorgularında ise mesele kazanılmış medyaya bağlı olduğu için daha yavaş ilerler.
  </p>

  <h3>Hangi araç hangi metriği ölçer?</h3>
  <p>
    Kategori olarak bakmak daha sağlıklı. GEO izleme araçları görünürlük oranı, atıf
    frekansı ve cevap payını platform bazında raporlar; Semrush ve Ahrefs gibi yerleşik
    SEO platformları bu metrikleri kendi görünürlük modüllerine ekliyor; GA4 yalnızca
    tıklama sonrasını görür.
    {/* kaynak: K126 */}
    Ürün isimleri hızla değişiyor, bu yüzden aracı değil ölçtüğü metriği seçin.
  </p>

  <h3>Yanıtta geçmek mi atıf almak mı daha değerli?</h3>
  <p>
    Kısa vadede yanıtta geçmek, uzun vadede atıf. Yanıtta geçmek kullanıcının gördüğü
    şeydir; atıf ise o görünürlüğün model güncellemelerinden sağ çıkmasını sağlayan
    kanıt tabanıdır.
    {/* kaynak: K124 */}
    Yalnızca birine yatırım yapacaksanız hangi hücrede olduğunuza bakın — çapraz
    matris bu kararı sizin yerinize verir.
  </p>

  <h3>GEO ile AEO ölçümü aynı mı?</h3>
  <p>
    Aynı değil. AEO öne çıkan snippet ve sesli yanıt yüzeyini ölçer, GEO ise sohbet
    arayüzlerinde yanıt ve atıf katmanlarını ölçer. Ayrımın ayrıntısı
    <Link href="/geo/geo-seo-aeo-farki">SEO, GEO ve AEO farkı</Link> sayfasında ele alınıyor.
  </p>
                </div>
            </article>
        </div>
    );
}
