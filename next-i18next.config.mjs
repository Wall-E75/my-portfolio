import { readFileSync } from 'fs';
import { join } from 'path';

const config = {
    i18n: {
        defaultLocale: 'fr',
        locales: ['fr', 'en'],
    },
    reloadOnPrerender: process.env.NODE_ENV === 'development',
    ns: ['common'],
    defaultNS: 'common',
    react: {
        useSuspense: false,
    },
};

export default config;