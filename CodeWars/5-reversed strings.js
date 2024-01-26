function solution(str) {
  return str.split("").reverse().join("");
}
const newStr = (str) => str.split("").reverse().join(""); // versi arrow funtion

console.log(solution("world"));
console.log(newStr("Hello"));
function reverseString(str) {
  if (str === "") return "";
  else return reverseString(str.substr(1)) + str.charAt(0); // cara rekursif atau mengembalikan fungsi dirinya sendiri
}
console.log(reverseString("hello"));
