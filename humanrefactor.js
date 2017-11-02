class Human {
  constructor(full_name, age) {
    this.full_name = full_name;
    this.age = age;
  }

  sayName() {
    console.log("Hi, my name is " + this.full_name);
  }
  sayAge() {
    console.log("I'm " + this.age);
  }
}

class Developer extends Human {
  constructor(full_name, age) {
    super(full_name, age);
  }
}

var bob = new Developer();
bob.sayName();
bob.sayAge();
//ES3
 function Human(full_name, age) {
   this.full_name = full_name;
   this.age = age;
 }

 Human.prototype.sayName = function() {
   console.log("Hi, my name is " + this.full_name);
 }

 Human.prototype.sayAge = function() {
   console.log("I'm " + this.age);
 }

 function Developer() {
   this.constructor.call(this, "bob", 25)
 }

 Developer.prototype = new Human();
 var bob = new Developer();
 bob.sayName();
 bob.sayAge();
