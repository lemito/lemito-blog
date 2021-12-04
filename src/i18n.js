"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var i18next_1 = __importDefault(require("i18next"));
var react_i18next_1 = require("react-i18next");
var i18next_xhr_backend_1 = __importDefault(require("i18next-xhr-backend"));
var userLanguage = window.navigator.language;
i18next_1["default"]
    .use(i18next_xhr_backend_1["default"])
    .use(react_i18next_1.initReactI18next)
    .init({
    lng: localStorage.getItem('language') || userLanguage || 'ru',
    fallbackLng: 'ru',
    debug: false,
    keySeparator: '.',
    interpolation: {
        escapeValue: false
    },
    react: {
        wait: true,
        useSuspense: false
    },
    backend: {
        loadPath: '../public/locales/{{ns}}/{{lng}}.json'
    }
});
exports["default"] = i18next_1["default"];
