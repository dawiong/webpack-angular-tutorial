var HtmlWebpackPlugin = require('html-webpack-plugin');

var babelSettings = {presets: ['es2015']};

module.exports = {
  context: __dirname + "/src",
  entry: "./app/main",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html', // Load a custom template
      inject: 'body' // Inject all scripts into the body
    })
  ],
  module: {
    loaders: [
      {test: /\.html$/, loader: 'raw',exclude: /node_modules/},
      {test: /\.js$/, loader: 'ng-annotate!babel?' + JSON.stringify(babelSettings),exclude: /node_modules/},
      {test: /\.scss$/, loader: 'style!css!sass',exclude: /node_modules/}
    ]
  }
}
