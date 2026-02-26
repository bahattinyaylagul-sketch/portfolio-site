const fs = require('fs');
const FILE_PATH = '/Users/bahattinyaylagul/Bahattin Yaylagül /portfolio-site/src/app/seo/page.tsx';
let content = fs.readFileSync(FILE_PATH, 'utf8');

// 1. REWRITE HERO AND WRAP TOP SECTIONS
const heroRegex = /<header className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-background[\s\S]*?<\/header>/m;
const newHero = `<header className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-background py-16 md:py-24 mb-4">
    <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-8 h-1 bg-gray-900 rounded-full"></span>
            <span className="text-sm font-medium tracking-widest text-gray-500 uppercase">Hizmet</span>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            SEO <span className="text-gray-400">Danışmanlığı</span>
        </h1>
        <p className="text-lg md:text-xl font-medium text-gray-600 mb-10 mx-auto max-w-3xl leading-relaxed">
            Organik görünürlüğünüzü veri odaklı stratejilerle büyüterek, dijital pazardaki kalıcı otoritenizi inşa ediyoruz.
        </p>
        
        <div className="flex justify-center gap-4 max-w-md mx-auto">
            <div className="text-center p-5 bg-white rounded-2xl shadow-sm border border-gray-100 flex-1">
                <span className="text-3xl font-black text-[#58cc82] block">12+</span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Yıl Deneyim</span>
            </div>
            <div className="text-center p-5 bg-white rounded-2xl shadow-sm border border-gray-100 flex-1">
                <span className="text-3xl font-black text-[#58cc82] block">200+</span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Proje</span>
            </div>
        </div>
    </div>
</header>

<div className="max-w-[1440px] mx-auto px-4 md:px-8 relative flex flex-col lg:flex-row gap-12 items-start mb-24 mt-8">
    <aside className="w-full lg:w-[380px] shrink-0 lg:sticky lg:top-32 z-50 order-first lg:order-last mb-10 lg:mb-0">
        <div className="bg-[#1a202c] rounded-[2rem] p-8 shadow-2xl relative border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-2">Ücretsiz Analiz</h3>
            <p className="text-gray-400 text-[15px] mb-6 leading-relaxed">Sitenizin SEO durumunu detaylı inceleyip, potansiyel fırsatları ücretsiz değerlendirelim.</p>
            <form className="flex flex-col gap-4">
                <input type="text" placeholder="Ad Soyad" className="w-full bg-[#2d3748] border border-gray-600 rounded-xl px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm font-medium" required />
                <input type="url" placeholder="Web Site Adresiniz" className="w-full bg-[#2d3748] border border-gray-600 rounded-xl px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm font-medium" required />
                <input type="tel" placeholder="Telefon Numarası" className="w-full bg-[#2d3748] border border-gray-600 rounded-xl px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm font-medium" required />
                <textarea placeholder="Kısa mesaj (Opsiyonel)" rows={2} className="w-full bg-[#2d3748] border border-gray-600 rounded-xl px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm font-medium resize-none"></textarea>
                <button type="submit" className="w-full bg-white text-gray-900 font-bold text-base rounded-xl py-4 mt-2 hover:bg-gray-100 transition-all shadow-xl hover:shadow-white/20 active:scale-[0.98]">
                    Ücretsiz SEO Ön Analizi Al
                </button>
            </form>
            <p className="text-[11px] text-gray-500 mt-4 text-center">
                * Bilgileriniz gizli tutulacak olup sadece proje değerlendirmesi amacıyla kullanılacaktır.
            </p>
        </div>
    </aside>

    <div className="flex-1 w-full min-w-0 flex flex-col gap-y-8">
`;
content = content.replace(heroRegex, newHero);


// CLOSE THE REPLACEMENT DIV right before "Main Content Grid"
const mainContentRegex = /(<div className="max-w-6xl mx-auto px-4 md:px-6">\s*<div className="flex flex-col lg:grid lg:grid-cols-\[280px_1fr\] gap-12">)/;
content = content.replace(mainContentRegex, '</div>\n</div>\n\n{/* Main Content Grid */}\n$1');



// 2. REWRITE Success Stories into 4 large cards

function genCard(title, subtitle, perc1, p1T, perc2, p2T, perc3, p3T, logo, bgImg, link, scaleText) {
    return `
        <div className="border border-gray-100 rounded-[2.5rem] overflow-hidden group hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 flex flex-col xl:flex-row bg-white h-auto xl:h-[380px]">
            <div className="p-8 xl:p-12 flex flex-col justify-center relative z-10 w-full xl:w-[55%]">
                <div className="mb-6 h-12 flex items-center">
                    ${logo}
                </div>
                <h4 className="${scaleText ? 'text-2xl xl:text-3xl' : 'text-xl xl:text-2xl'} font-black text-gray-900 mb-3">${title}</h4>
                <p className="text-sm font-medium text-gray-500 mb-8 leading-relaxed max-w-sm">
                    ${subtitle}
                </p>
                <div className="flex flex-wrap gap-8 mb-8">
                    <div className="text-left">
                        <div className="text-3xl xl:text-4xl font-black text-[#58cc82] mb-1">${perc1}</div>
                        <div className="text-xs font-bold text-gray-800 leading-tight">${p1T}</div>
                    </div>
                    <div className="text-left">
                        <div className="text-3xl xl:text-4xl font-black text-[#58cc82] mb-1">${perc2}</div>
                        <div className="text-xs font-bold text-gray-800 leading-tight">${p2T}</div>
                    </div>
                    <div className="text-left">
                        <div className="text-3xl xl:text-4xl font-black text-[#58cc82] mb-1">${perc3}</div>
                        <div className="text-xs font-bold text-gray-800 leading-tight">${p3T}</div>
                    </div>
                </div>

                <div>
                    <Link
                        href="${link}"
                        className="inline-flex items-center gap-4 group/btn"
                    >
                        <div className="w-12 h-12 bg-[#0a2540] rounded-full flex items-center justify-center group-hover/btn:bg-red-500 transition-colors shadow-md">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </div>
                        <span className="font-bold text-gray-900 group-hover/btn:text-red-500 transition-colors uppercase tracking-widest text-sm">VAKAYI İNCELE</span>
                    </Link>
                </div>
            </div>
            {/* Graphic area */}
            <div className="w-full xl:w-[45%] relative h-64 xl:h-full overflow-hidden pointer-events-none bg-gray-50">
                <div className="w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-[1.5s] ease-out relative">
                    <Image src="${bgImg}" alt="Growth Graphic" fill className="object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/90 z-10 xl:block hidden"></div>
                </div>
            </div>
        </div>
    `;
}

const nKolayLogo = `<Image src="/images/references/n-kolay-yeni.png" alt="N Kolay" width={160} height={50} className="object-contain object-left" />`;
const atlasLogo = `<Image src="/images/references/atlas-uni.jpg" alt="Atlas Üniversitesi" width={160} height={50} className="object-contain object-left" />`;
const maltepeLogo = `<Image src="/images/references/maltepe-uni.png" alt="Maltepe Hastanesi" width={160} height={50} className="object-contain object-left" />`;
const golfLogo = `<Image src="/images/references/golf-yeni.png" alt="Golf Dondurma" width={120} height={50} className="object-contain object-left" />`;
const mertLogo = `<div className="flex items-center gap-4"><div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 shrink-0"><Image src="/images/references/mert.jpeg" alt="Mert Dumantepe" width={48} height={48} className="object-cover" /></div><span className="font-black text-gray-800 text-lg leading-tight uppercase tracking-wide">Prof.Dr. Mert <br/>Dumantepe</span></div>`;


const casesBlock = `
    <div className="space-y-12 w-full">
        ${genCard(
            "Finans Sektöründe Radikal Büyüme", 
            "Aylık 2M+ organik trafik ve Türkiye\\'nin en rekabetçi finans kelimelerinde eşsiz büyüme grafiği.", 
            "%166", "Gösterim<br/>Artışı", 
            "%133", "Trafik<br/>Artışı", 
            "%52", "Konum<br/>İyileşmesi", 
            nKolayLogo, "/images/technical_seo_cover_3d.png", "/vaka-calismalari/n-kolay", true)}
        
        ${genCard(
            "Sağlık Sektöründe Radikal Büyüme", 
            "Uyguladığımız Semantik SEO ve teknik iyileştirmeler ile organikte eşsiz büyüme grafiği.", 
            "266K+", "Aylık<br/>Trafik", 
            "39K+", "Sıralanan<br/>Kelime", 
            "%98", "Index<br/>Oranı", 
            atlasLogo, "/images/semantic_seo_3d.png", "/vaka-calismalari/atlas-universitesi", true)}

        ${genCard(
            "Hatalı Migration Sonrası %100 Kurtarma", 
            "Sert trafik düşüşünün ardından uygulanan kapsamlı teknik check-up ve reorganizasyon ile zirveye dönüş.", 
            "370K+", "Zirve<br/>Trafik", 
            "74K+", "Sıralanan<br/>Kelime", 
            "%120", "Görünürlük<br/>Hacmi", 
            maltepeLogo, "/images/crawling_indexing_3d.png", "/vaka-calismalari/maltepe-hastanesi", true)}

        ${genCard(
            "FMCG Sektöründe Organik Liderlik", 
            "Yüksek rekabetli alanda uygulanan &quot;Topic Authority&quot; inşası ve eşsiz performans artışı.", 
            "45K+", "Aylık<br/>Trafik", 
            "7K+", "Kelime<br/>Kazanımı", 
            "#1", "Hedef<br/>Kelime", 
            golfLogo, "/images/topic_authority_3d.png", "/vaka-calismalari/golf-dondurma", true)}

        ${genCard(
            "0&apos;dan Zirveye Doktor & Hekim SEO&apos;su", 
            "Uzmanlık, deneyim ve güvenilirlik (E-E-A-T) konseptlerinin kurgusuyla gelen başarı.", 
            "25K+", "Aylık<br/>Trafik", 
            "8K+", "Sıralanan<br/>Kelime", 
            "#1", "Klinik<br/>Arama", 
            mertLogo, "/images/eeat_trust_3d.png", "/vaka-calismalari/mert-dumantepe", true)}
    </div>
`;


const searchRegex = /<div className="max-w-5xl mx-auto space-y-8">[\s\S]*?<\/div>(\s*<\/div>\s*<\/section>\s*\{\/\* Testimonial)/;
if (searchRegex.test(content)) {
    content = content.replace(searchRegex, `<div className="w-full">\n${casesBlock}\n</div>\n$1`);
    console.log('REPLACED CARDS');
} else {
    console.log('REGEX DID NOT MATCH CARDS');
}

fs.writeFileSync(FILE_PATH, content);
console.log('Done replacement');
