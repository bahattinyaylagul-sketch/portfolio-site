const fs = require('fs');
const oldContent = fs.readFileSync('/tmp/old_seo_page.tsx', 'utf8');

let newContent = oldContent;

// 1. Replace Process Block with Dark Process Block
const oldProcessRegex = /\{\/\* Process Block \*\/\}.*?<\/div>\n\s+<\/section>/s;
const newProcessBlock = `{/* 3) SEO SÜREÇ MODELİ - MODERN STEP WIDGET */}
                        <div className="p-10 bg-gray-900 rounded-3xl mt-12 shadow-xl relative overflow-hidden">
                            <div className="mb-12 text-center relative z-10">
                                <h2 className="text-3xl font-black mb-4 text-white">Kanıtlanmış Çalışma Modeli</h2>
                                <p className="text-gray-400 max-w-2xl mx-auto">Başarı şans eseri gelmez. Şeffaf ve veriye dayalı 4 aşamalı stratejik iş akışımız.</p>
                            </div>
                            
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                                {[
                                    { title: "Keşif & Analiz", desc: "Teknik sağlık sorunlarını, rakip pazarını ve anahtar kelime fırsatlarını geniş çaplı veri denetimiyle tespit ediyoruz." },
                                    { title: "Stratejik Harita", desc: "Mevcut duruma göre kısa, orta ve uzun vadeli, eyleme geçirilebilir bir optimizasyon yol haritası kurguluyoruz." },
                                    { title: "Optimizasyon", desc: "Site içi mimariyi, teknik altyapıyı ve içerik planını belirlediğimiz KPI'ları hedeflerek hayata geçiriyoruz." },
                                    { title: "Ölçüm & Büyüme", desc: "Sürekli izleme, testler ve yenilikçi hamlelerle sıralamaları kalıcı kılarak geliri maksimize ediyoruz." }
                                ].map((step, i) => (
                                    <div key={i} className="relative p-6 bg-gray-800 rounded-2xl border border-gray-700 hover:bg-gray-750 transition-colors group">
                                        <div className="text-5xl font-black text-gray-700 mb-4 group-hover:text-blue-500 transition-colors">0{i + 1}</div>
                                        <h4 className="text-xl font-bold mb-3 text-white">{step.title}</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>`;

newContent = newContent.replace(oldProcessRegex, newProcessBlock);

// 2. Remove specific long paragraphs from 02, 03, 04, 05 cards.
// Easiest is to regex replace the <p> inside those grid cards.
const sectionIds = ['technical-seo', 'on-page-seo', 'content-seo', 'off-page-seo'];

sectionIds.forEach(id => {
  const sectionStart = newContent.indexOf(`id="${id}"`);
  const sectionEnd = newContent.indexOf('<section', sectionStart + 1);
  let sectionContext = newContent.substring(sectionStart, sectionEnd !== -1 ? sectionEnd : undefined);
  
  // Replace the paragraphs inside the cards
  sectionContext = sectionContext.replace(/<p className="text-sm text-gray-600 leading-\[1\.6\] tracking-\[-0\.01em\]">[\s\S]*?<\/p>/g, '');
  // Adjust the cards padding from p-8 to p-6 or let it be
  sectionContext = sectionContext.replace(/p-8 bg-gray-50/g, 'p-6 bg-gray-50 flex items-center justify-center text-center h-full');
  sectionContext = sectionContext.replace(/mb-2/g, 'mb-0'); // remove bottom margin from h3 since there is no p
  
  newContent = newContent.substring(0, sectionStart) + sectionContext + newContent.substring(sectionEnd !== -1 ? sectionEnd : newContent.length);
});

fs.writeFileSync('src/app/seo/page.tsx', newContent);
console.log("DONE");
