import i18next from "i18next";
import i18nextBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18next
  .use(i18nextBackend)
  .use(initReactI18next)
  .init({
    lng: "fr",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `http://localhost:5173/lang/{{lng}}.json`,
    },
  });

export default i18next;
