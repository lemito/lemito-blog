import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-locize-backend';
import LastUsed from 'locize-lastused';
import { locizePlugin } from 'locize';

const locizeOptions = {
  projectId: '5537c6a0-3701-43dc-80dc-d4213d5fcbfe',
  apiKey: '71553f79-9d9c-410c-936d-8381c6431d29', 
  referenceLng: 'ru',
};
i18n
  .use(Backend)
  .use(LastUsed)
  .use(locizePlugin)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: true,
    saveMissing: true,
    interpolation: {
      escapeValue: false, 
    },
    backend: locizeOptions,
    locizeLastUsed: locizeOptions,
    react: {
      bindI18n: 'languageChanged editorSaved',
    },
  });
export default i18n;