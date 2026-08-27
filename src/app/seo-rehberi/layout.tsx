import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SEO Nedir ve Nasıl Yapılır? Kapsamlı 2026 SEO Rehberi",
    description: "2026 AI Otorite ve GEO (Üretken Motor Optimizasyonu) vizyonuyla SEO nedir, nasıl yapılır? Organik büyüme stratejilerini ve teknik altyapı adımlarını keşfedin.",
    alternates: {
        canonical: "/seo-rehberi",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
