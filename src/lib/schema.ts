/**
 * Shared schema constants — single source of truth for authorObjHash consistency.
 * All page.tsx JSON-LD author blocks must import from here.
 */

export const AUTHOR_ENTITY = {
  "@type": "Person",
  "@id": "https://bahattinyaylagul.com/#bahattin-yaylagul",
  "name": "Bahattin Yaylagül",
  "alternateName": "Bahattin Yaylagül GEO Uzmanı",
  "url": "https://bahattinyaylagul.com",
  "jobTitle": "SEO & GEO Consultant",
  "image": "https://bahattinyaylagul.com/images/bahattin-yaylagul.jpg",
  "sameAs": [
    "https://www.linkedin.com/in/bahattin-yaylagul/",
    "https://medium.com/@bahattinyaylagl"
  ],
  "knowsAbout": [
    "Search Engine Optimization",
    "Generative Engine Optimization",
    "Technical SEO",
    "AI Search Optimization",
    "Retrieval-Augmented Generation",
    "Entity-Based Content Strategy",
    "Structured Data",
    "Semantic Authority",
    "Brand Mention Analysis",
    "Google Patent Analysis",
    "Next.js SEO",
    "Core Web Vitals"
  ],
  "knowsLanguage": ["tr", "en"],
  "worksFor": {
    "@type": "Organization",
    "name": "NextCode Collective",
    "url": "https://nextcodecollective.com"
  }
} as const;

export const WEBSITE_ENTITY = {
  "@type": "WebSite",
  "@id": "https://bahattinyaylagul.com/#website",
  "url": "https://bahattinyaylagul.com",
  "name": "Bahattin Yaylagül | SEO Danışmanı & GEO Uzmanı",
  "description": "SEO danışmanlığı ve GEO (Generative Engine Optimization) uzmanlığı. Arama motorları ve yapay zeka sistemleri için içerik optimizasyonu.",
  "publisher": { "@id": "https://bahattinyaylagul.com/#bahattin-yaylagul" },
  "inLanguage": "tr-TR"
} as const;
