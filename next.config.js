/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REACT_APP_API_ROUTE: process.env.REACT_APP_API_ROUTE,
    REACT_APP_DOMAIN_NAME: process.env.REACT_APP_DOMAIN_NAME,
  },
}

module.exports = nextConfig
