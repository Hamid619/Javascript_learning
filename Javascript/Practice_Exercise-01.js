// Q1 # Use Logical Operator to determine whether the age of the person lies between 10 & 20
const prompt = require("prompt-sync")();
/*let age = prompt("Please enter your Age:");
console.log("Hello, " + age + "!");
if(age>=10 && age<=20)
{
    console.log("Your Age is between 10 and 20")
}
else
{
console.log("Your age is not between 10 and 20")
}*/
//------------------------------------------------------------------------
// Q2 # Demonstrate the use of Switch statement
/*let Shoes = 'Puma';
switch (Shoes) {
    case 'Nike':
        console.log("Price of Nike is : 500$");
        break;
    case 'Adidas':
        console.log("Price of Adidas is : 1000$");
        break;
    case 'Puma':
        console.log("Price of Puma is : 2000$");
        break;
    default:
        console.log("Shoes is not available");
}*/
//------------------------------------------------------------------------
// Q3 # Write the program to check whether the number is divisible by 2 and 3.
/*let number = prompt("Enter a number: ");
if (number % 2 === 0 && number % 3 === 0) {
    console.log(`${number} is divisible by both 2 and 3.`);
} else {
    console.log(`${number} is not divisible by both 2 and 3.`);
}*/
//------------------------------------------------------------------------
// Q4 # Write a JavaScript Program to find whether a  number is divisible by either 2 or 3
/*let number = prompt("Enter a number: ");
if (number % 2 === 0 || number % 3 === 0) {
    console.log(`${number} is divisible by either 2 or 3.`);
} else {
    console.log(`${number} is not divisible by either 2 or 3.`);
}*/
//------------------------------------------------------------------------
// Q5 #
let age = parseInt(prompt("Enter your age: "));
let message = (age > 18) ? "You Can Drive" : "You Cannot Drive";
console.log(message);





