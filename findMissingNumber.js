const findMissingNumber = (input1, input2) => {
    const sum1 = input1.reduce((acc, item) => {
         return acc + item;
    }, 0);
    const sum2 = input2.reduce((acc, item) => {
        return acc + item;
   }, 0);
   console.log('Missing number is ', sum1 - sum2);
}

findMissingNumber([1,2,5], [1,2,4,5]);