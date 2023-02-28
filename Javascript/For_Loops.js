const prompt = require("prompt-sync")();
/*let sum=0;
let n = prompt("Enter the value of n :")
for (let i = 0; i<n ; i++ )
{
    sum += i+1;
    console.log((i+1) , "+")
}
console.log("Output of Sum Number is : " + sum);*/

//------------------------------------------------------------------------

/*let n = prompt("Enter the value of n: ");
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}

console.log(`The factorial of ${n} is ${factorial}`);
 */

//------------------------------------------------------------------------

let obj ={
    Hamid : 10,
    Zaib :20,
    Ahmed : 30,
    Ahmed1 : 40
}
for (let a in obj) {
    console.log("Mark of " + a + " is " + obj[a]);
}

for (let b of "Hamid"){
        console.log(b);
}