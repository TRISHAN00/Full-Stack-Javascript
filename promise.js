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
  await get(`/users?username=${username}`);
}
