/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  // Return a + b without "+"
  // May be negative
  const arrayA = Array(Math.abs(a));
  const aIsNegative = a < 0;
  const arrayB = Array(Math.abs(b));
  const bIsNegative = b < 0;

  if (aIsNegative && bIsNegative) {
    return -arrayA.concat(arrayB).length;
  } else if (aIsNegative) {
    if (Math.abs(a) > Math.abs(b)) {
      return -arrayA.slice(b).length;
    } else {
      return arrayB.slice(-a).length;
    }
  } else if (bIsNegative) {
    if (Math.abs(b) > Math.abs(a)) {
      return -arrayB.slice(a).length;
    } else {
      return arrayA.slice(-b).length;
    }
  }

  return arrayA.concat(arrayB).length;
};
