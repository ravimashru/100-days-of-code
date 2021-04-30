/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  const result = [];

  let stack = [];

  if (root) {
    stack.push(root);
  }

  while (stack.length > 0) {
    const item = stack.shift();

    result.push(item.val);
    stack.unshift(...item.children);
  }

  return result;
};
