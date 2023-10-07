/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  // Another BFS problem

  // For each rotten orange, rot its neighbors, add them to next stack
  // When stack is empty, count iterations
  // If no more fresh, return n, else -1

  if (grid.length === 0 || grid[0].length === 0) return -1;

  let freshOranges = 0;
  let rottenOranges = 0;
  const dfsStack = [];
  const visited = Array(grid.length)
    .fill([])
    .map((r) => Array(grid[0].length).fill(false));

  // Get rotten oranges and fresh oranges
  // Add rotten coords to an iteration stack
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        freshOranges++;
      } else if (grid[i][j] === 2) {
        rottenOranges++;
        dfsStack.push([i, j]);
        visited[i][j] = true;
      }
    }
  }

  // Null case: no fresh oranges
  if (freshOranges === 0) return 0;
  // Null case: no rotten oranges
  if (rottenOranges === 0) return -1;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let days = 0;

  let nextStack = [];
  while (dfsStack.length > 0) {
    const [y, x] = dfsStack.pop();
    console.log("POP", y, x);

    for (const [dy, dx] of directions) {
      if (
        y + dy >= grid.length ||
        y + dy < 0 ||
        x + dx >= grid[0].length ||
        x + dx < 0 ||
        visited[y + dy][x + dx]
      ) {
        continue;
      }
      const cellValue = grid[y + dy][x + dx];
      console.log(cellValue);
      if (cellValue === 1) {
        freshOranges--;
        if (freshOranges === 0) {
          return days + 1;
        }
        nextStack.push([y + dy, x + dx]);
        grid[y + dy][x + dx] = 2;
      }
      visited[y + dy][x + dx] = true;
    }
    console.log("End", dfsStack, nextStack, visited);
    if (dfsStack.length === 0 && nextStack.length > 0) {
      days++;
      dfsStack.push(...nextStack);
      nextStack = [];
    }
  }

  return freshOranges > 0 ? -1 : days;
};
