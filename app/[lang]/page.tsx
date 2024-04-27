import type { Metadata } from "next";
import Link from "next/link"
import Image from "next/image";
import logo from '@/components/Logo/logo.svg';
import { useTranslation } from '@/i18n/server';
import { generateMetadata as gm } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Record<string, string> }): Promise<Metadata> {
  const { lang } = params;
  return await gm({ lang, ns: 'home' })
}


export default async function Home({ params: { lang } }: { params: { lang: string }}) {
  const { t } = await useTranslation(lang, 'home');
  const links = [{ href: '/font', label: 'Font' }, { href: '/layout', label: 'Layout' }, { href: '/position', label: 'Position' }, {href: '/grid', label: 'Grid'}, {href: '/image', label: 'Image'}, {href: '/colors', label: 'Colors'}];
  return (<>
    <h1 className="sm:text-4xl text-3xl text-center flex justify-center items-center my-2">
      <Image src={logo} alt="TailwindDolphin Logo" className="w-10 h-10 sm:w-16 sm:h-16" />
      <span className="bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 text-transparent">TailwindDolphin</span>
    </h1>
    <div>{t('description')}</div>
    <nav className="text-2xl flex flex-wrap justify-center">
      {links.map(link => <Link className="mr-2 hover:text-blue-500" href={`/${lang}${link.href}`} key={link.href}>{link.label}</Link>)}
    </nav>
  </>)
}
