function Filter(callback_Func, array) {
  let new_array = [];
  for (let i = 0; i < array.length; i++) {
    if (callback_Func(array[i])) {
      new_array.push(array[i]);
    }
  }

  return new_array;
}

function even(current_element) {
  {
    return current_element % 2 === 0;
  }
}

numbers = [1, 2, 3, 4, 5, 6];
Filter(even, numbers);
