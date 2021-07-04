/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function (matrix, k) {
  const m = matrix.length;
  const n = matrix[0].length;

  let result = -Number.MAX_VALUE;

  for (let r1 = 0; r1 < m; r1++) {
    const sumRow = new Array(n).fill(0);

    for (let r2 = r1; r2 < m; r2++) {
      let currMax = 0,
        globalMax = Number.MIN_VALUE;
      for (let i = 0; i < n; i++) {
        sumRow[i] += matrix[r2][i];
        currMax = Math.max(currMax + sumRow[i], sumRow[i]);
        globalMax = Math.max(globalMax, currMax);
      }

      if (globalMax <= k) {
        result = Math.max(result, globalMax);
      } else {
        for (let c1 = 0; c1 < n; c1++) {
          let sum = 0;
          for (let c2 = c1; c2 < n; c2++) {
            sum += sumRow[c2];
            if (sum <= k) {
              result = Math.max(result, sum);
            }
          }
        }
      }

      if (globalMax === k) {
        return k;
      }
    }
  }
  return result;
};
