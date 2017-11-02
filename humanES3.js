function Human(full_name, age){
  this.full_name = full_name;
  this.age = age;
}

Human.prototype.sayName = function(){
  console.log("Hi, my name is " + this.full_name);
}

Human.prototype.sayAge = function(){
  console.log("I'm " + this.age);
}

var human = new Human("Jon", "23");
human.sayName();
human.sayAge();

function Developer(){
  this.constructor.call(this, "Aliya", "24");
}

Developer.prototype = new Human();

var developer = new Developer();
developer.sayName();
developer.sayAge();
