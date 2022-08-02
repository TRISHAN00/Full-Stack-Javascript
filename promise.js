/*
 * /users?username=[username]
 * /posts?user_id=[user_id]
 * /comments?post_id=[post_id]
 * /users?username[username]
 */

const get = (url) => Promise.resolve();

get(`/users?username=Trishan`)
  .then((user) => {
    // do all the function here
    return get(`/posts?user_id=${user.id}`);
  })
  .then((posts) => {
    const latestPost = posts[0];
    return get(`/comments?post_id=${latestPost.id}`);
  })
  .then((comments) => {
    const latestComments = comments[0];
    return get(`/users?username=${latestComments.username}`);
  })
  .then((user) => {
    console.log(user);
  })
  .catch(() => {
    console.log("Error");
  });

//   Async await

async function getUserName(username) {
  try {
    const mainUser = await get(`/users?username=${username}`);
    const posts = await get(`/comments?post_id=${mainUser.id}`);
    const comments = await get(`/comments?post_id=${posts[0].id}`);
    const user = await get(`/users?username=${comments[0].username}`);
    console.log(user);
  } catch (e) {
    console.log(e);
  }
}
