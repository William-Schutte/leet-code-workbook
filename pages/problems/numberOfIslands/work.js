/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // First try, no help! Great!
  if (!grid.length || !grid[0]?.length) {
    return 0;
  }

  const visited = new Array(grid.length)
    .fill([])
    .map((row) => Array(grid[0].length).fill(false));
  let numIslands = 0;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  function exploreIsland(y, x) {
    if (visited[y][x] || grid[y][x] === "0") return;
    visited[y][x] = true;
    for (const dir of directions) {
      if (
        y + dir[0] >= 0 &&
        y + dir[0] < grid.length &&
        x + dir[1] >= 0 &&
        x + dir[1] < grid[0].length
      ) {
        exploreIsland(y + dir[0], x + dir[1]);
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (visited[i][j]) continue;
      if (grid[i][j] === "1") {
        exploreIsland(i, j);
        numIslands++;
      }
    }
  }

  return numIslands;
};
