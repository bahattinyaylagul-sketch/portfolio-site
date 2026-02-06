"use client";

import { useState, useEffect } from "react";
import { tableOfContents } from "./data";

export default function SEONavigator() {
    const [activeSection, setActiveSection] = useState("what-is-seo");
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

        const timer = setTimeout(() => {
            tableOfContents.forEach((item) => {
                const element = document.getElementById(item.id);
                if (element) observer.observe(element);
            });
        }, 100);

        return () => {
            observer.disconnect();
            clearTimeout(timer);
        };
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block relative">
                <div className="sticky top-28">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                        İçindekiler
                    </h3>
                    <nav>
                        <ul className="space-y-2">
                            {tableOfContents.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => {
                                            scrollToSection(item.id);
                                            setActiveSection(item.id);
                                        }}
                                        className={`block w-full text-left py-2 px-4 rounded-lg text-sm transition-all duration-200 ${activeSection === item.id
                                            ? "bg-gray-900 text-white font-medium"
                                            : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        {item.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* CTA in Sidebar */}
                    <div className="mt-8 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-white">
                        <h4 className="font-semibold mb-2">Ücretsiz Analiz</h4>
                        <p className="text-sm text-gray-300 mb-4">
                            Sitenizin SEO durumunu değerlendirelim.
                        </p>
                        <a
                            href="#contact"
                            className="block text-center py-2 px-4 bg-white text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            Randevu Al
                        </a>
                    </div>
                </div>
            </aside>

            {/* Mobile TOC Portal - This needs to be placed strategically in mobile view, or we can render it here and use CSS grid/flex order */}
            {/* Since we cannot easily portal in RSC architecture without layout shifts, we'll render a separate Mobile component where needed or keep it here if layout allows */}
        </>
    );
}

export function SEOMobileNav() {
    const [activeSection, setActiveSection] = useState("what-is-seo");
    const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

    // Replicate observer logic or share context? Sharing context is complex.
    // Let's duplicate observer for simplicity, or just ignore sync for mobile closed state.
    // Sync is actually nice. Let's keep it simple: Just Toggle.

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
        setIsMobileTocOpen(false);
        setActiveSection(id);
    };

    return (
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

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileTocOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <nav className="p-4 border-t border-gray-100 bg-white">
                    <ul className="space-y-3">
                        {tableOfContents.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className={`block w-full text-left text-sm transition-colors ${activeSection === item.id ? "text-blue-600 font-bold" : "text-gray-600 hover:text-blue-600"}`}
                                >
                                    {item.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
