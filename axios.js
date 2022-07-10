const axios = require("axios").default;

const url = "https://jsonplaceholder.typicode.com/posts";

async function getData() {
  const { data } = await axios.get(url);
  const result = data.map((item) => {
    return {
      userId: item.userId,
      id: item.id,
      title: item.title,
    };
  });
  return result;
}

getData()
  .then((data) => console.log(data))
  .catch((er) => console.log(er));
