/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for highlighting potential problems
  // Enable experimental features if needed, e.g., server actions
  experimental: {
    // serverActions: true, // Server Actions are stable in Next 14+, but keep if issues arise
  },
  // Add any other configurations here, like images domains if using external images
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'your-image-provider.com',
  //       port: '',
  //       pathname: '/images/**',
  //     },
  //   ],
  // },
};

export default nextConfig;
