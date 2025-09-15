import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rootedintradition.org"),
  title: {
    default: "Rooted In Tradition",
    template: "%s | Rooted In Tradition",
  },
  description:
    "Structured sober living for Native and Indigenous communities — healing mind, body, and spirit through tradition, community, and clinical support.",
  keywords: [
    "Rooted In Tradition",
    "Native",
    "Indigenous",
    "sober living",
    "recovery",
    "housing",
    "community",
  ],
  authors: [{ name: "Set Free Digital Disciples", url: "https://setfreedigitaldisciples.com" }],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Rooted In Tradition",
    title: "Rooted In Tradition",
    description:
      "Structured sober living for Native and Indigenous communities — healing mind, body, and spirit.",
    images: [
      {
        url: "/rooted-in-tradition.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rooted In Tradition",
    description:
      "Structured sober living for Native and Indigenous communities — healing mind, body, and spirit.",
    images: ["/rooted-in-tradition.png"],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "any" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#4a3b2a" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="starfield" aria-hidden>
          <div className="layer layer-1" />
          <div className="layer layer-2" />
          <div className="layer layer-3" />
        </div>
        <header className="navbar">
          <div className="navbar-inner">
            <span />
            <nav className="nav-links" aria-label="Primary">
              <a className="island-btn" href="#mission">Mission</a>
              <a className="island-btn" href="#vision">Vision</a>
              <a className="island-btn" href="#contact">Contact</a>
            </nav>
            <label htmlFor="nav-check" className="nav-toggle island-btn" aria-label="Open menu">☰</label>
          </div>
          <input id="nav-check" type="checkbox" />
          <div className="nav-menu">
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              <a className="island-btn" href="#mission">Mission</a>
              <a className="island-btn" href="#vision">Vision</a>
              <a className="island-btn" href="#contact">Contact</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs text-[color:var(--earth-sand)]/80">© {new Date().getFullYear()} Rooted In Tradition</p>
            <a
              className="flex items-center gap-3 text-sm text-[color:var(--earth-sand)]/90 hover:underline"
              href="https://setfreedigitaldisciples.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Designed by Set Free Digital Disciples"
            >
              <Image src="/set-free-digital-disciples.png" width={28} height={28} alt="Set Free Digital Disciples" />
              <span>Designed by Set Free Digital Disciples</span>
            </a>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
