const axios = require("axios").default;

async function getUsers() {
  const url = `https://jsonplaceholder.typicode.com/users`;
  const { data: users } = await axios.get(url);
  return users;
}

getUsers()
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  });

function* generatorId() {
  let index = 1;
  while (true) {
    yield index++;
  }
}

const generateUserId = generatorId();
const generateProfileId = generatorId();

// console.log("User", generateUserId.next().value);
// console.log("User", generateUserId.next().value);
// console.log("User", generateUserId.next().value);
// console.log("User", generateUserId.next().value);

// console.log("Product Id", generateProfileId.next().value);
// console.log("Product Id", generateProfileId.next().value);
// console.log("Product Id", generateProfileId.next().value);
// console.log("Product Id", generateProfileId.next().value);

// Difference between Async Iterator and async generator
