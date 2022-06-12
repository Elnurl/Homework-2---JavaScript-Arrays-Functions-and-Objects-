let adarray = ["Cəfər", "Aynur", "Leyla", "Zöhrə", "Günay"];
function pickOne(adarray) {
  var randElement = adarray[Math.floor(Math.random() * adarray.length)];
  return randElement;
}
pickOne(adarray);
