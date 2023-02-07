/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CLOUDINARY_NAME: "dvxrxaens",
    CLOUDINARY_API_KEY: "311732954488955",
  },
  experimental: {
    externalDir: true,
  },
  // Potential new config flag:
  disableExperimentalFeaturesWarning: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "sipbitego.com",
      "www.foodiecrush.com",
      "res.cloudinary.com",
    ],
  },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
  //     config.resolve = {
  //       ...config.resolve,
  //       fallback: {
  //         ...config.resolve.fallback,
  //         fs: false,
  //       },
  //     };
  //   }

  //   return config;
  // },
};

module.exports = nextConfig;
