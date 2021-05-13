/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function (x, y, bound) {
  const powersOfX = [1];
  const powersOfY = [1];
  const powerfulIntegers = new Set();

  if (x !== 1) {
    for (let i = x; i <= bound; i *= x) {
      powersOfX.push(i);
    }
  }

  if (y !== 1) {
    for (let i = y; i <= bound; i *= y) {
      powersOfY.push(i);
    }
  }

  for (let i = 0; i < powersOfX.length; i++) {
    for (let j = 0; j < powersOfY.length; j++) {
      const res = powersOfX[i] + powersOfY[j];
      if (res <= bound) {
        powerfulIntegers.add(res);
      }
    }
  }

  return Array.from(powerfulIntegers);
};
