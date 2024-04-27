import type { Metadata, Viewport } from "next";
import { useTranslation } from '@/i18n/server';

function metadataGenerator({ title, description }: Record<string, string>): Metadata {
  const name = 'TailwindDolphin';

  return {
    metadataBase: new URL('https://tailwinddolphin.com'),
    title: `${name}: ${title}`,
    description,
    icons: [{
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      url: '/icons/favicon-192x192.png'
    }, {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '180x180',
      url: '/icons/favicon-180x180.png'
    }],
    alternates: {
        canonical:  './',
    },
    appleWebApp: {
      capable: true,
      title: name,
      statusBarStyle: 'black-translucent'
    },
    openGraph: {
      type: 'website',
      url: './',
      title: name,
      description,
      images: '/og-image.png',
    },
    twitter: {
      card: 'summary',
      site: 'https://tailwinddolphin.com',
      title: name,
      creator: 'huanxiong',
      description,
      images: '/og-image.png',
    },
    applicationName: name,
    formatDetection: {
      telephone: false,
    },
  }
}

function viewportGenerator(): Viewport {
  return {
    initialScale: 1,
    viewportFit: 'cover',
    userScalable: false,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#e5e7eb' },
        { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
    ]
  }
}

export const viewport: Viewport = viewportGenerator();

type Props = {
  lang: string;
  ns?: string;
}

export async function generateMetadata({ lang, ns = 'common' }: Props): Promise<Metadata> {
  // eslint-disable-next-line
  const { t } = await useTranslation(lang, ns);
  const title = t('title', ns);
  const description = t('description', ns);
  const metadata = metadataGenerator({ title, description });
  return {
    ...metadata,
    title,
    description,
  };
};
