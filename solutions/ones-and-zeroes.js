/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {

  const dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0));

  for (let str of strs) {

    let zeros = 0; ones = 0;

    for (let char of str) {
      char === '0' ? zeros++ : ones++;
    }

    for (let i = m; i >= zeros; i--) {
      for (let j = n; j >= ones; j--) {
        dp[i][j] = Math.max(
          dp[i][j],
          1 + dp[i - zeros][j - ones]
        );
      }
    }

  }

  return dp[m][n];

};