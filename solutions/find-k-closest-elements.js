/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  if (x <= arr[0]) {
    return arr.slice(0, k);
  } else if (x >= arr[arr.length - 1]) {
    return arr.slice(arr.length - k);
  } else {
    let i = 0;
    let minDiff = Number.MAX_VALUE;
    while (
      Math.abs(x - arr[i]) < minDiff ||
      (Math.abs(x - arr[i]) === minDiff && arr[i] === arr[i - 1])
    ) {
      minDiff = Math.abs(x - arr[i]);
      i++;
    }

    let l = i - 1;
    let r = i - 1;
    let requiredCount = k - 1;

    while (requiredCount > 0) {
      if (l > 0 && r < arr.length - 1) {
        if (Math.abs(arr[l - 1] - x) <= Math.abs(arr[r + 1] - x)) {
          l--;
        } else {
          r++;
        }
      } else if (l > 0) {
        l--;
      } else {
        r++;
      }
      requiredCount--;
    }

    return arr.slice(l, r + 1);
  }
};
