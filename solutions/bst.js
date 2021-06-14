module.exports = class BSTNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert = (value) => {
    if (value <= this.data) {
      if (this.left === null) {
        this.left = new BSTNode(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BSTNode(value);
      } else {
        this.right.insert(value);
      }
    }
  };

  contains = (value) => {
    if (value === this.data) {
      return true;
    } else if (value < this.data) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  };

  delete = (value, parent = this) => {
    if (this.data === value) {
      if (this.left === null && this.right === null) {
        if (this === parent.left) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      } else if (this.left !== null && this.right === null) {
        if (this === parent.left) {
          parent.left = this.left;
        } else {
          parent.right = this.left;
        }
      } else if (this.left === null && this.right !== null) {
        if (this === parent.left) {
          parent.left = this.right;
        } else {
          parent.right = this.right;
        }
      } else {
        this.data = this.right.getMinValue();
        this.right.delete(this.data, this);
      }
    } else if (value < this.data) {
      if (this.left !== null) {
        return this.left.delete(value, this);
      } else {
        return false;
      }
    } else {
      if (this.right !== null) {
        return this.right.delete(value, this);
      } else {
        return false;
      }
    }
  };

  getMinValue = () => {
    if (this.left) {
      return this.left.getMinValue();
    }
    return this.data;
  };

  printInOrder = () => {
    console.log(this.getNodesInOrder());
  };

  getNodesInOrder = () => {
    const res = [];
    if (this.left !== null) {
      res.push(...this.left.getNodesInOrder());
    }
    res.push(this.data);
    if (this.right !== null) {
      res.push(...this.right.getNodesInOrder());
    }
    return res;
  };

  getNodesPreOrder = () => {
    const res = [this.data];
    if (this.left !== null) {
      res.push(...this.left.getNodesPreOrder());
    }
    if (this.right !== null) {
      res.push(...this.right.getNodesPreOrder());
    }
    return res;
  };

  getNodesPostOrder = () => {
    const res = [];
    if (this.left !== null) {
      res.push(...this.left.getNodesPostOrder());
    }
    if (this.right !== null) {
      res.push(...this.right.getNodesPostOrder());
    }
    res.push(this.data);
    return res;
  };

};
