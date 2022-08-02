const axios = require("axios").default;

const USERS_URL = `https://jsonplaceholder.typicode.com/users`;
const POST_URL = `https://jsonplaceholder.typicode.com/posts`;
const COMMENTS_URL = `https://jsonplaceholder.typicode.com/comments`;

async function getComments(username) {
  const { data: user } = await axios.get(`${USERS_URL}?username=${username}`);
  const { data: post } = await axios.get(`${POST_URL}?userId=${user[0].id}`);
  console.log(post);
}

getComments("Bret");
