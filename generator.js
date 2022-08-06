function* generatorId() {
  let index = 1;
  while (true) {
    yield index++;
  }
}

const generateUserId = generatorId();
const generateProfileId = generatorId();

console.log("User", generateUserId.next().value);
console.log("User", generateUserId.next().value);
console.log("User", generateUserId.next().value);
console.log("User", generateUserId.next().value);

console.log("Product Id", generateProfileId.next().value);
console.log("Product Id", generateProfileId.next().value);
console.log("Product Id", generateProfileId.next().value);
console.log("Product Id", generateProfileId.next().value);
