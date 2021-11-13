let fs = require('fs')
global.DeveloperMode = 'false' //true Or false
global.owner = ['6287836855481','6287836855481', '6287836855481'] // Put your number here
global.mods = ['6287836855481','6287836855481','6287836855481']  // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) 
/*global.prems = ['6287836855481','6287836855481',  '6287836855481','6287836855481','6287836855481','6287836855481','6287836855481','6287836855481','6287836855481','6287836855481','6287836855481','6287836855481','6287836855481','6287836855481','6287836855481','6287836855481',] // Premium user has unlimited limit*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zeks: 'https://api.zeks.xyz',
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'SAYULONET',
  'https://api.zeks.xyz': 'SAYULONET',
}

// Sticker WM
global.packname = 'Elaina-chan'
global.author ='+6287836855481'

global.multiplier = 1000 // The higher, The harder levelup

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
