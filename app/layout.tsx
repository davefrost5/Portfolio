import type { Metadata } from "next";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import { site } from "@/content/content";
import { Dock } from "@/components/Dock";
import { CommandMenu } from "@/components/CommandMenu";
import { Footer } from "@/components/Footer";
import "./globals.css";

const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument", display: "swap" });
const sans = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
  title: { default: `${site.name} — CTO at Discover NIL`, template: `%s — ${site.name}` },
  description: "David Frost builds and ships products with customers — CTO at Discover NIL.",
  openGraph: { title: site.name, description: site.tagline, type: "website", images: [site.hero] },
};

const themeScript = `try{if(localStorage.theme==='dark')document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <main className="flex-1 pb-28">{children}</main>
        <Footer />
        <Dock />
        <CommandMenu />
      </body>
    </html>
  );
}
