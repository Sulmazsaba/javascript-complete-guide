const PersonPro = {
  calcAge() {
    return 2037 - this.birthYear;
  },
  init(firstName, birthYear) {
    this.birthYear = birthYear;
    this.firstName = firstName;
  },
};

const steve = Object.create(PersonPro);
