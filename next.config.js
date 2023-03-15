const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "false",
  openAnalyzer: false
})
module.exports = withBundleAnalyzer({
  target: 'serverless',
  reactStrictMode: false,
  trailingSlash: true,
  webpack: (config, { dev }) => {
    config.resolve.alias["@babel/runtime/helpers/esm/asyncToGenerator"] =
      "@babel/runtime/helpers/asyncToGenerator"
    return config
  },

  images: {
    domains: [
      `${process.env.S3_UPLOAD_BUCKET}.s3.amazonaws.com` || "localhost",
      `${process.env.S3_UPLOAD_BUCKET}.s3.${process.env.S3_UPLOAD_REGION}.amazonaws.com` ||
        "localhost"
    ]
  },
  experimental: {
    esmExternals: false,
    externalDir: true,
    concurrentFeatures: true,
    useSuspense: false
  },
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
