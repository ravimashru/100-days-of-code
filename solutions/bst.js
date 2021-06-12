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
  }

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
  }

  delete = (value, parent = this) => {

    if (this.data === value) {

      if (this.left === null && this.right === null) {
        if (this === parent.left) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      } else if (this.left !== null & this.right === null) {
        let par = this;
        let temp = this.left;
        while (temp.right) {
          par = temp;
          temp = temp.right;
        }
        this.data = temp.data;
        if (temp.left) {
          par.right = temp.left;
        } else if (par.left === temp) {
          par.left = null;
        } else {
          par.right = null;
        }
      } else {
        let par = this;
        let temp = this.right;
        while (temp.left) {
          par = temp;
          temp = temp.left
        }
        this.data = temp.data;
        if (temp.right) {
          par.left = temp.right
        } else if (par.left === temp) {
          par.left = null;
        } else {
          par.right = null;
        }
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

  }

  printInOrder = () => {
    if (this.left !== null) {
      this.left.printInOrder();
    }
    console.log(this.data);
    if (this.right !== null) {
      this.right.printInOrder();
    }
  }
};
