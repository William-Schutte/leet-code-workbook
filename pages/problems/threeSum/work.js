/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // Brute force approach. Does not finish in time. :(
  if (nums.length < 3) return;
  const answers = {};
  const testedMap = {};

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (testedMap[i]?.includes(j)) {
        continue;
      }
      for (let k = j + 1; k < nums.length; k++) {
        if (testedMap[i]?.includes(j)) {
          break;
        }
        if (nums[i] + nums[j] + nums[k] === 0) {
          testedMap[i] = testedMap[i] ? [...testedMap[i], j] : [j];
          const solution = [nums[i], nums[j], nums[k]];
          const key = solution.sort().toString();
          answers[key] = solution;
        }
      }
    }
  }
  arraySolutions = [];
  for (const value of Object.values(answers)) {
    arraySolutions.push(value);
  }
  return arraySolutions;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum_fast = function (nums) {
  if (nums.length < 3) return;
  const results = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // Because nums is sorted and we are adding left to right,
    // nums[i] must be negative or 0 to have a chance of sum == 0
    if (nums[i] > 0) break;
    // Once again, because sorted, repeats will be consecutive and can
    // be skipped
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        results.push([nums[i], nums[j], nums[k]]);

        // Now that we have a solution, we need to skip all the duplicates
        // and move j and k
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return results;
};
