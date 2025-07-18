module.exports = {
    i18n: {
        defaultLocale: 'fr',
        locales: ['fr', 'en'],
    },
    reloadOnPrerender: process.env.NODE_ENV === 'development', // Recharge les traductions lors du prerendering en développement
    // Configuration des namespaces
    ns: ['common'], // Espaces de noms utilisés pour les traductions
    defaultNS: 'common', // Espace de noms par défaut
    // Configuration React
    react: {
        useSuspense: false, // Désactive l'utilisation de suspense pour éviter les problèmes de chargement
    },

};