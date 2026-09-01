import type { Metadata } from "next";
import { Syne, IBM_Plex_Sans } from "next/font/google";
import { site } from "@/content/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteMain } from "@/components/SiteMain";
import { Footer } from "@/components/Footer";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-syne",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000",
  ),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: site.name,
    description: site.tagline,
    type: "website",
    images: [site.hero],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${ibmPlexSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <SiteHeader />
        <SiteMain>{children}</SiteMain>
        <Footer />
      </body>
    </html>
  );
}
