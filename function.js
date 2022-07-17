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

// Create a function that will handle simple math expressions. The input is an expression in the form of a string.

// calculator("23+4") ➞ 27

// calculator("45-15") ➞ 30

// calculator("13+2-5*2") ➞ 5

// calculator("49/7*2-3") ➞ 11

function calculator(str) {
  return eval(str);
}

// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

function divisible(num) {
  return num % 100 ? false : true;
}

// Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.

function area(h, w) {
  return h, w === true ? h * w : -1;
}

console.log(area(-1, 5));
