/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function (A, K) {
  let max = Number.MIN_VALUE;
  let min = Number.MAX_VALUE;

  A.forEach((number) => {
    if (number > max) {
      max = number;
    }

    if (number < min) {
      min = number;
    }
  });

  const difference = max - K - (min + K);

  return Math.max(difference, 0);
};
