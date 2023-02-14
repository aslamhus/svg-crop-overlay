import path from 'path';
import * as url from 'url';
export const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default {
  name: 'svg-crop-overlay',
  entry: './src/svg-crop-overlay.js',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'svg-crop-overlay.js',
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      { test: /\.m?js/, type: 'javascript/auto' },
    ],
  },
};
