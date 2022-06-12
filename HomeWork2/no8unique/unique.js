let array = [1, 4, 4, 2, 3, 3, 5];
function unique(array) {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] == array[i + 1]) {
      delete array[i + 1];
      array.filter((n) => n);
    }
  }
  return array.filter(Number);
}
unique(array);
