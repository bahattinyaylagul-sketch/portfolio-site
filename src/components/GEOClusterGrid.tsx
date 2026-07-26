import Link from 'next/link';

interface GEOItem {
    title: string;
    href: string;
    desc: string;
}

const geoItems: GEOItem[] = [
    {
        title: "llms.txt Nedir?",
        href: "/geo/llms-txt-nedir",
        desc: "Yapay zeka modellerinin sitenizi doğru taraması için kök dizin standardı ve uygulama rehberi."
    },
    {
        title: "Reddit ve Forum Mention'larının GEO Etkisi",
        href: "/geo/reddit-forum-mention-etkisi",
        desc: "Sosyal medya ve topluluk kanallarındaki atıfların yapay zeka tavsiyelerine doğrudan etkisi."
    },
    {
        title: "Marka Mention'ları ve AI Hafızası",
        href: "/geo/ai-marka-mention-etkisi",
        desc: "Link içermeyen marka anılmalarının LLM modellerinin bilgi ağındaki yeri ve kalıcılık etkisi."
    },
    {
        title: "ChatGPT GEO: Kaynak Gösterilme Rehberi",
        href: "/geo/chatgpt-geo",
        desc: "ChatGPT'nin yanıtlarında markanızı kaynak olarak alıntılaması için içerik ve teknik yapınızı optimize etme rehberi."
    },
    {
        title: "Perplexity GEO: Görünürlük Kazanma Rehberi",
        href: "/geo/perplexity-geo",
        desc: "Perplexity AI aramalarında alıntılanmak, kaynak olarak önerilmek ve organik AI trafiğinizi artırmak için yapılması gereken optimizasyon pratikleri."
    }
];

export default function GEOClusterGrid() {
    return (
        <section className="py-20 bg-gray-50/30 border-t border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
                        GEO Rehberleri — AI Aramada Görünürlüğün Detayları
                    </h2>
                    <p className="text-lg text-gray-600 font-medium leading-relaxed">
                        Yapay zeka arama motorları ve dil modellerinde (LLMs) marka bilinirliğini ve atıfları artırmaya yönelik derinlemesine GEO stratejileri.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {geoItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="group bg-white p-8 rounded-3xl border border-gray-200/60 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500/[0.04] transition-all duration-300 flex flex-col justify-between"
                        >
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-violet-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                            <div className="pt-6 mt-auto">
                                <Link
                                    href={item.href}
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-600 hover:text-violet-700 transition-colors"
                                >
                                    Rehberi oku
                                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
