"use strict";

var array = [2, 3, 7, 9, 14];

function arithmeticMean(array) {
  var len = 0;

  for (var i in array) {
    i = array[i];
    len += i;
  }

  for (var j in array) {}

  j = parseInt(j);
  return len / (j + 1);
}

arithmeticMean(array);