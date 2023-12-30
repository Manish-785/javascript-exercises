const reverseString = word=> {
    const characters=word.split("");
    const reverses=[];
    for(let i=0;i<characters.length;++i)
        reverses[i]=characters[characters.length-i-1];
    return reverses.join('');
};

// Do not edit below this line
module.exports = reverseString;
