// --------------------------------------
// Exercise 3 - Add numbers from string to float

var numberOne = "1.10";
var numberTwo = "2.30";

var addedNums = parseFloat(numberOne) + parseFloat(numberTwo)

console.log(addedNums);

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

var numberOne = "1.10";
var numberTwo = "2.30";

var addedNums = (parseFloat(numberOne) + parseFloat(numberTwo)).toFixed(2);
console.log(addedNums);

// --------------------------------------
// Exercise 5 - Decimals and average

var one = 10;
var two = 45;
var three = 98;

var average = +((one) + +(two) + +(three)) / 3;
console.log(average);

// Show in the console the avg. with 5 decimals

// --------------------------------------