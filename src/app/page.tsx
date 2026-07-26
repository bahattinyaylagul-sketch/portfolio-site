import dynamic from "next/dynamic";
import Script from "next/script";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import GuideLibrary from "@/components/GuideLibrary";
import { AUTHOR_ENTITY, WEBSITE_ENTITY } from "@/lib/schema";

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
      AUTHOR_ENTITY,
      WEBSITE_ENTITY,
    ]
  };


  return (
    <main className="relative min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* EntityMap v1.0 + RSS — anchor page discovery */}
      <link rel="entitymap" type="application/json" href="https://bahattinyaylagul.com/entitymap.json" />
      <link rel="alternate" type="application/rss+xml" href="https://bahattinyaylagul.com/feed.xml" title="Bahattin Yaylagül – İçgörüler RSS" />
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

      {/* Guide Library Section */}
      <GuideLibrary />

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
