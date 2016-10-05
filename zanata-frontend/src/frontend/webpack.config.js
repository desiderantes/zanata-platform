var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './app/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
<<<<<<< HEAD
      {
=======
     {
>>>>>>> 850f6a7fb1b3920d9700b935aebbe14337b215be
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'app'),
        loader: 'atomic-loader?configPath=' + __dirname +
          '/atomicCssConfig.js' +
          '!babel?presets[]=react,presets[]=stage-0,presets[]=es2015'
      },
      {
        test: /\.css$/,
        loader: 'style!css!autoprefixer?browsers=last 2 versions'
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: "style!css!autoprefixer!less"
      },
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.less']
  },
  node: {
    __dirname: true
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  }
}
