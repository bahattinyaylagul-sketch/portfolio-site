import Link from 'next/link';
import { clusters } from '@/lib/geo-data';

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
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-gray-500 uppercase tracking-widest flex items-center gap-3">
                                <span className="w-8 h-0.5 bg-violet-400 rounded-full"></span>
                                {cluster.label}
                            </h3>
                        </div>
                        <div className="rehber-kartlari grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                            {cluster.items.slice(0, 3).map((item, idx) => (
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
                
                <div className="mt-16 text-center">
                    <Link 
                        href="/geo/rehberler" 
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-violet-600 rounded-full hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
                    >
                        Tüm GEO Rehberlerini Keşfet
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
