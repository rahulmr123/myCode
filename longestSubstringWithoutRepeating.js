const lengthOfLongestSubstring = (s) => {
    
    let i = 0;
    let j = 0;
    let strArray = s.split("");
    let result = 0;
    let tempArray = [];
    while(i <=strArray.length && j <= strArray.length){
        console.log('wwe',tempArray, j)
        if(tempArray.includes(strArray[j])) {
            result = tempArray.length > result ? tempArray.length : result;
            tempArray = [];
            tempArray = s.substring(i+1, j).split("").length === 0 ? [s[j++]] : s.substring(i+1, j).split("");
            i = i + 1;
            console.log('hoiiii')
        } else {
          
            if( j < strArray.length) {
                tempArray.push(strArray[j]);
                j = j + 1;
                console.log('else', tempArray, j)
            } else {
                result = tempArray.length > result ? tempArray.length : result;
              return result;
            }
        }
    }
    return result;
};

console.log(lengthOfLongestSubstring("dvdf"));