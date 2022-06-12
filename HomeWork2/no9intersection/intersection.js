let arr1 = [1, 2, 3, 4, 5, 7];
let arr2 = [1, 51, 31, 4, 7, 8, 9];
newarr = [];
function intersection(array1, array2) {
  for (let i in array1) {
    for (let j in array2) {
      if (array1[i] == array2[j]) {
        newarr.push(array1[i]);
      }
    }
  }
  return newarr;
}
intersection(arr1, arr2);
