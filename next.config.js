/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async rewrites() {
    return [
      {
        source: "/rss",
        destination: "/api/rss",
      },
    ];
  },
};

module.exports = nextConfig;
