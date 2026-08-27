import Image from "next/image";

const experiences = [
    { period: "Nis 2026 — Current", role: "Founder | Growth Strategist", company: "NextCode Collective", active: true },
    { period: "2023 — 2026", role: "Co-Founder", company: "C-Level Agency", active: false },
    { period: "2019 — 2023", role: "SEO Director & Team Lead", company: "Digital House", active: false },
    { period: "2018 — 2019", role: "SEO Manager", company: "Humble", active: false },
    { period: "2016 — 2018", role: "Sr. SEO Executive", company: "Digital Partners", active: false },
    { period: "2015 — 2018", role: "ASO Consultant", company: "Pepapp BV.", active: false },
    { period: "2012 — 2016", role: "SEO Executive & Medya Şefi", company: "Ofisten / Medya Şef", active: false }
];

const skills = [
    "Business Strategy",
    "SEO & Digital Marketing Operations",
    "Team Leadership",
    "ASO (App Store Optimization)",
    "GEO / AI Optimization",
    "Technical SEO"
];

const projects = [
    "Aktif Bank", "Vans", "The North Face", "Siemens", "Bosch",
    "N Kolay", "Passo", "Golf Dondurmaları", "Signal", "Neutrogena",
    "Profilo", "Panasonic", "Levi's", "Timberland", "Tommy Hilfiger",
    "Calvin Klein", "Eastpak", "LTB Jeans", "Dockers", "Hemington",
    "Yargıcı", "Gizia", "Lee Cooper", "Yatsan", "Daikin",
    "NN Hayat", "Enza Home", "Troy", "Kahve Dünyası",
    "Little Caesars", "Koroplast", "Bahçıvan Peynir", "Crocs",
    "EnPlus", "Mandarin Oriental", "Eveshop", "Mapfre Sigorta",
    "Pronet", "D-Smart", "Bayındır Hastanesi", "Suryapı"
];

export default function About() {
    return (
        <section id="about" className="py-8 lg:py-24 bg-white" aria-labelledby="about-heading">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    {/* Left - Photo & Visual */}
                    <div className="relative lg:sticky lg:top-32 flex flex-col items-center justify-center p-0 lg:p-8 h-fit">
                        <div className="relative">
                            {/* Decorative Circle Background */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-gray-100 rounded-full -z-10" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gray-50 rounded-full -z-20" />

                            {/* Photo Container - Circular & Smaller */}
                            <div className="w-48 h-48 md:w-56 md:h-56 relative rounded-full overflow-hidden border-4 border-white shadow-2xl group z-10 transition-transform hover:scale-105 duration-500">
                                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                                <Image
                                    src="/images/bahattin-yaylagul.jpg"
                                    alt="Bahattin Yaylagül - SEO & GEO Danışmanı"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-2 -right-4 bg-black text-white px-4 py-2 rounded-full shadow-xl border-4 border-white z-20 flex flex-col items-center">
                                <span className="text-xl font-black leading-none">12+</span>
                                <span className="text-[10px] text-gray-400 uppercase tracking-widest leading-none mt-0.5">Yıl</span>
                            </div>

                            {/* Decorative Blur behind */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-black/20 blur-3xl rounded-full -z-10 opacity-40 transform scale-110" />
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div>
                        <span className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-4 block">
                            Uzmanlık & Deneyim
                        </span>

                        <p className="text-gray-600 leading-relaxed mb-6">
                            Yaklaşık 12+ yıldır SEO ve dijital görünürlük alanında; yerel ve global ölçekte birçok lider markanın büyüme projelerinde yer aldım.
                        </p>

                        {/* Experience Timeline */}
                        <div className="mb-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                Kariyer Yolculuğu
                            </h2>
                            <nav aria-label="Kariyer Geçmişi">
                                <ul className="space-y-6 border-l-2 border-gray-100 ml-3 pl-8 relative">
                                    {experiences.map((exp, index) => (
                                        <li key={index} className="relative">
                                            <span className={`absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-white shadow-sm ${exp.active ? 'bg-black ring-1 ring-gray-100' : 'bg-gray-200'}`} />
                                            <time className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 block">{exp.period}</time>
                                            <div>
                                                <h3 className="font-bold text-foreground text-lg">{exp.role}</h3>
                                                <span className="text-gray-500 font-medium">{exp.company}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        {/* Skills */}
                        <div className="mb-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                Yetkinlikler
                            </h2>
                            <ul className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Top Clients - Text Based Tag Cloud */}
                        <div className="mt-10 pt-8 border-t border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                Projeler
                            </h2>
                            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                                Bugüne kadar SEO, Teknik SEO ve büyüme stratejileri danışmanlığı verdiğim markalar.
                            </p>

                            {/* SR-Only & LLM Semantic Block: Visually hidden but readable by screen readers and AI crawlers */}
                            <div className="sr-only">
                                <h3>Sektörel Deneyimler ve Danışmanlık Verilen Markalar</h3>
                                <ul>
                                    <li><strong>Perakende & Giyim:</strong> Vans, The North Face, Levi's, Timberland, Tommy Hilfiger, Calvin Klein, Eastpak, LTB Jeans, Dockers, Hemington, Yargıcı, Gizia, Lee Cooper, Crocs</li>
                                    <li><strong>Finans & Sigorta & Ödeme Sistemleri:</strong> Aktif Bank, N Kolay, Passo, NN Hayat, Mapfre Sigorta, Troy</li>
                                    <li><strong>Teknoloji, Beyaz Eşya & İklimlendirme:</strong> Siemens, Bosch, Profilo, Panasonic, Daikin, EnPlus</li>
                                    <li><strong>Gıda & Hızlı Tüketim (FMCG):</strong> Golf Dondurmaları, Kahve Dünyası, Little Caesars, Koroplast, Bahçıvan Peynir</li>
                                    <li><strong>Sağlık & Kişisel Bakım & Kozmetik:</strong> Signal, Neutrogena, Eveshop, Bayındır Hastanesi</li>
                                    <li><strong>Mobilya & Ev Dekorasyon:</strong> Yatsan, Enza Home</li>
                                    <li><strong>Hizmet, Turizm & Diğer:</strong> Mandarin Oriental, Pronet, D-Smart, Suryapı</li>
                                </ul>
                            </div>

                            {/* Visual Block for normal users */}
                            <ul className="flex flex-wrap gap-x-2 gap-y-1 text-sm text-gray-500 font-medium" aria-hidden="true">
                                {projects.map((proj, idx) => (
                                    <li key={idx} className="after:content-['•'] after:ml-2 last:after:content-none flex items-center">
                                        <span>{proj}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* LinkedIn Button */}
                        <div className="mt-10 pt-8 border-t border-gray-100">
                            <a
                                href="https://www.linkedin.com/in/bahattin-yaylagul/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#0A66C2] text-white text-sm font-bold rounded-full hover:bg-[#004182] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                LinkedIn Profilimi Ziyaret Et
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
