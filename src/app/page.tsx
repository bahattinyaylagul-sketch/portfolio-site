import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesBento from "@/components/ServicesBento";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
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
        "sameAs": [
          "https://linkedin.com/in/bahattin-yaylagul",
          "https://twitter.com/bahattinylgl",
          "https://github.com/bahattinyaylagul"
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
