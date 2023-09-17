/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const zero_y_array = [];
  const zero_x_array = [];

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      if (matrix[y][x] === 0) {
        zero_y_array.push(y);
        zero_x_array.push(x);
      }
    }
  }
  for (y of zero_y_array) {
    for (let x = 0; x < matrix[0].length; x++) {
      matrix[y][x] = 0;
    }
  }

  for (x of zero_x_array) {
    for (let y = 0; y < matrix.length; y++) {
      matrix[y][x] = 0;
    }
  }
  return matrix;
};
