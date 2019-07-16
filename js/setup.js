'use strict';

(function () {
  // popup generating
  // var NAMES_OPTIONS = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  // var SURNAME_OPTIONS = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  // var COLOR_OPTIONS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  // var EYES_OPTIONS = ['black', 'red', 'blue', 'yellow', 'green'];
  // var FIREBALL_OPTIONS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  // var WIZARDS_COUNT = 4;
  var setup = document.querySelector('.setup');

  var showUserDialog = function () {
    document.querySelector('.setup').classList.remove('hidden');
    document.querySelector('.setup-similar').classList.remove('hidden');
  };


  // var getRandomOfArray = function (array) {
  //   var rand = Math.floor(Math.random() * array.length);
  //   return array[rand];
  // };

  // var generateWizards = function (count) {
  //   var wizards = [];
  //   for (var i = 0; i < count; i++) {
  //     wizards[i] = {
  //       name: getRandomOfArray(NAMES_OPTIONS) + ' ' + getRandomOfArray(SURNAME_OPTIONS),
  //       coatColor: getRandomOfArray(COLOR_OPTIONS),
  //       eyesColor: getRandomOfArray(EYES_OPTIONS)
  //     };
  //   }
  //   return wizards;
  // };

  // var generateWizardNodes = function (wizardsData) {
  //   var wizardElements = [];
  //   var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  //   for (var j = 0; j < WIZARDS_COUNT; j++) {
  //     wizardElements[j] = similarWizardTemplate.cloneNode(true);
  //     wizardElements[j].querySelector('.setup-similar-label').textContent = wizardsData[j].name;
  //     wizardElements[j].querySelector('.wizard-coat').style.fill = wizardsData[j].colorCoat;
  //     wizardElements[j].querySelector('.wizard-eyes').style.fill = wizardsData[j].colorEyes;
  //   }
  //   return wizardElements;
  // };

  // var renderWizards = function (wizards) {
  //   var similarListElement = document.querySelector('.setup-similar-list');
  //   var fragment = document.createDocumentFragment();
  //   var wizardNodes = generateWizardNodes(wizards);
  //   for (var i = 0; i < WIZARDS_COUNT; i++) {
  //     fragment.appendChild(wizardNodes[i]);
  //   }
  //   similarListElement.appendChild(fragment);
  // };

  showUserDialog();


  // new task
  var buttonSubmit = setup.querySelector('.setup-submit');
  var inputName = setup.querySelector('input[name="username"]');

  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), onDataSave, onDataError);
    buttonSubmit.disabled = true;
    inputName.disabled = true;
    evt.preventDefault();
  });

  var onDataSave = function () {
    setup.classList.add('hidden');
    buttonSubmit.disabled = false;
    inputName.disabled = false;

  };
  // !
  // var onDataLoad = function (wizards) {
  //   window.renderWizards(wizards);
  //   setup.querySelector('.setup-similar').classList.remove('hidden');
  // };

  // var onDataError = function (errorMessage) {
  //   var node = document.createElement('div');
  //   node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
  //   node.style.position = 'absolute';
  //   node.style.left = 0;
  //   node.style.right = 0;
  //   node.style.fontSize = '30px';

  //   node.textContent = errorMessage;
  //   document.body.insertAdjacentElement('afterbegin', node);
  //   buttonSubmit.disabled = false;
  //   inputName.disabled = false;
  // };

  // window.backend.load(onDataLoad, onDataError);

  // // change color of coat
  // var wizardCoatColor = setup.querySelector('.wizard-coat');
  // var inputCoatColor = setup.querySelector('input[name="coat-color"]');
  // wizardCoatColor.addEventListener('click', function (evt) {
  //   var colorCoat = getRandomOfArray(COLOR_OPTIONS);
  //   evt.currentTarget.style.fill = colorCoat;
  //   inputCoatColor.value = colorCoat;
  // });
  // // now its bad because they can be the same two times

  // // change color of eyes
  // var wizardEyesColor = setup.querySelector('.wizard-eyes');
  // // now its bad because they can be the same two times
  // var inputEyesColor = setup.querySelector('input[name="eyes-color"]');
  // wizardEyesColor.addEventListener('click', function (evt) {
  //   var eyesColor = getRandomOfArray(EYES_OPTIONS);
  //   evt.currentTarget.style.fill = eyesColor;
  //   inputEyesColor.value = eyesColor;
  // });

  // // color of fireball
  // var fireballColor = document.querySelector('.setup-fireball-wrap');
  // var inputFireballColor = setup.querySelector('input[name="fireball-color"]');
  // fireballColor.addEventListener('click', function (evt) {
  //   var colorFireball = getRandomOfArray(FIREBALL_OPTIONS);
  //   evt.currentTarget.style.backgroundColor = colorFireball;
  //   inputFireballColor.value = colorFireball;
  // });

})();
