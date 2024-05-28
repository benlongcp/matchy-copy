/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//var animal creates an empty object
var animal = {};
//dot notation to add a species key and value
animal.species = "cat";
//bracket notation to add a name key and value
animal['name'] = "Fiddlesticks";
//dot notation to add an empty array
animal.noises = [];
//logs
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
noises[0] = "meow";
noises.push("purr");
noises.unshift("yowl");
noises[noises.length] = "hiss";

console.log(noises.length);
console.log(noises[length - 1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises;
animal['noises'].push("whine");
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */
//accessing properties in objects can use dot notation or bracket notation

//arrays only use bracket notation


/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//crates an empty array animals
var animals = [];
//pushes our animal object to the animals array
animals.push(animal);
console.log(animals);

//creates variable duck assigned to an object
var duck = {
  species: "duck",
  name: "Jerome",
  noises: ['quack', 'honk', 'sneeze', 'whoosh']
}

animals.push(duck);
console.log (animals);

var turtle = {
  species: "turtle",
  name: "Yurtle",
  noises: ["grumble", "moan", 'squeal', "chew"]
}

animals.push(turtle);
console.log(animals);

var seagull = {
  species: "seagull",
  name: "Garbaggio",
  noises: ["squawk", "screech", "vomit", "snap"]

}

animals.push(seagull);
console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 
//creates an empty array
var friends = [];

//creates a function that takes an array as its parameter
 function getRandom(array){
  //assign variable randIndex to the a random integer between 1 and 4
  var randIndex = Math.floor(Math.random() * array.length);
  //return the random index
  return randIndex


 } 
 //add a random animal from animals to the friends array
friends.push(animals[getRandom(animals)].name);
console.log("friends: " + friends);

//add the friends array as a key value in an animal
animals[0]['friends'] = friends;
console.log(animals[0]);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}