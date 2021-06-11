const BSTNode = require('./bst');

const tree = new BSTNode(1);
tree.insert(8);
tree.insert(1);
tree.insert(2);
tree.insert(2);
tree.insert(9);

tree.printInOrder();

