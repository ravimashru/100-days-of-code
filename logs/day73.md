# Day 73

## Implementing a Hash Map in JavaScript

```javascript
/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
  this.table = [];
  this.capacity = 100;

  for (let i = 0; i < this.capacity; i++) {
    this.table[i] = null;
  }

  this.hash = (key) => {
    return key % this.capacity;
  };
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const hash = this.hash(key);
  this.remove(key);
  this.table[hash] = { key, value, next: this.table[hash] };
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const hash = this.hash(key);
  if (this.table[hash] === null) {
    return -1;
  }

  let head = this.table[hash];
  while (head) {
    if (head.key === key) {
      return head.value;
    }
    head = head.next;
  }
  return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const hash = this.hash(key);

  let head = this.table[hash];

  if (head === null) {
    return;
  }

  if (head.key === key) {
    this.table[hash] = head.next;
    return;
  }

  while (head.next) {
    if (head.next.key === key) {
      head.next = head.next.next;
      return;
    }
    head = head.next;
  }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
```
