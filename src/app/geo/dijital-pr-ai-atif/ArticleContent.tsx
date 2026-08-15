/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

const headings = [
    { id: "neden-merkezde", text: "\"En iyi X\" listeleri neden GEO'nun merkezinde?" },
    { id: "hangi-listeler", text: "AI motorlarının hangi listeleri okuduğunu nasıl bulursunuz?" },
    { id: "surec", text: "Listeye girme süreci" },
    { id: "turkiye", text: "Türkiye'de hangi yayınlar sayılır?" },
    { id: "atifi-sinyale-cevirmek", text: "Atıfı sinyale çevirmek" },
    { id: "olcum", text: "Nasıl ölçülür?" },
    { id: "sss", text: "Sıkça Sorulan Sorular" },
];

export default function ArticleContent() {
    return (
        <div className="grid lg:grid-cols-[250px_1fr] gap-12 items-start relative">
            {/* Left Sidebar: TOC */}
            <aside className="hidden lg:block sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto pr-4 custom-scrollbar" aria-label="İçindekiler">
                <div>
                    <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2 pl-2">
                        <svg className="w-4 h-4 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                        İÇİNDEKİLER
                    </h2>
                    <nav className="space-y-1 border-l-2 border-gray-100">
                        {headings.map((heading, i) => (
                            <a
                                key={i}
                                href={`#${heading.id}`}
                                className="block py-3 pl-4 text-sm text-gray-600 hover:text-violet-700 hover:border-l-2 hover:border-violet-700 -ml-0.5 transition-all leading-relaxed"
                            >
                                <span className="font-mono text-xs text-gray-400 mr-2 font-medium">{(i + 1).toString().padStart(2, '0')}</span>
                                {heading.text}
                            </a>
                        ))}
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <article className="min-w-0 geo-rehber">
                {/* FIRST ANSWER */}
                <p className="first-answer text-xl text-gray-700 leading-relaxed font-light mb-12 pl-6 border-l-4 border-violet-600">
                    Bir kullanıcı yapay zekaya "en iyi X" diye sorduğunda, model cevabı sıfırdan üretmez — konuyla ilgili editöryel listeleri, karşılaştırma yazılarını ve inceleme sayfalarını okuyup sentezler. Markanız o listelerde yoksa cevapta da yoktur. Dijital PR'ın GEO'daki işlevi tam olarak budur: modelin okuduğu kaynaklara girmek.
                </p>

                {/* TL;DR */}
                <aside className="tldr mb-12 p-6 md:p-8 bg-violet-50/50 border border-violet-100/80 rounded-3xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-violet-600 text-white text-xs font-black uppercase tracking-widest rounded-full">TL;DR</span>
                        <span className="tldr-baslik text-sm font-bold text-violet-800">Kısaca</span>
                    </div>
                    <p className="text-gray-800 font-bold text-[15px] leading-relaxed mb-4">AI motorları "en iyi" sorgularını üçüncü taraf listelerden cevaplar; o listelerde olmak, kendi sayfanızı optimize etmekten daha belirleyicidir.</p>
                    <ul className="space-y-3.5 text-gray-700 text-[15px] leading-relaxed list-none pl-0 my-0">
                        <li className="flex items-start gap-3">
                            <span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span>
                            <span>Önce hangi listelerin alıntılandığını tespit edin — tahmin etmeyin, motora sorup kaynakları not edin.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span>
                            <span>Outreach'in konusu ürününüz değil, listedeki editöryel boşluk olmalı.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span>
                            <span>Link almadan da kazanırsınız: bağlantısız marka anılması AI katmanında güçlü bir sinyal.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-violet-600 font-bold shrink-0 mt-0.5">✦</span>
                            <span>Türkçe listelerde rekabet çok daha seyrek; aynı emek burada kat kat fazla getiriyor.</span>
                        </li>
                    </ul>
                </aside>

                {/* Content Body */}
                <div
                    className="prose prose-lg max-w-none 
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
                        mb-16"
                >
                    <h2 id="neden-merkezde">"En iyi X" listeleri neden GEO'nun merkezinde?</h2>

                    <p className="bolum-cevap">
                        Çünkü üretken arama motorları öneri sorgularında kendi görüşlerini değil, dışarıdaki editöryel uzlaşıyı yansıtır. "En iyi CRM", "en iyi SEO ajansı", "İstanbul'un en iyi diş klinikleri" gibi sorgularda model bir dizi liste sayfasını okur ve orada tekrar eden isimleri öne çıkarır. Tekrar sayısı, sıralamanın kendisinden daha belirleyicidir.
                    </p>

                    <p>
                        Bu, klasik SEO'dan yapısal olarak farklı bir durum. Organik aramada "en iyi CRM" sorgusunda kendi sayfanızla sıralanmaya çalışırsınız. AI cevabında ise sizin sayfanız zaten aday değildir — çünkü model, bir ürünün kendi hakkındaki iddiasını üçüncü taraf değerlendirmesiyle aynı ağırlıkta okumaz.
                    </p>

                    <p>
                        Yarış, kendi sayfanızda değil başkasının sayfasında geçiyor.
                    </p>

                    <p>
                        Ölçülebilir tarafı da var. Marka anılmalarının AI Overview görünürlüğüyle korelasyonu 0,664 iken geri bağlantılarda aynı sayı 0,218'de kalıyor.
                        {/* kaynak: K93 */}
                        {" "}Yani bir liste sayfasından link almasanız bile, orada <em>adınızın geçiyor olması</em> AI katmanında link almaktan daha güçlü çalışıyor. Bu, dijital PR'ın hedefini değiştiriyor: link avı değil, anılma yoğunluğu. Konunun mekaniğini <Link href="/geo/ai-marka-mention-etkisi" className="text-violet-600 hover:underline font-semibold">marka anılmaları ve AI hafızası</Link> sayfasında ayrıntılı ele alıyorum.
                    </p>


                    <h2 id="hangi-listeler">AI motorlarının hangi listeleri okuduğunu nasıl bulursunuz?</h2>

                    <p className="bolum-cevap">
                        Tahmin etmeyin, ölçün. Hedef sorgunuzu ChatGPT, Perplexity ve Google AI Modu'na ayrı ayrı sorun, cevabın altındaki kaynakları not edin. Üç motorda da tekrar eden yayınlar sizin gerçek hedef listenizdir — sektörde "önemli" sayılan yayınlar değil.
                    </p>

                    <p>
                        Bu ayrım önemli. Çoğu marka, PR bütçesini bilinen büyük yayınlara harcıyor ama o yayınlar ilgili sorguda hiç alıntılanmıyor olabilir. Buna karşılık kimsenin adını duymadığı bir niş karşılaştırma sitesi, motorun düzenli döndüğü bir kaynak olabilir. Otorite algısı ile alıntılanma sıklığı her zaman örtüşmüyor.
                    </p>

                    <p>
                        Pratik yöntem şöyle işliyor. Markanızın satın alma sürecinde geçtiği 15–20 sorguyu listeleyin: "en iyi", "alternatifleri", "karşılaştırma", "önerir misiniz", "hangisi daha iyi" kalıplarıyla. Her birini üç motorda çalıştırın. Çıkan kaynak URL'lerini bir tabloya dökün ve kaç sorguda göründüklerine göre sıralayın. Üstteki on yayın, önümüzdeki altı ayın dijital PR hedef listesidir.
                    </p>

                    <p>
                        Bir de negatif tarafını okuyun: rakipleriniz hangi listelerde var, siz hangilerinde yoksunuz? Bu boşluk listesi, outreach mesajınızın konusunu da veriyor.
                    </p>


                    <h2 id="surec">Listeye girme süreci</h2>

                    <p className="bolum-cevap">
                        Süreç üç adımda özetlenebilir: doğru listeyi seçmek, editöre bir talep değil bir boşluk göstermek, ve mesajı ürün tanıtımı değil editöryel katkı olarak yazmak. Sıralama önemli — hazırlıksız gönderilen kişiselleştirilmiş mesaj bile kişiselleştirilmiş görünmez.
                    </p>

                    <h3 id="liste-secimi">Hedef listeyi seçin</h3>

                    <p>
                        Bir önceki bölümdeki tablodan başlayın. Ama hepsi eşit değil; üç filtre uygulayın. Liste güncelleniyor mu — son güncelleme tarihi iki yıl öncesiyse editör muhtemelen o sayfayla ilgilenmiyordur. Listede sizinle aynı kategoride kaç marka var — otuz maddelik bir listeye girmenin sinyal değeri, sekiz maddelik bir listeden düşük. Ve listenin kendisi arama sonuçlarında görünüyor mu — görünmüyorsa model onu da bulamayabilir.
                    </p>

                    <h3 id="bosluk">Editöre talep değil, boşluk gösterin</h3>

                    <p>
                        "Bizi listeye ekler misiniz" mesajı, editöre iş yükü olarak varır. Bunun yerine listedeki eksiği somutlaştırın: kapsanmayan bir kullanım senaryosu, güncelliğini yitirmiş bir fiyat bilgisi, kategoriye girmesi gerekirken atlanmış bir yaklaşım.
                    </p>

                    <p>
                        Editörün işi listeyi iyileştirmek. Ona iyileştirme malzemesi veriyorsanız talepte bulunmuyorsunuz, katkı sunuyorsunuz — ve mesajın karşılık görme oranı buna göre değişiyor.
                    </p>

                    <h3 id="mesaj">Mesajı yazın</h3>

                    <p>
                        Kısa olsun. Kim olduğunuz bir cümle, hangi listeye baktığınız bir cümle, gördüğünüz boşluk iki cümle, elinizde ne olduğu bir cümle. Beş cümle, ek dosya yok.
                    </p>

                    <p>
                        Ek dosya konusu özellikle önemli: PDF basın bülteni artık işlevsiz. Editör yayımlanabilir malzeme istiyor — erişilebilir bir sayfa, kullanılabilir görsel, kopyalanabilir veri. PDF'in içindeki hiçbir şey doğrudan kullanılamaz, dolayısıyla açılmıyor bile.
                    </p>

                    <p>
                        Bir de şu var: aynı editöre üç ay içinde ikinci kez yazacaksanız, ilk mesajın karşılıksız kalmış olması değil, ikinci mesajın yeni bir şey içermesi belirleyici. Takip mesajı hatırlatma değil, yeni bilgi olmalı.
                    </p>


                    <h2 id="turkiye">Türkiye'de hangi yayınlar sayılır?</h2>

                    <p className="bolum-cevap">
                        Türkçe "en iyi X" ekosistemi İngilizce'ye göre çok daha seyrek. Az sayıda yayın çok sayıda sorguyu domine ediyor, ve bu yayınların çoğu uluslararası markaların PR radarında değil. Aynı outreach emeği Türkçe'de kat kat fazla getiri veriyor.
                    </p>

                    <p>
                        Ancak burada hazır bir liste vermek yanıltıcı olur — hangi yayının alıntılandığı sektöre göre tamamen değişiyor. Sağlık, e-ticaret, B2B yazılım ve yerel hizmetlerde motorların döndüğü kaynaklar birbirinden farklı. Yöntem aynı: kendi sorgularınızı çalıştırın, kaynakları sayın.
                    </p>

                    <p>
                        Türkçe'ye özgü iki not var. Birincisi, kullanıcı üretimli platformlar burada editöryel yayınlar kadar ağırlık taşıyabiliyor; Ekşi Sözlük ve Şikayetvar gibi kaynaklar bazı sorgularda editöryel listelerin önüne geçiyor. Bu tarafı <Link href="/geo/reddit-forum-mention-etkisi" className="text-violet-600 hover:underline font-semibold">forum ve topluluk anılmaları</Link> sayfasında ele alıyorum. İkincisi, Türkçe listelerin önemli kısmı ajans blogları — yani rakiplerinizin sayfaları. Rakip bloğundaki bir listeye girmek mümkün olmayabilir, ama o listenin kapsamadığı bir açıyla kendi karşılaştırma içeriğinizi üretmek mümkün.
                    </p>


                    <h2 id="atifi-sinyale-cevirmek">Listeye girdikten sonra: atıfı sinyale çevirmek</h2>

                    <p className="bolum-cevap">
                        Listeye girmek tek başına yeterli değil; atıfın doğrulanabilir hale gelmesi gerekiyor. Marka adının tam olarak sizin kanonik biçiminizle yazılması, atfın kendi sitenizden görünür olması ve varlık ağınıza bağlanması — bu üçü olmadan kazanım yarım kalıyor.
                    </p>

                    <p>
                        İlk kontrol adlandırma. Liste sayfası markanızı farklı bir yazımla anıyorsa (kısaltma, Türkçe karaktersiz varyant, eski unvan) sinyal başka bir varlığa gidiyor olabilir. Editörden düzeltme istemek küçük ama yüksek getirili bir hamle. Neden kritik olduğunu <Link href="/geo/entity-seo" className="text-violet-600 hover:underline font-semibold">entity SEO</Link> sayfasında açıklıyorum.
                    </p>

                    <p>
                        İkincisi kendi tarafınızdaki yansıma. Atıfı sitenizde bir "basında biz" veya "önerilenler" bölümünde göstermek, hem kullanıcı güveni hem makine tarafı için çalışıyor. Bunu <code>Organization</code> şemasındaki <code>subjectOf</code> ve <code>sameAs</code> alanlarıyla işaretleyin.
                    </p>

                    <p>
                        Üçüncüsü zamanlama. Yeni yayımlanan bir liste, motorların tarama döngüsüne girene kadar cevaplarda görünmüyor. Atıf aldıktan sonra o sayfaya kendi kanallarınızdan trafik ve link göndermek, indekslenme hızını artırıyor.
                    </p>


                    <h2 id="olcum">Nasıl ölçülür?</h2>

                    <p className="bolum-cevap">
                        Dijital PR'ın GEO çıktısı backlink sayısıyla değil, <strong>atıf payıyla</strong> ölçülür: hedef sorgularınızda üç motorun cevaplarında kaç kez göründüğünüz. Bu sayı ayda bir, aynı sorgu setiyle ölçülmeli.
                    </p>

                    <p>
                        Dört metrik yeterli. Atıf payı — 20 sorguluk sabit setinizde kaç cevapta geçiyorsunuz. Kaynak çeşitliliği — kaç farklı yayın üzerinden alıntılanıyorsunuz; tek bir sayfaya bağımlıysanız kırılgansınız. Rakip farkı — aynı sette rakipleriniz kaç kez geçiyor. Ve anılma kalitesi — adınız geçiyor mu yoksa olumlu bir bağlamda mı öneriliyor; ikisi farklı şeyler.
                    </p>

                    <p>
                        Ölçüm kurulumunun detayları <Link href="/geo/geo-kpi-olcumu" data-pending="true" className="text-gray-400 font-semibold">GEO ölçümü ve KPI'lar</Link> sayfasında.
                    </p>


                    <h2 id="sss">Sıkça Sorulan Sorular</h2>

                    <h3>"En iyi X" listesine nasıl başvurulur?</h3>
                    <p>
                        Çoğunda başvuru formu yok. Liste sayfasının yazarını bulun, listedeki somut bir boşluğu gösteren kısa bir mesaj yazın. Genel şablon mesajlar bu aşamada elenmenin en hızlı yolu.
                    </p>

                    <h3>Link vermeyen bir liste işe yarar mı?</h3>
                    <p>
                        Evet, GEO açısından fazlasıyla. Marka anılmalarının AI Overview görünürlüğüyle korelasyonu 0,664, geri bağlantılarınki 0,218.
                        {/* kaynak: K93 */}
                        {" "}Bağlantısız anılma, klasik SEO'da değersiz sayılırdı; AI katmanında durum tersine döndü. Link tabii ki iyi, ama pazarlığın kırılma noktası olmamalı.
                    </p>

                    <h3>Editörler marka seçerken neye bakıyor?</h3>
                    <p>
                        Doğrulanabilirliğe. Başka bağımsız kaynaklarda anılıyor musunuz, iddialarınız kontrol edilebilir mi, kullanıcı yorumlarınız var mı. Editörün riski yanlış bir öneri yapmak; bu riski azaltan her şey seçilme olasılığınızı artırıyor. İlk atıfı almak en zoru, sonrakiler hızlanıyor.
                    </p>

                    <h3>Kaç listede olmak yeterli?</h3>
                    <p>
                        Tek bir eşik yok, ama tek kaynağa bağımlı olmamak temel kural. Hedef sorgu setinizde farklı yayınlardan gelen atıflar birbirini doğruluyor; hepsi tek siteden geliyorsa o site güncellendiğinde görünürlüğünüz de gidiyor. Beş ila sekiz farklı yayın, çoğu niş için sağlam bir taban.
                    </p>

                    <h3>Basın bülteni göndermek hâlâ mantıklı mı?</h3>
                    <p>
                        PDF formatında değil. Editörler doğrudan kullanabilecekleri malzeme istiyor: erişilebilir bir web sayfası, indirilebilir görsel, kopyalanabilir veri. Aynı içerik bir sayfa olarak sunulduğunda hem editör hem arama motorları tarafından okunabiliyor; PDF ikisinde de kayıp.
                    </p>

                    <h3>Sonuç ne zaman görünür?</h3>
                    <p>
                        Atıf yayımlandıktan sonra motorların o sayfayı taraması ve cevaplara yansıtması genelde birkaç haftayı buluyor. Anlamlı bir atıf payı değişimi içinse üç ila altı aylık sürekli çalışma gerekiyor — tek bir liste girişi ölçülebilir fark yaratmıyor, biriken çoklu atıf yaratıyor.
                    </p>
                </div>

                {/* CTA — §4 Kural 5: /geo'ya yönlendir */}
                <div className="bg-gray-50 border-l-4 border-violet-600 p-8 rounded-r-xl my-12 not-prose">
                    <h4 className="text-xl font-bold text-foreground mb-4">AI aramada atıf payınızı artırın</h4>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        Markanızın editöryel listelerde yer almasını, bağlantısız anılmaların GEO sinyaline dönüşmesini ve atıf payının ölçülmesini stratejik olarak yönetin.
                    </p>
                    <Link href="/geo" className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white font-bold rounded-full hover:bg-violet-700 transition-colors text-sm">
                        GEO Danışmanlığı hakkında bilgi alın
                        <span>→</span>
                    </Link>
                </div>

                {/* Ayrıca Bakınız — §4 Kural 3: 3 kardeş D + 1 komşu */}
                <div className="mt-16 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Ayrıca Bakınız</h2>
                    <ul className="space-y-6 mb-8">
                        {/* Kardeş D: entity-seo */}
                        <li className="list-none">
                            <Link href="/geo/entity-seo" className="inline-flex items-center text-violet-600 hover:underline font-bold group text-lg">
                                <span className="w-2 h-2 rounded-full bg-violet-600 mr-3 group-hover:scale-125 transition-all" />
                                Entity SEO ve Bilgi Grafiği
                            </Link>
                            <p className="text-sm text-gray-500 ml-5 mt-1 leading-relaxed max-w-2xl">Arama motorlarının markanızı varlık olarak tanıması için Knowledge Graph kaydı ve schema mimarisi rehberi.</p>
                        </li>
                        {/* Kardeş D: ai-marka-mention-etkisi */}
                        <li className="list-none">
                            <Link href="/geo/ai-marka-mention-etkisi" className="inline-flex items-center text-violet-600 hover:underline font-bold group text-lg">
                                <span className="w-2 h-2 rounded-full bg-violet-600 mr-3 group-hover:scale-125 transition-all" />
                                Marka Mention'ları ve AI Hafızası
                            </Link>
                            <p className="text-sm text-gray-500 ml-5 mt-1 leading-relaxed max-w-2xl">Link içermeyen marka anılmalarının LLM modellerinin bilgi ağındaki yeri ve kalıcılık etkisi.</p>
                        </li>
                        {/* Kardeş D: reddit-forum-mention-etkisi */}
                        <li className="list-none">
                            <Link href="/geo/reddit-forum-mention-etkisi" className="inline-flex items-center text-violet-600 hover:underline font-bold group text-lg">
                                <span className="w-2 h-2 rounded-full bg-violet-600 mr-3 group-hover:scale-125 transition-all" />
                                Reddit ve Forum Mention'larının GEO Etkisi
                            </Link>
                            <p className="text-sm text-gray-500 ml-5 mt-1 leading-relaxed max-w-2xl">Sosyal medya ve topluluk kanallarındaki atıfların yapay zeka tavsiyelerine doğrudan etkisi.</p>
                        </li>
                        {/* Komşu cluster (SEO köprüsü): §4 Kural 4 */}
                        <li className="list-none">
                            <Link href="/seo/site-disi-seo" className="inline-flex items-center text-blue-600 hover:underline font-bold group text-lg">
                                <span className="w-2 h-2 rounded-full bg-blue-600 mr-3 group-hover:scale-125 transition-all" />
                                Site Dışı SEO
                            </Link>
                            <p className="text-sm text-gray-500 ml-5 mt-1 leading-relaxed max-w-2xl">Backlink stratejisi, dijital PR temelleri ve dış sinyal yönetimi.</p>
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
