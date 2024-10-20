//Strings in JavaScript cannot be reversed directly so you're going to have to split it into something else first.. do the reversal and then join it back together into a string.
//reverseString('hello there') // returns 'ereht olleh'
const reverseString = function(str) {
     let reversed_str="";
    // for(let i=str.length-1;i>=0;i--){
    //     reversed_str+=str.at(i);
    // }
    //or
    reversed_str=str.split("").reverse().join("");
    //NOTICE THE SEQUENCE:reversed_str=str.split("").join("").reverse();
    //First split each character,then reverse them,finally join the arrays to string
    return reversed_str;
};

// Do not edit below this line
module.exports = reverseString;
