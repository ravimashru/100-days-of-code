/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let firstSmallNode = null;
  let smallerNodes;

  let firstLargeNode = null;
  let largerNodes;

  let temp = head;
  while (temp != null) {
    if (temp.val < x) {
      if (smallerNodes) {
        smallerNodes.next = temp;
        smallerNodes = temp;
      } else {
        firstSmallNode = smallerNodes = temp;
      }
    } else {
      if (largerNodes) {
        largerNodes.next = temp;
        largerNodes = temp;
      } else {
        firstLargeNode = largerNodes = temp;
      }
    }

    temp = temp.next;
  }

  if (largerNodes) {
    largerNodes.next = null;
  }

  if (smallerNodes) {
    smallerNodes.next = firstLargeNode;
  }

  return firstSmallNode || firstLargeNode || null;
};
