/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/products/worknepal",
        destination: "/work-nepal",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
