# Day 4

**Problem**: [(Leetcode) 160. Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/)  
**Difficulty**: Easy

---

**Solution**: [JavaScript I](../solutions/intersect-linked-list-1.js)

**Time complexity**: O(M+N) where M and N are the sizes of the two linked lists respectively. This is because we need to add all the nodes in one linked list to the set (which takes constant time, repeated M times). Then, we need to check if any of the nodes in the second list are in the set. In the worst case, we have to check every node (which takes constant time, repeated N times).

**Space complexity**: O(N) since we need to store all the nodes from one of the lists in a set.

---

**Solution**: [JavaScript II](../solutions/intersect-linked-list-2.js)

**Time complexity**: O(M+N) because we need to traverse both linked lists once to get their respective lengths.

**Space complexity**: O(1) since we need constant space to store the lengths of the two lists and the temporary pointers we use to traverse them.