// ## Hints

// - Take note of the above function call- how exactly is it being called?

// - Create a variable to hold the string you're going to return, create a loop that repeats the given number of times and add the given string to the result on each loop.

// - If running `npm test repeatString.spec.js` returns results similar to the below, make sure you have enabled the rest of the tests, as described in the instructions above.

// ```
// Test Suites: 1 passed, 1 total
// Tests:       6 skipped, 1 passed, 7 total
// ```
//repeatString('hey', 3) // returns 'heyheyhey'
const repeatString = function(str1,num) {
    let str2="";//not have space
    for(let i=0;i<num;i++)
        str2+=str1;
    return str2;////not return repeatString

};

// Do not edit below this line
module.exports = repeatString;
