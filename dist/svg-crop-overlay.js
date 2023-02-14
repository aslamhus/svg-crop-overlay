!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.svgCropOverlay = t())
    : (e.svgCropOverlay = t());
})(this, () =>
  (() => {
    'use strict';
    var e = {
        d: (t, o) => {
          for (var i in o)
            e.o(o, i) && !e.o(t, i) && Object.defineProperty(t, i, { enumerable: !0, get: o[i] });
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        r: (e) => {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 });
        },
      },
      t = {};
    function o(e = { width: 3, height: 2 }, t = { width: 640, height: 480 }) {
      let o = 'xMinYMid slice';
      e.height > e.width && (console.log('crop height > crop width'), (o = 'xMidYMax slice')),
        console.log('preserveAspectRatio', o);
      const i = 'http://www.w3.org/2000/svg',
        n = document.createElementNS(i, 'svg');
      n.setAttribute('width', '100%'),
        n.setAttribute('height', '100%'),
        n.setAttribute('viewBox', `0 0 ${t.width} ${t.height}`),
        n.setAttribute('preserveAspectRatio', o);
      const r = document.createElementNS(i, 'defs'),
        s = document.createElementNS(i, 'style');
      s.textContent =
        '\n      .cls-1 {\n          fill: #0c0c0c;\n          fill-rule: evenodd;\n          opacity: 0.9;\n      }';
      const c = document.createElementNS(i, 'path');
      c.classList.add('cls-1');
      const d = (function ({ svgDimensions: e, cropDimensions: t }) {
        let o, i, n;
        const r = t.height / t.width;
        t.height > t.width
          ? ((o = e.height / t.height), (n = e.height), (i = n / r))
          : ((o = e.width / t.width), (i = e.width), (n = i * r)),
          console.log('crop literal dimensions', i, n);
        const s = ((e.width - i) / 2).toFixed(2),
          c = parseInt(s) + parseInt(i),
          d = ((e.height - n) / 2).toFixed(2);
        return `M0,0H640V480H0V0ZM${s},${d}H${c}V${parseInt(d) + parseInt(n)}H${s}V1Z`;
      })({ svgDimensions: t, cropDimensions: e });
      return c.setAttribute('d', d), n.append(r), r.append(s), n.append(c), n;
    }
    return e.r(t), e.d(t, { default: () => o }), t;
  })()
);
