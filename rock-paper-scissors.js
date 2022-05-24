const prompt = require('prompt-sync')({sigint: true});
let player1 = (prompt("Enter Rock, Paper, or Scissors: "));
let player2 = (prompt("Enter Rock, Paper, or Scissors: "));
console.log("player1 Choice: " + player1);
console.log("player2 Choice: " + player2);

//var compare = function(player1, player2) {
//     if(player1 === player2) {
//     console.log ("The result is a tie!");
// }
// if(player1 === "rock") {
//     if(player2 === "scissors") {
//         console.log ("rock wins");
//     } else {
//         // console.log ("paper wins");
//     }
// }
// if(player1 === "paper") {
//     if(player2 === "rock") {
//         console.log ("paper wins");
//     } else if(player2 === "scissors") {
//          {
//             console.log ("scissors wins");
//     }
// }
// }
// if(player1 === "scissors") {
//     if(player2 === "rock") {
//         console.log ("rock wins");
//     } else if(player2 === "paper") {
//         {
//             console.log ("scissors wins");
//         }
//     }
// }

if (player1 === "paper" && player2 === "rock"){
    console.log("paper beats rock: player 1 wins")
}

if (player1 === "paper" && player2 === "scissors"){
    console.log("scissors beats paper: player 2 wins")
}

if (player1 === "paper" && player2 === "paper"){
    console.log("TIE LOSERS!")
}
if (player1 === "rock" && player2 === "rock"){
    console.log("TIE LOSERS!")
}
if (player1 === "rock" && player2 === "paper"){
    console.log("paper beats rock: player 2 wins")
}
if (player1 === "rock" && player2 === "scissors"){
    console.log("rock beats scissors: player 1 wins")
}
if (player1 === "scissors" && player2 === "paper"){
    console.log("scissors beats paper: player 1 wins")
}
if (player1 === "scissors" && player2 === "scissors"){
    console.log("TIE LOSERS!")
}
if (player1 === "scissors" && player2 === "rock"){
    console.log("rock beats scissors: player 2 wins")
}