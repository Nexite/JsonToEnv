'use strict';

const fs = require('fs');

const inputJSON = JSON.parse(fs.readFileSync('input.json'));
const keys = Object.keys(inputJSON);
let outputString = ""
keys.map(key => {
  outputString+=`${key}=${inputJSON[key]}\n`
})
fs.writeFile(".env", outputString, function (err) {
  if (err) return console.log(err);
});