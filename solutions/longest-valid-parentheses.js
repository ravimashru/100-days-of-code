/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const stack = [];
  const valid = new Array(s.length).fill(0);

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (c === "(") {
      stack.push(i);
    } else if (stack.length > 0) {
      const openingIndex = stack.pop();
      valid[openingIndex] = 1;
      valid[i] = 1;
    }
  }

  return valid
    .join("")
    .split("0")
    .reduce((acc, e) => Math.max(acc, e.length), 0);
};
