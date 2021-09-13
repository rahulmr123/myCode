//To sort 1s and 0s in one iteration.
const Sort10 = (inputArray) => {
    let i = 0;
    let j = inputArray.length - 1;

    while(i <= j) {
        if(inputArray[i] > inputArray[j]) {
            [inputArray[i], inputArray[j]] = [inputArray[j], inputArray[i]];
            i = i+1;
            j = j - 1;
        } else if(!inputArray[i]) {
            i = i+1;
        } else {
            j = j-1;
        }
        // these are the test cases for me
        // if(inputArray[i] < inputArray[j]) {
        //     i = i+1;
        // }
        // if((inputArray[i] === inputArray[j]) && inputArray[i] === 1){
        //     j = j - 1;
        // } 
        // if((inputArray[i] === inputArray[j]) && inputArray[i] === 0){
        //     i = i+1;
        // }

    }
    console.log(inputArray);

}
Sort10([0,0,1,0,1,1,0,1,0,0,1,0,1]);
Sort10([1,0,1]);