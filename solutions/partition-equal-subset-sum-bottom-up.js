/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  if (sum % 2 !== 0) {
    return false;
  }

  const requiredSum = sum / 2;

  const dp = [...Array(nums.length + 1)].map((e) =>
    new Array(requiredSum + 1).fill(false)
  );

  dp[0][0] = true;

  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j <= requiredSum; j++) {
      dp[i][j] =
        dp[i - 1][j] || (j >= nums[i - 1] ? dp[i - 1][j - nums[i - 1]] : false);
    }
  }

  return dp[nums.length][requiredSum];
};
