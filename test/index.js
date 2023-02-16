import { createCropSVG } from '../src/svg-crop-overlay';
const renderDiv = document.querySelector('#render');

const aspects = ['portrait', 'landscape', 'square'];
aspects.forEach((cropAspect) => {
  aspects.forEach((viewboxAspect) => {
    renderExample(cropAspect, viewboxAspect);
  });
});

function renderExample(cropAspect, viewboxAspect) {
  const container = document.createElement('div');
  container.className = 'container';
  let width, height;
  switch (viewboxAspect) {
    case 'landscape':
      width = 200;
      height = 100;
      break;
    case 'portrait':
      width = 100;
      height = 200;
      break;
    case 'square':
      width = 200;
      height = 200;
      break;
  }
  container.style.width = `${width}px`;
  container.style.height = `${height}px`;
  let crop;
  switch (crop) {
    case 'landscape':
      crop = { width: 5, height: 3 };
      break;
    case 'portrait':
      crop = { width: 3, height: 5 };
      break;
    case 'square':
      crop = { width: 5, height: 3 };
      break;
  }

  const viewBox = { width, height };
  const svgEl = createCropSVG(crop, viewBox);
  container.append(svgEl);
  const title = document.createElement('h2');
  title.textContent = `Example: Crop ${cropAspect} (${crop.width}:${crop.height}), Container ${viewboxAspect}`;
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
