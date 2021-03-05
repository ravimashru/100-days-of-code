# Day 5

**Problem**: [(Leetcode) 637. Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/submissions/)  
**Difficulty**: Easy

---

**Solution**: [JavaScript](../solutions/avg-of-levels-bin-tree.js)

**Time complexity**: O(n) since all nodes are visited once (using breadth first search).

**Space complexity**: O(w) where w is the maximum number of nodes at any level in the binary tree, because the `nextQueue` holds at most all nodes in the next level of the binary tree during execution.
