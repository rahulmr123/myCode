const sortedSquares = (nums) => {
    let i = 0;
    let j = nums.length - 1;
    let mid;
    let found;
    let result = nums.map((item) => Math.abs(item));
    //  console.log(result);
    while(i <= j) {
       mid = parseInt((i + j)/ 2);
       if(nums[mid]< 0){
           i = mid + 1;
       } else if(nums[mid] > 0) {
           j = mid -1;
       } else  {
           found = true;
           break;
       }
    }
     let pivot = found ? mid : i;
     console.log(pivot)
     let [leftArray, rightArray] = [result.slice(0, pivot).reverse(), result.slice(pivot, result.length)];
    let k = 0;
    let h = 0;
    let finalArray = [];
    console.log(leftArray, rightArray)
    while(k< leftArray.length && h < rightArray.length) {
        if(leftArray[k] <= rightArray[h]) {
            finalArray.push(leftArray[k]);
            k++;
        } else if(leftArray[k] >= rightArray[h]){
            finalArray.push(rightArray[h]);
            h++;
        } 
    }
    if(h !== rightArray.length){
        for(let f=h; f<rightArray.length; f++) {
            finalArray.push(rightArray[f]);
        }
    }
    if(k !== leftArray.length){
        for(let f=k; f<leftArray.length; f++) {
            finalArray.push(leftArray[f]);
        }
    }
    console.log(k , h, finalArray)
     
        return finalArray.map(i => i*i);
 };

 sortedSquares([-7,-3,2,3,11]);