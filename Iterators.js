const arr = [1, 2, 3, 4, 5];

function next(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
  }
  return arr;
}

next(arr);
