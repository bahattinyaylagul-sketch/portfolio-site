
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import FadeIn from '../../components/FadeIn';
import Link from 'next/link';

export default function TechnicalSEOPage() {
    return (
        <main className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
            <Navigation />
            <article className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-foreground">
                            Teknik SEO & Altyapı Çözümleri
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <p className="text-xl text-gray-600 leading-relaxed mb-12">
                            Modern web, hız ve erişilebilirlik üzerine kuruludur. Google'ın Core Web Vitals metriklerinden, JavaScript (React/Next.js) tabanlı sitelerin taranabilirliğine kadar; altyapınız stratejinizin sınırlarını belirler.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p>
                                Teknik SEO, sadece meta etiketlerden ibaret değildir. Sunucu yanıt süreleri, önbellekleme stratejileri (ISR/SSG) ve render mimarisi, arama motorlarının sitenizi nasıl algıladığını doğrudan etkiler.
                            </p>
                            <p>
                                Sağlam bir teknik altyapı, kapsamlı <Link href="/seo" className="text-blue-600 font-semibold hover:underline decoration-2 decoration-blue-200 underline-offset-4 transition-all">SEO Danışmanlığı</Link> hizmetimizin omurgasını oluşturur. İçerik ne kadar iyi olursa olsun, teknik temel olmadan performans göstermez.
                            </p>
                            <h3>Hizmet Kapsamı</h3>
                            <ul>
                                <li><strong>Crawl Budget Optimizasyonu:</strong> Tarama bütçesini verimli kullanarak önemli sayfaların indekslenmesi.</li>
                                <li><strong>JavaScript SEO:</strong> React, Vue ve Angular uygulamalarının Googlebot tarafından doğru render edilmesi.</li>
                                <li><strong>Core Web Vitals:</strong> LCP, FID ve CLS metriklerinin iyileştirilmesi.</li>
                                <li><strong>Schema & Yapısal Veri:</strong> Zengin sonuçlar (Rich Snippets) için semantik işaretleme.</li>
                            </ul>
                        </div>
                    </FadeIn>
                </div>
            </article>
            <Footer />
        </main>
    );
}
