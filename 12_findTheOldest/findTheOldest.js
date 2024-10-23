// # Exercise 12 - Find the Oldest

// Given an array of objects representing people with a birth and death year, return the oldest person.

// Now that you've reached the final exercise, you should be fairly comfortable getting the information you need from test case(s). Take a look at how the array of objects is constructed in this exercise's test cases to help you write your function.

// ## Hints
// - You should return the whole person object, but the tests mostly just check to make sure the name is correct.
// - There are many ways of doing this using built-in array methods like `reduce`, or even chaining multiple! 
// - One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.
const getAge=function(birth,death){
    if(!death) death= new Date().getFullYear()
        return death-birth;
}
 const findTheOldest = function(people) {
    return people.reduce((oldest,current) => {
        const oldestAge=getAge(oldest.yearOfBirth,oldest.yearOfDeath);
        const currentAge=getAge(current.yearOfBirth,current.yearOfDeath);
        return currentAge>oldestAge?current:oldest;
    });
 }

// Do not edit below this line
module.exports = findTheOldest;
/* ALTERNATIVE SOLUTION
const getAge = function (person) {
  // The nullish coalescing assignment operator
  // only does the assignment if the left side is "nullish" (evaluates to undefined or null)
  // if the left side has any other value, no assignment happens
  // here, we use ??= to set the current year for our subtraction below only if there is no year of death
  person.yearOfDeath ??= new Date().getFullYear();

  return person.yearOfDeath - person.yearOfBirth;
};

const findTheOldest = function (people) {
  const peopleOldestToYoungest = people.toSorted(
    (person, nextPerson) => getAge(nextPerson) - getAge(person),
  );

  const oldestPerson = peopleOldestToYoungest[0];
  return oldestPerson;
};
*/

    
