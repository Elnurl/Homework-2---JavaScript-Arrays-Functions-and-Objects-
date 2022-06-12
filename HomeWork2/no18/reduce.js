function Reduce(callback_Func, array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = callback_Func(array[i], sum);
  }

  return sum;
}

function add(current_element, acc) {
  {
    return acc + current_element;
  }
}

numbers = [1, 2, 3, 4];

Reduce(add, numbers);
