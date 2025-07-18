/** @type {import('next').NextConfig} */
const nextConfig = {
  // Active le mode strict de React si nécessaire
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;