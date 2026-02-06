import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Referanslar | Bahattin Yaylagül",
    description: "Aktif olarak hizmet verdiğim markalar ve başarı hikayeleri.",
};

const activeClients = [
    { name: "Aktif Bank", logo: "/images/references/aktif-bank.png" },
    { name: "N Kolay", logo: "/images/references/n-kolay.png" },
    { name: "DünyaGöz", logo: "/images/references/dunyagoz.png" },
    { name: "Golf Dondurmaları", logo: "/images/references/golf.png" },
    { name: "Passo", logo: "/images/references/passo.png" },
    { name: "TOBB ETÜ", logo: "/images/references/tobb-etu.png" },
];

export default function ReferencesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navigation />

            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-4 block">
                            Portföy
                        </span>

                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Dijital büyüme stratejilerine liderlik ettiğim, SEO ve GEO süreçlerini yönettiğim güncel iş ortaklarım.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-center">
                        {activeClients.map((client) => (
                            <div
                                key={client.name}
                                className="group relative aspect-[3/2] bg-white rounded-2xl border border-gray-100 p-8 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={client.logo}
                                        alt={`${client.name} Referans`}
                                        fill
                                        className="object-contain p-12 transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Optional: Call to Action or Contact Link */}
                    <div className="mt-24 text-center">
                        <p className="text-gray-500 mb-6">
                            Markanızı bir sonraki başarı hikayesine dönüştürmeye hazır mısınız?
                        </p>
                        <a
                            href="/#contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
                        >
                            İletişime Geçin
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
