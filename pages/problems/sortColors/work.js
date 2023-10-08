/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // Quicksort algorithm

  function swapElements(i, j) {
    const temp = nums[j];
    nums[j] = nums[i];
    nums[i] = temp;
  }

  function partition(start, end) {
    // Pivot point can be anywhere, it will get moved anyway
    let pivot = nums[end];

    let i = start - 1;
    // Iterate through array looking for smaller elements
    for (let j = start; j <= end - 1; j++) {
      if (nums[j] < pivot) {
        i++;
        swapElements(i, j);
      }
    }
    // Swap end with i + 1, now all elements to the left will be smaller
    swapElements(i + 1, end);
    return i + 1;
  }

  function quickSort(start, end) {
    if (start < end) {
      let partitionIndex = partition(start, end);

      quickSort(start, partitionIndex - 1);
      quickSort(partitionIndex + 1, end);
    }
  }

  quickSort(0, nums.length - 1);
  return nums;
};
