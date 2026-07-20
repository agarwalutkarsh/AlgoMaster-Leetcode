/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashmap = new Map()
    for (let i = 0; i< nums.length; i++) {
        const num1= nums[i]
        const req = target - num1
        if (hashmap.has(req)) {
            return [i, hashmap.get(req)]
        } else {
            hashmap.set(nums[i], i)
        }
    }
    return []
};