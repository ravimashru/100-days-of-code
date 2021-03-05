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
var averageOfLevels = function (root) {
  const averages = [];

  let currentQueue = [];
  let nextQueue = [root];

  while (nextQueue.length !== 0) {
    let runningSum = 0;
    let runningCount = 0;
    currentQueue = nextQueue;
    nextQueue = [];
    while (currentQueue.length !== 0) {
      const element = currentQueue.shift();
      if (element.left) {
        nextQueue.push(element.left);
      }

      if (element.right) {
        nextQueue.push(element.right);
      }

      runningCount++;
      runningSum += element.val;
    }
    averages.push(runningSum / runningCount);
  }

  return averages;
};
