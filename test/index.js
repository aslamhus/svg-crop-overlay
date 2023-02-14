import { createCropSVG } from '../src/svg-crop-overlay';

const container = document.querySelector('div');
const crop = { width: 2, height: 3 };
const svg = { width: 640, height: 480 };
const svgEl = createCropSVG(crop, svg);
container.append(svgEl);

// y max works for horiztonal
