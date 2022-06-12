function encrypt(text, s) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char == char.toUpperCase()) {
      let ch = String.fromCharCode(((char.charCodeAt(0) + s - 65) % 26) + 65);
      result += ch;
    } else {
      let ch = String.fromCharCode(((char.charCodeAt(0) + s - 97) % 26) + 97);
      result += ch;
    }
  }
  return result;
}

let text1 = "Salam";
let s1 = 4;
encrypt(text1, s1);
