/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (c >= "0" && c <= "9") {
      stack.push(+c);
    } else if (c === "]") {
      let str = "";
      while (stack[stack.length - 1] !== "[") {
        str = stack.pop() + str;
      }
      stack.pop();

      let count = 0;
      let multiplier = 1;
      while (typeof stack[stack.length - 1] === "number") {
        count += multiplier * stack.pop();
        multiplier *= 10;
      }

      let repeatedStr = "";
      for (let k = 0; k < count; k++) {
        repeatedStr += str;
      }
      stack.push(repeatedStr);
    } else {
      stack.push(c);
    }
  }

  return stack.join("");
};
