import common from './webpack.common.js';
import { merge } from 'webpack-merge';

export default merge(common, {
  mode: 'production',
  output: {
    library: 'svgCropOverlay',
    libraryTarget: 'umd',
    filename: 'svg-crop-overlay.js',
    globalObject: 'this',
  },
});
