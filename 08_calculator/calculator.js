// The goal for this exercise is to create a calculator that does the following:

// add, subtract, get the sum, multiply, get the power, and find the factorial

// In order to do this please fill out each function with your solution. Make sure to return the value so you can test it in Jest! To see the expected value
// take a look at the spec file that houses the Jest test cases.
const add = function(n1,n2) {
    return n1+n2;
};

const subtract = function(n1,n2) {
    return n1-n2;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);

  // let sum_up=parseInt(0);
  // for(item of n){
  //   sum_up+=parseInt(item);
  // }
  // return sum_up;
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current);
  // let sum=1;
  // for(item of n){
  //   sum*=item;
  // }
  // return sum;
  
};

const power = function(a,b) {
  return Math.pow(a, b);
//   let result=1;
// 	for(let i=0;i<floor;i++){
//     result*=indice;
//   }
//   return result;
 };

const factorial = function(n) {
   if(n===1||n===0) {return 1;}
	 else if(n>0) return n*factorial(n-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
