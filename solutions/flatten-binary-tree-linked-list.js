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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (root) {
    flatten(root.left);
    flatten(root.right);

    const temp = root.right;

    root.right = root.left;

    let t = root,
      prev = root;
    while (t) {
      prev = t;
      t = t.right;
    }

    if (prev) {
      prev.right = temp;
    }

    root.left = null;
  }
};
