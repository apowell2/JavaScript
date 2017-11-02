// var cat = {
//             classification: 'mammal',
//             species: 'cat',
//             sound: 'my hats off',
//             takeOffHat: function(){
//               return this.sound;
//             }
//           }

var animal = {
            classification: "Please define a value for 'classification'.",
            species: "Please define a value for 'species'.",
            sound: "Please define a value for 'sound'.",
            makeSound: function(){
              return "Please define a function named 'makeSound' on my \"child\".";
            }
          }
var cat = Object.create(animal);
cat.species = "cat";
cat.printSpecies = function(){
  console.log("My species is a " + this.species);
}
cat.printSpecies();

cat.sound = "meow";
cat.makeSound = function(){
  console.log(this.sound);
}

cat.makeSound();

cat.classification = "mammal";
cat.whoAmI = function(){
  console.log("Hi, I am a " + this.classification + " called " + this.species + ".");
}

cat.classification();
