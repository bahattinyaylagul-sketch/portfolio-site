"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-20 px-6"
            aria-labelledby="contact-heading"
        >
            <div className="max-w-5xl mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-gray-500 uppercase mb-4"
                >
                    İletişim
                </motion.p>

                <motion.h2
                    id="contact-heading"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-bold text-foreground mb-6"
                >
                    Projenizi Konuşalım
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-600 mb-10 max-w-md mx-auto"
                >
                    SEO veya GEO danışmanlığı için ücretsiz ön görüşme planlayalım.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="mailto:bahattinyaylagul@gmail.com"
                        className="px-8 py-3 bg-foreground text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
                    >
                        bahattinyaylagul@gmail.com
                    </a>
                    <a
                        href="https://www.linkedin.com/in/bahattin-yaylagul/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border border-gray-300 text-foreground text-sm font-medium rounded-full hover:border-foreground transition-colors"
                    >
                        LinkedIn
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
