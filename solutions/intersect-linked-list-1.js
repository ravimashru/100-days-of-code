/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const nodesInA = new Set();
  let ptr = headA;
  while (ptr) {
    nodesInA.add(ptr);
    ptr = ptr.next;
  }

  let intersection = null;
  ptr = headB;
  while (ptr) {
    if (nodesInA.has(ptr)) {
      intersection = ptr;
      break;
    }
    ptr = ptr.next;
  }

  return intersection;
};
