/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {

  const newHead = new ListNode();
  let newList = newHead;

  let temp = head;
  while (temp) {

    if (temp.val !== val) {
      newList.next = new ListNode(temp.val);
      newList = newList.next;
    }

    temp = temp.next;

  }

  return newHead.next;

};
