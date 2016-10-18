var path = require('path');
var config = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [ 
      {
      test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      loader: 'babel?presets[]=react,presets[]=es2015' // 加载模块 "babel" 是 "babel-loader" 的缩写
      },{
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },{
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },{
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader'
      }
    ]
  }
};

module.exports = config;