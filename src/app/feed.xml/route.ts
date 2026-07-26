import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

const baseUrl = 'https://bahattinyaylagul.com';

const posts = [
  {
    slug: 'llms-txt-nedir',
    title: 'llms.txt Nedir? Tanım, Format, Etkinlik Analizi ve Uygulama Rehberi',
    excerpt:
      'llms.txt nedir, nasıl oluşturulur ve gerçekten işe yarıyor mu? 300.000 domain analizi, robots.txt farkı, format rehberi ve maliyet-fayda değerlendirmesi.',
    date: 'Thu, 04 Jul 2026 00:00:00 +0000',
    category: 'GEO / AI Search',
  },
  {
    slug: 'geo-rehberi',
    title: 'Generative Engine Optimization (GEO): Kapsamlı Rehber',
    excerpt:
      'Klasik SEO\'dan yapay zeka çağına geçiş. LLM modellerinde kaynak olarak gösterilmek ve otorite kazanmak için uygulanabilir stratejiler.',
    date: 'Fri, 13 Feb 2026 00:00:00 +0000',
    category: 'GEO / AI Search',
  },
  {
    slug: 'reddit-forum-mention-etkisi',
    title: 'Reddit ve Forumlardaki Mention\'lar GEO Başarısını Nasıl Etkiler?',
    excerpt:
      'Reddit ve forumlardaki mention\'lar (bahsedilmeler), GEO başarısı için kritik bir "güven doğrulama" mekanizması olarak çalışır.',
    date: 'Sat, 31 Jan 2026 00:00:00 +0000',
    category: 'GEO / AI Search',
  },
  {
    slug: 'ai-marka-mention-etkisi',
    title: 'Marka İsminin "Mention" Olarak Geçmesi AI Hafızasını Nasıl Etkiler?',
    excerpt:
      'Link olmadan, sadece metin içinde "mention" olarak geçmek, AI algoritmalarının hafızasını ve karar mekanizmasını doğrudan etkiler.',
    date: 'Sat, 31 Jan 2026 00:00:00 +0000',
    category: 'GEO / AI Search',
  },
];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function GET() {
  const items = posts
    .map(
      (post) => {
        const url = post.slug === 'geo-rehberi' ? `${baseUrl}/geo` : `${baseUrl}/geo/${post.slug}`;
        return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${post.date}</pubDate>
      <category>${escapeXml(post.category)}</category>
      <author>noreply@bahattinyaylagul.com (Bahattin Yaylagül)</author>
    </item>`;
      }
    )
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Bahattin Yaylagül – GEO &amp; SEO İçgörüleri</title>
    <link>${baseUrl}/geo</link>
    <description>SEO, GEO ve dijital pazarlama dünyasından en güncel stratejiler, teknik analizler ve sektörel notlar.</description>
    <language>tr</language>
    <managingEditor>noreply@bahattinyaylagul.com (Bahattin Yaylagül)</managingEditor>
    <webMaster>noreply@bahattinyaylagul.com (Bahattin Yaylagül)</webMaster>
    <lastBuildDate>${posts[0].date}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${baseUrl}/icon.png</url>
      <title>Bahattin Yaylagül – GEO &amp; SEO İçgörüleri</title>
      <link>${baseUrl}/geo</link>
    </image>
    ${items}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
