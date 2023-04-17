(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.tools = {}));
})(this, (function (exports) { 'use strict';

  const square = (num) => {
    return num * num;
  };

  const cube = (num) => {
    return num * num * num;
  };

  exports.cube = cube;
  exports.square = square;

}));
