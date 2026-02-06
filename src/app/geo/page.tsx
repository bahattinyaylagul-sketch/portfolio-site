import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GEOContent from "./GEOContent";

export const metadata: Metadata = {
    title: "GEO Danışmanlığı | Generative Engine Optimization | Bahattin Yaylagül",
    description:
        "GEO (Generative Engine Optimization) ile içeriklerinizi ChatGPT, Gemini ve diğer yapay zeka sistemleri için optimize edin. AI arama sonuçlarında görünür olun.",
    keywords: [
        "GEO",
        "Generative Engine Optimization",
        "AI SEO",
        "ChatGPT optimizasyonu",
        "yapay zeka araması",
        "LLM optimizasyonu",
    ],
    openGraph: {
        title: "GEO Danışmanlığı | Generative Engine Optimization",
        description: "Yapay zeka sistemleri için içerik optimizasyonu",
        type: "website",
        locale: "tr_TR",
    },
};

export default function GEOPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": "https://bahattinyaylagul.com/#person",
                "name": "Bahattin Yaylagül",
                "url": "https://bahattinyaylagul.com",
                "jobTitle": "Senior SEO & GEO Architect",
                "image": "https://bahattinyaylagul.com/images/bahattin-yaylagul.jpg",
                "sameAs": ["https://linkedin.com/in/bahattin-yaylagul"]
            },
            {
                "@type": "ProfessionalService",
                "@id": "https://bahattinyaylagul.com/geo/#service",
                "name": "GEO Danışmanlığı",
                "provider": { "@id": "https://bahattinyaylagul.com/#person" },
                "serviceType": "Generative Engine Optimization",
                "areaServed": "TR",
                "description": "Markanızın ChatGPT, Gemini ve Perplexity gibi yapay zeka modellerinde kaynak olarak önerilmesini sağlayan optimizasyon hizmeti."
            },
            {
                "@type": "FAQPage",
                "@id": "https://bahattinyaylagul.com/geo/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "GEO yatırımı ne zaman yapılmalı?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Eğer SEO trafiğiniz stabil olmasına rağmen dönüşümleriniz düşüyorsa veya sektörünüzde (SaaS, Finans, Sağlık vb.) kullanıcıların AI araçlarını kullanma oranı yüksekse, GEO yatırımı 'hemen' yapılmalıdır."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Klasik SEO ölüyor mu?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Hayır, ancak evriliyor. 2026 projeksiyonlarında arama hacminin %30'unun AI sohbetlerine kayacağı öngörülüyor. Hibrit yapı (SEO + GEO) kurmayan markalar, görünürlüklerinin üçte birini kaybetme riskiyle karşı karşıyadır."
                        }
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://bahattinyaylagul.com/geo/#article",
                "headline": "GEO Danışmanlığı: Generative Engine Optimization Rehberi",
                "author": { "@id": "https://bahattinyaylagul.com/#person" },
                "publisher": { "@id": "https://bahattinyaylagul.com/#person" },
                "description": "GEO (Generative Engine Optimization), markanızın yapay zeka modelleri tarafından üretilen cevaplarda kaynak ve referans olarak seçilmesini sağlayan yeni nesil optimizasyon disiplinidir.",
                "inLanguage": "tr-TR"
            }
        ]
    };

    return (
        <main className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Fixed Header Wrapper */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <Navigation />
            </header>

            <GEOContent />
            <Footer />
        </main>
    );
}
