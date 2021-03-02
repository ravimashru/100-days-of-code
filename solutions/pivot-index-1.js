/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const leftToRightCummulativeSum = [0];
  const rightToLeftCummulativeSum = [0];

  let cummulativeSum = 0;
  for (let i = 1; i < nums.length; i++) {
    cummulativeSum += nums[i - 1];
    leftToRightCummulativeSum.push(cummulativeSum);
  }

  cummulativeSum = 0;
  for (let i = nums.length - 2; i >= 0; i--) {
    cummulativeSum += nums[i + 1];
    rightToLeftCummulativeSum.unshift(cummulativeSum);
  }

  let pivotIndex = -1;
  for (let i = 0; i < leftToRightCummulativeSum.length; i++) {
    if (leftToRightCummulativeSum[i] === rightToLeftCummulativeSum[i]) {
      pivotIndex = i;
      break;
    }
  }

  return pivotIndex;
};
