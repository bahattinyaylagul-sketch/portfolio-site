import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://bahattinyaylagul.com';

    // Statik Sayfalar
    const routes = [
        '',
        '/seo',
        '/geo',
        '/hakkimda',
        '/vaka-calismalari',
        '/icgoruler',
        '/referanslar',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // İçgörüler (Blog)
    const insights = [
        '/icgoruler/ai-marka-mention-etkisi',
        '/icgoruler/reddit-forum-mention-etkisi',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // Vaka Çalışmaları
    const cases = [
        '/vaka-calismalari/n-kolay',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    return [...routes, ...insights, ...cases];
}
