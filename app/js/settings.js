'use strict';

var chooser = document.getElementById('game-path-chooser');
var button = document.getElementById('game-path-button');
var field = document.getElementById('game-path-field');

button.addEventListener('click', () => {
  chooser.click();
});

chooser.addEventListener('change', () => {
  alert('hello');
});
