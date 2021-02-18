let nums = [3, 2, 4]
let target = 6;

var twoSum = function(nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] >= 0) hash[nums[i]] = [hash[nums[i]], i];
        else hash[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        let ele = nums[i];
        if (ele * 2 == target && hash[ele].length == 2) return hash[ele];
        if (hash[target - ele] >= 0 && hash[ele] != hash[target - ele]) {
            return [hash[ele], hash[target - ele]];
        }
    };
};
console.log(twoSum(nums, target));