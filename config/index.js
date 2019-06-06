const os = require('os')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const AnalyzerPlugin = require('webpack-bundle-analyzer')
const developmentConfig = require('./webpack.config.dev')
const productionConfig = require('./webpack.config.prod')

const commandLineArgs = process.argv.slice(2).map(item => item.toLocaleLowerCase())
const env = commandLineArgs[0] || 'development'
const isProduction = env === 'production'
const analyzer = commandLineArgs.indexOf('analyzer') !== -1

const getLocalIP = () => {
  const network = os.networkInterfaces();
  for (const key in network) {
    const interfaces = network[key];
    for (let i = 0; i < interfaces.length; i++) {
      const face = interfaces[i];
      if (face.family === 'IPv4' && face.address !== '127.0.0.1' && !face.internal) {
        return face.address;
      }
    }
  }
  return 'localhost'
}

const runDevServer = () => {
  const devServerConfig = {
    contentBase: developmentConfig.output.path,
    publicPath: developmentConfig.output.publicPath,
    host: getLocalIP(),
    port: 8080,
    proxy: {},
    compress: false,
    clientLogLevel: 'error',
    stats: 'errors-only',
    historyApiFallback: {
      disableDotRule: true
    },
    hot: true,
    inline: true,
    open: true,
    quiet: true,
    overlay: {
      errors: true,
      warnings: false
    }
  }
  const host = devServerConfig.host
  const port = devServerConfig.port
  const compiler = webpack(developmentConfig)
  const server = new WebpackDevServer(compiler, devServerConfig);
  server.listen(port, host)
}

const runBuild = () => {
  console.log('building...')
  if (analyzer) {
    productionConfig.plugins.push(new AnalyzerPlugin.BundleAnalyzerPlugin())
  }
  webpack(productionConfig, err => {
    if (err) {
      throw err
    }
    console.log('build successfully')
  })
}



process.env.NODE_ENV = env
isProduction ? runBuild() : runDevServer();


