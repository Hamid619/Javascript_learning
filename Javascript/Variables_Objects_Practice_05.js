// Q1) Create a variable of type String and try to add number to it
let a = "Hamid";
let b = 6;
console.log(a+b);
//------------------------------------------------------------------------
// Q2) Use typeof operator to find the type of the string in last question
console.log(typeof a);
console.log(typeof b);
console.log(typeof(a+b))
//------------------------------------------------------------------------
// Q3) Create a const object in javascript.Can you change it to hold a number later ?
// const a1={
//     name: "Harry",
//     section: 1,
//     Isprincipal:false
// }
//a1=54;
// I can not change it to older string later. It will say identifier has already been declared.
//------------------------------------------------------------------------
// Q4) Try to add a new key to the Const object in problem 3. Were you able to do it ?
const a1={
    name: "Harry",
    section: 1,
    Isprincipal:false
}
a1['Friend']='Shubhum';
a1['name']='Hamid';
console.log(a1);
//------------------------------------------------------------------------
// Q5) Write a javascript program to create a word-meaning dictionary of 5 words.
const dict = {
    a:"meaning A",
    b:"meaning B",
    c:"meaning C",
    d:"meaning D",
    e:"meaning E",
}
console.log(dict['a']);



