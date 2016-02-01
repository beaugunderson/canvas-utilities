'use strict';

var Canvas = require('canvas');

function ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle,
  antiClockwise) {
  this.save();
  this.translate(x, y);
  this.rotate(rotation);
  this.scale(radiusX, radiusY);
  this.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
  this.restore();
}

// polyfill for the new ellipse method
if (Canvas.Context2d && Canvas.Context2d.prototype.ellipse === undefined) {
  // server-side using automattic/node-canvas
  Canvas.Context2d.prototype.ellipse = ellipse;
} else if (typeof CanvasRenderingContext2D !== 'undefined' &&
           CanvasRenderingContext2D.prototype.ellipse === undefined) {
  // browser-side
  CanvasRenderingContext2D.prototype.ellipse = ellipse;
}

exports.Canvas = Canvas;
