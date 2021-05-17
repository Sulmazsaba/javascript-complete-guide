class Personcl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert("fullname is not correct!");
  }

  get fullName() {
    return this._fullName;
  }

  //static methods
  static hey() {
    console.log("hey");
  }
}

const jessica = new Personcl("Jess jozen", 1996);
console.log(jessica);

jessica.calcAge();
console.log(jessica.__proto__ === Personcl.prototype);

Personcl.prototype.greeting = function () {
  return `hello ${this.firstName}`;
};
// classes are not hoisted. we can't use function of class before declare it.
console.log(jessica.greeting());

// usage of getter and setter
console.log(jessica.age);
jessica.fullName = "hfhf hff";

Personcl.hey();
