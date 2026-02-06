"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            id="hero"
            className="pt-48 pb-24 px-6 flex items-center justify-center"
        >
            <div className="max-w-4xl mx-auto text-center">
                {/* Subtitle */}
                {/* Subtitle Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-10"
                >
                    <span className="px-5 py-2 rounded-full border border-gray-200 bg-white/40 backdrop-blur-md text-[10px] md:text-xs font-medium tracking-[0.15em] text-gray-800 uppercase shadow-sm">
                        SEO · GEO · AI Search Architect
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-sans font-semibold tracking-tight text-foreground leading-[1.1] mb-8"
                >
                    SEO artık sabit bir <br className="md:hidden" />
                    <span>sıralama yarışı</span> değil,
                    <br />
                    AI sistemlerinin seni yeniden seçme <br className="md:hidden" />
                    <span>olasılığını artırma</span> sanatıdır.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-500 font-sans text-base md:text-lg font-light tracking-widest mb-12 max-w-2xl mx-auto uppercase"
                >
                    Modern Arama Ekosistemi İçin Stratejik Danışmanlık
                </motion.p>



                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/seo"
                        className="px-8 py-3 bg-foreground text-white text-sm font-light rounded-full hover:bg-gray-800 transition-colors uppercase tracking-wider"
                    >
                        SEO Hizmetleri
                    </Link>
                    <Link
                        href="/geo"
                        className="px-8 py-3 border border-gray-300 text-foreground text-sm font-light rounded-full hover:border-foreground transition-colors uppercase tracking-wider"
                    >
                        GEO Hizmetleri
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
