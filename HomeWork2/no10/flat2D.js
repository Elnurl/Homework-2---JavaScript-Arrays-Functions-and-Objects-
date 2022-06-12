let arry = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// newarr = [];
// function flat2D(arr) {
//   for (let i in arr) console.log(i);
// }
// console.log(flat2D(arr));
// // ------ede bilmedim---------//
function f2d(a) {
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      arr.push(a[i][j]);
    }
  }
  return arr;
}
f2d(arry);
