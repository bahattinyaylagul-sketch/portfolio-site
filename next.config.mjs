/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    compress: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 31536000, // 1 yıl
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    async redirects() {
        return [
            // ── GRUP A: SEO Cluster → /seo/ altına ──────────────────────────────
            { source: '/site-ici-seo',         destination: '/seo/site-ici-seo',           permanent: true },
            { source: '/icerik-optimizasyonu', destination: '/seo/icerik-optimizasyonu',   permanent: true },
            { source: '/site-disi-seo',        destination: '/seo/site-disi-seo',          permanent: true },
            { source: '/teknik-seo',           destination: '/seo/teknik-seo',             permanent: true },
            { source: '/arama-niyeti',         destination: '/seo/arama-niyeti',           permanent: true },
            { source: '/semantik-yazim',       destination: '/seo/semantik-yazim',         permanent: true },
            { source: '/silo-mimarisi',        destination: '/seo/silo-mimarisi',          permanent: true },
            // /tarama ve /indeksleme ikisi de aynı hedefe 301
            { source: '/tarama',               destination: '/seo/tarama-ve-indeksleme',   permanent: true },
            { source: '/indeksleme',           destination: '/seo/tarama-ve-indeksleme',   permanent: true },
            { source: '/topikal-otorite',      destination: '/seo/topikal-otorite',        permanent: true },
            { source: '/siralama',             destination: '/seo/siralama',               permanent: true },
            { source: '/eeat-sinyalleri',      destination: '/seo/eeat-sinyalleri',        permanent: true },
            { source: '/bilgi-kazanci',        destination: '/seo/bilgi-kazanci',          permanent: true },
            { source: '/yerel-seo',            destination: '/seo/yerel-seo',              permanent: true },
            { source: '/core-web-vitals',      destination: '/seo/core-web-vitals',        permanent: true },
            { source: '/yapisal-veri',         destination: '/seo/yapisal-veri',           permanent: true },
            { source: '/tarama-butcesi',       destination: '/seo/tarama-butcesi',         permanent: true },
            { source: '/log-analizi',          destination: '/seo/log-analizi',            permanent: true },

            // ── GRUP B: İçgörüler → /geo/ altına ────────────────────────────────
            { source: '/icgoruler',                              destination: '/geo',                                permanent: true },
            { source: '/icgoruler/geo-rehberi',                  destination: '/geo',                                permanent: true },
            { source: '/icgoruler/llms-txt-nedir',               destination: '/geo/llms-txt-nedir',                 permanent: true },
            { source: '/icgoruler/reddit-forum-mention-etkisi',  destination: '/geo/reddit-forum-mention-etkisi',    permanent: true },
            { source: '/icgoruler/ai-marka-mention-etkisi',      destination: '/geo/ai-marka-mention-etkisi',        permanent: true },
        ];
    },
    async headers() {
        return [
            {
                // Statik assetlar — 1 yıl cache
                source: '/:path*\\.(ico|png|jpg|jpeg|svg|webp|avif|woff|woff2|ttf|otf)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                // Next.js build chunks — immutable
                source: '/_next/static/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                // HTML sayfalar — kısa cache, revalidate destekli
                source: '/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=86400',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
