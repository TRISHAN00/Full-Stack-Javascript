const axios = require("axios").default;

const url = "https://jsonplaceholder.typicode.com/posts";

async function getData() {
  const { data } = await axios.get(url);
  //   const result = data.slice(0, 2).map((item) => {
  //     return {
  //       userId: item.userId,
  //       id: item.id,
  //       title: item.title,
  //     };
  //   });

  const result = data.slice(0, 2).reduce((acc, cur) => {
    acc[cur.id] = { ...cur };
    delete acc[cur.id].body;
    return acc;
  }, {});
  return result;
}

// getData().then((data) => console.log(data));
//   .catch((er) => console.log(er));

const names = [
  "Akib",
  "Akter",
  "Bithi",
  "Alomgir",
  "Baccu",
  "Durga",
  "Elias",
  "Dighi",
  "Chaity",
  "Dola",
  "Chitra",
];

const namedGroup = names.reduce((acc, cur) => {
  const firstLetter = cur[0].toUpperCase();
  console.log(firstLetter);
  if (firstLetter in acc) {
    console.log("Found", firstLetter);
  } else {
    console.log("Not Found", firstLetter);
  }
  return acc;
}, {});

// console.log(namedGroup);
// console.log(namedGroup);
