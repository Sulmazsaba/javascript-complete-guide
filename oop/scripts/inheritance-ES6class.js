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

class Student extends Personcl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
}

const martha = new Student("Marthe Della", 1998, "Scientific fiction");
console.log(martha);
