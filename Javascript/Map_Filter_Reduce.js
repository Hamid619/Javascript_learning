let arr = [45 , 23 , 21];
// Array Map Method
let a = arr.map((value , index , array)=>{
    console.log(value , index , array);
    return value + 1;
});
console.log(a);

// Array Filter Method

let arr2 = [45 , 23 , 21 , 0 ,5 , 3];
let a2 = arr2.filter((a)=>{
    return a<25;
})
console.log(a2);

// Array Reduce Methods
let arr3 = [1,2,3,4,5];
let a3 = arr3.reduce((a,b)=>{
    return a+b;
})
console.log(a3);