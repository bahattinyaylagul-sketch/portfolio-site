/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

const headings = [
    { id: "neden-bu-sayfa", text: "Bu sayfa neden diğer her şeyin \"neden\"i?" },
    { id: "rag-nedir", text: "RAG nedir, neden var?" },
    { id: "sekiz-adim", text: "Zincir adım adım: belgeden cevaba sekiz durak" },
    { id: "grounding-fark", text: "Grounding ile RAG aynı şey değil" },
    { id: "rag-yetersiz", text: "RAG'ın göremediği yerler" },
    { id: "turkce-retrieval", text: "Türkçe'de bu zincir aynı çalışmıyor" },
    { id: "cikarim", text: "Zincirden çıkan içerik kararları" },
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
                    ChatGPT, Perplexity veya Google AI Modu bir soruya cevap verirken hafızasından
                    konuşmaz. Önce web&apos;de veya bir dizinde arama yapar, bulduğu birkaç pasajı okur,
                    cevabı o pasajlara dayandırır. Bu düzenin adı RAG: getirilen belgeyle
                    güçlendirilmiş üretim. Sizin içeriğinizin cevapta görünüp görünmemesi, modelin
                    sizi bilmesine değil, bu zincirin hangi halkasında elendiğinize bağlı.
                </p>

                <aside className="tldr mb-12 p-6 md:p-8 bg-violet-50/50 border border-violet-100/80 rounded-3xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-violet-600 text-white text-xs font-black uppercase tracking-widest rounded-full">TL;DR</span>
                        <span className="tldr-baslik text-sm font-bold text-violet-800">Kısaca</span>
                    </div>
                    <p className="text-gray-800 font-bold text-[15px] leading-relaxed mb-4">Yapay zeka araması bir sıralama yarışı değil, bir eleme zinciri: içeriğiniz taranabilir, parçalanabilir, eşleşebilir ve alıntılanabilir olmadan cevaba giremez.</p>
                    <ul className="space-y-3.5 text-gray-700 text-[15px] leading-relaxed list-none pl-0 my-0">
                        <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Model cevabı üretmeden önce dört ayrı elemeden geçiyorsunuz: tarama, parçalama, benzerlik araması, yeniden sıralama. Her biri ayrı bir kaybetme noktası.</span></li>
                        <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Cevabın kaynağı model değil, o an getirilen belge. Bu yüzden içeriğin tazeliği eğitim verisinden daha çok işe yarıyor.</span></li>
                        <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Sistem, kaynak bilgisini takip edemediğinde atıf da veremiyor. Atıf almak istiyorsanız içeriğinizin kimden geldiği makine tarafında izlenebilir olmalı.</span></li>
                        <li className="flex items-start gap-3"><span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span><span>Türkçe sorgularda getirilen kaynak havuzu İngilizce&apos;ye göre çok daha dar. Bu bir dezavantaj değil, henüz doldurulmamış bir alan.</span></li>
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
                    <h2 id="neden-bu-sayfa">Bu sayfa neden diğer her şeyin &quot;neden&quot;i?</h2>
                    <p className="bolum-cevap">
                        GEO tarafında verilen tavsiyelerin çoğu — içeriği parçalara ayır, botlara izin ver,
                        yapılandırılmış veri ekle, tarihleri güncelle — tek başına duyulduğunda keyfi
                        görünür. Hepsinin gerekçesi aynı yerde: modelin cevabı üretirken izlediği
                        getirme zincirinde. Zinciri bir kez anlarsanız, taktik listesi ezberlenecek bir
                        şey olmaktan çıkar.
                    </p>
                    <p>
                        Bu yüzden <Link href="/geo">GEO danışmanlığı</Link> tarafında müşteriyle ilk konuştuğum
                        konu araç seçimi değil, bu akış oluyor. &quot;ChatGPT&apos;de nasıl çıkarım&quot; sorusunun
                        cevabı bir hile değil; sorunun kendisi yanlış kurulmuş. Doğru soru şu: bu sekiz
                        adımlık zincirin hangi adımında benim içeriğim düşüyor?
                    </p>
                    <p>
                        Aşağıda önce zinciri kuran mantığı, sonra adımların tek tek ne yaptığını, en sonda
                        da bu mekanizmanın Türkçe içerikte nasıl farklı davrandığını anlatıyorum. Teknik
                        kısımları anlatırken ölçüyü şurada tutuyorum: bir sistemi kurabilecek kadar değil,
                        kendi içeriğiniz hakkında doğru kararı verebilecek kadar.
                    </p>

                    <h2 id="rag-nedir">RAG nedir, neden var?</h2>
                    <p className="bolum-cevap">
                        RAG (Retrieval-Augmented Generation — getirilen belgeyle güçlendirilmiş üretim),
                        dil modelinin cevap üretmeden önce harici bir kaynaktan ilgili metinleri çekip
                        bunları kendi bağlamına eklemesidir. Model artık ezberinden değil, o an önüne
                        konan belgelerden konuşur. Sonuç daha güncel, daha izlenebilir ve uydurma oranı
                        daha düşük bir çıktıdır.
                        {/* kaynak: K73, K66 */}
                    </p>
                    <p>
                        Sorunun kökeni basit. Bir dil modeli yalnızca eğitildiği veriyle sınırlıdır.
                        Eğitim kesim tarihinden sonrasını bilmez ve bilmediği yerde susmak yerine makul
                        görünen bir metin üretme eğilimindedir — halüsinasyon dediğimiz şey bu.
                        {/* kaynak: K66, K67 */}
                        {" "}Çıplak bir modele &quot;bugün geçerli faiz oranı nedir&quot; diye sormanın güvenilir bir
                        cevabı yoktur.
                        {/* kaynak: K62 */}
                    </p>
                    <p>
                        RAG bu kırılganlığı yamayla değil yapısal olarak çözüyor: klasik bilgi erişim
                        sistemlerinin getirme yeteneğiyle üretici modelin dil yeteneğini aynı boru hattına
                        koyuyor.
                        {/* kaynak: K66, K67 */}
                    </p>
                    <p>
                        Pazarlama tarafında bunun tek bir sonucu var ve büyük bir sonuç: <strong>modelin
                        eğitim verisinde geçmek zorunda değilsiniz.</strong> Cevaba girmek için modelin
                        &quot;sizi bilmesi&quot; gerekmiyor; soru sorulduğu anda getirilen ilk birkaç belge arasında
                        olmanız yeterli. Bu, GEO&apos;yu marka büyüklüğünden bağımsız hale getiren şey.
                        Küçük bir sitenin, doğru parçalanmış ve doğru anda taze bir sayfayla dev bir
                        rakibin önüne geçmesi bu yüzden mümkün.
                    </p>
                    <p>
                        Bunun ters yüzü de var. Getirme her sorguda yeniden çalıştığı için kazandığınız
                        yer kalıcı bir mevzi değil. Klasik aramada bir sıralamayı aylarca koruyabilirsiniz;
                        burada her soru yeni bir yarışma. İçeriğin bakımsız bırakıldığı anda düşmesi,
                        algoritma cezasından değil, mekanizmanın doğasından kaynaklanıyor.
                    </p>

                    <h2 id="sekiz-adim">Zincir adım adım: belgeden cevaba sekiz durak</h2>
                    <p className="bolum-cevap">
                        Bir RAG sistemi belgeyi almaktan cevabı yazmaya kadar sekiz bağlı adımda çalışır.
                        İlk üçü siz daha soruyu duymadan, arka planda olur. Ortadaki üçü kullanıcı soruyu
                        yazdığı anda saniyeler içinde çalışır. Son ikisi cevabın kendisidir. Her adımın
                        içerik tarafında bir karşılığı var ve o karşılığı görmezseniz adım sadece jargon
                        olarak kalır.
                    </p>
                    <h3 id="hazirlik">Hazırlık aşaması — siz daha sorulmadan buradasınız</h3>
                    <p>
                        <strong>1. Belge alma ve parçalama (chunking).</strong> Ham belgeler sisteme
                        girer ve modelin bağlam sınırına sığacak parçalara bölünür. Kritik nokta:
                        her parçanın <em>tek başına</em> eşleştirilebilir olması gerekir. Parça ne çok
                        küçük ne çok büyük olmalı.
                        {/* kaynak: K68, K62 */}
                    </p>
                    <p>
                        Sizin tarafınızda bu şu demek: cevaba giren şey sayfanız değil, sayfanızın bir
                        parçası. Bir bölümü, önceki bölümde tanımladığınız bir kısaltmaya dayanıyorsa,
                        o parça tek başına koptuğunda anlamsızlaşır ve elenir. Başlıklarını bağlamsız
                        okunacak şekilde yazmak, her bölümün altına kendi kendine yeten bir cevap
                        paragrafı koymak — bu sayfadaki <code>.bolum-cevap</code> blokları dahil —
                        doğrudan bu adıma oynanan hamleler.{" "}
                        <Link href="/geo/icerik-chunking" data-pending="true">İçerik chunking</Link>
                        {" "}sayfasında bunun uygulaması var.
                    </p>
                    <p>
                        Bir adım öncesi de var ve çoğu sitede asıl kayıp orada: belge sisteme hiç
                        girmiyorsa geri kalan yedi adımın hükmü yok. Botun sayfanızı çekebilmesi
                        tartışmanın giriş bileti.{" "}
                        <Link href="/geo/ai-botlari-robots-txt" data-pending="true">AI botları ve robots.txt</Link>
                        {" "}yönetimini ayrı bir sayfada ele alıyorum.
                    </p>
                    <p>
                        Şu ayrımı da baştan yapmak gerekiyor: eğitim için tarayan botla, cevap anında
                        sayfayı çekmeye gelen bot aynı şey değil. Birine kapıyı kapatıp diğerine açmak
                        mümkün ve çoğu zaman doğru karar bu. İkisini tek bir satırla birden engelleyen
                        sitelerin sayısı az değil ve genelde farkında olmadan yapılıyor.
                    </p>
                    <p>
                        <strong>2. Ön işleme.</strong> Parçalar temizlenir ve modelin işleyebileceği
                        birimlere ayrılır. Ham metinlerde sık geçen &quot;stemming ve stop word kaldırma&quot;
                        adımları bugünün anlamsal arama hatlarında genellikle uygulanmaz; bunlar hibrit
                        aramanın anahtar kelime bacağına ait klasik adımlardır.
                        {/* kaynak: K66 */}
                        {" "}Pratik karşılığı: gövde metninize karışan menü, çerez uyarısı, tekrar eden
                        footer metni gibi kalabalık, parçanın kalitesini düşürür. Temiz HTML burada
                        ölçülebilir fark yaratır.
                    </p>
                    <p>
                        <strong>3. Vektöre çevirme ve depoya yazma.</strong> Temizlenen her parça yüksek
                        boyutlu bir sayı dizisine — embedding&apos;e — dönüşür ve kaynak bilgisiyle birlikte
                        veritabanına yazılır. Sistemin atıf verebilmesi ya da gerektiğinde cevap
                        vermekten kaçınabilmesi bu kaynak kaydına bağlıdır.
                        {/* kaynak: K68, K62 */}
                    </p>
                    <p>
                        Bu cümlenin altını çizin: <strong>atıf, teknik olarak kaynak bilgisinin
                        izlenebilmesidir.</strong> Sayfanız kim tarafından, ne zaman, hangi varlık adına
                        yayımlandığı belirsiz bir metin yığınıysa, model onu kullanabilir ama size
                        referans veremez. Yazar, yayın tarihi ve kurum bağını makine tarafında net
                        kuran <Link href="/geo/yapay-zeka-schema" data-pending="true">yapılandırılmış veri</Link>
                        {" "}ile <Link href="/geo/entity-seo">varlık çalışması</Link>nın karşılığı tam olarak burası.
                    </p>
                    <h3 id="getirme">Getirme aşaması — soru sorulduğu an</h3>
                    <p>
                        <strong>4. Sorgunun vektöre çevrilmesi.</strong> Kullanıcı soruyu yazdığında,
                        belgeleri işleyen embedding modeli soruyu da aynı uzaya taşır. Belge ve soru
                        aynı uzayda temsil edildiği için aralarındaki anlamsal yakınlık hesaplanabilir
                        hale gelir.
                        {/* kaynak: K62, K66 */}
                        {" "}Bunun içerik tarafındaki sonucu, anahtar kelime alışkanlığını bozan bir şey:
                        eşleşme kelime düzeyinde değil anlam düzeyinde kuruluyor. Kullanıcının kurduğu
                        cümleyi birebir sayfanıza yerleştirmek zorunda değilsiniz; o cümlenin sorduğu
                        şeyi gerçekten cevaplamanız gerekiyor.
                    </p>
                    <p>
                        <strong>5. Benzerlik araması.</strong> Sorgu vektörü depodaki vektörlerle
                        karşılaştırılır ve en yakın birkaç pasaj (top-k) getirilir. Olgun sistemler
                        burada hibrit arama kullanır: anlamsal aramayı ve klasik anahtar kelime aramasını
                        paralel çalıştırıp sonuçları birleştirir.
                        {/* kaynak: K62, K66 */}
                        {" "}Yani anahtar kelime ölmedi, tek başına belirleyici olmaktan çıktı. Marka adı,
                        ürün kodu, mevzuat numarası gibi tam eşleşme isteyen ifadeler hâlâ lafzen sayfada
                        geçmeli.
                    </p>
                    <p>
                        Gerçek sistemlerde tek bir sorgu da atılmıyor. Kullanıcının tek cümlesi birden
                        çok alt sorguya bölünüp paralel yürütülüyor — Google&apos;ın AI Modu&apos;nda buna query
                        fan-out deniyor. İçerik açısından anlamı şu: tek bir hedef kelimede birinci olmak
                        yerine, o kelimenin etrafındaki soru kümesinin tamamını kapsamak kazandırıyor.{" "}
                        <Link href="/geo/query-fan-out">Query fan-out</Link> sayfası bu
                        dağılımı örneklerle açıyor.
                    </p>
                    <p>
                        <strong>6. Yeniden sıralama (re-ranking).</strong> Getirilen adaylar ikinci bir
                        süzgeçten geçer ve en alakalı olanlar üste taşınır.
                        {/* kaynak: K66 */}
                        {" "}Buraya kadar gelip elenmek, GEO&apos;da en sık görülen sessiz kayıp. Getirildiniz ama
                        seçilmediniz. Ayırt eden şey genelde kalite değil <em>fark</em> oluyor: aynı beş
                        kaynağın söylediğini altıncı kez söyleyen sayfanın üste çıkmak için sebebi yok.
                        Özgün veri, kendi ölçümünüz, sektörden gerçek bir örnek — bunlar süsleme değil,
                        bu adımdaki para birimi.{" "}
                        <Link href="/seo/bilgi-kazanci">Bilgi kazancı</Link> kavramı tam da bu eleme için var.
                    </p>
                    <h3 id="uretim">Üretim aşaması — cevabın yazıldığı yer</h3>
                    <p>
                        <strong>7. İstemin kurulması ve grounding.</strong> Seçilen pasajlar modele
                        gidecek isteme eklenir. Sistem talimatı modele açıkça şunu söyler: yalnızca bu
                        kanıtla desteklenen ifadeleri üret, emin değilsen cevap verme.
                        {/* kaynak: K62 */}
                    </p>
                    <p>
                        Abstain talimatının marka tarafında hoş olmayan bir sonucu var: sistem sizin
                        hakkınızda kanıt bulamazsa uydurmak yerine susmayı tercih edebilir. Yani
                        görünmemek her zaman kötü yazmaktan kaynaklanmıyor; bazen hakkınızda getirilebilir
                        hiçbir kaynak olmamasından kaynaklanıyor. Kendi siteniz dışında hiçbir yerde
                        doğrulanmayan bir iddia, bu adımda sessizce eleniyor.
                    </p>
                    <p>
                        <strong>8. Cevabın üretilmesi.</strong> Model, bağlama eklenen kaynaklara
                        dayanarak cevabı yazar.
                        {/* kaynak: K66 */}
                        {" "}Ve burada içerik üreticisi için son bir ayrıntı var: model cevabı sizin
                        cümlelerinizle değil, kendi cümleleriyle yazar. Sayfanızdan aldığı şey ifade
                        değil bilgi. Bu yüzden &quot;alıntılanabilir yazmak&quot; güzel cümle kurmak değil, bir
                        iddiayı tek bir yerde, koşullarıyla birlikte, sıkıştırılmış biçimde vermek
                        demek.
                    </p>

                    <h2 id="grounding-fark">Grounding ile RAG aynı şey değil</h2>
                    <p className="bolum-cevap">
                        Grounding, modelin çıktısını doğrulanabilir harici bilgiye dayandırma hedefidir.
                        RAG ise bu hedefe ulaşmanın bir yöntemi. Her RAG uygulaması bir grounding
                        biçimidir ama her grounding RAG değildir: bir CRM&apos;e API çağrısı yapmak, bir
                        veritabanı sorgusu çalıştırmak veya bilgi grafiğinde gezinmek de grounding&apos;dir.
                        {/* kaynak: K73 */}
                    </p>
                    <table>
                        <caption>Grounding ve RAG karşılaştırması</caption>
                        <thead><tr><th scope="col">Boyut</th><th scope="col">Grounding</th><th scope="col">RAG</th></tr></thead>
                        <tbody>
                            <tr><th scope="row">Ne olduğu</th><td>Çıktıyı doğrulanmış harici bilgiye dayandırma pratiği — bir tasarım hedefi</td><td>Belge getirip üretime ekleme yöntemi — hedefe giden bir yol</td></tr>
                            <tr><th scope="row">Kapsam</th><td>RAG&apos;ı içerir, aşar</td><td>Grounding&apos;in alt kümesi</td></tr>
                            <tr><th scope="row">Yöntemler</th><td>Araç çağrısı (CRM, API), yapılandırılmış veri sorgusu, bilgi grafiği gezintisi, RAG</td><td>Parçalama, embedding, vektör araması, yeniden sıralama, üretim</td></tr>
                            <tr><th scope="row">Nerede tökezler</th><td>Çok kaynaklı kurgularda kaynaklar çeliştiğinde orkestrasyon gerekir</td><td>Cevap bir metin belgesinde değil işlemsel kayıtta yaşıyorsa bulamaz</td></tr>
                        </tbody>
                    </table>
                    {/* kaynak: K73 */}
                    <p>
                        Ayrımın pratik faydası şu: bir platformda görünmüyorsanız, sorunun hangi katmanda
                        olduğunu ayırt edebilirsiniz. Belge tarafındaki bir eksiklik içerik işidir. Ürün
                        verisi, fiyat, stok gibi bilgilerin cevaba hiç girmemesi ise içerik işi değil,
                        veri beyanı işidir — ve çözümü daha fazla yazmak değil, makine okunur biçimde
                        beyan etmek.
                    </p>
                    <h3 id="sili-odulu">Şili Ödülü deneyi</h3>
                    <p>
                        Farkı anlatan somut bir örnek var. DeepSeek&apos;e &quot;1932 Şili Ulusal Edebiyat Ödülü&quot;
                        sorulduğunda model gerçek bir yazar ve gerçek bir eser adıyla, ama tamamen yanlış
                        bir bağlamda cevap üretti. Oysa bu ödül 1942&apos;de kurulmuştu; 1932&apos;de böyle bir ödül
                        yoktu. Aynı modele RAG ile grounding uygulandığında, ödülün o tarihte mevcut
                        olmadığını doğru biçimde belirtip kullanıcıdan açıklama istedi.
                        {/* kaynak: K67 */}
                    </p>
                    <p>
                        Örnek tek bir modelde yapılmış tek bir denemeden geliyor; genel bir başarı oranı
                        değil. Yine de halüsinasyonun nasıl bir şey olduğunu iyi gösteriyor: model
                        yalan uydurmuyor, <em>doğru parçaları yanlış yere koyuyor</em>. Ve bunun marka
                        tarafında bire bir karşılığı var — hakkınızda tutarlı, tarihli, birbirini
                        doğrulayan kaynak yoksa model boşluğu makul görünen bir tahminle doldurur.
                        Grounding bu ihtimali azaltıyor, sıfırlamıyor.
                        {/* kaynak: K73 */}
                    </p>

                    <h2 id="rag-yetersiz">RAG&apos;ın göremediği yerler</h2>
                    <p className="bolum-cevap">
                        RAG&apos;ın kör noktası, her bilgi ihtiyacını bir belge bulma problemi sanmasıdır.
                        &quot;Siparişim nerede&quot;, &quot;hesabımda ne kadar var&quot;, &quot;bu ürün stokta mı&quot; gibi sorular
                        bir metin belgesinde değil, işlemsel bir veritabanı kaydında yaşar. Vektör
                        araması bu kayıtlara uzanamaz. Gerçek zamanlı fiyat da aynı kategoride.
                        {/* kaynak: K73 */}
                    </p>
                    <p>
                        İkinci boşluk çelişki. Model birden çok kaynaktan besleniyorsa ve kaynaklar
                        birbirini tutmuyorsa, hangisine yaslanacağına dair bir hakem gerekir. Getirdiği
                        belgeyi yanlış parafraz etmesi de mümkün.
                        {/* kaynak: K73 */}
                        {" "}Bu, marka tarafında sıkça görülen bir sorunun teknik açıklaması: kendi sitenizde
                        yazan fiyat, üç yıllık bir haberdeki fiyatla çelişiyorsa cevabın hangisini
                        alacağı garanti değil. Eski içeriği güncellemek ya da açıkça tarihlendirmek
                        kozmetik bir iş değil.
                    </p>
                    <p>
                        İyi kurulmuş sistemler iki telafi mekanizması kullanıyor. Birincisi, isteme
                        &quot;kanıt yoksa cevap verme&quot; talimatını koymak — buna abstain deniyor.
                        {/* kaynak: K62, K70 */}
                        {" "}İkincisi karmaşık sorgularda devreye giren agentic retrieval: sorguyu odaklı alt
                        sorulara bölüp bunları paralel yürütmek.
                        {/* kaynak: K68 */}
                    </p>
                    <p>
                        Üretim ortamında tek bir teknik yetmiyor zaten. Bir destek asistanı politika
                        sorularını RAG ile, hesap verisini araç çağrısıyla, varlıklar arası ilişkileri
                        bilgi grafiğiyle cevaplayabilir.
                        {/* kaynak: K73 */}
                        {" "}Sizin için pratik sonuç: ürün fiyatı, stok, açılış saati gibi veriler serbest
                        metne gömülü kaldığı sürece eksik kalıyor. Bunları yapılandırılmış veriyle ayrıca
                        beyan etmek, RAG&apos;ın göremediği katmana el uzatmanın yolu.
                    </p>
                    <p>
                        Bu kör noktanın sektörel bir sonucu var. Bilgi satan işler — danışmanlık, hukuk,
                        sağlık, eğitim — RAG&apos;ın tam ortasında duruyor, çünkü sattıkları şey zaten metin.
                        İşlem satan işlerde ise cevabın büyük kısmı metne hiç girmiyor: müsaitlik, kalan
                        stok, güncel fiyat. İkinci gruptaysanız, içerik üretimini artırmak bir noktadan
                        sonra sonucu değiştirmiyor; asıl kazanç veriyi makine okunur hale getirmekte.
                    </p>

                    <h2 id="turkce-retrieval">Türkçe&apos;de bu zincir aynı çalışmıyor</h2>
                    <p className="bolum-cevap">
                        Mekanizma dilden bağımsız, ama girdi değil. Türkçe bir sorgu geldiğinde sistemin
                        tarayabileceği kaynak havuzu İngilizce&apos;ye göre kıyaslanamayacak kadar dar.
                        Sondan eklemeli yapı hem anahtar kelime eşleşmesini hem parça sınırlarını
                        etkiliyor. Sonuç, Türkçe içerik üreticisi için hem risk hem fırsat üretiyor.
                    </p>
                    <p>
                        Havuz meselesi en belirleyici olan. Bir konuda Türkçe&apos;de derinlikli, güncel ve
                        kaynaklı sayfa sayısı azsa, sistem elindeki zayıf adaylarla yetinmek ya da başka
                        dile geçmek zorunda kalıyor. Bunun gözle görülür sonucu, Türkçe sorulan pek çok
                        sorunun İngilizce kaynaklardan devşirilmiş bir cevapla dönmesi — model cevabı
                        Türkçe yazar ama arkasındaki pasaj Türkçe değildir. Bu durumda atıf da yabancı
                        siteye gider.
                    </p>
                    <p>
                        Fırsat tam burada: İngilizce&apos;de bir konu için yüzlerce nitelikli aday yarışırken,
                        aynı konuda Türkçe&apos;de yarışan sayfa sayısı bir elin parmaklarını geçmeyebiliyor.
                        Yeniden sıralama adımında elenmemek İngilizce&apos;de zorken Türkçe&apos;de çok daha
                        ulaşılabilir bir hedef. Türkçe içerikte &quot;geç kalınmış&quot; bir alan yok; henüz
                        doldurulmamış alan var.
                    </p>
                    <p>
                        Dilin yapısı ikinci katman. &quot;Ödeme&quot;, &quot;ödemeyi&quot;, &quot;ödemelerde&quot;, &quot;ödemelerinizden&quot;
                        — bunlar bir arama motorunun kelime düzeyinde eşleştirmesi gereken farklı
                        dizgiler. Anlamsal arama bu varyasyonların çoğunu tolere ediyor, çünkü kök anlamı
                        yakın vektörlere taşıyor. Ama hibrit aramanın anahtar kelime bacağı hâlâ lafzen
                        eşleşme arıyor. Pratik karşılığı: marka adınızı, ürün adınızı ve kritik terimleri
                        en az bir yerde <em>yalın halde</em> geçirin. Metnin tamamı çekimli hallerden
                        ibaretse tam eşleşme isteyen sorgularda dezavantajlısınız.
                    </p>
                    <p>
                        Sorgu tarafında ayrı bir tuhaflık daha var: Türkiye&apos;de kullanıcılar sık sık karma
                        sorguyla geliyor — Türkçe cümlenin içine İngilizce ürün ya da teknoloji adı gömülü
                        şekilde. Sistem böyle bir sorguyu alt sorulara böldüğünde, alt soruların bir kısmı
                        doğal olarak İngilizce kaynaklara düşüyor. Terimin İngilizce halini de sayfanızda
                        en az bir kez geçirmek, o alt soruların birinde yakalanma ihtimalini açıyor.
                        Türkçe metne İngilizce terim serpiştirmek üslup meselesi gibi görünse de burada
                        işlevsel bir karşılığı var.
                    </p>
                    <p>
                        Üçüncüsü parçalama tarafında. Türkçe&apos;de bilgi cümlenin sonunda toplanır; yüklem
                        sonda olduğu için bir cümlenin ilk yarısı tek başına bir şey söylemez. Uzun,
                        çok yan cümlecikli paragraflar kesildiğinde İngilizce&apos;ye kıyasla daha çok anlam
                        kaybediyor. Kısa cümle burada üslup tercihi değil, teknik tercih.
                    </p>
                    <p>
                        Bir de terim ikiliği sorunu var: aynı kavramın &quot;yapay zeka&quot; ve &quot;yapay zekâ&quot;,
                        &quot;AI Bakışı&quot; ve &quot;AI Genel Bakış&quot; gibi iki yazımla dolaşması, embedding tarafında
                        sinyali böler. Tüm sitede tek biçim kullanmak, küçük görünen ama getirme
                        aşamasında bileşik etki yapan bir disiplin.
                    </p>

                    <h2 id="cikarim">Zincirden çıkan içerik kararları</h2>
                    <p className="bolum-cevap">
                        Sekiz adımın her biri bir kaybetme noktası olduğu için, GEO çalışması aslında
                        bir eleme haritası üzerinde çalışmak demek. Botu içeri almadıysanız üçüncü adımı
                        konuşmanın anlamı yok; parçalarınız bağlamsız okunmuyorsa yeniden sıralamayı
                        tartışmak erken. Sıra önemli, çünkü zincirin altındaki bir sorun üstündeki bütün
                        iyileştirmeleri geçersiz kılıyor. Bütçenin nereye gideceğine karar verirken tek
                        kullanışlı soru bu: hangi halkada duruyoruz?
                    </p>
                    <p>
                        Kaba bir teşhis sırası şöyle işliyor: önce erişim (bot sayfayı çekebiliyor mu),
                        sonra biçim (parçalar tek başına anlamlı mı), sonra eşleşme (soru kümesini
                        gerçekten kapsıyor musunuz), en son ayrışma (aynı şeyi söyleyen beş kaynaktan
                        farkınız ne). Çoğu sitede sorun sanılan yerde değil, bu listenin üst
                        sıralarında çıkıyor.
                    </p>
                    <p>
                        Bir de ölçüm tarafında beklentiyi yerine oturtan bir şey var. Zincir her sorguda
                        baştan çalıştığı için sonuçlar dalgalanır: aynı soruyu iki gün arayla sorduğunuzda
                        farklı kaynaklar görebilirsiniz. Tek bir denemeye bakıp &quot;çıkmıyorum&quot; demek yanıltıcı.
                        Anlamlı olan, sabit bir soru setini düzenli aralıklarla çalıştırıp eğilime bakmak.
                    </p>
                    <p>
                        Platform tarafında da mekanizma aynı, ağırlıklar farklı.{" "}
                        <Link href="/geo/perplexity-geo">Perplexity</Link> getirme ve atıfa daha görünür
                        şekilde yaslanırken, <Link href="/geo/chatgpt-geo">ChatGPT</Link> tarafında hangi
                        sorunun web aramasını tetikleyeceği ayrı bir mesele. Terimlerin birbirinden
                        nerede ayrıldığını{" "}
                        <Link href="/geo/geo-seo-aeo-farki">GEO, SEO ve AEO farkı</Link> sayfasında
                        ayrıca ele alıyorum.
                    </p>

                    <h2 id="sss">Sıkça Sorulan Sorular</h2>
                    <h3>RAG ile fine-tuning arasındaki fark nedir?</h3>
                    <p>RAG yeni bilgiyi modele çalışma anında, istemin içinde sunar; fine-tuning ise modelin ağırlıklarını yeni veriyle yeniden eğitir. Bilgi sık değişiyorsa RAG genelde daha pratik ve daha ucuz bir yol, çünkü modeli yeniden eğitmeden veri eklenebiliyor. Fine-tuning ise davranış ve üslup değiştirmek istediğinizde devreye giriyor. İkisi rakip değil, farklı işlerin araçları. {/* kaynak: K67 */}</p>
                    <h3>Grounding halüsinasyonu tamamen önler mi?</h3>
                    <p>Hayır. Modele istem içinde gerçek belgeler vermek uydurma oranını düşürür, ama iyi temellendirilmiş modeller bile aldıkları içeriği yanlış aktarabilir. {/* kaynak: K66, K73 */}</p>
                    <h3>İçeriğim modelin eğitim verisinde yoksa hiç şansım yok mu?</h3>
                    <p>Tam tersi. RAG&apos;ın varlık sebebi bu: cevap eğitim verisinden değil, o an getirilen belgelerden kuruluyor. Dün yayımladığınız bir sayfa, bugün sorulan bir soruya kaynak olabilir. Bu yüzden tazelik ve taranabilirlik, modelin sizi tanıyor olmasından daha belirleyici.</p>
                    <h3>Neden içeriğim getiriliyor ama atıf almıyorum?</h3>
                    <p>İki ayrı ihtimal var. Ya yeniden sıralama adımında elendiniz — getirildiniz ama daha alakalı bulunan başka pasajlar üste çıktı. Ya da kaynak bilgisi net izlenemediği için sistem içeriği kullandı ama size referans veremedi. Birincisinin çaresi ayrışma, ikincisinin çaresi yazar, tarih ve kurum bağını makine tarafında net kurmak.</p>
                    <h3>Tek adımlı RAG mı, agentic retrieval mı?</h3>
                    <p>Basit arama görevlerinin çoğu için tek adımlı RAG yeterli. Çok adımlı akıl yürütme gerektiren, birden çok kaynağı birleştirmesi gereken sorularda agentic retrieval devreye giriyor. {/* kaynak: K73 */} İçerik tarafında bunun anlamı, karşılaştırma ve karar sorularının tek bir sayfayla değil, birbirine bağlı bir sayfa kümesiyle kazanıldığı. Alt sorular paralel yürütüldüğü için, o kümenin her parçasında ayrı ayrı görünür olmanız gerekiyor.</p>
                    <h3>Verilerimin gizliliği RAG&apos;da nasıl korunur?</h3>
                    <p>Tamamen mimariye ve araç seçimine bağlı. Kendi altyapınızda çalışan bir arama katmanı kurduğunuzda verinin dışarı çıkmaması mümkün — Elasticsearch üzerine kurulan RAG için üretici bunu açıkça belirtiyor; satıcı beyanı olduğunu not edelim. {/* kaynak: K67 */} Harici bir API&apos;ye bağlanan kurulumlarda ise sözleşme ve veri işleme koşulları belirleyici oluyor.</p>
                </div>

                <aside className="bg-gray-50 border-l-4 border-violet-600 p-8 rounded-r-xl my-12 not-prose">
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        Bu zincirin hangi adımında kaybettiğinizi ölçmeden taktik seçmek zaman kaybı.
                        Sitenizin hangi halkada elendiğini birlikte çıkaralım:
                    </p>
                    <Link href="/geo" className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white font-bold rounded-full hover:bg-violet-700 transition-colors text-sm">
                        GEO danışmanlığı
                        <span>→</span>
                    </Link>
                </aside>

                <div className="mt-16 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Ayrıca Bakınız</h2>
                    <ul className="space-y-6 mb-8">
                        <li className="list-none">
                            <Link href="/geo/query-fan-out" className="inline-flex items-center text-violet-600 hover:underline font-bold group text-lg">
                                <span className="w-2 h-2 rounded-full bg-violet-600 mr-3 group-hover:scale-125 transition-all" />
                                Query Fan-Out Nedir?
                            </Link>
                            <p className="text-sm text-gray-500 ml-5 mt-1 leading-relaxed max-w-2xl">Getirme aşamasında tek sorgunun onlarca alt sorguya nasıl bölündüğü.</p>
                        </li>
                        <li className="list-none">
                            <Link href="/geo/geo-seo-aeo-farki" className="inline-flex items-center text-violet-600 hover:underline font-bold group text-lg">
                                <span className="w-2 h-2 rounded-full bg-violet-600 mr-3 group-hover:scale-125 transition-all" />
                                SEO, GEO, AEO ve LLMO Farkı
                            </Link>
                            <p className="text-sm text-gray-500 ml-5 mt-1 leading-relaxed max-w-2xl">Terimlerin hedef yüzey, metrik ve platform farkları.</p>
                        </li>
                        <li className="list-none">
                            <Link href="/geo/icerik-chunking" data-pending="true" className="inline-flex items-center text-gray-400 font-bold group text-lg">
                                <span className="w-2 h-2 rounded-full bg-gray-300 mr-3" />
                                İçerik Chunking Rehberi
                            </Link>
                            <p className="text-sm text-gray-400 ml-5 mt-1 leading-relaxed max-w-2xl">Dil modellerinin içeriği parçalara bölme mantığı ve buna göre yazma pratiği.</p>
                        </li>
                        <li className="list-none">
                            <Link href="/seo/bilgi-kazanci" className="inline-flex items-center text-blue-600 hover:underline font-bold group text-lg">
                                <span className="w-2 h-2 rounded-full bg-blue-600 mr-3 group-hover:scale-125 transition-all" />
                                Bilgi Kazancı
                            </Link>
                            <p className="text-sm text-gray-500 ml-5 mt-1 leading-relaxed max-w-2xl">Yeniden sıralama adımında öne çıkaran özgün içerik ve veri stratejisi.</p>
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
