const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const AnalyzerPlugin = require('webpack-bundle-analyzer')
const developmentConfig = require('./webpack.config.dev')
const productionConfig = require('./webpack.config.prod')

console.log('process: ')
// console.log(process)
const args = process.argv.slice(2)
const env = args[0] || 'development'
const isProduction = env === 'production'
const analyzer = args.indexOf('analyzer') !== -1
console.log(args)
if(isProduction && analyzer) {
  productionConfig.plugins.unshift(new AnalyzerPlugin.BundleAnalyzerPlugin())
}
const config = isProduction ? productionConfig : developmentConfig;

const compiler = webpack(config)

if(isProduction) {

}


function runDevServer() {

}

function runBuild() {

}



// module.exports = devConfig
