module.exports = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://movieapi.bonnycode.com/:path*',
          },
        ]
      },
  };