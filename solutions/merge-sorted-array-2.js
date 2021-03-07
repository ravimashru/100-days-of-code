/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const sortedArray = new Array(m + n);

  let i = 0,
    j = 0,
    k = 0;

  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      sortedArray[k] = nums1[i];
      i++;
    } else {
      sortedArray[k] = nums2[j];
      j++;
    }
    k++;
  }

  while (i < m) {
    sortedArray[k] = nums1[i];
    i++, k++;
  }

  while (j < n) {
    sortedArray[k] = nums2[j];
    j++, k++;
  }

  for (let i = 0; i < m + n; i++) {
    nums1[i] = sortedArray[i];
  }
};
