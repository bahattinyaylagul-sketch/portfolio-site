const fs = require('fs');

const FILE_PATH = '/Users/bahattinyaylagul/Bahattin Yaylagül /portfolio-site/src/app/seo/page.tsx';
let lines = fs.readFileSync(FILE_PATH, 'utf8').split('\n');

const fixes = [
    { search: "Türkiye\\'nin", replace: "Türkiye&apos;nin" },
    { search: 'Türkiye"nin', replace: "Türkiye&quot;nin" }
];

// Let's just fix any unescaped single or double quote inside the <div> scopes where the text lives.
// Instead of that, let's just do targeted string replaces line by line.

let inQuotes = false;
for (let i = 0; i < lines.length; i++) {
    // line-specific fixes in the generated cards range:
    if (i > 300 && i < 500) {
        if (lines[i].includes("Türkiye\\'nin")) {
            lines[i] = lines[i].replace(/Türkiye\\'nin/g, "Türkiye&apos;nin");
        }
        if (lines[i].includes("Türkiye'nin")) {
            lines[i] = lines[i].replace(/Türkiye'nin/g, "Türkiye&apos;nin");
        }
        if (lines[i].includes("Doctor & Hekim")) {
            lines[i] = lines[i].replace(/Doctor & Hekim/g, "Doctor &amp; Hekim");
        }
        if (lines[i].includes('\"Topic Authority\"')) {
            lines[i] = lines[i].replace(/\"Topic Authority\"/g, "&quot;Topic Authority&quot;");
        }
        if (lines[i].includes("0'dan")) {
            lines[i] = lines[i].replace(/0'dan/g, "0&apos;dan");
        }
        if (lines[i].includes("SEO'su")) {
            lines[i] = lines[i].replace(/SEO'su/g, "SEO&apos;su");
        }
        if (lines[i].includes("Doktor & Hekim")) {
            lines[i] = lines[i].replace(/Doktor & Hekim/g, "Doktor &amp; Hekim");
        }
    }
}

fs.writeFileSync(FILE_PATH, lines.join('\n'));
console.log('Fixed quotes lines');
