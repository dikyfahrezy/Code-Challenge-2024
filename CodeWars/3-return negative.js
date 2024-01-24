// function makeNegative(num) {
//   return num > 0 ? num * -1 : num;
// }
function makeNegative(num) {
  return num > 0 ? -num : num;
}

// function makeNegative(num){    ------>>>> bagus tetapi tidak sesuai dengan yang ada di peraturan dimana tidak boleh -0
//     return -Math.abs(num)
// }

console.log(makeNegative(5));
console.log(makeNegative(0));
console.log(makeNegative(-10));
