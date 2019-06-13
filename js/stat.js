'use strict';

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 150, 30);
  ctx.fillText('Список результатов:', 150, 50);

  var timeMax = Math.max.apply(null, times);
  // var indexTimeMax = times.indexOf(Math.max.apply(null, times));
  // console.log(times);
  // console.log(times.indexOf(Math.max.apply(null, times)));
  // console.log(names);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + (Math.random() * 0.9 + 0.1) + ')';
    // opacity should be equal zero
    var height = times[i] * 150 / timeMax;
    ctx.fillRect(150 + 90 * i, 230 - height, 40, height);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], 150 + 90 * i, 250);
    ctx.fillText(Math.round(times[i]), 150 + 90 * i, 220 - height);


  }


};
