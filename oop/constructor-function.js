"use strict";

const Person = function (firstName, lastName) {
  //instance properties
  this.firstName = firstName;
  this.lastName = lastName;

  //instance functions -- Do Not Add Function Here
  // this.fullName = function () {
  //   return this.firstName + " " + this.lastName;
  // };
};

const sulmaz = new Person("sulmaz", "saba");
console.log(sulmaz);
console.log(sulmaz instanceof Person);
console.log(Person.prototype);

// Add Function to prototype Instead
Person.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(sulmaz.fullName());
console.log(sulmaz.__proto__ === Person.prototype);
console.log(
  "Person.prototype.isPrototypeOf(sulmaz) :" +
    Person.prototype.isPrototypeOf(sulmaz)
);

console.log(
  "Person.prototype.isPrototypeOf(Person) :" +
    Person.prototype.isPrototypeOf(Person)
);

console.log(sulmaz.hasOwnProperty("firstName"));
console.log(
  'sulmaz.hasOwnProperty("FullName") :' + sulmaz.hasOwnProperty("FullName")
);

console.log("Person.prototype.constructor :" + Person.prototype.constructor);
console.log(sulmaz.__proto__.__proto__);
console.log(sulmaz.__proto__.__proto__.__proto__);

//static methods
Person.hey = function () {
  console.log("hey from static methods");
};

Person.hey();
