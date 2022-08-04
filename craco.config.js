const path = require('path');

module.exports = {
  eslint: {
    enable: false,
  },
  webpack: {
    alias: {
      '@config': path.resolve(__dirname, './src/config.js'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@solutions': path.resolve(__dirname, './src/pages/solutions'),
      '@useCases': path.resolve(__dirname, './src/pages/useCases'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@theme': path.resolve(__dirname, './src/theme'),
      '@src': path.resolve(__dirname, './src'),
    },
  },
};
