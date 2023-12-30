const removeFromArray = function(arr,...num) {
    let size=arr.length;
    for(target of num)
        for(let i=0;i<size;++i)
            if(arr[i]===target){
                arr.splice(i,1);
                size--;
                i--;
            }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
