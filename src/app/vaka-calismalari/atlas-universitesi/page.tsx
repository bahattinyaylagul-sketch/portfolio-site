import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import CaseContent from "./CaseContent";

export const metadata: Metadata = {
    title: "Atlas Üniversitesi Vaka Analizi – Bahattin Yaylagül",
    description: "Atlas Üniversitesi için Mayıs 2024'ten bu yana yürütülen SEO çalışmasında 184.400 aylık organik ziyaretçi ve 31.000+ anahtar kelimede üst sıra hakimiyeti.",
    alternates: {
        canonical: "/vaka-calismalari/atlas-universitesi",
    },
};

export default function AtlasUniversitesiPage() {
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
