/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const ans = new Array(n + 1).fill(0).map((item, index) => index);

  return ans.map(
    (num) =>
      num
        .toString(2)
        .split("")
        .filter((i) => i === "1").length
  );
};

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits_bitwise = function (n) {
  const ans = new Array(n + 1).fill(0);

  for (let i = 0; i < n + 1; i++) {
    console.log(i, i >> 1, i & 1);
    // i >> 1 moves all bits to the right
    // This value is less than i and thus has been computed
    // (i & 1) will be 1 if i is odd, else 0
    // So the number of 1s in i is the number of 1s in i >> 1
    // plus one more 1 if the 1s bit is on
    ans[i] = ans[i >> 1] + (i & 1);
  }
  return ans;
};
