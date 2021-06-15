/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.data = new Array(k);
  this.size = k;
  this.front = -1;
  this.back = -1;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isEmpty()) {
    this.data[0] = value;
    this.front = this.back = 0;
    return true;
  } else if (this.isFull()) {
    return false;
  } else {
    this.back = (this.back + 1) % this.size;
    this.data[this.back] = value;
    return true;
  }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) {
    return false;
  } else if (this.front === this.back) {
    this.front = -1;
    this.back = -1;
    return true;
  } else {
    this.front = (this.front + 1) % this.size;
    return true;
  }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.isEmpty() ? -1 : this.data[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.isEmpty() ? -1 : this.data[this.back];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.front === -1 && this.back === -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return (
    (this.front === 0 && this.back === this.size - 1) ||
    this.back === this.front - 1
  );
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
