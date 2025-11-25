/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://exam-galaxy.vercel.app",
  generateRobotsTxt: true,
  // sitemapSize: 7000, // optional
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  additionalSitemaps:[
    "https://exam-galaxy.vercel.app/sitemap.xml"
  ]
};
