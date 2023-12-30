const sumAll = function(left,right) {
    let ans=0;
    if(left<0 || right<0 || !Number.isInteger(left) || !Number.isInteger(right))
        return "ERROR";
    if(left>right)
        return sumAll(right,left);
    while(left<=right){
        ans+=left;
        left++;
    }
    return ans;

};

// Do not edit below this line
module.exports = sumAll;
