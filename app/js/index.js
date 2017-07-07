'use strict';

require('./js/util/paradoxFileReader');
const {ipcRenderer} = require('electron');
const settingsElement = document.querySelector('#settings-button');

settingsElement.addEventListener('click', function() {
  ipcRenderer.send('open-settings-window');
});

console.log('here');

document.querySelector('#read').addEventListener('click', function() {
    console.log('clicked');
    var file = 'E:/Documents/Paradox Interactive/Crusader Kings II/mod/Faerun/common/cultures/human.txt';
    var reader = new ParadoxFileReader(file);
});
