/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  const visited = [...Array(matrix.length)].map((e) =>
    Array(matrix[0].length).fill(false)
  );
  const memo = [...Array(matrix.length)].map((e) =>
    Array(matrix[0].length).fill(-1)
  );

  let longestPath = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      longestPath = Math.max(
        longestPath,
        getMaxLength(i, j, matrix, visited, memo)
      );
    }
  }

  return longestPath;
};

var getMaxLength = function (row, col, matrix, visited, memo) {
  if (memo[row][col] > -1) {
    return memo[row][col];
  }

  let maxLength = 1;

  visited[row][col] = true;

  const candidates = [
    [row - 1, col],
    [row + 1, col],
    [row, col - 1],
    [row, col + 1],
  ]
    .filter((e) => e[0] >= 0 && e[0] < matrix.length)
    .filter((e) => e[1] >= 0 && e[1] < matrix[0].length)
    .filter((e) => visited[e[0]][e[1]] === false)
    .filter((e) => matrix[e[0]][e[1]] > matrix[row][col]);

  candidates.forEach((candidate) => {
    maxLength = Math.max(
      maxLength,
      1 + getMaxLength(candidate[0], candidate[1], matrix, visited, memo)
    );
  });

  visited[row][col] = false;

  return (memo[row][col] = maxLength);
};
