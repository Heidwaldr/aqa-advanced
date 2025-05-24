const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

console.log(person.country); // undefined
person.country = "USA";
console.log(person.country); // "USA"