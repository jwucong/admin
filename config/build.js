const ora = require('ora');
const chalk = require('chalk');
const webpack = require('webpack')
const webpackBundleAnalyzer = require('webpack-bundle-analyzer')
const productionConfig = require('./webpack.config.prod')
const analysis = (process.argv[2] || '').toLocaleLowerCase() === 'analysis'
const tips = analysis ? 'Starting the analytics server...' : 'Building for production...'
const spinner = ora(`${chalk.cyan(tips)}\n`);

if (analysis) {
  productionConfig.plugins.push(new webpackBundleAnalyzer.BundleAnalyzerPlugin())
}

process.env.NODE_ENV = 'production'
spinner.start()

webpack(productionConfig, (err, stats) => {
  if (err) {
    spinner.fail(`${chalk.red('Building fail!')}`)
    throw err
  }
  if(analysis) {
    return spinner.stop()
  }
  console.log('')
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')
  console.log('')
  spinner.succeed(`${chalk.green('Building Successfully!')}`)
  spinner.info(`${chalk.blue('All resources have been saved to the dist directory.')}`)
})


