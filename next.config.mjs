/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  basePath: '/Pannonian',
  assetPrefix: '/Pannonian',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/Pannonian',
  },
}

export default nextConfig
