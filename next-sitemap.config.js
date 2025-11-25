/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://exam-galaxy.vercel.app",
  // generateRobotsTxt: true,
  // sitemapSize: 7000, // optional
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
