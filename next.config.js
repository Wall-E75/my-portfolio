/** @type {import('next').NextConfig} */
const nextConfig = {
  // Active le mode strict de React si nécessaire
  reactStrictMode: true,

  // Transpile les packages comme "antd"
  transpilePackages: ["antd"],

  // Ajoute une configuration Webpack personnalisée
  webpack: (config) => {
    config.cache = false; // Désactive le cache webpack
    config.module.rules.push({
      test: /\.m?js/, // Gère les fichiers .mjs et .js
      resolve: {
        fullySpecified: false, // Permet de résoudre les modules CommonJS
      },
    });
    return config;
  },
};

module.exports = nextConfig;