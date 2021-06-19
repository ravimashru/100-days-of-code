/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  const stack = [root];
  const result = [];
  const visited = new Set();

  while (stack.length > 0) {
    const top = stack[stack.length - 1];
    if (top.left && !visited.has(top.left)) {
      stack.push(top.left);
      continue;
    }

    result.push(top.val);
    visited.add(stack.pop());

    if (top.right && !visited.has(top.right)) {
      stack.push(top.right);
    }
  }

  return result;
};
