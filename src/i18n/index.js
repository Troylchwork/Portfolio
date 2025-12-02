import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import en from "./locales/en";
import zh from "./locales/zh";

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: { translation: en },
            zh: { translation: zh },
            "zh-HK": { translation: zh },
            "zh-TW": { translation: zh },
        },
        fallbackLng: "en",
        debug: true,
        ns: ["translation"],
        defaultNs: "translation",
    });

export default i18n;
