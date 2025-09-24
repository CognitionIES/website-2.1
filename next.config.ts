/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "" : "",
  assetPrefix: isProd ? "" : "",

  images: {
    domains: [
      "images.unsplash.com",
      "upload.wikimedia.org",
      "plus.unsplash.com",
    ],
    unoptimized: true,
  },

  eslint: {
    // ❌ Skip linting during build (use CI/local separately)
    ignoreDuringBuilds: true,
  },

  typescript: {
    // ❌ Skip type-checking during build
    ignoreBuildErrors: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos/",
          outputPath: "static/videos/",
          name: "[name].[hash].[ext]",
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
