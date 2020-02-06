// --------------------------------------
// Exercise 3 - Add numbers from string to float

var numberOne = "1.10";
var numberTwo = "2.30";

var addedNums = Number(numberOne) + Number(numberTwo)

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
console.log(average.toFixed(5));

// Show in the console the avg. with 5 decimals

// --------------------------------------

// --------------------------------------
// Exercise 6 - Get the character by index

var letters = "abc"
// Get me the character "c"

//var cLetterIndex = letters.indexOf("c"); // for getting index of c
var cLetterIndex = letters[2];

console.log("character at index 2 ('c'):", cLetterIndex);


// --------------------------------------
// Exercise 7 - Replace

var fact = "You are learning javascript!";
var factAltered = fact.replace("javascript", "Javascript");

console.log(factAltered);

// capitalize the J in Javascript

// --------------------------------------


