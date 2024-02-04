// function repeatStr(n, s) {
//   let str = "";
//   for (let i = 1; i <= n; i++) {
//     str += s;
//   }
//   return str;
// }

const repeatStr = (n, s) => s.repeat(n);  // menggunakan method repeat pada string dengan formulasi "string.repeat(number)""

console.log(repeatStr(3, "*"));
console.log(repeatStr(5, "#"));
