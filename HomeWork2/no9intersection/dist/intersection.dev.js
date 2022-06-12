"use strict";

var arr1 = [1, 2, 3, 4, 5, 7];
var arr2 = [1, 51, 31, 4, 7, 8, 9];
newarr = [];

function intersection(array1, array2) {
  for (var i in array1) {
    for (var j in array2) {
      if (array1[i] == array2[j]) {
        newarr.push(array1[i]);
      }
    }
  }

  return newarr;
}

intersection(arr1, arr2);