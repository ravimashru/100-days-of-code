# Day 27

**Problem**: [(Leetcode) 1302. Deepest Leaves Sum](https://leetcode.com/problems/deepest-leaves-sum/)  
**Difficulty**: Medium

---

**Solution**: [JavaScript](../solutions/deepest-leaves-sum.js)

**Time complexity**: O(n) where `n` is the number of nodes in the tree, since we iterate through every node in the tree.

**Space complexity**: O(2^h) where `h` is the height of the tree, since in the worst case (full binary tree) there are 2^h leaf nodes that will be added to the queue at once.

