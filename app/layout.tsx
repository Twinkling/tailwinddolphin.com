import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";
import { metadata as meta, viewport as view } from '@/utils/seo';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = meta;
export const viewport: Viewport = view;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={inter.className + ' min-h-screen flex flex-col'}>
        <Header />
        <main className="max-w-4xl mx-auto flex-grow px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
