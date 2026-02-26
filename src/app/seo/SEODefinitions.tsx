"use client";

import Image from "next/image";

export default function SEODefinitions() {
    return (
        <section className="bg-white py-24 px-6 border-b border-gray-100 relative overflow-hidden">
            {/* Arka plan süsleri */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/30 rounded-l-[100px] -z-10" />

            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
                    {/* Sol Kolon: SEO Nedir */}
                    <div>
                        <p className="text-gray-500 font-medium text-lg mb-1">Bilmeyenler için kısaca</p>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight mb-4">
                            SEO nedir?
                        </h2>
                        <div className="w-12 h-1 bg-pink-500 rounded-full mb-8"></div>

                        <div className="prose prose-lg text-gray-500 leading-relaxed">
                            <p className="mb-6">
                                Kısaca SEO, İngilizcede &quot;Search Engine Optimization&quot; kelimelerinin baş harflerinden oluşan bir kısaltma. Günümüzde dijital pazarlama alanında en önemli alanlardan biri olan SEO, Türkiye&apos;de &quot;Arama Motoru Optimizasyonu&quot; olarak biliniyor.
                            </p>
                            <p>
                                Kullanıcılara yaptıkları sorgulara yönelik en alakalı, doğru ve açıklayıcı sonuçları çıkarmayı hedefleyen Google&apos;ın ve diğer büyük arama motorlarının, sıralama kriterlerini etkin biçimde öğrenerek bunlara göre gerekli optimizasyonların yapılmasını sağlayan sürecin tamamına SEO deniliyor.
                            </p>
                        </div>

                        {/* Tasarım Ögesi (Yuvarlak İllüstrasyon) */}
                        <div className="mt-12 flex justify-center md:justify-start">
                            <div className="relative w-48 h-48 rounded-full overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-500">
                                <Image
                                    src="/images/seo/vector-seo-1.png"
                                    alt="SEO Nedir İllüstrasyon"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sağ Kolon: SEO Nasıl Yapılır */}
                    <div>
                        <p className="text-gray-500 font-medium text-lg mb-1">Yeni başlayanlar için</p>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight mb-4">
                            SEO nasıl yapılır?
                        </h2>
                        <div className="w-12 h-1 bg-pink-500 rounded-full mb-8"></div>

                        <div className="prose prose-lg text-gray-500 leading-relaxed">
                            <p className="mb-6">
                                Dünyadaki birçok başarılı kampanyadan öğrendiklerimize göre, SEO baştan sona bir takım işi. Bir şirketin tek başına bir SEO ajansına/danışmanına hiçbir takım desteği olmaksızın ödeme yaparak bir noktaya gelebilmesi maalesef mümkün değil.
                            </p>
                            <p>
                                Öncelikle SEO&apos;nun bir &quot;deneyim optimizasyonu&quot; olduğunu anlamak ve deneyimi iyileştirebilecek tüm takımları projeye dahil etmek gerekiyor. Başta içeri üretimi, teknik düzenlemelerde IT desteği ya da ürün ekibiyle kullanıcı tanıma seanslarında elde edilen yeni fikirleri SEO&apos;nun yapılış sürecine dahil edebiliriz.
                            </p>
                        </div>

                        {/* Tasarım Ögesi (Yuvarlak İllüstrasyon) */}
                        <div className="mt-12 flex justify-center md:justify-start">
                            <div className="relative w-48 h-48 rounded-full overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-500">
                                <Image
                                    src="/images/seo/vector-seo-2.png"
                                    alt="SEO Nasıl Yapılır İllüstrasyon"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
