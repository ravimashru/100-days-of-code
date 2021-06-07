/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {

  if (!head || !head.next) {
    return head;
  }

  let first = head;
  let second = head.next;
  const fsn = second;

  while (first.next) {

    first.next = second.next;
    if (first.next) {
      second.next = first.next.next;
      first = first.next;
      second = second.next;
    } else {
      break;
    }

  }

  first.next = fsn;

  return head;

};
