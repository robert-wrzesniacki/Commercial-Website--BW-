import i18n from "i18next";

import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
    //    "O nas":"About",
     //   "Inwestycje":"Investments",
     //   "Kredyty":"Credits",
     //   "Nasz Zespół":"Our team",
      //  "Zespół":"Our team",
      //  "Kontakt":"Contact",
      //  "About-description":"",
      //  "About-list-1":"",
      //  "About-list-2":"",
      //  "Investments-description-1":"",
      //  "Investments-description-2":"",
      //  "Investments-description-3":"",
      //  "Investments-description-4":"",
      //  "Pobierz podgląd licencji KNF.":"",
      //  "Współpracujemy z":"They trust us",
     //   "Credits-description":"",
     //   "Team-position-1":"",
     //   "Team-position-2":"",
     //   "Team-position-3":"",
      //  "O mnie":"More",
     //   "Formularz kontaktowy":"Contact form",
     //   "Contact-apt":"",
      //  "Imię (pole wymagane)":"Your name (required)",
      //  "adres e-mail (pole wymagane)":"E-mail adress (required)",
      //  "numer telefonu (pole wymagane)":"Phone number (required)",
      //  "Treść wiadomości (pole wymagane)":"Message (required)",
     //   "Wyślij":"Send",
      //  "Błąd. Nie udało się wysłać twojej wiadmości.":"",
      //  "Twoja wiadomość została wysłana. Dziękujemy!":"",
      }
    }
  },
  fallbackLng: "pl",
  debug: false,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;

