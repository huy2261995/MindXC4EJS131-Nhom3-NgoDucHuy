//Bài 1: Use for....in loop and recursive to get all keys of object
var user = {
  name: "Hieu",
  age: 18,
  appearence: {
    hairColor: "black",
    skinColor: "yellow",
    height: 1700,
    weight: 68,
  },
};

function recursive(target, results = []) {
  let keys = results;
  for (let key in target) {
    keys.push(key);
    if (typeof target[key] === "object") {
      recursive(target[key], keys);
    }
  }
  return keys;
}

console.log(recursive(user));

//Bài 2: Write function to insert element at index of array
let arrA = [21, 4, 5, -1];
function insertE(array, index, element) {
  array.splice(index, 0, element);
  return array;
}
console.log(insertE(arrA, 3, 99));
