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
        <div className="mt-16">
            {/* Next Step CTA Banner */}
            <div className="mb-20">
                <Link
                    href="/geo"
                    className="block relative overflow-hidden bg-gray-900 rounded-2xl p-10 text-white group hover:bg-black transition-colors shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-violet-600/30 transition-all"></div>

                    <div className="relative z-10 flex items-center justify-between gap-6">
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-violet-600/20 text-violet-300 text-xs font-bold tracking-widest uppercase mb-3 border border-violet-500/30">
                                SIRADAKİ ADIM
                            </span>
                            <p className="text-3xl font-bold mb-2 group-hover:translate-x-1 transition-transform">
                                GEO Danışmanlığı: Kapsamlı Rehber
                            </p>
                            <p className="text-gray-400 max-w-xl text-lg opacity-80">
                                Yapay zeka arama motorları ve dil modellerinde marka bilinirliğini ve atıfları artırmaya yönelik derinlemesine stratejiler.
                            </p>
                        </div>
                        <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-violet-600 group-hover:scale-110 transition-all duration-300 shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Ayrıca Bakınız (İlgili Makaleler) */}
            {relatedArticles.length > 0 && (
                <div className="mt-16 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Ayrıca Bakınız</h2>
                    <ul className="space-y-6 mb-12">
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
            
            <div className="pb-16 text-sm text-gray-400 font-medium font-sans">
                <Link href="/geo" className="hover:text-violet-600 transition-colors">
                    ← GEO Danışmanlığı ana sayfasına dön
                </Link>
            </div>
        </div>
    );
}
