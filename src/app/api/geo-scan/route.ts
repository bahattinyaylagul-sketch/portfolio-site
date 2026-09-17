import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { url } = await request.json();
        if (!url) {
            return NextResponse.json({ error: 'URL is required' }, { status: 400 });
        }

        const targetUrl = url.startsWith('http') ? url : `https://${url}`;
        
        let html = '';
        let status = 0;
        try {
            const res = await fetch(targetUrl, { 
                headers: { 'User-Agent': 'Mozilla/5.0 (compatible; GEOScanner/1.0)' },
                cache: 'no-store'
            });
            status = res.status;
            html = await res.text();
        } catch (e) {
            return NextResponse.json({ 
                error: 'Sitenize ulaşılamadı. (Geçersiz URL veya erişim engeli)',
                accessibility: 0, entityClarity: 0, contentAnswerability: 0, trustEvidence: 0, total: 0
            }, { status: 200 }); // Return 200 to handle error in UI gracefully
        }

        const lowerHtml = html.toLowerCase();

        // 1. Technical Accessibility (Max 25%)
        const is200 = status === 200;
        const hasNoIndex = lowerHtml.includes('noindex');
        const hasCanonical = lowerHtml.includes('rel="canonical"') || lowerHtml.includes("rel='canonical'");
        let techScore = 0;
        if (is200) techScore += 10;
        if (!hasNoIndex) techScore += 10;
        if (hasCanonical) techScore += 5;

        // 2. Entity Clarity (Max 20%)
        const hasSchema = lowerHtml.includes('application/ld+json');
        const hasOrgOrPerson = lowerHtml.includes('organization') || lowerHtml.includes('person') || lowerHtml.includes('localbusiness');
        let entityScore = 0;
        if (hasSchema) entityScore += 10;
        if (hasOrgOrPerson) entityScore += 10;
        else if (hasSchema) entityScore += 5; // Partial points if schema exists but maybe not org/person

        // 3. Content & Answerability (Max 30%)
        const hasH1 = /<h1[^>]*>/i.test(lowerHtml);
        const hasH2 = /<h2[^>]*>/i.test(lowerHtml);
        const hasFaq = lowerHtml.includes('faq') || lowerHtml.includes('sıkça sorulan') || lowerHtml.includes('sorular') || lowerHtml.includes('nedir');
        let contentScore = 0;
        if (hasH1) contentScore += 10;
        if (hasH2) contentScore += 10;
        if (hasFaq) contentScore += 10;

        // 4. Trust & Evidence (Max 25%)
        const hasAbout = lowerHtml.includes('hakkımızda') || lowerHtml.includes('about') || lowerHtml.includes('biz kim');
        const hasContact = lowerHtml.includes('iletişim') || lowerHtml.includes('contact');
        const hasTestimonial = lowerHtml.includes('referans') || lowerHtml.includes('müşteri') || lowerHtml.includes('yorum') || lowerHtml.includes('testimonial') || lowerHtml.includes('vaka');
        let trustScore = 0;
        if (hasAbout) trustScore += 10;
        if (hasContact) trustScore += 5;
        if (hasTestimonial) trustScore += 10;

        return NextResponse.json({
            accessibility: techScore,
            entityClarity: entityScore,
            contentAnswerability: contentScore,
            trustEvidence: trustScore,
            total: techScore + entityScore + contentScore + trustScore
        });

    } catch (error) {
        return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 });
    }
}
