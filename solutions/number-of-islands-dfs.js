/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  const m = grid.length;
  const n = grid[0].length;
  const visited = [...Array(m)].map((e) => Array(n).fill(false));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1" && !visited[i][j]) {
        count++;
        dfs(i, j);
      }
    }
  }

  function dfs(i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= m ||
      j >= n ||
      visited[i][j] ||
      grid[i][j] === "0"
    ) {
      return;
    }

    visited[i][j] = true;

    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }

  return count;
};
