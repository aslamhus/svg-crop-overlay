import path from 'path';
import common from './webpack.common.js';
import { merge } from 'webpack-merge';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { __dirname } from './webpack.common.js';

export default merge(common, {
  mode: 'development',
  entry: './test/index.js',
  devtool: 'source-map',
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './test/index.html',
    }),
  ],
  devServer: {
    devMiddleware: {
      publicPath: 'auto',
    },
    static: {
      directory: path.join(__dirname, '../../dist/'),
    },
    open: ['index.html'],
  },
});
