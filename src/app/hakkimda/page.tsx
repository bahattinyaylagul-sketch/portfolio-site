/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Hakkımda – Bahattin Yaylagül",
    description: "12+ yıllık deneyimle sunulan SEO ve GEO danışmanlığı. Ajans ve kurumsal projelerdeki başarı hikayeleri, stratejik yaklaşım ve yetkinlikler hakkında bilgi alın.",
    alternates: {
        canonical: "/hakkimda",
    },
};

export default function HakkimdaPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": "https://bahattinyaylagul.com/#person",
                "name": "Bahattin Yaylagül",
                "url": "https://bahattinyaylagul.com/hakkimda",
                "image": "https://bahattinyaylagul.com/images/bahattin-yaylagul.jpg",
                "jobTitle": "SEO & GEO Consultant",
                "description": "SEO, Generative Engine Optimization (GEO), teknik SEO ve AI tabanlı arama sistemleri üzerine uzman danışman",
                "sameAs": [
                    "https://www.linkedin.com/in/bahattin-yaylagul/",
                    "https://medium.com/@bahattinyaylagl"
                ],
                "worksFor": {
                    "@type": "Organization",
                    "name": "Bağımsız SEO & GEO Danışmanı"
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Anasayfa",
                        "item": "https://bahattinyaylagul.com/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Hakkımda",
                        "item": "https://bahattinyaylagul.com/hakkimda"
                    }
                ]
            }
        ]
    };

    return (
        <main className="min-h-screen bg-background text-foreground font-sans selection:bg-blue-100 selection:text-blue-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
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
