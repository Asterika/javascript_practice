/*********************
* Functions - critical for DRY code
*/

//declare function, name of function, (argument - optional)
function calculateAge(birthYear) {
  return 2018 - birthYear;
}

//create a new function to store variable in
//call the function and pass in argument
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

//calculate years until retirement
function yearsToRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years.');
  } else {
    console.log(firstName + ' is already retired.');
  }
}

yearsToRetirement(1990, 'John');
yearsToRetirement(1948, 'Mike');
yearsToRetirement(1969, 'Jane');
