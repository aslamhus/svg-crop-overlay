# Svg crop overlay

## Basic usage

```js
import { createCropSVG } from './svg-crop-overlay.js';

const crop = { width: 2, height: 3 };
const viewBox = { width: 640, height: 480 };
const svgEl = createCropSVG(crop, viewBox);
container.append(svgEl);
```
