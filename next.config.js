/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats:["image/avif","image/webp"]
  },
  redirects:async () => {
    return [
      {
        source: '/:path*',
        has: [
          { type: 'host', value: 'exam-galaxy.vercel.app/' }
        ],
        destination: 'https://books.examgalaxy.com/:path*',
        permanent: true,
      },
    ]
  }
};

export default nextConfig;

