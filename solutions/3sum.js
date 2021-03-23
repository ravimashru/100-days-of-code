/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let low = i + 1;
    let high = nums.length - 1;

    const requiredSum = 0 - nums[i];

    while (low < high) {
      const currentSum = nums[low] + nums[high];

      if (currentSum === requiredSum) {
        res.push([nums[i], nums[low], nums[high]]);
        const numLow = nums[low],
          numHigh = nums[high];

        while (low < high && nums[low] === numLow) {
          low++;
        }

        while (low < high && nums[high] === numHigh) {
          high--;
        }
      } else if (currentSum < requiredSum) {
        low++;
      } else {
        high--;
      }
    }
  }

  return res;
};
