class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }
}

class EVCL extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    //chaing method
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} KM/H with charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCL("Rivian", 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian.accelerate().accelerate().chargeBattery(30).brake().brake();
