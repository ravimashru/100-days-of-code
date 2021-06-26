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

  if (
    startRow === -1 ||
    startRow === m ||
    startColumn === -1 ||
    startColumn === n
  ) {
    return 1;
  }

  if (maxMove === 0) {
    return 0;
  }

  const key = `${startRow}|${startColumn}|${maxMove}`;

  if (key in memo) {
    return memo[key];
  }

  return (memo[key] =
    (findPaths(m, n, maxMove - 1, startRow - 1, startColumn, memo) +
      findPaths(m, n, maxMove - 1, startRow + 1, startColumn, memo) +
      findPaths(m, n, maxMove - 1, startRow, startColumn - 1, memo) +
      findPaths(m, n, maxMove - 1, startRow, startColumn + 1, memo)) %
    M);
};
