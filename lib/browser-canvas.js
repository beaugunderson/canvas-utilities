/*global Image:true*/

'use strict';

var Canvas = module.exports = function (width, height) {
  var canvas = document.createElement('canvas');

  canvas.width = width;
  canvas.height = height;

  return canvas;
};

Canvas.Image = Image;
