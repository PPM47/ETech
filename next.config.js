/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = require('./csp');
const redirects = require('./redirects');

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_SERVER_URL && process.env.NEXT_PUBLIC_SERVER_URL.replace(/https?:\/\//, ''),
        pathname: '/**',
      },
    ].filter(pattern => pattern.hostname),  // Filter out any undefined hostname
  },
  redirects,
  async headers() {
    const headers = [];

    // Prevent search engines from indexing the site if it is not live
    if (!process.env.NEXT_PUBLIC_IS_LIVE) {
      headers.push({
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
        source: '/:path*',
      });
    }

    // Set the `Content-Security-Policy` header as a security measure to prevent XSS attacks
    headers.push({
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: ContentSecurityPolicy,
        },
      ],
    });

    return headers;
  },
};

module.exports = nextConfig;
