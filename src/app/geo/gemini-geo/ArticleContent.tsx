/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

const headings = [
    {
        "id": "uc-yuzey",
        "text": "Gemini'nin Üç Yüzeyi Aynı Şey Değil"
    },
    {
        "id": "turkiye",
        "text": "Türkiye'de Gemini Artık Ölçülebilir Bir Hedef"
    },
    {
        "id": "icerik-secimi",
        "text": "Gemini İçeriği Nasıl Seçer?"
    },
    {
        "id": "pasaj-mimarisi",
        "text": "Pasaj Mimarisi: İçeriği Alıntılanabilir Parçalara Bölmek"
    },
    {
        "id": "teknik-katman",
        "text": "Teknik Katman: İşaretleme, Şema ve Hız"
    },
    {
        "id": "yerel-gorunurluk",
        "text": "Yerel İşletmeler İçin Gemini Katmanı"
    },
    {
        "id": "olcum-cercevesi",
        "text": "Gemini Görünürlüğünü Ölçmek"
    },
    {
        "id": "manuel-takip",
        "text": "Manuel Takip Protokolü"
    },
    {
        "id": "gemini-chatgpt",
        "text": "Gemini mi ChatGPT mi: Geri Bildirim Hızı Farkı"
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
                <p className="first-answer text-xl text-gray-700 leading-relaxed font-light mb-12 pl-6 border-l-4 border-violet-600">Gemini'de görünmek, sıralamada yükselmekten farklı bir iştir: model sayfanızı değil, sayfanızdaki tek bir pasajı alıntılar. Kazanan içerik, 40–60 kelimelik net cevap bloklarından kurulu, semantik HTML ile işaretlenmiş ve varlık ilişkileri açık olan içeriktir. Türkiye açısından kritik olan şu: <Link href="/geo">GEO</Link> artık teorik bir hazırlık değil, 18 Şubat 2026'dan beri ölçülebilir bir hedef.</p>
                <aside className="tldr mb-12 p-6 md:p-8 bg-violet-50/50 border border-violet-100/80 rounded-3xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-violet-600 text-white text-xs font-black uppercase tracking-widest rounded-full">TL;DR</span>
                        <span className="tldr-baslik text-sm font-bold text-violet-800">Kısaca</span>
                    </div>
                    <p className="text-gray-800 font-bold text-[15px] leading-relaxed mb-4"><strong>Gemini optimizasyonu, sayfa düzeyinde sıralama yarışı değil, pasaj düzeyinde alıntılanabilirlik tasarımıdır — ve Türkiye'de artık doğrudan test edilebilir.</strong></p>
                    <ul className="space-y-3.5 text-gray-700 text-[15px] leading-relaxed list-none pl-0 my-0"><li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Gemini'nin üç ayrı yüzeyi var: sohbet uygulaması, AI Modu ve AI Bakışı. Üçü aynı model ailesinden besleniyor ama kaynak seçimi ve alıntı davranışları farklı.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Ahrefs'in 2025 çalışmasına göre yapay zeka sistemlerince alıntılanan URL'lerin yalnızca yaklaşık %12'si aynı sorgu için Google'ın ilk 10 sonucunda yer alıyor. İlk sayfa, giriş bileti değil.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Gemini içerik değişikliklerini günler içinde yansıtabiliyor; ChatGPT'de aynı değişiklik model güncellemesini bekliyor. Bu, Gemini'yi test–öğren döngüsü için en uygun platform yapıyor.</span></li> <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Ölçüm için marka anılması, atıf ve cevap payı üçlüsünü haftalık sabit protokolle takip edin; 10–20 sorguya kadar manuel yürütmek mümkün.</span></li></ul>
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
                    <h2 id="uc-yuzey">Gemini'nin Üç Yüzeyi Aynı Şey Değil</h2>

  <p className="bolum-cevap">Gemini adı üç farklı ürünü birden kapsıyor: gemini.google.com'daki sohbet uygulaması, Google Arama içindeki AI Modu ve klasik sonuç sayfasının tepesindeki AI Bakışı. Üçü de Gemini model ailesinden besleniyor, ancak kaynak havuzları, alıntı yoğunlukları ve tetiklenme koşulları ayrışıyor. "Gemini'de görünüyorum" cümlesi, hangi yüzeyden bahsettiğinizi söylemeden bir şey ifade etmiyor.</p>

  <h3>Sohbet uygulaması (gemini.google.com)</h3>
  <p>Kullanıcı doğrudan modelle konuşur. Yanıtlar uzun, çok adımlı ve konuşma geçmişine bağlıdır. Alıntı burada isteğe bağlı bir katmandır: model bazen bağlantı verir, bazen yalnızca eğitim verisinden ve canlı aramadan sentezlediği bilgiyi kaynaksız aktarır. Marka anılmasının atıfa dönüşme oranı en düşük yüzey burasıdır — ama en uzun ve en detaylı yanıtlar burada üretildiği için markanızın "kategori içinde nasıl konumlandığını" en net gördüğünüz yer de burasıdır.</p>

  <h3>AI Modu</h3>
  <p>Arama arayüzünün içinde çalışan, sohbete yakın ama aramaya bağlı bir deneyim. Kullanıcı takip sorusu sorabilir, model her adımda arka planda yeni sorgular çalıştırır. Kaynak kartları görünürdür ve tıklanabilir. Ticari niyet taşıyan uzun kuyruklu sorgularda trafiğin gerçekten el değiştirdiği yüzey burasıdır. Detaylar için <Link href="/geo/google-ai-modu">Google AI Modu rehberine</Link> bakın.</p>

  <h3>AI Bakışı</h3>
  <p>Sonuç sayfasının en üstünde beliren özet blok. Kullanıcı hiçbir şey istemeden çıkar, kısadır, genellikle üç ila beş kaynağa bağlantı verir ve tıklama davranışını en sert şekilde etkileyen yüzeydir. Buradaki alıntı, klasik organik sıralamanızdan bağımsız kazanılabilir — mekanizmanın ayrıntısı <Link href="/geo/ai-overviews-nedir">AI Bakışı nedir</Link> sayfasında.</p>

  <p>Pratik sonuç: optimizasyon kararlarınızı üç yüzey için ayrı ayrı değerlendirin. AI Bakışı'nda alıntılanmak için gereken kısa, kendi başına ayakta duran tanım bloğu, sohbet uygulamasında markanızın uzman olarak konumlanmasını sağlayan derin analiz metniyle aynı şey değil. İkisini tek sayfada barındırmak mümkün, ama tek paragrafta değil.</p>

  <h2 id="turkiye">Türkiye'de Gemini Artık Ölçülebilir Bir Hedef</h2>

  <p className="bolum-cevap">18 Şubat 2026'da Google, AI Modu ve AI Bakışı'nı Türkiye'de resmi Türkçe adlarıyla kullanıma açtı. Duyuruyu Google Türkiye Ülke Direktörü Mehmet Keteloğlu yaptı. Türkiye, bu ürünlerin daha önce yayıldığı 180 ülkelik dalganın dışında kalmıştı; dolayısıyla tarih bir genişleme değil, gecikmeli bir başlangıç anlamına geliyor. Türkçe sorgularda Gemini görünürlüğü artık tahmin edilen değil, ölçülen bir şey.</p>

  <p>Bu tarihin pratikte ne değiştirdiğini abartmadan söylemek gerekir. Türkiye pazarındaki markalar için AI Modu ve AI Bakışı, Şubat 2026'ya kadar ya VPN üzerinden ya da yabancı dilde test edilebiliyordu; ikisi de gerçek kullanıcı davranışını temsil etmiyordu. Şimdi Türkçe sorgu kütüphanesi kurup, İstanbul'dan, Ankara'dan veya İzmir'den, gerçek konum sinyaliyle haftalık ölçüm alabilirsiniz.</p>

  <p>Resmi Türkçe adların kullanılması küçük bir detay gibi görünüyor ama içerik tarafında karşılığı var. Türkçe içerikte "AI Overviews" yerine <strong>AI Bakışı</strong>, "AI Mode" yerine <strong>AI Modu</strong> yazmak, hem kullanıcı diliyle hem de Google'ın kendi terminolojisiyle örtüşür. Konuyla ilgili içerik üretiyorsanız bu kanonik adları kullanın; İngilizce karşılıklarını yalnızca parantez içinde bir kez verin.</p>

  <p>Bir uyarı: lansmandan bu yana geçen süre kısa. Türkçe sorgularda tetiklenme oranları, kaynak çeşitliliği ve alıntı davranışı henüz oturmadı. Şubat–Ağustos 2026 arasında topladığınız ölçüm serisi, uzun vadeli bir gerçeği değil, hızla değişen bir yüzeyin fotoğrafını verir. Trend okumasını buna göre yapın, tek haftalık düşüşe strateji kurmayın.</p>

  <p>Türkçe içerik üreten siteler için lansmanın ikinci sonucu rekabet tarafında. Türkçe sorgu havuzunda İngilizce'deki kadar derin bir kaynak yığını yok; yani modelin seçebileceği aday pasaj sayısı daha az. Aynı soruya net cevap veren tek Türkçe sayfa sizinse, alıntılanma ihtimaliniz İngilizce'deki muadilinizden yüksek. Bu avantaj kalıcı değil — Türkçe içerik hacmi hızla artıyor — ama 2026 boyunca hâlâ açık bir pencere.</p>

  <p className="kaynak-satiri">Duyuru: <a href="https://blog.google/intl/tr-tr/urun-duyurulari/turkiyede-ai-modu-ve-ai-bakisi-donemi-basliyor/" rel="nofollow noopener" target="_blank">Google Türkiye Blog — Türkiye'de AI Modu ve AI Bakışı dönemi başlıyor</a></p>

  <h2 id="icerik-secimi">Gemini İçeriği Nasıl Seçer?</h2>

  <p className="bolum-cevap">Gemini bağlantı listesi döndürmez; yanıtı sayfa üzerinde kurar. Bunu yaparken tek kullanıcı sorgusunu 5–10 dahili sorguya böler ve her biri için farklı kaynaklardan ilgili pasajları çeker. Alıntılanan şey bir sayfa değil, o sayfadaki belirli bir paragraf ya da listedir. Seçim kriteri sıralama pozisyonu değil; pasajın netliği, yapısı ve sorunun anlamıyla örtüşme derecesidir.</p>
  {/* kaynak: K137 */}

  <p>Bu bölme işlemine query fan-out deniyor. "İstanbul'da kurumsal SEO ajansı nasıl seçilir" sorusu modelin içinde şuna benzer bir demete dönüşür: kurumsal SEO ajansı kriterleri, İstanbul ajans fiyatlandırması, referans kontrolü nasıl yapılır, sözleşme süresi ne olmalı, hangi raporlama beklenir. Her alt sorgu için ayrı kaynak seti çekilir ve nihai yanıt bu setlerin birleşiminden yazılır. Yani tek bir sayfayla tüm yanıtı sahiplenemezsiniz; hedefiniz demetin mümkün olduğu kadar çok parçasında pasaj sahibi olmaktır. Mekanizmanın ayrıntısı için <Link href="/geo/query-fan-out">query fan-out</Link> sayfasına bakın.</p>
  {/* kaynak: K137 */}

  <p>Buradan çıkan en sert bulgu şu: <strong>Ahrefs'in 2025 tarihli çalışmasına göre yapay zeka sistemlerince alıntılanan URL'lerin yalnızca yaklaşık %12'si aynı sorgu için Google'ın ilk 10 organik sonucunda yer alıyor.</strong> Veri, Ahrefs'in kendi indeksi üzerinden yürüttüğü bağımsız bir analizden geliyor; Google'ın açıkladığı bir rakam değil. Yine de yön açık — ilk sayfada olmak ne yeterli ne de zorunlu. Onuncu sırada duran ama sorunun tam karşılığını 50 kelimede veren bir bölüm, birinci sıradaki dağınık bir kılavuzu geçebiliyor.</p>
  {/* kaynak: K137 */}

  <p>Teknik tarafta Gemini, Google Search indeksi ile üretken katmanı birleştiren hibrit bir yaklaşım kullanıyor. İndekslenmiş olmak temel ön koşul; taranamayan sayfa alıntılanamaz. Ama indeks içinde kimin seçileceğini belirleyen şey alaka, varlık netliği ve konu otoritesi. Bu üçü sıralama sinyalleriyle örtüşür, aynısı değildir.</p>
  {/* kaynak: K139 */}

  <h2 id="pasaj-mimarisi">Pasaj Mimarisi: İçeriği Alıntılanabilir Parçalara Bölmek</h2>

  <p className="bolum-cevap">Gemini için ideal pasaj uzunluğu 40–60 kelime aralığında. Her içerik bloğu tek bir soruya cevap vermeli ve o cevabı bağlam olmadan da ayakta duracak şekilde kurmalı. Bir bölüm 50–80 kelimeyi aşmadan tek niyete odaklanırsa, model onu bağlamından koparıp yanıta yerleştirdiğinde anlam bozulmaz. Uzun ve çok konulu paragraflar, alıntılanmak yerine atlanır.</p>
  {/* kaynak: K137 */}

  <h3>Cevabı başa koyun, gerekçeyi sonra anlatın</h3>
  <p>Bir başlığın altındaki ilk cümle sorunun doğrudan cevabı olmalı. "Bu konuyu değerlendirirken birkaç faktör devreye giriyor" diye başlayan bir paragraf, modelin arayacağı bilgiyi üçüncü cümleye gömer ve alıntı şansını kaybeder. Ters piramit, haber yazımından ödünç alınmış eski bir teknik; GEO'da yeniden işe yarıyor.</p>

  <h3>Zamir zincirlerini kırın</h3>
  <p>"Bu yöntem", "söz konusu araç", "yukarıda anlattığımız yaklaşım" gibi ifadeler, pasaj tek başına çekildiğinde referanssız kalır. Öznenin adını tekrar yazmak, akıcı metin dersinde hata sayılır; alıntılanabilirlik açısından avantajdır. Her 40–60 kelimelik blok kendi öznesini içinde taşımalı.</p>

  <h3>Tanım, adım ve karşılaştırmayı ayrı bloklara koyun</h3>
  <p>Aynı paragrafta hem bir kavramı tanımlayıp hem uygulama adımlarını sıralarsanız, model iki farklı alt sorgu için de kısmi eşleşme bulur ve genellikle ikisinde de sizi seçmez. Tanımı kendi bloğunda, adımları numaralı listede, karşılaştırmayı tabloda verin. Parçalama stratejisinin uygulama detayları <Link href="/geo/icerik-chunking">içerik chunking</Link> sayfasında.</p>

  <h3>Başlıkları soru formunda yazın — ama hepsini değil</h3>
  <p>Soru başlıkları, fan-out demetindeki alt sorgularla birebir eşleşme kolaylığı sağlar. Öte yandan her başlığı soru yapmak sayfayı SSS listesine çevirir ve derinlik hissini öldürür. Karma kullanın: temel kavramlar için soru, analiz bölümleri için iddia cümlesi.</p>

  <h2 id="teknik-katman">Teknik Katman: İşaretleme, Şema ve Hız</h2>

  <p className="bolum-cevap">Teknik hazırlık Gemini görünürlüğünü tek başına kazandırmaz, ama eksikliği içeriği görünmez yapar. Üç kaldıraç var: modelin metin bloklarını ayırt etmesini sağlayan semantik HTML, varlık belirsizliklerini çözen schema işaretlemesi ve tarama bütçesini koruyan sayfa performansı. Bunların hiçbiri yeni; GEO'da sadece etkileri daha doğrudan hissediliyor.</p>

  <h3>Semantik HTML</h3>
  <p><code>&lt;section&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;li&gt;</code> ve doğru sıralanmış başlık etiketleri, iç içe geçmiş <code>&lt;div&gt;</code> yığınlarından belirgin şekilde daha iyi çalışıyor. Sebep basit: model, DOM ağacındaki blok sınırlarını pasaj sınırı olarak yorumluyor. Madde işaretleri ve kısa eylem cümleleri de alıntılanma olasılığını yükseltiyor — modelin listeyi olduğu gibi yanıta taşıması, paragrafı özetlemesinden daha ucuz bir işlem.</p>
  {/* kaynak: K138 */}

  <h3>Schema işaretlemesi</h3>
  <p>FAQPage, HowTo ve Article şemaları, içeriğin ayrıştırılma kalitesini doğrudan etkiliyor. Şemanın esas değeri zengin sonuç kazanmak değil, belirsizlik çözmek. Klasik örnek: "avatar" kelimesinin bir filmi mi yoksa profil ikonunu mu işaret ettiğini model, sayfadaki yapılandırılmış veriden anlıyor. Aynı mantık marka adları için de geçerli — özellikle jenerik bir kelimeyle çakışan marka adlarında schema, varlık netliğinin en ucuz yolu. Uygulama örnekleri <Link href="/geo/yapay-zeka-schema" data-pending="true">yapay zeka için schema</Link> ve <Link href="/geo/entity-seo">entity SEO</Link> sayfalarında.</p>
  {/* kaynak: K137 */}

  <h3>Sayfa hızı</h3>
  <p>Yaygın olarak dolaşan öneri, sayfanın 2,5 saniyenin altında yüklenmesi ve mobil uyumlu olması yönünde. <em className="dogrulama-notu">Bu eşik doğrulanmadı: 2,5 saniye rakamı tek bir sağlayıcı içeriğine dayanıyor, Google'ın Gemini kaynak seçimine dair açık bir dokümantasyonunda karşılığı yok. Sayı muhtemelen LCP için önerilen Core Web Vitals eşiğinden ödünç alınmış.</em> Yine de hız, tarama sıklığını ve sayfanın erişilebilirliğini etkilediği için dolaylı olarak önemli — ölçüm ve iyileştirme yöntemleri <Link href="/seo/core-web-vitals">Core Web Vitals</Link> sayfasında.</p>
  {/* kaynak: K137 */}

  <h3>Güncelleme sıklığı</h3>
  <p>Ham kaynaklarda "3–6 ayda bir güncelleyin" tavsiyesi geçiyor. <em className="dogrulama-notu">Bu aralık da doğrulanmadı; kaynağı belirsiz.</em> Doğru olan kısmı şu: kelime değiştirmek güncelleme sayılmıyor. Yeni veri, tarihli bir örnek veya genişletilmiş bir bölüm eklemek, modelin sayfayı yeniden değerlendirmesini tetikliyor. Takvimi aydan değil, konudan türetin — fiyat, mevzuat ve ürün karşılaştırması içeren sayfalar aylık, kavramsal rehberler yılda bir bakım ister.</p>
  {/* kaynak: K137 */}

  <h2 id="yerel-gorunurluk">Yerel İşletmeler İçin Gemini Katmanı</h2>

  <p className="bolum-cevap">Gemini yanıtları kullanıcının coğrafi konumundan etkileniyor. Bu, yerel işletmeler için orantısız bir fırsat demek: ulusal rakiplerin domain otoritesiyle yarışmak yerine, konum sinyalleriyle dar bir sorgu kümesinde öne çıkabilirsiniz. Gereken temel, klasik yerel SEO'nun kendisi — ama tutarlılık eşiği daha yüksek.</p>
  {/* kaynak: K139 */}

  <p>İşletme adı, adres ve telefon bilgisinin geçtiği her yerde birebir aynı olması gerekiyor. Web sitesi, işletme profili, dizinler, sosyal hesaplar ve fatura sayfaları arasındaki en küçük tutarsızlık bile — "Cad." ile "Caddesi" farkı dahil — varlık eşleştirmesini zayıflatıyor. Model çelişkili sinyal gördüğünde markayı atlamayı, yanlış bilgiyle anmaya tercih ediyor.</p>
  {/* kaynak: K136 */}

  <p>Buna LocalBusiness şeması, konum bazlı yorumlar ve bölgeye özgü SSS içerikleri ekleniyor. "Kadıköy'de cumartesi açık mısınız", "otopark var mı", "randevusuz gelinebiliyor mu" gibi gerçek sorular, sayfada birer H3 olarak yanıtlandığında AI Modu'nun yerel demetine doğrudan malzeme veriyor. Uygulama sırası ve kontrol listesi için <Link href="/geo/yerel-isletme-ai-arama" data-pending="true">yerel işletmeler için yapay zeka araması</Link> sayfasına bakın.</p>
  {/* kaynak: K137 K138 */}

  <h2 id="olcum-cercevesi">Gemini Görünürlüğünü Ölçmek</h2>

  <p className="bolum-cevap">Gemini görünürlüğü tek bir sayıya indirgenmiyor. Anlamlı çerçeve dört metrikten kuruluyor: marka anılması oranı, atıf oranı, cevap payı ve bunları birleştiren bir görünürlük skoru. Aşağıdaki eşikler ve ağırlıklar tek bir kaynağın önerisi — sektör tarafından benimsenmiş yerleşik bir standart değil, üzerine kendi verinizi biriktirebileceğiniz çalışılabilir bir başlangıç çerçevesi.</p>

  <table className="metrik-tablosu">
    <caption>Gemini görünürlük metrikleri ve önerilen eşikler {/* kaynak: K139 */}</caption>
    <thead>
      <tr><th scope="col">Metrik</th><th scope="col">Formül</th><th scope="col">Güçlü</th><th scope="col">Zayıf</th></tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Marka anılması oranı</th>
        <td>(Markanın geçtiği sorgu sayısı / Test edilen toplam sorgu) × 100</td>
        <td>Markalı sorgularda ≥%50; kategori sorgularında ≥%20</td>
        <td>Kategori sorgularında %20 altı</td>
      </tr>
      <tr>
        <th scope="row">Atıf oranı</th>
        <td>(Tıklanabilir domain bağlantısı içeren anılma / Toplam anılma) × 100</td>
        <td>≥%70</td>
        <td>%40 altı</td>
      </tr>
      <tr>
        <th scope="row">Cevap payı</th>
        <td>(Markanın anılma sayısı / Tüm yanıtlardaki toplam anılma) × 100</td>
        <td>≥%40</td>
        <td>%20 altı</td>
      </tr>
      <tr>
        <th scope="row">Görünürlük skoru</th>
        <td>(Anılma oranı × 0,4) + (Atıf oranı × 0,3) + (Pozitif duygu × 0,3)</td>
        <td>≥70</td>
        <td>50 altı</td>
      </tr>
    </tbody>
  </table>

  <p>Ağırlıkların neden 0,4 / 0,3 / 0,3 olduğu konusunda kaynak bir gerekçe sunmuyor. Kendi sektörünüzde atıf oranı ticari olarak daha değerliyse ağırlığı kaydırmakta serbestsiniz — yeter ki formülü dönem içinde sabit tutun. Değişen ağırlıkla üretilmiş iki çeyrek karşılaştırılamaz. Daha geniş bir ölçüm mimarisi için <Link href="/geo/geo-kpi-olcumu">GEO KPI ölçümü</Link> sayfasına bakın.</p>

  <h3>Yüksek anılma, düşük atıf: ne anlama geliyor?</h3>
  <p>Anılma oranınız güçlü ama atıf oranı %40'ın altındaysa Gemini markanızı tanıyor, içeriğinize güvenmiyor demektir. Model markayı biliyor, adını yazıyor, fakat bilgiyi sizin sayfanızdan almıyor. Çözüm marka bilinirliğinde değil, kaynak kalitesinde: özgün veri, tarihli örnekler ve doğrulanabilir iddialar ekleyin.</p>
  {/* kaynak: K139 */}

  <h3>Yüksek atıf, düşük anılma: ne anlama geliyor?</h3>
  <p>Ters durum daha iyi haber. Atıf oranı yüksekken anılma oranı düşükse içerik kalitesi yerinde; sorun kategori ilişkilendirmesinde. Model sizi konu uzmanı olarak görüyor ama kategorinin kendisiyle bağınızı kurmuyor. Bu, varlık çalışmasıyla — kategori terimlerini içeren hub sayfaları, tutarlı iç linkleme ve harici bahisler — kapatılabilecek bir açık.</p>
  {/* kaynak: K139 */}

  <h2 id="manuel-takip">Manuel Takip Protokolü</h2>

  <p className="bolum-cevap">Araç satın almadan önce elle ölçün. 10–20 stratejik sorguya kadar manuel takip hem mümkün hem öğretici; verinin nasıl oluştuğunu görmeden hiçbir panelin çıktısını doğru okuyamazsınız. Protokolün özü değişkenleri sabitlemek: aynı sorgu listesi, aynı tarayıcı, gizli mod, aynı konum ve haftanın aynı günü aynı saati.</p>
  {/* kaynak: K139 */}

  <h3>Sorgu kütüphanesini kurun</h3>
  <p>Dağılım %30 markalı, %70 markasız olmalı. Markalı sorgular ("X markası güvenilir mi", "X fiyatları") modelin sizi nasıl tanımladığını gösterir. Markasız kategori sorguları ("kurumsal SEO ajansı nasıl seçilir", "en iyi CRM yazılımı") ise asıl rekabet alanınızdır ve büyüme buradan gelir. Markalı sorgularda yüksek skor almak kolaydır; onu başarı sanmayın.</p>
  {/* kaynak: K139 */}

  <h3>Test koşullarını sabitleyin</h3>
  <p>Gizli mod, kişiselleştirmeyi tamamen kapatmaz ama oturum geçmişinin etkisini büyük ölçüde keser. Konum sinyalini sabitleyin — Türkiye ölçümü yapıyorsanız yurt dışı çıkışlı bir bağlantı sonucu bozar. Saat sabitlemesi kulağa aşırı geliyor olabilir; değil. Model çıktıları gün içinde bile değişebiliyor ve haftalık serinizin karşılaştırılabilir kalması buna bağlı.</p>
  {/* kaynak: K139 */}

  <h3>Her sorgu için beş kayıt noktası</h3>
  <ol>
    <li><strong>Anılma:</strong> Marka yanıtta geçti mi? Evet / Hayır.</li>
    <li><strong>Pozisyon:</strong> Yanıtın neresinde geçti — ilk cümle, orta bölüm, son listede mi? Erken geçen anılma, kullanıcıya ulaşma olasılığı en yüksek olandır.</li>
    <li><strong>Atıf:</strong> Anılmaya tıklanabilir bir bağlantı eşlik ediyor mu, hangi URL'ye?</li>
    <li><strong>Rakip anılmaları:</strong> Aynı yanıtta hangi markalar geçti, kaç kez? Cevap payı hesabının paydası buradan çıkar.</li>
    <li><strong>Duygu:</strong> Anılma olumlu, nötr yoksa olumsuz bir çerçevede mi? "X güvenilir bir seçenek" ile "X kullanıcıların şikayet ettiği bir marka" aynı sayıya yazılmaz.</li>
  </ol>
  {/* kaynak: K139 */}

  <h3>Duyguyu nasıl puanlarsınız?</h3>
  <p>Duygu, formüldeki en öznel bileşen ve tam da bu yüzden en çok tutarlılık isteyen kalem. Basit bir üçlü skala yeterli: olumsuz 0, nötr 50, olumlu 100. Kuralı yazıya dökün ve aynı kişinin puanlamasını sağlayın. "Uygun fiyatlı seçeneklerden biri" nötr mü olumlu mu — bu soruya her hafta aynı yanıtı verecek bir rehberiniz yoksa görünürlük skorunuzun %30'u gürültüden ibaret olur. İki kişi puanlıyorsa ilk ay örtüşme testi yapın.</p>

  <h3>Kadans ve eşik</h3>
  <p>Haftalık ölçüm, aylık değerlendirme. Tek haftalık dalgalanmaya müdahale etmeyin; üç ardışık haftalık düşüş anlamlı sinyaldir. 20 sorgunun üzerine çıktığınızda elle takip zahmete dönüşür — otomasyona o noktada geçin, öncesinde değil. Üç yüzeyi ayrı ayrı ölçüyorsanız sorgu sayısını üçe katlamak yerine, her yüzey için farklı 8–10 sorgudan oluşan alt kümeler kullanın.</p>

  <h2 id="gemini-chatgpt">Gemini mi ChatGPT mi: Geri Bildirim Hızı Farkı</h2>

  <p className="bolum-cevap">İki platform arasındaki en önemli operasyonel fark, yaptığınız değişikliğin ne zaman görüneceği. Gemini canlı arama indeksine bağlı olduğu için içerik iyileştirmeleri günler içinde yanıtlara yansıyabiliyor. ChatGPT'de ise ağırlıkla modelin eğitim verisinden gelen bilgi konuşuyor ve bir değişikliğin kalıcı etkisi çoğu senaryoda yeni eğitim döngüsünü bekliyor.</p>
  {/* kaynak: K139 */}

  <p>Bu fark, Gemini'yi GEO çalışmalarının deney alanı yapıyor. Bir hipotezi — diyelim ki "tanım bloğunu H2'nin hemen altına taşımak alıntı oranını artırır" — Gemini'de iki hafta içinde test edip sonucu görebilirsiniz. Aynı testi ChatGPT'de çalıştırmak aylar sürer ve sonuç değişkeni izole etmenizi imkânsız kılar.</p>

  <p>Doğal iş akışı şu: hipotezleri Gemini'de test edin, işe yarayan yapıyı tüm içerik kütüphanesine yayın, sonra ChatGPT tarafında uzun vadeli etkiyi izleyin. Platformlar arası farkların ayrıntısı — kaynak seçimi, bahis kaynakları, marka bahsi dinamikleri — <Link href="/geo/chatgpt-geo">ChatGPT GEO</Link> sayfasında.</p>

  <p>Bir nüans: Gemini'nin hızı iki yönlü çalışıyor. Kazanımlar hızlı geldiği gibi kayıplar da hızlı geliyor. Rakibiniz daha net bir pasaj yayınladığında yerinizi haftalar değil günler içinde kaybedebilirsiniz. Sürekli izleme, ChatGPT'de opsiyonel, Gemini'de zorunlu.</p>

  <h2 id="sss">Sıkça Sorulan Sorular</h2>

  <h3>Gemini'de görünmek için Google'da üst sırada olmak şart mı?</h3>
  <p>Hayır. Ahrefs'in 2025 verilerine göre yapay zeka sistemlerince alıntılanan URL'lerin yalnızca yaklaşık %12'si aynı sorgu için Google'ın ilk 10 sonucunda yer alıyor. İndekslenmiş olmak gerekli, ilk sayfada olmak değil.</p>
  {/* kaynak: K137 */}

  <h3>Gemini ile ChatGPT optimizasyonu arasındaki temel fark nedir?</h3>
  <p>Geri bildirim hızı. Gemini'de yapılan içerik iyileştirmeleri görünürlüğü günler içinde etkileyebilirken, ChatGPT'de aynı değişikliğin kalıcı yansıması genellikle modelin yeniden eğitilmesine bağlı. Bu yüzden yeni içerik yapılarını önce Gemini'de test etmek, sonra yaymak daha verimli bir sıra.</p>
  {/* kaynak: K139 */}

  <h3>AI Modu ve AI Bakışı Türkiye'de ne zaman açıldı?</h3>
  <p>18 Şubat 2026. Google Türkiye Ülke Direktörü Mehmet Keteloğlu tarafından duyuruldu ve ürünler resmi Türkçe adlarıyla kullanıma sunuldu. Türkiye, bu ürünlerin daha önce yayıldığı 180 ülkelik dalganın dışında kalmıştı; dolayısıyla Türkçe sorgularda düzenli GEO ölçümü bu tarihten itibaren anlamlı.</p>

  <h3>Google Search Console Gemini alıntılarını gösterir mi?</h3>
  <p>Doğrudan göstermez. GSC verileri ile Gemini alıntı davranışı arasındaki korelasyon sınırlı, çünkü alıntı çoğu zaman tıklamaya dönüşmüyor. Ölçümü ayrı bir protokolle yürütmeniz gerekiyor.</p>
  {/* kaynak: K137 */}

  <h3>Gemini içerik değişikliklerini ne kadar sürede yansıtır?</h3>
  <p>Sayfanın yeniden taranmasına bağlı olarak günler içinde. Belirli senaryolarda gerçek zamanlı veri çekimi de devreye girebiliyor. Pratik beklenti: yayından sonraki 7–14 gün içinde ilk sinyali görürsünüz.</p>
  {/* kaynak: K137 */}

  <h3>Küçük işletmeler için en hızlı kazanım nedir?</h3>
  <p>Yerel varlık sinyallerini toparlamak. Gemini görünürlüğü kullanıcının coğrafi konumundan etkilendiği için, NAP tutarlılığı ve LocalBusiness şeması gibi düşük maliyetli düzeltmeler dar sorgu kümelerinde orantısız avantaj yaratabiliyor. Ulusal rakiplerin otoritesiyle yarışmadan kazanabileceğiniz tek alan burası.</p>
  {/* kaynak: K139 */}

  <h3>Kaç sorguyla ölçüme başlamalıyım?</h3>
  <p>10–20 sorgu yeterli. %30'u markalı, %70'i markasız kategori sorgusu olsun ve listeyi en az bir çeyrek boyunca değiştirmeyin.</p>
  {/* kaynak: K139 */}

  <p className="cta"><Link href="/geo">GEO rehberinin tamamını inceleyin</Link> — platform bazlı sayfaların hepsi orada bağlanıyor.</p>
                </div>
            </article>
        </div>
    );
}
