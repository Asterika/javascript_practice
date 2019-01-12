/********************
* Ternary Operators & Switch Statements
*/

var firstName = 'John';
var age = 16;

//Ternary = 3 conditions acting on operator
//set condition
age >= 18
//if block
? console.log(firstName + ' drinks beer.')
//else block result if condition is true
: console.log(firstName + ' drinks juice.');
// age >= 18 ? console.log(firstName + ' drinks beer.')
// : console.log(firstName + ' drinks juice.');

//Assign values to ternary operators
//best for simple situations
var drink = age >= 18 ? 'beer' : 'juice';
console.log(firstName + ' drinks ' + drink + '.');

//Alternative - if/else without ternary operators
// if (age >= 18) {
//   var drink = 'beer';
// } else {
//   var drink = 'juice';
// }

//Alternative - switch statement = multiple if/else statements
//switch a variable and compare all cases to that variable
var job = 'instructor';
switch (job) {
  case 'teacher':
  //can add additional case to execute another block of code
  case 'instructor':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber in Lisbon');
    break;
  case 'designer':
    console.log(firstName + ' designs beautiful websites');
    break;
  default:
    console.log(firstName + ' does something else.');
}

//GOAL: REPLACE FOLLOWING IF/ELSE STATEMENT WITH SWITCH STATEMENT
// var firstName = 'John';
// var age = 16;
//
// if (age < 13) {
//   console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) { //Between 13 and 20 = age >= 13 AND age < 20
//   console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + ' is a young man.');
// } else {
//   console.log(firstName + ' is a man.');
// }

age = 10;
//compare each of the expressions to 'true'
switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
  default:
    console.log(firstName + ' is a man.');
}
