/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // redeploy
  distDir: "out",// ← This forces output to /out instead of .next
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats:["image/avif","image/webp"]
  },
};

export default nextConfig;