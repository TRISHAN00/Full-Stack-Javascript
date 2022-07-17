// function addition(a, b) {
//   return a + b;
// }

// function composition
function addition(num) {
  return Math.abs(num + 1);
}

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const time = (a, b) => a * b;

const a = 10;
const b = 20;

const r3 = Math.abs(time(sum(a, b), sub(a, b)));

// Create a function that takes the age in years and returns the age in days.

function calcAge(age) {
  return age * 365;
}

// Find Out the mistake
// function squaed(b) {
//     return a * a;
//   }

function squaed(b) {
  return b * b;
}

// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

// wins get 3 points
// draws get 1 point
// losses get 0 points

function footballPoints(wins, draws, losses) {
  return wins * 3 + draws * 1 + losses * 0;
}

console.log(footballPoints(0, 0, 1));
