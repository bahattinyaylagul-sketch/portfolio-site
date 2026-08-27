const fs = require('fs');
const path = require('path');
const geoDir = 'src/app/geo';

const HUB_SLUGS = ['platformlar', 'teknik-geo', 'olcum-analitik', 'icerik-otorite', 'temeller', 'rehberler'];

const slugs = fs.readdirSync(geoDir).filter(d => fs.statSync(path.join(geoDir, d)).isDirectory());

let updated = 0;
for (const slug of slugs) {
    if (HUB_SLUGS.includes(slug)) continue;
    const file = path.join(geoDir, slug, 'page.tsx');
    let articleContentFile = path.join(geoDir, slug, 'ArticleContent.tsx');
    
    // Some files have visual breadcrumb in ArticleContent.tsx, JSON-LD in page.tsx
    // Others have both in page.tsx
    
    // 1. Update JSON-LD in page.tsx
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        const original = content;

        // Change position 3 -> 4
        content = content.replace(/\"position\":\s*3,\s*\"name\":/g, '"position": 4, "name":');
        
        // Add new position 3 (GEO Rehberleri) before position 4
        const newPosition3 = '{ "@type": "ListItem", "position": 3, "name": "GEO Rehberleri", "item": "https://bahattinyaylagul.com/geo/rehberler" },\n            ';
        content = content.replace(/(\{\s*"@type":\s*"ListItem",\s*"position":\s*4,\s*"name":)/g, newPosition3 + '$1');

        // Visual breadcrumb if it exists in page.tsx
        if (content.includes('<Link href="/geo" className="hover:text-violet-600 transition-colors">GEO Danışmanlığı</Link>')) {
            const visualAddition = '<Link href="/geo" className="hover:text-violet-600 transition-colors">GEO Danışmanlığı</Link>\n                    <span className="text-gray-200">/</span>\n                    <Link href="/geo/rehberler" className="hover:text-violet-600 transition-colors">GEO Rehberleri</Link>';
            content = content.replace(/<Link href="\/geo"\s+className="hover:text-violet-600 transition-colors">GEO Danışmanlığı<\/Link>/g, visualAddition);
        }

        if (content !== original) {
            fs.writeFileSync(file, content);
            updated++;
        }
    }
    
    // 2. Update Visual breadcrumb in ArticleContent.tsx if it exists
    if (fs.existsSync(articleContentFile)) {
        let content = fs.readFileSync(articleContentFile, 'utf8');
        const original = content;
        
        if (content.includes('<Link href="/geo" className="hover:text-violet-600 transition-colors">GEO Danışmanlığı</Link>')) {
            const visualAddition = '<Link href="/geo" className="hover:text-violet-600 transition-colors">GEO Danışmanlığı</Link>\n                    <span className="text-gray-200">/</span>\n                    <Link href="/geo/rehberler" className="hover:text-violet-600 transition-colors">GEO Rehberleri</Link>';
            content = content.replace(/<Link href="\/geo"\s+className="hover:text-violet-600 transition-colors">GEO Danışmanlığı<\/Link>/g, visualAddition);
        }
        
        if (content !== original) {
            fs.writeFileSync(articleContentFile, content);
            updated++;
        }
    }
}
console.log('Done:', updated, 'files updated');
