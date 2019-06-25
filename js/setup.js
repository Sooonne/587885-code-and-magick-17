'use strict';
// popup generating
var NAMES_OPTIONS = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAME_OPTIONS = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COLOR_OPTIONS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_OPTIONS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_OPTIONS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
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
// popup appearing & disappearing
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});
// input setting
var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

// change color of coat
var wizardCoatColor = setup.querySelector('.wizard-coat');
wizardCoatColor.addEventListener('click', function (evt) {
  var colorCoat = getRandomOfArray(COLOR_OPTIONS);
  evt.currentTarget.style.fill = colorCoat;
  setup.querySelector('input[name="coat-color"]').value = colorCoat;
});
// now its bad because they can be the same two times

// change color of eyes
var wizardEyesColor = setup.querySelector('.wizard-eyes');
// now its bad because they can be the same two times
wizardEyesColor.addEventListener('click', function (evt) {
  var eyesColor = getRandomOfArray(EYES_OPTIONS);
  evt.currentTarget.style.fill = eyesColor;
  setup.querySelector('input[name="eyes-color"]').value = eyesColor;
});

// color of fireball
var fireballColor = document.querySelector('.setup-fireball-wrap');
fireballColor.addEventListener('click', function (evt) {
  var colorFireball = getRandomOfArray(FIREBALL_OPTIONS);
  evt.currentTarget.style.backgroundColor = colorFireball;
  setup.querySelector('input[name="fireball-color"]').value = colorFireball;
});

