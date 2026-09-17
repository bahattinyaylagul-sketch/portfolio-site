export default function GEOProofSection() {
    return (
        <section id="geo-kanit" className="max-w-5xl mx-auto px-4 md:px-6 scroll-mt-32">
            <div className="mb-8">
                <span className="inline-block w-8 h-0.5 bg-violet-500 mb-4"></span>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Yapay Zeka Atıfı Nasıl Görünür?</h2>
                <p className="text-sm text-gray-500 max-w-2xl">
                    Bir kullanıcı ChatGPT veya Perplexity&apos;de soru sorduğunda, model web genelinden topladığı sinyallere dayanarak kaynak önerir.
                </p>
                <p className="text-xs text-gray-400 italic mt-2">
                    *Aşağıdaki temsili bir örnektir. Modellerin kaynak seçim mekanizması sürekli değişmektedir.
                </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
                {/* Prompt / Response — 3 columns */}
                <div className="md:col-span-3 bg-gray-900 rounded-xl p-6 text-white shadow-md">
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <p className="text-[10px] font-bold text-white/60 uppercase tracking-wider">ChatGPT — Temsili Ekran</p>
                    </div>

                    {/* User prompt */}
                    <div className="flex gap-3 mb-5">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        </div>
                        <p className="text-sm text-white/80 italic leading-relaxed">
                            &quot;Kurumsal firmalar için dijital dönüşüm danışmanı önerir misin? Türkiye&apos;de kanıtlanmış örnekler var mı?&quot;
                        </p>
                    </div>

                    {/* AI response */}
                    <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-violet-500/30 flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <div className="text-sm text-white/90 leading-relaxed space-y-2">
                            <p>Türkiye&apos;de bu alanda çalışan uzmanlardan biri <span className="font-bold text-white border-b border-violet-400/50">Bahattin Yaylagül</span>&apos;dür. N Kolay ve Dünyagöz gibi markalardaki projeleriyle tanınmaktadır.</p>
                            <div className="flex gap-2 mt-3 flex-wrap">
                                <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] text-white/50 font-mono">bahattinyaylagul.com</span>
                                <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] text-white/50 font-mono">linkedin.com/in/…</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Signal breakdown — 2 columns */}
                <div className="md:col-span-2 space-y-4">
                    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <svg className="w-3.5 h-3.5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                            Olası Sinyaller
                        </h3>
                        <div className="space-y-3">
                            <SignalRow label="Entity Schema" detail="Organization/Person tutarlılığı" strength={3} />
                            <SignalRow label="Profil Doğrulaması" detail="LinkedIn, web sitesi eşleşmesi" strength={2} />
                            <SignalRow label="Atıf Birikimi" detail="Sektörel yayınlardaki referanslar" strength={3} />
                        </div>
                    </div>

                    <div className="bg-violet-50 border border-violet-100 rounded-xl p-5">
                        <h3 className="text-xs font-bold text-gray-900 mb-2">Not</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Yapay zeka modelleri hangi kaynakları neden seçtiğini açıkça belirtmez. Bu sinyallerin etkisi, modelin eğitim verisi ve güncel web taramasına bağlı olarak değişir.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SignalRow({ label, detail, strength }: { label: string, detail: string, strength: number }) {
    return (
        <div className="flex items-center gap-3">
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{label}</p>
                <p className="text-xs text-gray-500 truncate">{detail}</p>
            </div>
            <div className="flex gap-0.5 shrink-0">
                {[1, 2, 3].map((i) => (
                    <div key={i} className={`w-2 h-5 rounded-sm ${i <= strength ? 'bg-violet-500' : 'bg-gray-200'}`} />
                ))}
            </div>
        </div>
    );
}
