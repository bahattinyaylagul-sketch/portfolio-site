const fs = require('fs');
const filePath = 'src/components/BlogPreview.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const item3 = `slug: "ai-marka-mention-etkisi",
        image: "/images/blog/ai-mention.png"
    },`;
const item4 = `    {
        title: "Entity SEO ve Bilgi Grafiği",
        excerpt: "Arama motorlarının markanızı varlık olarak tanıması için Knowledge Graph kaydı, schema mimarisi ve ölçüm çerçevesi.",
        date: "15 Şubat 2026",
        category: "GEO / AI Search",
        slug: "entity-seo",
        image: "/images/entity-seo-hero.png"
    },`;
content = content.replace(item3, item3 + "\n" + item4);
content = content.replace('href="/geo"\\n                        className="group flex', 'href="/geo/rehberler"\\n                        className="group flex');
fs.writeFileSync(filePath, content);
