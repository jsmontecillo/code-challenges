// Write a function that takes a string as the argument.
// The function should return a number that is the number of characters in the string.
// Choose names that make the code easy to understand

//input: string
//output: number

function lengthOfString(str){
    return str.length;
}

console.log(lengthOfString("Janice"), "expected: 6");
console.log(lengthOfString(""), "expected: 0");
console.log(lengthOfString(" "), "expected: 1");
console.log(lengthOfString("Janice Montecillo"), "expected: 17");
console.log(lengthOfString("Hello, World!!!!!"), "expected: 17");
console.log(lengthOfString("..."), "expected: 3");
console.log(lengthOfString("123456789"), "expected: 9");