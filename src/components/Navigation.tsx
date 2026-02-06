"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

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

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Determine text color based on scroll state and theme
    const isDarkBg = theme === "dark" && !scrolled;

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/90 backdrop-blur-md py-4 shadow-sm"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
                <Link
                    href="/"
                    className={`text-lg font-bold tracking-widest transition-colors ${isDarkBg ? "text-white" : "text-foreground"
                        }`}
                >
                    BY.
                </Link>

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

                {/* CTA Button */}
                <Link
                    href="/#contact"
                    className={`hidden md:block px-5 py-2 text-sm font-medium rounded-full transition-colors ${isDarkBg
                            ? "bg-white text-gray-900 hover:bg-gray-200"
                            : "bg-foreground text-white hover:bg-gray-800"
                        }`}
                >
                    İletişim
                </Link>

                {/* Mobile Menu Button */}
                <button className="md:hidden flex flex-col gap-1 p-2">
                    <span className="w-5 h-0.5 bg-foreground" />
                    <span className="w-3 h-0.5 bg-foreground" />
                </button>
            </div>
        </motion.nav>
    );
}
