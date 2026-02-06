
import FadeIn from "./FadeIn";

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-20 px-6"
            aria-labelledby="contact-heading"
        >
            <div className="max-w-5xl mx-auto text-center">
                <FadeIn>
                    <p className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">
                        İletişim
                    </p>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <h2
                        id="contact-heading"
                        className="text-2xl md:text-4xl font-bold text-foreground mb-6"
                    >
                        Projenizi Konuşalım
                    </h2>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <p className="text-gray-600 mb-10 max-w-md mx-auto">
                        SEO veya GEO danışmanlığı için ücretsiz ön görüşme planlayalım.
                    </p>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:bahattinyaylagul@gmail.com"
                            className="px-8 py-3 bg-foreground text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors shadow-md"
                        >
                            bahattinyaylagul@gmail.com
                        </a>
                        <a
                            href="https://www.linkedin.com/in/bahattin-yaylagul/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border border-gray-300 text-foreground text-sm font-medium rounded-full hover:border-foreground transition-colors hover:bg-white"
                        >
                            LinkedIn
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
