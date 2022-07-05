// // // // const menuBuilder1 = {
// // // //   firstName: "Trishan",
// // // //   lastName: "Saha",
// // // //   age: 28,
// // // //   position: "MENU BUILDER",
// // // //   email: "trishan.saha@quantanite.com",
// // // // };
// // // // const menuBuilder2 = {
// // // //   firstName: "Memesa",
// // // //   lastName: "Chakma",
// // // //   age: 27,
// // // //   position: "MENU BUILDER",
// // // //   email: "memesa.chakma@quantanite.com",
// // // // };

// // // // const menuBuilder3 = {
// // // //   firstName: "Hamidul",
// // // //   lastName: "Hasan",
// // // //   age: 25,
// // // //   position: "MENU BUILDER",
// // // //   email: "hamidul.hasan@quantanite.com",
// // // // };

// // // // const menuBuilders = [menuBuilder1, menuBuilder2, menuBuilder3];

// // // // for (let i = 0; i < menuBuilders.length; i++) {
// // // //   console.log(menuBuilders[i].firstName);
// // // // }
// // // // function sendEmail(email) {
// // // //   console.log("Sending email to", email);
// // // // }

// // // // const scores = [10, 20, 30, 10, 40, 20];
// // // // const names = ["Trishan", "Rishan", "Sakib"];

// // // // console.log(scores.indexOf(40));

// // // // if (names.indexOf !== -1) {
// // // //   console.log(names.indexOf("Trishan"));
// // // // } else {
// // // //   console.log("Please put valid name");
// // // // }

// // // // let chars = ["A", "B", "A", "C", "B"];
// // // // let uniqueChars = [...new Set(chars)];

// // // // // console.log(uniqueChars);

// // // // const scores = [10, 20, 30, 10, 40, 20, 20];

// // // // let sum = 0;

// // // // scores.forEach((v, i) => {
// // // //   if (i <= 3) {
// // // //     sum = sum + v;
// // // //   }
// // // // });

// // // // console.log(sum);

// // // // const arr = [30, "one", null, "two", null, "three", null, false, "", 10];

// // // // const result = [];

// // // // arr.forEach((element) => {
// // // //   // if (element !== null && element !== false && element !== String(element)) {
// // // //   //   result.push(element);
// // // //   // }
// // // //   if (typeof element !== Number) {
// // // //     result.push(element);
// // // //   }
// // // // });

// // // // console.log(result);

// // // const arr = [1, 2, 3, null, false, 4, 5, "", "test", 6, 7];

// // // // for (let i = 0; i < arr.length; i++) {
// // // //   if (typeof arr[i] !== "number") {
// // // //     for (let j = i; j < arr.length - 1; j++) {
// // // //       arr[j] = arr[j + 1];
// // // //     }
// // // //   }
// // // // }

// // // const newArr = [];

// // // for (let i = 0; i < arr.length; i++) {
// // //   if (typeof arr[i] === "number") {
// // //     newArr.push(arr[i]);
// // //   }
// // // }

// // // // console.log(newArr);

// // // const managements = [
// // //   { id: 2653, name: "Maysha Rahman", position: "Sr. Manager" },
// // //   { id: 2655, name: "Arman", position: "Manager" },
// // //   { id: 1200, name: "Arannay Aritro", position: "Team Leader" },
// // //   { id: 1275, name: "Asim Alyus", position: "Team Leader" },
// // //   { id: 1485, name: "Nawjish", position: "Team Leader" },
// // //   { id: 2653, name: "Trishan Saha", position: "Analyst" },
// // // ];

// // // const index = managements.findIndex((v) => v.id === 2653);

// // // // console.log(arr1);
// // // // console.log(managements);

// // // const duplicateValue = managements.filter((item, index) => {
// // //   return item.id === 2653;
// // // });

// // // const newArr1 = duplicateValue.splice(0, 1);
// // // // console.log(newArr1);
// // // console.log(managements);

// // // // console.log(index);

// // // // managements[index].position = "Manager";

// // // // console.log(managements);

// // // const obj = {
// // //   name: "Jhon",
// // //   designation: "Associate",
// // //   joiningDate: new Date(),
// // // };

// // // console.log(obj.joiningDate.toDateString());

// // /*
// //   - Uniq ID
// //   - Name
// //   - Email
// //  */

// // function uuid(mask = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx") {
// //   return `${mask}`.replace(/[xy]/g, function (c) {
// //     var r = (Math.random() * 16) | 0,
// //       v = c == "x" ? r : (r & 0x3) | 0x8;
// //     return v.toString(16);
// //   });
// // }

// // const employers = [
// //   {
// //     id: "a7d31a8a-5790-4f61-bc11-cb9025c268c0",
// //     name: "Hamidul Hasan",
// //     email: "hamidul.hasan@quantanite.com",
// //   },
// //   {
// //     id: "5a1edc12-aed1-4238-a04e-e963a2f24496",
// //     name: "Trishan Saha",
// //     email: "trishan.saha@quantanite.com",
// //   },
// //   {
// //     id: "0b58237b-bafb-4530-a05e-765d54071707",
// //     name: "Sayem Talukder",
// //     email: "sayem.talukder@quantanite.com",
// //   },
// //   {
// //     id: "917b24c4-3196-4651-a25c-932209cfc9b3",
// //     name: "Memesa Chakma",
// //     email: "memesa.chakma@quantanite.com",
// //   },
// // ];

// // // Create a data in Array
// // // employers.push({
// // //   id: uuid(),
// // //   name: "Memesa Chakma",
// // //   email: "memesa.chakma@quantanite.com",
// // // });

// // // Update data
// // const updatedId = "917b24c4-3196-4651-a25c-932209cfc9b3";
// // const updatedEmailName = {
// //   name: "Akhi Akter",
// //   email: "akhi.akter@quantanite.com",
// // };

// // const newEmploy = {
// //   id: uuid(),
// //   name: "Sabah Mushfia",
// //   email: "sabah.mushfia@quantanite.com",
// // };

// // const index = employers.find((item) => {
// //   return item.id === updatedId;
// // });

// // // update
// // index.name = updatedEmailName.name;
// // index.email = updatedEmailName.email;

// // // Create
// // employers.push(newEmploy);

// // // Delete
// // const deletedIndex = "a7d31a8a-5790-4f61-bc11-cb9025c268c0";
// // employers.splice(deletedIndex, 1);

// // const employersObj = {
// //   "a7d31a8a-5790-4f61-bc11-cb9025c268c0": {
// //     id: "a7d31a8a-5790-4f61-bc11-cb9025c268c0",
// //     name: "Hamidul Hasan",
// //     email: "hamidul.hasan@quantanite.com",
// //   },
// //   "5a1edc12-aed1-4238-a04e-e963a2f24496": {
// //     id: "5a1edc12-aed1-4238-a04e-e963a2f24496",
// //     name: "Trishan Saha",
// //     email: "trishan.saha@quantanite.com",
// //   },
// //   "0b58237b-bafb-4530-a05e-765d54071707": {
// //     id: "0b58237b-bafb-4530-a05e-765d54071707",
// //     name: "Sayem Talukder",
// //     email: "sayem.talukder@quantanite.com",
// //   },
// //   "917b24c4-3196-4651-a25c-932209cfc9b3": {
// //     id: "917b24c4-3196-4651-a25c-932209cfc9b3",
// //     name: "Memesa Chakma",
// //     email: "memesa.chakma@quantanite.com",
// //   },
// // };

// // const newEmployedObj = {
// //   id: uuid(),
// //   name: "Tanvir Rahma",
// //   email: "tanvir.rahman@quantanite.com",
// // };

// // employersObj[newEmployedObj.id] = newEmployedObj;

// // // console.log(employersObj);

// // // update
// // const idToBeUpdate = "917b24c4-3196-4651-a25c-932209cfc9b3";
// // const updatedData = {
// //   name: "Rishan Saha",
// //   email: "rishan.saha@quantanite.com",
// // };
// // employersObj[idToBeUpdate] = {
// //   ...employersObj[idToBeUpdate],
// //   ...updatedData,
// // };
// // // console.log(employersObj[idToBeUpdate]);

// // // delete data
// // delete employersObj[idToBeUpdate];
// // // console.log(employersObj);

// // // get data
// // const getData = "0b58237b-bafb-4530-a05e-765d54071707";
// // // console.log(employersObj[getData]);

// // // how to get key of id
// // for (let key in employersObj) {
// //   // console.log(employersObj[key].name);
// // }

// // // trave
// // Object.keys(employersObj).forEach((key) => {
// //   const employ = employersObj[key];

// //   // console.log(
// //   //   `The name of Employer is (${employ.name}) and his/her Email: ${employ.email}`
// //   // );
// // });

// // // find data using Object.value it works directly find the data from.
// // Object.values(employersObj).forEach((item) => {
// //   console.log(`Employ name ${item.name} and Email is ${item.email}`);
// // });

// let maxSpeed = {
//   car: 300,
//   bike: 60,
//   motorbike: 200,
//   airplane: 1000,
//   helicopter: 400,
//   rocket: 8 * 60 * 60,
// };

// let sortable = [];

// for (const vehicle in maxSpeed) {
//   sortable.push([vehicle, maxSpeed[vehicle]]);
// }

// sortable.sort((a, b) => {
//   return a[1] - b[1];
// });

// // console.log(sortable);

// const data = [1, 2, 3, false, null, "", 4, 5, 6];

// const result = data.reduce((acc, curr) => {
//   if (curr) {
//     acc.push(curr.toString());
//   }
//   return acc;
// }, []);

// // console.log(result);

// const arr = [];
// for (let i = 1; i <= 10; i++) {
//   arr.push(i);
// }

// console.time("Not Optimized");
// arr.filter((item) => item % 2 === 0).map((item) => item * 2);
// // console.log(result);
// console.timeEnd("Not Optimized");

// console.time("Optimized");
// arr.reduce((acc, curr) => {
//   if (curr % 2 === 0) {
//     acc.push(curr * 2);
//   }
//   return acc;
// }, []);
// console.time("Optimized");

const multiplyData = [];
for (let i = 1; i <= 10; i++) {
  multiplyData.push(i);
}

const result = multiplyData.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    acc.push(curr * 2);
  }
  return acc;
}, []);

console.log(result);
