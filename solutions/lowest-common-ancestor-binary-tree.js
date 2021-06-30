/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let pPath;
  let qPath;

  const stack = [];
  function dfs(node) {
    stack.push(node);

    if (node === p) {
      pPath = stack.slice();
    } else if (node === q) {
      qPath = stack.slice();
    }

    if (node.left) {
      dfs(node.left);
    }

    if (node.right) {
      dfs(node.right);
    }

    stack.pop();
  }

  dfs(root);

  let i = 0;
  while (pPath[i] === qPath[i]) {
    i++;
  }
  return pPath[i - 1];
};
