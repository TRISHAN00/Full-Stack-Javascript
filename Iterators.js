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

const array = ["Trishan Saha", "Rishan Saha"];

const r = array[Symbol.iterator]();
console.log(r.next());
console.log(r.next());
console.log(r.next());

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  // console.log(element);
}

const obj = {
  studentOne: "Trishan Saha",
  studentTwo: "Rishan Saha",
};

let entries = Object.entries(obj);
for (let i = 0; i < entries.length; i++) {
  const element = entries[i][1];
  console.log(element);
}
