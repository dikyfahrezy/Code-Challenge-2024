// function positiveSum(arr) {
//   let sum = 0;
//   for (num of arr) {
//     if (num > 0) {
//       sum += num;
//     }
//   }
//   return sum;
// }

function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

console.log(positiveSum([-1, 2, 3, 4, 5]));
console.log(positiveSum([]));
