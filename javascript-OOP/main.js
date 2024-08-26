class Job {
  constructor(a, b) {
    this.name = a;
    this.age = b;
  }

  sayHello() {
    return "halo gaeess";
  }
}

class Programmer extends Job {
  constructor(a, b, c) {
    super(a, b);
    this.hobi = c;
  }
  myName() {
    return `my name is ${this.name}`;
  }
  myAge() {
    return `my age this year ${this.age}`;
  }
  myHobby() {
    return `my Hobby is a ${this.hobi}`;
  }
}

const tes = new Programmer("jamal", 18, "ngoding");
console.log(
  `${tes.sayHello()} ${tes.myName()} ${tes.myAge()} ${tes.myHobby()}`
);
