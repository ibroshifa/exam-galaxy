/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
    
  },
  output: 'export',  // Enables static export
  trailingSlash: true,  // Helps with Cloudflare routing
  images: {
    unoptimized: true,
  }, 
}

// Cloudflare adapter for Pages
import { extendConfig } from '@cloudflare/next-on-pages';

module.exports = extendConfig(nextConfig);
