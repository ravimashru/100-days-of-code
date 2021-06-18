/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    switch (tokens[i]) {
      case '+':
        stack.push(stack.pop() + stack.pop());
        break;

      case '-':
        const sub = stack.pop();
        stack.push(stack.pop() - sub);
        break;

      case '*':
        stack.push(stack.pop() * stack.pop());
        break;

      case '/':
        const den = stack.pop();
        const res = stack.pop() / den;
        stack.push(res < 0 ? Math.ceil(res) : Math.floor(res));
        break;

      default:
        stack.push(+tokens[i]);
    }
  }

  return stack[0];
};
