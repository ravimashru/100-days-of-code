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
  const lengthA = getListLength(headA);
  const lengthB = getListLength(headB);

  let ptrA = headA;
  let ptrB = headB;

  if (lengthA > lengthB) {
    ptrA = movePtrNItemsForward(headA, lengthA - lengthB);
  } else if (lengthB > lengthA) {
    ptrB = movePtrNItemsForward(headB, lengthB - lengthA);
  }

  while (ptrA !== ptrB) {
    ptrA = ptrA.next;
    ptrB = ptrB.next;
  }

  return ptrA;
};

var getListLength = function (head) {
  let length = 0;
  let ptr = head;
  while (ptr) {
    length++;
    ptr = ptr.next;
  }
  return length;
};

var movePtrNItemsForward = function (head, n) {
  let ptr = head;
  for (let i = 0; i < n; i++) {
    ptr = ptr.next;
  }
  return ptr;
};
