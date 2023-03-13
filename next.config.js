const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "false",
  openAnalyzer: false
})
const path = require("path")
module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  trailingSlash: true,
  webpack: (config, { dev }) => {
    config.resolve.alias["@babel/runtime/helpers/esm/asyncToGenerator"] =
      "@babel/runtime/helpers/asyncToGenerator"
    return config
  },
  // allow external links
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: process.env.NEXT_PUBLIC_FRONTEND_URL || "http://88.208.199.170:3000"
  //     },
  //     {
  //       source: "/api/:path*",
  //       destination: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/:path*`
  //     },
  //     {
  //       source: "/docs",
  //       destination: "/docs/index.html"
  //     }
  //   ]
  // },
  // let show iframes links site
  // async headers() {
  //   return [
  //     {
  //       source: "/:path*",
  //       headers: [
  //         {
  //           key: "X-Frame-Options",
  //           value: "SAMEORIGIN"
  //         }
  //       ]
  //     }
  //   ]
  // },

  images: {
    domains: [
      `${process.env.S3_UPLOAD_BUCKET}.s3.amazonaws.com` || "localhost",
      `${process.env.S3_UPLOAD_BUCKET}.s3.${process.env.S3_UPLOAD_REGION}.amazonaws.com` ||
        "localhost"
    ]
  },
  experimental: {
    externalDir: true,
    concurrentFeatures: true,
    useSuspense: false

    // urlImports: [
    //   "https://www.google.com/maps",
    //   "http://friendlygig.com/",
    //   "https://fonts.googleapis.com",
    //   "http://localhost:3001/"
    // ]
  },
  // images: {
  //   domains: ["", "localhost"]
  // },
  basePath: process.env.RELEASE_CHANNEL
    ? !process.env.RELEASE_CHANNEL || process.env.RELEASE_CHANNEL === "latest"
      ? "/"
      : "/" + process.env.RELEASE_CHANNEL
    : undefined,

  productionBrowserSourceMaps: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
    env: {
      NEXT_PUBLIC_FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3001"
    }
  }
})
