const fs = require('fs');
const path = require('path');

// 1. GEOClusterGrid.tsx
const gridPath = 'src/components/GEOClusterGrid.tsx';
let gridContent = fs.readFileSync(gridPath, 'utf8');

// Replace the local clusters definition with import
// It starts around line 3 "interface GEOItem" and ends around line 166 "];"
// Actually, it's easier to just match from "interface GEOItem" to "];"
const gridPattern = /interface GEOItem[\s\S]*?const clusters: ClusterGroup\[\] = \[[\s\S]*?\}\n\];/;
if (gridPattern.test(gridContent)) {
    gridContent = gridContent.replace(gridPattern, "import { clusters } from '@/lib/geo-data';");
    fs.writeFileSync(gridPath, gridContent);
    console.log('Updated GEOClusterGrid.tsx');
} else {
    console.log('Could not find pattern in GEOClusterGrid.tsx');
}

// 2. rehberler/page.tsx
const rehberlerPath = 'src/app/geo/rehberler/page.tsx';
let rehberlerContent = fs.readFileSync(rehberlerPath, 'utf8');
const rehberlerPattern = /const clusters = \[[\s\S]*?\}\n\];/;
if (rehberlerPattern.test(rehberlerContent)) {
    // Also we need to add the import if it's not there
    rehberlerContent = rehberlerContent.replace(rehberlerPattern, "");
    if (!rehberlerContent.includes("import { clusters } from '@/lib/geo-data';")) {
        rehberlerContent = rehberlerContent.replace('import Link from "next/link";', 'import Link from "next/link";\nimport { clusters } from "@/lib/geo-data";');
    }
    fs.writeFileSync(rehberlerPath, rehberlerContent);
    console.log('Updated rehberler/page.tsx');
} else {
    console.log('Could not find pattern in rehberler/page.tsx');
}
