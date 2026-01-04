/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Crucial: generates fully static HTML files
  basePath: "/mahmoud-abdelaziz", // Replace with your actual repo name (e.g., "/mahmoud-portfolio")
  assetPrefix: "/mahmoud-abdelaziz/", // Fixes links to CSS/JS/images
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js Image optimization
  },
  trailingSlash: true, // Helps with routing on GitHub Pages
};

export default nextConfig;