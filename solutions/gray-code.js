/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  const res = [0, 1];

  for (let i = 1; i < n; i++) {
    const mask = 1 << i;
    for (let j = res.length - 1; j >= 0; j--) {
      res.push(res[j] ^ mask);
    }
  }

  return res;
};
