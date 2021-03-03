/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // Sum of numbers 0 to n (i.e. nums.length)
  const expectedSum = (nums.length * (nums.length + 1)) / 2;

  const actualSum = nums.reduce((acc, e) => acc + e, 0);

  return expectedSum - actualSum;
};
