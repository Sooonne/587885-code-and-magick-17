'use strict';

(function () {
  var COLOR_OPTIONS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_OPTIONS = ['black', 'red', 'blue', 'yellow', 'green'];
  // var FIREBALL_OPTIONS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  // var coatColor;
  // var eyesColor;
  // var fireballColor;

  var wizard = {
    onEyesChange: function (color) {},
    onCoatChange: function (color) {}
  };

  var getRandomOfArray = function (array) {
    var rand = Math.floor(Math.random() * array.length);
    return array[rand];
  };

  var setup = document.querySelector('.setup');

  var wizardCoatColor = setup.querySelector('.wizard-coat');
  var inputCoatColor = setup.querySelector('input[name="coat-color"]');
  wizardCoatColor.addEventListener('click', function (evt) {
    var newCoatColor = getRandomOfArray(COLOR_OPTIONS);
    evt.currentTarget.style.fill = newCoatColor;
    inputCoatColor.value = newCoatColor;
    // coatColor = newCoatColor;
    // updateWizards();
    wizard.onCoatChange(newCoatColor);
  });

  var wizardEyesColor = setup.querySelector('.wizard-eyes');
  // now its bad because they can be the same two times
  var inputEyesColor = setup.querySelector('input[name="eyes-color"]');
  wizardEyesColor.addEventListener('click', function (evt) {
    var newEyesColor = getRandomOfArray(EYES_OPTIONS);
    evt.currentTarget.style.fill = newEyesColor;
    inputEyesColor.value = newEyesColor;
    // eyesColor = newEyesColor;
    // updateWizards();
    wizard.onEyesChange(newEyesColor);
  });

  // eslint-disable-next-line no-return-assign
  return window.wizard = wizard;
})();


