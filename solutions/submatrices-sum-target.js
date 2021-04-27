/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function (matrix, target) {

  const m = matrix.length;
  const n = matrix[0].length;

  let count = 0;

  const prefixSums = [...Array(m + 1)].map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      prefixSums[i][j] =
        matrix[i - 1][j - 1] +
        prefixSums[i - 1][j] +
        prefixSums[i][j - 1] -
        prefixSums[i - 1][j - 1]
    }
  }

  for (let r1 = 1; r1 <= m; r1++) {
    for (let r2 = r1; r2 <= m; r2++) {

      for (let c1 = 1; c1 <= n; c1++) {
        for (let c2 = c1; c2 <= n; c2++) {

          const submatrixSum =
            prefixSums[r2][c2]
            - prefixSums[r2][c1 - 1]
            - prefixSums[r1 - 1][c2]
            + prefixSums[r1 - 1][c1 - 1]

          if (submatrixSum === target) {
            count++;
          }

        }
      }

    }
  }

  return count;

};