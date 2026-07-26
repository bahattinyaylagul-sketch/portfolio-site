import { MetadataRoute } from 'next';
import { seoClusterData } from '@/lib/seo-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://bahattinyaylagul.com';
    const today = new Date().toISOString().split('T')[0];

    // 1. Ana Sayfalar (Pillar) — priority 1.0
    const pillarPages = [
        '',
        '/seo',
        '/geo',
        '/hakkimda',
        '/referanslar',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: today,
        changeFrequency: 'monthly' as const,
        priority: route === '' || route === '/seo' || route === '/geo' ? 1.0 : 0.8,
    }));

    // 2. GEO Alt Sayfaları — priority 0.8
    const geoContent = [
        '/geo/llms-txt-nedir',
        '/geo/ai-marka-mention-etkisi',
        '/geo/reddit-forum-mention-etkisi',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: today,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // 3. SEO Hub Sayfası — priority 0.9
    const seoHubPages = [
        '/seo/teknik-seo',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: today,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // 4. Dinamik SEO Cluster Sayfaları — yeni /seo/[slug] pathı
    const clusterRoutes = Object.values(seoClusterData)
        .filter((post) => post.slug !== 'tarama' && post.slug !== 'indeksleme')
        .map((post) => ({
            url: `${baseUrl}/seo/${post.slug}`,
            lastModified: post.publishDate ? new Date(post.publishDate).toISOString().split('T')[0] : today,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        }));

    return [...pillarPages, ...geoContent, ...seoHubPages, ...clusterRoutes];
}
