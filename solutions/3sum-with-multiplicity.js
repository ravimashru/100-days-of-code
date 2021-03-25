/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (arr, target) {
  const digitCount = new Map();
  let result = 0;
  const MOD = 1e9 + 7;

  arr.forEach((e) => {
    let currentCount = 0;
    if (digitCount.has(e)) {
      currentCount = digitCount.get(e);
    }
    digitCount.set(e, currentCount + 1);
  });

  const uniqueNumbers = Array.from(new Set(arr)).sort((a, b) => a - b);

  for (let i = 0; i < uniqueNumbers.length; i++) {
    let j = i;
    let k = uniqueNumbers.length - 1;
    const requiredSum = target - uniqueNumbers[i];
    while (j <= k) {
      const currentSum = uniqueNumbers[j] + uniqueNumbers[k];
      if (currentSum === requiredSum) {
        let count = 0;
        if (i === j && j === k) {
          const c = digitCount.get(uniqueNumbers[i]);
          count = (c * (c - 1) * (c - 2)) / 6;
        } else if (i < j && j === k) {
          const ci = digitCount.get(uniqueNumbers[i]);
          const cj = digitCount.get(uniqueNumbers[j]);
          count = (ci * (cj * (cj - 1))) / 2;
        } else if (i === j && j < k) {
          const ci = digitCount.get(uniqueNumbers[i]);
          const ck = digitCount.get(uniqueNumbers[k]);
          count = (ck * (ci * (ci - 1))) / 2;
        } else {
          // i < j < k
          count =
            digitCount.get(uniqueNumbers[i]) *
            digitCount.get(uniqueNumbers[j]) *
            digitCount.get(uniqueNumbers[k]);
        }

        result += count;
        result %= MOD;

        j++;
        k--;
      } else if (currentSum < requiredSum) {
        j++;
      } else {
        k--;
      }
    }
  }

  return result;
};
