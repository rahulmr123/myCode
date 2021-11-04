const lengthOfLongestSubstring = (s) => {
    
    let i = 0;
    let j = 0;
    let strArray = s.split("");
    let result = 0;
    let tempArray = [];
    while(i < strArray.length && j <= strArray.length){
        if(tempArray.includes(strArray[j])) {
            result = tempArray.length > result ? tempArray.length : result;
            tempArray = [];
            i = i +1;
            j=i;
        } else {
            tempArray.push(strArray[j]);
            j++;
            if( j === strArray.length) {
                result = tempArray.length > result ? tempArray.length : result;
                return result;
            }
        }
    }
    return result;
};

console.log(lengthOfLongestSubstring(''));