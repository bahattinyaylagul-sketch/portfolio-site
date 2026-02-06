import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bahattinyaylagul.com"),
  title: "Bahattin Yaylagül | SEO & GEO Danışmanı",
  description: "SEO ve GEO (Generative Engine Optimization) danışmanlığı. Arama motorları ve yapay zeka sistemleri için içerik optimizasyonu.",
  keywords: ["SEO", "GEO", "Generative Engine Optimization", "içerik optimizasyonu", "dijital pazarlama"],
  authors: [{ name: "Bahattin Yaylagül" }],
  openGraph: {
    title: "Bahattin Yaylagül | SEO & GEO Danışmanı",
    description: "SEO ve GEO danışmanlığı ile dijital görünürlüğünüzü artırın",
    type: "website",
    locale: "tr_TR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        <noscript>
          <style>{`
            [style*="opacity: 0"], [style*="opacity:0"] { 
              opacity: 1 !important; 
              transform: none !important;
              pointer-events: auto !important;
            }
          `}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
