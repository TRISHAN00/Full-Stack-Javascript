const arr = [1, 2, 3, 4, 5];
let index = 0;
function next(arr) {
  return arr[index++];
}

// Second example of iterator [Symbol]
const change = "Love Bird";
console.log(change[Symbol.iterator]);
