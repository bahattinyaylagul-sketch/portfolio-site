import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import CaseContent from "./CaseContent";

export const metadata: Metadata = {
    title: "Golf Dondurmaları Vaka Analizi – Bahattin Yaylagül",
    description: "golf.com.tr için Eylül 2024'te başlayan SEO çalışmasında 45.2K aylık organik ziyaretçi ve 7.2K anahtar kelimede FMCG sektörü dijital liderliği.",
    alternates: {
        canonical: "/vaka-calismalari/golf-dondurmalari",
    },
};

export default function GolfDondurmalariPage() {
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
