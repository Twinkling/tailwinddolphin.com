import Link from 'next/link'
import { languages } from '@/i18n/i18nConfig'
import { useTranslation } from '@/i18n/server'
import { PiTranslateFill } from "react-icons/pi";

export const ToggleLang = async ({ lang }: Partial<Record<string, string>>) => {
  const { t } = await useTranslation(lang, 'header')
  return (
    <button className='group relative'>
      <PiTranslateFill className='w-6 h-6'/>
      <ul className='hidden group-hover:block absolute right-0'>
        {languages.filter((l) => lang !== l).map((l, index) => {
          return (<li className='dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-400' key={l}>
            <Link className='w-10 border-solid rounded-sm border border-current inline-block' href={`/${l}`} >
              {l}
            </Link>
          </li>)
        })}
      </ul>
    </button>
  )
}