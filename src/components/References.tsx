/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";



const clients = [
    // Global & Kurumsal
    "Vans", "The North Face", "Siemens", "Bosch", "Tommy Hilfiger", "Calvin Klein", "Levi's", "Crocs", "Timberland", "Eastpak", "Dockers", "Lee Cooper",
    // Finans & Sağlık
    "Aktif Bank", "N Kolay", "DünyaGöz", "Yeditepe Üni. Hastanesi", "Mapfre Sigorta", "Pronet", "ING", "MetLife", "NN Hayat",
    // Teknoloji & Beyaz Eşya
    "Profilo", "Panasonic", "Daikin", "Enplus", "CloudTech", "TechCorp",
    // Perakende & Moda & Diğer
    "Kahve Dünyası", "Little Caesars", "Golf Dondurmaları", "Koroplast", "Bahçıvan Peynir", "Yargıcı", "LTB", "Hemington", "Yatsan", "Enza Home", "Gizia", "Troy", "TOBB ETÜ"
];

const MarqueeRow = ({ items, direction = "left" }: { items: string[], direction?: "left" | "right" }) => (
    <div className="relative flex overflow-hidden group">
        <div className={`flex gap-16 py-6 animate-scroll ${direction === 'right' ? 'direction-reverse hover:[animation-play-state:paused]' : 'hover:[animation-play-state:paused]'}`}>
            {[...items, ...items, ...items].map((brand, idx) => (
                <span
                    key={`${brand}-${idx}`}
                    className="text-2xl md:text-3xl font-bold text-gray-300 whitespace-nowrap hover:text-foreground transition-colors cursor-default"
                >
                    {brand}
                </span>
            ))}
        </div>
        {/* Helper for seamless loop if needed, but the tripling above handles it mostly */}
    </div>
);

export default function References() {
    // Split clients into two rows for visual balance
    const row1 = clients.slice(0, Math.ceil(clients.length / 2));
    const row2 = clients.slice(Math.ceil(clients.length / 2));

    return (
        <section
            id="references"
            className="py-24 bg-white border-t border-gray-100 overflow-hidden"
            aria-labelledby="references-heading"
        >
            <div className="max-w-full">
                <div className="space-y-4 pt-12">
                    {/* Row 1 - Left Scroll */}
                    <div className="flex overflow-hidden relative w-full mask-gradient">
                        <div className="flex gap-16 animate-scroll whitespace-nowrap min-w-full">
                            {[...row1, ...row1].map((brand, i) => (
                                <span key={i} className="text-3xl font-black text-gray-300 hover:text-black transition-colors duration-300 select-none">
                                    {brand}
                                </span>
                            ))}
                        </div>
                        {/* Seamless duplicate for loop */}
                        <div className="flex gap-16 animate-scroll whitespace-nowrap min-w-full absolute top-0 left-full">
                            {[...row1, ...row1].map((brand, i) => (
                                <span key={i} className="text-3xl font-black text-gray-300 hover:text-black transition-colors duration-300 select-none">
                                    {brand}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Row 2 - Right Scroll (Simulated by negative delay or different direction if configured, here standard left for simplicity or custom class) */}
                    {/* For simplicity in this environment, using same scroll direction but different offset/speed feel by content */}
                    <div className="flex overflow-hidden relative w-full mask-gradient">
                        {/* Quick fix for reverse scroll: using a different animation styled locally or just left scroll with different items */}
                        <div className="flex gap-16 animate-scroll whitespace-nowrap min-w-full" style={{ animationDuration: '45s', animationDirection: 'reverse' }}>
                            {[...row2, ...row2].map((brand, i) => (
                                <span key={i} className="text-3xl font-black text-gray-300 hover:text-black transition-colors duration-300 select-none">
                                    {brand}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-16 animate-scroll whitespace-nowrap min-w-full absolute top-0 left-full" style={{ animationDuration: '45s', animationDirection: 'reverse' }}>
                            {[...row2, ...row2].map((brand, i) => (
                                <span key={i} className="text-3xl font-black text-gray-300 hover:text-black transition-colors duration-300 select-none">
                                    {brand}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .mask-gradient {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
            `}</style>
        </section>
    );
}
