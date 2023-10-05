/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
    ],

    domains: ["www.pngfind.com", "img.freepik.com"],
  },
  transpilePackages: ["three"],
};

module.exports = nextConfig;
