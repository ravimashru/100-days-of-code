/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  return (n * n - (n % 2)) / 4;
};
