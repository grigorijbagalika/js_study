function reduceArray(array) {
  "use strict";
  let total = 0;
  array.length;
  // Write code under this line
  for (const arr of array) {
    total += arr;
  }
  return total;
}

console.log(reduceArray([1, 2, 3]));
// 6

//console.log(reduceArray([-2, 0, 2]));
// 0

//console.log(reduceArray([1, 2, 2.5]));
// 5.5
