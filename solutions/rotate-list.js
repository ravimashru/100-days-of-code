/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) {
    return head;
  }

  let temp = head;
  let n = 0;
  while (temp) {
    n++;
    temp = temp.next;
  }

  if (k > n) {
    k = k % n === 0 ? n : k - n * Math.floor(k / n);
  }

  let newStartIdx = n - k;

  if (newStartIdx === 0) {
    return head;
  }

  let newHead = head,
    prev;
  while (newStartIdx > 0) {
    prev = newHead;
    newHead = newHead.next;
    newStartIdx--;
  }

  prev.next = null;

  temp = newHead;
  while (temp.next) {
    temp = temp.next;
  }
  temp.next = head;
  return newHead;
};
