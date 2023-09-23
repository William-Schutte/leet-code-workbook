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

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate_with_set = function (nums) {
  const uniqueMap = new Set();

  for (const number of nums) {
    if (uniqueMap.has(number)) {
      return true;
    } else {
      uniqueMap.add(number);
    }
  }
  return false;
};
