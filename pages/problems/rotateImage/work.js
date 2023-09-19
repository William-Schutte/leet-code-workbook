/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // Snake rotate.
  // Starting from the outside, work around the perimeter
  // Create an array of perimeter values
  // "Rotate" the array by n
  // Set these new values along the perimeter
  // Move in 1 unit
  // Repeat
  const matrix_size = matrix.length;
  const max_index = matrix_size - 1;
  let distanceFromEdge = 0;
  if (matrix_size === 2) {
    distanceFromEdge = -1;
  }
  while (distanceFromEdge < max_index - 1) {
    if (matrix_size === 2) {
      distanceFromEdge = 0;
    }
    const edgeArray = [];
    const topEdge = matrix[distanceFromEdge].slice(
      distanceFromEdge,
      matrix_size - distanceFromEdge
    );
    const rightEdge = [];
    for (let j = distanceFromEdge; j < matrix_size - distanceFromEdge; j++) {
      rightEdge.push(matrix[j][max_index - distanceFromEdge]);
    }
    const bottomEdge = matrix[max_index - distanceFromEdge]
      .slice(
        distanceFromEdge,
        matrix[distanceFromEdge].length - distanceFromEdge
      )
      .reverse();
    const leftEdge = [];
    for (let j = max_index - distanceFromEdge; j >= distanceFromEdge; j--) {
      leftEdge.push(matrix[j][distanceFromEdge]);
    }

    // Now move each edge to its desired spot:
    // New top edge:
    for (let i = distanceFromEdge; i < matrix_size - distanceFromEdge; i++) {
      matrix[distanceFromEdge][i] = leftEdge.shift();
    }
    // New right edge:
    for (let j = distanceFromEdge; j < matrix_size - distanceFromEdge; j++) {
      matrix[j][max_index - distanceFromEdge] = topEdge.shift();
    }
    // New bottom edge:
    for (let i = max_index - distanceFromEdge; i >= distanceFromEdge; i--) {
      matrix[max_index - distanceFromEdge][i] = rightEdge.shift();
    }
    // New left edge:
    for (let j = max_index - distanceFromEdge; j >= distanceFromEdge; j--) {
      matrix[j][distanceFromEdge] = bottomEdge.shift();
    }
    distanceFromEdge += 1;
  }
};
