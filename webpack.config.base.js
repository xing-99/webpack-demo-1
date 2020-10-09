const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '写代码了',
      template: 'src/assets/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.styl$/,
        loader: ['style-loader','css-loader','stylus-loader'],
      },
      {
        test: /\.less$/,
        loader: ['style-loader','css-loader','less-loader'],
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader', // 将 JS 字符串生成为 style 节点
          'css-loader', // 将 CSS 转化成 CommonJS 模块
          {
            loader: "sass-loader",
            options: {
              implementation: require('dart-sass')
            }
          }
        ]
      }
    ]
  }
};