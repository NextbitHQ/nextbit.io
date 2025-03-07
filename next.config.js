/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {

        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
          {
            protocol: 'https',
            hostname: '/**',
            port: '',
            pathname: '/**',
            search: '',
          },
          {
            protocol: 'https',
            hostname: 'nextbit.com.bd',
            port: '',
            pathname: '/**',
            search: '',
          },
          {
            protocol: 'https',
            hostname: 'jeangalea.com',
            port: '',
            pathname: '/**',
            search: '',
          },
          {
            protocol: 'https',
            hostname: 'nextuipro.nyc3.cdn.digitaloceanspaces.com',
            port: '',
            pathname: '/**',
            search: '',
          },
          {
            protocol: 'https',
            hostname: 'www.kahootz.com',
            port: '',
            pathname: '/**',
            search: '',
          },
        ],
      },
};

module.exports = nextConfig;
