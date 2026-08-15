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
        '/geo/chatgpt-geo',
        '/geo/perplexity-geo',
        '/geo/ai-overviews-nedir',
        '/geo/entity-seo',
        '/geo/dijital-pr-ai-atif',
        '/geo/geo-seo-aeo-farki',
        '/geo/google-ai-modu',
        '/geo/mcp-nlweb',
        '/geo/query-fan-out',
        '/geo/yapay-zeka-arama-nasil-calisir',
        '/geo/icerik-chunking',
        '/geo/zero-click-arama',
        '/geo/gemini-geo',
        '/geo/bing-copilot-geo',
        '/geo/ai-botlari-robots-txt',
        '/geo/javascript-ssr-ai-botlari',
        '/geo/wikidata-bilgi-paneli',
        '/geo/ga4-ai-trafigi',
        '/geo/prompt-arastirmasi',
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
