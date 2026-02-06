"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hakkımda", href: "/hakkimda" },
    { label: "SEO", href: "/seo" },
    { label: "GEO", href: "/geo" },
    { label: "Vaka Çalışmaları", href: "/vaka-calismalari" },
    { label: "İçgörüler", href: "/icgoruler" },
    { label: "Referanslar", href: "/referanslar" },
];

interface NavigationProps {
    theme?: "light" | "dark";
}

export default function Navigation({ theme = "light" }: NavigationProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    // Determine text color based on scroll state and theme (for desktop)
    const isDarkBg = theme === "dark" && !scrolled;

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen
                ? "bg-white/90 backdrop-blur-md py-4 shadow-sm"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
                <Link
                    href="/"
                    className={`text-lg font-bold tracking-widest transition-colors z-50 ${isDarkBg && !mobileMenuOpen ? "text-white" : "text-foreground"
                        }`}
                >
                    BY.
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8">
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                        >
                            <Link
                                href={item.href}
                                className={`text-sm transition-colors duration-200 ${isDarkBg
                                    ? "text-gray-300 hover:text-white"
                                    : "text-gray-600 hover:text-foreground"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <Link
                    href="/#contact"
                    className={`hidden md:block px-5 py-2 text-sm font-medium rounded-full transition-colors ${isDarkBg
                        ? "bg-white text-gray-900 hover:bg-gray-200"
                        : "bg-foreground text-white hover:bg-gray-800"
                        }`}
                >
                    İletişim
                </Link>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2 z-50 group focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <motion.span
                        animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className={`w-6 h-0.5 transition-colors ${isDarkBg && !mobileMenuOpen ? "bg-white" : "bg-black"}`}
                    />
                    <motion.span
                        animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        className={`w-4 h-0.5 transition-colors ${isDarkBg && !mobileMenuOpen ? "bg-white" : "bg-black"}`}
                    />
                    <motion.span
                        animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className={`w-6 h-0.5 transition-colors ${isDarkBg && !mobileMenuOpen ? "bg-white" : "bg-black"}`}
                    />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 top-0 bg-white z-40 md:hidden flex flex-col pt-24 px-6 overflow-hidden"
                    >
                        <ul className="flex flex-col gap-6 text-2xl font-light">
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 + 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`block border-b border-gray-100 pb-4 ${pathname === item.href ? "text-black font-bold" : "text-gray-600"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navItems.length * 0.05 + 0.1 }}
                            >
                                <Link
                                    href="/#contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block border-b border-gray-100 pb-4 text-gray-600"
                                >
                                    İletişim
                                </Link>
                            </motion.li>
                        </ul>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-auto pb-12 text-sm text-gray-400"
                        >
                            <p>© 2024 Bahattin Yaylagül</p>
                            <p className="mt-2">SEO & GEO Danışmanlığı</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
