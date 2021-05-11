/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  return dp(obstacleGrid, 0, 0);
};

const dp = function (grid, m, n, memo = {}) {
  const key = `${m}|${n}`;
  if (key in memo) {
    return memo[key];
  }

  if (grid[m][n] === 1) {
    return 0;
  }

  if (m === grid.length - 1 && n === grid[0].length - 1) {
    return 1;
  }

  return (memo[key] =
    (m + 1 < grid.length ? dp(grid, m + 1, n, memo) : 0) +
    (n + 1 < grid[0].length ? dp(grid, m, n + 1, memo) : 0));
};
