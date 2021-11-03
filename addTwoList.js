const addTwoNumbers = function(l1, l2) {
    let i = 0;
    let sum = 0;
    let carry = 0;
    let k = 0;
    const result = [];
    while(i <= (l1.length || l2.length)) {
        sum = (l1[i] || 0) + (l2[i] || 0) + carry;
        if(sum >= 10) {
           result[k++] = sum  % 10;
           carry = parseInt(sum/10);
        } else {
            result[k++] = sum;
        }
        i++; sum = 0;
        
    };
    return result;
  
};

const output = addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]);
const output2 = addTwoNumbers([0], [0]);

console.log(output, output2);