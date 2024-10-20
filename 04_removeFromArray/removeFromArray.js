// removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
// ## Hints

// The first test on this one is fairly easy, but there are a few things to think about(or google) here for the later tests:

// - you can manipulate the original array you pass into the function call or create a new array that is returned as the result.
// - how to remove a single element from an array
// - how to deal with multiple optional arguments in a javascript function
// - For more information, check out MDN's page on [function arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) - scroll down to the bit about `Array.from` or the spread operator. You can also check out MDN's page on [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).

//only passes test 1,can not deal with multiple arguments
const removeFromArray = function(originalArray,...num) {
    for(let i=0;i<originalArray.length;i++){
        if(num.includes(originalArray[i])){//there are multiple num,
            //so can't use if(originalArray===num)
            originalArray.splice(i,1);
            i--;//adjust the index
        }
        
    }
    return originalArray;
};
/*or
 function removeFromArray(originalArray, ...valuesToDelete) {
     return originalArray.filter(item => !valuesToDelete.includes(item));
 }*/
/*or
 function removeFromArray(originalArray){
     const valuesToDelete=Array.prototype.slice.call(arguments,1);
    return originalArray.filter(item=>!valuesToDelete.includes(item));//Since filter() already includes the iteration logic, using forEach() would be redundant and less efficient.
}*/

/*or

const removeFromArray = function (array, ...args) {
    // create a new empty array
    const newArray = [];
    // use forEach to go through the array
    array.forEach((item) => {
      // push every element into the new array
      // UNLESS it is included in the function arguments
      // so we create a new array with every item, except those that should be removed
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    // and return that array
    return newArray;
  };*/
module.exports = removeFromArray;
