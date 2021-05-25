/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

  const indexMap = new Map();

  for (let i = 0; i < nums.length; i++) {

    if (indexMap.has(nums[i])) {
      const prevIndex = indexMap.get(nums[i]);
      if (i - prevIndex <= k) {
        return true;
      }
    }


    indexMap.set(nums[i], i);

  }

  return false;

};
