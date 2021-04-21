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
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let queue = [root];
  let sum;

  while (queue.length > 0) {
    let tempQueue = [];
    sum = 0;

    while (queue.length > 0) {
      const item = queue.shift();
      sum += item.val;
      if (item.left) {
        tempQueue.push(item.left);
      }
      if (item.right) {
        tempQueue.push(item.right);
      }
    }

    if (tempQueue.length > 0) {
      queue = tempQueue;
      sum = 0;
    }
  }

  return sum;
};
