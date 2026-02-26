const fs = require('fs');

let content = fs.readFileSync('/tmp/old_seo_page.tsx', 'utf8');

// 1. Replace Process Block with Dark Process Block and References
const oldProcessRegex = /\{\/\* Process Block \*\/\}.*?<\/div>\n\s+<\/section>/s;

const newProcessBlock = `
                        {/* Reference Logos */}
                        <div className="mt-16 mb-8 pt-12 border-t border-gray-100">
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest text-center mb-10">Büyüme Yolculuğunda Bize Güvenen Markalar</p>
                            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                                {["n-kolay-yeni.png", "aktif-bank-yeni.png", "dunyagoz-yeni.png", "golf-final.png", "passo-yeni.png"].map((logo, i) => (
                                    <Image key={i} src={\`/images/references/\${logo}\`} alt="Brand Logo" width={140} height={50} className="object-contain" />
                                ))}
                            </div>
                        </div>

                        {/* 3) SEO SÜREÇ MODELİ - MODERN DARK WIDGET */}
                        <div className="p-10 md:p-14 bg-[#0f172a] rounded-[2.5rem] mt-16 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] -ml-32 -mb-32"></div>
                            
                            <div className="mb-14 text-center relative z-10">
                                <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">Sürdürülebilir Büyüme Metodolojisi</h2>
                                <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">Tahminlere değil, veri analizine dayanan 4 aşamalı stratejik iş akışımız ile organik görünürlüğünüzü adım adım ölçeklendiriyoruz.</p>
                            </div>
                            
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                                {[
                                    { title: "Veri Keşfi", desc: "Sitenizin teknik engellerini ve sektördeki fırsatları tarama denetimiyle çıkarıyoruz." },
                                    { title: "Stratejik Mimari", desc: "Mevcut duruma göre kısa ve uzun vadeli, tamamen uygulanabilir bir büyüme haritası tasarlıyoruz." },
                                    { title: "Optimizasyon", desc: "Kod yapısını ve içerik kalitesini, belirlediğimiz KPI'lara uygun olarak en üst seviyeye taşıyoruz." },
                                    { title: "Ölçekleme", desc: "Performans metriklerini sürekli izleyerek algoritmik güncellemelerle uyumlu taze stratejiler üretiyoruz." }
                                ].map((step, i) => (
                                    <div key={i} className="relative p-8 bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800 transition-all group">
                                        <div className="text-6xl font-black text-gray-700 mb-4 group-hover:text-blue-500 transition-colors">0{i + 1}</div>
                                        <h4 className="text-xl font-bold mb-3 text-white">{step.title}</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
`;
content = content.replace(oldProcessRegex, newProcessBlock);

// 2. Remove texts in 02, 03, 04, 05 cards
const sectionsIds = ['technical-seo', 'on-page-seo', 'content-seo', 'off-page-seo'];

for (const id of sectionsIds) {
    const startIndex = content.indexOf(`id="${id}"`);
    if (startIndex === -1) continue;
    const endIndex = content.indexOf('</section>', startIndex) + 10;
    
    let sectionCode = content.substring(startIndex, endIndex);
    
    // Remove paragraphs inside grid
    sectionCode = sectionCode.replace(/<p className="text-sm text-gray-600 leading-\[1\.6\] tracking-\[-0\.01em\]">[\s\S]*?<\/p>/g, '');
    
    // Adjust card styling
    sectionCode = sectionCode.replace(/p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100/g, 'p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100 flex items-center justify-center text-center min-h-[120px]');
    
    // Remove bottom margin on headings inside those cards
    sectionCode = sectionCode.replace(/mb-2/g, 'mb-0');

    content = content.substring(0, startIndex) + sectionCode + content.substring(endIndex);
}


// 3. Inject amazing Images
const injectImage = (content, searchString, imageUrl) => {
    let pt = content.indexOf(searchString);
    if (pt === -1) return content;
    let endOfP = content.indexOf('</p>', pt);
    if (endOfP === -1) return content;
    let injectIndex = endOfP + 4;
    
    let imgBlock = `
                                    <div className="my-10 relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-md border border-gray-100 group">
                                        <div className="absolute inset-0 bg-gray-900/5 group-hover:bg-transparent transition-colors z-10"></div>
                                        <Image src="${imageUrl}" alt="Category Illustration" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    </div>
    `;
    return content.substring(0, injectIndex) + imgBlock + content.substring(injectIndex);
};

content = injectImage(content, '02. Teknik SEO: Dijital Altyapının Optimizasyonu', '/images/technical_seo_cover_3d.png');
content = injectImage(content, '03. On-Page SEO (Site İçi Optimizasyon)', '/images/on_page_seo_cover_3d.png');
content = injectImage(content, '04. İçerik Optimizasyonu ve Semantik Yazım', '/images/content_seo_cover_3d.png');


// 4. Testimonial Section
const testimonialBlock = `
                                {/* Testimonial Section */}
                                <section className="scroll-mt-32 p-8 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm mb-12 relative overflow-hidden group">
                                    <div className="absolute -top-32 -left-32 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">
                                        <div className="w-full md:w-1/3 flex justify-center mt-4 md:mt-0">
                                            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-white shadow-xl relative z-10">
                                                {/* You can replace this placeholder with a real headshot */}
                                                <Image src="/images/references/n-kolay-yeni.png" alt="Müşteri Görseli" fill className="object-contain bg-white p-6" />
                                            </div>
                                            <div className="absolute top-4 right-10 bg-white p-3 rounded-full shadow-lg z-20 w-16 h-16 flex items-center justify-center">
                                                <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-2/3 border-l-4 border-red-500 pl-6 md:pl-10">
                                            <span className="text-sm font-bold text-red-500 uppercase tracking-widest mb-4 block">SEO Müşterilerimiz Ne Düşünüyor?</span>
                                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-8">
                                                "Daha önce global ölçekteki farklı danışmanlarla ve ajanslarla çalışmıştık ancak hem erişilebilirlik hem de süreç yönetimi açısından zorlanıyorduk. SEO süreçlerimiz için Bahattin Bey ile çalışmaya başlamamızla beraber, önce kapsamlı bir audit (denetim) ve problemlerin hızlıca çözülmesi aşamasından geçtik. Ardından SEO’yu tüm dijital pazarlama planımızın merkezine yerleştirdik. Veri odaklı ve proaktif bir büyüme stratejisini adım adım hayata geçirdik."
                                            </p>
                                            <div>
                                                <h4 className="text-lg font-bold text-gray-900">Didem Namver</h4>
                                                <p className="text-gray-500 text-sm mt-1">Sr. Head of Digital</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
`;

const perfIndex = content.indexOf('{/* 06. SEO Performance Section */}');
if (perfIndex !== -1) {
    content = content.substring(0, perfIndex) + testimonialBlock + content.substring(perfIndex);
}

fs.writeFileSync('/Users/bahattinyaylagul/Bahattin Yaylagül /portfolio-site/src/app/seo/page.tsx', content);
console.log('Saved directly to page.tsx');
