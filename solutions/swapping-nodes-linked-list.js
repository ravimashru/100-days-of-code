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
var swapNodes = function (head, k) {
  k = k - 1;

  const values = [];
  let temp = head;
  while (temp) {
    values.push(temp.val);
    temp = temp.next;
  }

  const t = values[k];
  values[k] = values[values.length - k - 1];
  values[values.length - k - 1] = t;

  const newHead = new ListNode(values[0]);
  temp = newHead;
  for (let i = 1; i < values.length; i++) {
    temp.next = new ListNode(values[i]);
    temp = temp.next;
  }

  return newHead;
};
