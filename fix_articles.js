const fs = require('fs');
const path = require('path');
const geoDir = 'src/app/geo';

const HUB_SLUGS = ['platformlar', 'teknik-geo', 'olcum-analitik', 'icerik-otorite', 'temeller', 'rehberler'];

const slugs = fs.readdirSync(geoDir).filter(d => fs.statSync(path.join(geoDir, d)).isDirectory());

let updated = 0;

for (const slug of slugs) {
    if (HUB_SLUGS.includes(slug)) continue;
    
    // Some are in ArticleContent.tsx, some in page.tsx
    const filesToTry = [
        path.join(geoDir, slug, 'ArticleContent.tsx'),
        path.join(geoDir, slug, 'page.tsx')
    ];
    
    for (const file of filesToTry) {
        if (!fs.existsSync(file)) continue;
        
        let content = fs.readFileSync(file, 'utf8');
        const original = content;
        
        // Only modify if it has </article> or similar structure indicating it's the content file
        // Also don't double inject
        if (content.includes('<ArticleFooter')) continue;
        if (!content.includes('</article>')) continue;

        // Make sure it has import
        if (!content.includes('ArticleFooter')) {
            content = content.replace('import Link from "next/link";', 'import Link from "next/link";\nimport ArticleFooter from "@/components/ArticleFooter";');
        }

        // Replace old CTA/Ayrıca Bakınız with ArticleFooter
        // Matches from {/* CTA */} or <aside...aria-label="GEO Danışmanlığı Teklifi"> all the way to </article>
        // and replaces it with <ArticleFooter currentSlug="slug" /> \n </article>
        
        const ctaRegex1 = /\{\/\*\s*CTA\s*\*\/\}.*?<\/article>/s;
        const ctaRegex2 = /<aside[^>]*aria-label="GEO Danışmanlığı Teklifi".*?<\/article>/s;
        
        const footerComponent = `<ArticleFooter currentSlug="${slug}" />\n            </article>`;
        
        if (ctaRegex1.test(content)) {
            content = content.replace(ctaRegex1, footerComponent);
        } else if (ctaRegex2.test(content)) {
            content = content.replace(ctaRegex2, footerComponent);
        } else {
            // Just insert before </article>
            content = content.replace('</article>', footerComponent);
        }
        
        // Also remove any stray "GEO Danışmanlığı" links if they were just simple text links before </article>
        // Not really needed if we just replaced everything up to </article> from the CTA.
        // What if there was no CTA? It just inserted before </article>. Let's manually clean up later if needed.

        if (content !== original) {
            fs.writeFileSync(file, content);
            updated++;
            break; // Stop after updating one file per directory (either ArticleContent or page.tsx)
        }
    }
}

console.log('Updated', updated, 'files');
