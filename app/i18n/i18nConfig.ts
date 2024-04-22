export const fallbackLang = 'en';

export const languages = [fallbackLang, 'ja'];

export const defaultNS = 'translation';

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
