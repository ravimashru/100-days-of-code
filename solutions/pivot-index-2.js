/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = nums.reduce((acc, e) => acc + e, 0);

  let pivotIndex = -1;
  for (let i = 0, sumL = 0; i < nums.length; i++) {
    if (sumL === sum - sumL - nums[i]) {
      pivotIndex = i;
      break;
    }

    sumL += nums[i];
  }

  return pivotIndex;
};
