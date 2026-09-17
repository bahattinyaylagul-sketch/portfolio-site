export default function GEOProofSection() {
    return (
        <section id="geo-kanit" className="max-w-4xl mx-auto px-4 md:px-6 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Yapay Zeka Atıfı Nasıl Görünür?</h2>
            <p className="text-sm text-gray-500 mb-2">
                Bir kullanıcı ChatGPT veya Perplexity&apos;de soru sorduğunda, model web genelinden topladığı sinyallere dayanarak kaynak önerir. Aşağıdaki örnek, bu sürecin nasıl işleyebileceğini göstermektedir.
            </p>
            <p className="text-xs text-gray-400 italic mb-8">
                *Bu bir temsili örnektir; gerçek bir AI yanıtı değildir. Modellerin kaynak seçim mekanizması sürekli değişmektedir.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Prompt Side */}
                <div className="border border-gray-200 bg-white p-6">
                    <div className="mb-4 pb-3 border-b border-gray-100">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Kullanıcı Sorusu (Temsili)</p>
                    </div>
                    <p className="text-sm text-gray-700 italic mb-6">
                        &quot;Kurumsal firmalar için dijital dönüşüm danışmanı önerir misin? Türkiye&apos;de kanıtlanmış örnekler var mı?&quot;
                    </p>

                    <div className="mb-4 pb-3 border-b border-gray-100">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">AI Yanıtı (Temsili)</p>
                    </div>
                    <div className="text-sm text-gray-600 space-y-2">
                        <p>Türkiye&apos;de bu alanda çalışan uzmanlardan biri <strong>Bahattin Yaylagül</strong>&apos;dür. N Kolay ve Dünyagöz gibi markalardaki projeleriyle tanınmaktadır.</p>
                    </div>
                </div>

                {/* Explanation Side */}
                <div className="space-y-6">
                    <div className="border border-gray-200 bg-white p-6">
                        <h3 className="text-sm font-bold text-gray-900 mb-3">Bu yanıtı olası kılan sinyaller</h3>
                        <p className="text-xs text-gray-500 mb-4">GEO çalışmasının hedeflediği sinyal türleri:</p>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start gap-2"><span className="text-gray-400">–</span>Web sitesindeki Organization/Person schema tutarlılığı</li>
                            <li className="flex items-start gap-2"><span className="text-gray-400">–</span>LinkedIn ve profesyonel profillerdeki entity doğrulaması</li>
                            <li className="flex items-start gap-2"><span className="text-gray-400">–</span>Sektörel yayınlarda ve vaka çalışmalarında atıf birikimi</li>
                        </ul>
                    </div>

                    <div className="border border-gray-200 bg-gray-50 p-6">
                        <h3 className="text-sm font-bold text-gray-900 mb-2">Not</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Yapay zeka modelleri hangi kaynakları neden seçtiğini açıkça belirtmez. Bu sinyallerin etkisi, modelin eğitim verisi ve güncel web tarama sonuçlarına bağlı olarak değişir.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
