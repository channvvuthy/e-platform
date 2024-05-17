const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
        fs: false,
      },
      alias: {
        '@components': path.resolve(__dirname, 'src/components')
      }
    }
  },
  pluginOptions: {
    electronBuilder: {
      preload: 'src/preload.js',
    },
  },
});
