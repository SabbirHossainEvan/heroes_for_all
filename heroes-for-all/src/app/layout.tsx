import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://heroesforall.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Heroes For All — Warriors of Change",
    template: "%s | Heroes For All",
  },
  description:
    "Heroes For All is a youth-focused nonprofit building conscious, purposeful global citizens through education, community engagement, and cross-cultural collaboration in Bangladesh and beyond.",
  keywords: [
    "Heroes For All",
    "nonprofit",
    "youth empowerment",
    "Bangladesh",
    "education",
    "community upliftment",
    "Camp Abilities",
    "youth leadership",
    "volunteer",
    "mentorship",
  ],
  authors: [{ name: "Heroes For All" }],
  creator: "Heroes For All",
  publisher: "Heroes For All",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png", sizes: "64x64" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Heroes For All",
    title: "Heroes For All — Warriors of Change",
    description:
      "A youth-focused nonprofit building conscious, purposeful global citizens through education, community engagement, and cross-cultural collaboration.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Heroes For All — Warriors of Change",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heroes For All — Warriors of Change",
    description:
      "A youth-focused nonprofit building conscious, purposeful global citizens.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "nonprofit",
};

export const viewport: Viewport = {
  themeColor: "#173F35",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${manrope.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
