const fs = require('fs');
const filePath = 'src/app/geo/rehberler/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Add useSearchParams import
content = content.replace('import { useState, Suspense } from "react";', 'import { useState, Suspense, useEffect } from "react";\\nimport { useSearchParams } from "next/navigation";');

// Fix c.key to c.code and add useSearchParams logic
const oldContent = `function RehberlerContent() {
    const [active, setActive] = useState("tumü");

    const filters = [
        { key: "tumü", label: "Tümü", count: totalCount },
        ...clusters.map((c) => ({ key: c.key, label: c.label, count: c.items.length })),
    ];

    const visibleClusters = active === "tumü"
        ? clusters
        : clusters.filter((c) => c.key === active);`;

const newContent = `function RehberlerContent() {
    const searchParams = useSearchParams();
    const categoryQuery = searchParams.get("category");
    
    // Check if query exists and matches a valid cluster code
    const initialCategory = categoryQuery && clusters.some(c => c.code === categoryQuery) 
        ? categoryQuery 
        : "tumü";
        
    const [active, setActive] = useState(initialCategory);

    // Update active state if URL changes directly
    useEffect(() => {
        if (categoryQuery && clusters.some(c => c.code === categoryQuery)) {
            setActive(categoryQuery);
        } else {
            setActive("tumü");
        }
    }, [categoryQuery]);

    const filters = [
        { key: "tumü", label: "Tümü", count: totalCount },
        ...clusters.map((c) => ({ key: c.code, label: c.label, count: c.items.length })),
    ];

    const visibleClusters = active === "tumü"
        ? clusters
        : clusters.filter((c) => c.code === active);`;

content = content.replace(oldContent, newContent);
fs.writeFileSync(filePath, content);
