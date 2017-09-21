// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}
// Add your changeCompletely() function here:
function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}
<<<<<<< HEAD

var animals = ["dog", "cat", "squirrel"];

doToElementsInArray(animals, changeCompletely);

// log out animals -- pretty cool, right?
console.log(animals);
=======
 
var animals = ["dog", "cat", "squirrel"];
 
doToElementsInArray(animals, changeCompletely);
 
// log out animals -- pretty cool, right?
console.log(animals);
>>>>>>> 8691a991e20f8bae9a37f29fa802dd959089f8b9
