import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/site-config";
import { cn } from "@/lib/utils";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.links.deploymentUrl),
  title: {
    default: "SOARgrowth - Stop Working Harder, Start Growing Faster",
    template: `%s | SOARgrowth`,
  },
  description: "Guaranteed growth for middle-market businesses. Our proven SOAR methodology helps 300+ companies increase revenue 37% in 90 days. Book your free consultation.",
  keywords: [
    "business consulting",
    "middle market",
    "SOAR methodology", 
    "revenue growth",
    "business transformation",
    "strategic planning",
    "operational excellence",
    "team alignment",
    "Larry Goddard",
    "Laurence Franklin"
  ],
  authors: [
    {
      name: "SOARgrowth",
      url: siteConfig.links.deploymentUrl,
    },
  ],
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.links.deploymentUrl,
    title: "SOARgrowth - Guaranteed Growth in 90 Days",
    description: "Join 300+ successful middle-market businesses. Free growth consultation - limited availability.",
    siteName: "SOARgrowth",
    images: [
      {
        url: siteConfig.openGraph.imageUrl,
        width: siteConfig.openGraph.imageWidth,
        height: siteConfig.openGraph.imageHeight,
        alt: "SOARgrowth - Business Growth Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOARgrowth - Stop Working Harder, Start Growing Faster",
    description: "Guaranteed growth for middle-market businesses. Free consultation available.",
    images: [siteConfig.twitter.imageUrl],
    creator: siteConfig.twitter.creator,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#175CD3" />
      </head>
      <body className={cn("font-sans antialiased", inter.className)}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
