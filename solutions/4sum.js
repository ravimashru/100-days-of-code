/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const sumMap = new Map();
  const res = new Set();

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];

      if (sumMap.has(sum)) {
        sumMap.get(sum).push([i, j]);
      } else {
        sumMap.set(sum, [[i, j]]);
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];

      if (sumMap.has(target - sum)) {
        const idxs = sumMap.get(target - sum);
        idxs.forEach((idx) => {
          if (idx.indexOf(i) === -1 && idx.indexOf(j) === -1) {
            res.add(
              [nums[idx[0]], nums[idx[1]], nums[i], nums[j]]
                .sort((a, b) => a - b)
                .join("|")
            );
          }
        });
      }
    }
  }

  return Array.from(res).map((e) =>
    e.split("|").map((num) => parseInt(num, 10))
  );
};
