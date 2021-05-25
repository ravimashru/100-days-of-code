/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {

  const countMap = new Map();

  for (let i = 0; i < nums1.length; i++) {

    const current = countMap.get(nums1[i]) || 0;
    countMap.set(nums1[i], current + 1);

  }

  const res = [];

  for (let i = 0; i < nums2.length; i++) {

    if (countMap.has(nums2[i])) {
      const current = countMap.get(nums2[i]);
      if (current > 0) {
        countMap.set(nums2[i], current - 1);
        res.push(nums2[i]);
      }
    }

  }

  return res;

};
