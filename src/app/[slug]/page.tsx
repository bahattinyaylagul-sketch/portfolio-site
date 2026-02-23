import Navigation from "@/components/Navigation";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import { seoClusterData, BlogPost } from "@/lib/seo-data";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

import ArticleContent from "./ArticleContent";

// Helper function to calculate reading time
function calculateReadingTime(content: string) {
    const wordsPerMinute = 200;
    const text = content.replace(/<[^>]+>/g, ""); // strip html
    const wordCount = text.split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

// Helper function to extract headings for ToC
function extractHeadings(content: string) {
    const regex = /<h3[^>]*>(.*?)<\/h3>/g;
    const headings = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
        const text = match[1].replace(/<[^>]+>/g, "");
        const id = text.toLowerCase()
            .replace(/[ğĞ]/g, "g")
            .replace(/[üÜ]/g, "u")
            .replace(/[şŞ]/g, "s")
            .replace(/[ıİ]/g, "i")
            .replace(/[öÖ]/g, "o")
            .replace(/[çÇ]/g, "c")
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-");
        headings.push({ text, id });
    }
    return headings;
}

// Helper to inject IDs into content
function injectHeadingIds(content: string) {
    return content.replace(/<h3([^>]*)>(.*?)<\/h3>/g, (match, p1, p2) => {
        const id = p2.replace(/<[^>]+>/g, "").toLowerCase()
            .replace(/[ğĞ]/g, "g")
            .replace(/[üÜ]/g, "u")
            .replace(/[şŞ]/g, "s")
            .replace(/[ıİ]/g, "i")
            .replace(/[öÖ]/g, "o")
            .replace(/[çÇ]/g, "c")
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-");

        // Add scroll-margin-top to prevent sticky header overlap
        return `<h3${p1} id="${id}" style="scroll-margin-top: 100px; scroll-behavior: smooth;">${p2}</h3>`;
    });
}

// Map slugs to Visual Assets & Series Titles
const getCategoryAssets = (slug: string, parent: string | null) => {
    // 1. Define specific images for specific slugs (Highest Priority)
    const specificImages: Record<string, string> = {
        "arama-niyeti": "/images/search_intent_3d.png",
        "semantik-yazim": "/images/semantic_seo_3d.png",
        "silo-mimarisi": "/images/silo_architecture_3d.png",
        "tarama": "/images/crawling_indexing_3d.png", // Shared for related topics
        "indeksleme": "/images/crawling_indexing_3d.png",
        "siralama": "/images/ranking_factors_3d.png",
        "eeat-sinyalleri": "/images/eeat_trust_3d.png",
        "topikal-otorite": "/images/topic_authority_3d.png",
        "bilgi-kazanci": "/images/topic_authority_3d.png", // Reusing topical authority for now as it fits "Knowledge"
        "teknik-seo": "/images/technical_seo_cover_3d.png",
        "icerik-optimizasyonu": "/images/content_seo_cover_3d.png",
        "site-ici-seo": "/images/on_page_seo_cover_3d.png",
        "site-disi-seo": "/images/off_page_seo_cover_3d.png",
        "yapisal-veri": "/images/structured_data_seo_3d.png",
    };

    if (specificImages[slug]) {
        // Determine series color based on parent or category
        let series = "SEO Uzmanlık Serisi";
        let color = "text-blue-400";

        if (parent === "teknik-seo" || slug === "teknik-seo") {
            series = "Teknik SEO Serisi";
            color = "text-blue-400";
        } else if (parent === "icerik-optimizasyonu" || slug === "icerik-optimizasyonu") {
            series = "İçerik Optimizasyon Serisi";
            color = "text-purple-400";
        } else if (parent === "site-ici-seo" || slug === "site-ici-seo") {
            series = "Site İçi SEO Serisi";
            color = "text-emerald-400";
        } else if (parent === "site-disi-seo" || slug === "site-disi-seo") {
            series = "Site Dışı SEO Serisi";
            color = "text-indigo-400";
        }

        return {
            image: specificImages[slug],
            series,
            color
        };
    }

    // 2. Fallback to Parent Category Images if no specific image exists
    const key = parent || slug;

    if (key === 'teknik-seo') {
        return {
            image: "/images/technical_seo_cover_3d.png",
            series: "Teknik SEO Serisi",
            color: "text-blue-400"
        };
    }
    if (key === 'icerik-optimizasyonu') {
        return {
            image: "/images/content_seo_cover_3d.png",
            series: "İçerik Optimizasyon Serisi",
            color: "text-purple-400"
        };
    }
    if (key === 'site-ici-seo') {
        return {
            image: "/images/on_page_seo_cover_3d.png",
            series: "Site İçi SEO Serisi",
            color: "text-emerald-400"
        };
    }
    if (key === 'site-disi-seo') {
        return {
            image: "/images/off_page_seo_cover_3d.png",
            series: "Site Dışı SEO Serisi",
            color: "text-indigo-400"
        };
    }

    // Default Fallback
    return {
        image: "/images/technical_seo_cover_3d.png",
        series: "SEO Uzmanlık Serisi",
        color: "text-blue-400"
    };
};

export async function generateStaticParams() {
    return Object.keys(seoClusterData).map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = seoClusterData[params.slug];
    if (!post) return {};

    return {
        title: `${post.title} | Bahattin Yaylagül`,
        description: `${post.title} hakkında kapsamlı rehber. SEO, GEO ve dijital stratejiler üzerine uzman içgörüler edinin.`,
        alternates: {
            canonical: `/${params.slug}`,
        },
    };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = seoClusterData[params.slug];

    if (!post) {
        notFound();
    }

    const parentPost = post.parent ? seoClusterData[post.parent] : null;
    const assets = getCategoryAssets(post.slug, post.parent);
    const headings = extractHeadings(post.content);

    // Find next post logic (simplified)
    const nextPostSlug = post.relatedLinks?.[0];
    const nextPost = nextPostSlug ? seoClusterData[nextPostSlug] : null;
    const contentWithIds = injectHeadingIds(post.content);

    return (
        <main className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
            {/* Fixed Header Wrapper */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <Navigation />
            </header>

            {/* Hero Header - Global Design System */}
            <div className="w-full bg-gray-900 pt-16 pb-0 relative overflow-hidden mt-20">
                {/* Abstract Background Shapes */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] -ml-32 -mb-32"></div>
                </div>

                <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="space-y-8 flex flex-col justify-center h-full pb-8">
                            <div>
                                <div className="flex items-center gap-3 font-bold tracking-widest text-xs uppercase mb-4">
                                    <span className={assets.color}>{assets.series}</span>
                                    <span className="w-px h-3 bg-white/20"></span>
                                    <span className="text-yellow-400">Rehber</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
                                    {post.title}
                                </h1>

                                {/* Divider & Date Meta */}
                                <div className="border-t border-white/10 pt-6 flex items-center gap-6 text-sm font-medium text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span>{new Date(post.publishDate).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                        <span>{calculateReadingTime(post.content)} dk okuma</span>
                                    </div>
                                </div>
                            </div>

                            {/* Author Section */}
                            <div className="flex items-center gap-4 pt-2">
                                <Link href="/hakkimda" className="w-12 h-12 bg-gray-200 rounded-full border-2 border-white/10 relative overflow-hidden hover:border-blue-400 transition-colors">
                                    <Image src="/images/bahattin-yaylagul.jpg" alt="Bahattin Yaylagül" fill className="object-cover" />
                                </Link>
                                <div className="flex flex-col">
                                    <span className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-0.5">Yazar</span>
                                    <div className="flex items-center gap-3">
                                        <Link href="/hakkimda" className="text-white font-bold text-lg leading-none hover:text-blue-400 transition-colors">
                                            Bahattin Yaylagül
                                        </Link>
                                        <a
                                            href="https://linkedin.com/in/bahattinyaylagul"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-blue-500 transition-colors"
                                            title="LinkedIn'de Bağlantı Kur"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3D Illustration */}
                        <div className="relative w-full h-[220px] lg:h-[500px] lg:aspect-auto mt-8 lg:mt-0 overflow-hidden">
                            <Image
                                src={assets.image}
                                alt={`${post.title} 3D Illustration`}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover lg:object-contain drop-shadow-2xl"
                                priority
                                fetchPriority="high"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <ArticleContent
                post={post}
                headings={headings}
                contentWithIds={contentWithIds}
                nextPost={nextPost}
            />
            <Footer />
        </main>
    );
}
