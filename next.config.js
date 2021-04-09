module.exports = {
    async redirects() {
      return [
        {
          source: '/product',
          destination: '/',
          permanent: true,
        },
      ]
    },
  }