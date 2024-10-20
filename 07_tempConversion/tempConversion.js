// # Exercise 07 - tempConversion

// Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:
// ```
// convertToCelsius(32) // fahrenheit to celsius, should return 0

// convertToFahrenheit(0) // celsius to fahrenheit, should return 32
// ```

// Because we are human, we want the result temperature to be rounded to one decimal place: i.e., `convertToCelsius(100)` should return `37.8` and not `37.77777777777778`.

// This exercise asks you to create more than one function so the `module.exports` section of the main javascript file looks a little different this time. Nothing to worry about, we're just packaging both functions into a single object to be exported.

// ## Hints
// - You can find the relevant formulae on [Wikipedia](https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature).

// - Try to find by yourself on the Internet how to round a number to 1 decimal place in JavaScript. If you struggle, have a look [here](https://stackoverflow.com/q/7342957/5433628).


const convertToCelsius = function(fahrenheit) {
    celsius=Math.round((fahrenheit-32)*5/9*10)/10;
    return celsius;
};

const convertToFahrenheit = function(celsius) {
  fahrenheit=Math.round((celsius*9/5 + 32)*10)/10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
