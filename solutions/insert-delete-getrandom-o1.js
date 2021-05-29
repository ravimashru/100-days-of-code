/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.arr = [];
  this.map = new Map();
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) {
    return false;
  }

  this.arr.push(val);
  this.map.set(val, this.arr.length - 1);
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.map.has(val)) {
    const idx = this.map.get(val);

    this.arr[idx] = this.arr[this.arr.length - 1];
    this.map.set(this.arr[idx], idx);

    this.arr.pop();

    this.map.delete(val);

    return true;
  }
  return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const idx = Math.floor(Math.random() * this.arr.length);
  return this.arr[idx];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
