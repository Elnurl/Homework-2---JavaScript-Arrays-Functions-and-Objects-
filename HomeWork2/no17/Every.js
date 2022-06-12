function Every(callback_Func, array) {
  for (let i = 0; i < array.length; i++) {
    if (!callback_Func(array[i])) {
      return false;
    }
  }
  return true;
}

function greaterThan(current_element) {
  {
    return current_element > 0;
  }
}

numbers = [1, 2, 3, 4, 5, 6];

Every(greaterThan, numbers);
