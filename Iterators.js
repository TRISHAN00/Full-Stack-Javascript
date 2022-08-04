const arr = [1, 2, 3, 4, 5];
let index = 0;
function next(arr) {
  return arr[index++];
}

// Second example of iterator [Symbol]
const channel = "Love";
const channelIterator = channel[Symbol.iterator]();
console.log(channelIterator.next());
console.log(channelIterator.next());
console.log(channelIterator.next());
console.log(channelIterator.next());
console.log(channelIterator.next());
console.log(channelIterator.next());
console.log(channelIterator.next());
console.log(channelIterator.next());
console.log(channelIterator.next());
