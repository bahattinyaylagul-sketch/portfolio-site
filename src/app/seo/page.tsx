import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOContent from "./SEOContent";

export const metadata: Metadata = {
    title: "SEO Danışmanlığı | Bahattin Yaylagül",
    description:
        "Teknik SEO, içerik optimizasyonu ve arama motoru stratejileri ile organik görünürlüğünüzü artırın. Google'ın Passage Indexing algoritmasına uygun içerik yapıları.",
    keywords: [
        "SEO danışmanlığı",
        "teknik SEO",
        "içerik optimizasyonu",
        "anahtar kelime araştırması",
        "site hızı optimizasyonu",
        "mobil SEO",
    ],
    openGraph: {
        title: "SEO Danışmanlığı | Bahattin Yaylagül",
        description: "Teknik SEO ve içerik optimizasyonu ile organik görünürlüğünüzü artırın",
        type: "website",
        locale: "tr_TR",
    },
};

export default function SEOPage() {
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
                "@id": "https://bahattinyaylagul.com/seo/#service",
                "name": "SEO Danışmanlığı",
                "provider": { "@id": "https://bahattinyaylagul.com/#person" },
                "serviceType": "Search Engine Optimization",
                "areaServed": "TR",
                "description": "Arama motoru optimizasyonu, teknik SEO, içerik stratejisi ve otorite inşası hizmetleri."
            },
            {
                "@type": "FAQPage",
                "@id": "https://bahattinyaylagul.com/seo/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "SEO çalışmaları ne zaman sonuç verir?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "SEO uzun vadeli bir yatırımdır. İlk etkiler genellikle 2-3 ay içinde görülmeye başlar, ancak kalıcı ve büyük sonuçlar için 6-12 aylık bir süreç gereklidir."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Sıralama garantisi var mı?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Google algoritmaları sürekli değiştiği için hiçbir profesyonel SEO uzmanı %100 sıralama garantisi veremez. Ancak, trafik ve görünürlük artışı için performans odaklı çalışılmaktadır."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Hangi sektörlere hizmet veriliyor?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "E-ticaret, SaaS, Hukuk, Sağlık ve Kurumsal hizmetler başta olmak üzere, dijital büyüme hedefi olan tüm sektörlere hizmet verilmektedir."
                        }
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://bahattinyaylagul.com/seo/#article",
                "headline": "SEO Danışmanlığı: Kapsamlı Rehber & Stratejik Yaklaşım",
                "author": { "@id": "https://bahattinyaylagul.com/#person" },
                "publisher": { "@id": "https://bahattinyaylagul.com/#person" },
                "description": "Modern SEO, sadece kelime sıralamak değil; bir web varlığını Google'ın Knowledge Graph mimarisi içinde vazgeçilmez bir varlık haline getirmektir.",
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

            <SEOContent />
            <Footer />
        </main>
    );
}
