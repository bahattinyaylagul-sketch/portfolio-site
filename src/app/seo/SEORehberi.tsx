/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const tableOfContents = [
    { id: "seo-nedir", title: "01. SEO Nedir?" },
    { id: "nasil-calisir", title: "02. Tarama & Dizinleme" },
    { id: "uc-temel-alan", title: "03. On-Page, Off-Page & Teknik" },
    { id: "seo-vs-ppc", title: "04. SEO vs SEM/PPC" },
    { id: "metrikler", title: "05. Metrikler & Araçlar" },
    { id: "yapay-zeka", title: "06. AI & GEO" },
    { id: "site-turleri", title: "07. Site Türüne Göre SEO" },
];

export default function SEORehberi() {
    const [activeSection, setActiveSection] = useState("seo-nedir");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
        );
        const timer = setTimeout(() => {
            tableOfContents.forEach((item) => {
                const el = document.getElementById(item.id);
                if (el) observer.observe(el);
            });
        }, 100);
        return () => { observer.disconnect(); clearTimeout(timer); };
    }, []);

    return (
        <section className="py-20 bg-white" id="seo-rehberi">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-[280px_1fr] gap-12">

                    {/* Sol: Sticky TOC */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-28">
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">İçindekiler</h3>
                            <nav>
                                <ul className="space-y-2">
                                    {tableOfContents.map((item) => (
                                        <li key={item.id}>
                                            <a
                                                href={`#${item.id}`}
                                                className={`block py-2 px-4 rounded-lg text-sm transition-all duration-200 ${
                                                    activeSection === item.id
                                                        ? "bg-gray-900 text-white font-medium"
                                                        : "text-gray-600 hover:bg-gray-100"
                                                }`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                                                    setActiveSection(item.id);
                                                }}
                                            >
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <div className="mt-8 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-white">
                                <h4 className="font-semibold mb-2">Ücretsiz SEO Analizi</h4>
                                <p className="text-sm text-gray-300 mb-4">Sitenizin organik performansını detaylıca analiz edelim.</p>
                                <a href="#analiz" className="block text-center py-2 px-4 bg-white text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors">
                                    Analiz İste
                                </a>
                            </div>
                        </div>
                    </aside>

                    {/* Sağ: İçerik */}
                    <main>
                        <div className="space-y-12">

                            <section id="seo-nedir" className="scroll-mt-32 p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="flex items-center gap-4 mb-6"><span className="text-sm font-medium text-gray-400">01</span><div className="h-px flex-1 bg-gray-100" /></div>
                                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 tracking-tight">SEO Nedir ve Ne İşe Yarar?</h2>
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>SEO (Search Engine Optimization), bir web sitesinin Google gibi arama motorlarında daha üst sıralarda görünmesi için içeriğini, teknik yapısını ve otorite sinyallerini iyileştirme pratiğidir. Temel amacı, ücretli reklam harcamadan organik arama sonuçlarından kaliteli trafik kazanmaktır.</p>
                                    <p>SEO ücretsizdir, ama bedava değildir. Reklam bütçesi ödemezsiniz; karşılığında zaman, emek ve strateji harcarsınız. Bu yüzden SEO&apos;yu &quot;hızlı çözüm&quot; olarak değil, bileşik getiri sağlayan uzun vadeli bir yatırım olarak düşünmek gerekir.</p>
                                    <p>Pratik olarak SEO dört ana bileşenden oluşur: teknik optimizasyon (sitenin taranabilir ve hızlı olması), içerik stratejisi (doğru anahtar kelimelerle kullanıcı sorularını yanıtlamak), bağlantı oluşturma (backlink ile otorite kazanmak) ve marka temsilinin doğruluğu.</p>
                                </div>
                            </section>

                            <section id="nasil-calisir" className="scroll-mt-32 p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="flex items-center gap-4 mb-6"><span className="text-sm font-medium text-gray-400">02</span><div className="h-px flex-1 bg-gray-100" /></div>
                                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 tracking-tight">SEO Nasıl Çalışır? Tarama, Dizinleme ve Sıralama</h2>
                                <p className="text-gray-600 leading-relaxed mb-6">Google&apos;ın bir sayfanızı sıralayabilmesi için önce onu bulması, sonra anlaması, ardından kaydetmesi gerekir.</p>
                                <div className="space-y-4">
                                    {[
                                        { step: "1", title: "Tarama (Crawling)", desc: "Googlebot adı verilen otomatik botlar, bağlantıları takip ederek ve XML site haritalarını okuyarak yeni ve güncellenmiş içerikleri keşfeder. Kritik risk: hiçbir iç bağlantının işaret etmediği orphan sayfalar bot tarafından bulunamaz." },
                                        { step: "2", title: "İşleme ve Render", desc: "Google sayfayı bulduktan sonra HTML ve JavaScript'i işleyerek sayfanın gerçekte ne gösterdiğini anlar. JavaScript ile yüklenen içerikler render edilemezse dizine eklenemez." },
                                        { step: "3", title: "Dizine Ekleme (Indexing)", desc: "İşlenen sayfa Google'ın arama yapılabilir veritabanına alınır. Kalitesiz veya canonical etiketiyle işaretlenmiş sayfalar indeks dışında kalabilir. Google Search Console'daki 'Kapsam' raporu bu sorunları tespit etmenin en doğrudan yoludur." },
                                        { step: "4", title: "Sıralama (Ranking)", desc: "Dizindeki sayfalar, kullanıcı bir sorgu girdiğinde alaka düzeyi, kalite ve kullanıcı deneyimine göre sıralanarak SERP oluşturulur. E-E-A-T ilkelerini, Core Web Vitals metriklerini ve güçlü backlink profilini birlikte ele almak daha sağlıklı bir yaklaşımdır." },
                                    ].map((item) => (
                                        <div key={item.step} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                                            <span className="flex-shrink-0 w-9 h-9 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-black">{item.step}</span>
                                            <div>
                                                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section id="uc-temel-alan" className="scroll-mt-32 p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="flex items-center gap-4 mb-6"><span className="text-sm font-medium text-gray-400">03</span><div className="h-px flex-1 bg-gray-100" /></div>
                                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 tracking-tight">SEO&apos;nun 3 Temel Alanı: On-Page, Off-Page ve Teknik SEO</h2>
                                <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-5">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-gray-900 text-white">
                                                <th className="px-5 py-4 text-left font-bold">Alan</th>
                                                <th className="px-5 py-4 text-left font-bold">Ne Kapsar</th>
                                                <th className="px-5 py-4 text-left font-bold">Temel Teknikler</th>
                                                <th className="px-5 py-4 text-left font-bold">Öncelik</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { alan: "Teknik SEO", kapsam: "Botların siteyi verimli tarayabilmesi, işleyebilmesi ve dizine ekleyebilmesi", teknikler: "Core Web Vitals, XML site haritası, canonical etiket, schema markup, HTTPS, mobil uyumluluk", oncelik: "1. öncelik — Teknik altyapı çökmüşse diğer her şey boşa gider" },
                                                { alan: "On-Page SEO", kapsam: "Kullanıcılar ve arama motorları için sayfa içeriğinin optimize edilmesi", teknikler: "Anahtar kelime optimizasyonu, title tag, meta etiketler, iç bağlantı, URL yapısı", oncelik: "2. öncelik" },
                                                { alan: "Off-Page SEO", kapsam: "Sitenin güvenilirliğini site dışı faaliyetlerle güçlendirme", teknikler: "Link building, PR, marka bahisleri, sosyal medya, citations", oncelik: "3. öncelik — İçerik kalitesi olmadan kazanılan bağlantılar kalıcı sonuç vermez" },
                                            ].map((row, i) => (
                                                <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                                                    <td className="px-5 py-4 font-bold text-gray-900">{row.alan}</td>
                                                    <td className="px-5 py-4 text-gray-600">{row.kapsam}</td>
                                                    <td className="px-5 py-4 text-gray-600">{row.teknikler}</td>
                                                    <td className="px-5 py-4 text-gray-600 text-xs">{row.oncelik}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">On-page SEO&apos;nun merkezinde <strong>E-E-A-T</strong> yer alır: Google, içerikleri deneyim, uzmanlık, yetkililik ve güvenilirlik kriterleriyle değerlendirir.</p>
                            </section>

                            <section id="seo-vs-ppc" className="scroll-mt-32 p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="flex items-center gap-4 mb-6"><span className="text-sm font-medium text-gray-400">04</span><div className="h-px flex-1 bg-gray-100" /></div>
                                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 tracking-tight">SEO ile SEM/PPC Arasındaki Fark</h2>
                                <p className="text-gray-600 leading-relaxed mb-6 text-sm">SEM (Search Engine Marketing), hem SEO hem de PPC faaliyetlerini kapsayan üst bir terimdir. PPC ise her tıklama başına ücretlendirilen bir modeldir — rakip değil, tamamlayıcı.</p>
                                <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-4">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-gray-900 text-white">
                                                <th className="px-5 py-4 text-left font-bold">Kriter</th>
                                                <th className="px-5 py-4 text-left font-bold">SEO</th>
                                                <th className="px-5 py-4 text-left font-bold">PPC</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { kriter: "Maliyet yapısı", seo: "Tıklama başına ödeme yok; zaman ve içerik üretimine yatırım gerektirir", ppc: "Her tıklama için ödeme; bütçe bitince trafik durur" },
                                                { kriter: "Sonuç süresi", seo: "Anlamlı sonuçlar 3–6 ay; rekabetçi anahtar kelimelerde daha uzun", ppc: "Kampanya yayına girdiği gün trafik başlar" },
                                                { kriter: "Sürdürülebilirlik", seo: "Organik trafik reklam harcamasına bağımlı değildir", ppc: "Bütçe kesildiğinde görünürlük anında sıfırlanır" },
                                                { kriter: "Ne zaman tercih edilmeli", seo: "Uzun vadeli büyüme ve marka otoritesi inşası", ppc: "Yeni ürün lansmanı, sezonluk kampanya, acil trafik ihtiyacı" },
                                            ].map((row, i) => (
                                                <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                                                    <td className="px-5 py-4 font-bold text-gray-900">{row.kriter}</td>
                                                    <td className="px-5 py-4 text-gray-600">{row.seo}</td>
                                                    <td className="px-5 py-4 text-gray-600">{row.ppc}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                                    <p className="text-blue-900 text-sm leading-relaxed"><strong>Gerçekçi karar çerçevesi:</strong> Bütçeniz varsa ikisini birlikte çalıştırın — PPC kısa vadeli geliri karşılarken SEO uzun vadeli temeli inşa eder.</p>
                                </div>
                            </section>

                            <section id="metrikler" className="scroll-mt-32 p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="flex items-center gap-4 mb-6"><span className="text-sm font-medium text-gray-400">05</span><div className="h-px flex-1 bg-gray-100" /></div>
                                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 tracking-tight">SEO Sonuçlarını Ölçmek: Metrikler ve Araçlar</h2>
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Araç Karşılaştırması</h3>
                                <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-8">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-gray-900 text-white">
                                                <th className="px-5 py-4 text-left font-bold">Araç</th>
                                                <th className="px-5 py-4 text-left font-bold">Ne İçin Kullanılır</th>
                                                <th className="px-5 py-4 text-left font-bold">Ücretli mi?</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { tool: "Google Search Console", use: "Arama performansını izleme, teknik tarama ve dizin sorunlarını tespit etme", paid: "Ücretsiz" },
                                                { tool: "Google Analytics (GA4)", use: "Kullanıcı davranışı, organik trafik kaynakları ve dönüşüm analizi", paid: "Ücretsiz" },
                                                { tool: "Ahrefs", use: "Kapsamlı backlink analizi, anahtar kelime araştırması ve rakip takibi", paid: "Ücretli" },
                                                { tool: "Semrush", use: "Görünürlük takibi, detaylı anahtar kelime, site ve rakip analizi", paid: "Ücretli" },
                                                { tool: "Screaming Frog", use: "Site içi teknik SEO hatalarını, yönlendirmeleri ve link yapısını tarama", paid: "Ücretli (Sınırlı Ücretsiz)" },
                                            ].map((row, i) => (
                                                <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                                                    <td className="px-5 py-4 font-bold text-gray-900">{row.tool}</td>
                                                    <td className="px-5 py-4 text-gray-600">{row.use}</td>
                                                    <td className="px-5 py-4">
                                                        <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${row.paid === "Ücretsiz" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"}`}>{row.paid}</span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Takip Edilmesi Gereken 5 Temel Metrik</h3>
                                <div className="space-y-3">
                                    {[
                                        { num: "1", title: "Organik trafik", desc: "Arama motorlarından gelen ziyaretçi sayısı; başarılı çalışmalarda büyüme eğilimi gösterir." },
                                        { num: "2", title: "Sıralama pozisyonu", desc: "Hedef anahtar kelimeler için SERP'teki ortalama konum; trafik düşüşlerini yorumlamak için şarttır." },
                                        { num: "3", title: "Tıklama oranı (CTR)", desc: "Düşük CTR, başlık ve meta açıklamanızın gözden geçirilmesi gerektiğine işaret eder." },
                                        { num: "4", title: "Dönüşüm oranı", desc: "Organik trafiğin hedef eylemlere (satın alma, form, abonelik) dönüşme oranı; trafik artışının gerçek değerini bu metrik ortaya koyar." },
                                        { num: "5", title: "Backlink profili", desc: "Yeni kazanılan ve kaybedilen bağlantıları düzenli izlemek, otorite değişimlerini önceden fark ettirir." },
                                    ].map((item) => (
                                        <div key={item.num} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                                            <span className="flex-shrink-0 w-9 h-9 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-black">{item.num}</span>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section id="yapay-zeka" className="scroll-mt-32 p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="flex items-center gap-4 mb-6"><span className="text-sm font-medium text-gray-400">06</span><div className="h-px flex-1 bg-gray-100" /></div>
                                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 tracking-tight">Yapay Zeka Çağında SEO: GEO, AI Overviews ve Değişen Dinamikler</h2>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">GEO, SEO&apos;nun Rakibi Değil Uzantısı</h3>
                                <div className="space-y-4 text-gray-600 leading-relaxed text-sm mb-8">
                                    <p>ChatGPT, Perplexity ve Gemini gibi üretken yapay zeka araçlarının yükselişiyle birlikte <strong className="text-gray-900">AEO (Answer Engine Optimization)</strong> ve <strong className="text-gray-900">GEO (Generative Engine Optimization)</strong> adı verilen yeni optimizasyon yaklaşımları ortaya çıktı. GEO, SEO&apos;nun yerini almıyor; kullanıcıların bilgi aradığı her platformda görünürlük sağlamak için SEO&apos;yu genişletiyor.</p>
                                    <p>Google, 20 Mayıs 2025&apos;te AI Mode&apos;u tüm ABD kullanıcılarına açtı. Bu modun merkezinde <strong className="text-gray-900">query fan-out</strong> tekniği var: sistem, kullanıcının tek sorgusunu birden fazla alt konuya bölerek arka planda ek arama sorguları üretiyor.</p>
                                </div>
                                <div className="bg-gray-900 rounded-2xl p-6 text-white mb-5">
                                    <h3 className="text-lg font-bold mb-5">&quot;SEO Ölüyor&quot; Söylemini Çürüten Veriler</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                        <div className="text-center">
                                            <div className="text-4xl font-black text-blue-400 mb-2">%95</div>
                                            <p className="text-white/70 text-sm leading-relaxed">Amerikalılar geleneksel arama motorlarını her ay kullanmaya devam ediyor</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-4xl font-black text-blue-400 mb-2">$89B</div>
                                            <p className="text-white/70 text-sm leading-relaxed">SEO pazarı 2024 büyüklüğü; 2028&apos;de 170 milyar dolara ulaşması öngörülüyor</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-4xl font-black text-blue-400 mb-2">↑</div>
                                            <p className="text-white/70 text-sm leading-relaxed">Yeni kullanıcılar ChatGPT&apos;yi benimsediğinde Google arama sayısı artıyor</p>
                                        </div>
                                    </div>
                                </div>
                                <Link href="/geo" className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700 transition-colors">
                                    GEO Danışmanlığı sayfasına git
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </Link>
                            </section>

                            <section id="site-turleri" className="scroll-mt-32 p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="flex items-center gap-4 mb-6"><span className="text-sm font-medium text-gray-400">07</span><div className="h-px flex-1 bg-gray-100" /></div>
                                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 tracking-tight">Site Türüne Göre SEO Öncelikleri</h2>
                                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-gray-900 text-white">
                                                <th className="px-5 py-4 text-left font-bold">Site Türü</th>
                                                <th className="px-5 py-4 text-left font-bold">Öne Çıkan SEO Odağı</th>
                                                <th className="px-5 py-4 text-left font-bold">Kritik Teknikler</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { type: "E-ticaret", focus: "Kategori ve ürün sayfalarının organik görünürlüğü", techniques: "Schema markup, URL parametre yönetimi, ürün varyant kontrolü, dahili bağlantı mimarisi" },
                                                { type: "Kurumsal / Enterprise", focus: "Ölçekli tarama ve dizine ekleme verimliliği", techniques: "Teknik SEO otomasyonu, log dosyası analizi, crawl bütçesi yönetimi" },
                                                { type: "Yerel İşletme", focus: "Yakın çevredeki aramalarda SERP görünürlüğü", techniques: "Google Business Profiles, yorum yönetimi, NAP tutarlılığı, yerel anahtar kelime hedeflemesi" },
                                                { type: "Haber / Medya", focus: "İçeriğin yayınlanır yayınlanmaz dizine girmesi", techniques: "Sayfa hızı, News Sitemap, Google Discover uyumluluğu, yapılandırılmış veri" },
                                                { type: "Uluslararası Site", focus: "Doğru dil/bölge hedeflemesi", techniques: "hreflang uygulaması, canonical etiket yönetimi, Baidu ve Naver gibi yerel arama motorlarına özgü strateji" },
                                            ].map((row, i) => (
                                                <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                                                    <td className="px-5 py-4 font-bold text-gray-900">{row.type}</td>
                                                    <td className="px-5 py-4 text-gray-600">{row.focus}</td>
                                                    <td className="px-5 py-4 text-gray-600">{row.techniques}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
}
