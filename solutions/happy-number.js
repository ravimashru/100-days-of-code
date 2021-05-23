/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {

  const encountered = new Set();

  const sumDigits = (n) => {

    let sum = 0;

    while (n > 0) {
      sum += ((n % 10) * (n % 10));
      n = Math.floor(n / 10);
    }

    return sum;
  };

  let temp = n;

  while (
    !encountered.has(temp) &&
    temp !== 1
  ) {
    encountered.add(temp);
    temp = sumDigits(temp);
  }

  return temp === 1;

};