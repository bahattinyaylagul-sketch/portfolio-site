"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { seoClusterData } from "@/lib/seo-data";
import { geoClusterData } from "@/lib/geo-data";

const navItems = [
    { label: "Ana Sayfa", href: "/", ariaLabel: "Bahattin Yaylagül Portfolyo Ana Sayfası", srLabel: " - Bahattin Yaylagül Portfolyo Ana Sayfası" },
    { label: "Hakkımda", href: "/hakkimda", ariaLabel: "Bahattin Yaylagül Hakkında Bilgi", srLabel: " - Bahattin Yaylagül Özgeçmiş ve Detaylar" },
    { label: "SEO", href: "/seo", ariaLabel: "SEO Danışmanlığı ve Organik Büyüme Hizmetleri", srLabel: " Danışmanlığı ve Organik Büyüme Hizmetleri" },
    { label: "GEO", href: "/geo", ariaLabel: "GEO (Generative Engine Optimization) Hizmetleri", srLabel: " (Generative Engine Optimization) Danışmanlığı" },
];

interface NavigationProps {
    theme?: "light" | "dark";
}

export default function Navigation({ theme = "light" }: NavigationProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const seoCount = Object.keys(seoClusterData).filter(key => key !== 'tarama' && key !== 'indeksleme').length + 1; // 18
    const geoCount = Object.keys(geoClusterData).length + 1; // 4
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setMobileMenuOpen(prev => !prev);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || window.scrollY || 0;
            setScrolled(scrollTop > 50);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        document.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("touchmove", handleScroll, { passive: true });
        
        // Interval checks to catch asynchronous scroll restoration on mobile load
        const interval = setInterval(handleScroll, 100);
        const timeout = setTimeout(() => clearInterval(interval), 1000);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("scroll", handleScroll);
            window.removeEventListener("touchmove", handleScroll);
            clearInterval(interval);
            clearTimeout(timeout);
        };
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

    const navBgClass = scrolled || mobileMenuOpen
        ? "bg-white/95 backdrop-blur-xl py-4 shadow-sm"
        : theme === "dark"
            ? "bg-[#0a0a0a]/95 backdrop-blur-xl md:bg-transparent py-4 md:py-6 border-b border-white/5 md:border-b-0"
            : "bg-white/95 backdrop-blur-xl md:bg-transparent py-4 md:py-6 border-b border-gray-100 md:border-b-0 shadow-sm md:shadow-none";

    return (
        <>
            {/* Main Header Bar */}
            <nav
                className={`fixed top-0 left-0 right-0 transition-all duration-300 pointer-events-auto ${navBgClass}`}
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
                        {/* Ana Sayfa */}
                        <li>
                            <Link
                                href="/"
                                className={`text-sm transition-colors duration-200 ${isDarkBg ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-foreground"}`}
                            >
                                Ana Sayfa
                            </Link>
                        </li>

                        {/* Hakkımda */}
                        <li>
                            <Link
                                href="/hakkimda"
                                className={`text-sm transition-colors duration-200 ${isDarkBg ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-foreground"}`}
                            >
                                Hakkımda
                            </Link>
                        </li>

                        {/* SEO with Mega Menu */}
                        <li className="group relative py-2">
                            <Link
                                href="/seo"
                                className={`text-sm transition-colors duration-200 flex items-center gap-1 ${isDarkBg ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-foreground"}`}
                            >
                                SEO
                                <svg className="w-3.5 h-3.5 opacity-60 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>
                            {/* Mega Menu Dropdown */}
                            <div className="absolute top-full left-1/2 -translate-x-[40%] mt-1 w-[680px] bg-white border border-gray-100 rounded-3xl p-6 shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-[99999] grid grid-cols-3 gap-6">
                                <div>
                                    <h4 className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-3">On-Page</h4>
                                    <ul className="space-y-2">
                                        <li><Link href="/seo/arama-niyeti" className="text-sm font-semibold text-gray-700 hover:text-blue-600 block">Arama Niyeti</Link></li>
                                        <li><Link href="/seo/semantik-yazim" className="text-sm font-semibold text-gray-700 hover:text-blue-600 block">Semantik Yazım</Link></li>
                                        <li><Link href="/seo/silo-mimarisi" className="text-sm font-semibold text-gray-700 hover:text-blue-600 block">Silo Mimarisi</Link></li>
                                        <li><Link href="/seo/site-ici-seo" className="text-sm font-semibold text-gray-700 hover:text-blue-600 block">Site İçi SEO</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-3">İçerik &amp; Dışı</h4>
                                    <ul className="space-y-2">
                                        <li><Link href="/seo/icerik-optimizasyonu" className="text-sm font-semibold text-gray-700 hover:text-blue-600 block">İçerik Optimizasyonu</Link></li>
                                        <li><Link href="/seo/bilgi-kazanci" className="text-sm font-semibold text-gray-700 hover:text-blue-600 block">Bilgi Kazancı</Link></li>
                                        <li><Link href="/seo/topikal-otorite" className="text-sm font-semibold text-gray-700 hover:text-blue-600 block">Topikal Otorite</Link></li>
                                        <li><Link href="/seo/yerel-seo" className="text-sm font-semibold text-gray-700 hover:text-blue-600 block">Yerel SEO</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-3">Teknik SEO</h4>
                                    <ul className="space-y-2">
                                        <li><Link href="/seo/teknik-seo" className="text-sm font-semibold text-gray-700 hover:text-blue-600 block">Genel Altyapı</Link></li>
                                        <li><Link href="/seo/core-web-vitals" className="text-sm font-semibold text-gray-700 hover:text-blue-600 block">Core Web Vitals</Link></li>
                                        <li><Link href="/seo/tarama-ve-indeksleme" className="text-sm font-semibold text-gray-700 hover:text-blue-600 block">Tarama &amp; İndeks</Link></li>
                                        <li><Link href="/seo" className="text-xs font-bold text-blue-600 hover:text-blue-700 block pt-1">Tüm Konular →</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        {/* GEO with Dropdown */}
                        <li className="group relative py-2">
                            <Link
                                href="/geo"
                                className={`text-sm transition-colors duration-200 flex items-center gap-1 ${isDarkBg ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-foreground"}`}
                            >
                                GEO
                                <svg className="w-3.5 h-3.5 opacity-60 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>
                            {/* Dropdown Menu */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[260px] bg-white border border-gray-100 rounded-2xl p-4 shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-[99999]">
                                <ul className="space-y-2.5">
                                    <li><Link href="/geo/llms-txt-nedir" className="text-sm font-semibold text-gray-700 hover:text-violet-600 block">llms.txt Rehberi</Link></li>
                                    <li><Link href="/geo/reddit-forum-mention-etkisi" className="text-sm font-semibold text-gray-700 hover:text-violet-600 block">Reddit Mention Etkisi</Link></li>
                                    <li><Link href="/geo/ai-marka-mention-etkisi" className="text-sm font-semibold text-gray-700 hover:text-violet-600 block">Marka Mention'ları</Link></li>
                                    <li className="pt-1.5 border-t border-gray-50"><Link href="/geo" className="text-xs font-bold text-violet-600 hover:text-violet-700 block">Tüm GEO Rehberleri →</Link></li>
                                </ul>
                            </div>
                        </li>

                        {/* Rehberler with Dropdown */}
                        <li className="group relative py-2">
                            <button
                                className={`text-sm transition-colors duration-200 flex items-center gap-1 focus:outline-none ${isDarkBg ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-foreground"}`}
                            >
                                Rehberler
                                <svg className="w-3.5 h-3.5 opacity-60 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {/* Kompakt Dropdown Menu Panel (width ~500px, height ~180px, side-by-side cards) */}
                            <div className="absolute top-full left-1/2 -translate-x-[75%] mt-1 w-[460px] bg-white border border-gray-100 rounded-3xl p-5 shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-[99999] flex gap-4">
                                <Link
                                    href="/seo"
                                    className="flex-1 p-4 bg-gray-50/50 hover:bg-blue-50/20 border border-gray-100 hover:border-blue-200 rounded-2xl transition-all group/item"
                                >
                                    <span className="text-[9px] font-extrabold tracking-widest text-blue-600 uppercase block mb-1">
                                        SEO REHBERLERİ
                                    </span>
                                    <span className="text-xs text-gray-500 font-semibold block mb-0.5">
                                        {seoCount} içerik
                                    </span>
                                    <span className="text-[10px] font-bold text-gray-400 group-hover/item:text-blue-600 transition-colors">
                                        İncele →
                                    </span>
                                </Link>
                                <Link
                                    href="/geo"
                                    className="flex-1 p-4 bg-gray-50/50 hover:bg-violet-50/20 border border-gray-100 hover:border-violet-200 rounded-2xl transition-all group/item"
                                >
                                    <span className="text-[9px] font-extrabold tracking-widest text-violet-600 uppercase block mb-1">
                                        GEO REHBERLERİ
                                    </span>
                                    <span className="text-xs text-gray-500 font-semibold block mb-0.5">
                                        {geoCount} içerik
                                    </span>
                                    <span className="text-[10px] font-bold text-gray-400 group-hover/item:text-violet-600 transition-colors">
                                        İncele →
                                    </span>
                                </Link>
                            </div>
                        </li>

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
            <nav
                id="mobile-menu"
                className={`fixed inset-0 bg-white md:hidden flex flex-col pt-24 px-6 transition-all duration-500 ease-in-out ${mobileMenuOpen ? "opacity-100 pointer-events-auto translate-x-0" : "opacity-0 pointer-events-none translate-x-full"}`}
                style={{ zIndex: 9998 }}
                aria-label="Mobile Navigation"
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
                     {/* Mobile Rehberler Accordion */}
                     <li className={`transform transition-all duration-500 ${mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
                         <button
                             onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                             className="w-full flex items-center justify-between border-b border-gray-100 pb-3 text-gray-400 text-left font-light"
                         >
                             <span>Rehberler</span>
                             <svg className={`w-5 h-5 transition-transform duration-300 ${mobileDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                             </svg>
                         </button>
                         <div className={`overflow-hidden transition-all duration-300 ${mobileDropdownOpen ? "max-h-40 opacity-100 mt-2 pl-4" : "max-h-0 opacity-0"}`}>
                             <ul className="space-y-3 pb-3">
                                 <li>
                                     <Link
                                         href="/seo"
                                         onClick={() => setMobileMenuOpen(false)}
                                         className="block text-xl text-gray-500 hover:text-black font-light"
                                     >
                                         SEO Rehberleri <span className="text-xs text-gray-400 font-semibold">({seoCount})</span>
                                     </Link>
                                 </li>
                                 <li>
                                     <Link
                                         href="/geo"
                                         onClick={() => setMobileMenuOpen(false)}
                                         className="block text-xl text-gray-500 hover:text-black font-light"
                                     >
                                         GEO Rehberleri <span className="text-xs text-gray-400 font-semibold">({geoCount})</span>
                                     </Link>
                                 </li>
                             </ul>
                         </div>
                     </li>

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
             </nav>
        </>
    );
}
