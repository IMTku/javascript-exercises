//sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
const sumAll = function(start,end) {
    if(start<0||end<0)return "ERROR";
    if(!Number.isInteger(start)||!Number.isInteger(end)) return "ERROR";
    if(start>end){
        let buffer=start;
        start=end;
        end=buffer;
    }
    let sum=0;
    for(let i=start;i<=end;i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
