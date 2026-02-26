/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const seoNavLinks = [
    { id: "what-is-seo", title: "01. SEO Nedir?", href: "/seo" },
    { id: "technical-seo", title: "02. Teknik SEO", href: "/teknik-seo" },
    { id: "on-page-seo", title: "03. On-Page SEO", href: "/site-ici-seo" },
    { id: "icerik-seo", title: "04. İçerik Optimizasyonu", href: "/icerik-optimizasyonu" },
    { id: "off-page-seo", title: "05. Site Dışı SEO", href: "/site-disi-seo" },
    { id: "seo-performance", title: "06. SEO Performansı", href: "#" },
];

export function SEOContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: ""
    });
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    message: formData.message
                }),
            });

            const data = await response.json();
            console.log("API Response:", data);

            if (response.ok) {
                setFormStatus("success");
                setFormData({ name: "", phone: "", message: "" });
            } else {
                console.error("Submission failed:", data);
                setFormStatus("error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setFormStatus("error");
        }
    };

    return (
        <div className="mt-8 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-white">
            <h4 className="font-semibold mb-2">Ücretsiz Analiz</h4>
            <p className="text-sm text-gray-300 mb-4">
                Sitenizin SEO durumunu değerlendirelim.
            </p>
            {formStatus === "success" ? (
                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-200 text-sm text-center animate-fade-in">
                    <p className="font-semibold mb-1">Talebiniz Alındı!</p>
                    <p className="text-xs opacity-90">24 saat içinde dönüş yapılacaktır.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                        <input
                            type="text"
                            placeholder="Ad Soyad"
                            required
                            className="w-full px-3 py-2.5 bg-white/10 border border-white/10 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white/30 focus:bg-white/20 transition-all"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            placeholder="Telefon Numarası"
                            required
                            className="w-full px-3 py-2.5 bg-white/10 border border-white/10 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white/30 focus:bg-white/20 transition-all"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder="Kısa mesaj (Opsiyonel)"
                            rows={2}
                            className="w-full px-3 py-2.5 bg-white/10 border border-white/10 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white/30 focus:bg-white/20 transition-all resize-none"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>

                    {formStatus === "error" && (
                        <div className="p-3 bg-red-500/20 text-red-200 rounded-lg text-xs border border-red-500/30">
                            Gönderim başarısız oldu. Lütfen tekrar deneyin.
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className="w-full py-3 px-4 bg-white text-gray-900 text-sm font-bold rounded-lg hover:bg-gray-100 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {formStatus === "submitting" ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-4 w-4 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Gönderiliyor...
                            </span>
                        ) : "Ücretsiz SEO Ön Analizi Al"}
                    </button>
                </form>
            )}
        </div>
    );
}

export default function SEONavigator() {
    const pathname = usePathname();

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block relative h-full">
                <div className="sticky top-28">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                        İçindekiler
                    </h3>
                    <nav className="mb-8">
                        <ul className="space-y-2">
                            {seoNavLinks.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <li key={item.id}>
                                        <Link
                                            href={item.href}
                                            className={`block w-full text-left py-2.5 px-4 rounded-lg text-sm transition-all duration-200 ${isActive
                                                    ? "bg-gray-900 text-white font-medium shadow-md"
                                                    : "text-gray-600 hover:bg-gray-100 font-medium"
                                                }`}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* CTA in Sidebar */}
                    <SEOContactForm />
                </div>
            </aside>
        </>
    );
}

export function SEOMobileNav() {
    const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="lg:hidden border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm mb-8">
            <button
                onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
                className="w-full flex items-center justify-between p-4 bg-gray-50 text-left transition-colors hover:bg-gray-100"
            >
                <span className="font-bold text-gray-900 flex items-center gap-2 text-sm uppercase tracking-wider">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                    İçindekiler
                </span>
                <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isMobileTocOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileTocOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <nav className="p-4 border-t border-gray-100 bg-white">
                    <ul className="space-y-3">
                        {seoNavLinks.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.id}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMobileTocOpen(false)}
                                        className={`block w-full text-left text-sm transition-colors ${isActive ? "text-blue-600 font-bold" : "text-gray-600 hover:text-blue-600"
                                            }`}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
            {/* CTA Form placed directly below Mobile TOC for visibility on mobile */}
            <SEOContactForm />
        </div>
    );
}
