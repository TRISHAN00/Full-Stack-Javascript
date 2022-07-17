// function addition(a, b) {
//   return a + b;
// }

// function composition
function addition(num) {
  return num === num ? -num++ : num;
}

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const time = (a, b) => a * b;

const a = 10;
const b = 20;

const r3 = Math.abs(time(sum(a, b), sub(a, b)));

console.log(r3);
