'use strict';

window.renderStatistics = function (ctx, names, times) {
  var WINDOW = {
    WIDTH: 420,
    HEIGHT: 270,
    X: 100,
    Y: 10,
    SHADOW: 10
  };

  var BAR_CHART = {
    HEIGHT: 150,
    WIDTH: 40,
    DISTANCE: 50
  };

  var PADDING = {
    LEFT: 150,
    TOP: 30
  };

  var COLUMN_BETWEEN = BAR_CHART.WIDTH + BAR_CHART.DISTANCE;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(WINDOW.X + WINDOW.SHADOW, WINDOW.Y + WINDOW.SHADOW, WINDOW.WIDTH, WINDOW.HEIGHT);

  ctx.fillStyle = 'white';
  ctx.fillRect(WINDOW.X, WINDOW.Y, WINDOW.WIDTH, WINDOW.HEIGHT);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', PADDING.LEFT, PADDING.TOP);
  ctx.fillText('Список результатов:', PADDING.LEFT, 50);

  var timeMax = Math.max.apply(null, times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + (Math.random() * 0.9 + 0.1) + ')';
    // opacity should not be too small
    var height = BAR_CHART.HEIGHT * times[i] / timeMax;
    ctx.fillRect(PADDING.LEFT + COLUMN_BETWEEN * i, 230 - height, BAR_CHART.WIDTH, height);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], PADDING.LEFT + COLUMN_BETWEEN * i, 250);
    ctx.fillText(Math.round(times[i]), PADDING.LEFT + COLUMN_BETWEEN * i, 220 - height);
  }
};
