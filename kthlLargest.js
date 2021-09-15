const kthLargest = (inputArray, k) => {
    let i=0;
    let j = 0;
    let n = inputArray.length;
    let count = 0;

    for(i=0; i<n ; i++) {
        for(j=0; j<n; j++) {
            if(inputArray[i] > inputArray[j]){
                count++;
            }
        }
        if(count === (n-k)) {
            console.log(inputArray[i]);
            break;
        }
        count = 0;
    }

};
kthLargest([1,5,2,3,4,6], 2);
