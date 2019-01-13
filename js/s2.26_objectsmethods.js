/*********************
* Objects and Methods
*/

var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  //function with no name, just argument
  calcAge: function(birthYear) {
    //this refers to john - the current object
    return 2018 - this.birthYear;
  }
};
//add a function/method to John object to calculate age:
// console.log(john.calcAge(1990));
console.log(john.calcAge());

//arrays are also objects

//to store this result into john object:
var age = john.calcAge();
john.age = age;
//OR
john.age = john.calcAge();
//OR, EVEN BETTER:
// line 15:
// this.age = 2018 - this.birthYear;
// john.calcAge();
// console.log(john);
