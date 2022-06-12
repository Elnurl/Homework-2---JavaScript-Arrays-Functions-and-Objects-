function Find(callback_Func, array) {
  for (let i = 0; i < array.length; i++) {
    if (callback_Func(array[i])) {
      return array[i];
    }
  }
}

function even(current_element) {
  {
    return current_element % 2 === 0;
  }
}

numbers = [1, 2, 3, 4, 5, 6];

Find(even, numbers);
