/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  // Get rid of whitespace
  // Check for -/+ sign
  // Read in digit chars
  // Clamp to [-2^31, 2^31 - 1]
  if (s.length === 0) return 0;
  let digits = "";
  let sign = "";
  let digitChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  for (let i = 0; i < s.length; i++) {
    if (digits.length > 0) {
      if (digitChars.includes(s[i])) {
        digits += s[i];
      } else {
        break;
      }
    } else {
      if (s[i] === " ") {
        if (digits.length || sign.length) return 0;
        continue;
      }
      if (["+", "-"].includes(s[i])) {
        if (sign.length > 0) {
          return 0;
        }
        sign = s[i];
        continue;
      }
      if (digitChars.includes(s[i])) {
        digits += s[i];
      } else {
        return 0;
      }
    }
  }

  if (digits.length === 0) return 0;

  digits = parseInt(digits);
  if (sign === "-") digits = digits * -1;
  return Math.max(Math.min(digits, 2 ** 31 - 1), -(2 ** 31));
};
