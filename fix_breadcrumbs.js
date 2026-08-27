const fs = require('fs');
const path = require('path');
const geoDir = 'src/app/geo';

const HUB_SLUGS = ['platformlar', 'teknik-geo', 'olcum-analitik', 'icerik-otorite', 'temeller'];

const slugs = fs.readdirSync(geoDir).filter(d => fs.statSync(path.join(geoDir, d)).isDirectory());

let updated = 0;
for (const slug of slugs) {
    if (HUB_SLUGS.includes(slug)) continue; // skip hub pages (already deleted)
    const file = path.join(geoDir, slug, 'page.tsx');
    if (!fs.existsSync(file)) continue;

    let content = fs.readFileSync(file, 'utf8');
    const original = content;

    // 1. JSON-LD: Remove the hub ListItem (position 3 pointing to hub URL)
    // Match: { "@type": "ListItem", "position": 3, "name": "...", "item": "https://bahattinyaylagul.com/geo/(hub)" },
    content = content.replace(
        /\s*\{\s*"@type":\s*"ListItem",\s*"position":\s*3,\s*"name":\s*"[^"]+",\s*"item":\s*"https:\/\/bahattinyaylagul\.com\/geo\/(platformlar|teknik-geo|olcum-analitik|icerik-otorite|temeller)"[^}]*\},?/g,
        ''
    );

    // 2. JSON-LD: Renumber position 4 -> 3 (the article itself)
    content = content.replace(/"position":\s*4,(\s*"name")/g, '"position": 3,$1');

    // 3. Visual breadcrumb: Remove hub link + following separator span
    // Pattern: <Link href="/geo/hub"...>Label</Link>\n<span...>/</span>
    content = content.replace(
        /<Link[^>]*href="\/geo\/(platformlar|teknik-geo|olcum-analitik|icerik-otorite|temeller)"[^>]*>[^<]+<\/Link>\s*\n?\s*<span[^>]*>\/\s*<\/span>\s*\n?\s*/g,
        ''
    );

    if (content !== original) {
        fs.writeFileSync(file, content);
        updated++;
        console.log('✓', slug);
    } else {
        console.log('~', slug, '(no change)');
    }
}
console.log('\nDone:', updated, 'files updated');
