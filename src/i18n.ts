import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enus from "./translation/en/global_en.json";
import ptbr from "./translation/pt/global_pt.json";

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: enus,
      },
      pt: {
        translation: ptbr,
      },
    },
  });

export { i18n };
