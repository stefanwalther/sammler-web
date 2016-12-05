var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  debug: true,
  verbose: true,
  displayErrorDetails: true,
  context: __dirname,
  stats: {
    colors: true,
    reasons: true
  },
  entry: {
    'angular2': [
      'es6-shim',
      'angular2/bundles/angular2-polyfills',
      'rxjs',
      'reflect-metadata',
      'angular2/core',
      'angular2/platform/browser'
    ],
    'app': ['./src/app/app.js']
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          plugins: ['transform-runtime', 'transform-decorators-legacy'],
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },
  noParse: [
    /rtts_assert\/src\/rtts_assert/,
    /reflect-metadata/
  ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'angular2',
      minChunks: Infinity,
      filename: 'angular2.js'
    })
  ],
  output: {
    path: './src/',
    filename: '[name]/[name]-bundle.js',
    sourceMapFilename: '[name]-bundle.js.map',
    chunkFilename: '[id]-bundle.chunk.js'
  }
};
