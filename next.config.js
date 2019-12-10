// next.config.js
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  optimizeImages: false,
  assetPrefix: '/app',
});
