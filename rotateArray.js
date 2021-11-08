const  rotate = (nums, k) => {
    // let last = nums.length;
    // let movingArray = nums.slice(last-k, last);
    // console.log(movingArray)
    // return [...movingArray, ...nums.slice(0, last-k)];
    let last = nums.length;
    let movingArray = [];
    if((last - k) < 0) {
         Math.abs((last -k))%2 === 0 ? nums : nums.reverse();
    } else {
        movingArray = nums.splice(0, last-k);
        nums.push(...movingArray);
    }
    return nums
};
const result = rotate([1,2], 3);
console.log(result);