/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const palindrome = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(palindrome);
  const maxIndex = palindrome.length - 1;

  let left = palindrome[0];
  let right = palindrome[maxIndex];

  let counter = 1;
  while (left === right) {
    console.log(left, right);
    left = palindrome[counter];
    right = palindrome[maxIndex - counter];
    counter++;

    if (counter > palindrome.length / 2) {
      return true;
    }
  }
  return false;
};
