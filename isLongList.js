const prompt = require('prompt-sync')({sigint: true});

let x = JSON.parse(prompt("Enter an Array: "))

if (x.length < 10){
    console.log(false)
}
else {
    console.log(true)
}