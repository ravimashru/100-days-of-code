/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const answer = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    const t = temperatures[i];

    while (stack.length !== 0 && stack[stack.length - 1].t < t) {
      answer[stack[stack.length - 1].i] = i - stack[stack.length - 1].i;
      stack.pop();
    }

    stack.push({ t, i });
  }

  return answer;
};
