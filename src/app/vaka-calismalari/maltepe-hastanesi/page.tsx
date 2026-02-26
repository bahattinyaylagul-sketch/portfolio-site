import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import CaseContent from "./CaseContent";

export const metadata: Metadata = {
    title: "Maltepe Hastanesi Vaka Analizi – Bahattin Yaylagül",
    description: "Hatalı migration sonrası çöken trafiği kurtarma operasyonu: Haziran 2025'ten Ocak 2026'ya 370.4K organik ziyaretçi ve 74.6K anahtar kelimede rekor.",
    alternates: {
        canonical: "/vaka-calismalari/maltepe-hastanesi",
    },
};

export default function MaltepeHastanesiPage() {
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
