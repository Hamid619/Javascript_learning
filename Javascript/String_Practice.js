//PROBLEM NUMBER 1
console.log("PROBLEM NUMBER 1");
let str = "har\"";
console.log(str.length+"\n");

//PROBLEM NUMBER 2
console.log("PROBLEM NUMBER 2");
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'The';
console.log(sentence.includes(word));
console.log(sentence.startsWith(word));
console.log(sentence.endsWith(word));
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence` +"\n"  );

//PROBLEM NUMBER 3
console.log("PROBLEM NUMBER 3")
console.log(sentence.toUpperCase(word));
console.log(sentence.toLowerCase(word)+"\n" );

//PROBLEM NUMBER 4
console.log("PROBLEM NUMBER 4")
let str2 = "Please give Rupees 1000";
let amount= Number.parseInt(str2.slice("Please give Rupees".length));
console.log(amount);
console.log(typeof amount+"\n");

//PROBLEM NUMBER 5
console.log("PROBLEM NUMBER 5")
let Friend= "Hamid";
Friend[3] = "Z";
console.log(Friend); // Friend is not changed, because string is immutable
