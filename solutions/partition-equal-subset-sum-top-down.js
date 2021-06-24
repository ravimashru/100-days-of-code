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

  return canGetSum(requiredSum, 0);

  function canGetSum(sum, idx, memo = {}) {
    if (idx === nums.length - 1) {
      return sum === nums[nums.length - 1];
    }

    if (sum < 0) {
      return false;
    }

    const key = `${sum}|${idx}`;
    if (key in memo) {
      return memo[key];
    }

    return (memo[key] =
      canGetSum(sum, idx + 1, memo) ||
      canGetSum(sum - nums[idx], idx + 1, memo));
  }
};
