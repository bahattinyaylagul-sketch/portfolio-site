"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { label: "Ana Sayfa", href: "/", ariaLabel: "Bahattin Yaylagül Portfolyo Ana Sayfası", srLabel: " - Bahattin Yaylagül Portfolyo Ana Sayfası" },
    { label: "Hakkımda", href: "/hakkimda", ariaLabel: "Bahattin Yaylagül Hakkında Bilgi", srLabel: " - Bahattin Yaylagül Özgeçmiş ve Detaylar" },
    { label: "SEO", href: "/seo", ariaLabel: "SEO Danışmanlığı ve Organik Büyüme Hizmetleri", srLabel: " Danışmanlığı ve Organik Büyüme Hizmetleri" },
    { label: "GEO", href: "/geo", ariaLabel: "GEO (Generative Engine Optimization) Hizmetleri", srLabel: " (Generative Engine Optimization) Danışmanlığı" },
    { label: "İçgörüler", href: "/icgoruler", ariaLabel: "SEO, GEO ve Yapay Zeka Hakkında İçgörüler", srLabel: " - SEO, GEO ve Yazılım Makaleleri" },
];

interface NavigationProps {
    theme?: "light" | "dark";
}

export default function Navigation({ theme = "light" }: NavigationProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = useCallback(() => {
        setMobileMenuOpen(prev => !prev);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.touchAction = "none";
        } else {
            document.body.style.overflow = "unset";
            document.body.style.touchAction = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
            document.body.style.touchAction = "unset";
        };
    }, [mobileMenuOpen]);

    const isDarkBg = theme === "dark" && !scrolled;

    return (
        <>
            {/* Main Header Bar */}
            <nav
                className={`fixed top-0 left-0 right-0 transition-all duration-300 pointer-events-auto ${scrolled || mobileMenuOpen
                    ? "bg-white/95 backdrop-blur-xl py-4 shadow-sm"
                    : "bg-transparent py-6"
                    }`}
                style={{ zIndex: 9999 }}
                aria-label="Main Navigation"
            >
                <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
                    <Link
                        href="/"
                        aria-label="Bahattin Yaylagül Portfolyo Ana Sayfası"
                        className={`text-lg font-bold tracking-widest transition-colors ${isDarkBg && !mobileMenuOpen ? "text-white" : "text-foreground"
                            }`}
                        style={{ position: 'relative', zIndex: 10001 }}
                    >
                        BY.
                        <span className="sr-only"> - Bahattin Yaylagül Portfolyo Ana Sayfası</span>
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    aria-label={item.ariaLabel}
                                    className={`text-sm transition-colors duration-200 ${isDarkBg
                                        ? "text-gray-300 hover:text-white"
                                        : "text-gray-600 hover:text-foreground"
                                        }`}
                                >
                                    {item.label}
                                    {item.srLabel && <span className="sr-only">{item.srLabel}</span>}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="/#contact"
                                aria-label="İletişime Geçin ve Ücretsiz Teklif Alın"
                                className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${isDarkBg
                                    ? "bg-white text-gray-900 hover:bg-gray-200"
                                    : "bg-foreground text-white hover:bg-gray-800"
                                    }`}
                            >
                                İletişim
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Toggle Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
                        style={{ position: 'relative', zIndex: 10001 }}
                        aria-label={mobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
                    >
                        <span className={`block w-6 h-0.5 transition-all duration-300 origin-center ${mobileMenuOpen ? "bg-black rotate-45 translate-y-2" : (isDarkBg ? "bg-white" : "bg-black")}`} />
                        <span className={`block w-4 h-0.5 transition-all duration-200 ${mobileMenuOpen ? "opacity-0" : (isDarkBg ? "bg-white" : "bg-black")}`} />
                        <span className={`block w-6 h-0.5 transition-all duration-300 origin-center ${mobileMenuOpen ? "bg-black -rotate-45 -translate-y-2" : (isDarkBg ? "bg-white" : "bg-black")}`} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                id="mobile-menu"
                className={`fixed inset-0 bg-white md:hidden flex flex-col pt-24 px-6 transition-all duration-500 ease-in-out ${mobileMenuOpen ? "opacity-100 pointer-events-auto translate-x-0" : "opacity-0 pointer-events-none translate-x-full"}`}
                style={{ zIndex: 9998 }}
            >
                <ul className="flex flex-col gap-4 text-2xl font-light">
                    {navItems.map((item) => (
                        <li key={item.href} className={`transform transition-all duration-500 ${mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
                             <Link
                                href={item.href}
                                aria-label={item.ariaLabel}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block border-b border-gray-100 pb-3 ${pathname === item.href ? "text-black font-medium" : "text-gray-400"}`}
                            >
                                {item.label}
                                {item.srLabel && <span className="sr-only">{item.srLabel}</span>}
                            </Link>
                        </li>
                    ))}
                    <li className={`transform transition-all duration-500 ${mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
                        <Link
                            href="/#contact"
                            aria-label="İletişime Geçin ve Ücretsiz Teklif Alın"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block border-b border-gray-100 pb-3 text-gray-400"
                        >
                            İletişim
                        </Link>
                    </li>
                </ul>

                <div className="mt-auto pb-12">
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="https://linkedin.com/in/bahattin-yaylagul" target="_blank" rel="noopener noreferrer" aria-label="Bahattin Yaylagül Profesyonel LinkedIn Profili">LinkedIn</a>
                        <a href="https://medium.com/@bahattinyaylagl" target="_blank" rel="noopener noreferrer" aria-label="Bahattin Yaylagül Medium Blog Yazıları">Medium</a>
                    </div>
                </div>
            </div>
        </>
    );
}
