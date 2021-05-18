# Day 51

Maps/Dictionaries in [Google Tech Dev Guide](https://techdevguide.withgoogle.com/paths/data-structures-and-algorithms/)

- [Quick intro to hash maps](https://www.youtube.com/watch?v=eMymKAFYaCs)
- [How hashmaps work](https://www.youtube.com/watch?v=h2d9b_nEzoA)
- [Design a Hash Table - Interactive tutorial - Leetcode](https://leetcode.com/explore/learn/card/hash-table/)

## Implementing a Hash Set in JavaScript

```javascript
/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
  this.table = {};
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  if (!(key in this.table)) {
    this.table[key] = true;
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  if (key in this.table) {
    delete this.table[key];
  }
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return key in this.table;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
```

## Implementing a Hash Map in JavaScript

```javascript
/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
  this.table = {};
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.table[key] = value;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  let res = -1;
  if (key in this.table) {
    res = this.table[key];
  }
  return res;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  delete this.table[key];
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
```
