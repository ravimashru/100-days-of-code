const BSTNode = require('./bst');
const assert = require('assert');

const tree = new BSTNode(1);
tree.insert(8);
tree.insert(1);
tree.insert(2);
tree.insert(2);
tree.insert(9);
assert.deepStrictEqual(tree.getNodesInOrder(), [1, 1, 2, 2, 8, 9], "In-order 1 not right");
assert.deepStrictEqual(tree.getNodesPreOrder(), [1, 1, 8, 2, 2, 9], "Pre-order 1 not right");

tree.delete(2);
tree.delete(11);
tree.delete(8);

assert.deepStrictEqual(tree.getNodesInOrder(), [1, 1, 2, 9], "In-order 2 not right");
assert.deepStrictEqual(tree.getNodesPreOrder(), [1, 1, 9, 2], "Pre-order 2 not right");

tree.insert(8);
tree.insert(2);

assert.deepStrictEqual(tree.getNodesInOrder(), [1, 1, 2, 2, 8, 9], "In-order 3 not right");
assert.deepStrictEqual(tree.getNodesPreOrder(), [1, 1, 9, 2, 2, 8], "Pre-order 3 not right");
