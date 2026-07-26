import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export function GET() {
  const content = `# Bahattin Yaylagül – SEO & GEO Danışmanı

> Arama motorları ve yapay zeka sistemleri için içerik optimizasyonu konusunda uzmanlaşmış bağımsız danışman.

## Hakkında

Bahattin Yaylagül, SEO (Search Engine Optimization) ve GEO (Generative Engine Optimization) alanlarında uzmanlaşmış bir dijital pazarlama danışmanıdır. Markaların hem geleneksel arama motorlarında hem de yapay zeka destekli sistemlerde görünürlüğünü artırma konusunda veri odaklı stratejiler sunar.

- **Uzmanlık Alanları:** SEO Danışmanlığı, GEO (Generative Engine Optimization), Teknik SEO, İçerik Stratejisi
- **Dil:** Türkçe
- **Konum:** Türkiye
- **Web Sitesi:** https://bahattinyaylagul.com

## Ana Sayfalar

- [Ana Sayfa](https://bahattinyaylagul.com): SEO ve GEO danışmanlık hizmetleri tanıtım sayfası
- [SEO Danışmanlığı](https://bahattinyaylagul.com/seo): Arama motoru optimizasyonu hizmetleri ve yaklaşımları
- [GEO Danışmanlığı](https://bahattinyaylagul.com/geo): Generative Engine Optimization – yapay zeka için içerik optimizasyonu
- [Hakkımda](https://bahattinyaylagul.com/hakkimda): Danışman profili, deneyim ve uzmanlık alanları
- [Referanslar](https://bahattinyaylagul.com/referanslar): Müşteri referansları ve başarı hikayeleri
- [İçgörüler / GEO](https://bahattinyaylagul.com/geo): SEO ve GEO üzerine makaleler ve analizler
- [Teknik SEO](https://bahattinyaylagul.com/seo/teknik-seo): Teknik SEO rehberi ve best practice'ler
- [SEO Rehberi](https://bahattinyaylagul.com/seo-rehberi): Kapsamlı SEO kılavuzu

## GEO & İçgörüler Makaleleri

- [llms.txt Nedir?](https://bahattinyaylagul.com/geo/llms-txt-nedir): Yapay zeka modellerine yönelik llms.txt dosyasının önemi ve nasıl oluşturulacağı
- [GEO Rehberi](https://bahattinyaylagul.com/geo): Generative Engine Optimization kapsamlı rehber
- [AI Marka Mention Etkisi](https://bahattinyaylagul.com/geo/ai-marka-mention-etkisi): Yapay zeka sistemlerinde marka anılmalarının SEO'ya etkisi
- [Reddit & Forum Mention Etkisi](https://bahattinyaylagul.com/geo/reddit-forum-mention-etkisi): Forum ve sosyal platform atıflarının arama sıralamalarına etkisi
- [ChatGPT GEO Rehberi](https://bahattinyaylagul.com/geo/chatgpt-geo): ChatGPT'nin yanıtlarında kaynak göstermesini sağlamanın tam rehberi

## İletişim

Danışmanlık hizmetleri için iletişime geçmek amacıyla [ana sayfa iletişim formu](https://bahattinyaylagul.com/#iletisim) kullanılabilir.

## Bağlantılar

- LinkedIn: https://www.linkedin.com/in/bahattin-yaylagul/
- Medium: https://medium.com/@bahattinyaylagl
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
}
