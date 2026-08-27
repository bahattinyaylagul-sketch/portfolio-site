const fs = require('fs');
const filePath = 'src/components/ServicesBento.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Remove link from AI Strateji & RAG
content = content.replace('link: "/geo",\n        col: "md:col-span-1",\n        delay: 0.3,', 'col: "md:col-span-1",\n        delay: 0.3,');

// Replace the map rendering logic
const mapRegex = /\{items\.map\(\(item, index\) => \([\s\S]*?\}\)/;
const newMap = `{items.map((item, index) => {
                        const content = (
                            <FadeIn delay={item.delay} className="h-full">
                                <article className="h-full min-h-[220px] flex flex-col justify-center p-8 bg-gray-50 rounded-2xl group cursor-pointer relative overflow-hidden border border-gray-100/50 hover:border-gray-200 hover:shadow-sm transition-all duration-300">
                                    {/* Abstract background shape (optional) */}
                                    <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-gray-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {item.link && (
                                        <div className="absolute top-0 right-0 p-4 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                                            <svg className="w-5 h-5 text-gray-800 -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    )}

                                    <h3 className="text-xl font-sans font-bold mb-3 text-foreground group-hover:text-black transition-colors relative z-10">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed font-sans font-light relative z-10">
                                        {item.desc}
                                    </p>
                                </article>
                            </FadeIn>
                        );

                        return item.link ? (
                            <Link href={item.link} key={index} className={\`\${item.col} block h-full\`}>
                                {content}
                            </Link>
                        ) : (
                            <div key={index} className={\`\${item.col} block h-full\`}>
                                {content}
                            </div>
                        );
                    })}`;

content = content.replace(mapRegex, newMap);
fs.writeFileSync(filePath, content);
console.log('Fixed ServicesBento.tsx');
