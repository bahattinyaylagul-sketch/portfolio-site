import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import CaseContent from "./CaseContent";

export const metadata: Metadata = {
    title: "Dr. Ersoy Kocabıçak Vaka Analizi – Bahattin Yaylagül",
    description: "drersoykocabicak.com için Haziran 2025'te başlayan SEO çalışmasında 977'den 36.1K aylık organik ziyaretçiye — 37 katlık büyüme hikayesi.",
    alternates: {
        canonical: "/vaka-calismalari/dr-ersoy-kocabicak",
    },
};

export default function DrErsoyPage() {
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
