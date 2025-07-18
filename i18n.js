import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'fr',
    fallbackLng: 'fr',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      fr: {
        common: {
          welcome: "Bienvenue sur mon portfolio ! Je suis un développeur passionné par la création d'applications web modernes."
        }
      },
      en: {
        common: {
          welcome: "Welcome to my portfolio! I'm a developer passionate about creating modern web applications."
        }
      }
    }
  });

export default i18n;