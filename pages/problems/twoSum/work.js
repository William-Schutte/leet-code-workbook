/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum_simple = function (nums, target) {
  const lastIndex = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = lastIndex; j > i; j--) {
      const sum = nums[i] + nums[j];

      if (sum === target) {
        return [i, j];
      }
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum_advanced = function (nums, target) {
  const numberMap = {};

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];

    if (numberMap[difference] != undefined) {
      return [i, numberMap[difference]];
    } else {
      numberMap[nums[i]] = i;
    }
  }
};
