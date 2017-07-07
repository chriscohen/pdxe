'use strict';

const {app, BrowserWindow, ipcMain, Menu} = require('electron');
const configuration = require('./configuration.js');

let mainWindow;
let settingsWindow;

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 600
  });

  var menu = Menu.buildFromTemplate(getMenuItems());
  Menu.setApplicationMenu(menu);

  mainWindow.loadURL('file://' + __dirname + '/app/index.html');
  mainWindow.webContents.openDevTools();
});

ipcMain.on('open-settings-window', function() {
  if (settingsWindow) {
    return;
  }

  settingsWindow = new BrowserWindow({
    frame: false,
    height: 400,
    resizable: false,
    width: 400
  });

  settingsWindow.loadURL('file://' + __dirname + '/app/settings.html');

  settingsWindow.on('closed', function() {
    settingsWindow = null;
  });
});

function getMenuItems() {
  return [
    {
      label: 'File',
      submenu: [
        {
          label: 'About...',
          click: () => {
            console.log('foobar');
          }
        },
        {
          type: 'separator'
        },
        {
          label: 'Quit',
          click: () => {
            app.quit();
          }
        }
      ]
    }
  ];
}
