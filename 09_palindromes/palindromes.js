// # Exercise 09 - Palindromes

// Write a function that determines whether or not a given string is a palindrome.

// A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

// ### some palindromes:
//   - A car, a man, a maraca.
//   - Rats live on no evil star.
//   - Lid off a daffodil.
//   - Animal loots foliated detail of stool lamina.
//   - A nut for a jar of tuna.

// ```javascript
// palindromes('racecar') // true
// palindromes('tacos') // false
// ```

const palindromes = function (str) {
    let cleaned_str=str.replace(/[\s\W]/g,"").toLowerCase();// /.../g means global
    // \s means spaces,\W means non-Word
    let i;
    for(i=0;i<(Math.floor((cleaned_str.length-1)/2));i++){
        if(cleaned_str[i]===cleaned_str[cleaned_str.length-1-i])continue;
        else return false;
    }
    if(i===Math.floor((cleaned_str.length-1)/2)) return true;
};

// Do not edit below this line
module.exports = palindromes;
/* 
const palindromes = function (string) {
  // Since we only consider letters and numbers, create a variable containing all valid characters
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

  // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
  const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

  // Create a new reversed string for comparison
  const reversedString = cleanedString.split('').reverse().join('');

  // Return the outcome of the comparison which will either be true or false
  return cleanedString === reversedString;
};

module.exports = palin

*/