import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import { seoClusterData } from '@/lib/seo-data';

export const metadata: Metadata = {
    title: 'Site Haritası – Bahattin Yaylagül',
    description: 'Web sitemizdeki tüm hizmetlere, teknik rehberlere ve blog içeriklerine tek noktadan ulaşın. SEO ve GEO konularındaki kapsamlı site hiyerarşisini inceleyin.',
    alternates: {
        canonical: '/site-haritasi',
    },
};

export default function SiteMapPage() {
    const clusters = Object.values(seoClusterData);

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://bahattinyaylagul.com" },
            { "@type": "ListItem", "position": 2, "name": "Site Haritası", "item": "https://bahattinyaylagul.com/site-haritasi" }
        ]
    };

    return (
        <main className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <Navigation />
            </div>

            <article className="pt-32 pb-20 max-w-4xl mx-auto px-6">
                <FadeIn>
                    <h1 className="text-4xl font-bold mb-6 text-gray-900">Site Haritası</h1>
                    <p className="text-xl text-gray-600 mb-12 border-l-4 border-gray-900 pl-4">
                        Bu sayfa sitedeki tüm ana bölümleri ve alt sayfaları kullanıcılar ve arama motorları için listeler.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Danışmanlık Sayfaları</h2>
                        <ul className="space-y-3">

                            <li className="list-disc ml-5 marker:text-gray-400"><Link href="/geo" className="text-blue-600 hover:underline">GEO Danışmanlığı</Link></li>
                            <li className="list-disc ml-5 marker:text-gray-400"><Link href="/teknik-seo" className="text-blue-600 hover:underline">Teknik SEO & Altyapı</Link></li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Strateji Hub’ları</h2>
                        <ul className="space-y-3">
                            <li className="list-disc ml-5 marker:text-gray-400"><Link href="/site-ici-seo" className="text-blue-600 hover:underline">On-Page Stratejileri</Link></li>
                            <li className="list-disc ml-5 marker:text-gray-400"><Link href="/icerik-optimizasyonu" className="text-blue-600 hover:underline">İçerik Stratejileri</Link></li>
                            <li className="list-disc ml-5 marker:text-gray-400"><Link href="/site-disi-seo" className="text-blue-600 hover:underline">Site Dışı Stratejileri</Link></li>
                        </ul>
                    </section>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Strateji Alt Sayfaları (Clusters)</h2>
                    <ul className="grid md:grid-cols-2 gap-4">
                        {clusters.map(post => (
                            <li key={post.slug} className="list-disc ml-5 marker:text-gray-400 group">
                                <Link href={`/${post.slug}`} className="text-gray-700 group-hover:text-blue-600 transition-colors">
                                    <span className="font-medium">{post.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mt-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">İçgörüler & Blog</h2>
                        <ul className="space-y-3">
                            <li className="list-disc ml-5 marker:text-gray-400"><Link href="/icgoruler" className="text-blue-600 hover:underline">Blog Ana Sayfa</Link></li>
                            <li className="list-disc ml-5 marker:text-gray-400"><Link href="/icgoruler/ai-marka-mention-etkisi" className="text-gray-600 hover:text-blue-600 hover:underline">AI Marka Mention Etkisi</Link></li>
                            <li className="list-disc ml-5 marker:text-gray-400"><Link href="/icgoruler/reddit-forum-mention-etkisi" className="text-gray-600 hover:text-blue-600 hover:underline">Reddit & Forum Etkisi</Link></li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Kurumsal</h2>
                        <ul className="space-y-3">
                            <li className="list-disc ml-5 marker:text-gray-400"><Link href="/hakkimda" className="text-blue-600 hover:underline">Hakkımda</Link></li>
                            <li className="list-disc ml-5 marker:text-gray-400"><Link href="/referanslar" className="text-blue-600 hover:underline">Referanslar</Link></li>

                            <li className="list-disc ml-5 marker:text-gray-400"><Link href="mailto:bahattinyaylagul@gmail.com" className="text-blue-600 hover:underline">İletişim</Link></li>
                        </ul>
                    </section>
                </div>

            </article>
            <Footer />
        </main>
    );
}
