/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let sum = "";
  let aDigits = a.split("");
  let bDigits = b.split("");

  let carryOne = 0;
  while (aDigits.length || bDigits.length) {
    let x = aDigits.pop() ?? 0;
    let y = bDigits.pop() ?? 0;
    const placeSum = Number(x) + Number(y);

    if (placeSum === 2) {
      sum = (carryOne ? "1" : "0") + sum;
      carryOne = 1;
    } else if (placeSum === 1) {
      sum = (carryOne ? "0" : "1") + sum;
    } else {
      sum = (carryOne ? "1" : "0") + sum;
      if (carryOne) carryOne--;
    }
  }

  return carryOne ? "1" + sum : sum;
};
