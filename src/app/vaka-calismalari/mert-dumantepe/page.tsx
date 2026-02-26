import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import CaseContent from "./CaseContent";

export const metadata: Metadata = {
    title: "Mert Dumantepe Vaka Analizi – Bahattin Yaylagül",
    description: "mertdumantepe.com için Haziran 2025'te başlayan SEO çalışmasında 25.1K aylık organik ziyaretçi ve 8.2K anahtar kelimede üst sıra hakimiyeti.",
    alternates: {
        canonical: "/vaka-calismalari/mert-dumantepe",
    },
};

export default function MertDumantepe() {
    return (
        <main className="min-h-screen bg-white text-foreground font-sans">
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <Navigation />
            </header>
            <div className="pt-24">
                <CaseContent />
            </div>
            <Footer />
        </main>
    );
}
