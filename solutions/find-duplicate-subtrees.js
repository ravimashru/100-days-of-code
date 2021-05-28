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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const hashes = new Map();
  const result = [];

  const hash = (node) => {
    if (!node) {
      return;
    }

    let key = "";
    const l = hash(node.left);
    if (l) {
      key += l + "<";
    }
    key += node.val;
    const r = hash(node.right);
    if (r) {
      key += ">" + r;
    }

    if (hashes.has(key)) {
      if (hashes.get(key) === false) {
        result.push(node);
        hashes.set(key, true);
      }
    } else {
      hashes.set(key, false);
    }

    return key;
  };

  hash(root);
  return result;
};
