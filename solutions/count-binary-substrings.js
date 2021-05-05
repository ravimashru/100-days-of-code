/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  const consecutiveCounts = [];

  let currentChar = s.charAt(0);
  let currentCount = 1;

  for (let i = 1; i < s.length; i++) {
    const char = s.charAt(i);

    if (char === currentChar) {
      currentCount++;
    } else {
      consecutiveCounts.push(currentCount);
      currentChar = char;
      currentCount = 1;
    }
  }
  consecutiveCounts.push(currentCount);

  let res = 0;
  for (let i = 0; i < consecutiveCounts.length - 1; i++) {
    res += Math.min(consecutiveCounts[i], consecutiveCounts[i + 1]);
  }

  return res;
};
