/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let left = 0;
  let right = 0;
  let flippedZeros = 0;
  let maxSoFar = -1;

  while (right < nums.length) {
    while (nums[right] === 1 && right < nums.length) {
      right++;
    }

    if (flippedZeros < k && right < nums.length) {
      flippedZeros++;
      right++;
      continue;
    }

    maxSoFar = Math.max(maxSoFar, right - left);

    while (nums[left] === 1) {
      left++;
    }

    flippedZeros--;
    left++;
  }

  return Math.max(maxSoFar, right - left);
};
