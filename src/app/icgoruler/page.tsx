import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image"; // Added Image import
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "İçgörüler | Bahattin Yaylagül",
    description: "SEO, GEO ve dijital pazarlama üzerine stratejik fikirler ve derinlemesine analizler.",
};

const posts = [
    {
        slug: "reddit-forum-mention-etkisi",
        title: "Reddit ve Forumlardaki Mention'lar GEO Başarısını Nasıl Etkiler?",
        excerpt: "Reddit ve forumlardaki mention’lar (bahsedilmeler), GEO başarısı için kritik bir 'güven doğrulama' mekanizması olarak çalışır.",
        date: "31 Ocak 2026",
        category: "GEO / AI Search"
    },
    {
        slug: "ai-marka-mention-etkisi",
        title: "Marka İsminin 'Mention' Olarak Geçmesi AI Hafızasını Nasıl Etkiler?",
        excerpt: "Link olmadan, sadece metin içinde 'mention' olarak geçmek, AI algoritmalarının hafızasını ve karar mekanizmasını doğrudan etkiler. İşte 4 kritik etki.",
        date: "31 Ocak 2026",
        category: "GEO / AI Search"
    }
];

export default function InsightsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground font-sans">
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <Navigation />
            </header>

            {/* Simple Light Header */}
            <div className="pt-32 pb-8 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">
                        Blog & Analizler
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        İçgörüler
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Arama motorları, yapay zeka ve dijital büyüme üzerine stratejik düşünceler.
                    </p>
                </div>
            </div>

            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid gap-12">
                        {posts.length > 0 ? (
                            posts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/icgoruler/${post.slug}`}
                                    className="group block border-b border-gray-100 pb-12 hover:border-gray-300 transition-colors"
                                >
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                        <span className="font-medium text-blue-600 uppercase tracking-wider">{post.category}</span>
                                        <span>•</span>
                                        <span>{post.date}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        {post.excerpt}
                                    </p>
                                    <span className="text-sm font-semibold text-foreground underline decoration-gray-300 underline-offset-4 group-hover:decoration-blue-600 transition-all">
                                        Devamını Oku
                                    </span>
                                </Link>
                            ))
                        ) : (
                            <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100 border-dashed">
                                <p className="text-gray-500 italic">Henüz yayınlanmış bir içerik bulunmuyor. İlk yazı çok yakında!</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
