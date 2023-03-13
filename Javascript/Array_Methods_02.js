// Array Methods_02

// Delete Operator
let array = [1,2,3,4,5,6,7,8,9];
console.log(array.length);
delete array[0];
console.log(array);
console.log(array.length);

// Concat method
let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
let arr3 = arr1.concat(arr2);
console.log(arr3);

// Sort method
let compare=(a,b)=>{
    return a-b;
}
let Reverse_Array = [9,8,7,6, 400000];
Reverse_Array.sort(compare);
console.log(Reverse_Array);

// Reverse method
Reverse_Array.reverse();
console.log(Reverse_Array);

// Splice method
let arr_name = [0,1,2,3,4,5,6,7,8,9];
let deleted_values = arr_name.splice(4,6,11,12,13,14,15);
console.log(arr_name  ,"\n",deleted_values);

// Slice method
let arr_name2 = [1,2,3,4];
let deleted_value2 = arr_name2.slice(2);
console.log(arr_name2 , deleted_value2);
