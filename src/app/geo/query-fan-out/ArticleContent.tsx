/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

const headings = [
    { id: "nedir", text: "Query fan-out nedir?" },
    { id: "turkiye", text: "Türkiye bağlamı" },
    { id: "mekanizma", text: "Mekanizma: sorgu girdikten sonra ne oluyor?" },
    { id: "ornek", text: "Örnek: bir Türkçe sorgunun fan-out haritası" },
    { id: "tetiklenmeyen", text: "Fan-out ne zaman devreye girmez?" },
    { id: "karsilastirma", text: "AI Modu ile geleneksel arama arasındaki fark" },
    { id: "alt-sorgu-tespiti", text: "Alt sorguları nasıl tespit edersiniz?" },
    { id: "icerik-mimarisi", text: "Tek anahtar kelime yerine içerik kümesi" },
    { id: "olcum", text: "Ölçüm boşluğuna hazırlanın" },
    { id: "sss", text: "Sıkça Sorulan Sorular" },
];

export default function ArticleContent() {
    return (
        <div className="grid lg:grid-cols-[250px_1fr] gap-12 items-start relative">
            <aside className="hidden lg:block sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto pr-4 custom-scrollbar" aria-label="İçindekiler">
                <div>
                    <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2 pl-2">
                        <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>
                        İÇİNDEKİLER
                    </h2>
                    <nav className="space-y-1 border-l-2 border-gray-100">
                        {headings.map((heading, i) => (
                            <a key={i} href={`#${heading.id}`} className="block py-3 pl-4 text-sm text-gray-600 hover:text-blue-700 hover:border-l-2 hover:border-blue-700 -ml-0.5 transition-all leading-relaxed">
                                <span className="font-mono text-xs text-gray-400 mr-2 font-medium">{(i + 1).toString().padStart(2, '0')}</span>
                                {heading.text}
                            </a>
                        ))}
                    </nav>
                </div>
            </aside>

            <article className="min-w-0 geo-rehber">
                <p className="first-answer text-xl text-gray-700 leading-relaxed font-light mb-12 pl-6 border-l-4 border-violet-600">
                    Query fan-out, bir yapay zeka arama sisteminin tek bir kullanıcı sorgusunu arka planda
                    birden fazla alt sorguya bölmesi, her biri için ayrı ayrı kaynak toplaması ve sonuçları
                    tek bir yanıtta birleştirmesidir. Google AI Modu ve AI Bakışı bu mekanizmayla çalışır.
                    Pratik sonucu şu: artık tek bir sorguya değil, o sorgudan türeyen sorgu ailesine yanıt
                    veriyorsunuz.
                    {/* kaynak: K53 */}
                    {/* kaynak: K54 */}
                </p>

                <aside className="tldr mb-12 p-6 md:p-8 bg-violet-50/50 border border-violet-100/80 rounded-3xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-violet-600 text-white text-xs font-black uppercase tracking-widest rounded-full">TL;DR</span>
                        <span className="tldr-baslik text-sm font-bold text-violet-800">Kısaca</span>
                    </div>
                    <p className="text-gray-800 font-bold text-[15px] leading-relaxed mb-4">Sıralamanız tek bir sorgu için değil, o sorgudan türeyen onlarca alt sorgu için ölçülüyor — bu yüzden tek sayfa değil, içerik kümesi kazanıyor.</p>
                    <ul className="space-y-3.5 text-gray-700 text-[15px] leading-relaxed list-none pl-0 my-0">
                        <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Fan-out her sorguda çalışmaz. Navigasyonel, işlemsel ve tek cevaplı gerçek sorularında sistem bu adımı atlar.</span></li>
                        <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Çekilen şey sayfanız değil, sayfanızın bir bölümü. Pasaj düzeyinde alıntı, sayfa sıralamasının önüne geçiyor.</span></li>
                        <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Google AI Modu Türkiye&apos;de 18 Şubat 2026&apos;da açıldı. Türkçe alt sorgu havuzu İngilizce&apos;ye göre çok daha seyrek — rekabet henüz kurulmadı.</span></li>
                        <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Search Console fan-out&apos;u göstermiyor. Ölçümü kaynak gösterilen sayfa çeşitliliği üzerinden kurmak gerekiyor.</span></li>
                    </ul>
                </aside>

                <div className="prose prose-lg max-w-none 
                        prose-headings:font-sans prose-headings:font-bold prose-headings:text-foreground
                        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight
                        prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-gray-800
                        prose-p:font-sans prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-6
                        prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2
                        prose-li:text-gray-600 prose-li:leading-relaxed
                        prose-strong:font-bold prose-strong:text-gray-900
                        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                        prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-gray-800
                        prose-table:text-sm
                        mb-16">
                    <h2 id="nedir">Query fan-out nedir?</h2>
                    <p className="bolum-cevap">
                        Tek bir sorgunun arka planda birden fazla ilgili sorguya bölünmesi, her birinin ayrı
                        çalıştırılması ve dönen sonuçların sentezlenerek tek yanıt üretilmesi tekniğidir.
                        Geleneksel aramada bir sorgu bir sonuç seti üretir; AI Modu&apos;nda tek girdi birden fazla
                        farklı sorguya dönüşür ve kullanıcı bunların hiçbirini görmez.
                        {/* kaynak: K53 */}
                        {/* kaynak: K54 */}
                    </p>
                    <p>
                        Somutlaştıralım. &quot;Hangi protein tozu daha iyi&quot; diye sorduğunuzda sistem tek bir arama
                        yapmıyor. Arka planda &quot;whey ve kazein sindirim hızı farkı&quot;, &quot;protein tozu yan etkileri&quot;,
                        &quot;günlük protein ihtiyacı kaç gram&quot; gibi soruları ayrı ayrı çalıştırıp yanıtları tek bir
                        çıktıda birleştiriyor. Bunların içinde sizin sormadığınız, ama sorduğunuz sorunun mantıksal
                        devamı olan sorular da var — sistem takip sorularını siz aklınıza getirmeden önce tahmin
                        ediyor.
                        {/* kaynak: K57 */}
                    </p>
                    <p>
                        Bu, <Link href="/geo">AI aramada görünürlük</Link> çalışmasının neden klasik anahtar kelime
                        hedeflemesinden ayrıldığını açıklayan tek mekanizma. Sayfanız asıl sorgu için mükemmel
                        yazılmış olabilir; fan-out o sorgudan türeyen alt sorguların hiçbirine karşılık gelmiyorsa
                        yanıta girmiyor.
                    </p>
                    <p>
                        Teknik tarafta Google I/O&apos;da bir Google mühendisi, fan-out&apos;u üretmek için Gemini&apos;nin özel
                        bir versiyonunun kullanıldığını açıkladı. 18 Kasım 2025&apos;te Google, sürecin Gemini 3
                        lansmanıyla birlikte büyük ölçüde iyileştirildiğini duyurdu.
                        {/* kaynak: K53 */}
                    </p>
                    <p>
                        Terimi karıştırmamak gerekiyor: fan-out bir sıralama faktörü değil, bir geri getirme
                        stratejisi. Sistemin sizi beğenip beğenmemesiyle ilgili bir şey yapmıyor — yalnızca hangi
                        soruları soracağını belirliyor. Sıralama mantığı sorular sorulduktan sonra, her alt sorgu
                        için ayrı ayrı devreye giriyor. Bu ayrım pratikte şu anlama geliyor: bir alt sorgu hiç
                        üretilmiyorsa o konuda ne kadar iyi yazdığınızın hiçbir önemi yok, çünkü o soru hiç
                        sorulmuyor.
                    </p>

                    <h2 id="turkiye">Türkiye bağlamı: fan-out artık Türkçe sorgularda da çalışıyor</h2>
                    <p className="bolum-cevap">
                        Google AI Modu, Türkiye&apos;de 18 Şubat 2026&apos;da resmi Türkçe adıyla açıldı; duyuruyu Google
                        Türkiye Ülke Direktörü Mehmet Keteloğlu yaptı. Türkiye, özelliğin daha önce yayıldığı
                        180 ülkelik dalganın dışında kalmıştı. Yani Türkçe sorgular için fan-out, İngilizce
                        sorgulardan aylar sonra devreye girdi.
                        {/* kaynak: blog.google/intl/tr-tr — 18 Şubat 2026 */}
                    </p>
                    <p>
                        Bu gecikmenin bıraktığı şey bir fırsat penceresi. İngilizce sorgularda fan-out&apos;un ürettiği
                        alt sorguların neredeyse tamamı için hâlihazırda yazılmış, optimize edilmiş, birbirine
                        bağlanmış içerik var. Türkçe&apos;de yok. Aynı konuda alt sorgu havuzu çok daha seyrek — bir
                        alt sorguya doğru düzgün yanıt veren tek sayfa olmak İngilizce&apos;de neredeyse imkânsızken
                        Türkçe&apos;de hâlâ mümkün.
                    </p>
                    <p>
                        Pratik karşılığı şu: İngilizce pazarda &quot;hangi alt sorguda öne çıkarım&quot; sorusu bir rekabet
                        sorusu, Türkçe&apos;de henüz bir kapsama sorusu. Kimse o alt sorguyu yazmamışsa yarışa girmenize
                        gerek yok. Bu durum kalıcı değil; Türkçe içerik üretimi bu boşluğu birkaç çeyrekte
                        kapatacaktır.
                    </p>
                    <p>
                        Bir uyarı da eklemek gerekiyor. Seyrek havuzun ikinci yüzü, sistemin Türkçe karşılık
                        bulamadığında İngilizce kaynaklara ya da çeviri niteliğindeki içeriğe yönelmesi. Türkçe
                        bir sorgunun yanıtında yabancı kaynakların ağırlıklı çıkması bir hata değil, boşluğun
                        göstergesi. O boşluğu kapatan içerik, sırf Türkçe olduğu için değil, o alt sorguya
                        doğrudan yanıt verdiği için seçiliyor — dil avantajı tek başına yeterli değil.
                    </p>

                    <h2 id="mekanizma">Mekanizma: sorgu girdikten sonra ne oluyor?</h2>
                    <p className="bolum-cevap">
                        Süreç beş aşamada işliyor: sorgu sisteme giriyor, niyetlerine ayrılıyor, her niyet için
                        alt sorgular türetiliyor, her alt sorgu için ilgili pasajlar çekiliyor ve toplanan pasajlar
                        tek yanıtta sentezleniyor. Kullanıcı yalnızca son adımı görüyor; aradaki dördü tamamen
                        kapalı kutu. Optimizasyon çalışmasının tamamı da bu görünmeyen dört adımda geçiyor.
                        {/* kaynak: K55 */}
                        {/* kaynak: K57 */}
                    </p>
                    <h3>Sorgu ayrıştırılır</h3>
                    <p>
                        Kullanıcının yazdığı ham sorgu AI Modu&apos;na iletildiğinde henüz hiçbir kaynak taranmamıştır.
                        İlk iş, sorguyu temel niyetlerine bölmek. &quot;Uzaktan çalışan ekipler için proje yönetim aracı&quot;
                        sorgusu tek bir niyet gibi görünse de içinde en az üçü var: araç karşılaştırması, uzaktan
                        çalışma senaryosu, ekip boyutu/fiyat kısıtı.
                        {/* kaynak: K57 */}
                    </p>
                    <h3>Alt sorgular türetilir</h3>
                    <p>
                        Her bileşen için ayrı sorgular üretilir.
                        {/* kaynak: K55 */}
                        {" "}Dönüşüm kalıpları birkaç tanıdık biçimde tekrarlıyor:
                    </p>
                    <ul>
                        <li><strong>Yön / facet:</strong> &quot;en iyi koşu ayakkabısı&quot; → &quot;pronasyona uygun koşu ayakkabısı&quot;</li>
                        <li><strong>Problem / çözüm:</strong> &quot;laptopum neden yavaş&quot; → &quot;yavaş laptop nasıl hızlandırılır&quot;</li>
                        <li><strong>Örtük soru:</strong> &quot;güneş paneli nasıl kurulur&quot; → &quot;güneş paneli kurulum maliyeti&quot;</li>
                        <li><strong>Karşılaştırma:</strong> &quot;hangi kredi kartı&quot; → &quot;kredi kartı yıllık aidat karşılaştırması&quot;</li>
                    </ul>
                    <p>
                        Üçüncü kalıp en çok kaçırılanı. Kullanıcı maliyeti hiç sormadı; sistem sordu. Kurulum
                        rehberiniz fiyat aralığına tek satır ayırmıyorsa o alt sorgu başkasına gidiyor.
                        {/* kaynak: K57 */}
                    </p>
                    <h3>Pasajlar çekilir, sonra sentezlenir</h3>
                    <p>
                        Fan-out her alt sorguya karşılık gelen ilgili pasajları ayrı ayrı çeker. İşleme giren şey
                        sayfanın bütünü değil, doğrudan ilgili bölümler.
                        {/* kaynak: K54 */}
                        {" "}Bu yüzden içeriğin nasıl bölümlendiği, ne kadar uzun olduğundan daha belirleyici —{" "}
                        <Link href="/geo/icerik-chunking" data-pending="true">içerik chunking</Link> tarafında ayrıntısıyla
                        ele alıyorum. Toplanan pasajlar son adımda birleştirilerek tek yanıt oluşturuluyor; farklı
                        kaynak ve görüş gerektiren her prompt bu mekanizmayı tetikliyor.
                        {/* kaynak: K57 */}
                    </p>
                    <p>
                        Sürecin tamamının nasıl kurulduğunu{" "}
                        <Link href="/geo/yapay-zeka-arama-nasil-calisir">yapay zeka aramanın işleyişi</Link>
                        {" "}sayfasında, geri getirme ve sentez katmanlarıyla birlikte anlatıyorum.
                    </p>

                    <h2 id="ornek">Örnek: bir Türkçe sorgunun fan-out haritası</h2>
                    <p className="bolum-cevap">
                        &quot;Uzaktan çalışan ekipler için proje yönetim aracı&quot; sorgusunu ele alalım. Kullanıcı tek bir
                        cümle yazdı, ama içinde birbirinden bağımsız en az beş karar var: hangi araç, hangi ekip
                        büyüklüğü, hangi fiyat bandı, hangi entegrasyonlar, hangi zaman dilimi sorunu. Fan-out
                        bunları ayırıp her biri için ayrı kaynak arıyor.
                    </p>
                    <p>Sistemin bu sorgudan türetmesi beklenen alt sorgular kabaca şöyle görünüyor:</p>
                    <ul>
                        <li>uzaktan ekipler için proje yönetim aracı karşılaştırması</li>
                        <li>küçük ekipler için ücretsiz proje yönetim aracı</li>
                        <li>proje yönetim aracı fiyatlandırma kullanıcı başına</li>
                        <li>farklı saat dilimlerinde çalışan ekipte görev takibi</li>
                        <li>proje yönetim aracı Slack entegrasyonu</li>
                        <li>asenkron çalışmada durum raporlaması nasıl yapılır</li>
                    </ul>
                    <p>
                        Son iki madde kritik. Kullanıcı ne Slack&apos;ten ne asenkron çalışmadan bahsetti; ikisi de
                        sorgunun örtük bileşenlerinden türedi. &quot;Uzaktan ekip&quot; ifadesi sistemin zaman dilimi ve
                        iletişim aracı sorunlarını çağırmasına yetiyor.
                        {/* kaynak: K57 */}
                    </p>
                    <p>
                        Şimdi kendi içeriğinizi bu listeye karşı okuyun. Klasik yaklaşımda &quot;en iyi proje yönetim
                        araçları&quot; başlıklı tek bir karşılaştırma yazınız vardır ve o yazı ilk maddeyi karşılar.
                        Kalan beş madde için ya bir satır geçiyorsunuzdur ya hiçbir şey. Fan-out&apos;un yanıtı
                        kurarken beş kaynak daha çektiğini düşünürseniz, o yanıtta bir kez geçmekle beş kez
                        geçmek arasındaki fark ortaya çıkıyor.
                    </p>
                    <p>
                        Aynı egzersizi kendi ana sorgunuzla yapmak, bu sayfadaki her şeyi bir saat içinde
                        uygulanabilir hale getiriyor: sorguyu yazın, türeyebilecek alt soruları listeleyin, her
                        birinin karşısına o soruya yanıt veren URL&apos;nizi koyun. Boş kalan satırlar içerik
                        planınızdır.
                    </p>

                    <h2 id="tetiklenmeyen">Fan-out ne zaman devreye girmez?</h2>
                    <p className="bolum-cevap">
                        Navigasyonel (&quot;TRT Haber&quot;), işlemsel (&quot;MacBook Air satın al&quot;) ve doğrudan gerçek tabanlı
                        (&quot;Everest kaç metre&quot;) sorgularda sistem bu adımları atlar. Niyeti tekil olan bir sorgu
                        farklı görüşlerin sentezini gerektirmediği için fan-out&apos;un anlamı yok — cevap zaten
                        tek ve kesin.
                        {/* kaynak: K57 */}
                    </p>
                    <p>
                        Bu ayrım strateji açısından işin en pratik kısmı. Fan-out&apos;a göre optimize etmek zaman
                        alan bir iş; onu her sayfaya eşit dağıtmak kaynak israfı. Tetikleyiciler bilgilendirici,
                        karşılaştırmalı ve problem çözme sorguları — &quot;en iyi&quot;, &quot;nasıl&quot;, &quot;vs&quot;, &quot;hangisi&quot; gibi
                        terimler içeren, tek cevabı olmayan sorular.
                        {/* kaynak: K57 */}
                        {" "}Ürün sayfanız veya iletişim sayfanız bu kümede değil; oralara fan-out mantığı taşımanın
                        getirisi yok.
                    </p>
                    <p>
                        Sorgu tiplerini ayırt etmekte zorlanıyorsanız <Link href="/seo/arama-niyeti">arama niyeti</Link>
                        {" "}çerçevesi burada doğrudan çalışıyor. Niyet sınıflandırması GEO&apos;da yeni bir işlev kazandı:
                        artık yalnızca hangi içerik biçimini yazacağınızı değil, fan-out&apos;un o sorguda çalışıp
                        çalışmayacağını da söylüyor.
                    </p>

                    <h2 id="karsilastirma">AI Modu ile geleneksel arama arasındaki fark</h2>
                    <p className="bolum-cevap">
                        Geleneksel aramada kaynak seçimi tek sorguya göre yapılan sıralamayla belirlenir. AI
                        Modu&apos;nda seçim, birden fazla alt sorgunun sonuçları birleştirilerek yapılıyor. Sonuç
                        şu: yüksek sıralanan bir sayfa yanıta hiç girmeyebilir, sıralamada geride kalan bir
                        sayfa tek bir alt sorguyu iyi karşıladığı için alıntılanabilir.
                        {/* kaynak: K53-F11 */}
                    </p>
                    <table>
                        <thead><tr><th>Boyut</th><th>Geleneksel arama</th><th>AI Modu</th></tr></thead>
                        <tbody>
                            <tr><td>Kaynak seçimi</td><td>Tek sorguya göre sıralama</td><td>Birden fazla alt sorgunun sonuçları birleştirilerek seçim</td></tr>
                            <tr><td>Örnek: uyku takibi sorgusu</td><td>NIH araştırma makalesi, Wired incelemesi, Samsung içeriği</td><td>Samsung makalesi, CNET ve TechRadar incelemeleri</td></tr>
                            <tr><td>Sorgu sayısı</td><td>1 sorgu → 1 SERP</td><td>1 sorgu → birden fazla alt sorgu → birleşik yanıt</td></tr>
                            <tr><td>Pasaj kullanımı</td><td>Sayfa sıralaması belirleyici</td><td>Pasaj düzeyinde alıntı; sayfa sırası ikincil</td></tr>
                            <tr><td>Ölçüm</td><td>Tıklama = görünürlük</td><td>Kaynak gösterilip tıklanmayabilir; izleme güçleşir</td></tr>
                        </tbody>
                    </table>
                    {/* kaynak: K53-F6, K53-F7, K53-F8, K53-F9, K53-F11 */}
                    <p>
                        Uyku takibi satırı bu tablonun en anlatıcı kısmı. Geleneksel sonuçlarda akademik bir
                        kaynak, bir teknoloji dergisi incelemesi ve üretici içeriği bir arada çıkıyor; AI Modu
                        aynı konuda üretici makalesini ve iki inceleme sitesini tercih ediyor. Otorite tanımı
                        değişmiyor, ama hangi alt sorguya kimin daha net yanıt verdiği değişiyor.
                        {/* kaynak: K53-F8, K53-F9 */}
                    </p>
                    <p>
                        Aynı mekanizmanın <Link href="/geo/ai-overviews-nedir">AI Bakışı</Link> (AI Overviews)
                        bloklarında nasıl göründüğünü ve <Link href="/geo/google-ai-modu">AI Modu</Link> arayüzünün bundan nerede ayrıldığını ilgili sayfalarda ayrı ayrı işliyorum.
                        Bu sayfa ikisinin de altındaki motoru anlatıyor.
                    </p>

                    <h2 id="alt-sorgu-tespiti">Alt sorguları nasıl tespit edersiniz?</h2>
                    <p className="bolum-cevap">
                        Google, bir sorgudan kaç ve hangi alt sorgunun üretildiğini paylaşmıyor. Elinizdeki şey
                        yaklaşık modeller: &quot;Bunlar da soruldu&quot; (People Also Ask) kutuları, AlsoAsked gibi soru
                        haritalama araçları ve fan-out&apos;u simüle etmeye çalışan Qforia. Hiçbiri gerçek çıktıyı
                        göstermiyor, ama örüntüyü yakalamaya yetiyor.
                        {/* kaynak: K54 */}
                    </p>
                    <p>
                        Qforia, Mike King&apos;in Gemini promptlarını taklit ederek geliştirdiği bir araç; girilen bir
                        sorgu için 20-30 ilgili alt sorgu üretiyor. Bu sayı aracın kendi çıktısı, Google&apos;ın gerçekte
                        çalıştırdığı sorgu sayısı değil — böyle bir rakam kamuya açıklanmadı.
                        {/* kaynak: K54-F17, K54-F18 */}
                    </p>
                    <p>
                        &quot;Bunlar da soruldu&quot; ve AlsoAsked, fan-out örüntülerini anlamak için hâlâ geçerli başlangıç
                        noktaları.
                        {/* kaynak: K54-F15, K54-F16 */}
                        {" "}Yaygın ticari SEO yazılımlarının çoğu bu işe göre tasarlanmadı; anahtar kelime hacmi
                        raporlayan bir araç, tek sorgudan türeyen soru ağacını göstermiyor.
                        {/* kaynak: K54-F27 */}
                    </p>
                    <p>
                        Türkçe için bir uyarı: bu araçların Türkçe soru havuzu İngilizce&apos;ye göre dar. Qforia
                        çıktısını ham liste olarak kabul etmek yerine, kendi müşteri sorularınızla, satış
                        görüşmesi notlarınızla ve destek taleplerinizle genişletmek gerekiyor. Türkçe&apos;de en iyi
                        alt sorgu kaynağı hâlâ gerçek kullanıcıların kendisi.
                    </p>
                    <p>
                        Araç çıktısını değerlendirirken bir filtre kullanın: üretilen her alt sorgunun karşısına
                        &quot;bu soruyu gerçekten soran biri var mı&quot; sorusunu koyun. Simülasyon araçları dilbilgisel
                        olarak makul ama kimsenin sormadığı sorular da üretiyor. Aramada karşılığı olmayan bir alt
                        sorgu için sayfa açmak, kümenizi seyreltmekten başka işe yaramıyor.
                    </p>
                    {/* [İNSAN] ÖZGÜN VERİ — YAYINDAN ÖNCE DOLDUR
                        Türkçe bir sorgu için Qforia çıktısı + o alt sorguların kaçının
                        mevcut içerikle karşılandığına dair gerçek bir denetim örneği. */}

                    <h2 id="icerik-mimarisi">Tek anahtar kelime yerine içerik kümesi</h2>
                    <p className="bolum-cevap">
                        Fan-out&apos;a göre optimize etmek, tek sayfa–tek anahtar kelime mantığını geçersiz kılıyor.
                        Asıl sorguya değil, o sorgudan türeyen alt sorgulara yanıt vermeniz gerekiyor; bir konunun
                        farklı yönlerini kapsayan içerik kümeleri, fan-out sorgularının daha geniş bir kesimini
                        yakalıyor. Tek sayfa en fazla birkaç alt sorguyu karşılar, küme onlarcasını karşılar —
                        fark burada oluşuyor.
                        {/* kaynak: K55-F11, K53-F17, K57-F27 */}
                    </p>
                    <p>
                        Bu, <Link href="/seo/topikal-otorite">topikal otorite</Link> argümanının teknik kanıtı. Yıllardır
                        &quot;konuyu bütün olarak kapsayın&quot; deniyordu ve gerekçe genellikle sezgiseldi. Fan-out o
                        gerekçeyi mekanik hale getiriyor: sistem zaten konuyu parçalara bölüp her parça için ayrı
                        kaynak arıyor. Parçaları önceden yazmış olan kazanıyor.
                    </p>
                    <p>
                        Uygulamada üç şey değişiyor. Birincisi, kapsam planlaması anahtar kelime listesinden değil
                        alt sorgu haritasından çıkıyor. İkincisi, alıntılanma olasılığı yüksek bölümleri belirleyip
                        o pasajları özetlenebilir, net cümlelerle yazmak gerekiyor — belirsiz bir paragraf
                        sentezlenemez.
                        {/* kaynak: K54-F24, K53-F19 */}
                        {" "}Üçüncüsü, kaynak dağılımı: karmaşık ve sentez gerektiren sorgulara öncelik vermek, tüm
                        içeriğe eşit emek dağıtmaktan verimli.
                        {/* kaynak: K57-F24 */}
                    </p>
                    <p>
                        Küme mantığının şöyle bir yan etkisi de var: aynı yanıtta sitenizden birden fazla sayfa
                        kaynak gösterilebiliyor. Bu, tek sayfayla erişilemeyecek bir görünürlük biçimi.
                    </p>
                    <p>
                        Kümeyi kurarken sık yapılan hata, alt sorgu başına ayrı sayfa açmak. Altı alt sorgu için
                        altı ince sayfa üretmek, konuyu kapsamak değil parçalamak oluyor; hiçbiri tek başına
                        yeterince derin olmadığı için hiçbiri seçilmiyor. İşe yarayan bölme ölçütü sorgu değil,
                        <em>karar</em>: kullanıcı için ayrı bir karar noktası oluşturan konu ayrı sayfa hak ediyor,
                        aynı kararın bir yönü olan alt sorgu ise mevcut sayfanın içinde kendi başlığını alıyor.
                        Fiyatlandırma ayrı bir karardır; &quot;Slack entegrasyonu var mı&quot; değildir.
                    </p>
                    <p>
                        İkinci hata sırayla ilgili. Alt sorgu haritasını çıkarmadan yazmaya başlarsanız, konuyu
                        kapsadığınızı sandığınız yerde aslında yalnızca kendi bildiğiniz açıları kapsamış
                        oluyorsunuz. Harita önce çıkarılırsa hangi sayfanın yazılacağı değil, hangisinin
                        yazılmayacağı da netleşiyor.
                    </p>

                    <h2 id="olcum">Ölçüm boşluğuna hazırlanın</h2>
                    <p className="bolum-cevap">
                        AI Modu&apos;ndaki konuşmalar Search Console&apos;da gösterim veya tıklama olarak görünmüyor.
                        Fan-out&apos;un hangi alt sorguyu çalıştırdığını, sizin sayfanızın hangisine yanıt verdiğini
                        doğrudan gösteren bir metrik de yok. Trafik düşerken görünürlüğün arttığı bir dönem
                        yaşanabiliyor ve mevcut raporlama bunu ayırt edemiyor. Ölçümü dolaylı kurmak gerekiyor.
                        {/* kaynak: K53-F23 */}
                    </p>
                    <p>
                        İşe yarayan yaklaşım: AI Modu yanıtlarında sitenizin kaç <em>farklı</em> sayfasının kaynak
                        gösterildiğini takip etmek. Tek bir yanıtta birden fazla sayfanız çıkıyorsa küme yapınız
                        fan-out sorgularını karşılıyor demektir. Tek sayfa çıkıyorsa muhtemelen yalnızca ana
                        sorguyu karşılıyorsunuz.
                        {/* kaynak: K54 */}
                    </p>
                    <p>
                        İkinci bir sinyal, kaynak gösterilen sayfaların hangi alt sorguya denk geldiği. Yanıtta
                        hep aynı giriş seviyesi rehberiniz çıkıyorsa kümenin derin ucu boş demektir. Fiyat,
                        karşılaştırma, sorun giderme gibi kenar sayfalarınız da görünmeye başladığında haritanın
                        doğru kurulduğunu anlıyorsunuz.
                    </p>
                    <p>
                        Daha geniş çerçeve <Link href="/geo/geo-kpi-olcumu">GEO ölçümü</Link> sayfasında. Kısa hali: SEO, performans kanalından marka performansı kanalına kayıyor ve
                        bu geçiş ölçüm setini de değiştiriyor.
                        {/* kaynak: K54-F28 */}
                        {" "}Fan-out her sorguda tetiklenmediği için stratejiyi karmaşık, araştırma odaklı sorgu
                        türlerine yoğunlaştırmak hem ölçmeyi hem önceliklendirmeyi kolaylaştırıyor.
                        {/* kaynak: K57-F24 */}
                    </p>

                    <h2 id="sss">Sıkça Sorulan Sorular</h2>
                    <h3>Query fan-out her sorgu için mi tetiklenir?</h3>
                    <p>Hayır. Navigasyonel sorgular, işlemsel sorgular ve doğrudan gerçek tabanlı sorular genellikle fan-out sürecini başlatmaz. Asıl tetikleyiciler &quot;en iyi&quot;, &quot;nasıl&quot;, &quot;vs&quot; gibi terimler içeren bilgilendirici, karşılaştırmalı ya da problem çözme sorgularıdır. {/* kaynak: K57 */}</p>
                    <h3>Google hangi alt sorguların üretildiğini paylaşıyor mu?</h3>
                    <p>Paylaşmıyor. Bir sorgudan kaç ve hangi alt sorgunun işlendiği kamuoyuyla paylaşılmıyor. {/* kaynak: K54 */}</p>
                    <h3>Query fan-out ile query expansion arasındaki fark nedir?</h3>
                    <p>Query expansion tek bir sorguyu eş anlamlılar veya ilgili terimlerle genişletir; ortada hâlâ tek bir arama vardır. Query fan-out ise orijinal sorguyu birden fazla bağımsız alt sorguya böler ve bunları paralel çalıştırır. Birincisi sorguyu zenginleştirir, ikincisi çoğaltır. {/* kaynak: K54 */}</p>
                    <h3>Türkiye&apos;de AI Modu ne zaman açıldı?</h3>
                    <p>18 Şubat 2026&apos;da. Duyuruyu Google Türkiye Ülke Direktörü Mehmet Keteloğlu yaptı. Türkiye, özelliğin daha önce yayıldığı 180 ülkelik dalganın dışında kalmıştı; bu gecikme Türkçe içerik üretenler için hâlâ açık bir rekabet penceresi bırakıyor.</p>
                    <h3>Fan-out performansını nasıl ölçerim?</h3>
                    <p>Doğrudan bir metrik yok. Pratik yaklaşım, AI Modu yanıtlarında sitenizin kaç farklı sayfasının kaynak gösterildiğini izlemek. Yanıt başına birden fazla sayfa görünüyorsa içerik kümeniz fan-out sorgularını karşılıyordur. {/* kaynak: K54 */}</p>
                    <h3>ChatGPT ve Claude da fan-out yapıyor mu?</h3>
                    <p>Evet. Claude, ChatGPT ve Gemini gibi yanıt motorları kapsamlı yanıt üretmek için tek bir kullanıcı promptunu birden fazla sorguya dönüştürüyor. {/* kaynak: K55 */} AI Modu, Gemini&apos;nin Deep Research özelliğine benzer biçimde çalışıyor ancak çok daha hızlı. {/* kaynak: K53 */} Platform bazlı farklar için <Link href="/geo/chatgpt-geo">ChatGPT GEO</Link> sayfasına bakın.</p>
                    <h3>Gemini güncellemesi fan-out&apos;u nasıl değiştirdi?</h3>
                    <p>Gemini 3 güncellemesiyle AI Modu, daha önce kaçırdığı yeni içerikleri bulabiliyor. Bu, taze ve iyi yapılandırılmış içeriğin fan-out sürecinde kaynak olarak seçilme ihtimalini artırıyor. {/* kaynak: K53, K57 */}</p>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-8 not-prose bg-gray-50 border-l-4 border-violet-600 p-8 rounded-r-xl">
                    Fan-out&apos;un sizin konunuzda hangi alt sorguları ürettiğini ve mevcut içeriğinizin kaçını
                    karşıladığını birlikte çıkarmak isterseniz,{" "}
                    <Link href="/geo" className="text-violet-600 font-bold hover:underline">GEO danışmanlığı</Link> sayfasından kapsam ve çalışma biçimine bakabilirsiniz.
                </p>

                <div className="mt-16 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Ayrıca Bakınız</h2>
                    <ul className="space-y-6 mb-8">
                        <li className="list-none">
                            <Link href="/geo/yapay-zeka-arama-nasil-calisir" className="inline-flex items-center text-violet-600 hover:underline font-bold group text-lg">
                                <span className="w-2 h-2 rounded-full bg-violet-600 mr-3 group-hover:scale-125 transition-all" />
                                Yapay Zeka Araması Nasıl Çalışır?
                            </Link>
                            <p className="text-sm text-gray-500 ml-5 mt-1 leading-relaxed max-w-2xl">RAG ve grounding mekaniği: modelin cevabı hangi zincirden ürettiği.</p>
                        </li>
                        <li className="list-none">
                            <Link href="/geo/google-ai-modu" className="inline-flex items-center text-violet-600 hover:underline font-bold group text-lg">
                                <span className="w-2 h-2 rounded-full bg-violet-600 mr-3 group-hover:scale-125 transition-all" />
                                Google AI Modu Optimizasyonu
                            </Link>
                            <p className="text-sm text-gray-500 ml-5 mt-1 leading-relaxed max-w-2xl">AI Modu&apos;nun yanıt gövdesinde 1-3 kaynaktan biri olmanın kriterleri.</p>
                        </li>
                        <li className="list-none">
                            <Link href="/geo/icerik-chunking" data-pending="true" className="inline-flex items-center text-gray-400 font-bold group text-lg">
                                <span className="w-2 h-2 rounded-full bg-gray-300 mr-3" />
                                İçerik Chunking Rehberi
                            </Link>
                            <p className="text-sm text-gray-400 ml-5 mt-1 leading-relaxed max-w-2xl">Dil modellerinin içeriği parçalara bölme mantığı ve buna göre yazma pratiği.</p>
                        </li>
                        <li className="list-none">
                            <Link href="/seo/arama-niyeti" className="inline-flex items-center text-blue-600 hover:underline font-bold group text-lg">
                                <span className="w-2 h-2 rounded-full bg-blue-600 mr-3 group-hover:scale-125 transition-all" />
                                Arama Niyeti
                            </Link>
                            <p className="text-sm text-gray-500 ml-5 mt-1 leading-relaxed max-w-2xl">Sorgu tiplerini sınıflandırma çerçevesi ve fan-out tetiklenme ilişkisi.</p>
                        </li>
                    </ul>
                    <div className="pt-6 border-t border-gray-100">
                        <Link href="/geo" className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-gray-800 transition-colors">
                            ← GEO Danışmanlığı ana sayfasına dön
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
}
