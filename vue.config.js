const path = require('path')
const configs = require('./md')

module.exports = {
  lintOnSave: false,
  assetsDir: 'static',
  publicPath: './',
  productionSourceMap: false,
  chainWebpack: config => {
    config.entryPoints
      .get('app')
      .clear()
      .add(path.resolve(__dirname, 'example/main.js'))
    config.resolve.alias
      .delete('@')
      .set('@', path.resolve(__dirname, 'example'))
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
        ...configs
      })
  },
  css: {
    extract: {
      filename: 'css/[name].css?v=' + '1.0.1'
    }
  },
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       prependData: `@import "./src/styles/aa.scss";`
  //     }
  //   }
  // },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
