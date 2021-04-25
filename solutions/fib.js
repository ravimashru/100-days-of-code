/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 2) {
    return n;
  }

  let f1 = 1,
    f2 = 1;
  let i = 2;
  while (i < n) {
    f2 = f1 + f2;
    f1 = f2 - f1;
    i++;
  }

  return f2;
};
