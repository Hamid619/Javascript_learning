const prompt = require("prompt-sync")();
//Write a Program to print the marks of a student in an object using For Loop
obj = {
    harry: 98,
    Rohan: 70,
    Akash: 7
}
for (let key in obj) {
    console.log(`${key} : ${obj[key]}`)
}