import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { getOptions, fallbackLang } from './i18nConfig'

const initI18next = async (lang: string, ns?: string) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
    .init(getOptions(lang, ns))
  return i18nInstance
}

export async function useTranslation(lang: string = fallbackLang, ns?: string, options: Record<string, any> = {}) {
  const i18nextInstance = await initI18next(lang, ns)
  return {
    t: i18nextInstance.getFixedT(lang, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
    i18n: i18nextInstance,
    resources: i18nextInstance.services.resourceStore.data,
  }
}