'use strict';

var poissonDiscSampler = require('poisson-disc-sampler');
var utilities = require('./utilities');

var PoissonImageGrid = module.exports = function () {
  this._padding = 0;
};

utilities.populateProperties(PoissonImageGrid.prototype, [
  'width', 'height', 'padding', 'images', 'context'
]);

PoissonImageGrid.prototype.draw = function () {
  var sampler = poissonDiscSampler(this.width(), this.height(),
    Math.max(this.images().image().width,
             this.images().image().height) + this.padding());

  var sample;

  while ((sample = sampler())) {
    // XXX: Do we need a drawFromCenter()?
    this.images().image().draw(sample[0] - this.images().image().width / 2,
                               sample[1] - this.images().image().height / 2);

    this.images().increment();
  }
};
