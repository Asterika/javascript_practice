/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

//need to create a function that will calculate tip
function calculateTip(bill) {
  var tip;

  if (bill < 50) {
    tip = 0.2;
  } else if (bill >= 50 && bill < 200) {
    tip = 0.15;
  } else {
    tip = 0.1;
  }
  return tip * bill;
}

//create arrays
var bills = [124, 48, 268];
var tips = [calculateTip(bills[0]),
            calculateTip(bills[1]),
            calculateTip(bills[2])];

var finalBills = [bills[0] + tips[0],
                 bills[1] + tips[1],
                 bills[2] + tips[2]];

console.log(tips, finalBills);
