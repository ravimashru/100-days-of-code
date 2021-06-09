/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (!head) {
    return head;
  }

  let temp = head;
  const flattenedRemainder = flatten(head.next);

  if (head.child) {
    const flatChild = flatten(head.child);
    head.next = flatChild;
    head.child = null;
    flatChild.prev = head;
    temp = head.next;
    while (temp.next) {
      temp = temp.next;
    }
  }

  temp.next = flattenedRemainder;
  if (flattenedRemainder) {
    flattenedRemainder.prev = temp;
  }

  return head;
};
