/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const old2NewMap = new Map();

  const newHead = new Node();
  let ptr = newHead;

  let temp = head;
  while (temp) {
    if (old2NewMap.has(temp)) {
      ptr.next = old2NewMap.get(temp);
    } else {
      const newNode = new Node(temp.val);
      ptr.next = newNode;
      old2NewMap.set(temp, newNode);
    }

    ptr = ptr.next;

    if (temp.random) {
      if (old2NewMap.has(temp.random)) {
        ptr.random = old2NewMap.get(temp.random);
      } else {
        const newRandomNode = new Node(temp.random.val);
        ptr.random = newRandomNode;
        old2NewMap.set(temp.random, newRandomNode);
      }
    }

    temp = temp.next;
  }
  return newHead.next;
};
