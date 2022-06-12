let array = [25, 16, 12, 16];
function geometricMean(array) {
  var len = 1;
  for (var i in array) {
    len = len * array[i];
  }
  //   for (var j in array) {
  //   }
  //   j = parseInt(j);
  //   lim = 1 / (j + 1);
  i = parseInt(i);
  lim = 1 / (i + 1);
  return Math.pow(len, lim);
}
geometricMean(array);
