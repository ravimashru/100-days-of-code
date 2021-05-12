/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let leftEdge = -1,
    rightEdge = -1;

  // Find the left edge
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] >= target) {
      leftEdge = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (nums[leftEdge] !== target) {
    return [-1, -1];
  }

  // Find the right edge
  (left = leftEdge), (right = nums.length - 1);
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      rightEdge = mid;
      left = mid + 1;
    }
  }

  return [leftEdge, rightEdge];
};
