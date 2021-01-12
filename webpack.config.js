const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserJsPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

require('dotenv').config();

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: 'source-map',
  entry: {
    main: ['@babel/polyfill', path.resolve(__dirname, 'src', 'ts', 'index.tsx')],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '~': path.resolve(__dirname, 'src/ts/'),
    },
  },
  module: {
    rules: [{
      test: /\.(js|ts|tsx)$/i,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
    }, {
      test: /\.(png|jpe?g|svg|gif|woff|woff2)$/i,
      loader: 'file-loader',
      options: {
        name: 'assets/[name].[ext]',
      },
    }, {
      test: /\.(scss|css)$/i,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ],
    },
    ],
  },
  optimization: {
    minimizer: process.env.NODE_ENV === 'production' ? [new TerserJsPlugin(), new OptimizeCssAssetsPlugin()] : [],
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/vendor-[id].[hash].css',
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'html', 'index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port: 4000,

    // the below server would be a fully functional server in a production environment
    proxy: {
      '/api': {
        changeOrigin: true,
        target: 'http://api.thecatapi.com/v1',
        pathRewrite: {
          '^/api/' : '',
        },
        headers: {
          'x-api-key': process.env.CAT_API_KEY,
        },
      },
    },
  },
}
