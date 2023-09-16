/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // n = 1, 1
  // n = 2, 2
  // n = 3, 3
  // n = 4, 5

  // This is just a Fibonacci Sequence
  // Recursive will work but very inefficient for larger n, O(2^n)
  if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 2;
  } else {
    return climbStairs(n - 1) + climbStairs(n - 2);
  }
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // n = 1, 1
  // n = 2, 2
  // n = 3, 3
  // n = 4, 5

  // This is just a Fibonacci Sequence
  // Just build the sequence in a single loop, O(n)
  fibb = [1, 1, 2];
  for (let i = 3; i <= n; i++) {
    fibb.push(fibb[i - 1] + fibb[i - 2]);
  }

  return fibb[n];
};
