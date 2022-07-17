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
function squaed(b) {
  return b * b;
}

console.log(squaed(9));
