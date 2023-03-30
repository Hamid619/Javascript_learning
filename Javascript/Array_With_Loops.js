let array = [1,2,3,4,5];
for (let i=0;i<array.length;i++)
{
    console.log(array[i]);
}

// ForEach Loop
array.forEach((element)=>{
    console.log(element*element);
})

// Array.From
let name = "Hamid";
let arr = Array.from(name);
console.log(arr);

// For of
for (let i of array) // We mostly used it and it is shortcut of loop
{
    console.log(i);
}

// For in
for (let i in array)   // Give keys
{
    console.log(i);
}