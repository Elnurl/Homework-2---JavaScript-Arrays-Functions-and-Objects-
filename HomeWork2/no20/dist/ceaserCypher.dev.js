"use strict";

function encrypt(text, s) {
  var result = "";

  for (var i = 0; i < text.length; i++) {
    var _char = text[i];

    if (_char == _char.toUpperCase()) {
      var ch = String.fromCharCode((_char.charCodeAt(0) + s - 65) % 26 + 65);
      result += ch;
    } else {
      var _ch = String.fromCharCode((_char.charCodeAt(0) + s - 97) % 26 + 97);

      result += _ch;
    }
  }

  return result;
}

var text1 = "Salam";
var s1 = 4;
encrypt(text1, s1);