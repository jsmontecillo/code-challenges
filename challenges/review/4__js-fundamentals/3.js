// 1. Create an array of numbers, (ex: [1, 2, 3])
// 2. Without using any math operators, write 5 statements:
//   - Return the first item in the array (ex: 1)
//   - Return the last item in the array (ex: 3)
//   - Add a new item to the end of the array (ex: [1,2,3,4])
//   - Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
//   - Return the first item from the first item in the array. (ex: "a")

let arrOfNums = [3,6,9,12,15];

const returnFirstItem = (arr) => arr[0];
console.log(returnFirstItem(arrOfNums), "expected: 3");

const returnLastItem = (arr) => arr[arr.length-1];
console.log(returnLastItem(arrOfNums), "expected: 15");

arrOfNums.push(18);
console.log(arrOfNums);

arrOfNums.unshift(["this", "is", "my", "other", "array"]);
console.log(arrOfNums);

const returnFirstItemInArray = (arr) => arr[0][0];
console.log(returnFirstItemInArray(arrOfNums), "expected: this");
