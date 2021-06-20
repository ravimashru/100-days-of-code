/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.inputStack = [];
  this.outputStack = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inputStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.outputStack.length === 0) {
    while (this.inputStack.length > 0) {
      this.outputStack.push(this.inputStack.pop());
    }
  }
  return this.outputStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.outputStack.length === 0) {
    while (this.inputStack.length > 0) {
      this.outputStack.push(this.inputStack.pop());
    }
  }
  return this.outputStack[this.outputStack.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.inputStack.length === 0 && this.outputStack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
