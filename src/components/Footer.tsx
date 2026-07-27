import Link from "next/link";

const footerLinks = {
    services: [
        { label: "SEO Danışmanlığı", href: "/seo" },
        { label: "GEO Danışmanlığı", href: "/geo" },
        { label: "Teknik SEO & Altyapı", href: "/seo#uc-temel-alan" },
        { label: "Semantik İçerik Stratejisi", href: "/seo#seo-kapsami" },
    ],
    resources: [
        { label: "GEO & SEO İçgörüleri", href: "/geo" },
        { label: "Site Haritası", href: "/site-haritasi" },
        { label: "EntityMap", href: "/entitymap.html" },
    ],
    seoTopics: [
        { label: "Teknik SEO", href: "/seo/teknik-seo" },
        { label: "Core Web Vitals", href: "/seo/core-web-vitals" },
        { label: "Arama Niyeti", href: "/seo/arama-niyeti" },
        { label: "Topikal Otorite", href: "/seo/topikal-otorite" },
        { label: "E-E-A-T", href: "/seo/eeat-sinyalleri" },
        { label: "Yerel SEO", href: "/seo/yerel-seo" },
    ],
    geoTopics: [
        { label: "llms.txt Rehberi", href: "/geo/llms-txt-nedir" },
        { label: "Reddit Mention Etkisi", href: "/geo/reddit-forum-mention-etkisi" },
        { label: "Marka Mention'ları", href: "/geo/ai-marka-mention-etkisi" },
    ],
    social: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/bahattin-yaylagul/", icon: "linkedin" },
        { label: "Twitter", href: "https://twitter.com/bahattinylgl", icon: "twitter" },
        { label: "GitHub", href: "https://github.com/bahattinyaylagul", icon: "github" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-foreground text-white py-12">
            <div className="max-w-[1400px] mx-auto px-6 md:px-8">
                {/* Top Section */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link
                            href="/"
                            aria-label="Bahattin Yaylagül Portfolyo Ana Sayfa"
                            className="text-2xl font-bold tracking-widest block"
                        >
                            BY.
                            <span className="sr-only"> - Bahattin Yaylagül Portfolyo Ana Sayfası</span>
                        </Link>
                        <p className="text-gray-400 text-sm mt-2 max-w-sm">
                            SEO & GEO odaklı dijital görünürlük danışmanlığı
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider mb-4 text-gray-500">
                            Hizmetler
                        </h3>
                        <ul className="space-y-2.5">
                            {footerLinks.services.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider mb-4 text-gray-500">
                            Kaynaklar
                        </h3>
                        <ul className="space-y-2.5">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* SEO Topics */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider mb-4 text-gray-500">
                            SEO Konuları
                        </h3>
                        <ul className="space-y-2.5">
                            {footerLinks.seoTopics.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className={`text-sm transition-colors ${link.label.includes('→') ? 'text-blue-400 hover:text-blue-300 font-bold' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* GEO Topics */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider mb-4 text-gray-500">
                            GEO Konuları
                        </h3>
                        <ul className="space-y-2.5">
                            {footerLinks.geoTopics.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className={`text-sm transition-colors ${link.label.includes('→') ? 'text-violet-400 hover:text-violet-300 font-bold' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <p className="text-gray-600 text-xs text-center md:text-left">
                            © {new Date().getFullYear()} Bahattin Yaylagül. Tüm hakları saklıdır.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.linkedin.com/in/bahattin-yaylagul/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all"
                                aria-label="Bahattin Yaylagül Profesyonel LinkedIn Profili"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
