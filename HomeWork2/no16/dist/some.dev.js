"use strict";

function Some(callback_Func, array) {
  for (var i = 0; i < array.length; i++) {
    if (callback_Func(array[i])) {
      return true;
    }
  }

  return false;
}

function greaterThan(current_element) {
  {
    return current_element > 5;
  }
}

numbers = [1, 2, 3, 4, 5, 6];
Some(greaterThan, numbers);