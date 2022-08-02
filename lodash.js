const chunk = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {}
  return result;
};

// compact
const compact = (arr) => {
  const result = arr.reduce((acc, curr) => {
    if (curr) {
      acc.push(curr);
    }
    return acc;
  }, []);
  return result;
};

// return contact array
const array = [1];
const concat = (value) => {
  const arr = [];
  if (value) {
    arr.push(value);
  }
};

// difference
const difference = (arr1, arr2) => {
  const match = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let e = 0; e < arr2.length; e++) {
      if (arr1[i] === arr2[e]) {
        match.push(arr2[i]);
      }
    }
  }

  return match.length;
};

console.log(difference([2, 1, 4], [2, 3, 1, 4]));
