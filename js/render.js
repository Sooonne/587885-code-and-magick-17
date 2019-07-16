'use strict';

(function () {
  var WIZARDS_COUNT = 4;

  var generateWizardNodes = function (wizardsData) {
    var wizardElements = [];
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    for (var j = 0; j < WIZARDS_COUNT; j++) {
      wizardElements[j] = similarWizardTemplate.cloneNode(true);
      wizardElements[j].querySelector('.setup-similar-label').textContent = wizardsData[j].name;
      wizardElements[j].querySelector('.wizard-coat').style.fill = wizardsData[j].colorCoat;
      wizardElements[j].querySelector('.wizard-eyes').style.fill = wizardsData[j].colorEyes;
    }
    return wizardElements;
  };

  window.renderWizards = function (wizards) {
    var similarListElement = document.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();
    var wizardNodes = generateWizardNodes(wizards);
    for (var i = 0; i < WIZARDS_COUNT; i++) {
      fragment.appendChild(wizardNodes[i]);
    }
    similarListElement.innerHTML = '';
    similarListElement.appendChild(fragment);
  };
})();
