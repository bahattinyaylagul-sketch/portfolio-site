
import Link from "next/link";
import FadeIn from "./FadeIn";

const items = [

    {
        title: "GEO Danışmanlığı",
        desc: "ChatGPT, Gemini, Perplexity ve SearchGPT gibi yeni nesil motorlarda markanızın referans gösterilmesi.",
        link: "/geo",
        col: "md:col-span-1",
        delay: 0.2,
    },
    {
        title: "AI Strateji & RAG",
        desc: "Yapay Zeka Yanıt Optimizasyonu. LLM ve RAG sistemleri için içerik mimarisi kurgusu.",
        link: "/geo",
        col: "md:col-span-1",
        delay: 0.3,
    },
    {
        title: "Teknik SEO & Altyapı",
        desc: "Core Web Vitals, Crawl Budget optimizasyonu ve Next.js/React altyapı çözümleri.",
        link: "/teknik-seo",
        col: "md:col-span-2",
        delay: 0.4,
    },
];

export default function ServicesBento() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <FadeIn>
                    <h2 className="text-[10px] md:text-xs font-medium text-gray-400 mb-8 uppercase tracking-[0.2em] text-center">
                        [ Stratejik Yetkinlik Mimarisi ]
                    </h2>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <Link href={item.link} key={index} className={`${item.col} block h-full`}>
                            <FadeIn delay={item.delay} className="h-full">
                                <div className="h-full min-h-[220px] flex flex-col justify-center p-8 bg-gray-50 rounded-2xl group cursor-pointer relative overflow-hidden border border-gray-100/50 hover:border-gray-200 hover:shadow-sm transition-all duration-300">
                                    {/* Abstract background shape (optional) */}
                                    <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-gray-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="absolute top-0 right-0 p-4 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                                        <svg className="w-5 h-5 text-gray-800 -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>

                                    <h3 className="text-xl font-sans font-bold mb-3 text-foreground group-hover:text-black transition-colors relative z-10">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed font-sans font-light relative z-10">
                                        {item.desc}
                                    </p>
                                </div>
                            </FadeIn>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
