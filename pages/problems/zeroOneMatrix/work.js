/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  if (!mat || mat.length === 0 || mat[0].length === 0) {
    return [];
  }

  let m = mat.length,
    n = mat[0].length;
  let queue = [];

  // The zeros are like mines in minesweeper, so collect them all to iterate over.
  // Set any non-zero square to infinity.
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
      } else {
        mat[i][j] = Infinity;
      }
    }
  }

  const directions = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  // For each zero (mine), increase adjacent squares by 1, then save the 1's and repeat
  // until all squares have been filled in
  while (queue.length > 0) {
    const [y, x] = queue.shift();
    const radiusValue = mat[y][x];
    for (const [dy, dx] of directions) {
      // If the adjacent coords are still in the matrix:
      if (
        y + dy >= 0 &&
        y + dy < mat.length &&
        x + dx >= 0 &&
        x + dx < mat[0].length
      ) {
        // If we haven't set this square yet:
        if (mat[y + dy][x + dx] === Infinity) {
          mat[y + dy][x + dx] = radiusValue + 1;
          queue.push([y + dy, x + dx]);
        }
      }
    }
  }

  return mat;
};
