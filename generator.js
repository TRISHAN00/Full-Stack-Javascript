const axios = require("axios").default;

async function getUsers() {
  const url = `https://jsonplaceholder.typicode.com/users`;
  const { data: users } = await axios.get(url);
  return users;
}

async function* getPostByUsers(users) {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  for (let i = 0; i < users.length; i++) {
    const { data: posts } = await axios.get(`${url}?userId=${users[i].id}`);
    yield posts;
  }
}

getUsers()
  .then(async (users) => {
    const userIterator = await getPostByUsers(users);

    await userIterator.next();
    await userIterator.next();
    await userIterator.next();

    console.log((await userIterator.next()).value);
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
