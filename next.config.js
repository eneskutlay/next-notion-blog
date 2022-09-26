/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains : ['images.unsplash.com', 's3.us-west-2.amazonaws.com'] // <== Domain name
  }
}



module.exports = nextConfig
