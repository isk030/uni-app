/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    productionBrowserSourceMaps: true,
    env: {
        DL_API_BASE_URL: process.env.DL_API_BASE_URL,
    },
    i18n: {
        locales: ['en-US', 'de-DE'],
        defaultLocale: 'de-DE',
    },
};

module.exports = nextConfig;
