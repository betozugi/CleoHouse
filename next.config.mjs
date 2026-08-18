/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'file.hstatic.net',
      },
      {
        protocol: 'https',
        hostname: 'theme.hstatic.net',
      }
    ],
  },
};

export default nextConfig;
