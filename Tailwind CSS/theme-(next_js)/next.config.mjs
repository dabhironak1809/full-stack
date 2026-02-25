/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  reactStrictMode: true,

  // images: {
  //   remotePatterns: [      
  //     {
  //       protocol: "https",
  //       hostname: "softwingz.com",
  //     },  
  //     // {
  //     //   protocol: "https",
  //     //   hostname: "softwingz.com",
  //     // },

  //   ],
  // },
  images: {
    // maximumResponseBody:5,
    remotePatterns: [
      // { protocol: "https", hostname: "softwingz.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
