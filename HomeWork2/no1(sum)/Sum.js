let array1 = [1, 3, 3, 5, 5, 12];
function sum(array) {
  var sumarr = 0;
  for (var i in array) {
    i = array[i];
    sumarr += i;
  }
  return sumarr;
  // console.log(sumarr);
}
sum(array1);
