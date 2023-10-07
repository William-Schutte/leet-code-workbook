/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const answers = [];

  function getPermutations(remainingNums, currentPerm) {
    // If we are at the end of the list, return the complete permutation
    if (remainingNums.length === 0) {
      answers.push([...currentPerm]);
      return;
    }

    // For remaining nums, add each one to the permutation and permutate
    // over the remaining nums again
    for (let i = 0; i < remainingNums.length; i++) {
      currentPerm.push(remainingNums[i]);
      getPermutations(
        remainingNums.filter((n, ind) => ind !== i),
        currentPerm
      );
      currentPerm.pop();
    }
  }

  getPermutations(nums, []);

  return answers;
};
