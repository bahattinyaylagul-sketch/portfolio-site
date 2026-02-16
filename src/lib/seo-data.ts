export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    content: string;
    keyPoints: { title: string; desc: string }[];
    relatedLinks: string[]; // Slugs of related posts
    parent: string | null;
    publishDate: string;
    image?: string;
}

export const seoClusterData: Record<string, BlogPost> = {
    "arama-niyeti": {
        slug: "arama-niyeti",
        parent: "icerik-optimizasyonu",
        title: "01. Arama Niyeti ve Anahtar Kelime Haritalama",
        description: "Arama niyeti (Search Intent); kullanıcının bir sorguyu gerçekleştirirken zihnindeki nihai hedefin (bilgi edinme, satın alma veya bir yere ulaşma) analiz edilerek, içeriğin bu motivasyonu tam olarak karşılayacak formatta sunulmasıdır.",
        content: `
            <div class="space-y-12">
                <!-- Section 1: Direct Answer -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">1. Hangi Kelimede Sıralama Almalıyım?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Eğer sayfanız binlerce kelimeye rağmen sıralama almıyorsa, muhtemelen "hacim" peşinde koşarken "niyeti" ıskaladınız. SEO'da başarı, en çok aranan kelimeyi bulmak değil; kullanıcının o sorguyu yaparken kredi kartını mı çıkaracağını yoksa sadece bilgi mi aradığını (Search Intent) doğru tahmin edip ona göre sayfa kurgulamaktır.</p>
                     
                    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-xl my-6">
                        <h4 class="text-indigo-900 font-bold mb-2">Operasyonel Detay: Hacim Tuzağı</h4>
                        <p class="text-indigo-800 text-sm">Aylık 100.000 aranması olan "Ayakkabı" kelimesine blog yazısı ile girmek, okyanusta kürek çekmektir. Google, bu sorguda ürün listesi görmek ister. Karar anındaki kullanıcıyı yakalamak için hacmi düşük ama niyeti net "En iyi su geçirmez trekking botu" gibi mikro-niyetlere odaklanın.</p>
                    </div>
                </section>

                <!-- Section 2: Step-by-Step List -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">2. Niyet Haritası Nasıl Çıkarılır?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Sadece tool'lara güvenmeyin; Google'ın canlı sonuçlarını (SERP) bir veri kaynağı olarak okuyun. İşte karar verici bir içerik için izlediğimiz 3 adım:</p>
                    <div class="space-y-4">
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg bg-white">
                            <div class="text-2xl font-black text-gray-200">01</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">SERP Dominansını Ölçün</h4>
                                <p class="text-sm text-gray-600">Gizli sekmede sorguyu yapın. İlk sayfada reklamlar, haritalar veya videolar mı baskın? Eğer reklamlar fazlaysa, o kelime "para harcanan" bir işlem kelimesidir.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg bg-white">
                            <div class="text-2xl font-black text-gray-200">02</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">İçerik İskeletini Seçin</h4>
                                <p class="text-sm text-gray-600">Kullanıcı karşılaştırma mı istiyor? Bölüm bölüm liste mi? Formatı Google belirler, biz uygularız.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg bg-white">
                            <div class="text-2xl font-black text-gray-200">03</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Kullanıcı Yolculuğunu (User Journey) Eşleştirin</h4>
                                <p class="text-sm text-gray-600">Bu sorguyu yapan kişi bir sonraki adımda ne isteyecek? İçeriğinize, kullanıcıyı hunide bir alt basamağa taşıyacak (Örn: Bilgiden Ürüne) tetikleyici butonlar (CTA) ekleyin.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section 3: If / But / Exception Scenarios -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">3. "Ya Niyet Değişirse?" İstisnalar</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Arama niyeti statik değildir; mevsime, cihaz tipine ve hatta güncel olaylara göre değişebilir.</p>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="p-4 bg-gray-50 rounded-xl text-sm border border-gray-100">
                            <strong>Mevsimsel Kayma:</strong> "Güneş Kremi" kışın bilgi (Nasıl seçilir?), yazın işlem (Fiyatları) niyetine evrilir.
                        </div>
                        <div class="p-4 bg-gray-50 rounded-xl text-sm border border-gray-100">
                            <strong>Cihaz Farkı:</strong> Mobilde "Starbucks" arayan kişi "Yol tarifi" isterken, masaüstünde "Menü" veya "Hisse senedi" bakıyor olabilir.
                        </div>
                    </div>
                </section>

                <!-- Section 4: Comparison Table -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">4. Hangi Sorgu Türü İçin Hangi İçerik Formatı Seçilmelidir?</h3>
                    <div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table class="w-full text-sm text-left leading-[1.5]">
                            <thead class="bg-gray-800 text-white font-bold uppercase text-xs">
                                <tr>
                                    <th class="px-6 py-4">Sorgu Türü</th>
                                    <th class="px-6 py-4">Kullanıcı Ne İster?</th>
                                    <th class="px-6 py-4">Kazanan Format</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Informational (Bilgi)</td>
                                    <td class="px-6 py-4 text-gray-600">"Nedir, Nasıl Yapılır?"</td>
                                    <td class="px-6 py-4 text-gray-600">Rehberler, "Nasıl Yapılır" Listeleri, Videolar.</td>
                                </tr>
                                <tr class="bg-gray-50 hover:bg-gray-100">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Commercial (Ticari)</td>
                                    <td class="px-6 py-4 text-gray-600">"Hangi ürün daha iyi?"</td>
                                    <td class="px-6 py-4 text-gray-600">Karşılaştırma Tabloları, İncelemeler, "En İyi 10" Listeleri.</td>
                                </tr>
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Transactional (İşlem)</td>
                                    <td class="px-6 py-4 text-gray-600">"Satın Al, İndir, Üye Ol"</td>
                                    <td class="px-6 py-4 text-gray-600">Ürün Sayfaları, Fiyat Listeleri, Landing Page.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                
                <!-- Section 5: Strategic FAQ -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">5. Arama Niyeti ve Dönüşüm Optimizasyonu Hakkında Sorular</h3>
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Peki, rakibim hem bilgi hem ürün sayfasında aynı içerikle sıralama alıyorsa ne yapmalıyım?</p>
                            <p class="text-sm text-gray-600 leading-[1.6]">Bu durum genellikle "Fractured Intent" (Bölünmüş Niyet) göstergesidir. Rakibi kopyalamayın. Google'ın o sayfadaki en büyük boşluğunu (eksik tablo, güncel olmayan veri) bulun ve o yönden saldırın.</p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Ama hacmi sıfır olan bir kelimeye içerik yazmak bütçe israfı değil mi?</p>
                            <p class="text-sm text-gray-600 leading-[1.6]">Tam tersi. Hacmi sıfır görünen (Zero Volume) kelimeler, tool'ların henüz keşfedemediği "Long Tail" mücevherlerdir. Bu kelimelerden gelen 10 ziyaretçi, genel kelimeden gelen 1000 ziyaretçiden daha fazla satış getirebilir.</p>
                        </div>
                    </div>
                </section>

                <!-- Footer Navigation -->
                <div class="mt-8 pt-8 border-t border-gray-200">
                    <a href="/semantik-yazim" class="flex items-center gap-2 text-[#3b82f6] hover:text-blue-700 font-bold text-lg group">
                        <span class="underline">Sıradaki Konu: Semantik Yazım ve NLP</span>
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        `,
        keyPoints: [
            { title: "Niyet Odaklılık", desc: "Kullanıcının arama motivasyonu anlaşılır." },
            { title: "Dönüşüm Optimizasyonu", desc: "Doğru kitleye doğru içerik sunulur." },
            { title: "Verimlilik", desc: "Yanlış anahtar kelimelere harcanan emek önlenir." },
            { title: "Kullanıcı Memnuniyeti", desc: "Sorulara doğrudan yanıt verilerek sitede kalma süresi artırılır." }
        ],
        relatedLinks: ["icerik-optimizasyonu", "semantik-yazim", "silo-mimarisi", "bilgi-kazanci", "topikal-otorite"],
        publishDate: "2024-01-05"
    },
    "semantik-yazim": {
        slug: "semantik-yazim",
        parent: "icerik-optimizasyonu",
        title: "Semantik Yazım ve NLP",
        description: "Semantik yazım; içeriğin sadece anahtar kelimelere dayalı değil, konuyla ilgili varlıklar (Entities), kavramlar ve bağlamsal ilişkiler (Context) üzerinden kurgulanarak arama motorlarının 'anlamlandırma' kapasitesine uygun hale getirilmesidir.",
        content: `
            <div class="space-y-12">
                <!-- Section 1: Direct Answer -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">1. Google Yazdıklarımı Nasıl Anlıyor?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Google artık metinleri sadece kelime dizileri olarak değil, bir kavramlar haritası olarak okuyor. Semantik yazım, içeriği makineler için robotik anahtar kelimelerle doldurmak değil; konuyu "Varlıklar" (Entities) ve "Bağlam" (Context) üzerinden kurgulayarak Google'ın sizi o konunun uzmanı olarak kodlamasını sağlamaktır.</p>
                    
                    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-xl my-6">
                        <h4 class="text-indigo-900 font-bold mb-2">Uzman Görüşü: "Anlam" Skoru</h4>
                        <p class="text-indigo-800 text-sm">Google artık %2 anahtar kelime yoğunluğuna bakmıyor. Yazınızın içinde ana konuyla ilişkili "ikincil terimlerin" (örn: Araba yerine tork, şanzıman, yakıt tüketimi) ne kadar doğal geçtiğine bakıyor.</p>
                    </div>
                </section>

                <!-- Section 2: Step-by-Step List -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">2. Semantik Kurgu Nasıl Yapılır?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Sıradan bir blog yazısını semantik bir otorite içeriğine dönüştürmek için şu süreci işletiyoruz:</p>
                    <div class="space-y-4">
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg bg-white">
                            <div class="text-2xl font-black text-gray-200">01</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Varlık Tespiti (Entity Mapping)</h4>
                                <p class="text-sm text-gray-600">Konunuzla ilgili somut kavramları listeleyin. (Örn: Kahve yerine 'Arabica', 'Demleme Sıcaklığı', 'Mahlkönig öğütücü').</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg bg-white">
                            <div class="text-2xl font-black text-gray-200">02</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Doğal Dil Yapısı (Chunking)</h4>
                                <p class="text-sm text-gray-600">Metni, Google'ın NLP modellerinin kolayca parselleyebileceği net, özne-yüklem ilişkisi güçlü bloklara bölün.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg bg-white">
                            <div class="text-2xl font-black text-gray-200">03</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Bağlamsal Vektörler (Context Vectors)</h4>
                                <p class="text-sm text-gray-600">Ana konuyu destekleyen yan konuları (LSI) belirleyin. 'Elma' yazıyorsanız; meyve mi, teknoloji şirketi mi olduğunu 'vitamin', 'hasat' veya 'iPhone', 'Mac' kelimeleriyle netleştirin.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section 3: If / But / Exception Scenarios -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">3. "Her Terimi Kullanmalı mıyım?" İstisnalar</h3>
                    <div class="p-6 bg-amber-50 rounded-xl border border-amber-100">
                        <p class="text-sm text-amber-900 leading-relaxed"><strong>Dikkat:</strong> Her LSI terimini yazıya tıkıştırmak "Semantic Stuffing" hatasına yol açar. Eğer bir terim okuyucunun akışını bozuyorsa, onu kullanmayın. Google'ın NLP algoritmaları zorlama bağlantıları tespit edebilir.</p>
                    </div>
                </section>

                <!-- Section 4: Comparison Table -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">4. Kelime Odaklı SEO ile Semantik SEO Arasındaki Temel Farklar Nelerdir?</h3>
                    <div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table class="w-full text-sm text-left leading-[1.5]">
                            <thead class="bg-gray-800 text-white font-bold uppercase text-xs">
                                <tr>
                                    <th class="px-6 py-4">Yaklaşım</th>
                                    <th class="px-6 py-4">Geleneksel SEO</th>
                                    <th class="px-6 py-4">Semantik SEO</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Odak Noktası</td>
                                    <td class="px-6 py-4 text-gray-600">Tekil Anahtar Kelimeler</td>
                                    <td class="px-6 py-4 text-gray-600">Konular ve Varlıklar (Entities)</td>
                                </tr>
                                <tr class="bg-gray-50 hover:bg-gray-100">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Amaç</td>
                                    <td class="px-6 py-4 text-gray-600">Botu Kandırmak</td>
                                    <td class="px-6 py-4 text-gray-600">Kullanıcı Sorununu Çözmek</td>
                                </tr>
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Yapı</td>
                                    <td class="px-6 py-4 text-gray-600">Tekrar Eden Kelimeler</td>
                                    <td class="px-6 py-4 text-gray-600">Zengin Kelime Dağarcığı ve Bağlam</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <!-- Section 5: Strategic FAQ -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">5. Semantik Yazım ve NLP Teknolojileri Hakkında Sorular</h3>
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Peki, AI (ChatGPT) ile yazdığım içerik neden düşük "semantik değer" alıyor?</p>
                            <p class="text-sm text-gray-600 leading-[1.6]">Çünkü AI, internetteki en yaygın (ortalama) veriyi sunar. "Bilgi Kazancı" (Information Gain) sağlamaz. Google, herkesin bildiği şeyi tekrar eden AI içeriklerini değil, yeni bir perspektif veya uzman verisi ekleyen derin sayfaları ödüllendirir.</p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Şu durumda ne olur: Yazımı güncelledim ama hala eski anahtar kelimelerimde duruyorum?</p>
                            <p class="text-sm text-gray-600 leading-[1.6]">Bu, Google'ın sayfanızdaki "anlam değişikliğini" henüz tam sindiremediğini gösterir. İç linkleme yapısını ve yazar otoritesini (EEAT) kontrol edin; semantik geçiş sadece kelimelerle değil, otorite sinyalleriyle tamamlanır.</p>
                        </div>
                    </div>
                </section>

                <!-- Footer Navigation -->
                <div class="mt-8 pt-8 border-t border-gray-200">
                    <a href="/silo-mimarisi" class="flex items-center gap-2 text-[#3b82f6] hover:text-blue-700 font-bold text-lg group">
                        <span class="underline">Yapıyı Güçlendir: İç Linkleme ve Silo Mimarisi</span>
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        `,
        keyPoints: [
            { title: "Varlık (Entity)", desc: "Metnin anlamsal düğüm noktaları güçlendirilir." },
            { title: "NLP Uyumu", desc: "Doğal dil işleme modellerine uygun akıcı metin yazılır." },
            { title: "Bağlam", desc: "Kelime tekrarı yerine zengin kelime dağarcığı kullanılır." },
            { title: "Derinlik", desc: "Konu yüzeysel değil, tüm yönleriyle ele alınır." }
        ],
        relatedLinks: ["icerik-optimizasyonu", "arama-niyeti", "silo-mimarisi", "bilgi-kazanci", "topikal-otorite"],
        publishDate: "2024-01-08"
    },
    "silo-mimarisi": {
        slug: "silo-mimarisi",
        parent: "icerik-optimizasyonu",
        title: "03. İç Linkleme ve Silo Mimarisi",
        description: "Silo mimarisi; web sitesindeki içeriklerin rastgele değil, belirli konu kümeleri (Clusters) ve ebeveyn-çocuk (Parent-Child) ilişkisi içinde gruplandırılarak otoritenin ve taranabilirliğin optimize edilmesidir.",
        content: `
            <div class="space-y-12">
                <!-- Section 1: Direct Answer -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">1. Dağınık Bir Siteden Nasıl Otorite Kurulur?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Eğer içerikleriniz rastgele kategorilere dağılmışsa, Google sizin hangi konuda uzman olduğunuzu anlamaz. Silo Mimarisi, sitenizi devasa bir kütüphane gibi düzenleyerek; otoritenin (Link Juice) sızmasını önleyen ve Googlebot'un "bu site bu konunun erbabıdır" demesini sağlayan teknik hiyerarşi modelidir.</p>
                    
                    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-xl my-6">
                        <h4 class="text-indigo-900 font-bold mb-2">Gerçek Süreç Bilgisi: Otorite Sızıntısı</h4>
                        <p class="text-indigo-800 text-sm">Operasyonel hataların başında, "Ayakkabı" kategorisindeki bir yazıdan alakasız bir "Yemek Tarifi"ne link vermek gelir. Bu, silonun duvarlarını yıkar. Otoriteyi bir yerde toplamak için dikeyde kalmalısınız.</p>
                    </div>
                </section>

                <!-- Section 2: Step-by-Step List -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">2. Silo Yapısı Nasıl İnşa Edilir?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Sitenizi bölümlere ayırırken "karar verici" bir yapı kurmak için şu 3 adımı izliyoruz:</p>
                    <div class="space-y-4">
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg bg-white">
                            <div class="text-2xl font-black text-gray-200">01</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Pillar (Çatı) Sayfa Seçimi</h4>
                                <p class="text-sm text-gray-600">En geniş kavramı kapsayan, yüksek otorite beklediğimiz sayfayı silonun tepesine koyun.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg bg-white">
                            <div class="text-2xl font-black text-gray-200">02</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Destekleyici Cluster İçerikler</h4>
                                <p class="text-sm text-gray-600">Her bir alt soruyu derinlemesine inceleyin ve sadece kendi siloları içinde birbirlerine bağlayın.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg bg-white">
                            <div class="text-2xl font-black text-gray-200">03</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Entegrasyon Linklemesi</h4>
                                <p class="text-sm text-gray-600">Tüm alt (Cluster) içeriklerden, ana (Pillar) sayfaya döngüyü tamamlayan bir link vererek otoriteyi yukarı doğru geri pompalayın.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section 3: If / But / Exception Scenarios -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">3. "Silolar Arası Geçiş Olur mu?" İstisnalar</h3>
                    <div class="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <p class="text-sm text-gray-600">Normalde silolar arası linkleme yapısı bozar, ancak kullanıcı deneyimi için kritikse (örn: Bir ayakkabı rehberinden, ilgili çanta kombinine geçiş) link verilebilir. Bu durumda linki ana menüden değil, metin içinden (contextual) vermelisiniz.</p>
                    </div>
                </section>

                <!-- Section 4: Comparison Table -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">4. Düz Bir Liste mi Yoksa Hiyerarşik Silo Mimarisi mi Daha Güçlüdür?</h3>
                    <div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table class="w-full text-sm text-left leading-[1.5]">
                            <thead class="bg-gray-800 text-white font-bold uppercase text-xs">
                                <tr>
                                    <th class="px-6 py-4">Özellik</th>
                                    <th class="px-6 py-4">Rastgele / Düz Yapı</th>
                                    <th class="px-6 py-4">Silo Mimarisi</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Link Akışı</td>
                                    <td class="px-6 py-4 text-gray-600">Karmaşık ve kontrolsüz (Spaghetti).</td>
                                    <td class="px-6 py-4 text-gray-600">Hiyerarşik ve dikey (Vertical).</td>
                                </tr>
                                <tr class="bg-gray-50 hover:bg-gray-100">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Otorite</td>
                                    <td class="px-6 py-4 text-gray-600">Tüm siteye yayılır, etkisi zayıflar.</td>
                                    <td class="px-6 py-4 text-gray-600">İlgili kategoride birikir ve güçlener.</td>
                                </tr>
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Bot Taraması</td>
                                    <td class="px-6 py-4 text-gray-600">Verimsiz, bütçe israfı yaratır.</td>
                                    <td class="px-6 py-4 text-gray-600">Sistematik ve derinlemesine tarama.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <!-- Section 5: Strategic FAQ -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">5. İç Linkleme ve Mimari Yapı Hakkında Sorular</h3>
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Peki, mevcut sitemi Silo'ya geçirirken URL değişimi yapmalı mıyım?</p>
                            <p class="text-sm text-gray-600 leading-[1.6]">Eğer siteniz trafik alıyorsa URL değiştirmeyin (301 riski). URL yapısına dokunmadan, sadece menü ve iç linkleme (Kategori -> Alt Konu) ile sanal silolar (Virtual Silos) oluşturun. Bu hem otoriteyi toplar hem de trafiği korur.</p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Şu durumda ne olur: Bir içerik 2 farklı siloya da giriyorsa?</p>
                            <p class="text-sm text-gray-600 leading-[1.6]">Asla içeriği iki farklı kategoriye eklemeyin. Bir ana kategori (Canonical) seçin, diğerinden ona link verin. Çift kategori Google'ın kafasını karıştırır ve "Silo Bleeding" e yol açar.</p>
                        </div>
                    </div>
                </section>

                <!-- Footer Navigation -->
                <div class="mt-8 pt-8 border-t border-gray-200">
                    <a href="/site-ici-seo" class="flex items-center gap-2 text-[#3b82f6] hover:text-blue-700 font-bold text-lg group">
                        <span class="underline">SEO Ana Rehberine Dön</span>
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        `,
        keyPoints: [
            { title: "Silo Mimarisi", desc: "Konusal otoriteyi koruyan izole linkleme yapıları kurulur." },
            { title: "Parent-Child", desc: "Ana sayfa ve alt sayfalar arasında çift yönlü link akışı sağlanır." },
            { title: "Link Equity", desc: "Otoritenin ana sayfada (Money Page) toplanması hedeflenir." },
            { title: "Konusal Alaka", desc: "Sadece ilgili içerikler birbirine bağlanarak botlara net sinyal verilir." }
        ],
        relatedLinks: ["icerik-optimizasyonu", "arama-niyeti", "semantik-yazim", "bilgi-kazanci", "topikal-otorite"],
        publishDate: "2024-01-12"
    },
    "tarama": {
        slug: "tarama",
        parent: "teknik-seo",
        title: "Tarama ve İndeksleme (Crawl & Index)",
        description: "Tarama (Crawling); Googlebot gibi arama motoru örümceklerinin web sitenizi ziyaret etmesi, sayfa kodlarını okuması ve linkleri takip ederek site haritanızı keşfetmesi sürecidir.",
        content: `
            <div class="space-y-12">
                <!-- Section 1: H1/Direct Answer -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">1. Google Sitemi Neden Bulamıyor?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Eğer binlerce sayfalık sitenizde sadece birkaç yüz sayfa taranıyorsa, botlar sitenizin "teknik labirentinde" kaybolmuş demektir. Tarama (Crawling), Googlebot'un sitenizi keşfetme yolculuğudur. Bu aşamadaki başarısızlık, içeriğiniz ne kadar mükemmel olursa olsun, görünmez kalması anlamına gelir.</p>
                     
                    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-xl my-6">
                        <h4 class="text-indigo-900 font-bold mb-2">Uzman Görüşü: Bütçe Kaçaklarını Durdurun</h4>
                        <p class="text-indigo-800 text-sm">Çoğu site sahibi yeni içerik girmeye odaklanır ama mevcut tarama bütçesi (Crawl Budget) 500 hataları veya gereksiz filtre URL'leri tarafından tüketilmektedir. Önce bütçeyi "kapatın", sonra yeni sayfalar açın.</p>
                    </div>
                </section>

                <!-- Section 2: Step-by-Step List -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">2. Tarama Verimliliği Nasıl Artırılır?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Botların sitenize olan ziyaretlerini kusursuz hale getirmek için şu 3 teknik kontrolü yapmalıyız:</p>
                    <div class="space-y-4">
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg bg-white">
                            <div class="text-2xl font-black text-gray-200">01</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Robots.txt ile Yön Gösterin</h4>
                                <p class="text-sm text-gray-600">Admin panelleri ve sepet gibi "para kazandırmayan" sayfaları Disallow ile botlara kapatın.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg bg-white">
                            <div class="text-2xl font-black text-gray-200">02</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Sitemap Temizliği</h4>
                                <p class="text-sm text-gray-600">Haritada sadece 200 OK kodu veren ve indekslenmesini istediğiniz en temiz kanonik URL'leri bulundurun.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg bg-white">
                            <div class="text-2xl font-black text-gray-200">03</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Kırık Link (404) Temizliği</h4>
                                <p class="text-sm text-gray-600">Site içindeki kırık linkler botları çıkmaz sokağa sokar ve bütçeyi boşa harcar. Tüm iç linklerinizin çalışan (200 OK) sayfalara gittiğinden emin olun.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section 3: Scenarios / Exceptions -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">3. "Ya Sitem JavaScript ile Yapıldıysa?"</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6]">Modern frameworkler (React, Next.js) botlar için zorlayıcı olabilir. Eğer içeriğiniz client-side render ediliyorsa Googlebot içeriği "boş" görür. Bu durumda <strong>Server-Side Rendering (SSR)</strong> veya <strong>Static Site Generation (SSG)</strong> kullanmak kaçınılmazdır. Aksi takdirde tarama gerçekleşse de anlamlandırma (Rendering) başarısız olur.</p>
                </section>

                <!-- Section 4: Comparison Table -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">4. Hangi Teknik Sorun Taramayı Nasıl Erişilemez Kılar?</h3>
                    <div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table class="w-full text-sm text-left leading-[1.5]">
                            <thead class="bg-gray-800 text-white font-bold uppercase text-xs">
                                <tr>
                                    <th class="px-6 py-4">Kriter</th>
                                    <th class="px-6 py-4">Hatalı Yapı (Spider Trap)</th>
                                    <th class="px-6 py-4">İdeal Yapı (Bot Friendly)</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">URL Yapısı</td>
                                    <td class="px-6 py-4 text-gray-600">Parametreli URL'ler (?id=123&session=...)</td>
                                    <td class="px-6 py-4 text-gray-600">Temiz (Clean) ve Statik URL'ler</td>
                                </tr>
                                <tr class="bg-gray-50 hover:bg-gray-100">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">İçerik Türü</td>
                                    <td class="px-6 py-4 text-gray-600">Client-Side Render (Boş HTML)</td>
                                    <td class="px-6 py-4 text-gray-600">Server-Side Render (Dolu HTML)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <!-- Section 5: Strategic FAQ -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">5. Tarama Süreci Hakkında Stratejik Sorular</h3>
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Robots.txt ile engellediğim bir sayfa SERP'te "açıklama mevcut değil" diye çıkıyor, neden?</p>
                            <p class="text-sm text-gray-600 leading-[1.6]">Çünkü Robots.txt taramayı engeller ama indekslemeyi garantilemez. Eğer o sayfaya dışarıdan link geliyorsa Google onu dizine ekler ama içini okuyamadığı için boş gösterir. Tam çözüm için noindex etiketi kullanmalısınız.</p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Yeni yazdığım yazının anında taranması için en hızlı yol hangisi?</p>
                            <p class="text-sm text-gray-600 leading-[1.6]">Search Console "URL Denetimi" üzerinden manuel talep gönderebilirsiniz. Ancak büyük sitelerde Indexing API kullanmak çok daha profesyonel ve hızlı bir çözümdür.</p>
                        </div>
                    </div>
                </section>

                <!-- Footer Navigation -->
                <div class="mt-8 pt-8 border-t border-gray-200">
                    <a href="/indeksleme" class="flex items-center gap-2 text-[#3b82f6] hover:text-blue-700 font-bold text-lg group">
                        <span class="underline">Sıradaki Aşama: İndeksleme Mantığı</span>
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        `,
        keyPoints: [
            { title: "Crawl Bütçesi", desc: "Bot kaynaklarının optimum kullanımı sağlanır." },
            { title: "SSR Desteği", desc: "Botlara hazır HTML sunularak tarama hızlandırılır." },
            { title: "Temiz Linkler", desc: "Parametre tuzakları (Spider Traps) ve döngüler engellenir." },
            { title: "Log Takibi", desc: "Botların siteyi ne sıklıkla ziyaret ettiği analiz edilir." }
        ],
        relatedLinks: ["teknik-seo", "indeksleme", "core-web-vitals", "yapisal-veri", "tarama-butcesi", "log-analizi", "siralama"],
        publishDate: "2024-01-14"
    },
    "indeksleme": {
        slug: "indeksleme",
        parent: "teknik-seo",
        title: "Indexing (Dizine Ekleme) Ekosistemi",
        description: "İndeksleme (Indexing); taranan sayfaların kalitesinin değerlendirilerek, arama sonuçlarında (SERP) gösterilmek üzere Google'ın dağıtık veritabanına kaydedilmesi işlemidir.",
        content: `
            <div class="space-y-12">
                <!-- Section 1: H1/Direct Answer -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">1. Her Yazdığım Neden Google'da Çıkmıyor?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Taranmak, dizine eklenmeyi garanti etmez. Google, saniyede milyonlarca sayfayı tararken çok sıkı bir "kalite filtresi" uygular. Eğer içeriğiniz diğerleriyle aynıysa (Duplicate) veya yeterince derin değilse (Thin Content), Google onu veritabanına almayarak "kaynak israfı" yapmamayı seçer.</p>
                    
                    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-xl my-6">
                        <h4 class="text-indigo-900 font-bold mb-2">Uzman Görüşü: Dizin Şişkinliği (Index Bloat)</h4>
                        <p class="text-indigo-800 text-sm">Sitenizdeki her şeyi (etiket sayfaları, boş sonuçlar) indeksletmek sitenizin genel "Kalite Skorunu" düşürür. Amacımız nicelik değil, nitelikli bir dizin (Clean Index) oluşturmaktır.</p>
                    </div>
                </section>

                <!-- Section 2: Step-by-Step List -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">2. İndeksleme Sorunlarını Giderme</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Google sonuçlarında görünmeyen sayfalar varsa şu 3 stratejik adımı izleyin:</p>
                    <div class="space-y-4">
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg bg-white">
                            <div class="text-2xl font-black text-gray-200">01</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Excluded Raporunu Analiz Edin</h4>
                                <p class="text-sm text-gray-600">Search Console'da "Tarandı ama dizine eklenmedi" hatası kaliteye, "Bulundu ama taranmadı" hatası ise site hızına işarettir.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg bg-white">
                            <div class="text-2xl font-black text-gray-200">02</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Meta Robots Kontrolü</h4>
                                <p class="text-sm text-gray-600">Yanlışlıkla tüm siteye "noindex" basılmadığından emin olun. Head bölümünü kontrol edin.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg bg-white">
                            <div class="text-2xl font-black text-gray-200">03</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">İçerik Kalitesi ve Kopya Kontrolü</h4>
                                <p class="text-sm text-gray-600">Sayfanız başka bir sayfanın kopyası mı? Google 'Duplicate Content' gördüğünde genellikle orijinal olanı (veya otoriter olanı) seçer, diğerini eler. Özgünlük sunun.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section 3: Scenarios / Exceptions -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">3. "Sayfam Özgün Ama Yine de İndekslenmiyor?"</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6]">Bazen içerik özgün olsa da, Google sitemizin genel otoritesini o konuyu kapsamaya yetersiz bulabilir. Eğer "YMYL" (Sağlık, Finans) gibi kritik bir alandaysanız, sadece yazı yazmak yetmez; yazarın uzmanlığını (EEAT) kanıtlayan sinyalleri de sayfaya eklemelisiniz. Aksi halde Google güvenli tarafta kalmayı seçer ve sizi dizine almaz.</p>
                </section>

                <!-- Section 4: Comparison Table -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">4. Hangi Sayfa Tipleri İndekslenmeli, Hangileri Engellenmeli?</h3>
                    <div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table class="w-full text-sm text-left leading-[1.5]">
                            <thead class="bg-gray-800 text-white font-bold uppercase text-xs">
                                <tr>
                                    <th class="px-6 py-4">Kriter</th>
                                    <th class="px-6 py-4">Negatif Sinyal (Index Bloat)</th>
                                    <th class="px-6 py-4">Pozitif Sinyal (Clean Index)</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">İçerik Derinliği</td>
                                    <td class="px-6 py-4 text-gray-600">Zayıf içerik (Thin Content), boş sayfalar.</td>
                                    <td class="px-6 py-4 text-gray-600">Kapsamlı ve özgün bilgi içeren sayfalar.</td>
                                </tr>
                                <tr class="bg-gray-50 hover:bg-gray-100">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Kopya Durumu</td>
                                    <td class="px-6 py-4 text-gray-600">Site içi kopya (Duplicate), parametreli URL'ler.</td>
                                    <td class="px-6 py-4 text-gray-600">Kanonik etiketiyle işaretlenmiş tekil URL.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                
                <!-- Section 5: Strategic FAQ -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">5. İndeksleme ve Kalite Filtreleri Hakkında Sorular</h3>
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Index Request (Dizin Oluşturma İsteği) butonuna her gün basmak işe yarar mı?</p>
                            <p class="text-sm text-gray-600 leading-[1.6]">Hayır. Bu sadece bir "hatırlatmadır". Eğer sayfanızın kalite sorunu varsa, istediğiniz kadar basın, Google o sayfayı dizine almayacaktır. Önce içeriği geliştirin.</p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Eski ve trafik almayan içerikleri silmek siteme zarar verir mi?</p>
                            <p class="text-sm text-gray-600 leading-[1.6]">Tam tersine, "Content Pruning" (İçerik Budama) stratejisi ile düşük kaliteli sayfaları silmek veya birleştirmek, sitenizin genel puanını yükseltir ve ödüllendirilirsiniz.</p>
                        </div>
                    </div>
                </section>

                <!-- Footer Navigation -->
                <div class="mt-8 pt-8 border-t border-gray-200">
                    <a href="/siralama" class="flex items-center gap-2 text-[#3b82f6] hover:text-blue-700 font-bold text-lg group">
                        <span class="underline">Sıradaki Aşama: Sıralama Faktörleri</span>
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        `,
        keyPoints: [
            { title: "Dizin Optimizasyonu", desc: "Kaliteli sayfalar önceliklendirilir (Index Bloat Önleme)." },
            { title: "Kanonik Sinyaller", desc: "Orijinal kaynak teknik olarak işaretlenir." },
            { title: "GSC Analizi", desc: "İndeksleme hataları Search Console üzerinden çözülür." },
            { title: "Meta Kontrolü", desc: "Noindex etiketi ile gereksiz sayfalar elenir." }
        ],
        relatedLinks: ["teknik-seo", "tarama", "core-web-vitals", "yapisal-veri", "tarama-butcesi", "log-analizi", "siralama"],
        publishDate: "2024-01-16"
    },
    "teknik-seo": {
        slug: "teknik-seo",
        parent: null,
        title: "Teknik SEO: Altyapı ve Performans",
        description: "Teknik SEO; Web site alt yapısının (Sunucu, Kod Yapısı, Hız), arama motoru botlarının siteyi sorunsuz tarayabileceği (Crawling) ve anlamlandırabileceği (Indexing) standartlara getirilmesidir.",
        image: "/images/teknik-seo-cover.png",
        content: `
            <div class="space-y-12">
                <!-- Section 1: H1/Direct Answer -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">1. Teknik Altyapı Neden Sıralamayı Doğrudan Etkiler?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Teknik SEO, binanın temeli gibidir; temel çürükse ne kadar güzel içerik (kat) çıkarsanız çıkın o bina yıkılır. Google için teknik altyapı, içeriğin "erişilebilir" ve "hızlı" olduğunu kanıtlayan bir mühendislik standartıdır. Teknik sorunları çözmediğiniz bir sitede sıralama almak, delik bir kovaya su doldurmaya benzer.</p>
                    


                    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-xl my-6">
                        <h4 class="text-indigo-900 font-bold mb-2">Uzman Görüşü: Tarama vs Performans</h4>
                        <p class="text-indigo-800 text-sm">Çoğu kişi teknik SEO'yu sadece site hızı sanır. Oysa teknik SEO, botların siteyi "hatasız" (Error-free) ve "verimli" (Efficient) taramasını sağlamaktır. Hızlı ama taranmayan bir site sıralama alamaz.</p>
                    </div>
                </section>

                <!-- Section 2: Step-by-Step List -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">2. Teknik Sağlık Denetimi Nasıl Yapılır?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Her SEO projesinin başında yaptığımız 3 kritik teknik denetim adımı:</p>
                    <div class="space-y-4">
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg bg-white">
                            <div class="text-2xl font-black text-gray-200">01</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Status Code Analizi</h4>
                                <p class="text-sm text-gray-600">Screaming Frog gibi araçlarla 404, 5xx ve 3xx zincirlerini tespit edip kökten çözün.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg bg-white">
                            <div class="text-2xl font-black text-gray-200">02</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Core Web Vitals Ölçümü</h4>
                                <p class="text-sm text-gray-600">LCP ve CLS değerlerini sadece skor olarak değil, kullanıcıyı rahatsız eden unsurlar olarak görün.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg bg-white">
                            <div class="text-2xl font-black text-gray-200">03</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Log ve Tarama Analizi</h4>
                                <p class="text-sm text-gray-600">Botların sitenizi ne sıklıkla ziyaret ettiğini ve bütçenizi verimli kullanıp kullanmadığını sunucu loglarından (Server Logs) kontrol edin.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section 3: Scenarios / Exceptions -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">3. "JS Framework Kullanıyorum,SEO Bitecek mi?"</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6]">React, Angular veya Vue kullanılan projelerde "Server-Side Rendering" (SSR) teknik bir lüks değil, SEO için zorunluluktur. Eğer site sadece client'da yükleniyorsa Googlebot içeriği okuyana kadar timeout yiyebilir veya eksik içerik indeksleyebilir. Bu gibi durumlarda teknik SEO, kod mimarisini Next.js gibi hibrit yapılara taşımayı kapsar.</p>
                </section>

                <!-- Section 4: Comparison Table -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">4. Botlar ve Kullanıcılar Siteyi Nasıl Farklı Deneyimler?</h3>
                    <div class="not-prose overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table class="w-full text-sm text-left leading-[1.5]">
                            <thead class="bg-gray-900 font-bold uppercase text-xs text-white">
                                <tr>
                                    <th class="px-6 py-4 text-white" style="color: white !important;">Özellik</th>
                                    <th class="px-6 py-4 text-white" style="color: white !important;">Kullanıcı (User) Ne Görür?</th>
                                    <th class="px-6 py-4 text-white" style="color: white !important;">Googlebot Ne Görür?</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Görsel Tasarım</td>
                                    <td class="px-6 py-4 text-gray-600">Renkler, animasyonlar, düzen.</td>
                                    <td class="px-6 py-4 text-gray-600">HTML Etiketleri, DOM yapısı.</td>
                                </tr>
                                <tr class="bg-gray-50 hover:bg-gray-100">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Sayfa Hızı</td>
                                    <td class="px-6 py-4 text-gray-600">Bekleme süresi (Interactivity).</td>
                                    <td class="px-6 py-4 text-gray-600">TTFB ve Render maliyeti.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                
                <!-- Section 5: Strategic FAQ -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">5. Teknik SEO Altyapısı Hakkında Merak Edilen Sorular</h3>
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Yazılımcı olmadan teknik SEO problemlerini çözebilir miyim?</p>
                            <p class="text-sm text-gray-600 leading-[1.6]">Basit yönlendirme ve meta etiket sorunlarını eklentilerle çözebilirsiniz, ancak Core Web Vitals iyileştirmeleri veya JS render sorunları için mutlaka bir geliştirici desteğine ihtiyacınız olacaktır.</p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Sitemin HTTPS olması tek başına sıralama faktörü müdür?</p>
                            <p class="text-sm text-gray-600 leading-[1.6]">Evet, Google bunu bir "güvenlik sinyali" olarak görür ancak bu artık bir avantaj değil, bir standarttır. HTTPS olmayan siteler "Güvenli Değil" uyarısı ile ciddi trafik kaybeder.</p>
                        </div>
                    </div>
                </section>

                <!-- Section 6: Technical SEO Resources -->
                <section>
                    <h3 class="font-sans font-bold text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">6. Kaynaklar: Resmi Teknik SEO Rehberleri</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <a href="https://developers.google.com/search/docs/fundamentals/how-search-works?hl=tr" target="_blank" rel="noopener noreferrer" class="block p-6 bg-[#0f172a] border border-gray-800 rounded-xl hover:border-blue-600 transition-colors group">
                             <div class="flex items-start justify-between mb-3">
                                <h4 class="font-bold text-white text-lg group-hover:text-blue-400 transition-colors">Google Arama Nasıl Çalışır? (Teknik Rehber)</h4>
                                <svg class="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                            <p class="text-xs text-gray-400 uppercase tracking-widest font-medium">Rehber: Google Search Central</p>
                        </a>
                        <a href="https://web.dev/articles/vitals?hl=tr" target="_blank" rel="noopener noreferrer" class="block p-6 bg-[#0f172a] border border-gray-800 rounded-xl hover:border-blue-600 transition-colors group">
                            <div class="flex items-start justify-between mb-3">
                                <h4 class="font-bold text-white text-lg group-hover:text-blue-400 transition-colors">Core Web Vitals Ölçümleme Kılavuzu</h4>
                                <svg class="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                            <p class="text-xs text-gray-400 uppercase tracking-widest font-medium">Rehber: web.dev / Google</p>
                        </a>
                        <a href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=tr" target="_blank" rel="noopener noreferrer" class="block p-6 bg-[#0f172a] border border-gray-800 rounded-xl hover:border-blue-600 transition-colors group">
                             <div class="flex items-start justify-between mb-3">
                                <h4 class="font-bold text-white text-lg group-hover:text-blue-400 transition-colors">JavaScript ve Arama Motoru Optimizasyonu</h4>
                                <svg class="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                             </div>
                             <p class="text-xs text-gray-400 uppercase tracking-widest font-medium">Rehber: Google Developers</p>
                        </a>
                         <a href="https://developers.google.com/search/docs/crawling-indexing/https/https-security?hl=tr" target="_blank" rel="noopener noreferrer" class="block p-6 bg-[#0f172a] border border-gray-800 rounded-xl hover:border-blue-600 transition-colors group">
                             <div class="flex items-start justify-between mb-3">
                                <h4 class="font-bold text-white text-lg group-hover:text-blue-400 transition-colors">HTTPS ile Sitenizi Güvende Tutun</h4>
                                <svg class="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                             <p class="text-xs text-gray-400 uppercase tracking-widest font-medium">Rehber: Google Search Central</p>
                        </a>
                    </div>
                </section>

                <!-- Footer Navigation -->
                <div class="mt-8 pt-8 border-t border-gray-200">
                    <a href="/tarama" class="flex items-center gap-2 text-[#3b82f6] hover:text-blue-700 font-bold text-lg group">
                        <span class="underline">İlk Adım: Tarama (Crawling)</span>
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        `,
        keyPoints: [
            { title: "Altyapı", desc: "Sitenin teknik temeli (Server, DNS, CDN) optimize edilir." },
            { title: "Bot Erişimi", desc: "Googlebot'un siteyi anlaması önündeki tüm engeller kaldırılır." },
            { title: "Hız (CWV)", desc: "Kullanıcı ve bot için açılış hızı maksimize edilir." },
            { title: "Verimlilik", desc: "Sunucu kaynakları ve tarama bütçesi doğru yönetilir." }
        ],
        relatedLinks: ["tarama", "indeksleme", "core-web-vitals", "yapisal-veri", "tarama-butcesi", "log-analizi", "siralama"],
        publishDate: "2024-01-02"
    },
    "icerik-optimizasyonu": {
        slug: "icerik-optimizasyonu",
        parent: null,
        title: "04. İçerik Optimizasyonu: Bilgi Kazancı",
        description: "İçerik Optimizasyonu; metnin sadece okunabilirlik açısından değil, Google'ın NLP (Doğal Dil İşleme) modelleri, semantik derinlik ve kullanıcı niyetine göre teknik olarak zenginleştirilmesi sürecidir.",
        content: `
            <div class="space-y-12">
                <!-- Section 1: H1/Direct Answer -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">1. İçeriğim Neden Rakiplerin Gerisinde Kalıyor?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Google artık metinleri sadece kelime bazlı değil, "anlamsal derinlik" ve "bilgi kazancı" (Information Gain) üzerinden değerlendiriyor. Rakiplerinizin yazdığı genel geçer bilgileri tekrar etmek sizi öne çıkarmaz. Başarı, kullanıcının o sayfadan ayrıldığında başka hiçbir siteye bakma ihtiyacı duymamasını sağlamaktır.</p>
                    
                    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-xl my-6">
                        <h4 class="text-indigo-900 font-bold mb-2">Uzman Görüşü: Yardımcı İçerik Sistemi</h4>
                        <p class="text-indigo-800 text-sm">Google'ın "Helpful Content Update" sistemi, AI tarafından üretilmiş düşük değerli içerikleri cezalandırır. İçeriğinize "İnsan Deneyimi" (Expert Knowledge) eklemek, bugün en büyük sıralama sinyalidir.</p>
                    </div>
                </section>

                <!-- Section 2: Step-by-Step List -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">2. Bilgi Kazancı Sağlayan İçerik Nasıl Hazırlanır?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Sıradan bir içeriği "otorite" seviyesine taşımak için izlediğimiz 3 adım:</p>
                    <div class="space-y-4">
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg bg-white">
                            <div class="text-2xl font-black text-gray-200">01</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Birincil Veri Kullanımı</h4>
                                <p class="text-sm text-gray-600">Herkesin bildiği teorileri değil, kendi vaka analizlerinizi (Case Study) veya anket sonuçlarınızı paylaşın.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg bg-white">
                            <div class="text-2xl font-black text-gray-200">02</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Chunking (Parçalara Bölme)</h4>
                                <p class="text-sm text-gray-600">Uzun metinleri NLP modellerinin kolayca anlayabileceği, net alt başlıklara ve listelere bölün.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg bg-white">
                            <div class="text-2xl font-black text-gray-200">03</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Medya Zenginleştirmesi & UX</h4>
                                <p class="text-sm text-gray-600">Dümdüz metin okumak zordur. Mesajınızı güçlendirmek için infografikler, videolar ve ekran görüntüleri ekleyin. Kullanıcıyı sayfada tutan her saniye, bir SEO sinyalidir.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section 3: Scenarios / Exceptions -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">3. "Çok Teknik mi yoksa Çok Basit mi?"</h3>
                    <div class="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <p class="text-sm text-gray-600">Doğru tonu belirlemek "Arama Niyeti" ile ilgilidir. "SEO Nedir" diye arayan birine kod örnekleri vermeyin, "Search Console API Kullanımı" arayan birine de temel tanımlar anlatmayın. Niyet, içeriğin teknik seviyesini belirler.</p>
                    </div>
                </section>

                <!-- Section 4: Comparison Table -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">4. Klasik SEO ile Modern İçerik Optimizasyonu Arasındaki Farklar Nelerdir?</h3>
                    <div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table class="w-full text-sm text-left leading-[1.5]">
                            <thead class="bg-gray-800 text-white font-bold uppercase text-xs">
                                <tr>
                                    <th class="px-6 py-4">Özellik</th>
                                    <th class="px-6 py-4">Eski SEO (Keyword Focus)</th>
                                    <th class="px-6 py-4">Modern SEO (Entity Focus)</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Strateji</td>
                                    <td class="px-6 py-4 text-gray-600">Kelime tekrarı (Stuffing).</td>
                                    <td class="px-6 py-4 text-gray-600">Konusal kapsam (Coverage).</td>
                                </tr>
                                <tr class="bg-gray-50 hover:bg-gray-100">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Metrik</td>
                                    <td class="px-6 py-4 text-gray-600">Hemen çıkma oranı.</td>
                                    <td class="px-6 py-4 text-gray-600">Dönüşüm ve derinlemesine okuma.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                
                <!-- Section 5: Strategic FAQ -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">5. Bilgi Kazancı ve İçerik Kalitesi Hakkında Sorular</h3>
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Kelime sayısı (Word Count) hala bir sıralama faktörü müdür?</p>
                            <p class="text-sm text-gray-600 leading-[1.6]">Hayır. 300 kelimeyle soruyu %100 cevaplıyorsanız, 3000 kelimelik "boş" bir yazıdan daha iyi sıralanırsınız. Önemli olan uzunluk değil, konunun ne kadar kapsamlı ele alındığıdır.</p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">AI ile içerik yazıp Google'da sıralanabilir miyim?</p>
                            <p class="text-sm text-gray-600 leading-[1.6]">Eğer AI'yı bir asistan olarak değil, sadece "kopyala-yapıştır" aracı olarak kullanıyorsanız kısa sürede düşüş yaşarsınız. AI metnine mutlaka uzman görüşü ve özgün veriler eklemelisiniz.</p>
                        </div>
                    </div>
                </section>
            </div>
        `,
        keyPoints: [
            { title: "Bilgi Kazancı", desc: "Benzersiz veri ve bakış açısı sunulmalıdır." },
            { title: "Modüler Yapı", desc: "Chunking and NLP dostu formatlama kullanılır." },
            { title: "Kapsam", desc: "Konuyu %100 kapsayan içerik ağları oluşturulur." },
            { title: "Güven (Trust)", desc: "Yazar otoritesi ve şeffaflık sinyalleri verilir." }
        ],
        relatedLinks: ["arama-niyeti", "semantik-yazim", "silo-mimarisi", "bilgi-kazanci", "topikal-otorite"],
        publishDate: "2024-01-05"
    },
    "topikal-otorite": {
        slug: "topikal-otorite",
        parent: "icerik-optimizasyonu",
        title: "Topikal Otorite (Topical Authority)",
        description: "Topikal Otorite (Topical Authority); bir sitenin tekil sayfalarda değil, belirli bir konu dikeyindeki (Niche) tüm alt başlıkları ve soruları kapsayarak 'Uçtan Uca Uzmanlık' sergilemesidir.",
        content: `
             <div class="space-y-12">
                <!-- Section 1 -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">1. Topikal Otorite Nedir ve SEO Stratejinizi Nasıl Dönüştürür?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Google, tekil sayfaların başarısından ziyade, domainin genelindeki bilgi birikimine odaklanır. Topikal Otorite; bir konuyu sadece yüzeysel tanımlarla değil, tüm alt başlıkları, yan kavramları ve detaylarıyla (Entity Coverage) ele alarak, o konuda internetteki "nihai referans noktası" olma stratejisidir.</p>
                    
                    <div class="grid md:grid-cols-2 gap-6 mb-8">
                        <div class="bg-purple-50 p-6 rounded-xl border border-purple-100">
                            <h4 class="font-bold text-purple-900 mb-3">Boşluk Bırakmamak</h4>
                            <p class="text-sm text-purple-800">Kullanıcının o konuyla ilgili sorabileceği en basit sorudan en teknik detaya kadar her şeyi yanıtlamak (Zero Void Strategy).</p>
                        </div>
                        <div class="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                            <h4 class="font-bold text-indigo-900 mb-3">İçerik Ağı</h4>
                            <p class="text-sm text-indigo-800">Rastgele yazılar yerine, birbiriyle bağlantılı ve hiyerarşik (Bölüm -> Konu -> Alt Konu) bir semantik ağ örmek.</p>
                        </div>
                    </div>
                </section>

                <!-- Section 2: Comparison Table -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">2. Standart Bir Blog mu Yoksa Otoriter Bir Bilgi Kaynağı mı?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Topikal otorite, rastgele yazılar yazmakla değil, bir konunun tüm katmanlarını bilinçli bir şekilde kapsamakla elde edilir. Bu fark, sitenizin Google gözündeki itibarını belirler.</p>
                    <div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table class="w-full text-sm text-left leading-[1.5]">
                            <thead class="bg-gray-800 text-white font-bold uppercase text-xs">
                                <tr>
                                    <th class="px-6 py-4">Özellik</th>
                                    <th class="px-6 py-4">Standart Blog Stratejisi</th>
                                    <th class="px-6 py-4">Topikal Otorite Stratejisi</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Anahtar Kelime</td>
                                    <td class="px-6 py-4 text-gray-600">Hacmi yüksek kelimelere rastgele saldırır.</td>
                                    <td class="px-6 py-4 text-gray-600">Bir konunun tamamını (tüm long-tail dahil) kapsar.</td>
                                </tr>
                                <tr class="bg-gray-50 hover:bg-gray-100">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">İç Linkleme</td>
                                    <td class="px-6 py-4 text-gray-600">Rastgele "bunu da oku" linkleri.</td>
                                    <td class="px-6 py-4 text-gray-600">Hiyerarşik ve anlamsal (Parent-Child) bağlantı.</td>
                                </tr>
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Hedef</td>
                                    <td class="px-6 py-4 text-gray-600">Trafik çekmek.</td>
                                    <td class="px-6 py-4 text-gray-600">O konuda "Go-to Source" (Başvuru Kaynağı) olmak.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <!-- Section 3: Step-by-Step List -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">3. Adım Adım Topikal Otorite Haritası Nasıl Oluşturulur?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Belli bir dikeyde uzmanlığınızı kanıtlamak için izlemeniz gereken stratejik yol haritası şu temel adımlardan oluşur:</p>
                    <div class="space-y-4">
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white">
                            <div class="text-2xl font-black text-gray-200">01</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Konu Haritası (Topic Mapping)</h4>
                                <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Merkeze "Ana Konuyu" (Seed Keyword) koyun ve etrafındaki tüm alt soruları (5W1H) çıkarıp bir harita oluşturun.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white">
                            <div class="text-2xl font-black text-gray-200">02</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Entity Gap Analizi</h4>
                                <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Rakiplerinizin değinmediği ama konunun parçası olan "eksik varlıkları" (Missing Entities) tespit edin.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white">
                            <div class="text-2xl font-black text-gray-200">03</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Pillar & Cluster Üretimi</h4>
                                <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Önce her şeyi özetleyen dev bir "Pillar Page" yazın, sonra detayları anlatan onlarca "Cluster Page" ile onu besleyin.</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <!-- Section 4: Visualizing the Map (Topic Map) -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">4. İdeal Bir Konu Kümesi (Cluster) Yapısı Nasıl Görünmelidir?</h3>
                    <p class="text-gray-600 mb-8 leading-[1.6] tracking-[-0.01em]">Topikal otorite, rastgele yazılarla değil, bir "merkez" etrafında örülen bilgi ağıyla kurulur. Aşağıdaki model, bir e-ticaret sitesinin "Kahve" dikeyinde nasıl otorite inşa edebileceğinin görsel simülasyonudur:</p>
                    
                    <div class="relative p-8 bg-gray-50 rounded-3xl border border-gray-100 overflow-hidden">
                        <div class="flex flex-col items-center gap-8">
                            <div class="z-10 bg-black text-white px-8 py-4 rounded-full font-bold shadow-xl ring-4 ring-gray-100" style="background-color: #000000;">
                                PILLAR: Kahve Dünyası & Kültürü
                            </div>
                            
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                                <div class="p-4 rounded-xl border bg-white border-indigo-200 text-center text-sm font-medium text-gray-700 shadow-sm">Demleme Teknikleri</div>
                                <div class="p-4 rounded-xl border bg-white border-indigo-200 text-center text-sm font-medium text-gray-700 shadow-sm">Çekirdek Türleri</div>
                                <div class="p-4 rounded-xl border bg-white border-indigo-200 text-center text-sm font-medium text-gray-700 shadow-sm">Ekipman Rehberi</div>
                                <div class="p-4 rounded-xl border bg-white border-indigo-200 text-center text-sm font-medium text-gray-700 shadow-sm">Yöresel Profiller</div>
                            </div>
                            
                            <p class="text-[11px] text-gray-400 italic text-center">Bu yapıdaki her alt sayfa (Cluster), hem birbirine hem de Pillar sayfaya "contextual link" ile bağlı olmalıdır.</p>
                        </div>
                    </div>
                </section>

                <!-- Section 5: Measuring Authority -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">5. Otoritenizin Arttığını Gösteren Gizli Algoritma Sinyalleren Nelerdir?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Topikal otorite sadece bir SEO metriği değil, bir marka algısıdır. Google'ın sizi o konuda "güvenli liman" olarak görüp görmediğini şu sinyallerden takip edebilirsiniz:</p>
                    <div class="space-y-4">
                        <div class="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-xl">
                            <div class="w-8 h-8 flex-shrink-0 rounded-full bg-black flex items-center justify-center text-white text-xs font-bold shadow-sm" style="background-color: #000000;">1</div>
                            <p class="text-sm text-gray-600 leading-[1.6]"><strong>Hızlı İndeksleme:</strong> Yeni yazdığınız bir yazı saatler içinde (backlink almadan) ilk sayfada beliriyorsa, Google o dikeye sizi "atamış" demektir.</p>
                        </div>
                        <div class="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-xl">
                            <div class="w-8 h-8 flex-shrink-0 rounded-full bg-black flex items-center justify-center text-white text-xs font-bold shadow-sm" style="background-color: #000000;">2</div>
                            <p class="text-sm text-gray-600 leading-[1.6]"><strong>Sıralama Kararlılığı:</strong> Algoritma güncellemelerinde (Core Updates) rakipleriniz düşerken siz yerinizi koruyor veya yükseliyorsanız, konusal temeliniz sağlamdır.</p>
                        </div>
                        <div class="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-xl">
                            <div class="w-8 h-8 flex-shrink-0 rounded-full bg-black flex items-center justify-center text-white text-xs font-bold shadow-sm" style="background-color: #000000;">3</div>
                            <p class="text-sm text-gray-600 leading-[1.6]"><strong>Düşük Hemen Çıkma (Bounce Rate):</strong> Kullanıcı, sorusuna sadece o yazınızda değil, iç linklediğiniz diğer yazılarda da cevap buluyorsa "derinlik" sağlanmıştır.</p>
                        </div>
                    </div>
                </section>
                
                <!-- Section 6: Strategic FAQ -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">6. Topikal Otorite ve İçerik Ağları Hakkında Sorular</h3>
                    <div class="space-y-4">
                         <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Niş bir konudayım, yazacak alt başlık bulamıyorum, ne yapmalıyım?</p>
                            <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Yatay genişleme (Shoulder Niches) yapın. Örneğin sadece "Deri Çanta" satıyorsanız, "Deri Bakımı", "Çanta Modası", "Kombin Önerileri" gibi yan dikeylerle otoritenizi genişletin.</p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Otoritemin arttığını hangi metrikten anlarım (DA hariç)?</p>
                            <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">En net sinyal: "New vs Returning Visitor" oranı ve "Direct Traffic" artışıdır. İnsanlar markanızı aratıp geliyorsa (Brand Search), Google sizi otorite kabul etmeye başlamış demektir.</p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Mevcut bir sitemde otorite inşasına nasıl başlarım?</p>
                            <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">En iyi performans gösteren 3-5 yazınızı bulun. Bunları birer "Pillar" olarak belirleyin ve eksik olan destekleyici alt konuları (Cluster) yazarak iç linkleme ile bağlayın. Mevcut gücü konsolide etmek her zaman sıfırdan başlamaktan hızlıdır.</p>
                        </div>
                    </div>
                </section>

                <!-- Footer Navigation -->
                <div class="mt-8 pt-8 border-t border-gray-200">
                    <a href="/eeat-sinyalleri" class="flex items-center gap-2 text-[#3b82f6] hover:text-blue-700 font-bold text-lg group">
                        <span class="underline">Sıradaki Adım: E-E-A-T ve Güven Sinyalleri</span>
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
             </div>
        `,
        keyPoints: [
            { title: "Tam Kapsam", desc: "Konuyla ilgili sorulmamış soru bırakılmaz." },
            { title: "Bağlamsal İlişki", desc: "Yazılar birbirini referans göstererek güçlenir." },
            { title: "Uzmanlık", desc: "Sitenin o niş alandaki 'gidilecek yer' (Go-to Source) olması sağlanır." },
            { title: "Sürdürülebilirlik", desc: "İçerik sürekli güncel ve genişleyen yapıda tutulur." }
        ],
        relatedLinks: ["icerik-optimizasyonu", "arama-niyeti", "semantik-yazim", "silo-mimarisi", "bilgi-kazanci"],
        publishDate: "2024-01-15"
    },
    "siralama": {
        slug: "siralama",
        parent: "teknik-seo",
        title: "Sıralama (Ranking) ve Algoritmik Değerleme",
        description: "Sıralama (Ranking); Google'ın kalite sinyallerini (Hız, İçerik, Otorite) analiz ederek, kullanıcının sorgusuna en alakalı ve en güvenilir yanıtı veren sayfaları hiyerarşik olarak listelemesidir.",
        content: `
            <div class="space-y-12">
                <!-- Section 1: Direct Answer -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">1. Google Web Sitelerini Hangi Kriterlere Göre Sıralar?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Sıralama algoritması statik bir liste değil, dinamik bir yarış pistidir. Google, yüzlerce sinyali (Hız, Güven, İçerik) anlık olarak işleyerek "o an" kullanıcıyı en çok mutlu edecek sonucu arar. Bu yarışta kalıcı olmak, algoritmayı değil, kullanıcıyı memnun etmekten geçer.</p>
                    
                    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-xl my-6">
                        <h4 class="text-indigo-900 font-bold mb-2">Uzman Görüşü: Sıralama Dinamiktir</h4>
                        <p class="text-indigo-800 text-sm">SEO'da "sıralamayı korumak" diye bir şey yoktur. Rakipleriniz sürekli iyileşiyor ve Google sürekli güncelleniyor. Durduğunuz an, gerilemeye başlarsınız.</p>
                    </div>
                </section>

                <!-- Section 2: Comparison Table -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">2. En Önemli Sıralama Faktörleri ve Etki Düzeyleri Nelerdir?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Google'ın bir sayfayı nerede konumlandıracağına karar verirken baktığı yüzlerce sinyal vardır. Başarılı bir strateji için bu sinyalleri gruplandırarak her birine doğru ağırlığı vermek gerekir.</p>
                    <div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table class="w-full text-sm text-left leading-[1.5]">
                            <thead class="bg-gray-800 text-white font-bold uppercase text-xs">
                                <tr>
                                    <th class="px-6 py-4">Kategori</th>
                                    <th class="px-6 py-4">Faktörler</th>
                                    <th class="px-6 py-4">Önemi</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Teknik (Technical)</td>
                                    <td class="px-6 py-4 text-gray-600">Site Hızı (CWV), Mobil Uyumluluk, HTTPS, Güvenli Tarama.</td>
                                    <td class="px-6 py-4 text-gray-600">Giriş Bileti (Olmazsa olmaz).</td>
                                </tr>
                                <tr class="bg-gray-50 hover:bg-gray-100">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">İçerik (On-Page)</td>
                                    <td class="px-6 py-4 text-gray-600">Niyet Uyumu, Derinlik, E-E-A-T, Özgünlük.</td>
                                    <td class="px-6 py-4 text-gray-600">Sıralamayı Belirleyen Ana Güç.</td>
                                </tr>
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Otorite (Off-Page)</td>
                                    <td class="px-6 py-4 text-gray-600">Backlink Kalitesi, Marka Bilinirliği, Sosyal Sinyaller.</td>
                                    <td class="px-6 py-4 text-gray-600">Rekabet avantajı ve güven oyu.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <!-- Section 3: Step-by-Step List -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">3. Sıralama Kaybı Durumunda İzlenmesi Gereken Acil Eylem Planı</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Eğer sitenizde ani bir sıralama kaybı yaşıyorsanız, panik yapmadan önce veriye dayalı bir teşhis süreci işletmelisiniz. Sorunun kaynağını bulmak için bu üç adımı izleyin:</p>
                    <div class="space-y-4">
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white">
                            <div class="text-2xl font-black text-gray-200">01</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Algoritma Güncellemesi Kontrolü</h4>
                                <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Google bir çekirdek güncelleme (Core Update) yayınladı mı? Eğer öyleyse, kayıp genel bir trend olabilir ve sitenize özgü olmayabilir.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white">
                            <div class="text-2xl font-black text-gray-200">02</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Teknik Sağlık Taraması</h4>
                                <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Search Console'da ani artan 404 hataları veya sunucu problemleri (5xx) var mı? Teknik bir arıza botları engelliyor olabilir.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white">
                            <div class="text-2xl font-black text-gray-200">03</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Rakip Analizi (Gap Analysis)</h4>
                                <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Sizi geçen rakip neyi daha iyi yaptı? Daha iyi bir başlık mı, daha hızlı bir site mi, yoksa daha kapsamlı bir tablo mu?</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <!-- Section 4: Scenarios / Exceptions -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">4. "Sitem Küçük, Rekabet Dev" - Düşük Otoriteyle Sıralanmak Mümkün mü?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6]">Eğer devasa bütçeli rakiplerle yarışıyorsanız, onlarla aynı kelimelerde doğrudan çarpışmak yerine "Long Tail" (Uzun Kuyruklu) ve "Zero Volume" (Sıfır Hacimli) kelimelere odaklanmalısınız. Google, spesifik ve derinlemesine yanıt veren küçük siteleri, o konudaki yüzeysel büyük sitelerin önüne geçirebilir. Bu "Topikal Otorite" ile "Genel Otoritenin" savaşıdır ve doğru semantik kurguyla küçük olan kazanabilir.</p>
                </section>

                <!-- Section 5: Strategic FAQ -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">5. Algoritma Güncellemeleri ve Sıralama Kararlılığı Hakkında Sorular</h3>
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Sıralamam düştü, hemen yeni backlink mi almalıyım?</p>
                            <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Hayır. Düşüşün sebebi genellikle teknik bir hata veya algoritma güncellemesidir. Önce Search Console'u ve sayfa hızını kontrol edin; link kalitesi en son bakılacak yerdir.</p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-lg">
                             <p class="font-bold text-gray-900 text-sm mb-1">H1 başlığını değiştirsem sıralamam ne zaman değişir?</p>
                            <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Googlebot sayfayı tekrar taradığında (Recrawl). Bu süre otoritenize göre 1 saat ile 1 hafta arasında değişebilir.</p>
                        </div>
                    </div>
                </section>

                <!-- Footer Navigation -->
                <div class="mt-8 pt-8 border-t border-gray-200">
                    <a href="/site-ici-seo" class="flex items-center gap-2 text-[#3b82f6] hover:text-blue-700 font-bold text-lg group">
                        <span class="underline">Bölüm Sonu: Site İçi SEO Temelleri</span>
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        `,
        keyPoints: [
            { title: "Alaka Düzeyi", desc: "Sorgu ile içerik arasındaki en iyi eşleşme hedeflenir." },
            { title: "Kullanıcı Deneyimi", desc: "Hız ve mobil uyumluluk sıralamayı doğrudan etkiler." },
            { title: "E-E-A-T", desc: "Uzmanlık ve güvenilirlik sinyalleri güçlendirilir." },
            { title: "Sürekli Optimizasyon", desc: "Sıralama anlık bir durumdur, kalıcı olması için güncellik gerekir." }
        ],
        relatedLinks: ["teknik-seo", "tarama", "indeksleme", "core-web-vitals", "yapisal-veri", "tarama-butcesi", "log-analizi"],
        publishDate: "2024-01-25"
    },
    "eeat-sinyalleri": {
        slug: "eeat-sinyalleri",
        parent: "site-disi-seo",
        title: "E-E-A-T ve Güven Sinyalleri",
        description: "E-E-A-T (Deneyim, Uzmanlık, Otorite, Güven); Google'ın özellikle YMYL (Sağlık, Finans) konularında içeriğin kaynağını ve doğruluğunu denetlemek için kullandığı kalite değerlendirme standardıdır.",
        content: `
             <div class="space-y-12">
                <!-- Section 1 -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">1. Güven (Trust) Neden En Önemli Sıralama Sinyalidir?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">İnternetteki bilgi kirliliği, arama motorlarını "kaynağın güvenilirliğini" sorgulamaya itmiştir. E-E-A-T çerçevesi; içeriği üreten kişinin yetkinliğini, sitenin genel itibarını ve sunulan bilginin doğruluğunu (Factuality) analiz eder. Güven, diğer tüm faktörlerin (Uzmanlık, Otorite) çatısıdır.</p>
                    <div class="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                        <h4 class="text-amber-900 font-bold mb-2">Kritik Uyarı: YMYL (Your Money or Your Life)</h4>
                        <p class="text-amber-800 text-sm">Sağlık ve Finans gibi konularda Google'ın toleransı sıfırdır. Bu alanlarda içerik üretenler, akademik referanslar ve doğrulanabilir yazar kimlikleri sunmak <strong>zorundadır</strong>.</p>
                    </div>
                </section>

                <!-- Section 2: Checklist Table -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">2. E-E-A-T Sinyallerini Güçlendiren Teknik Kontrol Listesi</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Sitenizin güvenilirliğini artırmak için sadece "doğru" yazmanız yetmez, Google'ın bu doğruluğu teyit etmesini sağlayacak kanıtlar sunmalısınız. İşte düşük ve yüksek kaliteli güven sinyalleri arasındaki farklar:</p>
                    <div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table class="w-full text-sm text-left leading-[1.5]">
                            <thead class="bg-gray-800 text-white font-bold uppercase text-xs">
                                <tr>
                                    <th class="px-6 py-4">Faktör</th>
                                    <th class="px-6 py-4">Düşük Kalite Sinyali</th>
                                    <th class="px-6 py-4">Yüksek Kalite Sinyali</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Yazar (Author)</td>
                                    <td class="px-6 py-4 text-gray-600">"Admin" veya isimsiz.</td>
                                    <td class="px-6 py-4 text-gray-600">Gerçek kişi, LinkedIn profili, Biyografi.</td>
                                </tr>
                                <tr class="bg-gray-50 hover:bg-gray-100">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">İçerik Kaynağı</td>
                                    <td class="px-6 py-4 text-gray-600">Başka sitelerden derleme (Scraping).</td>
                                    <td class="px-6 py-4 text-gray-600">Orijinal araştırma, anket, kişisel deneyim.</td>
                                </tr>
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Kurumsal Güven</td>
                                    <td class="px-6 py-4 text-gray-600">İletişim sayfası yok, SSL yok.</td>
                                    <td class="px-6 py-4 text-gray-600">Açık adres, telefon, ticaret sicil kaydı.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <!-- Section 3: Step-by-Step List -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">3. Dijital Dünyada Güven İnşa Etmek İçin Atılması Gereken Adımlar</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">E-E-A-T sinyallerini güçlendirmek uzun vadeli bir süreçtir. Markanızın itibarını dijital dünyada sağlamlaştırmak için bu temel adımlarla başlayabilirsiniz:</p>
                    <div class="space-y-4">
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white">
                            <div class="text-2xl font-black text-gray-200">01</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Yazar Kutusu Ekleyin</h4>
                                <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Her yazının altına, yazarın uzmanlığını kanıtlayan kısa bir biyografi ve sosyal medya linklerini ekleyin.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white">
                            <div class="text-2xl font-black text-gray-200">02</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Hakkımızda Sayfasını Güncelleyin</h4>
                                <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Şeffaf olun. Ekibinizi tanıtın, ofis fotoğraflarınızı koyun ve markanızın hikayesini anlatın.</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <!-- Section 4: Scenarios / Exceptions -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">4. "Yazarım Uzman Değil" - Otorite Sinyalleri Nasıl Oluşturulur?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6]">Eğer içeriği üreten kişi sektörde tanınan bir isim değilse, "Experience" (Deneyim) faktörüne odaklanın. Kendi çekimleriniz, vaka analizleriniz veya ürün kullanım testleriniz gibi AI'nın taklit edemeyeceği "birinci elden" veriler, yazarın isminden daha güçlü bir güven sinyali oluşturabilir. Ayrıca, içeriği bir dış uzmana inceletip "Expert Reviewed" (Uzman Tarafından İncelendi) ibaresi eklemek EEAT puanınızı hızla artıracaktır.</p>
                </section>

                <!-- Section 5: Strategic FAQ -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">5. Güven Sinyalleri ve E-E-A-T Hakkında Sorular</h3>
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Yazar profili için gerçek kişi bulamazsam ne olur?</p>
                            <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Marka profili kullanabilirsiniz ancak YMYL (Sağlık/Finans) konularında bu risklidir. Google, sorumluluğu üstlenen gerçek bir uzman görmek ister.</p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">E-E-A-T skorumu nereden görebilirim?</p>
                            <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Böyle bir skor yoktur. E-E-A-T, algoritmanın yüzlerce sinyale bakarak yaptığı genel bir değerlendirmedir; tek bir metrikle ölçülemez.</p>
                        </div>
                    </div>
                </section>

                <!-- Footer Navigation -->
                <div class="mt-8 pt-8 border-t border-gray-200">
                    <a href="/icerik-optimizasyonu" class="flex items-center gap-2 text-[#3b82f6] hover:text-blue-700 font-bold text-lg group">
                        <span class="underline">Konuyu Tamamla: İçerik Optimizasyonu Ana Sayfası</span>
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
             </div>
        `,
        keyPoints: [
            { title: "Gerçek Deneyim", desc: "AI değil, insan deneyimini yansıtan detaylar sunulur." },
            { title: "Yazar Otoritesi", desc: "İçeriği üreten kişinin yetkinliği ispatlanır." },
            { title: "Şeffaflık", desc: "Kaynak gösterme, iletişim bilgileri ve 'hakkımızda' sayfası eklenir." },
            { title: "İtibar", desc: "Dış dünyada (sosyal medya, forumlar) marka hakkında konuşulanlar takip edilir." }
        ],
        relatedLinks: ["site-disi-seo"],
        publishDate: "2024-01-20"
    },
    "bilgi-kazanci": {
        slug: "bilgi-kazanci",
        parent: "icerik-optimizasyonu",
        title: "Bilgi Kazancı (Information Gain)",
        description: "Bilgi Kazancı (Information Gain); bir içeriğin, internetteki diğer trilyonlarca içeriğe kıyasla sunduğu 'benzersiz veri', 'yeni bakış açısı' ve 'katma değer' miktarıdır.",
        content: `
             <div class="space-y-12">
                <!-- Section 1 -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">1. Bilgi Kazancı (Information Gain) Neden SEO'nun Yeni Altın Kuralıdır?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Arama motorları, dizinlerinde (Index) zaten var olan bilgiyi tekrar eden "kopya" içerikleri (Duplicate/Thin Content) filtreler. "Helpful Content" güncellemesi ile birlikte, kullanıcıya daha önce okumadığı bir şeyi sunmak (orijinal veri, uzman görüşü, yapısal farklılık) bir sıralama faktörü haline gelmiştir.</p>
                    
                    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-xl my-6">
                        <h4 class="text-indigo-900 font-bold mb-2">Uzman Görüşü: Konsensüsün Ötesine Geçmek</h4>
                        <p class="text-indigo-800 text-sm">Google artık "mutabakat" (consensus) bilgilerini, yani herkesin aynı şeyi söylediği verileri 'temel bilgi' olarak görüyor. Sıralama almak için bu temel bilginin üzerine ya yeni bir veri (vaka analizi) ya da farklı bir perspektif (eleştirel bakış) eklemelisiniz.</p>
                    </div>
                </section>

                <!-- Section 2: Comparison Table -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">2. Standart İçerik ile Yüksek Bilgi Kazancı Sağlayan İçerik Arasındaki Fark Nedir?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Google artık her yerde bulabileceği genel bilgileri (Consensus) ödüllendirmek yerine, üzerine yeni bir şey ekleyen içerikleri öne çıkarıyor. Aşağıdaki tablo, standart bir içerik ile yüksek bilgi kazancı sağlayan içerik arasındaki farkları göstermektedir.</p>
                    <div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table class="w-full text-sm text-left leading-[1.5]">
                            <thead class="bg-gray-800 text-white font-bold uppercase text-xs">
                                <tr>
                                    <th class="px-6 py-4">Ölçüt</th>
                                    <th class="px-6 py-4">Düşük Değerli İçerik</th>
                                    <th class="px-6 py-4">Yüksek Bilgi Kazancı</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Kaynak</td>
                                    <td class="px-6 py-4 text-gray-600">İlk sayfadaki sonuçların özeti (AI Rewrite).</td>
                                    <td class="px-6 py-4 text-gray-600">Birincil kaynak, vaka analizi, kişisel deneyim.</td>
                                </tr>
                                <tr class="bg-gray-50 hover:bg-gray-100">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Görüş</td>
                                    <td class="px-6 py-4 text-gray-600">Genel geçer doğrular (Consensus).</td>
                                    <td class="px-6 py-4 text-gray-600">Zıt görüşler, eleştirel analiz (Contrarian).</td>
                                </tr>
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Format</td>
                                    <td class="px-6 py-4 text-gray-600">Düz metin blokları.</td>
                                    <td class="px-6 py-4 text-gray-600">Tablolar, grafikler, interaktif araçlar.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <!-- Section 3: Step-by-Step List -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">3. Adım Adım Bilgi Kazancı Odaklı İçerik Üretme Rehberi</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">İçeriğinizi "aranmaya değer" kılan o eşsiz değeri (Unique Value Proposition) yaratmak için bu stratejik yaklaşımları uygulayabilirsiniz:</p>
                     <div class="space-y-4">
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white">
                            <div class="text-2xl font-black text-gray-200">01</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Orijinal Veri Madenciliği</h4>
                                <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Sektör raporları, kendi anketleriniz veya vaka analizlerinizle daha önce internette olmayan bir veri seti oluşturun.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white">
                            <div class="text-2xl font-black text-gray-200">02</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Kontrarian Yaklaşım</h4>
                                <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Herkesin "A" dediği yerde, "neden B olabileceğini" kanıtlarıyla sunarak konsensüs dışı, dikkat çekici bir perspektif yaratın.</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <!-- Section 4: Scenarios / Exceptions -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">4. "Konu Zaten Binlerce Kez Yazıldı" - Yeni Ne Denebilir?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6]">Eğer çok yazılmış bir konuda içerik üretiyorsanız, "karşılaştırma" (vs) veya "gerçek maliyet" (cost) gibi kullanıcıların en çok merak ettiği ama kimsenin net rakam vermediği alanlara odaklanın. Kendi deneyimlerinizden süzülen "yapılmaması gerekenler" listesi bile, binlerce "nasıl yapılır" rehberinden daha fazla bilgi kazancı sağlar.</p>
                </section>

                <!-- Section 5: Strategic FAQ -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">5. İçerik Özgünlüğü ve Yardımcı İçerik Sistemi Hakkında Sorular</h3>
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Rakibimden esinlenip kelimeleri değiştirsem özgün olur mu?</p>
                            <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Hayır. Bu "Patchwork İçerik"tir. Google, kelimeleri değil, sunulan bilginin değerini ölçer. Yeni bir veri veya bakış açısı eklemiyorsanız kopya sayılırsınız.</p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">AI ile yazılan içerik Bilgi Kazancı sağlar mı?</p>
                            <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Genellikle hayır. LLM'ler mevcut bilgiyi özetler. Bilgi kazancı için "insan deneyimi" veya "orijinal araştırma" gerekir ki bunu AI (henüz) yapamaz.</p>
                        </div>
                    </div>
                </section>

                <!-- Footer Navigation -->
                <div class="mt-8 pt-8 border-t border-gray-200">
                    <a href="/semantik-yazim" class="flex items-center gap-2 text-[#3b82f6] hover:text-blue-700 font-bold text-lg group">
                        <span class="underline">Sıradaki Adım: Semantik Yazım ve NLP</span>
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
             </div>
        `,
        keyPoints: [
            { title: "Veri Üretimi", desc: "Kendi araştırmalarınızla orijinal veri sağlanır." },
            { title: "Bakış Açısı", desc: "Konuya benzersiz bir yorum veya çözüm getirilir." },
            { title: "Kaynak Değeri", desc: "Başkalarının atıfta bulunacağı kalitede iş üretilir." },
            { title: "Kopya Önleme", desc: "AI tarafından üretilen jenerik içerikten kaçınılır." }
        ],
        relatedLinks: ["icerik-optimizasyonu", "arama-niyeti", "semantik-yazim", "silo-mimarisi", "topikal-otorite"],
        publishDate: "2024-01-12"
    },
    "site-ici-seo": {
        slug: "site-ici-seo",
        parent: null,
        title: "Site İçi (On-Page) SEO",
        description: "Site İçi (On-Page) SEO; web sayfalarının hem kullanıcılar hem de arama motorları için optimize edilmesi sürecidir. Başlıklar, HTML etiketleri, görseller ve içerik kalitesi bu kapsamdadır.",
        content: `
            <div class="space-y-12">
                <!-- Section 1: Direct Answer -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">1. On-Page SEO Neden Kontrol Edebileceğiniz En Güçlü Kalenizdir?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Google algoritmasını değiştiremezsiniz, rakiplerin ne yaptığına müdahale edemezsiniz. Ancak kendi sitenizin içeriğini (%100) kontrol edebilirsiniz. Site İçi SEO, dış faktörlerden bağımsız olarak, sitenizi "konunun en iyi kaynağı" haline getirme sanatıdır ve başarının en sağlam basamağıdır.</p>
                    
                    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-xl my-6">
                        <h4 class="text-indigo-900 font-bold mb-2">Uzman Görüşü: Kontrol Edebildiğiniz Tek Alan</h4>
                        <p class="text-indigo-800 text-sm">Google algoritmasını değiştiremezsiniz, rakiplerin backlink almasını engelleyemezsiniz. Ancak kendi sitenizin içeriğini ve kod yapısını tamamen kontrol edebilirsiniz. On-Page SEO, sizin "kalenizi" tahkim etmenizdir.</p>
                    </div>
                </section>

                <!-- Section 2: Comparison Table -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">2. Site İçi Optimizasyon ile Site Dışı SEO Arasındaki Temel Farklar Nelerdir?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">SEO çalışmalarını iki ana kola ayırdığımızda; biri kendi mülkünüzde yaptıklarınız (On-Page), diğeri ise dış dünyada markanızın nasıl algılandığıdır (Off-Page). İşte bu iki yaklaşımın temel farkları:</p>
                    <div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table class="w-full text-sm text-left leading-[1.5]">
                            <thead class="bg-gray-800 text-white font-bold uppercase text-xs">
                                <tr>
                                    <th class="px-6 py-4">Kriter</th>
                                    <th class="px-6 py-4">Site İçi (On-Page)</th>
                                    <th class="px-6 py-4">Site Dışı (Off-Page)</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Yapılan İşlem</td>
                                    <td class="px-6 py-4 text-gray-600">İçerik, HTML, Resimler.</td>
                                    <td class="px-6 py-4 text-gray-600">Backlinkler, Sosyal Medya, PR.</td>
                                </tr>
                                <tr class="bg-gray-50 hover:bg-gray-100">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Kontrol Gücü</td>
                                    <td class="px-6 py-4 text-gray-600">%100 Sizin Kontrolünüzde.</td>
                                    <td class="px-6 py-4 text-gray-600">Dolaylı Kontrol / Başkasının İnisiyatifi.</td>
                                </tr>
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Etki Süresi</td>
                                    <td class="px-6 py-4 text-gray-600">Hızlı düzenlenebilir, etkisi orta vadede görülür.</td>
                                    <td class="px-6 py-4 text-gray-600">Zor kazanılır, etkisi uzun vadeli olabilir.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <!-- Section 3: Step-by-Step List -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">3. Teknik On-Page SEO İçin Kritik Kontrol Listesi</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Her yeni sayfa yayımladığınızda veya mevcutları güncellerken, botların içeriği tam olarak anlayabilmesi için bu temel elementleri kontrol etmelisiniz:</p>
                    <div class="space-y-4">
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white">
                            <div class="text-2xl font-black text-gray-200">01</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Başlık (Title) & H1 Uyumu</h4>
                                <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Sayfanızın SEO başlığı (SERP'te görünen) ile ana başlığınızın (H1) aynı mesajı verdiğinden, ancak birebir kopya olmadığından emin olun.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white">
                            <div class="text-2xl font-black text-gray-200">02</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">URL Yapısı (Slug)</h4>
                                <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Kısa, açıklayıcı ve anahtar kelime içeren URL'ler kullanın. (Örn: /site-ici-seo yerine /seo-nedir-nasil-yapilir değil).</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white">
                            <div class="text-2xl font-black text-gray-200">03</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Görsel Optimizasyonu</h4>
                                <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Resimlerinizin dosya adlarını (silo-mimarisi.jpg) ve Alt etiketlerini (Silo Mimarisi Şeması) mutlaka doldurun.</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <!-- Section 4: Scenarios / Exceptions -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">4. "İçeriğim İyi Ama Sıralama Almıyor" - Eksik Parça Nedir?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6]">Eğer metniniz mükemmel ama hala sıralama almıyorsa, muhtemelen "Semantic Entities" (Anlamsal Varlıklar) veya "Internal Link" (İç Linkleme) dengesinde sorun vardır. Sayfanın sadece kendisini değil, sitemizdeki diğer sayfalarla olan bağını ve Google'ın o sayfayı hangi 'cluster' içinde konumlandırdığını analiz etmelisiniz. Bazen çözüm metinde değil, navigasyon yapısındadır.</p>
                </section>

                <!-- Section 5: Strategic FAQ -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">5. Site İçi Optimizasyon ve Sayfa Alakası Hakkında Sorular</h3>
                    <div class="space-y-4">
                         <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Anahtar kelimeyi H1'in en başında mı geçirmeliyim?</p>
                            <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Zorunlu değil ama önerilir. Kullanıcı sayfaya girer girmez aradığı şeyi bulduğunu hissetmelidir (UX sinyali). Ancak anlamsız cümleler kurmaktan kaçının.</p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Meta Description boş kalsa ne olur?</p>
                            <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Google içerikten bir kısmı seçip gösterir. Ancak tıklama oranını (CTR) artırma fırsatını kaçırmış olursunuz; kontrolü elinizde tutmak en iyisidir.</p>
                        </div>
                    </div>
                </section>

                <!-- Footer Navigation -->
                <div class="mt-8 pt-8 border-t border-gray-200">
                    <a href="/arama-niyeti" class="flex items-center gap-2 text-[#3b82f6] hover:text-blue-700 font-bold text-lg group">
                        <span class="underline">İlk Adım: Arama Niyeti Analizi</span>
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        `,
        keyPoints: [
            { title: "İçerik Kalitesi", desc: "Ziyaretçiyi tatmin eden derinlikte bilgi sunulur." },
            { title: "HTML Yapısı", desc: "H1-H6 başlıkları ve meta etiketler kusursuz kurgulanır." },
            { title: "Görsel SEO", desc: "Resimler sıkıştırılır ve alt etiketlerle anlamlandırılır." },
            { title: "İç Linkler", desc: "Sayfalar arası stratejik bağlantılar kurulur." }
        ],
        relatedLinks: [],
        publishDate: "2024-01-18"
    },
    "site-disi-seo": {
        slug: "site-disi-seo",
        title: "05. Site Dışı SEO ve Dijital Otorite",
        description: "Site Dışı (Off-Page) SEO; web sitenizin otoritesini ve güvenilirliğini artırmak amacıyla, site sınırları dışında gerçekleştirilen (Backlink, PR, Sosyal Sinyal) tüm optimizasyon süreçleridir.",
        content: `
             <div class="space-y-12">
                <!-- Section 1 -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">1. Site Dışı SEO ve Backlinkler Neden Dijital Otoritenin Temelidir?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Google'ın kurucuları (PageRank), web'i akademik bir dünya gibi modeller. Nasıl ki bir makale ne kadar çok ve saygın kaynaktan atıf alırsa o kadar değerlise, bir web sitesi de dış dünyadan aldığı kaliteli referanslarla (Backlink) yükselir. Bu, sizin değil, "başkasının" size kefil olmasıdır ve en güçlü güven sinyalidir.</p>
                    
                    <div class="grid md:grid-cols-2 gap-6 mb-8">
                        <div class="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                            <h4 class="font-bold text-emerald-900 mb-3">Doğal Referanslar</h4>
                            <p class="text-sm text-emerald-800">İçeriğinizin kalitesi sayesinde, sektördeki diğer otoritelerin size kendiliğinden atıfta bulunması (Editorial Links). En değerli backlink türüdür.</p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h4 class="font-bold text-gray-900 mb-3">Digital PR</h4>
                            <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Markanızın haber sitelerinde, bültenlerde ve röportajlarda yer alması. Link verilmese bile (Unlinked Mentions) Google bunu bir otorite sinyali olarak işler.</p>
                        </div>
                    </div>
                </section>

                <!-- Section 2 -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">2. Kaliteli Bir Backlink Profilini Tanımlayan Temel Metrikler Nelerdir?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Her link sitenize aynı değeri katmaz; bazen bir link sizi zirveye taşırken, kalitesiz bir referans sitenize zarar verebilir. Google, linkin geldiği kaynağın otoritesini ve konusal alakasını (Relevance) bu kriterlere göre ölçer:</p>

                    <div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table class="w-full text-sm text-left leading-[1.5]">
                            <thead class="bg-gray-800 text-white font-bold uppercase text-xs">
                                <tr>
                                    <th class="px-6 py-4">Metrik</th>
                                    <th class="px-6 py-4">Açıklama</th>
                                    <th class="px-6 py-4">Önemi</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Domain Authority (DA/DR)</td>
                                    <td class="px-6 py-4 text-gray-600">Link veren sitenin genel otorite puanı.</td>
                                    <td class="px-6 py-4 text-gray-600">Yüksek otoriteli siteden gelen link (örn: üniversite, haber sitesi) daha etkilidir.</td>
                                </tr>
                                <tr class="bg-gray-50 hover:bg-gray-100">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Relevance (Alaka)</td>
                                    <td class="px-6 py-4 text-gray-600">Link veren site ile sizin siteniz arasındaki konusal yakınlık.</td>
                                    <td class="px-6 py-4 text-gray-600">Bir yemek sitesinden SEO bloguna gelen linkin değeri düşüktür. Konusal bağ önemlidir.</td>
                                </tr>
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Anchor Text</td>
                                    <td class="px-6 py-4 text-gray-600">Linkin verildiği tıklanabilir metin.</td>
                                    <td class="px-6 py-4 text-gray-600">Doğal ve çeşitli olmalıdır. Sürekli "SEO Danışmanı" kelimesine link almak spam sinyalidir.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <!-- Section 3 -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">3. E-E-A-T ve Marka Sinyalleri Nasıl Güçlendirilir?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Google Güven (Trust) faktörünü hesaplarken sadece linklere değil, markanızın dijital dünyadaki genel duruşuna da bakar.</p>
                    
                    <div class="p-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl shadow-lg">
                        <div class="flex items-center gap-4 mb-4">
                            <span class="text-3xl">🛡️</span>
                            <h4 class="text-xl font-bold">Güven (Trust) İnşası</h4>
                        </div>
                        <ul class="space-y-3 text-gray-300">
                            <li class="flex gap-2">
                                <span class="text-green-400">✓</span>
                                Sosyal medya profillerinin aktif ve doğrulanmış olması.
                            </li>
                            <li class="flex gap-2">
                                <span class="text-green-400">✓</span>
                                Hakkımızda sayfalarının şeffaf, yazarların gerçek kişiler olması.
                            </li>
                            <li class="flex gap-2">
                                <span class="text-green-400">✓</span>
                                İşletme adının, adresinin ve telefonunun (NAP) tüm dizinlerde tutarlı olması.
                            </li>
                        </ul>
                    </div>
                </section>

                <!-- Section 4: Scenarios / Exceptions -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">4. "Negatif SEO Atakları" - Zararlı Linklerden Nasıl Korunulur?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6]">Rakipleriniz tarafından sitenize yönlendirilen binlerce düşük kaliteli (Spam) link, otoritenizi zedeleyebilir. Bu durumda panik yapmadan Search Console üzerinden zararlı link analizini yapmalı ve Google'ın "Disavow Tool" aracını kullanarak bu linkleri reddetmelisiniz. Ancak unutmayın, Google artık çoğu spam linki otomatik olarak göz ardı edebiliyor.</p>
                </section>

                <!-- Section 5: Strategic FAQ -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">5. Link İnşası ve Dijital PR Hakkında Stratejik Sorular</h3>
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Rakibim spam backlink alıp 1. sıraya çıkmış, ben de yapmalı mıyım?</p>
                            <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Asla. Bu geçici bir durumdur ("Google Dance" veya algoritma boşluğu). Bir sonraki güncellemede o site ceza (Penalty) alacaktır. Siz temiz kalın.</p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Footer'dan alınan sitewide linkler hala işe yarıyor mu?</p>
                            <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Çok risklidir. Google bunu genellikle "satın alınmış link" veya "link ağı" olarak algılar. Eğer doğal bir işbirliği değilse (örn: tasarımcı imzası), nofollow verin.</p>
                        </div>
                    </div>
                </section>

                <div class="mt-8 pt-8 border-t border-gray-200">
                     <a href="/yerel-seo" class="flex items-center gap-2 text-[#3b82f6] hover:text-blue-700 font-bold text-lg group">
                        <span class="underline">İnceleyin: Yerel SEO ve Harita Optimizasyonu</span>
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        `,
        keyPoints: [
            { title: "Backlink Kalite Metrikleri", desc: "Domain Authority (DA) yüksek kaynaklardan link alınır." },
            { title: "Doğal Profil", desc: "Organik ve çeşitlendirilmiş link yapısı kurulur." },
            { title: "Marka Sinyalleri", desc: "Markanızın dijitalde konuşulma oranı artırılır." },
            { title: "Dijital PR", desc: "Sektörel otorite oluşturmak için medya çalışmaları yapılır." }
        ],
        relatedLinks: ["eeat-sinyalleri"],
        parent: null,
        publishDate: "2024-01-22"
    },
    "yerel-seo": {
        slug: "yerel-seo",
        parent: null,
        title: "05. Yerel SEO ve Harita Optimizasyonu",
        description: "Yerel SEO; fiziksel bir konuma veya belirli bir coğrafi bölgeye hizmet veren işletmelerin, yerel arama sonuçlarında (Local Pack) ve haritalarda görünürlüğünü artırma çalışmasıdır.",
        content: `
            <div class="space-y-12">
                <!-- Section 1 -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">1. Yerel SEO Nedir ve İşletmenizi Haritalarda Nasıl Öne Çıkarır?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Kullanıcıların %46'sı Google'ı yerel bir işletme bulmak için kullanır. "Yakınımdaki restoran" aramasında çıkmıyorsanız, o müşteriyi fiziksel olarak da kaybetmişsinizdir. Yerel SEO, sadece tıklama almak değil, kapıdan içeri müşteri sokmak (Foot Traffic) için yapılan en doğrudan pazarlama yatırımıdır.</p>
                    
                    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-xl my-6">
                        <h4 class="text-indigo-900 font-bold mb-2">Uzman Görüşü: NAP-W Uyumu</h4>
                        <p class="text-indigo-800 text-sm">Yerel SEO'da en büyük hata, işletme bilgilerinin (Name, Address, Phone, Website) farklı platformlarda farklı formatlarda olmasıdır. Google bu tutarsızlığı bir 'güven sorunu' olarak görür. Bilgilerinizi bir virgülüne kadar her yerde aynı tutun.</p>
                    </div>
                </section>

                <!-- Section 2: Comparison Table -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">2. Genel SEO ile Yerel SEO Optimizasyonu Arasındaki Farklar Nelerdir?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Yerel aramalar, kullanıcıların satın alma niyetinin en yüksek olduğu anlardır. Standart bir SEO stratejisi ile yerel odaklı bir çalışma arasındaki en büyük farkları buradan inceleyebilirsiniz:</p>
                    <div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table class="w-full text-sm text-left leading-[1.5]">
                            <thead class="bg-gray-800 text-white font-bold uppercase text-xs">
                                <tr>
                                    <th class="px-6 py-4">Faktör</th>
                                    <th class="px-6 py-4">Genel SEO</th>
                                    <th class="px-6 py-4">Yerel SEO</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Hedef Kitle</td>
                                    <td class="px-6 py-4 text-gray-600">Global veya Ulusal kullanıcılar.</td>
                                    <td class="px-6 py-4 text-gray-600">Şehrinizdeki veya mahallenizdeki kişiler.</td>
                                </tr>
                                <tr class="bg-gray-50 hover:bg-gray-100">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Sıralama Sinyali</td>
                                    <td class="px-6 py-4 text-gray-600">Backlink ve İçerik derinliği.</td>
                                    <td class="px-6 py-4 text-gray-600">NAP Tutarlılığı, Yorumlar ve Konum yakınlığı.</td>
                                </tr>
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">SERP Görünümü</td>
                                    <td class="px-6 py-4 text-gray-600">Standart mavi linkler.</td>
                                    <td class="px-6 py-4 text-gray-600">Harita Paketi (Local Pack / Snack Pack).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <!-- Section 3: Step-by-Step List -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">3. Adım Adım Yerel Otorite ve Harita Görünürlüğü Artırma Rehberi</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Harita sonuçlarında üst sıralarda yer almak ve yerel müşterilerin güvenini kazanmak için bu üç kritik basamağı eksiksiz tamamlamanız gerekir:</p>
                    <div class="space-y-4">
                        <div class="bg-blue-50 border border-blue-100 p-4 rounded-xl">
                            <h4 class="font-bold text-blue-900 mb-2">Adım 1: Google İşletme Profili (GBP)</h4>
                            <p class="text-sm text-blue-800">Profilinizi %100 doldurun. Sadece adres değil; hizmet bölgeleri, ürün katalogları ve işletme açıklamasını (Keyword Focus) eksiksiz girin.</p>
                        </div>
                        <div class="bg-emerald-50 border border-emerald-100 p-4 rounded-xl">
                            <h4 class="font-bold text-emerald-900 mb-2">Adım 2: NAP Tutarlılığı</h4>
                            <p class="text-sm text-emerald-800">İşletmenizin adı, adresi ve telefonunun internetin her yerinde (Web sitesi, Facebook, Yellow Pages) "birebir aynı" olduğundan emin olun.</p>
                        </div>
                        <div class="bg-amber-50 border border-amber-100 p-4 rounded-xl">
                            <h4 class="font-bold text-amber-900 mb-2">Adım 3: Yorum Yönetimi</h4>
                            <p class="text-sm text-amber-800">Yorumlara (olumlu ya da olumsuz) mutlaka anahtar kelime içeren, çözüme odaklı ve nazik yanıtlar verin.</p>
                        </div>
                    </div>
                </section>

                <!-- Section 4: Scenarios / Exceptions -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">4. "Fiziksel Mağazam Yok" - Hizmet Bölgeleri Nasıl Optimize Edilir?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6]">Eğer fiziksel bir ofisiniz yoksa (temizlik şirketi, tesisatçı vb.), Google İşletme Profilinizde adresinizi gizleyip "Hizmet Bölgeleri" seçeneğini kullanmalısınız. Bu durumda otoriteniz, web sitenizdeki yerel içeriklerin kalitesi ve o bölgelerden aldığınız müşteri yorumlarıyla belirlenecektir. Çevrimiçi hizmet veren ama fiziksel ofisi olmayan işletmeler için anahtar, 'konum' odaklı landing page'ler oluşturmaktır.</p>
                </section>

                <!-- Section 5: Strategic FAQ -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">5. Yerel Arama ve Google İşletme Profili Hakkında Sorular</h3>
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Fiziki ofisim yok, ev adresimi göstersem sorun olur mu?</p>
                            <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Google My Business'ta adresi gizleyip "Hizmet Bölgesi" (Service Area) seçebilirsiniz. Ev adresini açık göstermek güvenlik ve güvenilirlik açısından önerilmez.</p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Farklı ilçeler için ayrı "Landing Page"ler açmalı mıyım?</p>
                            <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Eğer o ilçede fiziksel şubeniz veya özel bir operasyonunuz varsa evet. Ama sadece "Kadıköy SEO", "Üsküdar SEO" diye kopya sayfalar (Doorway Pages) açmak spam sebebidir.</p>
                        </div>
                    </div>
                </section>

                 <!-- Footer Navigation -->
                <div class="mt-8 pt-8 border-t border-gray-200">
                    <a href="/teknik-seo" class="flex items-center gap-2 text-[#3b82f6] hover:text-blue-700 font-bold text-lg group">
                        <span class="underline">Döngüyü Tamamla: Teknik SEO Altyapısı</span>
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        `,
        keyPoints: [
            { title: "Local Pack", desc: "Harita sonuçlarında ilk 3 sırada (Snack Pack) yer almak hedeflenir." },
            { title: "NAP Uyumu", desc: "Adres ve iletişim bilgilerinin dijital tutarlılığı sağlanır." },
            { title: "İtibar", desc: "Yıldız puanı ve yorumların sıralamaya etkisi yönetilir." },
            { title: "Konum Sayfaları", desc: "Web sitesinde her şube veya bölge için özel sayfalar açılır." }
        ],
        relatedLinks: [],
        publishDate: "2024-01-27"
    },
    "core-web-vitals": {
        slug: "core-web-vitals",
        parent: "teknik-seo",
        title: "Core Web Vitals ve Performans Mühendisliği",
        description: "Core Web Vitals; Google'ın kullanıcı deneyimini ölçmek için kullandığı, yükleme hızı (LCP), etkileşim gecikmesi (INP) ve görsel kararlılık (CLS) metriklerinden oluşan performans standartlarıdır.",
        content: `
            <div class="space-y-12">
                <!-- Section 1 -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">1. Core Web Vitals Neden Modern SEO'nun Teknik Temelidir?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Kullanıcılar 3 saniyeden geç yüklenen bir siteyi terk eder. Core Web Vitals, sadece Google'ın bir sıralama faktörü değil; kullanıcı tutma (Retention) ve dönüşüm (Conversion) oranlarının temel belirleyicisidir. Hızlı bir site, kullanıcıya "profesyonel ve güvenilir" olduğunuzu hissettirir.</p>
                    
                    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-xl my-6">
                        <h4 class="text-indigo-900 font-bold mb-2">Uzman Görüşü: Gerçek Kullanıcı Verileri (CrUX)</h4>
                        <p class="text-indigo-800 text-sm">Lighthouse skorlarına takılmayın. Google sıralamada sizin laboratuvar verilerinize (Lab Data) değil, Chrome kullanıcılarından gelen gerçek saha verilerine (Field Data) bakar. 28 günlük periyottaki gerçek kullanıcı deneyimi her şeydir.</p>
                    </div>
                </section>

                <!-- Section 2 -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">2. LCP, CLS ve INP Metrikleri İçin Kritik Performans Karşılaştırması</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Browser'ın bir sayfayı render ederken izlediği "Kritik Render Yolu" üzerinde her metriğin farklı bir ağırlığı vardır. İyi bir kullanıcı deneyimi için bu metotların dengeli uygulanması gerekir:</p>
                    <div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table class="w-full text-sm text-left leading-[1.5]">
                            <thead class="bg-gray-800 text-white font-bold uppercase text-xs">
                                <tr>
                                    <th class="px-6 py-4">Teknik Metot</th>
                                    <th class="px-6 py-4">İşleyiş Mantığı</th>
                                    <th class="px-6 py-4">SEO Etkisi</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Preload</td>
                                    <td class="px-6 py-4 text-gray-600">Kritik kaynakların (font, ana görsel) önceden yüklenmesi.</td>
                                    <td class="px-6 py-4 text-gray-600">LCP süresini doğrudan aşağı çeker.</td>
                                </tr>
                                <tr class="bg-gray-50 hover:bg-gray-100">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Preconnect</td>
                                    <td class="px-6 py-4 text-gray-600">Üçüncü taraf sunucularla (API, CDN) önceden el sıkışma.</td>
                                    <td class="px-6 py-4 text-gray-600">DNS ve TLS gecikmelerini elimine eder.</td>
                                </tr>
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Lazy Loading</td>
                                    <td class="px-6 py-4 text-gray-600">Görüntü alanı dışındaki varlıkların yüklenmesinin ertelenmesi.</td>
                                    <td class="px-6 py-4 text-gray-600">Bant genişliğini korur, başlangıç hızını artırır.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <!-- Section 3 -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">3. Adım Adım Sayfa Hızı ve Kullanıcı Deneyimi Optimizasyonu Rehberi</h3>
                    <div class="space-y-6">
                        <div class="p-5 border-l-4 border-blue-500 bg-blue-50 rounded-r-xl">
                            <h4 class="font-bold text-blue-900 mb-2">LCP ve TTFB Yönetimi</h4>
                            <p class="text-sm text-blue-800 leading-relaxed">Görsel varlıklar için <code>fetchpriority="high"</code> kullanın. CDN ve sunucu tarafı önbellekleme ile ilk bayt ulaşım süresini (TTFB) 200ms altına çekin.</p>
                        </div>
                        <div class="p-5 border-l-4 border-purple-500 bg-purple-50 rounded-r-xl">
                            <h4 class="font-bold text-purple-900 mb-2">CLS ve Görsel Stabilite</h4>
                            <p class="text-sm text-purple-800 leading-relaxed">Görüntülere 'aspect-ratio' veya sabit width/height değerleri atayarak layout kaymalarını engelleyin. Reklam alanlarını önceden rezerve edin.</p>
                        </div>
                        <div class="p-5 border-l-4 border-amber-500 bg-amber-50 rounded-r-xl">
                            <h4 class="font-bold text-amber-900 mb-2">INP ve Main Thread Optimizasyonu</h4>
                            <p class="text-sm text-amber-800 leading-relaxed">Uzun süren JavaScript görevlerini (Long Tasks) parçalara bölün veya Web Workers kullanarak ana iş parçacığını rahatlatın.</p>
                        </div>
                    </div>
                </section>

                <!-- Section 4 -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">4. "JS Framework Kullanımı" - SPA Sitelerde Performans Nasıl Korunur?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6]">React veya Next.js gibi frameworkler kullanırken en büyük risk, ana iş parçacığının (Main Thread) aşırı yüklenmesidir. Bu durumda 'Hydration' maliyetini düşürmek için 'Streaming SSR' veya 'Partial Hydration' gibi ileri seviye tekniklere odaklanmalısınız. Aksi halde teknik skorlarınız iyi olsa bile, kullanıcının hissettiği 'etkileşim gecikmesi' (INP) sıralamanızı aşağı çekecektir.</p>
                </section>

                <!-- Section 5 -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">5. Web Core Vitals ve Sayfa Deneyimi Hakkında Teknik Sorular</h3>
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Mobil ve masaüstü skorlarım neden bu kadar farklı?</p>
                            <p class="text-sm text-gray-600 leading-[1.6]">Çünkü Google, mobil testleri çok daha düşük işlemci ve internet hızıyla simüle eder (Throttling). Gerçek kullanıcı dünyası mobildir ve Google 'Mobile-First Indexing' felsefesiyle mobil skoru önceliklendirir.</p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Her sayfanın skoru ayrı ayrı mı hesaplanır?</p>
                            <p class="text-sm text-gray-600 leading-[1.6]">Evet, ancak Google eğer spesifik bir sayfa için yeterli veriye sahip değilse, aynı şablondaki diğer sayfaların verilerine veya tüm sitenin ortalama skoruna bakarak karara varabilir.</p>
                        </div>
                    </div>
                </section>
            </div>
        `,
        keyPoints: [
            { title: "Kritik Render Yolu", desc: "LCP ve TTFB optimizasyonu için kaynaklar sıralanır." },
            { title: "Görsel Kararlılık", desc: "CLS ve Aspect Ratio yönetimi sağlanır." },
            { title: "Etkileşim Reaktivitesi", desc: "INP ve Main Thread optimizasyonu yapılır." },
            { title: "Kaynak Önceliklendirme", desc: "Preload, Preconnect ve Lazy Loading stratejileri uygulanır." }
        ],
        relatedLinks: ["teknik-seo", "tarama", "indeksleme", "yapisal-veri", "tarama-butcesi", "log-analizi", "siralama"],
        publishDate: "2024-01-26"
    },
    "yapisal-veri": {
        slug: "yapisal-veri",
        parent: "teknik-seo",
        title: "Structured Data ve Varlık (Entity) Mühendisliği",
        description: "Yapısal Veri (Structured Data); arama motorlarına sayfa içeriğini daha iyi anlamlandırmaları için Schema.org standartlarında sunulan, kod tabanlı (JSON-LD) bir işaretleme dilidir.",
        content: `
             <div class="space-y-12">
                <!-- Section 1: H1/Direct Answer -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">1. Yapısal Veri (Schema) Google'ın Sitenizi Anlamasını Nasıl Sağlar?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Googlebot ne kadar zeki olursa olsun, hala bir bilgisayar programıdır. Yapısal veri, içeriğinizi onun "anadilinde" (JSON-LD) sunarak, hiçbir belirsizliğe yer bırakmadan içeriğinizi anlatmanızı sağlar. Bu netlik, sizi rakiplerinizden ayırarak "Zengin Sonuçlar" (Rich Snippets) ile ödüllendirilmenizi sağlar.</p>
                    
                    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-xl my-6">
                        <h4 class="text-indigo-900 font-bold mb-2">Uzman Görüşü: Anlamsal Web'in Dili</h4>
                        <p class="text-indigo-800 text-sm">Google artık bir "Arama Motoru" değil, bir "Cevap Motoru"dur. Schema işaretlemeleri, içeriğinizi Google'ın Bilgi Grafiği'ne (Knowledge Graph) bağlayan köprülerdir.</p>
                    </div>
                </section>

                <!-- Section 2: Comparison Table -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">2. En Çok Kullanılan Şema Türleri ve SERP Üzerindeki Etkileri</h3>
                    <div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table class="w-full text-sm text-left leading-[1.5]">
                            <thead class="bg-gray-800 text-white font-bold uppercase text-xs">
                                <tr>
                                    <th class="px-6 py-4">Şema Tipi (Entity)</th>
                                    <th class="px-6 py-4">Teknik Fonksiyon</th>
                                    <th class="px-6 py-4">Görünürlük (SERP) Etkisi</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Organization</td>
                                    <td class="px-6 py-4 text-gray-600">Marka kimliğini ve sosyal profilleri tanımlar.</td>
                                    <td class="px-6 py-4 text-gray-600">Knowledge Panel (Sağ taraftaki bilgi kutusu).</td>
                                </tr>
                                <tr class="bg-gray-50 hover:bg-gray-100">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Article / BlogPosting</td>
                                    <td class="px-6 py-4 text-gray-600">Haber ve makale içeriğini etiketler.</td>
                                    <td class="px-6 py-4 text-gray-600">Top Stories (Haberler) ve Discover akışı.</td>
                                </tr>
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">FAQPage</td>
                                    <td class="px-6 py-4 text-gray-600">Sıkça sorulan soruları kodlar.</td>
                                    <td class="px-6 py-4 text-gray-600">Sonuç altında açılır-kapanır soru listesi.</td>
                                </tr>
                                <tr class="bg-gray-50 hover:bg-gray-100">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Product</td>
                                    <td class="px-6 py-4 text-gray-600">Fiyat, stok ve yorum bilgisini sunar.</td>
                                    <td class="px-6 py-4 text-gray-600">Yıldızlı değerlendirme, fiyat ve "Stokta" ibaresi.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <!-- Section 3: Step-by-Step List -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">3. Adım Adım JSON-LD İşaretleme ve Hata Denetimi Süreci</h3>
                    <div class="space-y-4">
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white">
                            <div class="text-2xl font-black text-gray-200">01</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">JSON-LD Kodunu Oluşturun</h4>
                                <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Google Markup Helper veya teknikseo.com gibi araçları kullanarak, sayfanıza uygun JSON-LD kod bloğunu hazırlayın.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white">
                            <div class="text-2xl font-black text-gray-200">02</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Kodu Sayfaya Ekleyin</h4>
                                <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Oluşturduğunuz script'i HTML'inizin <code>&lt;head&gt;</code> veya <code>&lt;body&gt;</code> bölümüne yapıştırın. WordPress kullanıyorsanız eklenti (Yoast/RankMath) kullanın.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white">
                            <div class="text-2xl font-black text-gray-200">03</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Rich Results Test ile Doğrulayın</h4>
                                <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Kodun hatasız çalıştığını ve Google tarafından okunabildiğini "Rich Results Test" aracıyla mutlaka kontrol edin.</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <!-- Section 4: Scenarios / Exceptions -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">4. "Yanlış Şema Kullanımı" - Manuel İşlemlerden Nasıl Kaçınılır?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6]">İçinde bulunmadığınız bir özelliği (örn: stokta olmayan bir ürünü var gibi göstermek) şema ile işaretlemek 'Spammy Structured Data' cezasına yol açabilir. Her zaman kullanıcıya gösterilen içerik ile kodda sunulan içeriğin %100 örtüştüğünden emin olun. Yanıltıcı şemalar kısa vadede Rich Snippet getirse de uzun vadede domain güvenini bitirir.</p>
                </section>

                <!-- Section 5: Strategic FAQ -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">5. Yapısal Veri ve Zengin Sonuçlar Hakkında Sorular</h3>
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Şema ekledim ama yıldızlarım hala çıkmıyor, neden?</p>
                            <p class="text-sm text-gray-600 leading-[1.6]">Şema kodu eklemek Google'a bir 'öneridir'. Google sitenizin kalitesine, güvenine ve sorgu alakasın bakarak bu özelliği gösterip göstermeyeceğine karar verir. Sabırlı olun ve teknik doğruluğu test edin.</p>
                        </div>
                    </div>
                </section>

                <!-- Footer Navigation -->
                <div class="mt-8 pt-8 border-t border-gray-200">
                    <a href="/tarama-butcesi" class="flex items-center gap-2 text-[#3b82f6] hover:text-blue-700 font-bold text-lg group">
                        <span class="underline">Sıradaki Adım: Tarama Bütçesi</span>
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        `,
        keyPoints: [
            { title: "Knowledge Graph", desc: "Verinin küresel bilgi ağına entegrasyonu sağlanır." },
            { title: "JSON-LD Mimarisi", desc: "Kod kirliliği yaratmayan hiyerarşik işaretleme kullanılır." },
            { title: "SameAs Bağlantısı", desc: "Dijital kimliklerin semantik eşleşmesi yapılır." },
            { title: "GEO Uyumluluğu", desc: "Yapay zeka modelleri için veri servisi oluşturulur." }
        ],
        relatedLinks: ["teknik-seo", "tarama", "indeksleme", "core-web-vitals", "tarama-butcesi", "log-analizi", "siralama"],
        publishDate: "2024-01-24"
    },
    "tarama-butcesi": {
        slug: "tarama-butcesi",
        parent: "teknik-seo",
        title: "Crawl Budget (Tarama Bütçesi) Stratejileri",
        description: "Tarama Bütçesi (Crawl Budget); arama motoru botlarının bir web sitesini taramak için ayırdığı kaynak ve zaman sınırıdır. Özellikle büyük ölçekli ve e-ticaret siteleri için kritik bir optimizasyon alanıdır.",
        content: `
            <div class="space-y-12">
                <!-- Section 1: Direct Answer -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">1. Tarama Bütçesi (Crawl Budget) Neden Büyük Siteler İçin Hayatidir?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Googlebot'un vakti kısıtlıdır. Eğer bu değerli vakti gereksiz teknolojik çöpleri taramakla harcarsa, asıl para kazandıracak ürünlerinize veya makalelerinize sıra gelmeyebilir. Tarama bütçesi yönetimi, Googlebot'u "en değerli" sayfalarınıza yönlendirme sanatıdır.</p>
                    
                    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-xl my-6">
                        <h4 class="text-indigo-900 font-bold mb-2">Uzman Görüşü: Bütçe Kimin İçin Kritik?</h4>
                        <p class="text-indigo-800 text-sm">1.000 sayfadan az içeriği olan küçük siteler için tarama bütçesi genelde sorun değildir. Ancak milyonlarca URL'e sahip e-ticaret siteleri veya haber portalları için "hayati" bir metriktir.</p>
                    </div>
                </section>

                <!-- Section 2: Comparison Table -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">2. Bütçe Dostu Mimari ile Bütçe Katili Teknik Hatalar Arasındaki Fark</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Botların sitenizde ne kadar süre kalacağını belirleyen sadece sizin bütçeniz değil, sitenizin teknik hantallığıdır. İşte tarama bütçesini verimli kullanan ve tüketen temel farklar:</p>
                    <div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table class="w-full text-sm text-left leading-[1.5]">
                            <thead class="bg-gray-800 text-white font-bold uppercase text-xs">
                                <tr>
                                    <th class="px-6 py-4">Durum</th>
                                    <th class="px-6 py-4">Bütçe Tüketen (Killer)</th>
                                    <th class="px-6 py-4">Bütçe Koruyan (Saver)</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">URL Yapısı</td>
                                    <td class="px-6 py-4 text-gray-600">Parametre çöplüğü (?id=123&color=red).</td>
                                    <td class="px-6 py-4 text-gray-600">Temiz, statik URL'ler (/kirmizi-elbise).</td>
                                </tr>
                                <tr class="bg-gray-50 hover:bg-gray-100">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Yönlendirmeler</td>
                                    <td class="px-6 py-4 text-gray-600">Zincirleme yönlendirmeler (301 -> 301 -> 200).</td>
                                    <td class="px-6 py-4 text-gray-600">Doğrudan hedef URL'e tek 301.</td>
                                </tr>
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Sunucu Yanıtı</td>
                                    <td class="px-6 py-4 text-gray-600">Yavaş yanıt (500ms+), Time-out hataları.</td>
                                    <td class="px-6 py-4 text-gray-600">Hızlı yanıt (200ms altı), HTTP 2/3 desteği.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <!-- Section 3: Step-by-Step List -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">3. Adım Adım Tarama Bütçesi Verimliliği Artırma Stratejisi</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Googlebot'un sitenizden "mutlu" ayrılmasını ve en önemli sayfalarınızı keşfetmesini sağlamak için bu stratejik temizlik adımlarını izlemelisiniz:</p>
                    <div class="space-y-4">
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white">
                            <div class="text-2xl font-black text-gray-200">01</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Log Analizi Yapın</h4>
                                <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Botların hangi sayfaları en çok ziyaret ettiğini, hangilerini "pas geçtiğini" sunucu loglarından çıkarın. (Örn: Gereksiz admin sayfaları taranıyor olabilir).</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white">
                            <div class="text-2xl font-black text-gray-200">02</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Robots.txt ile Yönlendirin</h4>
                                <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Sitenizde taranması gerekmeyen (Sepet, Kullanıcı Profili, Arama Sonuçları) alanları "Disallow" komutuyla botlara kapatın.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white">
                            <div class="text-2xl font-black text-gray-200">03</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Orphan Page (Yetim Sayfa) Temizliği</h4>
                                <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Hiçbir yerden link almayan sayfalar, botlar için çıkmaz sokaktır. Ya link verin ya da kaldırın.</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <!-- Section 4: Scenarios / Exceptions -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">4. "Yeni İçerik İndekslenmiyor" - Bütçe Sorunu Nasıl Tespit Edilir?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6]">Eğer yeni yayınladığınız sayfalar günler geçmesine rağmen taranmıyorsa, Search Console 'Tarama İstatistikleri' raporuna bakın. Eğer bot her gün binlerce 404 sayfasına veya gereksiz filtre URL'sine gidiyorsa, bütçeniz orada tükeniyor demektir. Çözüm, Robots.txt ile bu alanları kesin olarak kapatmaktır.</p>
                </section>

                <!-- Section 5: Strategic FAQ -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">5. Tarama Bütçesi ve Bot Yönetimi Hakkında Sorular</h3>
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Indexing API kullanmak tarama bütçesi için riskli mi?</p>
                            <p class="text-sm text-gray-600 leading-[1.6]">Haber siteleri için önerilir, ancak standart siteler için aşırı kullanım botları yorabilir. En iyi yol, temiz bir site haritası ve hızlı bir sunucudur.</p>
                        </div>
                    </div>
                </section>

                <!-- Footer Navigation -->
                <div class="mt-8 pt-8 border-t border-gray-200">
                    <a href="/log-analizi" class="flex items-center gap-2 text-[#3b82f6] hover:text-blue-700 font-bold text-lg group">
                        <span class="underline">Sıradaki Adım: Log Analizi Teknikleri</span>
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        `,
        keyPoints: [
            { title: "Verimlilik", desc: "Bot kaynaklarının boşa harcanması engellenir." },
            { title: "Hız", desc: "Sunucu yanıt süresi iyileştirilerek tarama kapasitesi artırılır." },
            { title: "Sinyal Kalitesi", desc: "Düşük kaliteli URL'ler taranmaktan men edilir." },
            { title: "İndeks Hızı", desc: "Yeni içeriklerin dizine girme süresi kısalır." }
        ],
        relatedLinks: ["teknik-seo", "tarama", "indeksleme", "core-web-vitals", "yapisal-veri", "log-analizi", "siralama"],
        publishDate: "2024-01-23"
    },
    "log-analizi": {
        slug: "log-analizi",
        parent: "teknik-seo",
        title: "Log Analizi ve Bot Davranışları",
        description: "Log Analizi; web sunucusu kayıtlarını (Access Logs) inceleyerek, arama motoru botlarının (Googlebot, Bingbot) site üzerindeki davranışlarını, tarama frekansını ve karşılaştığı hataları analiz etme yöntemidir.",
        content: `
            <div class="space-y-12">
                <!-- Section 1: H1/Direct Answer -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">1. Sunucu Log Analizi ile Bot Davranışları Nasıl Çözümlenir?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Search Console verileri (örneklendirilmiş/sampled) size sadece Google'ın "göstermek istediği" kadarını sunar. Oysa teknik SEO'da başarı, tahminlere değil kesin verilere dayanır. Log kayıtları, botların sitenizde attığı her adımı, milisaniye cinsinden ve %100 doğrulukla (Exact Match Data) görmenizi sağlayan tek yerdir. Görünmez hataları ve bütçe kaçaklarını yakalamak için vitrine değil, bu kara kutuya bakmalısınız.</p>
                    
                    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-xl my-6">
                        <h4 class="text-indigo-900 font-bold mb-2">Uzman Görüşü: Görünmeyeni Görmek</h4>
                        <p class="text-indigo-800 text-sm">Çoğu SEO projesi sadece arayüze odaklanır. Oysa 500 hataları, sonsuz yönlendirme döngüleri (Redirect Loops) ve bütçe yiyen parametre tuzakları (Spider Traps) sadece loglarda görünür.</p>
                    </div>
                </section>

                <!-- Section 2: Table (Comparison) -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">2. Search Console Verileri ile Ham Sunucu Logları Arasındaki Farklar</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Çoğu SEO uzmanı sadece Google Search Console verilerine güvenir, ancak teknik sorunları kökünden çözmek için sunucu seviyesindeki ham veriye ihtiyacınız vardır. İşte bu iki veri kaynağı arasındaki temel farklar:</p>
                    <div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table class="w-full text-sm text-left leading-[1.5]">
                            <thead class="bg-gray-800 text-white font-bold uppercase text-xs">
                                <tr>
                                    <th class="px-6 py-4">Özellik</th>
                                    <th class="px-6 py-4">Search Console (GSC)</th>
                                    <th class="px-6 py-4">Log Analizi</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Veri Doğruluğu</td>
                                    <td class="px-6 py-4 text-gray-600">Örneklem (Sampled) veri sunar.</td>
                                    <td class="px-6 py-4 text-gray-600">%100 Kesin (Raw) veri sunar.</td>
                                </tr>
                                <tr class="bg-gray-50 hover:bg-gray-100">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Zamanlama</td>
                                    <td class="px-6 py-4 text-gray-600">2-3 gün gecikmeli gelir.</td>
                                    <td class="px-6 py-4 text-gray-600">Gerçek zamanlı (Real-time) izlenebilir.</td>
                                </tr>
                                <tr class="bg-white hover:bg-gray-50">
                                    <td class="px-6 py-4 font-mono font-bold text-gray-900">Kapsam</td>
                                    <td class="px-6 py-4 text-gray-600">Sadece Googlebot'u gösterir.</td>
                                    <td class="px-6 py-4 text-gray-600">Tüm botları (Bing, Yandex, Ahrefs) ve kullanıcıları gösterir.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <!-- Section 3: Step-by-Step List -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">3. Adım Adım Teknik SEO Denetimi ve Log Dosyası İşleme Rehberi</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6] tracking-[-0.01em]">Sunucu loglarını anlamlandırarak teknik bir avantaj elde etmek için şu iş akışını takip edebilirsiniz:</p>
                    <div class="space-y-4">
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white">
                            <div class="text-2xl font-black text-gray-200">01</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Veri Toplama (Collection)</h4>
                                <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Sunucudan (Nginx/Apache) <code>access.log</code> dosyalarını son 30 günlük periyot için dışarı aktarın.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white">
                            <div class="text-2xl font-black text-gray-200">02</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">User-Agent Filtreleme</h4>
                                <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Dosyayı Excel veya Screaming Frog Log Analyzer ile açın. Sadece "Googlebot" içeren satırları filtreleyin (Spoofing kontrolü yapmayı unutmayın).</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white">
                            <div class="text-2xl font-black text-gray-200">03</div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-2">Anomali Tespiti</h4>
                                <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">En çok taranan sayfalar ile en önemli sayfalarınız örtüşüyor mu? Önemsiz etiket sayfaları bütçeyi mi yiyor?</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section 4: Scenarios / Exceptions -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">4. "Ani Tarama Düşüşü" - Botların Siteden Uzaklaşma Sebebi Nedir?</h3>
                    <p class="text-gray-600 mb-6 leading-[1.6]">Loglarda bot trafiğinin aniden kesildiğini görüyorsanız, sunucu tarafında bir güvenlik duvarının (WAF/Cloudflare) Googlebot IP'lerini yanlışlıkla 'spam' olarak işaretleyip bloklamış olma ihtimali yüksektir. Bu durumu manuel olarak kontrol edip 'Google Verified Bot' listesini beyaz listeye (allowlist) almalısınız.</p>
                </section>

                <!-- Section 5: Strategic FAQ -->
                <section>
                    <h3 class="font-serif text-2xl mt-12 mb-6 text-foreground border-b border-gray-200 pb-2">5. Log Analizi ve Teknik Hata Ayıklama Hakkında Sorular</h3>
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Log dosyam çok büyük, nasıl açabilirim?</p>
                            <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Excel 1 milyon satırı kaldırmaz. "Screaming Frog Log Analyzer" veya "Splunk" gibi profesyonel araçlar kullanmalı veya dosyayı günlere bölmelisiniz.</p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="font-bold text-gray-900 text-sm mb-1">Her gün log analizi yapmalı mıyım?</p>
                            <p class="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">Hayır. Ayda bir kez veya büyük bir site değişikliği/göç (Migration) sonrası yapmak yeterlidir. Ancak 5xx hataları için sunucu tarafından otomatik alarm kurmalısınız.</p>
                        </div>
                    </div>
                </section>

                 <!-- Footer Navigation -->
                 <div class="mt-8 pt-8 border-t border-gray-200">
                    <a href="/teknik-seo" class="flex items-center gap-2 text-[#3b82f6] hover:text-blue-700 font-bold text-lg group">
                        <span class="underline">Teknik SEO Ana Başlığına Dön</span>
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        `,
        keyPoints: [
            { title: "Görünmez Veri", desc: "Search Console'un göstermediği teknik hatalar yakalanır." },
            { title: "Bütçe Analizi", desc: "Tarama bütçesini tüketen verimsiz sayfalar (Waste) tespit edilir." },
            { title: "Status Code", desc: "4xx ve 5xx yanıtları anlık olarak izlenir." },
            { title: "Davranış Modeli", desc: "Botların siteyi hangi frekansta ziyaret ettiği ölçülür." }
        ],
        relatedLinks: ["teknik-seo", "tarama", "indeksleme", "core-web-vitals", "yapisal-veri", "tarama-butcesi", "siralama"],
        publishDate: "2024-01-28"
    }
};
