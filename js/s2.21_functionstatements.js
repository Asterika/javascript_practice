/**************************************
* Function Statements and Expressions
*/

//Function declaration
// function whatDoYouDo(job, firstName) {
// }

//Function expression - function is assigned to a variable
var whatDoYouDo = function(job, firstName) {
  switch(job) {
    case 'teacher':
      //can use return w/o break because it will find the first true case and exit
      return firstName + ' teaches kids how to code';
    case 'driver':
      return firstName + ' drives an uber in Lisbon';
    case 'designer':
      return firstName + ' designs beautiful websites';
    default:
    return firstName + ' does something else';
  }
}

console.log(whatDoYouDo('teacher', 'John')); //John teaches kids how to code
console.log(whatDoYouDo('designer', 'Jane')); //Jane designs beautiful websites
console.log(whatDoYouDo('retired', 'Mark')); //Mark does something else

//Statements and Expressions = global, don't just apply to 20_functions
//EXPRESSIONS ALWAYS PRODUCE A VALUE - anything that produces a value = an expression
  //in console: 2 + 3 //5 expression yields value
  //typeof 23
  //whatDoYouDo('teacher', 'John')

//STATEMENTS PERFORM ACTIONS BUT DO NOT PRODUCE IMMEDIATE RESULTS
    //i.e. for loop, if/else statement
    //in console - if (true) { console.log(23); } //statement does not return a result
