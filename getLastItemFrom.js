const prompt = require('prompt-sync')({sigint: true});

let userArr = JSON.parse(prompt("Enter an array. "))

console.log(userArr[userArr.length -1])