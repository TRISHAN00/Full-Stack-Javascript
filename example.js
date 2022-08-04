// Roast Map
// 1. User => user post => user comments => user first comment

const axios = require("axios").default;

const USER_URL = `https://jsonplaceholder.typicode.com/users`;
const USER_POST = `https://jsonplaceholder.typicode.com/posts`;
const USER_COMMENTS = `https://jsonplaceholder.typicode.com/comments`;

async function getComments(username) {
  try {
    const { data: user } = await axios.get(`${USER_URL}?username=${username}`);
    const { data: posts } = await axios.get(
      `${USER_POST}?userId=${user[0].id}`
    );
    const { data: comments } = await axios.get(
      `${USER_COMMENTS}?userId=${posts[0].id}`
    );
    console.log(comments);
  } catch (e) {
    console.log(e, "Error");
  }
}

getComments("Bret");
