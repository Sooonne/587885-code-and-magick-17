'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var wizards = [];
  var coatColor;
  var eyesColor;

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.renderWizards(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.wizard.onEyesChange = function (color) {
    eyesColor = color;
    window.debounce(updateWizards);
  };

  window.wizard.onCoatChange = function (color) {
    coatColor = color;
    window.debounce(updateWizards);
  };

  var buttonSubmit = setup.querySelector('.setup-submit');
  var inputName = setup.querySelector('input[name="username"]');

  var onDataLoad = function (data) {
    wizards = data;
    // window.renderWizards(wizards);
    updateWizards();
    setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  var onDataError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
    buttonSubmit.disabled = false;
    inputName.disabled = false;
  };
  window.backend.load(onDataLoad, onDataError);

})();
