const repeatString = function(word,times) {
    let ans='';
    if(times<0)
        return 'ERROR';
    while(times--){
        ans+=`${word}`;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
