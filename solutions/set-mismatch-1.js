/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  nums.sort((a, b) => a - b);

  let missing = -1,
    duplicate = -1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      duplicate = nums[i];
    } else if (nums[i] > nums[i - 1] + 1) {
      missing = nums[i] - 1;
    }
  }

  if (missing === -1) {
    if (nums[0] === 1) {
      missing = nums.length;
    } else {
      missing = 1;
    }
  }

  return [duplicate, missing];
};
