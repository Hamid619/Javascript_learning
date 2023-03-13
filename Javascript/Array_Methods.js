// Array Methods

// ToString method
let num = [1,2,3,4,5];
console.log(num , typeof num);
let b = num.toString();

// Join method
console.log(b , typeof b);
let c = num.join("__");
console.log(c , typeof c);

// POP method
//num.pop();
let r = num.pop();
console.log(num , r);

// Push method
//num.push(500,600);
let r1 = num.push(7,8,9);
console.log(num , r1);

// Shift method
let shift = num.shift();
console.log(num , shift);

// Unshift method
let unshift = num.unshift(1000,2000,3000);
console.log(num ,unshift);