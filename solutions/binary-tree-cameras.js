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
var minCameraCover = function (root) {
  let cameras = 0;

  /*
  1 = has camera
  0 = covered by camera
  -1 = needs coverage
  */
  const explore = (node) => {
    if (node === null) {
      return 0;
    }

    const left = explore(node.left);
    const right = explore(node.right);

    if (left === -1 || right === -1) {
      cameras++;
      return 1;
    }

    if (left === 0 && right === 0) {
      return -1;
    }

    if (left === 1 || right === 1) {
      return 0;
    }
  };

  const res = explore(root);
  if (res === -1) {
    cameras++;
  }

  return cameras;
};
