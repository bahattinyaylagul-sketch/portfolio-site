import { MetadataRoute } from 'next';
import { seoClusterData } from '@/lib/seo-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://bahattinyaylagul.com';

    // 1. Statik Ana Sayfalar
    const staticPages = [
        '',
        '/seo',
        '/geo',
        '/hakkimda',
        '/icgoruler',
        '/referanslar',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // 2. Statik Blog & Vaka Sayfaları (Klasör olarak var olanlar)
    const staticContent = [
        '/icgoruler/ai-marka-mention-etkisi',
        '/icgoruler/reddit-forum-mention-etkisi',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // 3. Dinamik SEO Cluster Sayfaları (seo-data.ts'ten gelenler)
    // Bu sayfalar /[slug] yapısında sunuluyor.
    const clusterRoutes = Object.values(seoClusterData).map((post) => ({
        url: `${baseUrl}/${post.slug}`,
        lastModified: post.publishDate ? new Date(post.publishDate) : new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [...staticPages, ...staticContent, ...clusterRoutes];
}
