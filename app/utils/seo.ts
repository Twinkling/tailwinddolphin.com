import type { Metadata, Viewport } from "next";

function metadataGenerator(): Metadata {
  const name = 'TailwindDolphin';
  const title = ': Tailwind CSS Width,Height,Flex,Border,Grid,Colors,Components'
  const description = 'A tailwind multi-tool to convert and visualize your classes properties.';

  return {
    title: name + title,
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
        canonical:  'https://tailwinddolphin.com',
    },
    appleWebApp: {
      capable: true,
      title: name,
      statusBarStyle: 'black-translucent'
    },
    openGraph: {
      type: 'website',
      url: 'https://tailwinddolphin.com',
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

export const metadata: Metadata = metadataGenerator();

export const viewport: Viewport = viewportGenerator();
