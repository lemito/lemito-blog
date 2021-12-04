import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import backend from 'i18next-xhr-backend';

const userLanguage = window.navigator.language;

i18n
  .use(backend)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('language') || userLanguage || 'ru',
    fallbackLng: 'ru',

    debug: false,
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
      useSuspense: false,
    },
    backend: {
      loadPath: '../public/locales/{{ns}}/{{lng}}.json', //p/locales/{{ns}}/{{lng}}.json
    },
  });

export default i18n;