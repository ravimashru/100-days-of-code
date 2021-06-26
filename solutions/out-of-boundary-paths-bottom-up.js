/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn, memo = {}) {
  const M = 1e9 + 7;
  let dp = [...Array(m)].map((_) => Array(n).fill(0));
  let count = 0;

  dp[startRow][startColumn] = 1;

  for (let i = 0; i < maxMove; i++) {
    const temp = [...Array(m)].map((_) => Array(n).fill(0));

    for (let x = 0; x < m; x++) {
      for (let y = 0; y < n; y++) {
        if (x === 0) {
          count += dp[x][y] % M;
        }

        if (x === m - 1) {
          count += dp[x][y] % M;
        }

        if (y === 0) {
          count += dp[x][y] % M;
        }

        if (y === n - 1) {
          count += dp[x][y] % M;
        }

        temp[x][y] =
          (((x > 0 ? dp[x - 1][y] : 0) + (x < m - 1 ? dp[x + 1][y] : 0)) % M) +
          (((y > 0 ? dp[x][y - 1] : 0) + (y < n - 1 ? dp[x][y + 1] : 0)) % M);
      }
    }

    dp = temp;
  }

  return count % M;
};
