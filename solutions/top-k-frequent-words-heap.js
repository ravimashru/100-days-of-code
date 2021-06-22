/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const word2count = new Map();

  words.forEach((word) => {
    if (word2count.has(word)) {
      word2count.set(word, word2count.get(word) + 1);
    } else {
      word2count.set(word, 1);
    }
  });

  const h = new Heap();
  for (const [word, count] of word2count) {
    h.add({ word, count });
    if (h.getSize() > k) {
      h.remove();
    }
  }

  const res = [];
  while (h.getSize() > 0) {
    res.unshift(h.remove().word);
  }
  return res;
};

function Heap() {
  this.arr = [];
}

Heap.prototype.getSize = function () {
  return this.arr.length;
};

Heap.prototype.add = function (o) {
  this.arr.push(o);
  this.heapifyUp();
};

Heap.prototype.heapifyUp = function () {
  let i = this.arr.length - 1;
  while (this.hasParent(i) && this.isLessThan(i, this.getParentIndex(i))) {
    this.swap(this.getParentIndex(i), i);
    i = this.getParentIndex(i);
  }
};

Heap.prototype.hasParent = function (index) {
  return Math.floor((index - 1) / 2) >= 0;
};

Heap.prototype.isLessThan = function (a, b) {
  const itemA = this.arr[a];
  const itemB = this.arr[b];

  if (itemA.count !== itemB.count) {
    return itemA.count < itemB.count;
  }

  return itemA.word > itemB.word;
};

Heap.prototype.getParentIndex = function (index) {
  return Math.floor((index - 1) / 2);
};

Heap.prototype.remove = function () {
  const itemToReturn = this.arr[0];

  this.arr[0] = this.arr[this.arr.length - 1];
  this.arr.pop();
  this.heapifyDown(0);

  return itemToReturn;
};

Heap.prototype.heapifyDown = function (i) {
  const l = 2 * i + 1;
  const r = 2 * i + 2;
  let smallest = i;

  if (l < this.arr.length && this.isLessThan(l, smallest)) {
    smallest = l;
  }

  if (r < this.arr.length && this.isLessThan(r, smallest)) {
    smallest = r;
  }

  if (smallest !== i) {
    this.swap(smallest, i);
    this.heapifyDown(smallest);
  }
};

Heap.prototype.swap = function (a, b) {
  const temp = this.arr[a];
  this.arr[a] = this.arr[b];
  this.arr[b] = temp;
};
