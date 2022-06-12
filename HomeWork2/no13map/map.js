function Map(callback_Func, array) {
  let new_array = [];
  for (let i = 0; i < array.length; i++) {
    new_array.push(callback_Func(array[i]));
  }

  return new_array;
}

// given inputs:
function multiply(current_element) {
  return current_element * 2;
}

a = [1, 2, 3, 4, 5, 6];

Map(multiply, a);
