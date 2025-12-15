// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["media.giphy.com","via.placeholder.com"], // add domains if you load remote images
//   },
// }

// module.exports = nextConfig;
   

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.giphy.com",
      },
     
    ],
  },
};

module.exports = nextConfig;
