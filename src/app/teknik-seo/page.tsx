
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { seoClusterData, BlogPost } from "@/lib/seo-data";
import RelatedGuides from "@/components/RelatedGuides";


export const metadata: Metadata = {
    title: 'Teknik SEO – Bahattin Yaylagül',
    description: 'Tarama bütçesi (Crawl Budget), render performansı ve site hızı optimizasyonu. Arama motorlarının sitenizi hatasız anlaması için gereken teknik altyapıyı kurun.',
    alternates: {
        canonical: '/teknik-seo',
    },
};

export default function TechnicalSEOPage() {
    const mainData = seoClusterData['teknik-seo'];

    // Alt kümeleri bul
    const subClusters = Object.values(seoClusterData).filter(
        (post: BlogPost) => post.parent === 'teknik-seo'
    );

    if (!mainData) return null;

    // Okuma süresi tahmini (kelime bazlı)
    const wordCount = mainData.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    // Tarih formatlama
    const formattedDate = new Date(mainData.publishDate).toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <main className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
            {/* Fixed Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <Navigation />
            </header>

            {/* Hero Header - Full Width Moz Style */}
            <div className="w-full bg-gray-900 pt-16 pb-12 lg:pb-20 relative overflow-hidden mt-20">
                {/* Abstract Background Shapes */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] -ml-32 -mb-32"></div>
                </div>

                <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="space-y-8 flex flex-col justify-center h-full pb-8">
                            <FadeIn>
                                <div className="flex items-center gap-3 text-yellow-400 font-bold tracking-widest text-xs uppercase mb-4">
                                    <span className="text-blue-400">Hizmetler</span>
                                    <span className="w-px h-3 bg-white/20"></span>
                                    <span>Teknik SEO & Altyapı</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
                                    {mainData.title}
                                </h1>

                                {/* Divider & Date Meta */}
                                <div className="border-t border-white/10 pt-6 flex items-center gap-6 text-sm font-medium text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span>{formattedDate}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                        <span>{readingTime} dk okuma</span>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Author Section */}
                            <FadeIn delay={0.1}>
                                <div className="flex items-center gap-4 pt-2">
                                    <Link href="/hakkimda" className="w-12 h-12 rounded-full border-2 border-white/10 relative overflow-hidden hover:border-blue-400 transition-colors">
                                        <Image src="/images/bahattin-yaylagul.jpg" alt="Bahattin Yaylagül" fill className="object-cover" />
                                    </Link>
                                    <div className="flex flex-col">
                                        <span className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-0.5">Yazar</span>
                                        <div className="flex items-center gap-3">
                                            <Link href="/hakkimda" className="text-white font-bold text-lg leading-none hover:text-blue-400 transition-colors">
                                                Bahattin Yaylagül
                                            </Link>
                                            <a
                                                href="https://linkedin.com/in/bahattin-yaylagul"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-blue-500 transition-colors"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* 3D Illustration / Hero Image */}
                        {mainData.image && (
                            <div className="relative w-full h-[220px] lg:h-[500px] lg:aspect-auto mt-8 lg:mt-0 overflow-hidden">
                                <FadeIn delay={0.2} className="h-full w-full relative">
                                    <Image
                                        src={mainData.image}
                                        alt={mainData.title}
                                        fill
                                        className="object-cover lg:object-contain drop-shadow-2xl"
                                        priority
                                    />
                                </FadeIn>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-8 pt-12 pb-20">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-8 font-medium tracking-wide font-sans">
                    <Link href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</Link>
                    <span className="text-gray-200">/</span>
                    <Link href="/seo" className="hover:text-blue-600 transition-colors">SEO</Link>
                    <span className="text-gray-200">/</span>
                    <span className="text-gray-600 font-bold truncate">Teknik SEO</span>
                </nav>

                <div className="grid lg:grid-cols-[250px_1fr] gap-12 items-start relative">
                    {/* Left Sidebar: Sub-Clusters */}
                    <aside className="hidden lg:block sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto pr-4 custom-scrollbar">
                        <div>
                            <div className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2 pl-2">
                                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                                KONU BAŞLIKLARI
                            </div>
                            <nav className="space-y-1 border-l-2 border-gray-100">
                                <div className="pl-4 py-2">
                                    <span className="text-sm font-bold text-gray-900 block mb-2">Bu Bölümde:</span>
                                    {subClusters.map((cluster) => (
                                        <Link
                                            key={cluster.slug}
                                            href={`/${cluster.slug}`}
                                            className="block py-2 text-sm text-gray-600 hover:text-blue-700 hover:underline transition-all"
                                        >
                                            {cluster.title}
                                        </Link>
                                    ))}
                                </div>
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content Column */}
                    <article className="min-w-0">
                        {/* Lead Description */}
                        <FadeIn delay={0.2}>
                            <p className="text-xl text-gray-700 leading-relaxed font-light mb-12 pl-6 border-l-4 border-blue-600">
                                {mainData.description}
                            </p>


                            {/* Content Body */}
                            <div
                                className="prose prose-lg max-w-none 
                                    prose-headings:font-sans prose-headings:font-bold prose-headings:text-foreground
                                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight
                                    prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-gray-800
                                    prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3 prose-h4:text-gray-900 prose-h4:font-bold
                                    prose-p:font-sans prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-6
                                    prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2
                                    prose-li:text-gray-600 prose-li:leading-relaxed
                                    prose-strong:font-bold prose-strong:text-gray-900
                                    prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                                    mb-16"
                                dangerouslySetInnerHTML={{ __html: mainData.content }}
                            />
                        </FadeIn>

                        {/* Alt Kümeler (Kartlar) */}
                        <RelatedGuides posts={subClusters} />

                        {/* Footer Nav */}
                        <div className="border-t border-gray-100 mt-16 pt-8">
                            <Link href="/seo" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-foreground transition-colors">
                                ← SEO Ana Sayfasına Dön
                            </Link>
                        </div>
                    </article>
                </div>
            </div>

            <Footer />
        </main>
    );
}
