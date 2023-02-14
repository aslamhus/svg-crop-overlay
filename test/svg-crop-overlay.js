/**
 *
 * @param {Object} cropDimensions - width and height values for the desired crop, i.e. 16 x 9
 * @property {Number} cropDimensions.width
 * @property {Number} cropDimensions.height
 * @param {Object} svgDimensions - literal width and height values of the svg. These values determine the svg
 * viewbox.
 * @property {Number} svgDimensions.width
 * @property {Number} svgDimensions.height
 * @returns
 */
export function createCropSVG(
  cropDimensions = { width: 3, height: 2 },
  svgDimensions = { width: 640, height: 480 }
) {
  let preserveAspectRatio = 'xMinYMid slice';
  if (cropDimensions.height > cropDimensions.width) {
    console.log('crop height > crop width');
    preserveAspectRatio = 'xMidYMax slice';
  }
  console.log('preserveAspectRatio', preserveAspectRatio);
  const svgns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgns, 'svg');
  // svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.setAttribute('viewBox', `0 0 ${svgDimensions.width} ${svgDimensions.height}`);
  svg.setAttribute('preserveAspectRatio', preserveAspectRatio);
  const defs = document.createElementNS(svgns, 'defs');
  const style = document.createElementNS(svgns, 'style');
  style.textContent = `
      .cls-1 {
          fill: #0c0c0c;
          fill-rule: evenodd;
          opacity: 0.9;
      }`;
  const path = document.createElementNS(svgns, 'path');
  path.classList.add('cls-1');
  const d = getCropPathDefinition({ svgDimensions, cropDimensions });
  path.setAttribute('d', d);
  svg.append(defs);
  defs.append(style);
  svg.append(path);
  return svg;
}

function getCropPathDefinition({ svgDimensions, cropDimensions }) {
  // you may need to dynamically set the padding-bottom of video container to the svg aspect ratio. It's set in the css right now.
  // you will also need to make sure crop is changed for the timeline frames.
  /**
   *
   *
   * M - move to
   * H - draws horizontal line
   * V - draws vertical line
   * Z - close path
   *
   * - create container of 640x480 Z  Move 157,1 HLine to 472, VLine to 481, Hline back to 157, V back to 1, close
   * path("M 0 0 H 640 V 480 H 0 V 0 Z M 157 1 H 472 V 481 H 157 V 1 Z");
   *
   *
   * cW / cH = svgW / svgH
   * 3 / 2 = 640 / 480
   *
   * for landscape:
   *
   * 2/3 = 640 / 480
   * ratio = 480 / 2 = 240
   * cropAspect = 3/2
   * cropWidth =
   */

  let ratio, croppedWidth, croppedHeight;
  const cropAspect = cropDimensions.height / cropDimensions.width;
  if (cropDimensions.height > cropDimensions.width) {
    // portrait, find width
    ratio = svgDimensions.height / cropDimensions.height;
    croppedHeight = svgDimensions.height;
    croppedWidth = croppedHeight / cropAspect;
  } else {
    // landscape, find height
    ratio = svgDimensions.width / cropDimensions.width;
    croppedWidth = svgDimensions.width;
    croppedHeight = croppedWidth * cropAspect;
  }
  // get literal crop height/width from svg dimensions
  console.log('crop literal dimensions', croppedWidth, croppedHeight);
  const x = ((svgDimensions.width - croppedWidth) / 2).toFixed(2);
  const leftX = x;
  const rightX = parseInt(leftX) + parseInt(croppedWidth);
  const y = ((svgDimensions.height - croppedHeight) / 2).toFixed(2);
  const bottomY = y;
  const topY = parseInt(bottomY) + parseInt(croppedHeight);
  const pathDefinition = `M0,0H640V480H0V0ZM${leftX},${bottomY}H${rightX}V${topY}H${leftX}V1Z`;
  return pathDefinition;
}