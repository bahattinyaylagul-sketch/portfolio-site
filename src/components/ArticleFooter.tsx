import Link from "next/link";
import { clusters } from "@/lib/geo-data";

export default function ArticleFooter({ currentSlug }: { currentSlug: string }) {
    // 1. Find which cluster this article belongs to
    let currentCluster = null;
    let currentItemIndex = -1;

    for (const cluster of clusters) {
        const idx = cluster.items.findIndex(item => item.href === `/geo/${currentSlug}`);
        if (idx !== -1) {
            currentCluster = cluster;
            currentItemIndex = idx;
            break;
        }
    }

    // 2. Pick related articles from the same cluster
    // Pick up to 3 articles that are not the current one
    let relatedArticles = [];
    if (currentCluster) {
        relatedArticles = currentCluster.items.filter((_, idx) => idx !== currentItemIndex).slice(0, 3);
    }

    return (
        <>
            {/* CTA Banner */}
            <aside className="my-16 p-8 bg-gray-50 border border-gray-100 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden" aria-label="GEO Danışmanlığı Teklifi">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-gray-200 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                <div className="relative z-10 flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Markanızı Yapay Zeka Çağına Taşıyın</h3>
                    <p className="text-gray-600 leading-relaxed font-medium">
                        GEO ve AI görünürlük stratejilerinin işinize özel nasıl kurgulanabileceğini görmek ister misiniz?
                    </p>
                </div>
                <div className="relative z-10 shrink-0 w-full md:w-auto">
                    <Link href="/geo" className="inline-flex items-center justify-center w-full px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-black hover:-translate-y-1 transition-all shadow-md">
                        GEO Danışmanlığı Hizmetini İncele
                        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </aside>

            {/* Ayrıca Bakınız (İlgili Makaleler) */}
            {relatedArticles.length > 0 && (
                <div className="mt-16 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Ayrıca Bakınız</h2>
                    <ul className="space-y-6 mb-8">
                        {relatedArticles.map((article, idx) => (
                            <li key={idx} className="list-none">
                                <Link href={article.href} className="inline-flex items-center text-violet-600 hover:underline font-bold group text-lg">
                                    <span className="w-2 h-2 rounded-full bg-violet-600 mr-3 group-hover:scale-125 transition-all" />
                                    {article.title}
                                </Link>
                                <p className="text-sm text-gray-500 ml-5 mt-1 leading-relaxed max-w-2xl">{article.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}
