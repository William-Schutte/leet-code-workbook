/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // Simple, brute force, but functional
  // Go right
  // Go down
  // Go left
  // Go up
  // Repeat until solution.length == nxm
  if (matrix.length === 0 || matrix[0].length === 0) return;

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const visited = Array(matrix.length)
    .fill()
    .map((n) => Array(matrix[0].length).fill(false));

  const solution = [matrix[0][0]];
  let dIndex = 0;
  let pointer = [0, 0];
  visited[0][0] = true;

  while (solution.length < matrix.length * matrix[0].length) {
    const [y, x] = pointer;
    const newY = y + directions[dIndex][0];
    const newX = x + directions[dIndex][1];
    if (
      newY >= 0 &&
      newX >= 0 &&
      newY < matrix.length &&
      newX < matrix[0].length &&
      !visited[newY][newX]
    ) {
      solution.push(matrix[newY][newX]);
      visited[newY][newX] = true;
      pointer = [newY, newX];
    } else {
      // Change direction and try again
      dIndex = (dIndex + 1) % 4;
      continue;
    }
  }

  return solution;
};
