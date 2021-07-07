/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  let countToRemove = Math.ceil(arr.length / 2);

  const heap = [];

  const swap = (idx1, idx2) => {
    const temp = heap[idx1];
    heap[idx1] = heap[idx2];
    heap[idx2] = temp;
  };

  const heapifyUp = () => {
    let curr = heap.length - 1;
    while (Math.floor((curr - 1) / 2) >= 0) {
      const parent = Math.floor((curr - 1) / 2);
      if (heap[parent].count < heap[curr].count) {
        swap(curr, parent);
        curr = parent;
      } else {
        break;
      }
    }
  };

  const heapifyDown = () => {
    let curr = 0;
    while (2 * curr + 1 < heap.length) {
      let bigger = curr;
      const left = 2 * curr + 1;
      const right = 2 * curr + 2;
      if (heap[left].count > heap[bigger].count) {
        bigger = left;
      }
      if (right < heap.length && heap[right].count > heap[bigger].count) {
        bigger = right;
      }
      if (bigger !== curr) {
        swap(bigger, curr);
        curr = bigger;
      } else {
        break;
      }
    }
  };

  const insert = (obj) => {
    heap.push(obj);
    heapifyUp();
  };

  const remove = () => {
    const itemToReturn = heap[0];
    heap[0] = heap.pop();
    heapifyDown();
    return itemToReturn;
  };

  const counts = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (counts.has(arr[i])) {
      counts.set(arr[i], 1 + counts.get(arr[i]));
    } else {
      counts.set(arr[i], 1);
    }
  }

  for (let [num, count] of counts) {
    insert({ num, count });
  }

  let res = 0;
  while (countToRemove > 0) {
    countToRemove -= remove().count;
    res++;
  }
  return res;
};
