/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) {
    return null;
  }

  const nodes = new Map();

  const root = dfs(node);

  function dfs(old) {
    if (nodes.has(old.val)) {
      return nodes.get(old.val);
    }

    const newNode = new Node(old.val);
    nodes.set(old.val, newNode);

    for (let i = 0; i < old.neighbors.length; i++) {
      newNode.neighbors.push(dfs(old.neighbors[i]));
    }

    return newNode;
  }

  return root;
};
