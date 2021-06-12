const BSTNode = require('./bst');

const tree = new BSTNode(1);
tree.insert(8);
tree.insert(1);
tree.insert(2);
tree.insert(2);
tree.insert(9);

tree.delete(2);
tree.delete(11);
tree.delete(8);

tree.insert(8);
tree.insert(2);

tree.printInOrder();
