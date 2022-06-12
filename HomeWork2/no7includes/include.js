// let array = [1, 3, 56, 8, 12, 45, 6];
// function include(array) {
//   let result = array.includes(6);
//   return result;
// }
include(array);
function include(array, number) {
  for (let i in array) {
    i = array[i];
    if (number == i) {
      return true;
    }
  }
  return false;
}
include(array, 7);
