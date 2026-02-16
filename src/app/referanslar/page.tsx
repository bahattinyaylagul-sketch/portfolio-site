import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Referanslar – Bahattin Yaylagül",
    description: "Aktif Bank, N Kolay ve global markalarla yürüttüğümüz SEO & GEO süreçleri. Sektör liderlerinin dijital büyüme hikayelerinde nasıl rol aldığımızı keşfedin.",
    alternates: {
        canonical: "/referanslar",
    },
};

const activeClients = [
    { name: "Aktif Bank", logo: "/images/references/aktif-bank-yeni.png" },
    { name: "N Kolay", logo: "/images/references/n-kolay-yeni.png" },
    { name: "Passo", logo: "/images/references/passo-yeni.png" },
    { name: "Golf Dondurmaları", logo: "/images/references/golf-final.png" },
    { name: "DünyaGöz", logo: "/images/references/dunyagoz-yeni.png" },
    { name: "TOBB ETÜ", logo: "/images/references/tobb-etu-yeni.png" },
    { name: "Maltepe Üniversitesi", logo: "/images/references/maltepe-uni.png" },
    { name: "Atlas Üniversitesi", logo: "/images/references/atlas-uni.jpg" },
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

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Referanslar
                        </h1>

                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Dijital büyüme stratejilerine liderlik ettiğim, SEO ve GEO süreçlerini yönettiğim güncel iş ortaklarım.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-center mb-20">
                        {activeClients.map((client) => (
                            <div
                                key={client.name}
                                className="group relative aspect-[3/2] bg-white rounded-2xl border border-gray-100 p-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <Image
                                        src={client.logo}
                                        alt={`${client.name} Referans`}
                                        fill
                                        className="object-contain p-4 transition-all duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>



                    {/* Optional: Call to Action or Contact Link */}
                    <div className="mt-24 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Yeni Bir Başarı Hikayesi Yazalım</h2>
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
