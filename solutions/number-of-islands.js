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
      if (grid[i][j] === '1' && !visited[i][j]) {
        count++;
        const q = [[i, j]];
        visited[i][j] = true;
        while (q.length > 0) {
          const [x, y] = q.shift();
          if (x + 1 < m && grid[x + 1][y] === '1' && !visited[x + 1][y]) {
            q.push([x + 1, y]);
            visited[x + 1][y] = true;
          }
          if (y + 1 < n && grid[x][y + 1] === '1' && !visited[x][y + 1]) {
            q.push([x, y + 1]);
            visited[x][y + 1] = true;
          }
          if (x - 1 > -1 && grid[x - 1][y] === '1' && !visited[x - 1][y]) {
            q.push([x - 1, y]);
            visited[x - 1][y] = true;
          }
          if (y - 1 > -1 && grid[x][y - 1] === '1' && !visited[x][y - 1]) {
            q.push([x, y - 1]);
            visited[x][y - 1] = true;
          }
        }
      }
    }
  }

  return count;
};
