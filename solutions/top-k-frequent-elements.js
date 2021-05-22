/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const numToOccurence = new Map();
  const occurenceToNums = new Map();

  let maxOccurence = 1;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (numToOccurence.has(num)) {
      const occ = numToOccurence.get(num);
      numToOccurence.set(num, occ + 1);

      maxOccurence = Math.max(maxOccurence, occ + 1);

      occurenceToNums.get(occ).delete(num);

      if (occurenceToNums.has(occ + 1)) {
        occurenceToNums.get(occ + 1).add(num);
      } else {
        const set = new Set();
        set.add(num);
        occurenceToNums.set(occ + 1, set);
      }
    } else {
      numToOccurence.set(num, 1);

      if (occurenceToNums.has(1)) {
        occurenceToNums.get(1).add(num);
      } else {
        const set = new Set();
        set.add(num);
        occurenceToNums.set(1, set);
      }
    }
  }

  let curr = maxOccurence;
  const res = [];
  while (res.length < k) {
    if (occurenceToNums.has(curr)) {
      res.push(...occurenceToNums.get(curr).values());
    }
    curr--;
  }

  return res;
};
