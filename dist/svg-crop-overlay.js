/******/ // The require scope
/******/var e={
/******/ // define getter functions for harmony exports
/******/d:(t,i)=>{
/******/for(var r in i)
/******/e.o(i,r)&&!e.o(t,r)&&
/******/Object.defineProperty(t,r,{enumerable:!0,get:i[r]})
/******/;
/******/},
/******/o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)
/******/},t={};
/******/
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/
/**
 * Create Crop Svg
 * @param {Object} cropDimensions - width and height values for the desired crop, i.e. 16 x 9
 * @property {Number} cropDimensions.width
 * @property {Number} cropDimensions.height
 * @param {Object} viewBox - literal width and height values of the svg. These values determine the svg
 * viewbox.
 * @property {Number} viewBox.width
 * @property {Number} viewBox.height
 * @returns
 */
function createCropSVG(e={width:3,height:2},t={width:640,height:480}){const i="xMidYMid slice",r="xMidYMid slice";let c;switch(getAspectType(e)){case"portrait":
// console.info('crop is portrait');
c=r;break;case"landscape":
// console.info('crop is landscape');
c=i}
// console.log('preserveAspectRatio', preserveAspectRatio);
const s="http://www.w3.org/2000/svg",a=document.createElementNS(s,"svg");a.setAttribute("width","100%"),a.setAttribute("height","100%"),a.setAttribute("viewBox",`0 0 ${t.width} ${t.height}`),a.setAttribute("preserveAspectRatio",c);const n=document.createElementNS(s,"defs"),h=document.createElementNS(s,"style");h.textContent="\n      .cls-1 {\n          fill: #0c0c0c;\n          fill-rule: evenodd;\n          opacity: 1;\n      }";const o=document.createElementNS(s,"path");o.classList.add("cls-1");const p=function getCropPathDefinition({viewBox:e,cropDimensions:t}){
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
let i;const r=getAspectType(e);switch(getAspectType(t)){case"portrait":switch(r){case"square":case"landscape":i="height";break;case"portrait":i="width"}break;case"landscape":switch(r){case"landscape":i="height";break;case"square":case"portrait":i="width"}break;case"square":switch(r){case"square":case"portrait":i="width";break;case"landscape":i="height"}}const[c,s]=function getRectLiteralDimensionsFromAspect({aspect:e={width:c,height:r},rect:t={width:c,height:r},anchor:i}){let r,c,s;const a=e.height/e.width;if("height"==i)
// find width
s=t.height/e.height,r=t.height,c=r/a;else{if("width"!=i)throw new TypeError("unexpected anchor value. Must be either width or height but found: "+i);
// find height
s=t.width/e.width,c=t.width,r=c*a}return[c,r]}({aspect:t,rect:e,anchor:i});const a=((e.width-c)/2).toFixed(2),n=a,h=parseInt(n)+parseInt(c);const o=((e.height-s)/2).toFixed(2),p=o,d=parseInt(p)+parseInt(s),w=`M0,0H${e.width}V${e.height}H0V0ZM${n},${p}H${h}V${d}H${n}V1Z`;return w}({viewBox:t,cropDimensions:e});return o.setAttribute("d",p),a.append(n),n.append(h),a.append(o),a}function getAspectType({width:e,height:t}){return e>t?"landscape":e<t?"portrait":"square"}
/* harmony export */e.d(t,{
/* harmony export */k:()=>/* binding */createCropSVG
/* harmony export */});var i=t.k;export{i as createCropSVG};