const CopyPlugin = require('copy-webpack-plugin')

module.exports = {  
  configureWebpack: {
    entry: ['babel-polyfill', './src/main.js'],
    plugins: [
      new CopyPlugin([{
        from: 'CNAME',
        to: 'CNAME',
        toType: 'file',
      }])
    ],
  },

  publicPath: '',
  outputDir: './docs',
  assetsDir: 'assets',
  productionSourceMap: false,
  runtimeCompiler: undefined,
  parallel: undefined,
  css: undefined,

  pwa: {
    name: 'IPVue',
    msTileColor: '#4DBA87',
    appleMobileWebAppStatusBarStyle: 'black-translucent'
  }
}
