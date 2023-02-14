# Svg crop overlay

## Basic usage

```js
import { createCropSVG } from './svg-crop-overlay.js';

const crop = { width: 2, height: 3 };
const svg = { width: 640, height: 480 };
const svgEl = createCropSVG(crop, svg);
container.append(svgEl);
```
