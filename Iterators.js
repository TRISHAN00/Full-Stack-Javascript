let index = 0;
function next(arr) {
  return arr[index++];
}

// Second example of iterator [Symbol]
const channel = "Love Big";
const channelIterator = channel[Symbol.iterator]();
// console.log(channelIterator.next());
// console.log(channelIterator.next());

// Iterate a string using for of loop
for (const value of channel) {
  //   console.log(value);
}

while (true) {
  const data = channelIterator.next();
  if (data.done) {
    break;
  }
  //   console.log(data.value);
}

// Iterator object example of

const range = {
  start: 10,
  stop: 100,
  step: 10,
};

range[Symbol.iterator] = function () {
  let current = this.start;
  const stop = this.stop;
  const step = this.step;
  return {
    next() {
      const obj = {
        value: current,
        done: current > stop,
      };
      current += step;
      return obj;
    },
  };
};

for (let v of range) {
  console.log(v);
}
