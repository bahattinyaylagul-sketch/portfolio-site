/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BlogPost, seoClusterData } from "@/lib/seo-data"; // Need to import this for types and related links
import dynamic from "next/dynamic";

const RelatedGuides = dynamic(() => import("@/components/RelatedGuides"));


interface Heading {
    text: string;
    id: string;
}

interface ArticleContentProps {
    post: BlogPost;
    headings: Heading[];
    contentWithIds: string;
    nextPost: BlogPost | null;
    basePath?: string;
}

export default function ArticleContent({ post, headings, contentWithIds, nextPost, basePath = "" }: ArticleContentProps) {
    const [activeSection, setActiveSection] = useState(headings.length > 0 ? headings[0].id : "");
    const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -60% 0px",
                threshold: 0
            }
        );

        headings.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, [headings]);

    return (
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-20">
            <div className="flex flex-col lg:grid lg:grid-cols-[280px_1fr] gap-12 items-start relative">
                {/* Left Sidebar: TOC Only - Sticky */}
                <aside className="hidden lg:block sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto pr-4 custom-scrollbar">
                    <div>
                        <div className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2 pl-2">
                            <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                            İÇİNDEKİLER
                        </div>
                        <nav className="space-y-1 border-l-2 border-gray-100">
                            {headings.map((heading, i) => (
                                <a
                                    key={i}
                                    href={`#${heading.id}`}
                                    className={`block py-3 pl-4 text-sm transition-all leading-relaxed -ml-0.5 border-l-2 ${activeSection === heading.id
                                        ? "text-blue-700 border-blue-700 font-medium bg-blue-50/50"
                                        : "text-gray-600 border-transparent hover:text-blue-700 hover:border-blue-300"
                                        }`}
                                    onClick={(e) => {
                                        const element = document.getElementById(heading.id);
                                        if (element) {
                                            const headerOffset = 100;
                                            const elementPosition = element.getBoundingClientRect().top;
                                            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                                            window.scrollTo({
                                                top: offsetPosition,
                                                behavior: "smooth"
                                            });
                                        }
                                        setActiveSection(heading.id);
                                    }}
                                >
                                    <span className="font-mono text-xs text-gray-400 mr-2 font-medium">{(i + 1).toString().padStart(2, '0')}</span>
                                    {heading.text}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* Main Content Column */}
                <article className="min-w-0">

                    {/* Mobile TOC */}
                    {headings.length > 0 && (
                        <div className="lg:hidden border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm mb-8">
                            <button
                                onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
                                className="w-full flex items-center justify-between p-4 bg-gray-50 text-left transition-colors hover:bg-gray-100"
                            >
                                <span className="font-bold text-gray-900 flex items-center gap-2 text-sm uppercase tracking-wider">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                                    </svg>
                                    İçindekiler
                                </span>
                                <svg
                                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isMobileTocOpen ? "rotate-180" : ""}`}
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileTocOpen ? "max-h-[60vh] overflow-y-auto opacity-100" : "max-h-0 opacity-0"}`}>
                                <nav className="p-4 border-t border-gray-100 bg-white">
                                    <ul className="space-y-3">
                                        {headings.map((heading) => (
                                            <li key={heading.id}>
                                                <a
                                                    href={`#${heading.id}`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        const element = document.getElementById(heading.id);
                                                        if (element) {
                                                            const headerOffset = 100;
                                                            const elementPosition = element.getBoundingClientRect().top;
                                                            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                                                            window.scrollTo({
                                                                top: offsetPosition,
                                                                behavior: "smooth"
                                                            });
                                                        }
                                                        setIsMobileTocOpen(false);
                                                        setActiveSection(heading.id);
                                                    }}
                                                    className={`block text-sm transition-colors ${activeSection === heading.id ? "text-blue-600 font-bold" : "text-gray-600 hover:text-blue-600"}`}
                                                >
                                                    {heading.text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}

                    {/* Lead Description (LCP Kritik Metin Bloğu) */}
                    <p className="text-xl text-gray-700 leading-relaxed font-light mb-12 pl-6 border-l-4 border-blue-600">
                        {post.description}
                    </p>

                    {/* TL;DR Section */}
                    <section aria-label="Özet (TL;DR)" className="mb-12 p-6 md:p-8 bg-blue-50/50 border border-blue-100/80 rounded-3xl shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-full">
                                TL;DR
                            </span>
                        </div>
                        <ul className="space-y-3.5 text-gray-700 text-[15px] leading-relaxed list-none pl-0 my-0">
                            {post.keyPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-blue-600 font-bold shrink-0 mt-0.5">✦</span>
                                    <span><strong>{point.title}:</strong> {point.desc}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Key Points */}
                    <section className="grid md:grid-cols-2 gap-4 mb-12">
                        {post.keyPoints.map((point, index) => (
                            <div key={index} className="p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100">
                                <h3 className="font-sans font-bold text-lg text-gray-900 mb-2">
                                    {point.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-[1.6] tracking-[-0.01em]">
                                    {point.desc}
                                </p>
                            </div>
                        ))}
                    </section>

                    {/* Content Body */}
                    <div
                        className="prose prose-lg max-w-none 
                        prose-headings:font-sans prose-headings:font-bold prose-headings:text-gray-900
                        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight
                        prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-gray-900
                        prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3 prose-h4:text-gray-900 prose-h4:font-bold
                        prose-p:font-sans prose-p:text-gray-700 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-8
                        prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8 prose-ul:space-y-3
                        prose-li:text-gray-700 prose-li:text-lg prose-li:leading-relaxed
                        prose-li:text-gray-700 prose-li:text-lg prose-li:leading-relaxed
                        prose-img:rounded-2xl prose-img:shadow-lg prose-img:w-full prose-img:h-auto prose-img:block
                        prose-strong:font-bold prose-strong:text-gray-900
                        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                        mb-16"
                        dangerouslySetInnerHTML={{ __html: contentWithIds }}
                    />

                    {/* Next Step CTA Banner */}
                    {nextPost && (
                        <div className="mb-20">
                            <Link
                                href={`${basePath}/${nextPost.slug}`}
                                className="block relative overflow-hidden bg-gray-900 rounded-2xl p-10 text-white group hover:bg-black transition-colors shadow-2xl"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-blue-600/30 transition-all"></div>

                                <div className="relative z-10 flex items-center justify-between gap-6">
                                    <div>
                                        <span className="inline-block px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 text-xs font-bold tracking-widest uppercase mb-3 border border-blue-500/30">
                                            SIRADAKİ ADIM
                                        </span>
                                        <h3 className="text-3xl font-bold mb-2 group-hover:translate-x-1 transition-transform">
                                            {nextPost.title}
                                        </h3>
                                        <p className="text-gray-400 max-w-xl text-lg opacity-80">
                                            {nextPost.description}
                                        </p>
                                    </div>
                                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300 shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}

                    {/* Ayrıca Bakınız */}
                    {(() => {
                        const siblings = Object.values(seoClusterData)
                            .filter((item) => item.parent === post.parent && item.slug !== post.slug)
                            .slice(0, 3);
                        if (siblings.length === 0) return null;

                        return (
                            <div className="mt-16 border-t border-gray-100 pt-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Ayrıca Bakınız</h2>
                                <ul className="space-y-6 mb-8">
                                    {siblings.map((sib) => (
                                        <li key={sib.slug} className="list-none">
                                            <Link
                                                href={`${basePath}/${sib.slug}`}
                                                className="inline-flex items-center text-blue-600 hover:underline font-bold group text-lg"
                                            >
                                                <span className="w-2 h-2 rounded-full bg-blue-600 mr-3 group-hover:scale-125 transition-all" />
                                                {sib.title}
                                            </Link>
                                            <p className="text-sm text-gray-500 ml-5 mt-1 leading-relaxed max-w-2xl">{sib.description}</p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-6 border-t border-gray-100">
                                    <Link href="/seo" className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-gray-800 transition-colors">
                                        ← SEO Danışmanlığı ana sayfasına dön
                                    </Link>
                                </div>
                            </div>
                        );
                    })()}
                </article>
            </div>
        </div>
    );
}
