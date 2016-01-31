'use strict';

var Canvas = require('canvas');

// polyfill for the new ellipse method
Canvas.Context2d.prototype.ellipse =
  function (x, y, radiusX, radiusY, rotation, startAngle, endAngle,
    antiClockwise) {
    this.save();
    this.translate(x, y);
    this.rotate(rotation);
    this.scale(radiusX, radiusY);
    this.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
    this.restore();
  };

exports.Canvas = Canvas;
