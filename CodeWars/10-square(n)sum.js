// function squareSum(numbers) {
//   let total = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i] * numbers[i];
//   }
//   return total;
// }

// function squareSum(numbers) {
//   let sum = 0;
//   for (number of numbers) {
//     sum += number * number;
//   }
//   return sum;
// }

const squareSum = (numbers) => numbers.reduce((total, sqr) => total + sqr * sqr, 0); //menggunakan method reduce

console.log(squareSum([1, 2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));
