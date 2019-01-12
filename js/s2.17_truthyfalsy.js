/*******************
* Truthy and Falsy Values
*/

//FALSY VALUES:
//will turn out to be false when evaluated in an if/else condition
// * undefined
// * null
// * 0
// * ''
// * NaN

//TRUTHY VALUES: ANY NOT FALSY VALUES

var height;

height = 23;
// will return variable is defined b/c it has a value
// height = 'twenty';
//will return variable is defined unless we provide an empty string
// height = 0;
// will return not defined b/c 0 = falsy value
//to override, set OR condition wherein 0 is a defined value:
if (height || height === 0) {
  console.log('Variable is defined');
} else {
  console.log('Variable has not been defined.');
}
// Variable has not been defined - var is declared but not defined

//EQUALITY OPERATORS:
// Here, we are comparing the variable height with value 23 above
// to height with a string of '23'
if (height == '23') {
  console.log('The == operator does type coercion!');
}
//this will turn out true b/c == allows a match even when data types are not the same
//in this case, JS converts the string '23' to a number
