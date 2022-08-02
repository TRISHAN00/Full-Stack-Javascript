const axios = require("axios").default;

const USERS_URL = `https://jsonplaceholder.typicode.com/users`;
const POST_URL = `https://jsonplaceholder.typicode.com/posts`;
const COMMENTS_URL = `https://jsonplaceholder.typicode.com/comments`;

async function getComments(username) {
  try {
    const { data: user } = await axios.get(`${USERS_URL}?username=${username}`);
    const { data: posts } = await axios.get(`${POST_URL}?userId=${user[0].id}`);
    const { data: comments } = await axios.get(
      `${COMMENTS_URL}?postId=${posts[0].id}`
    );
    console.log(comments);
  } catch (e) {
    console.log(e);
  }
}

getComments("Bret");
