/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//implement function search that takes two parameters, an array and a string
function search(array, string){
    //loops through the input array animals
    for (let i = 0; i < array.length; i++){
        //check if name string is equal to the name property of the current iterated object in the array
        if (string === array[i]['name']){
            console.log("animals: " + array[i])
            //return the animal object at that index
            return array[i];
        }
            
        }
        return null;
    }


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//creates a function that takes an array, a string, and an object as parameters
function replace(array, string, object){
    //loop through the animals array
    for (let i = 0; i < array.length; i++){
        //check if the string is equal to the name property of the current iterated object
        if (string === array[i]['name']){
            array[i] = object;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(array, string){
    //loops through the animals array
    for (let i = 0; i < array.length; i++){
        //check if the string is equal to the name property of the current iterated object
        if(string === array[i]['name']){
            array.splice(i, 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(array, object){
    //checks if the name and species properties have lengths greater than 0
    if (object.name.length > 0 && object.species.length > 0){
        //create a cumulative check variable
        let check = true;    
        //loop through the array
        for (let i = 0; i < array.length; i++){
            //if the object name property is the same as the array name property, check becomes false
            if (object.name === array[i].name){
                check = false;
            }
        //only push the object to the array if check remains true.
        if (check === true){
            array.push(object);
        }
        }

        }
        }


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}