/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  const newList = new ListNode();
  let l = newList;

  while (l1 && l2) {
    if (l2.val > l1.val) {
      l.next = l1;
      l1 = l1.next;
      l = l.next;
    } else {
      l.next = l2;
      l2 = l2.next;
      l = l.next;
    }
  }

  if (l1) {
    l.next = l1;
  }

  if (l2) {
    l.next = l2;
  }

  return newList.next;
};
