/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
    { year: "2024+", role: "SEO & GEO Danışmanı", company: "Bağımsız" },
    { year: "2020-2024", role: "SEO Lead", company: "Enterprise Ajans" },
    { year: "2016-2020", role: "SEO Specialist", company: "Dijital Ajans" },
];

const skills = [
    "Teknik SEO",
    "İçerik Stratejisi",
    "GEO / AI Optimization",
    "Schema Markup",
    "Analytics",
    "Python / Automation",
];

export default function About() {
    return (
        <section id="about" className="py-8 lg:py-24 bg-white" aria-labelledby="about-heading">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    {/* Left - Photo & Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="relative lg:sticky lg:top-32 flex flex-col items-center justify-center p-0 lg:p-8 h-fit"
                    >
                        <div className="relative">
                            {/* Decorative Circle Background */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-gray-100 rounded-full -z-10" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gray-50 rounded-full -z-20" />

                            {/* Photo Container - Circular & Smaller */}
                            <div className="w-48 h-48 md:w-56 md:h-56 relative rounded-full overflow-hidden border-4 border-white shadow-2xl group z-10 transition-transform hover:scale-105 duration-500">
                                <div className="absolute inset-0 bg-gray-200 animate-pulse" />

                                <Image
                                    src="/images/bahattin-yaylagul.jpg"
                                    alt="Bahattin Yaylagül - SEO & GEO Danışmanı"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-2 -right-4 bg-black text-white px-4 py-2 rounded-full shadow-xl border-4 border-white z-20 flex flex-col items-center"
                            >
                                <span className="text-xl font-black leading-none">12+</span>
                                <span className="text-[10px] text-gray-400 uppercase tracking-widest leading-none mt-0.5">Yıl</span>
                            </motion.div>

                            {/* Decorative Blur behind */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-black/20 blur-3xl rounded-full -z-10 opacity-40 transform scale-110" />
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-4 block">
                            Hakkımda
                        </h1>

                        <p className="text-gray-600 leading-relaxed mb-6">
                            Yaklaşık 12+ yıldır SEO ve dijital görünürlük alanında; yerel ve global ölçekte birçok lider markanın büyüme projelerinde yer aldım.
                        </p>



                        {/* Experience Timeline */}
                        <div className="mb-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                Kariyer Yolculuğu
                            </h2>
                            <div className="space-y-6 border-l-2 border-gray-100 ml-3 pl-8 relative">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[41px] top-1.5 w-5 h-5 bg-black rounded-full border-4 border-white shadow-sm ring-1 ring-gray-100" />
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 block">2023 — Current</span>
                                    <div>
                                        <h3 className="font-bold text-foreground text-lg">Co-Founder</h3>
                                        <span className="text-gray-500 font-medium">C-Level Agency</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[41px] top-1.5 w-5 h-5 bg-gray-200 rounded-full border-4 border-white shadow-sm" />
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 block">2019 — 2023</span>
                                    <div>
                                        <h3 className="font-bold text-foreground text-lg">SEO Director & Team Lead</h3>
                                        <span className="text-gray-500 font-medium">Digital House</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[41px] top-1.5 w-5 h-5 bg-gray-200 rounded-full border-4 border-white shadow-sm" />
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 block">2018 — 2019</span>
                                    <div>
                                        <h3 className="font-bold text-foreground text-lg">SEO Manager</h3>
                                        <span className="text-gray-500 font-medium">Humble</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[41px] top-1.5 w-5 h-5 bg-gray-200 rounded-full border-4 border-white shadow-sm" />
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 block">2016 — 2018</span>
                                    <div>
                                        <h3 className="font-bold text-foreground text-lg">Sr. SEO Executive</h3>
                                        <span className="text-gray-500 font-medium">Digital Partners</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[41px] top-1.5 w-5 h-5 bg-gray-200 rounded-full border-4 border-white shadow-sm" />
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 block">2015 — 2018</span>
                                    <div>
                                        <h3 className="font-bold text-foreground text-lg">ASO Consultant</h3>
                                        <span className="text-gray-500 font-medium">Pepapp BV.</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[41px] top-1.5 w-5 h-5 bg-gray-200 rounded-full border-4 border-white shadow-sm" />
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 block">2012 — 2016</span>
                                    <div>
                                        <h3 className="font-bold text-foreground text-lg">SEO Executive & Medya Şefi</h3>
                                        <span className="text-gray-500 font-medium">Ofisten / Medya Şef</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Skills */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                Yetkinlikler
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Business Strategy",
                                    "SEO & Digital Marketing Operations",
                                    "Team Leadership",
                                    "ASO (App Store Optimization)",
                                    "GEO / AI Optimization",
                                    "Technical SEO"
                                ].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>


                        {/* Top Clients - Text Based Tag Cloud */}
                        <div className="mt-10 pt-8 border-t border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                Projeler
                            </h2>
                            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                                Bugüne kadar çalıştığım markalar.
                            </p>
                            <div className="text-sm text-gray-500 leading-relaxed font-medium">
                                {[
                                    "Aktif Bank", "Vans", "The North Face", "Siemens", "Bosch",
                                    "N Kolay", "Passo", "Golf Dondurmaları", "Signal", "Neutrogena",
                                    "Profilo", "Panasonic", "Levi's", "Timberland", "Tommy Hilfiger",
                                    "Calvin Klein", "Eastpak", "LTB Jeans", "Dockers", "Hemington",
                                    "Yargıcı", "Gizia", "Lee Cooper", "Yatsan", "Daikin",
                                    "NN Hayat", "Enza Home", "Troy", "Kahve Dünyası",
                                    "Little Caesars", "Koroplast", "Bahçıvan Peynir", "Crocs",
                                    "EnPlus", "Mandarin Oriental", "Eveshop", "Mapfre Sigorta",
                                    "Pronet", "D-Smart", "Bayındır Hastanesi", "Suryapı"
                                ].join(" • ")}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}
