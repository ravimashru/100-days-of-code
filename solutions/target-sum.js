/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target, startIndex = 0) {
  if (startIndex === nums.length - 1) {
    let combinations = 0;

    if (target + nums[startIndex] === 0) {
      combinations++;
    }

    if (target - nums[startIndex] === 0) {
      combinations++;
    }

    return combinations;
  }

  return (
    findTargetSumWays(nums, target - nums[startIndex], startIndex + 1) +
    findTargetSumWays(nums, target + nums[startIndex], startIndex + 1)
  );
};
