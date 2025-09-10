import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "KTS Kavin - BJP Youth Leader & Political Leader Tamil Nadu",
    template: "%s | KTS Kavin BJP Leader"
  },
  description: "KTS Kavin is a dedicated BJP Youth Wing leader focused on youth empowerment, education, entrepreneurship, and governance reforms in Tamil Nadu. Join the movement for positive change.",
  keywords: ["KTS Kavin", "BJP", "Tamil Nadu", "Youth Leader", "Politics", "Community Development", "Perundurai", "BJP Youth Wing"],
  authors: [{ name: "KTS Kavin" }],
  creator: "KTS Kavin",
  publisher: "KTS Kavin Political Office",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kts-kavin.vercel.app",
    siteName: "KTS Kavin - BJP Leader",
    title: "KTS Kavin - BJP Youth Leader & Political Leader Tamil Nadu",
    description: "Empowering Youth. Transforming Communities. Building a Better Tomorrow. Join KTS Kavin's mission for positive change in Tamil Nadu.",
    images: [
      {
        url: "/Hero_img.jpeg",
        width: 1200,
        height: 630,
        alt: "KTS Kavin - BJP Youth Leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KTS Kavin - BJP Youth Leader Tamil Nadu",
    description: "Empowering Youth. Transforming Communities. Join the movement for positive change.",
    creator: "@bjp_KTS_Kavin",
    images: ["/Hero_img.jpeg"],
  },
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
