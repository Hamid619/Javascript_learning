let marks_class_12 = [60 ,70 ,80 ,90 , null , false , "Hamid" ];
console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log(marks_class_12[6]);
console.log(marks_class_12[7]); //Undefined
console.log("The lenght of array class 12 is : " , marks_class_12.length);
marks_class_12[7] = 100; // Adding value
marks_class_12[0]=65; // Array are mutable and can be changed
console.log(marks_class_12);
console.log(typeof marks_class_12);