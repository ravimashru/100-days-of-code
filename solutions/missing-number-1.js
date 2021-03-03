/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  
  nums.sort((a, b) => a - b);

  // If all numbers from i = 0 to n - 1 are in the array,
  // then the missing number is n (i.e. nums.length)
  let missingNumber = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      missingNumber = i;
      break;
    }
  }
  return missingNumber;
};
