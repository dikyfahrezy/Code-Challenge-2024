// function removeChar(str) {
//   const berubah = str.split("");
//   berubah.shift();
//   berubah.pop();
//   return berubah.join("");
// }

const removeChar = (str) => str.slice(1, -1);

console.log(removeChar("eloquent"));
console.log(removeChar("country"));
console.log(removeChar("person"));
console.log(removeChar("place"));
console.log(removeChar("ooopsss"));
