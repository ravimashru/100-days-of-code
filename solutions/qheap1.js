function processData(input) {
  const inputLines = input.split('\n');
  for (let i = 1; i < inputLines.length; i++) {
    const [query, param] = inputLines[i].split(' ');
    processQuery(parseInt(query), parseInt(param));
  }
}

function processQuery(query, param) {
  if (query === 1) {
    heap.push(param);
    heapifyUp();
  } else if (query === 2) {
    const index = findIndex(param);
    heap[index] = heap[heap.length - 1];
    heap.pop();
    heapifyDown(index);
  } else {
    process.stdout.write(heap[1] + '\n');
  }
}

function heapifyUp() {
  let i = heap.length - 1;
  let parent = i >> 1;
  while (parent > 0 && heap[parent] > heap[i]) {
    const temp = heap[parent];
    heap[parent] = heap[i];
    heap[i] = temp;

    i = parent;
    parent = parent >> 1;
  }
}

function findIndex(value) {
  for (let i = 1; i < heap.length; i++) {
    if (heap[i] === value) {
      return i;
    }
  }
}

function heapifyDown(startIndex) {
  let i = startIndex;
  while (i << 1 < heap.length) {
    let smallerChildIdx = i << 1;
    const r = (i << 1) | 1;
    if (r < heap.length && heap[r] < heap[smallerChildIdx]) {
      smallerChildIdx = r;
    }

    if (heap[i] < heap[smallerChildIdx]) {
      break;
    } else {
      const temp = heap[i];
      heap[i] = heap[smallerChildIdx];
      heap[smallerChildIdx] = temp;
    }
    i = smallerChildIdx;
  }
}

var heap = [,];

process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', function (input) {
  _input += input;
});

process.stdin.on('end', function () {
  processData(_input);
});
