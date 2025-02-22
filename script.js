// Primitive types
let userId = 71123456;
console.log("User ID : ", userId);
console.log("Type of User ID : ", typeof userId);

let userEmail = "abcd@gmail.com";
console.log("User Email : ", userEmail);
console.log("Type of User Email : ", typeof userEmail);

let isAuthenticated = false;
console.log("Value of Auth : ", isAuthenticated);
console.log("Type of Auth : ", typeof isAuthenticated);

let phoneNumber = null;
console.log("Value of Phone Number : ", phoneNumber);
console.log("Type of Phone Number : ", typeof phoneNumber);

let dob;

if (!dob) {
  // checking if the dob is null or undefined
  console.log("Value of dob : ", dob);
  console.log("Type of dob : ", typeof dob);
}

let uniqueId = Symbol("id");
console.log("Value of UID : ", uniqueId);
console.log("Type of UID  : ", typeof uniqueId);

// object types

let person = {
  name: "Thamindu",
  age: "31",
};

console.log(person.name);

let myArray = [1, 2, 3, 4, 5];
console.log("Value My Array: ", myArray);
console.log("Type My Array  : ", typeof myArray);

function greeting(name) {
  return `Hello ${name}`;
}

console.log("greeting : ", greeting("thamindu"));
console.log("Type greeting  : ", typeof greeting);

// Arrow function

const greeting2 = (name) => {};

console.log("greeting2 : ", greeting2("thamindu"));
console.log("Type greeting2  : ", typeof greeting2);

// Object Destructuring
const { name, age } = person;
console.log("name", name);
console.log("age", age);

// spread operator (es6)

let myArray2 = [1, 2, 3, 4, 5];
const myArray3 = [...myArray2, 6, 7, 8];

console.log(myArray3);

//DOM manipulation
// localStorage.setItem("userName", "Thamindu");
document.addEventListener("DOMContentLoaded", function () {
  const mainTitle = document.querySelector("#main-title");
  console.log(mainTitle);

  const button = document.getElementById("button");

  button.addEventListener("click", (ev) => {
    mainTitle.textContent = "Changed title";
  });
});
