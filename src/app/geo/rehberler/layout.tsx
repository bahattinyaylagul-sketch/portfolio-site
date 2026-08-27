import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tüm GEO Rehberleri: Yapay Zeka SEO Optimizasyonu",
    description: "ChatGPT, Perplexity ve Google AI Overviews için markanızı nasıl optimize edebileceğinizi anlatan pratik teknik GEO ve AEO strateji rehberleri."
};

export default function RehberlerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
