/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function (n) {
  const MOD = 1e9 + 7;

  const dp = [...Array(5)].map((_) => new Array(n + 1));
  for (let i = 0; i < 5; i++) {
    dp[i][1] = 1;
  }

  for (let i = 2; i <= n; i++) {
    dp[0][i] = (dp[1][i - 1] + dp[2][i - 1] + dp[4][i - 1]) % MOD;
    dp[1][i] = (dp[0][i - 1] + dp[2][i - 1]) % MOD;
    dp[2][i] = (dp[1][i - 1] + dp[3][i - 1]) % MOD;
    dp[3][i] = dp[2][i - 1] % MOD;
    dp[4][i] = (dp[2][i - 1] + dp[3][i - 1]) % MOD;
  }

  let sum = 0;
  for (let i = 0; i < 5; i++) {
    sum += dp[i][n] % MOD;
  }
  return sum % MOD;
};
