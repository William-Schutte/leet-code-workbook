/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    // Binary search for the start point
    if (n === 1) {
      return 1;
    }
    if (n === 2) {
      return isBadVersion(1) ? 1 : 2;
    }
    if (isBadVersion(1)) return 1;
    let low = 1;
    let high = n;
    const badArray = new Array(n);

    while (low <= high) {
      const midPoint = Math.floor((low + high) / 2);
      // If midpoint is bad, check left
      const isBad = isBadVersion(midPoint);
      badArray[midPoint] = isBad;

      if (isBad) {
        high = midPoint - 1;
      } else {
        low = midPoint + 1;
      }
    }

    return low;
  };
};
