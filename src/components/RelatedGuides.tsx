
import Link from 'next/link';
import FadeIn from './FadeIn';
import { BlogPost } from '@/lib/seo-data';

interface RelatedGuidesProps {
    posts: BlogPost[];
    title?: string;
    description?: string;
    className?: string;
}

export default function RelatedGuides({
    posts,
    title = "İlgili Teknik Rehberler",
    description,
    className = ""
}: RelatedGuidesProps) {
    if (!posts || posts.length === 0) return null;

    return (
        <FadeIn delay={0.2} className={className}>
            <div className="mt-20 border-t border-gray-100 pt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                    {title}
                </h2>
                {description && (
                    <p className="text-gray-600 mb-8 -mt-6">{description}</p>
                )}
                <section className="grid md:grid-cols-2 gap-6">
                    {posts.map((post) => (
                        <Link
                            href={`/${post.slug}`}
                            key={post.slug}
                            className="group block p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                        >
                            <article className="flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h3>
                                {/* Snippet generation: First 140-180 chars of description */}
                                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                                    {post.description.length > 180
                                        ? post.description.substring(0, 180) + "..."
                                        : post.description}
                                </p>
                                <div className="mt-auto pt-4">
                                    <span className="inline-flex items-center text-sm font-bold text-blue-600">
                                        Okumaya Başla <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                                    </span>
                                </div>
                            </article>
                        </Link>
                    ))}
                </section>
            </div>
        </FadeIn>
    );
}
