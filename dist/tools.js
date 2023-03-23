var tools = (function (exports) {
  'use strict';

  const square = (num) => {
    return num * num;
  };

  const cube = (num) => {
    return num * num * num;
  };

  exports.cube = cube;
  exports.square = square;

  return exports;

})({});
