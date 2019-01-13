/*************************
* Objects and Properties
*/

//Objects have key-value pairs, key = name of object
//order doesn't matter like with 22_arrays

//OBJECT LITERAL - a 'container' we can fill with Properties
var john = {
  //key: value
  //firstName is a property of John value
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};
//access all properties of the object:
console.log(john);
//RETRIEVE DATA FROM AN OBJECT
//access one property in the object:
console.log(john.firstName);
//access one property take2:
//must use brackets + string
console.log(john['lastName']);
//access one property take3:
//set a variable
var x = birthYear;
console.log(john[x]);

//MUTATE DATA
john.job = 'designer';
john['isMarried'] = true;
//test mutated data
console.log(john);

//INITIALIZE A NEW OBJECT
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1984;
jane['lastName'] = 'Smith';
console.log(jane);
