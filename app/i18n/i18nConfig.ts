export const fallbackLang = 'en';
export const languages = [fallbackLang, 'ja'];
export type Languages = typeof languages[number];
export const defaultNS = 'common';
export const cookieName = 'i18next-lang';

export function getOptions (lang = fallbackLang, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLang,
    lng: lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}

export const i18nConfig = {
  locales: languages,
  defaultLocale: fallbackLang,
};
