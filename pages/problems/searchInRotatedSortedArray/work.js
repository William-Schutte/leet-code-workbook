/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return nums[0] === target ? 0 : -1;

  let rotationAngle = 0;
  while (nums[0] > nums[nums.length - 1]) {
    nums.unshift(nums.pop());
    rotationAngle++;
  }

  let low = 0;
  let high = nums.length - 1;

  while (high >= low) {
    const mid = Math.floor((high + low) / 2);
    if (nums[mid] === target) {
      return rotationAngle
        ? (mid + (nums.length - rotationAngle)) % nums.length
        : mid;
    } else if (target < nums[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search_good = function (nums, target) {
  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[low] <= nums[mid]) {
      // Left half is sorted
      if (nums[low] <= target && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      // Right half is sorted
      if (nums[mid] < target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
};
