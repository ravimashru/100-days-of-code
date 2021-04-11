/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {

  let length = 0;
  let temp = head;
  while (temp) {
    length++;
    temp = temp.next;
  }

  // Edge cases: length 1, 2 or 3
  if (length === 1) {
    return true;
  } else if (length === 2) {
    return head.val === head.next.val;
  } else if (length === 3) {
    return head.val === head.next.next.val;
  }

  // 4 or more nodes in linked list

  const hasEvenNodes = length % 2 === 0;

  const midIndex = hasEvenNodes ? (length / 2) - 1 : Math.floor(length / 2);

  let mid = head;
  let currentIndex = 0;
  while (currentIndex < midIndex) {
    mid = mid.next;
    currentIndex++;
  }

  let prev = null;
  let slow = mid.next;
  let fast = slow.next;

  while (fast) {

    slow.next = prev;
    prev = slow;
    slow = fast;
    fast = fast.next;

  }

  slow.next = prev;
  mid.next = slow;

  let t1 = head;
  let t2 = mid.next;

  if (hasEvenNodes) {
    mid = mid.next;
  }

  let isPalindrome = true;
  while (t1 !== mid) {

    if (t1.val === t2.val) {
      t1 = t1.next;
      t2 = t2.next;
    } else {
      isPalindrome = false;
      break;
    }

  }

  return isPalindrome;


};