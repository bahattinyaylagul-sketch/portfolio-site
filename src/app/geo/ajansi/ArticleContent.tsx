/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import ArticleFooter from "@/components/ArticleFooter";

const headings = [
    { "id": "tam-olarak-ne-yapar", "text": "GEO ajansı tam olarak ne yapar?" },
    { "id": "farklar", "text": "GEO, SEO, AEO ve LLMO aynı şey mi?" },
    { "id": "calisma-sureci", "text": "Bir GEO ajansının çalışma süreci nasıl ilerler?" },
    { "id": "sorulmasi-gerekenler", "text": "GEO ajansı seçerken hangi sorular sorulmalı?" },
    { "id": "maliyet", "text": "GEO ajansı maliyeti neye göre değişir?" },
    { "id": "basari-olcum", "text": "GEO başarısı hangi metriklerle ölçülür?" },
    { "id": "llmstxt-sart-mi", "text": "llms.txt kullanmak şart mı?" },
    { "id": "sinirlar", "text": "GEO’nun sınırları neler?" },
    { "id": "sss", "text": "Sıkça Sorulan Sorular" }
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
                    GEO ajansı; markaların ChatGPT, Gemini, Perplexity, Google AI Overviews ve AI Mode gibi yapay zeka tabanlı arama deneyimlerinde görünür olmasına yardımcı olur. Bunun için sitenin teknik erişimini, içerik yapısını, marka hakkındaki dış kaynakları ve yapay zeka yanıtlarında markanın nasıl geçtiğini birlikte inceler. GEO, SEO’nun yerine geçen bir hizmet değil; arama görünürlüğünü yeni platformlara taşıyan tamamlayıcı bir çalışma alanıdır.
                </p>
                
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

                    <h2 id="tam-olarak-ne-yapar">GEO ajansı tam olarak ne yapar?</h2>
                    <p>
                        GEO, "Generative Engine Optimization" ifadesinin kısaltmasıdır. Türkçede genellikle üretken motor optimizasyonu olarak karşılık buluyor.
                    </p>
                    <p>
                        Klasik SEO’da sayfanın Google’da hangi sırada çıktığını, ne kadar tıklandığını ve ne kadar trafik aldığını takip ederiz. Yapay zeka yanıtlarında tablo biraz farklıdır. Kullanıcıya on bağlantı göstermek yerine, farklı kaynaklardan derlenmiş tek bir cevap sunulabilir. Bazen marka adı geçer, bazen marka önerilir, bazen de markanın kendi içeriği kaynak olarak kullanılır.
                    </p>
                    <p>Bu nedenle GEO ajansının cevap aradığı sorular da değişir:</p>
                    <ul>
                        <li>Marka, kendisiyle ilgili sorularda ne sıklıkla anılıyor?</li>
                        <li>Rakipler önerilirken marka cevabın dışında mı kalıyor?</li>
                        <li>Yapay zeka, cevabı oluştururken hangi siteleri kaynak alıyor?</li>
                        <li>Marka hangi özellikleriyle ve nasıl bir tonla anlatılıyor?</li>
                        <li>Sunulan bilgiler doğru mu, yoksa eski veya eksik mi?</li>
                    </ul>
                    <p>
                        GEO kavramı, 2024’te KDD konferansında yayımlanan akademik çalışmayla daha belirgin bir çerçeveye oturdu. Araştırmada bazı içerik düzenlemelerinin, kurulan deney ortamında kaynak görünürlüğünü %40’a kadar artırabildiği görüldü. Buradaki oranı satış ya da trafik artışı gibi okumamak gerekir. Ölçülen şey, belirli bir deneyde içeriğin yapay zeka cevabında görünür olma düzeyidir.
                    </p>

                    <h2 id="farklar">GEO, SEO, AEO ve LLMO aynı şey mi?</h2>
                    <p>
                        Tam olarak değil. Ancak aralarında keskin duvarlar da yok. Her biri dijital görünürlüğün başka bir bölümüne ağırlık verir.
                    </p>
                    
                    <div className="overflow-x-auto my-8 border border-gray-200 rounded-xl">
                        <table className="w-full text-left border-collapse m-0">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="py-4 px-6 font-semibold text-gray-900 border-r border-gray-200">Yaklaşım</th>
                                    <th className="py-4 px-6 font-semibold text-gray-900 border-r border-gray-200">Odak noktası</th>
                                    <th className="py-4 px-6 font-semibold text-gray-900">Yapılan çalışmalar</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-4 px-6 font-medium text-gray-900 border-r border-gray-200">SEO</td>
                                    <td className="py-4 px-6 text-gray-600 border-r border-gray-200">Arama sonuçlarında bulunmak ve organik trafik almak</td>
                                    <td className="py-4 px-6 text-gray-600">Tarama, indeksleme, içerik, iç linkleme, otorite ve kullanıcı deneyimi</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-4 px-6 font-medium text-gray-900 border-r border-gray-200">AEO</td>
                                    <td className="py-4 px-6 text-gray-600 border-r border-gray-200">Kullanıcının sorusuna doğrudan ve alınabilir cevap vermek</td>
                                    <td className="py-4 px-6 text-gray-600">First answer, tanımlar, SSS bölümleri, listeler ve tablolar</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-4 px-6 font-medium text-gray-900 border-r border-gray-200">GEO</td>
                                    <td className="py-4 px-6 text-gray-600 border-r border-gray-200">Üretken yapay zeka cevaplarında doğru bağlamda yer almak</td>
                                    <td className="py-4 px-6 text-gray-600">Marka mention’ları, kaynak gösterimi, önerilme durumu, konu ve entity otoritesi</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-4 px-6 font-medium text-gray-900 border-r border-gray-200">LLMO</td>
                                    <td className="py-4 px-6 text-gray-600 border-r border-gray-200">İçeriğin büyük dil modellerince erişilebilir ve anlaşılır olmasını sağlamak</td>
                                    <td className="py-4 px-6 text-gray-600">Bot erişimi, açık HTML, teknik yapı ve veri organizasyonu</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p>
                        Pratikte bu çalışmalar çoğu projede iç içe geçer. Örneğin taranamayan bir sayfa hem SEO hem LLMO sorunudur. Sorunun cevabını üç paragraf sonra veren bir içerik ise hem kullanıcı deneyimi hem AEO açısından zayıftır.
                    </p>
                    <p>
                        Google da AI Overviews ve AI Mode için temel SEO ilkelerinin geçerli olduğunu, ayrıca uygulanması gereken özel bir teknik gereklilik bulunmadığını söylüyor. Dolayısıyla indekslenmeyen, güven vermeyen veya içeriği tarayıcılar tarafından okunamayan bir siteyi birkaç GEO dokunuşuyla görünür yapmak gerçekçi değildir.
                    </p>

                    <h2 id="calisma-sureci">Bir GEO ajansının çalışma süreci nasıl ilerler?</h2>
                    <p>
                        İyi bir GEO projesi “Ayda kaç içerik yazacağız?” sorusuyla başlamaz. Önce markanın bugünkü durumu ölçülür. Aksi halde üç ay sonra neyin değiştiğini gösterecek güvenilir bir başlangıç noktası olmaz.
                    </p>

                    <figure className="my-10 not-prose" role="img" aria-label="GEO ajansı iş akışı diyagramı: 1) Talep ve sorgu analizi, 2) Görünürlük ve gap analizi, 3) Konu ve içerik stratejisi, 4) Teknik, içerik ve otorite aksiyonları, 5) Ölçüm ve sürekli optimizasyon adımlarından oluşan 5 aşamalı süreç.">
                        <ol className="relative max-w-xl mx-auto space-y-0">
                            {[
                                { title: "Talep ve Sorgu Analizi", desc: "Google ve AI platformlarındaki kullanıcı taleplerini, sorguları ve soru kalıplarını belirleme." },
                                { title: "Görünürlük ve Gap Analizi", desc: "Markanın mention, citation, rakip görünürlüğü ve topic coverage açısından eksik olduğu alanları tespit etme." },
                                { title: "Konu ve İçerik Stratejisi", desc: "Topic → subtopic → intent → specialized content yapısıyla hangi bilgi alanlarının güçlendirilmesi gerektiğini belirleme." },
                                { title: "Teknik, İçerik ve Otorite Aksiyonları", desc: "İçerik optimizasyonu, teknik erişilebilirlik, internal linking ve dış kaynak/citation çalışmalarını uygulama." },
                                { title: "Ölçüm ve Sürekli Optimizasyon", desc: "AI görünürlüğü, citation, recommendation ve rakip değişimlerini düzenli olarak takip edip stratejiyi güncelleme." }
                            ].map((step, i) => (
                                <li key={i} className="flex gap-4 items-start relative pb-8 last:pb-0">
                                    <div className="flex flex-col items-center">
                                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-600 text-white text-sm font-bold shrink-0 z-10">{i + 1}</span>
                                        {i < 4 && <span className="w-0.5 h-full border-l-2 border-dashed border-violet-200 absolute top-10 left-5" />}
                                    </div>
                                    <div className="pt-1.5">
                                        <h4 className="text-sm font-bold text-gray-900 leading-snug m-0">{step.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed mt-1 m-0">{step.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                        <figcaption className="text-center text-sm text-gray-500 mt-6 italic">
                            Şekil — GEO ajansının 5 aşamalı çalışma süreci. Her adım bir öncekinin çıktısına dayanır ve süreç döngüsel olarak tekrar eder.
                        </figcaption>
                    </figure>

                    <h3>1. İnsanların yapay zekaya sorabileceği sorular belirlenir</h3>
                    <p>
                        Burada yalnızca klasik anahtar kelime listesi kullanılmaz. Kullanıcının karar verirken kurduğu doğal cümlelere de bakılır:
                    </p>
                    <ul>
                        <li>"X hizmeti için hangi şirketi seçmeliyim?"</li>
                        <li>"A ve B markası arasındaki fark nedir?"</li>
                        <li>"Şu sorunu yaşayan biri için en uygun çözüm hangisi?"</li>
                        <li>"Bu ürünü alırken nelere dikkat etmeliyim?"</li>
                    </ul>
                    <p>
                        Marka ve rakipler, belirlenen sabit sorgu seti üzerinden ölçülür. İlk raporda mention oranı, rakiplere göre görünürlük payı, kullanılan kaynaklar ve markanın hangi bağlamda önerildiği açıkça görülmelidir.
                    </p>

                    <h3>2. Botların ve arama sistemlerinin siteye gerçekten erişip erişemediği kontrol edilir</h3>
                    <p>
                        İçeriğin iyi olması tek başına yeterli değildir. Sistem sayfayı göremiyorsa o içerikten yararlanamaz. Teknik kontrolde genellikle şu alanlara bakılır:
                    </p>
                    <ul>
                        <li>robots.txt kuralları ve bot izinleri</li>
                        <li>WAF, CDN veya bot korumasının oluşturduğu 403 hataları</li>
                        <li>Yalnızca JavaScript çalıştıktan sonra görülebilen ana içerik</li>
                        <li>Canonical, noindex, yönlendirme ve indekslenme sorunları</li>
                        <li>Sayfanın ana metninin HTML içinde açık biçimde bulunup bulunmadığı</li>
                    </ul>
                    <p>
                        OpenAI’ın kendi rehberi de robots.txt ile birlikte WAF, CDN, CAPTCHA ve JavaScript kaynaklı engellerin kontrol edilmesini öneriyor. Buradaki amaç bütün botlara kapıyı sonuna kadar açmak değildir. Markanın izin vermek istediği sistemlerin önemli sayfalara erişebildiğinden emin olmaktır.
                    </p>

                    <h3>3. İçerik, cevap ve kaynak niteliği kazanacak şekilde düzenlenir</h3>
                    <p>
                        Bir metni GEO uyumlu yapmak, içine birkaç kez anahtar kelime serpiştirmek anlamına gelmez. İyi bir kaynak, kullanıcının sorusunu geciktirmeden cevaplar. İddialarını dayandırır; gerektiğinde veri, örnek ve uzman görüşü sunar.
                    </p>
                    <p>Bu aşamada yapılan işler projeye göre değişse de çoğunlukla şunları kapsar:</p>
                    <ul>
                        <li>Ana soruyu birkaç cümlede cevaplayan first answer bölümü</li>
                        <li>Okurun aradığı bilgiye hızla ulaşmasını sağlayan H2 ve H3 yapısı</li>
                        <li>Gerçekten karşılaştırma gerektiğinde kullanılan tablolar</li>
                        <li>Süreçleri sadeleştiren numaralı anlatımlar</li>
                        <li>Şirketin kendi verileri, saha deneyimi ve uzman yorumları</li>
                        <li>Mümkün olduğunda birincil kaynaklara verilen bağlantılar</li>
                        <li>Sayfadaki görünür bilgiyle uyumlu structured data</li>
                        <li>Aynı konuyu destekleyen sayfalar arasında anlamlı iç linkler</li>
                    </ul>
                    <p>
                        Akademik GEO araştırmasında kaynak, ilgili alıntı ve doğrulanabilir istatistik eklenen içeriklerin deney ortamında daha görünür olabildiği görüldü. Anahtar kelime doldurma ise işe yarayan yöntemler arasında değildi.
                    </p>

                    <h3>4. Markanın kendi sitesi dışındaki izleri incelenir</h3>
                    <p>
                        Yapay zeka sistemleri bir marka hakkındaki bilgiyi sadece markanın sitesinden öğrenmez. Sektör yayınları, haberler, güvenilir dizinler, kullanıcı yorumları, karşılaştırma içerikleri ve uzmanların markadan söz ettiği sayfalar da oluşan tabloya katkı sağlar.
                    </p>
                    <p>
                        Bu yüzden sadece “ayda sekiz blog içeriği” vadeden bir GEO paketi eksik kalır. Dijital PR, uzman katkıları, farklı platformlardaki şirket bilgilerinin tutarlılığı ve gerçek üçüncü taraf referansları da değerlendirilmelidir.
                    </p>
                    <p>
                        Forumlara yapay kullanıcı yorumları bırakmak veya sahte deneyimler yazdırmak bu çalışmanın bir parçası olamaz. Böyle bir yöntem görünürlükten önce markanın itibarını riske atar.
                    </p>

                    <h3>5. Aynı sorgu seti belirli aralıklarla yeniden çalıştırılır</h3>
                    <p>
                        Yapay zeka cevapları sabit sonuçlar değildir. Modelin sürümü, tarih, konum ve sorunun kurulma biçimi değiştiğinde cevap da değişebilir. Bu nedenle bir kez alınmış olumlu ekran görüntüsü başarı kanıtı sayılmaz.
                    </p>
                    <p>
                        Kendi projelerimizde aynı sorgu grubunu ChatGPT, Gemini, Google AI Overviews ve AI Mode gibi farklı yüzeylerde tekrar ölçüyoruz. Marka mention’ı, rakiplerin görünürlüğü, kaynak kullanılan domainler, öneri bağlamı, sentiment ve öne çıkan konu temaları birlikte takip ediliyor. Böylece tek bir cevabın peşinden gitmek yerine, zaman içinde oluşan eğilimi görebiliyoruz.
                    </p>

                    <h2 id="sorulmasi-gerekenler">GEO ajansı seçerken hangi sorular sorulmalı?</h2>
                    
                    <h3>1. Hangi platformları, hangi ülkede ve hangi dilde ölçüyorsunuz?</h3>
                    <p>
                        "AI görünürlüğünü takip ediyoruz" oldukça genel bir cevap. Hangi platformların izlendiğini, kaç sorgu kullanılacağını ve ölçümün ne sıklıkla tekrarlanacağını öğrenin. Dönemler arasında aynı sorgu setinin korunması da karşılaştırma yapabilmek için önemlidir.
                    </p>
                    
                    <h3>2. Çalışma başlamadan önce mevcut durumu kaydediyor musunuz?</h3>
                    <p>
                        Başlangıç ölçümü yoksa sonradan gösterilen artışın neye göre hesaplandığı belirsiz kalır. Marka mention oranı, rakip share of voice’ı ve kaynak dağılımı işe başlamadan önce kayda alınmalıdır.
                    </p>
                    
                    <h3>3. Hangi KPI’ları raporluyorsunuz?</h3>
                    <p>
                        Raporda yalnızca trafik ve Google sıralamaları varsa yapılan çalışma büyük ölçüde klasik SEO raporlamasıdır. GEO tarafında en az şu metrikleri görmeniz gerekir:
                    </p>
                    <ul>
                        <li>Mention rate</li>
                        <li>Citation rate</li>
                        <li>Share of voice</li>
                        <li>Öneri bağlamı ve sentiment</li>
                        <li>Kaynak domain dağılımı</li>
                    </ul>
                    
                    <h3>4. Teknik denetim hizmetin içinde mi?</h3>
                    <p>
                        Ajansın robots.txt, indekslenme, JavaScript, canonical, schema ve bot erişimi gibi konuları inceleyip incelemediğini sorun. Bulduğu sorunları yazılım ekibinin uygulayabileceği net görevlere çevirebilmesi de önemlidir.
                    </p>
                    
                    <h3>5. Size ait, yöntemi açıklanabilir bir çalışma örneğiniz var mı?</h3>
                    <p>
                        Başka sitelerden alınmış sektör istatistikleri ajansın kendi başarısını göstermez. Kullanılan sorguları, ölçüm tarihlerini, veri kaynağını ve yapılan değişiklikleri içeren bir örnek isteyin. Müşterinin adı paylaşılmayabilir; fakat yöntem kapalı kutu olmamalıdır.
                    </p>
                    
                    <h3>6. Kesin sonuç garantisi veriyor musunuz?</h3>
                    <p>
                        Bir promptta kalıcı olarak ilk öneri olmayı veya mutlaka kaynak gösterilmeyi hiçbir ajans garanti edemez. Güvenilir ekip; sonucu değil çalışma yöntemini, teslimatları, test düzenini ve raporlama standardını taahhüt eder.
                    </p>
                    
                    <h3>7. İlk 90 günün sonunda elimizde ne olacak?</h3>
                    <p>
                        Teklifte soyut ifadeler yerine somut çıktılar arayın. Sorgu evreni, görünürlük baseline’ı, rakip karşılaştırması, teknik denetim, içerik öncelikleri, kaynak analizi ve ilk dönem raporu açıkça yazılmalıdır.
                    </p>

                    <h2 id="maliyet">GEO ajansı maliyeti neye göre değişir?</h2>
                    <p>
                        GEO hizmetinde piyasayı temsil eden tek bir fiyat aralığı bulunmuyor. İnternetteki pek çok fiyat tablosu farklı ülkeleri, ekip yapılarını ve hizmet kapsamlarını aynı sepete koyuyor. Bu yüzden teklifleri yalnızca aylık toplam üzerinden kıyaslamak yanıltıcı olabilir.
                    </p>
                    <p>Fiyatı belirleyen başlıca unsurlar şunlardır:</p>
                    <ul>
                        <li>Takip edilecek marka, rakip ve sorgu sayısı</li>
                        <li>Ülke ve dil kapsam</li>
                        <li>Ölçülecek yapay zeka platformları</li>
                        <li>Teknik SEO ve yazılım desteği ihtiyacı</li>
                        <li>Üretilecek veya güncellenecek içerik miktarı</li>
                        <li>Dijital PR ve üçüncü taraf yayın bütçesi</li>
                        <li>Raporlama sıklığı ve danışmanlık süresi</li>
                    </ul>
                    <p>
                        İlk kez GEO yatırımı yapacak markalarda aşamalı ilerlemek daha kontrollü olur. Önce denetim ve başlangıç ölçümü yapılabilir. Ardından üç aylık uygulama ve takip dönemi yürütülür. Marka böylece uzun süreli sözleşmeye girmeden önce ekibin nasıl çalıştığını ve ne ürettiğini görür.
                    </p>

                    <h2 id="basari-olcum">GEO başarısı hangi metriklerle ölçülür?</h2>
                    <p>
                        Tek bir “GEO puanı” tabloyu anlatmaya yetmez. Görünürlüğü ve bu görünürlüğün iş sonucuna etkisini ayrı ayrı takip etmek gerekir.
                    </p>
                    
                    <div className="overflow-x-auto my-8 border border-gray-200 rounded-xl">
                        <table className="w-full text-left border-collapse m-0">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="py-4 px-6 font-semibold text-gray-900 border-r border-gray-200 w-1/3">Metrik</th>
                                    <th className="py-4 px-6 font-semibold text-gray-900">Cevap verdiği soru</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-4 px-6 font-medium text-gray-900 border-r border-gray-200">Mention rate</td>
                                    <td className="py-4 px-6 text-gray-600">Marka, takip edilen cevapların kaçında geçiyor?</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-4 px-6 font-medium text-gray-900 border-r border-gray-200">Citation rate</td>
                                    <td className="py-4 px-6 text-gray-600">Markanın sitesi ne sıklıkla kaynak olarak kullanılıyor?</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-4 px-6 font-medium text-gray-900 border-r border-gray-200">Share of voice</td>
                                    <td className="py-4 px-6 text-gray-600">Marka, rakiplerine kıyasla ne kadar görünür?</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-4 px-6 font-medium text-gray-900 border-r border-gray-200">Source distribution</td>
                                    <td className="py-4 px-6 text-gray-600">Yapay zeka cevaplarında hangi domain ve içerik türleri kullanılıyor?</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-4 px-6 font-medium text-gray-900 border-r border-gray-200">Recommendation context</td>
                                    <td className="py-4 px-6 text-gray-600">Marka tavsiye mi ediliyor, sadece anılıyor mu, olumsuz mu aktarılıyor?</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-4 px-6 font-medium text-gray-900 border-r border-gray-200">AI referral ve dönüşüm</td>
                                    <td className="py-4 px-6 text-gray-600">Tespit edilebilen AI yönlendirmeleri sitede ne yapıyor?</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p>
                        Google, Haziran 2026’da Search Console’da üretken yapay zeka özelliklerine özel performans raporlarını sınırlı sayıdaki siteyle test etmeye başladığını duyurdu. Bu rapor erişime açıldığında Google tarafı için değerli bir veri sağlar. ChatGPT, Gemini ve Perplexity görünürlüğünü ölçmek içinse ayrıca bir takip düzeni gerekir.
                    </p>
                    <p>
                        Üstelik yapay zeka platformlarından gelen her ziyaret doğru referrer bilgisini taşımayabilir. Bu nedenle GA4’te görünen oturum sayısını bütün AI görünürlüğü gibi değerlendirmek hatalı olur. Site analitiğini kontrollü sorgu takibiyle beraber okumak gerekir.
                    </p>

                    <h2 id="llmstxt-sart-mi">llms.txt kullanmak şart mı?</h2>
                    <p>
                        Hayır. llms.txt, sitenin önemli içeriklerini dil modelleri ve agent’lar için düzenlenmiş bir Markdown listesiyle sunmayı amaçlayan topluluk temelli bir öneridir. Botların erişimini yönetmez, robots.txt’in yerini tutmaz ve görünürlük garantisi vermez.
                    </p>
                    <p>
                        Dokümantasyonu geniş olan sitelerde yardımcı bir içerik haritası olarak kullanılabilir. Fakat öncelik sırası değişmez: taranabilir HTML, doğru indeksleme, anlaşılır site mimarisi, özgün bilgi ve güvenilir kaynaklar. Google da AI Overviews ve AI Mode’da görünmek için özel bir AI dosyasına ihtiyaç olmadığını belirtiyor.
                    </p>

                    <h2 id="sinirlar">GEO’nun sınırları neler?</h2>
                    <p>
                        Alan hızla gelişiyor ve henüz herkesin kabul ettiği ortak bir ölçüm standardı yok. Aynı prompt farklı oturumlarda başka sonuçlar verebilir. Kaynaklar değişebilir, modeller güncellenebilir ve her platform farklı ölçüm imkanı sunar.
                    </p>
                    <p>
                        Bir ajans markayı yapay zeka cevabına zorla ekleyemez. Yapabileceği şeyler daha nettir: teknik engelleri bulmak, içeriğin kaynak niteliğini yükseltmek, marka hakkındaki güvenilir üçüncü taraf sinyallerini geliştirmek ve değişimi düzenli ölçmek.
                    </p>
                    <p>
                        Sitenin temel SEO sorunları çözülmemişse GEO her zaman ilk yatırım olmayabilir. Sayfaları indekslenmeyen, ürün bilgileri güncel olmayan veya yerel aramalarda görünmeyen bir işletmenin önce bu zemini düzeltmesi daha mantıklıdır.
                    </p>

                    <h2 id="sss">Sıkça Sorulan Sorular</h2>
                    <div className="space-y-6">
                        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
                            <h3 className="text-xl font-bold text-gray-900 mt-0 mb-3">GEO ajansı ne kadar sürede sonuç alır?</h3>
                            <p className="text-gray-700 m-0">Her proje için geçerli sabit bir süre yoktur. Bot erişimi gibi teknik sorunlar kısa sürede giderilebilir. Marka hakkında yeni ve güvenilir kaynakların oluşması, konu otoritesinin gelişmesi ve öneri bağlamının değişmesi daha uzun sürer. İlk 90 günü kesin sonuç dönemi değil; ölçüm sisteminin kurulduğu ve etkili müdahalelerin belirlendiği dönem olarak görmek daha doğrudur.</p>
                        </div>
                        
                        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
                            <h3 className="text-xl font-bold text-gray-900 mt-0 mb-3">GEO, SEO’nun yerini alır mı?</h3>
                            <p className="text-gray-700 m-0">Hayır. GEO, SEO’nun üzerine kurulur ve onu tamamlar. Sayfa taranamıyor, indekslenmiyor veya kullanıcıya anlamlı bir değer vermiyorsa üretken yapay zeka sistemlerinde görünürlük kazanma ihtimali de sınırlanır.</p>
                        </div>
                        
                        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
                            <h3 className="text-xl font-bold text-gray-900 mt-0 mb-3">Hangi sektörlerde GEO daha anlamlıdır?</h3>
                            <p className="text-gray-700 m-0">Özellikle insanların seçenekleri araştırdığı ve markaları karşılaştırdığı alanlarda önem kazanır. Finans, sağlık, yazılım, eğitim, e-ticaret ve B2B hizmetler bunlara örnek verilebilir. Yine de sırf sektör popüler diye yatırım kararı verilmemeli; gerçek kullanıcı sorguları ve markanın mevcut görünürlüğü önce ölçülmelidir.</p>
                        </div>
                        
                        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
                            <h3 className="text-xl font-bold text-gray-900 mt-0 mb-3">Yapay zeka görünürlüğü elle takip edilebilir mi?</h3>
                            <p className="text-gray-700 m-0">Az sayıda sorgu için evet. Sorguyu, platformu, tarihi, dili, marka mention’ını ve kullanılan kaynakları düzenli kaydetmek gerekir. Sorgu ve rakip sayısı büyüdükçe manuel takip zorlaşır; tutarlılık sorunu ve karşılaştırma hataları artar.</p>
                        </div>
                        
                        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
                            <h3 className="text-xl font-bold text-gray-900 mt-0 mb-3">Structured data kullanmak görünürlüğü garanti eder mi?</h3>
                            <p className="text-gray-700 m-0">Hayır. Structured data, arama sistemlerinin sayfadaki bilgileri daha net anlamasına yardımcı olur ve görünür içerikle aynı şeyi söylemelidir. Tek başına sıralama, kaynak gösterilme veya önerilme garantisi sunmaz.</p>
                        </div>
                    </div>
                </div>
                
                <ArticleFooter currentSlug="ajansi" />
            </article>
        </div>
    );
}
