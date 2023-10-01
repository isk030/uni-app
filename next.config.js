/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    i18n: {
        locales: ['en-US', 'de-DE'],
        defaultLocale: 'de-DE',
    },
};

module.exports = nextConfig;
