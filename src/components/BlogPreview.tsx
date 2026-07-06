
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from './FadeIn';

const latestPosts = [
    {
        title: "llms.txt Nedir? Tanım, Format, Etkinlik Analizi ve Uygulama Rehberi",
        excerpt: "llms.txt nedir, nasıl oluşturulur ve gerçekten işe yarıyor mu? 300.000 domain analizi, robots.txt farkı, format rehberi ve maliyet-fayda değerlendirmesi.",
        date: "4 Temmuz 2026",
        category: "GEO / AI Search",
        slug: "llms-txt-nedir",
        image: "/images/llms-txt-hero.png"
    },
    {
        title: "Reddit ve Forumlardaki Mention'lar GEO Başarısını Nasıl Etkiler?",
        excerpt: "Reddit ve forumlardaki mention’lar (bahsedilmeler), GEO başarısı için kritik bir 'güven doğrulama' mekanizması olarak çalışır.",
        date: "31 Ocak 2026",
        category: "GEO / AI Search",
        slug: "reddit-forum-mention-etkisi",
        image: "/images/blog/reddit-geo.png"
    },
    {
        title: "Marka İsminin Mention Olarak Geçmesi AI Hafızasını Nasıl Etkiler?",
        excerpt: "Marka isminin link olmadan geçmesi (mention), AI modellerinin hafızasını ve güven skorunu nasıl artırır?",
        date: "31 Ocak 2026",
        category: "GEO / AI Search",
        slug: "ai-marka-mention-etkisi",
        image: "/images/blog/ai-mention.png"
    },
    // Future posts can be added here
];

export default function BlogPreview() {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-gray-500 uppercase mb-4 block">
                            İçgörüler
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                            Son Yayınlar <br />
                            <span className="text-gray-400">ve Stratejik Notlar</span>
                        </h2>
                    </div>
                    <Link
                        href="/icgoruler"
                        className="group flex items-center gap-2 text-foreground font-semibold hover:text-gray-600 transition-colors"
                    >
                        Tümünü Gör
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {latestPosts.map((post, idx) => (
                        <FadeIn key={post.slug} delay={idx * 0.2} className="h-full">
                            <article className="group relative cursor-pointer h-full">
                                <Link href={`/icgoruler/${post.slug}`} className="block h-full">
                                    <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-8 border border-gray-100 shadow-sm">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 text-sm font-medium">
                                            <span className="text-blue-600 uppercase tracking-widest">{post.category}</span>
                                            <span className="text-gray-300">•</span>
                                            <span className="text-gray-500">{post.date}</span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight group-hover:text-gray-600 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            </article>
                        </FadeIn>
                    ))}
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gray-100 rounded-full blur-3xl -z-10 opacity-60" />
        </section>
    );
}
