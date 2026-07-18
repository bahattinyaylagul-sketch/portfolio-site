import Link from "next/link";

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

export const ROUTE_LABELS: Record<string, string> = {
    "/": "Ana Sayfa",
    "/geo": "GEO Danışmanlığı",
    "/seo": "SEO Danışmanlığı",
    "/hakkimda": "Hakkımda",
    "/icgoruler": "İçgörüler",
};

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav aria-label="breadcrumb" className="w-full max-w-4xl mx-auto text-left mb-8 font-sans">
            <ol className="flex items-center flex-wrap gap-2 text-xs font-medium">
                <li className="flex items-center gap-2">
                    <Link
                        href="/"
                        className="text-white/50 hover:text-white/75 transition-colors whitespace-nowrap"
                    >
                        Ana Sayfa
                    </Link>
                </li>
                {items.map((item, i) => {
                    const isLast = i === items.length - 1;
                    return (
                        <li key={i} className="flex items-center gap-2 min-w-0">
                            <span className="text-white/30 select-none" aria-hidden="true">
                                /
                            </span>
                            {isLast ? (
                                <span
                                    aria-current="page"
                                    className="text-white/85 truncate font-semibold block"
                                >
                                    {item.label}
                                </span>
                            ) : item.href ? (
                                <Link
                                    href={item.href}
                                    className="text-white/50 hover:text-white/75 transition-colors whitespace-nowrap truncate block"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-white/50 truncate block">{item.label}</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

/**
 * Generates BreadcrumbList JSON-LD Schema
 */
export function getBreadcrumbSchema(items: { label: string; href?: string }[]) {
    const listElements = [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Ana Sayfa",
            "item": "https://bahattinyaylagul.com/"
        },
        ...items.map((item, index) => {
            const element: any = {
                "@type": "ListItem",
                "position": index + 2,
                "name": item.label
            };
            if (item.href) {
                // If it is not the last item, include the item URL
                element.item = `https://bahattinyaylagul.com${item.href}`;
            }
            return element;
        })
    ];

    // Remove the item property from the last element as per requirements
    if (listElements.length > 1) {
        delete listElements[listElements.length - 1].item;
    }

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `https://bahattinyaylagul.com${items[items.length - 1]?.href || ""}#breadcrumb`,
        "itemListElement": listElements
    };
}
