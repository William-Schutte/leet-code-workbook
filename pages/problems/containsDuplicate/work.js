/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const uniqueMap = {};

  for (const number of nums) {
    if (uniqueMap[number]) {
      return true;
    } else {
      uniqueMap[number] = true;
    }
  }
  return false;
};
