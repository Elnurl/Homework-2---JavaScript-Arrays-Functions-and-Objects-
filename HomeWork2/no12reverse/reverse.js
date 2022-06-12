const array = [1, 2, 4, 5, 6, 7, 8, 9];
function reverse(array) {
  var output = [];
  for (var i = array.length - 1; i > -1; i--) {
    output.push(array[i]);
  }
  return output;
}
reverse(array);
