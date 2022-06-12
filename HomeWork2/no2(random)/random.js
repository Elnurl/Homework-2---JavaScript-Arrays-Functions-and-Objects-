function random(lower, upper) {
  let dif = upper - lower;
  return Math.floor(Math.random() * dif);
}
random(2, 8);
