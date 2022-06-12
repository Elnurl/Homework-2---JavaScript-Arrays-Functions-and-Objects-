let array1 = [4, 8];
let array2 = [2, 6];
function euclideanDistance(array1, array2) {
  var len = array1[0] - array2[0];
  var lim = array1[1] - array2[1];
  var rest = Math.pow(len, 2) + Math.pow(lim, 2);
  return Math.pow(rest, 0.5);
}
euclideanDistance(array1, array2);
