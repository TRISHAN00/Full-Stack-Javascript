const axios = require("axios").default;

const USERS_URL = `https://jsonplaceholder.typicode.com/users`;
const POST_URL = `https://jsonplaceholder.typicode.com/posts`;
const COMMENTS_URL = `https://jsonplaceholder.typicode.com/comments`;

async function getComments(username) {
  const { data } = await axios.get(`${USERS_URL}?username=${username}`);
  console.log(data);
}

getComments("Antonette");
