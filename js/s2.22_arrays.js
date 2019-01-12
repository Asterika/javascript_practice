/**********************
* Arrays
*/

//Ways to create an array:
//Initialize new array:
var names = ['John', 'Mark', 'Jane']; //much more used
var years = new Array(1990, 1969, 1948);

//call the entire array
console.log(names);
//access elements in an array
  //call name of array + place
console.log(names[0]);
//show how many elements in array
console.log(names.length);
//modify data in an array
names[1] = 'Ben';
console.log(names); // ["John", "Ben", "Jane"]
//add data to an array
names[names.length] = 'Mary';
console.log(names);
//another way to add data to an array
names.push('Ren');
console.log(names);

//DIFFERENT DATA TYPES
var john = ['John', 'Smith', 1990, 'teacher', false];

//Apply methods (functions specific to arrays)
//add element to end of array
john.push('blue');
//add data to beginning of an array
john.unshift('Mr.');
console.log(john);

//Remove items from an array
//remove element from end
john.pop();
//remove yet another from end
john.pop();
//remove element from front of array
john.shift();
console.log(john);

//get position of argument
console.log(john.indexOf(1990));
//if element is not in array, it will return a negative value:
console.log(john.indexOf(23));

//way to use ternary operator to return a value if certain conditions are met
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
