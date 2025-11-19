import type { Metadata } from "next";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NEXT_PUBLIC_BASE_PATH } from "@/next.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NASIT 2026 at BYU",
  description: "NASIT 2026 at BYU",
  metadataBase: new URL("https://example.edu"),
  icons: {
    icon: {
      url: NEXT_PUBLIC_BASE_PATH + "/images/favicon.ico",
      href: NEXT_PUBLIC_BASE_PATH + "/images/favicon.ico",
    }
  },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-white text-(--byu-royal) antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
