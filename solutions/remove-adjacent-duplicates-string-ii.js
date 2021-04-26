/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  const stack = [];

  Array.from(s).forEach((c) => {
    const top = stack[stack.length - 1];
    if (stack.length > 0 && top.val === c) {
      top.count++;

      if (top.count === k) {
        stack.pop();
      }
    } else {
      stack.push({ val: c, count: 1 });
    }
  });

  const repeatChar = (character, times) => {
    let res = "";
    for (let i = 0; i < times; i++) {
      res += character;
    }
    return res;
  };

  let result = "";
  stack.forEach((e) => {
    result += repeatChar(e.val, e.count);
  });

  return result;
};
