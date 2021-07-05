'use strict'

function caesar(str, key) {
  const regex = /^[A-Z]+$/i;
  let output = '';
  str.split('').forEach(letter => {
    regex.test(letter) ?
      output += String.fromCharCode(((letter
        .toUpperCase()
        .charCodeAt() - 65 + (key + 26)) % 26) + 65)
      : output += letter;
  })
  return output;
};
