"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

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

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", phone: "", message: "" });
            } else {
                console.error("Submission failed:", data);
                setStatus("error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");
        }
    };

    return (
        <section
            id="contact"
            className="py-20 px-6"
            aria-labelledby="contact-heading"
        >
            <div className="max-w-3xl mx-auto text-center">
                <FadeIn>
                    <p className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">
                        İletişim
                    </p>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <h2
                        id="contact-heading"
                        className="text-2xl md:text-4xl font-bold text-foreground mb-6"
                    >
                        Projenizi Konuşalım
                    </h2>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <p className="text-gray-600 mb-10 max-w-md mx-auto">
                        SEO veya GEO danışmanlığı için ücretsiz ön görüşme planlayalım.
                    </p>
                </FadeIn>

                <FadeIn delay={0.3}>
                    {status === "success" ? (
                        <div className="p-8 bg-green-50 border border-green-200 rounded-2xl text-green-800 animate-fade-in inline-block w-full max-w-md">
                            <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <h3 className="text-xl font-bold mb-2">Teşekkürler!</h3>
                            <p className="text-sm">Mesajınız başarıyla iletildi, en kısa sürede sizinle iletişime geçeceğiz.</p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                            >
                                Yeni Mesaj Gönder
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="text-left bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 max-w-lg mx-auto shadow-sm">
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon Numarası veya E-posta</label>
                                    <input
                                        id="phone"
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mesajınız</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>

                                {status === "error" && (
                                    <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100">
                                        Gönderim sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin veya alternatif iletişim kanallarını kullanın.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="w-full py-4 bg-gray-900 text-white text-sm font-bold rounded-lg hover:bg-black transition-colors disabled:opacity-70 flex justify-center items-center gap-2"
                                >
                                    {status === "submitting" ? (
                                        <>
                                            <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Gönderiliyor...
                                        </>
                                    ) : (
                                        "Mesajı Gönder"
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </FadeIn>
            </div>
        </section>
    );
}
