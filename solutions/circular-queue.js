/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.data = new Array(k);
  this.size = k;
  this.front = 0;
  this.back = 0;
  this.empty = true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.front === this.back && !this.empty) {
    return false;
  }
  this.data[this.back] = value;
  this.back = (this.back + 1) % this.size;
  this.empty = false;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.front === this.back && this.empty) {
    return false;
  }

  this.front = (this.front + 1) % this.size;
  if (this.front === this.back) {
    this.empty = true;
  }
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.empty ? -1 : this.data[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.empty
    ? -1
    : this.data[this.back === 0 ? this.size - 1 : this.back - 1];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.empty;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.front === this.back && !this.empty;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
