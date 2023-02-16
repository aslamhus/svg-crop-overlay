import { createCropSVG } from '../src/svg-crop-overlay';
const renderDiv = document.querySelector('#render');

const aspects = ['portrait', 'landscape', 'square'];
let count = 0;

renderExample({ width: 7, height: 3 }, { width: 192, height: 108 });
aspects.forEach((cropAspect) => {
  aspects.forEach((viewboxAspect) => {
    renderExample(cropAspect, viewboxAspect);
  });
});

function renderExample(cropAspect, viewboxAspect) {
  count++;
  const container = document.createElement('div');
  container.className = 'container';
  let viewbox, crop, viewboxType, cropType;
  if (typeof viewboxAspect == 'string') {
    viewboxType = viewboxAspect;
    switch (viewboxAspect) {
      case 'landscape':
        viewbox = { width: 200, height: 100 };
        break;
      case 'portrait':
        viewbox = { width: 100, height: 200 };
        break;
      case 'square':
        viewbox = { width: 200, height: 200 };
        break;
      default:
        throw new Error('unrecognised viewbox aspect type');
    }
  } else {
    viewboxType = 'custom';
    viewbox = viewboxAspect;
  }
  if (typeof cropAspect == 'string') {
    cropType = cropAspect;
    switch (cropAspect) {
      case 'landscape':
        crop = { width: 5, height: 3 };
        break;
      case 'portrait':
        crop = { width: 3, height: 5 };
        break;
      case 'square':
        crop = { width: 5, height: 5 };
        break;
    }
  } else {
    cropType = 'custom';
    crop = cropAspect;
  }

  container.style.width = `${viewbox.width}px`;
  container.style.height = `${viewbox.height}px`;
  const isCustom = cropType == 'custom' || viewboxType == 'custom';
  const titleText = `${isCustom ? 'Custom ' : ''} Example ${count}: Crop ${getOrientationName(
    crop
  )} (${crop?.width}:${crop?.height}), Viewbox ${getOrientationName(viewbox)} (${viewbox.width}:${
    viewbox.height
  })`;
  console.log(`------------- ${titleText}`);
  const svgEl = createCropSVG(crop, viewbox);
  container.append(svgEl);
  const title = document.createElement('h2');
  title.textContent = titleText;
  document.body.append(title, container);
}
/**
 * Test cases
 *
 *
 * 1. Crop portrait, viewbox landscape ✔
 * 2. Crop portrait, viewbox portrait
 * 3. Crop portrait, viewbox square
 * 4. Crop landscape, viewbox landscape
 * 5. Crop landscape, viewbox portrait,
 * 6. Crop landscape, viewbox square
 * 7. Crop square, viewbox landscape
 * 8. Crop square, viewbox portrait,
 * 9. Crop square, viewbox square
 */

function getOrientationName({ width, height }) {
  let aspect = width / height;
  console.log('******aspect', aspect);
  switch (true) {
    case aspect < 1:
      return 'portrait';

    case aspect > 1:
      return 'landscape';
    case aspect == 1:
      return 'square';
    default:
      return 'unknown';
  }
}
