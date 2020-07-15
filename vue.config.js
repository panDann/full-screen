
const path = (path) => require('path').resolve(__dirname, path)

module.exports = {

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(styl)$/,
          use: [
            'stylus-loader',
            {
              loader: 'style-resources-loader',
              options: {
                patterns: [
                  path('src/styles/variables.styl')
                ]
              }
            }
          ]
        }
      ]
    },
    resolve: {
      alias: {
        '@src': path('src')
      }
    }
  },
  chainWebpack: config => {
    const types = ['vue']
    types.forEach(type =>
      addStyleResource(config.module.rule('stylus').oneOf(type))
    )
  }
}

function addStyleResource (rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path('src/styles/variables.styl')] // 后面的路径改成你自己放公共stylus变量的路径
    })
}
