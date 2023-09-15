/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit_simple = function (prices) {
  // Prices is an array of values
  // Find the start an end index of the greatest positive diff
  let bestDiff = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = prices.length - 1; j > i; j--) {
      const diff = prices[j] - prices[i];
      if (diff > bestDiff) {
        bestDiff = diff;
      }
    }
  }
  return bestDiff;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit_advanced = function (prices) {
  // Prices is an array of values
  // Find the start an end index of the greatest positive diff
  let bestDiff = 0;
  let left = 0;
  let right = 1;

  while (right < prices.length) {
    const diff = prices[right] - prices[left];

    if (diff > 0) {
      if (diff > bestDiff) {
        bestDiff = diff;
      }
    } else {
      left = right;
    }
    right++;
  }
  return bestDiff;
};
