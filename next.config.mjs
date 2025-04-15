// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// if there is video/images error open this:
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Handle video files (this part stays the same)
    config.module.rules.push({
      test: /\.(mp4|mov|webm)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'static/videos/[name].[hash].[ext]', // Customize path if needed
          },
        },
      ],
    });

    // Remove custom handling for images. Next.js already optimizes images by default.
    // config.module.rules.push({
    //   test: /\.(jpeg|jpg|png|gif|svg)$/i,
    //   use: [
    //     {
    //       loader: 'file-loader',
    //       options: {
    //         name: 'static/images/[name].[hash].[ext]',
    //       },
    //     },
    //   ],
    // });

    return config;
  },
//   images: {
//     domains: ['localhost'], // Add any external domains here if required
//     formats: ['image/avif', 'image/webp'],
//   },
};

export default nextConfig;
