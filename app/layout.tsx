import "@/styles/globals.css";
import {Metadata, Viewport } from "next";
import clsx from "clsx";
import { Geist, Inter } from "next/font/google";
import { Providers } from "./providers";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/heroui/Navbar";
import { siteConfig } from "@/config/site";
import { GoogleTagManager } from '@next/third-parties/google'

const GeistFont = Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  variable: "--font-geist",
  display: "swap",
});
const InterFont = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  variable: "--font-inter",
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    template:`%s | ${siteConfig.name}`,
    default: siteConfig.name,
  },
  description: siteConfig.description,
  icons: {
    icon: "/Favicon.svg",
  },
};



export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <GoogleTagManager gtmId="G-FEDEM01J1B" />

      <body
        className={clsx(
          "min-h-screen bg-background antialiased font-secondary text-sm text-gray-900",
          GeistFont.variable,
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
            enableColorScheme: true,
          }}
        >
          <div className="relative min-h-screen  border border-default-200 max-w-5xl mx-auto">
            <Navbar />

            <main className="px-4">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
