/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange_simple = function (coins, amount) {
  // Assuming you can generate change simply, i.e. always give most of the largest coin
  // before using smaller coins
  // Does not work for all coin sizes (e.g. [4, 11] -> 12 cannot find solution)
  if (amount == 0) return 0;

  let count = 0;
  let remainder = amount;
  coins.sort((a, b) => b - a);
  for (const coin of coins) {
    if (coin <= remainder) {
      const numberOfCoins = Math.floor(remainder / coin);
      count += numberOfCoins;
      remainder = remainder % coin;

      if (remainder == 0) {
        break;
      }
    }
  }

  if (count == 0 || remainder) return -1;
  return count;
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange_advanced = function (coins, amount) {
  if (amount == 0) return 0;

  // Sort coins in ascending order
  coins = coins.sort((a, b) => a - b);

  // Create an array where each value is Infinity
  // This array is such that:
  // minCount[n] = c means the min number of coins to make n is c
  let minCount = new Array(amount + 1).fill(Infinity);
  // Set the first value
  minCount[0] = 0;

  for (let num = 1; num <= amount; num++) {
    for (let coin of coins) {
      // We are trying to make num change, if the coin is bigger than that, we can't
      if (coin > num) break;

      // The min count for number is either what we already have, or the count up to
      // a value one coin away from this value
      minCount[num] = Math.min(minCount[num], 1 + minCount[num - coin]);
    }
  }

  return minCount[amount] === Infinity ? -1 : minCount[amount];
};
