const CopyPlugin = require('copy-webpack-plugin')

module.exports = {  
  configureWebpack: {
    entry: ['babel-polyfill', './src/main.js'],
    plugins: [
      new CopyPlugin([{
        /**
         * This is needed for GitHub Pages to work correctly it copies
         * the CNAME file (at the root of project) & necessry images
         * into the /docs directory after a rebuild.
         */
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