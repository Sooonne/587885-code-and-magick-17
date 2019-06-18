'use strict';

var NAMES_OPTIONS = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAME_OPTIONS = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COLOR_OPTIONS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_OPTIONS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_COUNT = 4;

var showUserDialog = function () {
  document.querySelector('.setup').classList.remove('hidden');
  document.querySelector('.setup-similar').classList.remove('hidden');
};


var getRandomOfArray = function (array) {
  var rand = Math.floor(Math.random() * array.length);
  return array[rand];
};

var generateWizards = function (count) {
  var wizards = [];
  for (var i = 0; i < count; i++) {
    wizards[i] = {
      name: getRandomOfArray(NAMES_OPTIONS) + ' ' + getRandomOfArray(SURNAME_OPTIONS),
      coatColor: getRandomOfArray(COLOR_OPTIONS),
      eyesColor: getRandomOfArray(EYES_OPTIONS)
    };
  }
  return wizards;
};

var generateWizardNodes = function (wizardsData) {
  var wizardElements = [];
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  for (var j = 0; j < wizardsData.length; j++) {
    wizardElements[j] = similarWizardTemplate.cloneNode(true);
    wizardElements[j].querySelector('.setup-similar-label').textContent = wizardsData[j].name;
    wizardElements[j].querySelector('.wizard-coat').style.fill = wizardsData[j].coatColor;
    wizardElements[j].querySelector('.wizard-eyes').style.fill = wizardsData[j].eyesColor;
  }
  return wizardElements;
};

var renderWizards = function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();
  var wizardNodes = generateWizardNodes(generateWizards(WIZARDS_COUNT));
  for (var i = 0; i < wizardNodes.length; i++) {
    fragment.appendChild(wizardNodes[i]);
  }
  similarListElement.appendChild(fragment);
};

showUserDialog();
renderWizards();
