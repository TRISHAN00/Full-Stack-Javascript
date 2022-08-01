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
