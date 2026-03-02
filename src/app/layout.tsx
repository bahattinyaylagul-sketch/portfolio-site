/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bahattinyaylagul.com"),
  title: "Bahattin Yaylagül | SEO & GEO Danışmanı",
  description: "SEO ve GEO (Generative Engine Optimization) danışmanlığı. Arama motorları ve yapay zeka sistemleri için içerik optimizasyonu.",
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
  verification: {
    google: "-jYOZPq9DIakkB-vYBm1rm7iPEmMt1FX5IqkvVY-M90",
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=3', sizes: 'any' },
      { url: '/favicon-16x16.png?v=3', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png?v=3', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png?v=3', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico?v=3',
    apple: [
      { url: '/apple-touch-icon.png?v=3', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/favicon-192x192.png?v=3',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        {children}

        {/* Google Analytics (GA4) - G-SFFCG8SZYN */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SFFCG8SZYN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-SFFCG8SZYN');
          `}
        </Script>
      </body>
    </html>
  );
}
