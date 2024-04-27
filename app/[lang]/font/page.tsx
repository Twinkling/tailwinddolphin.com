import type { Metadata } from 'next';
import { FontHelper } from '@/components';

import { generateMetadata as gm } from '@/utils/seo';
import { useTranslation } from '@/i18n/server';

export async function generateMetadata({ params }: { params: Record<string, string> }): Promise<Metadata> {
  const { lang } = params;
  return await gm({ lang, ns: 'font' })
}

export default async function FontPage({ params: { lang }}: { params: Record<string, string> }) {
    const { t } = await useTranslation(lang, 'font');
    return (
        <>
            <h1 className="sm:text-4xl text-3xl text-center flex justify-center items-center my-2"><span>{t('h1')}</span></h1>
            <FontHelper />
        </>
    );
}