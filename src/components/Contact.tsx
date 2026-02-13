
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
                            href="https://wa.me/905346019770"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border border-gray-300 text-foreground text-sm font-medium rounded-full hover:border-foreground transition-colors hover:bg-white flex items-center gap-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            WhatsApp
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
