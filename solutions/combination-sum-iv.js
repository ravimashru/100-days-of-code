/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  const table = new Array(target + 1).fill(0);
  table[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i - nums[j] >= 0) {
        table[i] += table[i - nums[j]];
      }
    }
  }

  return table[target];
};
