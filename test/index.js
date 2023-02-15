import createCropSVG from '../src/svg-crop-overlay';

const container = document.querySelector('div');
const crop = { width: 4, height: 3 };
const { width, height } = container.getBoundingClientRect();
const viewBox = { width, height };
const svgEl = createCropSVG(crop, viewBox);
container.append(svgEl);
