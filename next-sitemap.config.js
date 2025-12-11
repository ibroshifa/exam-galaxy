/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://books.examgalaxy.com/",
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
