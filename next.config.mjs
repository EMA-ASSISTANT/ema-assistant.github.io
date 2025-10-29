/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ⬅️ clave para static export (Next.js moderno)
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
