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
var addTwoNumbers = function(l1, l2) {

  const head = new ListNode();
  let result = head;
  let carry = 0;

  while (l1 && l2) {

    const sum = l1.val + l2.val + carry;
    carry = Math.floor(sum / 10);
    result.next = new ListNode(sum % 10);
    result = result.next;
    l1 = l1.next;
    l2 = l2.next;

  }

  while (l1) {
    const sum = l1.val + carry;
    carry = Math.floor(sum / 10);
    result.next = new ListNode(sum % 10);
    result = result.next;
    l1 = l1.next;
  }

  while (l2) {
    const sum = l2.val + carry;
    carry = Math.floor(sum / 10);
    result.next = new ListNode(sum % 10);
    result = rsult.next;
    l2 = l2.next;
  }

  if (carry !== 0) {
    result.next = new ListNode(carry);
  }

  return head.next;

};
