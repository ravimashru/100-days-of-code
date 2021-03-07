/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0,
    j = 0;

  if (n === 0) {
    return;
  }

  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      i++;
    } else {
      const temp = nums1[i];
      nums1[i] = nums2[j];

      i++;

      let tempIndex = j;
      while (tempIndex < n - 1 && temp > nums2[tempIndex + 1]) {
        nums2[tempIndex] = nums2[tempIndex + 1];
        tempIndex++;
      }
      nums2[tempIndex] = temp;
    }
  }

  while (i < m + n) {
    nums1[i] = nums2[j];
    i++, j++;
  }
};
