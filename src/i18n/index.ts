import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import es from './locales/es'
import en from './locales/en'

const resources = {
  eng: {
    translation: { ...en },
  },
  esp: {
    translation: { ...es },
  },
};

i18next
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'esp',
    debug: true,
    lng: 'esp',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources
  });


  export { i18next }