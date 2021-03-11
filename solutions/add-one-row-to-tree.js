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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function (root, v, d) {
  if (d === 1) {
    const newRoot = new TreeNode(v, root);
    return newRoot;
  }

  root.left = addRowAtLevel(root.left, d - 1, v, "L");
  root.right = addRowAtLevel(root.right, d - 1, v, "R");

  return root;
};

var addRowAtLevel = function (node, level, value, childDirection) {
  if (level === 1) {
    const leftChild = childDirection === "L" ? node : null;
    const rightChild = childDirection === "R" ? node : null;
    const newNode = new TreeNode(value, leftChild, rightChild);
    return newNode;
  }

  if (!node) {
    return node;
  }

  node.left = addRowAtLevel(node.left, level - 1, value, "L");
  node.right = addRowAtLevel(node.right, level - 1, value, "R");
  return node;
};
