/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const numberMap = {};
  let maxNumber = null;
  let maxCount = null;

  for (const num of nums) {
    if (numberMap[num]) {
      numberMap[num] += 1;
    } else {
      numberMap[num] = 1;
    }
    if (numberMap[num] > maxCount) {
      maxNumber = num;
      maxCount = numberMap[num];
    }
  }
  return maxNumber;
};
