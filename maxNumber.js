// function findMax(arr) {
//     return Math.max(...arr);
// }
// const numbers = [5, 2, 5, 6, 85, 74, 4, 2, 8, 99, 101]
// console.log(findMax(numbers));

// .................................................................

// function sumArray(arr) {
//     return arr.reduce((acc, curr) => acc + curr, 1);
// }

// const numbersArray = [1, 2, 3, 4, 5];

// console.log("Sum of array elements:", sumArray(numbersArray));

function sumOfArr(arr){
    return arr.reduce((a, b) => a + b, 0);

}
const numbers =[1,2,3]
console.log("sum of array ", sumOfArr(numbers));