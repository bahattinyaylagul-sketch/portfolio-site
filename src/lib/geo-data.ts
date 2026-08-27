export interface GEOItem {
    title: string;
    href: string;
    desc: string;
}

export interface ClusterGroup {
    code: string;
    label: string;
    hubHref: string;
    items: GEOItem[];
}

export const clusters: ClusterGroup[] = [
    {
        code: "B",
        label: "Platform Bazlı GEO",
        hubHref: "/geo/platformlar",
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
        hubHref: "/geo/teknik-geo",
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
        hubHref: "/geo/olcum-analitik",
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
        hubHref: "/geo/icerik-otorite",
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
        hubHref: "/geo/temeller",
        items: [
            {
                title: "GEO Ajansı Nedir, Nasıl Seçilir? (2026 Rehberi)",
                href: "/geo/ajansi",
                desc: "GEO ajansı; markaların ChatGPT, Gemini, Perplexity, Google AI Overviews ve AI Mode gibi yapay zeka tabanlı arama deneyimlerinde görünür olmasına yardımcı olur."
            },
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
                desc: "Yapay zeka arama motorlarının (AI Overviews, vb.) zero-click aramaları nasıl artırdığı ve markaların SEO/GEO stratejisini nasıl uyarlaması gerektiği."
            }
        ]
    }
];
