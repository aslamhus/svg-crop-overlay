import common from './webpack.common.js';
import { merge } from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';

export default merge(common, {
  mode: 'production',
  experiments: {
    outputModule: true,
  },
  output: {
    library: {
      type: 'module',
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_fnames: true,
          compress: {
            drop_console: true,
          },
          format: {
            comments: true,
          },
        },
        extractComments: false,
      }),
    ],
  },
});
