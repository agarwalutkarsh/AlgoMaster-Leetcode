/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.length === 0) {
        return 0
    }
    let i = 0
    let j = nums.length - 1
    while(j > i) {
        if (nums[i] === val && nums[j] !== val) {
            let a = nums[i]
            nums[i] = nums[j]
            nums[j] = a
            i++
            j--
        } else if (nums[i] !== val && nums[j] === val) {
            i++
            j--
        } else if (nums[i] === val && nums[j] === val) {
            j--
        } else if (nums[i] !== val && nums[j] !== val) {
            i++
        }
    }
    return nums[i] === val ? i : i +1
};