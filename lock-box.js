const prompt = require('prompt-sync')({sigint: true});

// let pinCode = 1234

let pinCode = Number(prompt("Enter your 4 digit pin code: "));

 if (pinCode === 1234){
     console.log("Success!");
 } else if (pinCode !== 1234){
    console.log("Failure!")
}