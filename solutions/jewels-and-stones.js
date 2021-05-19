/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const jewelSet = new Set();
  for (let i = 0; i < jewels.length; i++) {
    jewelSet.add(jewels[i]);
  }

  let jewelCount = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewelSet.has(stones[i])) {
      jewelCount++;
    }
  }

  return jewelCount;
};
