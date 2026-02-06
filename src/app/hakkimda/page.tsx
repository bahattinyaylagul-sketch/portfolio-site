import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Hakkımda | Bahattin Yaylagül",
    description: "10 yılı aşkın deneyimimle SEO & GEO danışmanlığı veriyorum. Dijital görünürlük ve yapay zeka optimizasyonu üzerine çalışmalarım.",
};

export default function HakkimdaPage() {
    return (
        <main className="min-h-screen bg-background text-foreground font-sans selection:bg-blue-100 selection:text-blue-900">
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <Navigation />
            </header>



            {/* About Content Component */}
            <div className="bg-white">
                <About />
            </div>

            <Footer />
        </main>
    );
}
