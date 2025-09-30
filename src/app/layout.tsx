import type { Metadata } from "next";
import { Noto_Sans_Hebrew } from "next/font/google";
import "./globals.css";
// import { Analytics } from "@/components/analytics";

const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ["hebrew"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hebrew",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orly-consulting.com"),
  title: "אורלי – יועצת עסקית תודעתית ורו״ח | סדר פיננסי וצמיחה אמיתית",
  description:
    "רו״ח עם 20 שנות ניסיון, ייעוץ עסקי ותודעתי לבעלי עסקים ושירותים. סדר במספרים, תודעה שמקדמת תוצאות, ותוכנית צמיחה שפויה.",
  keywords:
    "יועצת עסקית, רואת חשבון, קואצ'ינג עסקי, ייעוץ פיננסי, תודעה עסקית, עסקים קטנים, מטפלים, יועצים",
  authors: [{ name: "אורלי" }],
  creator: "אורלי",
  publisher: "אורלי",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://orly-consulting.com",
    siteName: "Orly Advisory",
    title: "אורלי – יועצת עסקית תודעתית ורו״ח",
    description:
      "רו״ח עם 20 שנות ניסיון, ייעוץ עסקי ותודעתי לבעלי עסקים ושירותים. סדר במספרים, תודעה שמקדמת תוצאות, ותוכנית צמיחה שפויה.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: 'אורלי - יועצת עסקית תודעתית ורו"ח',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'אורלי - יועצת עסקית תודעתית ורו"ח',
    description: "השילוב הייחודי בין סדר פיננסי להשראה תודעתית",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://orly-consulting.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={notoSansHebrew.variable}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#14b8a6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${notoSansHebrew.className} antialiased`}>
        <a href="#main" className="sr-only focus:not-sr-only">
          דלג לתוכן
        </a>
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
