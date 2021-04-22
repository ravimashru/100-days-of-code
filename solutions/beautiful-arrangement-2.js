/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
  const res = new Array(n);
  let i = 0;
  let num1 = 1;
  let num2 = k + 1;

  while (num1 < num2) {
    res[i++] = num1++;
    res[i++] = num2--;
  }

  if (num1 === num2) {
    res[i++] = num1;
  }

  let x = 0;
  while (i < n) {
    res[i++] = k + 2 + x;
    x++;
  }

  for (let x = 0; x < n - i; k++) {
    res[i++] = k + 2 + x;
  }

  return res;
};
