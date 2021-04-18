/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }

  const digitToChars = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  if (digits.length === 1) {
    return digitToChars[digits];
  }

  let result = digitToChars[digits[0]];

  for (let i = 1; i < digits.length; i++) {
    const newResult = [];
    const suffixes = digitToChars[digits[i]];

    result.forEach((prefix) => {
      suffixes.forEach((suffix) => {
        newResult.push(prefix + suffix);
      });
    });

    result = newResult;
  }

  return result;
};
