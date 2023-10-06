/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  // Brute force approach:
  // Iterate over candidates recursively, just adding all combos
  // Subtract current from target until 0
  let index = 0;
  let results = [];

  function subtractCandidates(index, newTarget, attempt) {
    if (newTarget === 0) {
      results.push([...attempt]);
      return;
    }

    if (newTarget < 0) return;

    for (let i = index; i < candidates.length; i++) {
      console.log(index, newTarget, attempt);
      attempt.push(candidates[i]);
      subtractCandidates(i, newTarget - candidates[i], attempt);
      attempt.pop();
    }
  }

  subtractCandidates(index, target, []);
  return results;
};
