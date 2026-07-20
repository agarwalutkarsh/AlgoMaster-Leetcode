/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // const addOne = (index, carry) => {
    //     if (index >= 0) {
    //         if (digits[index] !== 9) {
    //             digits[index] = digits[index] + carry
    //             return
    //         }
    //         digits[index] = 0
    //         addOne(index - 1, 1)
    //     } else {
    //         digits.push(0)
    //         digits[0] = 1
    //         return
    //     }
    // }
    // addOne(digits.length - 1, 1)
    // return digits
    let j = digits.length - 1
    if (digits[j] !== 9) {
            digits[j] = digits[j] + 1
            return digits
        }
    let carry = 0
    while(j>=0) {
        if (digits[j] !== 9) {
            digits[j] = digits[j] + carry
            return digits
        }
        digits[j] = 0
        carry = 1
        j--
    }
    if (carry === 1){
        digits.push(0)
        digits[0] = 1
    }
    return digits
};