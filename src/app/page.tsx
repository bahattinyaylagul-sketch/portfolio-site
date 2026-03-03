import dynamic from "next/dynamic";
import Script from "next/script";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

const ServicesBento = dynamic(() => import("@/components/ServicesBento"));
const BlogPreview = dynamic(() => import("@/components/BlogPreview"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bahattin Yaylagül – Yapay Zeka, GEO ve SEO Uzmanı",
  description: "SEO ve GEO (Generative Engine Optimization) danışmanlığı ile markanızı geleceğe hazırlayın. Veri odaklı stratejilerle organik trafiğinizi ve otoritenizi artırın.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://bahattinyaylagul.com/#person",
        "name": "Bahattin Yaylagül",
        "url": "https://bahattinyaylagul.com",
        "jobTitle": "SEO Consultant",
        "image": "https://bahattinyaylagul.com/images/bahattin-yaylagul.jpg",
        "sameAs": [
          "https://www.linkedin.com/in/bahattin-yaylagul/",
          "https://medium.com/@bahattinyaylagl"
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "Bağımsız Danışmanlık"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://bahattinyaylagul.com/#website",
        "url": "https://bahattinyaylagul.com",
        "name": "Bahattin Yaylagül | SEO & GEO Danışmanı",
        "description": "SEO ve GEO (Generative Engine Optimization) danışmanlığı. Arama motorları ve yapay zeka sistemleri için içerik optimizasyonu.",
        "publisher": { "@id": "https://bahattinyaylagul.com/#person" },
        "inLanguage": "tr-TR"
      }
    ]
  };

  return (
    <main className="relative min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Google Ads Conversion Script - Sayfa görüntüleme */}
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
              'send_to': 'AW-17973771680/B4kJCP7e9YEcEKD7x_pC',
              'value': 1.0,
              'currency': 'TRY'
          });
        `}
      </Script>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Services Grid */}
      <ServicesBento />

      {/* Recent Strategic Insights */}
      <BlogPreview />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
