/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {

  this.makeNode = function(val) {
    return { val, next: null };
  };

  this.head = null;

};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {

  let idx = 0;
  let temp = this.head;

  while (temp && idx !== index) {
    idx++;
    temp = temp.next
  }

  if (temp && idx === index) {
    return temp.val;
  }

  return -1;

};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {

  const newNode = this.makeNode(val);
  newNode.next = this.head;
  this.head = newNode;

};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {

  if (this.head === null) {
    return this.addAtHead(val);
  }

  let temp = this.head;
  while (temp.next) {
    temp = temp.next;
  }

  temp.next = this.makeNode(val);

};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {

  if (index === 0) {

    if (this.head === null) {
      this.addAtHead(val);
    } else {
      const newNode = this.makeNode(val);
      newNode.next = this.head;
      this.head = newNode;
    }

  } else if (this.head !== null) {

    let idx = 0;
    let temp = this.head;

    while (temp.next && idx !== index - 1) {
      idx++;
      temp = temp.next;
    }

    if (idx === index - 1) {
      const newNode = this.makeNode(val);
      newNode.next = temp.next;
      temp.next = newNode;
    }
  }


};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {

  if (index === 0) {
    return this.head ? this.head = this.head.next: null;
  }

  let idx = 0;
  let temp = this.head;

  while (temp && temp.next && idx !== index - 1) {
    idx++;
    temp = temp.next;
  }

  if (temp && temp.next && idx === index - 1) {
    temp.next = temp.next.next;
  }

};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
