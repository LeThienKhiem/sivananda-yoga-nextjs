import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FirebaseAnalyticsProvider } from "@/components/FirebaseAnalyticsProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://sivanandayogavietnam.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sivananda Yoga Vietnam | Focus, rejuvenate, recharge, relax",
  alternates: {
    canonical: "/",
    languages: {
      "en": "/",
      "vi": "/vi/",
      "x-default": "/",
    },
  },
  robots: {
    "max-image-preview": "large",
  },
  openGraph: {
    title: "Sivananda Yoga Vietnam | Focus, rejuvenate, recharge, relax",
    url: "/",
    siteName: "Sivananda Yoga Vietnam",
    locale: "en",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/wp-content/uploads/2018/02/cropped-favicon-32x32.jpg",
        sizes: "32x32",
      },
      {
        url: "/wp-content/uploads/2018/02/cropped-favicon-192x192.jpg",
        sizes: "192x192",
      },
    ],
    apple:
      "/wp-content/uploads/2018/02/cropped-favicon-180x180.jpg",
  },
  other: {
    "msapplication-TileImage":
      "https://sivanandayogavietnam.org/wp-content/uploads/2018/02/cropped-favicon-270x270.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <FirebaseAnalyticsProvider />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
