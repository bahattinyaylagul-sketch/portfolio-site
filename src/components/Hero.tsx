import Link from "next/link";

export default function Hero() {
    return (
        <section
            id="hero"
            className="pt-48 pb-24 px-6 flex items-center justify-center relative overflow-hidden"
        >
            {/* Background Gradient Mesh (Optional - Server Side) */}
            <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-background to-background opacity-70" />

            <div className="max-w-4xl mx-auto text-center z-10">
                {/* H1 - Entity Anchor */}
                <div className="flex justify-center mb-10">
                    <h1 className="px-5 py-2 rounded-full border border-gray-200 bg-white/40 backdrop-blur-md text-[10px] md:text-xs font-medium tracking-[0.15em] text-gray-800 uppercase shadow-sm">
                        GEO Uzmanı Bahattin Yaylagül
                    </h1>
                </div>

                {/* Tagline */}
                <p className="text-4xl md:text-6xl lg:text-7xl font-sans font-semibold tracking-tight text-foreground leading-[1.1] mb-12">
                    SEO artık sabit bir <br className="hidden md:block" />
                    <span className="text-gray-400">sıralama yarışı</span> değil,
                    <br />
                    AI sistemlerinin seni yeniden seçme <br className="hidden md:block" />
                    <span className="text-gray-400">olasılığını artırma</span> sanatıdır.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/seo"
                        className="px-8 py-3 bg-foreground text-white text-sm font-light rounded-full hover:bg-gray-800 transition-colors uppercase tracking-wider shadow-lg shadow-gray-200/50"
                    >
                        SEO Hizmetleri
                    </Link>
                    <Link
                        href="/geo"
                        className="px-8 py-3 border border-gray-300 text-foreground text-sm font-light rounded-full hover:border-foreground transition-colors uppercase tracking-wider hover:bg-white"
                    >
                        GEO Hizmetleri
                    </Link>
                </div>
            </div>
        </section>
    );
}
