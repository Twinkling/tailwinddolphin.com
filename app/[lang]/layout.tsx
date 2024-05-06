import type { Viewport } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter } from "next/font/google";
import { dir } from 'i18next';
import "./globals.css";
import { Header, Footer } from "@/components";
import { viewport as view } from '@/utils/seo';
import { languages } from '@/i18n/i18nConfig';

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = view;

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Record<string, string>;
}>) {
  const { lang } = params;
  return (
    <html lang={lang} dir={dir(lang)}>
      <body className={inter.className + ' min-h-screen flex flex-col'}>
        <Header lang={lang} />
        <main className="max-w-4xl mx-auto flex-grow px-4">
          {children}
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GAID as string} />
    </html>
  );
}
