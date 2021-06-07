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
var reverseList = function(head) {

  let ptr = head;

  while (ptr && ptr.next) {

    const next = ptr.next;
    ptr.next = ptr.next.next;
    next.next = head;
    head = next;

  }

  return head;

};
