const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            colorBorder: '#55657e',
            colorBgContainer: '#55657e',
            colorPrimary: '#fff',
            colorText: '#6e81a0',
            colorPrimaryBorder: '#55657e',
            colorPrimaryHover: '',
            colorBgTextHover: '#6e81a0',
            controlOutline: 'rgba(5, 145, 255, 0.1)',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  configureWebpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    config.mode = process.env.VUE_APP_BUILD_MODE || config.mode;
    // 设置hash，方便后面做cdn
    if (config.mode === 'production') {
      config.output.filename = '[name].[contenthash:7].js';
      config.output.chunkFilename = '[name].[contenthash:7].js';
    }
  },
};
