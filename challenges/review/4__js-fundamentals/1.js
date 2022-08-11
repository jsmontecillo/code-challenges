// Write a function below that accepts a number as the only argument.
// The function should determine whether the number is divisible by 3,
// and return either true or false.
// Choose names that make the code easy to understand.

//divisible === no remainder

function divisibleByThree(num){
    return num % 3 === 0 ? true : false;
}

console.log(divisibleByThree(3), "expected: true");
console.log(divisibleByThree(0), "expected: true");
console.log(divisibleByThree(30), "expected: true");
console.log(divisibleByThree(9), "expected: true");
console.log(divisibleByThree(17), "expected: false");
console.log(divisibleByThree(-3), "expected: true");
console.log(divisibleByThree(1), "expected: false");
//
// Note:  None of the review # problems have tests included, but feel free to write your own.
