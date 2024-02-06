// function SmallestIntegerFinder(args) {
//   args.sort(function (a, b) {
//     return a - b;
//   });
//   return args[0];
// }

// function SmallestIntegerFinder(args) {
//   return Math.min.apply(null, args);
// }

function SmallestIntegerFinder(args) {
  return Math.min(...args);
}

console.log(SmallestIntegerFinder([78, 56, 232, 12, 8]));
