var path = require('path')
var webpack = require("webpack")
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// require('../bower_components/weui/dist/style/weui.min.css');


var config = {
  entry: [
    'webpack/hot/dev-server',
    path.join(__dirname, 'src', 'main')
  ],
  output: {
    path: path.join(__dirname,'static','js'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {test: /\.css$/, loader: "style!css"},

      {test: /\.(png|jpg)$/, loader: "url-loader?limit=8192"},
      {test: /\.json$/,loader: 'json'},
    ]
  },
  resolve: {
    /**
     * Vue v2.x 之後 NPM Package 預設只會匯出 runtime-only 版本
     */
    alias: {
      vue: 'vue/dist/vue.js',
      weui:"./js/weui.js"
    },
    node: {
      fs: "empty"
    },
    extensions: ['', '.js', '.vue']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles.css"),
  ]
}

module.exports = config;
