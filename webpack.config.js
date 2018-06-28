const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

console.log('v: ' + require('./package.json').version)

module.exports = {
  entry: './src/install.js',
  output: {
    filename: 'vue-poor-editor.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: [path.join(__dirname, 'example'), path.join(__dirname, 'dist')],
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}