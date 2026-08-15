import Link from 'next/link';

interface GEOItem {
    title: string;
    href: string;
    desc: string;
}

interface ClusterGroup {
    code: string;
    label: string;
    items: GEOItem[];
}

/*
 * Grup sırası §6.1: B → C → D → E → A
 * (platform ve teknik önce; ticari niyet yukarıda kalsın)
 * A ve E cluster henüz spoke içermiyor — aktif olduğunda eklenecek.
 */
const clusters: ClusterGroup[] = [
    {
        code: "B",
        label: "Platform Bazlı GEO",
        items: [
            {
                title: "ChatGPT GEO: Kaynak Gösterilme Rehberi",
                href: "/geo/chatgpt-geo",
                desc: "ChatGPT'nin yanıtlarında markanızı kaynak olarak alıntılaması için içerik ve teknik yapınızı optimize etme rehberi."
            },
            {
                title: "Perplexity GEO: Görünürlük Kazanma Rehberi",
                href: "/geo/perplexity-geo",
                desc: "Perplexity AI aramalarında alıntılanmak, kaynak olarak önerilmek ve organik AI trafiğinizi artırmak için optimizasyon pratikleri."
            },
            {
                title: "AI Overviews Nedir? SEO'ya Etkisi ve İçerik Stratejisi",
                href: "/geo/ai-overviews-nedir",
                desc: "Google AI Bakışı'nın nasıl çalıştığı, organik trafiğe etkisi ve AIO'da kaynak olarak görünmek için içerik stratejisi."
            },
            {
                title: "Google AI Modu Optimizasyonu: Yanıttaki 1-3 Kaynaktan Biri Olmak",
                href: "/geo/google-ai-modu",
                desc: "Google AI Modu'nun fan-out mekaniği, AI Bakışı'ndan farkı, kaynak gösterilmek için yapmanız gerekenler ve Türkçe sorgularda rekabetin neden hâlâ seyrek olduğu."
            },
            {
                title: "Gemini GEO Optimizasyonu: Google'ın Yapay Zeka Arayüzlerinde Öne Çıkmak",
                href: "/geo/gemini-geo",
                desc: "Google Gemini ve AI Modu yanıtlarında marka görünürlüğü kazanmak için yapay zeka arama optimizasyonu rehberi."
            },
            {
                title: "Bing Copilot GEO: Arama ve Sohbet Entegrasyonunda Kaynak Olmak",
                href: "/geo/bing-copilot-geo",
                desc: "Bing Copilot ve arama entegreli sohbet yanıtlarında alıntılanmak için yapılması gereken teknik ve editoryal adımlar."
            },
        ]
    },
    {
        code: "C",
        label: "Teknik GEO",
        items: [
            {
                title: "llms.txt Nedir?",
                href: "/geo/llms-txt-nedir",
                desc: "Yapay zeka modellerinin sitenizi doğru taraması için kök dizin standardı ve uygulama rehberi."
            },
            {
                title: "MCP, WebMCP ve NLWeb: Farkları ve Hangisini Seçmeli",
                href: "/geo/mcp-nlweb",
                desc: "MCP, WebMCP ve NLWeb protokollerinin çalıştıkları katmanlar, farkları, tarayıcı desteği ve hangi senaryoda hangisinin seçileceği."
            },
            {
                title: "AI Botları ve Robots.txt Yönetimi: Tarayıcılara Doğru İzinleri Vermek",
                href: "/geo/ai-botlari-robots-txt",
                desc: "GPTBot, ClaudeBot ve diğer yapay zeka crawler'larına robots.txt ile doğru erişim izinlerini vermenin teknik rehberi."
            },
            {
                title: "JavaScript, SSR ve AI Botları: Yapay Zekaya Okunabilir Site Sunmak",
                href: "/geo/javascript-ssr-ai-botlari",
                desc: "Client-side rendering, server-side rendering ve yapay zeka botlarının tarama davranışı ile sayfa oluşturma (hydration) ilişkisi."
            },
        ]
    },
    {
        code: "E",
        label: "Ölçüm & Analitik",
        items: [
            {
                title: "GA4'te AI Trafiği Ölçümü: Üretken Arama Trafiğini Ayrıştırmak",
                href: "/geo/ga4-ai-trafigi",
                desc: "Yapay zeka arama motorlarından ve sohbet botlarından gelen organik yönlendirme trafiğini Google Analytics 4 üzerinde filtreleme."
            },
            {
                title: "Prompt Araştırması: Kullanıcıların AI Arama Motorlarında Sorma Dilini Anlamak",
                href: "/geo/prompt-arastirmasi",
                desc: "Kullanıcıların yapay zeka sistemlerinde sorduğu sorguları, takip sorularını ve sorma dilini (conversational prompts) tespit etme yöntemleri."
            },
            {
                title: "GEO Nasıl Ölçülür? KPI, Cevap Payı ve Atıf Ölçümü Rehberi",
                href: "/geo/geo-kpi-olcumu",
                desc: "Yanıtta geçme oranı, atıf frekansı ve cevap payı metrikleri; manuel prompt takip seti oluşturma ve KPI raporlama çerçevesi."
            },
        ]
    },
    {
        code: "D",
        label: "İçerik & Otorite",
        items: [
            {
                title: "Entity SEO ve Bilgi Grafiği",
                href: "/geo/entity-seo",
                desc: "Arama motorlarının markanızı varlık olarak tanıması için Knowledge Graph kaydı, schema mimarisi ve ölçüm çerçevesi."
            },
            {
                title: "Marka Mention'ları ve AI Hafızası",
                href: "/geo/ai-marka-mention-etkisi",
                desc: "Link içermeyen marka anılmalarının LLM modellerinin bilgi ağındaki yeri ve kalıcılık etkisi."
            },
            {
                title: "Reddit ve Forum Mention'larının GEO Etkisi",
                href: "/geo/reddit-forum-mention-etkisi",
                desc: "Sosyal medya ve topluluk kanallarındaki atıfların yapay zeka tavsiyelerine doğrudan etkisi."
            },
            {
                title: "Dijital PR ve \"En İyi X\" Listeleri",
                href: "/geo/dijital-pr-ai-atif",
                desc: "Yapay zeka arama motorlarının öneri sorgularında hangi editöryel listeleri okuduğunu tespit etme ve atıf payı kazanma."
            },
            {
                title: "Wikidata ve Bilgi Paneli: Markanızı Bilgi Grafiğinde Tanımlamak",
                href: "/geo/wikidata-bilgi-paneli",
                desc: "Arama motorlarının ve modellerin markanızı bir varlık (entity) olarak tanıması için Wikidata ve Knowledge Graph kaydı."
            },
        ]
    },
    {
        code: "A",
        label: "Temeller & Terminoloji",
        items: [
            {
                title: "SEO, GEO, AEO ve LLMO Farkı: Hangi Terimi Ne Zaman Kullanmalısınız?",
                href: "/geo/geo-seo-aeo-farki",
                desc: "SEO, GEO, AEO, AIO ve LLMO terimlerinin hedef yüzey, metrik ve platform farkları; hangi hedefte hangi çerçevenin kullanılacağı."
            },
            {
                title: "Query Fan-Out Nedir? Google AI Modu Tek Sorguyu Nasıl Çoğaltır?",
                href: "/geo/query-fan-out",
                desc: "Tek bir sorgunun arka planda onlarca alt sorguya bölünmesi ve içerik kümenizin bu dağılımı nasıl karşılaması gerektiği."
            },
            {
                title: "Yapay Zeka Araması Nasıl Çalışır? RAG ve Grounding Rehberi",
                href: "/geo/yapay-zeka-arama-nasil-calisir",
                desc: "Modelin cevabı üretirken izlediği sekiz adımlık zincir ve içeriğinizin bu zincirin hangi halkasında elendiğini anlama rehberi."
            },
            {
                title: "İçerik Chunking: AI Sistemleri Bir Sayfanın Neresinden Alıntı Yapar?",
                href: "/geo/icerik-chunking",
                desc: "İçeriği yapay zeka sistemlerinin daha kolay işleyebileceği parçalara (chunks) bölme, Türkçe tokenizasyon farkı ve pasaj yazımı."
            },
            {
                title: "Zero-Click Arama: 2026 Verileri, Gerçek Etkisi ve Ne Yapmalı",
                href: "/geo/zero-click-arama",
                desc: "Google aramalarının zero-click kapanma oranları, 2026 clickstream verileri, arama niyetleri ve bu dönüşüme karşı içerik konumlandırma."
            },
        ]
    },
];

export default function GEOClusterGrid() {
    return (
        <section className="geo-rehberler py-20 bg-gray-50/30 border-t border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
                        GEO Rehberleri — AI Aramada Görünürlüğün Detayları
                    </h2>
                    <p className="blok-giris text-lg text-gray-600 font-medium leading-relaxed">
                        Yapay zeka arama motorları ve dil modellerinde (LLMs) marka bilinirliğini ve atıfları artırmaya yönelik derinlemesine GEO stratejileri.
                    </p>
                </div>

                {clusters.map((cluster) => (
                    <div key={cluster.code} className="rehber-grubu mb-12 last:mb-0" data-cluster={cluster.code}>
                        <h3 className="text-lg font-bold text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-3">
                            <span className="w-8 h-0.5 bg-violet-400 rounded-full"></span>
                            {cluster.label}
                        </h3>
                        <div className="rehber-kartlari grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                            {cluster.items.map((item, idx) => (
                                <article
                                    key={idx}
                                    className="rehber-kart group bg-white p-8 rounded-3xl border border-gray-200/60 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500/[0.04] transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-violet-600 transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className="pt-6 mt-auto">
                                        <Link
                                            href={item.href}
                                            className="kart-cta inline-flex items-center gap-1.5 text-xs font-bold text-violet-600 hover:text-violet-700 transition-colors"
                                        >
                                            Rehberi oku
                                            <span className="transition-transform group-hover:translate-x-0.5">→</span>
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
