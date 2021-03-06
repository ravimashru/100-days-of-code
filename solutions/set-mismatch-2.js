/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let duplicate, missing;

  const uniqueNumbers = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (uniqueNumbers.has(nums[i])) {
      duplicate = nums[i];
    } else {
      uniqueNumbers.add(nums[i]);
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!uniqueNumbers.has(i)) {
      missing = i;
      break;
    }
  }

  return [duplicate, missing];
};
